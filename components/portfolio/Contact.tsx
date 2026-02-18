"use client";

import { personal } from "@/lib/data";
import { Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="text-center space-y-6 py-16">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight">
        Ready to{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
          build
        </span>{" "}
        something?
      </h2>
      <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto">
        I&apos;m always excited to work on new projects. Let&apos;s create
        something amazing together.
      </p>
      <a
        href={`mailto:${personal.email}`}
        className="inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-400 hover:to-purple-400 text-white font-bold rounded-full text-base sm:text-lg transition-all hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/25">
        <Mail className="h-5 w-5 sm:h-6 sm:w-6" />
        Start a Conversation
      </a>
    </section>
  );
}
