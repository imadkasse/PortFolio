"use client";

import { education } from "@/lib/data";
import { Code2 } from "lucide-react";

export function Education() {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-purple-500/20">
          <Code2 className="h-5 w-5 text-purple-400" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">Education</h2>
      </div>
      <div className="space-y-4">
        {education.map((edu) => (
          <div key={edu.degree} className="space-y-1">
            <h3 className="text-base font-semibold leading-tight">
              {edu.degree}
            </h3>
            <p className="text-sm text-slate-400">{edu.university}</p>
            <p className="text-xs text-slate-500">{edu.date}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
