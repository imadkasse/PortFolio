"use client";

import { Github, ExternalLink, BookmarkPlus, Check } from "lucide-react";
// import { useCart } from "./CartContext";
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
  SiNestjs,
  SiSupabase,
  SiPwa,
} from "react-icons/si";

const techIconMap: Record<
  string,
  {
    Icon: React.ComponentType<{
      className?: string;
      style?: React.CSSProperties;
    }>;
    color: string;
  }
> = {
  "Next.js": { Icon: SiNextdotjs, color: "#ffffff" },
  "Express.js": { Icon: SiExpress, color: "#ffffff" },
  MongoDB: { Icon: SiMongodb, color: "#47A248" },
  "Tailwind CSS": { Icon: SiTailwindcss, color: "#06B6D4" },
  Docker: { Icon: SiDocker, color: "#2496ED" },
  "Socket.io": { Icon: SiSocketdotio, color: "#ffffff" },
  Cloudinary: { Icon: SiCloudinary, color: "#3448C5" },
  React: { Icon: SiReact, color: "#61DAFB" },
  "Node.js": { Icon: SiNodedotjs, color: "#339933" },
  NestJS: { Icon: SiNestjs, color: "#E0234E" },
  PWA: { Icon: SiPwa, color: "#5A0FC8" },
  Supabase: { Icon: SiSupabase, color: "#3ECF8E" },
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
  id,
  title,
  description,
  tech,
  role,
  demoUrl,
  githubUrl,
  highlights,
}: ProjectCardProps) {
  // const { addItem, removeItem, isInCart } = useCart();
  // const inCart = isInCart(id);

  // const handleCartToggle = (e: React.MouseEvent) => {
  //   e.preventDefault();
  //   if (inCart) {
  //     removeItem(id);
  //   } else {
  //     addItem({ id, title, description, tech, role, demoUrl, githubUrl, highlights });
  //   }
  // };

  return (
    <div className="group relative overflow-hidden bg-[--card] border border-[--border] hover:border-[--primary] transition-all duration-300">
      <div className="absolute top-0 left-0 w-1 h-full bg-[--primary] -translate-x-full group-hover:translate-x-0 transition-transform duration-300" />
      <div className="relative p-5 sm:p-6 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
          <div className="space-y-1">
            <span className="text-label text-[--primary]">{role}</span>
            <h3 className="font-display text-h3 font-bold">{title}</h3>
          </div>
          <div className="flex gap-2">
            {/* <button
              onClick={handleCartToggle}
              className={`p-2 border transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary] ${
                inCart
                  ? "bg-[--primary] border-[--primary] text-[--primary-foreground]"
                  : "border-[--border] hover:border-[--primary] hover:text-[--primary]"
              }`}
              aria-label={inCart ? "Remove from collection" : "Add to collection"}
            >
              {inCart ? <Check className="h-4 w-4" /> : <BookmarkPlus className="h-4 w-4" />}
            </button> */}
            <a
              href={githubUrl}
              target="_blank"
              className="p-2 border border-[--border] hover:border-[--primary] hover:text-[--primary] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
              <Github className="h-4 w-4" />
            </a>
            <a
              href={demoUrl}
              target="_blank"
              className="p-2 bg-[--primary] hover:bg-[--primary]/90 text-[--primary-foreground] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[--primary]">
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>

        <p className="text-body-sm text-[--muted-foreground] max-w-[65ch]">
          {description}
        </p>

        <div className="flex flex-wrap gap-2">
          {tech.map(({ name }) => {
            const iconData = techIconMap[name];
            const Icon = iconData?.Icon;
            const color = iconData?.color;

            return (
              <span
                key={name}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-caption font-medium bg-[--secondary] text-[--secondary-foreground]">
                {Icon && <Icon className="h-3 w-3" style={{ color }} />}
                {name}
              </span>
            );
          })}
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-2 pt-2">
          {highlights.map((highlight) => (
            <li
              key={highlight}
              className="flex items-center gap-2 text-caption text-[--muted-foreground]">
              <span className="h-1 w-1 bg-[--primary] flex-shrink-0" />
              <span className="line-clamp-2">{highlight}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
