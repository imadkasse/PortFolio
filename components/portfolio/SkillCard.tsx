"use client";

import {
  SiReact,
  SiVuedotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiJavascript,
  SiPython,
  SiNextdotjs,
  SiNestjs,
  SiExpress,
  SiTailwindcss,
  SiDocker,
  SiGit,
  SiMongodb,
  SiPostgresql,
  SiRedis,
  SiAmazon,
  SiCloudflare,
} from "react-icons/si";

const iconMap: Record<
  string,
  {
    Icon: React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    color: string;
  }
> = {
  React: { Icon: SiReact, color: "#61DAFB" },
  "Vue.js": { Icon: SiVuedotjs, color: "#4FC08D" },
  "Nuxt.js": { Icon: SiNuxtdotjs, color: "#00DC82" },
  JavaScript: { Icon: SiJavascript, color: "#F7DF1E" },
  TypeScript: { Icon: SiTypescript, color: "#3178C6" },
  Python: { Icon: SiPython, color: "#3776AB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "System Design": { Icon: SiCloudflare, color: "#FF9900" },
  Git: { Icon: SiGit, color: "#F05032" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  PostgreSQL: { Icon: SiPostgresql, color: "#336791" },
  Redis: { Icon: SiRedis, color: "#DC382D" },
};

interface SkillCardProps {
  name: string;
  index: number;
}

export function SkillCard({ name, index }: SkillCardProps) {
  const iconData = iconMap[name];
  const Icon = iconData?.Icon;
  const color = iconData?.color;

  return (
    <div 
      className="group relative p-4 bg-[--card] border border-[--border] hover:border-[--primary] hover:bg-[--secondary] hover-lift cursor-default"
      style={{ 
        animationDelay: `${index * 50}ms`,
        transitionProperty: "border-color, background-color, transform",
        transitionDuration: "300ms",
        transitionTimingFunction: "cubic-bezier(0.25, 1, 0.5, 1)"
      }}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon 
            className="h-5 w-5 transition-transform group-hover:scale-110" 
            style={{ color }}
          />
        )}
        <span className="font-medium transition-transform group-hover:translate-x-1">{name}</span>
      </div>
    </div>
  );
}