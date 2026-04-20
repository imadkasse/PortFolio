"use client";

import { education } from "@/lib/data";
import { Code2 } from "lucide-react";

export function Education() {
  return (
    <div className="p-6 sm:p-8 border border-[--border] bg-[--card]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-[--secondary]">
          <Code2 className="h-5 w-5 text-[--primary]" />
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold">Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.degree} className="space-y-1">
            <h3 className="text-base font-semibold leading-tight">
              {edu.degree}
            </h3>
            <p className="text-sm text-[--muted-foreground]">{edu.university}</p>
            <p className="text-xs text-[--muted-foreground]/70">{edu.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}