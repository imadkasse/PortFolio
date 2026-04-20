"use client";

import { useEffect, useState, ReactNode } from "react";

interface EntranceWrapperProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "left" | "none";
}

export function EntranceWrapper({ children, delay = 0, direction = "up" }: EntranceWrapperProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);
    return () => clearTimeout(timer);
  }, [delay]);

  const baseStyles = {
    opacity: isVisible ? 1 : 0,
    transform: isVisible 
      ? "translateY(0)" 
      : direction === "up" 
        ? "translateY(20px)" 
        : direction === "left" 
          ? "translateX(20px)" 
          : "none",
    transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1), transform 0.6s cubic-bezier(0.25, 1, 0.5, 1)",
  };

  return (
    <div style={baseStyles}>
      {children}
    </div>
  );
}

export function ScrollReveal({ children, delay = 0 }: { children: ReactNode; delay?: number }) {
  const [isVisible, setIsVisible] = useState(false);
  const [ref, setRef] = useState<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref) {
      observer.observe(ref);
    }

    return () => observer.disconnect();
  }, [ref]);

  return (
    <div
      ref={setRef}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(30px)",
        transition: "opacity 0.6s cubic-bezier(0.25, 1, 0.5, 1) " + (delay / 1000) + "s, transform 0.6s cubic-bezier(0.25, 1, 0.5, 1) " + (delay / 1000) + "s",
      }}
    >
      {children}
    </div>
  );
}