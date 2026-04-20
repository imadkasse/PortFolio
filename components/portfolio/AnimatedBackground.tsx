"use client";

import { useEffect, useState } from "react";

export function AnimatedBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      <div 
        className="absolute top-0 right-0 w-[600px] h-[600px] opacity-[0.08]"
        style={{
          background: "radial-gradient(circle at center, oklch(0.7 0.18 45) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute bottom-0 left-0 w-[500px] h-[500px] opacity-[0.06]"
        style={{
          background: "radial-gradient(circle at center, oklch(0.7 0.18 45) 0%, transparent 70%)",
        }}
      />
      <div 
        className="absolute top-1/3 left-[10%] w-px h-[200px] opacity-[0.15]"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.7 0.18 45), transparent)",
        }}
      />
      <div 
        className="absolute top-1/2 right-[15%] w-px h-[150px] opacity-[0.1]"
        style={{
          background: "linear-gradient(to bottom, transparent, oklch(0.7 0.18 45), transparent)",
        }}
      />
      <div 
        className="absolute bottom-1/4 right-[25%] w-[300px] h-[300px] opacity-[0.04] rounded-full"
        style={{
          background: "radial-gradient(circle at center, oklch(0.7 0.18 45) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}