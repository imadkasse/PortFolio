"use client";

import { useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { personal } from "@/lib/data";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link href="/" className="text-xl font-black tracking-tighter">
              IK<span className="text-indigo-400">.</span>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a href="#skills" className="hover:text-indigo-400 transition-colors">Skills</a>
                <a href="#projects" className="hover:text-indigo-400 transition-colors">Projects</a>
                <a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a>
              </div>
              <ThemeToggle />
              
              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      <div
        className={`md:hidden fixed inset-0 z-[60] bg-slate-950 transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          <div className="flex flex-col space-y-6">
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-indigo-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-indigo-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-2xl font-bold hover:text-indigo-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="mt-auto border-t border-white/10 pt-6">
            <p className="text-sm text-slate-400 mb-4">Connect with me</p>
            <div className="flex gap-4">
              <a
                href={personal.github}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 transition-all"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
