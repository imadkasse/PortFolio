"use client";

import { Github, ExternalLink } from "lucide-react";
import { 
  SiNextdotjs, 
  SiExpress, 
  SiMongodb, 
  SiTailwindcss, 
  SiDocker, 
  SiSocketdotio,
  SiCloudinary,
  SiReact,
  SiNodedotjs,
  SiNestjs
} from "react-icons/si";

const techIconMap: Record<string, { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  "Socket.io": { Icon: SiSocketdotio, color: "#010101" },
  "Cloudinary": { Icon: SiCloudinary, color: "#3448C5" },
  "React": { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  "NestJS": { Icon: SiNestjs, color: "#E0234E" },
};

interface ProjectCardProps {
  id: string;
  title: string;
  description: string;
  tech: { name: string }[];
  role: string;
  demoUrl: string;
  githubUrl: string;
  highlights: string[];
}

export function ProjectCard({
  title,
  description,
  tech,
  role,
  demoUrl,
  githubUrl,
  highlights,
}: ProjectCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 hover:border-indigo-500/50 transition-all">
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      <div className="relative p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="text-xs font-medium text-indigo-400 uppercase tracking-wider">{role}</span>
            <h3 className="text-xl sm:text-2xl font-bold">{title}</h3>
          </div>
          <div className="flex gap-2">
            <a 
              href={githubUrl}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 transition-all"
            >
              <Github className="h-4 w-4" />
            </a>
            <a 
              href={demoUrl}
              className="p-2 rounded-lg bg-indigo-500 hover:bg-indigo-400 transition-all"
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">{description}</p>

        <div className="flex flex-wrap gap-2">
          {tech.map(({ name }) => {
            const iconData = techIconMap[name];
            const Icon = iconData?.Icon;
            const color = iconData?.color;
            
            return (
              <span 
                key={name}
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-white/10 text-slate-300"
              >
                {Icon && <Icon className="h-3 w-3" style={{ color }} />}
                {name}
              </span>
            );
          })}
        </div>

        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2 pt-2">
          {highlights.map((highlight) => (
            <li 
              key={highlight}
              className="flex items-center gap-2 text-xs text-slate-400"
            >
              <span className="h-1 w-1 rounded-full bg-cyan-400 flex-shrink-0" />
              <span className="line-clamp-2">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
