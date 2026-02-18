"use client";
import { skills } from "@/lib/data";
import { SkillCard } from "./SkillCard";

export function Skills() {
  return (
    <section id="skills" className="space-y-12">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
        <h2 className="text-3xl font-black tracking-tight">TECH STACK</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {skills.map((skill, index) => (
          <SkillCard key={skill.name} name={skill.name} index={index} />
        ))}
      </div>
    </section>
  );
}
