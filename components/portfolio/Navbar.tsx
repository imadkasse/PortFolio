"use client";

import { useState } from "react";
import { Github, Linkedin, Mail, Menu, X } from "lucide-react";
import Link from "next/link";
import { personal } from "@/lib/data";
import { ThemeToggle } from "../theme-toggle";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[--border] bg-[--background]/90 backdrop-blur-xl">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link
              href="/"
              className="font-display text-xl font-black tracking-tight">
              IK<span className="text-[--primary]">.</span>
            </Link>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-8 text-sm font-medium">
                <a
                  href="#skills"
                  className="hover:text-[--primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
                  Skills
                </a>
                <a
                  href="#projects"
                  className="hover:text-[--primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
                  Projects
                </a>
                <a
                  href="#contact"
                  className="hover:text-[--primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
                  Contact
                </a>
                <ThemeToggle />
              </div>

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 hover:bg-[--muted] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]"
                aria-label="Toggle menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu">
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div
        id="mobile-menu"
        className={`md:hidden fixed inset-0 z-[60] bg-[--background]/95 backdrop-blur-xl transition-transform duration-300 ease-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu">
        <div className="flex flex-col h-full pt-20 px-6 pb-6">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-4 p-2 hover:bg-[--muted] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]"
            aria-label="Close menu"
          >
            <X className="h-6 w-6" />
          </button>
          
          <div className="flex flex-col space-y-6 font-display">
            <a
              href="#skills"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold hover:text-[--primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
              Skills
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold hover:text-[--primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-3xl font-bold hover:text-[--primary] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
              Contact
            </a>
          </div>
          
          <div className="mt-8">
            <ThemeToggle />
          </div>
          
          <div className="mt-auto border-t border-[--border] pt-6">
            <p className="text-sm text-[--muted-foreground] mb-4">
              Connect with me
            </p>
            <div className="flex gap-4">
              <a
                href={personal.github}
                className="p-3 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]"
                aria-label="GitHub profile">
                <Github className="h-5 w-5" />
              </a>
              <a
                href={personal.linkedin}
                className="p-3 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]"
                aria-label="LinkedIn profile">
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${personal.email}`}
                className="p-3 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]"
                aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
