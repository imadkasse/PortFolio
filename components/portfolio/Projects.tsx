"use client";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects" className="space-y-8">
      <div className="flex items-center gap-4">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
        <h2 className="text-3xl font-black tracking-tight">PROJECTS</h2>
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />
      </div>

      <div className="grid gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            title={project.title}
            description={project.description}
            tech={project.tech}
            role={project.role}
            demoUrl={project.demoUrl}
            githubUrl={project.githubUrl}
            highlights={project.highlights}
          />
        ))}
      </div>
    </section>
  );
}
