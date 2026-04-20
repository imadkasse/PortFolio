"use client";

import { personal } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-[--border] mt-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2 font-display">
            <span className="text-2xl font-black">IK</span>
            <span className="text-[--primary]">.</span>
          </div>
          <p className="text-[--muted-foreground] text-sm">
            © {new Date().getFullYear()} {personal.name}. Built with passion.
          </p>
          <div className="flex gap-6">
            <a
              href={personal.github}
              className="text-[--muted-foreground] hover:text-[--primary] transition-colors">
              <Github className="h-6 w-6" />
            </a>
            <a
              href={personal.linkedin}
              className="text-[--muted-foreground] hover:text-[--primary] transition-colors">
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href={`mailto:${personal.email}`}
              className="text-[--muted-foreground] hover:text-[--primary] transition-colors">
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}