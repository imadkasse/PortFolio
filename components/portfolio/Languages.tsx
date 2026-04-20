"use client";

import { languages } from "@/lib/data";
import { Globe } from "lucide-react";

export function Languages() {
  return (
    <div className="p-6 sm:p-8 border border-[--border] bg-[--card]">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-2.5 bg-[--secondary]">
          <Globe className="h-5 w-5 text-[--primary]" />
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold">Languages</h2>
      </div>
      <div className="space-y-3">
        {languages.map((lang) => (
          <div key={lang.name} className="flex justify-between items-center">
            <span className="font-medium text-sm">{lang.name}</span>
            <span className="px-3 py-1 text-xs bg-[--secondary] text-[--secondary-foreground]">
              {lang.level}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}