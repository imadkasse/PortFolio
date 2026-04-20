"use client";

import { useEffect, useState } from "react";
import { personal } from "@/lib/data";
import { Github, Linkedin, Mail, ArrowRight, Code2, Sparkles, MapPin, Calendar } from "lucide-react";

export function Hero() {
  const firstName = personal.name.split(" ")[0];
  const lastName = personal.name.split(" ")[1];
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative">
      <div className="lg:grid lg:grid-cols-12 lg:gap-8 items-start">
        <div className="lg:col-span-8 space-y-10">
          <div 
            className="space-y-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
            }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[--secondary]">
              <Code2 className="h-3.5 w-3.5 text-[--primary]" />
              <span className="text-label">
                Fullstack Developer
              </span>
            </div>
            
            <h1 
              className="font-display font-black text-display tracking-tight leading-[0.88]"
              style={{
                opacity: mounted ? 1 : 0,
                transform: mounted ? "translateY(0)" : "translateY(30px)",
                transition: "opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1) 0.1s, transform 0.7s cubic-bezier(0.25, 1, 0.5, 1) 0.1s",
              }}
            >
              {firstName}
              <span className="block text-[--muted-foreground]/60">
                {lastName}
              </span>
            </h1>
            
            <p 
              className="text-body-lg text-[--muted-foreground] max-w-xl"
              style={{
                opacity: mounted ? 1 : 0,
                transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.2s",
              }}
            >
              {personal.summary}
            </p>
          </div>
          
          <div 
            className="flex flex-wrap gap-3"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.3s, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.3s",
            }}
          >
            <a 
              href={`mailto:${personal.email}`}
              className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[--primary] hover:bg-[--primary]/90 text-[--primary-foreground] font-bold transition-all hover:translate-x-1 active:scale-[0.97] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:ring-offset-[--background]"
            >
              <Mail className="h-4 w-4" />
              Get in Touch
              <ArrowRight className="h-3.5 w-3.5 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
            <a 
              href={personal.github}
              className="inline-flex items-center gap-2.5 px-6 py-3.5 border border-[--border] hover:border-[--foreground] hover:bg-[--foreground]/5 font-display font-bold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] focus-visible:ring-offset-2 focus-visible:ring-offset-[--background]"
            >
              <Github className="h-4 w-4" />
              View Work
            </a>
          </div>
        </div>

        <div className="hidden lg:block lg:col-span-4">
          <div 
            className="sticky top-28 space-y-6"
            style={{
              opacity: mounted ? 1 : 0,
              transform: mounted ? "translateX(0)" : "translateX(20px)",
              transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.4s, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) 0.4s",
            }}
          >
            <div className="p-6 border border-[--border] bg-[--card]">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="h-4 w-4 text-[--primary]" />
                <h3 className="font-display font-bold">About Me</h3>
              </div>
              
              <ul className="space-y-3">
                {personal.about?.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-body-sm text-[--muted-foreground]">
                    <span className="h-1 w-1 mt-2 bg-[--primary] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="grid grid-cols-3 gap-3">
              <div className="p-4 border border-[--border] bg-[--card] text-center">
                <p className="font-display text-2xl font-black text-[--primary]">{personal.stats.yearsExp}</p>
                <p className="text-caption text-[--muted-foreground]">Years Exp</p>
              </div>
              <div className="p-4 border border-[--border] bg-[--card] text-center">
                <p className="font-display text-2xl font-black text-[--primary]">{personal.stats.projectsBuilt}</p>
                <p className="text-caption text-[--muted-foreground]">Projects</p>
              </div>
              <div className="p-4 border border-[--border] bg-[--card] text-center">
                <p className="font-display text-2xl font-black text-[--primary]">{personal.stats.deploysDone}</p>
                <p className="text-caption text-[--muted-foreground]">Deploys</p>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3 text-body-sm text-[--muted-foreground]">
                <MapPin className="h-4 w-4 text-[--primary]" />
                <span>Algeria</span>
              </div>
              <div className="flex items-center gap-3 text-body-sm text-[--muted-foreground]">
                <Calendar className="h-4 w-4 text-[--primary]" />
                <span>Available for opportunities</span>
              </div>
            </div>

            <div className="flex gap-3">
              <a href={personal.linkedin} className="flex-1 p-3 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all text-center text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]" aria-label="LinkedIn profile">
                <Linkedin className="h-5 w-5 inline mr-2" />
                LinkedIn
              </a>
              <a href={personal.github} className="flex-1 p-3 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all text-center text-body-sm font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]" aria-label="GitHub profile">
                <Github className="h-5 w-5 inline mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>

        <div className="lg:hidden mt-10 space-y-6">
          <div className="p-6 border border-[--border] bg-[--card]">
            <div className="flex items-center gap-2 mb-4">
              <Sparkles className="h-4 w-4 text-[--primary]" />
              <h3 className="font-display font-bold">About Me</h3>
            </div>
            
            <ul className="space-y-3">
              {personal.about?.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-body-sm text-[--muted-foreground]">
                  <span className="h-1 w-1 mt-2 bg-[--primary] flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="grid grid-cols-3 gap-3">
            <div className="p-4 border border-[--border] bg-[--card] text-center">
              <p className="font-display text-2xl font-black text-[--primary]">{personal.stats.yearsExp}</p>
              <p className="text-caption text-[--muted-foreground]">Years Exp</p>
            </div>
            <div className="p-4 border border-[--border] bg-[--card] text-center">
              <p className="font-display text-2xl font-black text-[--primary]">{personal.stats.projectsBuilt}</p>
              <p className="text-caption text-[--muted-foreground]">Projects</p>
            </div>
            <div className="p-4 border border-[--border] bg-[--card] text-center">
              <p className="font-display text-2xl font-black text-[--primary]">{personal.stats.deploysDone}</p>
              <p className="text-caption text-[--muted-foreground]">Deploys</p>
            </div>
          </div>

          <div className="flex items-center gap-3 text-body-sm text-[--muted-foreground]">
            <MapPin className="h-4 w-4 text-[--primary]" />
            <span>Algeria</span>
          </div>
        </div>
      </div>
    </section>
  );
}