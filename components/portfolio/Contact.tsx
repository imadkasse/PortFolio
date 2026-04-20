"use client";

import { personal } from "@/lib/data";
import { Mail, ArrowRight, Zap } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 bg-[--secondary]">
        <Zap className="h-3.5 w-3.5 text-[--primary]" />
        <span className="text-label">
          Get In Touch
        </span>
      </div>
      
      <h2 className="font-display font-black text-h1 tracking-tight mb-4">
        Ready to{" "}
        <span className="text-[--primary]">
          build
        </span>{" "}
        something?
      </h2>
      <p className="text-body text-[--muted-foreground] max-w-md mx-auto mb-8">
        I&apos;m always excited to work on new projects. Let&apos;s create something amazing together.
      </p>
      <a
        href={`mailto:${personal.email}`}
        className="group inline-flex items-center gap-2.5 px-8 py-4 bg-[--primary] hover:bg-[--primary]/90 text-[--primary-foreground] font-bold transition-all hover:translate-x-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:ring-offset-[--background]"
      >
        <Mail className="h-4 w-4" />
        Start a Conversation
        <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
      </a>
    </section>
  );
}