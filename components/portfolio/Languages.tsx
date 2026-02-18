"use client";

import { languages } from "@/lib/data";
import { Globe } from "lucide-react";

export function Languages() {
  return (
    <div className="p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 rounded-xl bg-cyan-500/20">
          <Globe className="h-5 w-5 text-cyan-400" />
        </div>
        <h2 className="text-xl sm:text-2xl font-bold">Languages</h2>
      </div>
      <div className="space-y-3">
        {languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center">
            <span className="font-medium text-sm">{lang.name}</span>
            <span className="px-3 py-1 rounded-full text-xs bg-white/10 text-slate-300">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
