"use client";

import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiNextdotjs, 
  SiNestjs, 
  SiExpress, 
  SiTailwindcss, 
  SiDocker, 
  SiGit, 
  SiMongodb, 
  SiPostgresql, 
  SiRedis 
} from "react-icons/si";

const iconMap: Record<string, { Icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>; color: string }> = {
  "JavaScript": { Icon: SiJavascript, color: "#F7DF1E" },
  "TypeScript": { Icon: SiTypescript, color: "#3178C6" },
  "Python": { Icon: SiPython, color: "#3776AB" },
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "NestJS": { Icon: SiNestjs, color: "#E0234E" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  "Docker": { Icon: SiDocker, color: "#2496ED" },
  "Git": { Icon: SiGit, color: "#F05032" },
  "MongoDB": { Icon: SiMongodb, color: "#47A248" },
  "PostgreSQL": { Icon: SiPostgresql, color: "#336791" },
  "Redis": { Icon: SiRedis, color: "#DC382D" },
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
      className="group relative p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-500/50 hover:bg-white/10 transition-all cursor-default"
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3">
        {Icon && (
          <Icon 
            className="h-5 w-5 group-hover:scale-110 transition-transform" 
            style={{ color }}
          />
        )}
        <span className="font-medium">{name}</span>
      </div>
    </div>
  );
}
