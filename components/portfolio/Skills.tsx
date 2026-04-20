"use client";
import { skills } from "@/lib/data";
import { SkillCard } from "./SkillCard";

export function Skills() {
  const frontend = skills.filter(s => s.category === "Frontend");
  const backend = skills.filter(s => s.category === "Backend");
  const database = skills.filter(s => s.category === "Database");
  const tools = skills.filter(s => s.category === "Tools");

  return (
    <section id="skills">
      <header className="mb-10">
        <h2 className="font-display text-h2 font-black tracking-tight">SKILLS</h2>
      </header>

      <div className="space-y-8">
        {frontend.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-label text-[--primary]">Frontend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {frontend.map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} index={index} />
              ))}
            </div>
          </div>
        )}

        {backend.length > 0 && (
          <div className="space-y-3">
            <h3 className="text-label text-[--primary]">Backend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
              {backend.map((skill, index) => (
                <SkillCard key={skill.name} name={skill.name} index={index + frontend.length} />
              ))}
            </div>
          </div>
        )}

        <div className="grid md:grid-cols-2 gap-8">
          {database.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-label text-[--primary]">Database</h3>
              <div className="grid grid-cols-2 gap-2">
                {database.map((skill, index) => (
                  <SkillCard key={skill.name} name={skill.name} index={index + frontend.length + backend.length} />
                ))}
              </div>
            </div>
          )}

          {tools.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-label text-[--primary]">Tools</h3>
              <div className="grid grid-cols-2 gap-2">
                {tools.map((skill, index) => (
                  <SkillCard key={skill.name} name={skill.name} index={index + frontend.length + backend.length + database.length} />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}