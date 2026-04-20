"use client";
import { projects } from "@/lib/data";
import { ProjectCard } from "./ProjectCard";

export function Projects() {
  return (
    <section id="projects">
      <header className="mb-10">
        <h2 className="font-display text-xl sm:text-2xl font-black tracking-tight">PROJECTS</h2>
      </header>

      <div className="grid gap-8">
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