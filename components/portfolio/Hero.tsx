"use client";

import { personal } from "@/lib/data";
import { Github, Linkedin, Mail } from "lucide-react";

export function Hero() {
  const firstName = personal.name.split(" ")[0];
  const lastName = personal.name.split(" ")[1];

  return (
    <section className="min-h-[70vh] flex flex-col justify-center space-y-8">
      <div className="space-y-4">
        <p className="text-indigo-400 font-medium tracking-wide uppercase text-sm">
          Fullstack Developer
        </p>
        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
          {firstName}
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-cyan-400">
            {lastName}
          </span>
        </h1>
      </div>
      
      <p className="text-xl sm:text-2xl text-slate-400 max-w-2xl leading-relaxed">
        {personal.summary}
      </p>

      <div className="flex flex-wrap gap-4 pt-4">
        <a 
          href={`mailto:${personal.email}`}
          className="group inline-flex items-center gap-3 px-8 py-4 bg-indigo-500 hover:bg-indigo-400 text-white font-bold rounded-full transition-all hover:scale-105 hover:shadow-lg hover:shadow-indigo-500/25"
        >
          <Mail className="h-5 w-5 group-hover:rotate-12 transition-transform" />
          Get in Touch
        </a>
        <a 
          href={personal.github}
          className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/20 hover:border-white/40 hover:bg-white/5 rounded-full font-bold transition-all"
        >
          <Github className="h-5 w-5" />
          View Work
        </a>
      </div>

      <div className="flex gap-8 pt-8 text-slate-500">
        <a href={personal.linkedin} className="hover:text-indigo-400 transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
        <a href={`mailto:${personal.email}`} className="hover:text-indigo-400 transition-colors">
          <Mail className="h-6 w-6" />
        </a>
      </div>
    </section>
  );
}
