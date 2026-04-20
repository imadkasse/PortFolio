"use client";

import { useEffect, useState, ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  delay?: number;
}

export function SectionWrapper({ children, delay = 0 }: SectionWrapperProps) {
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
        transform: isVisible ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms, transform 0.7s cubic-bezier(0.25, 1, 0.5, 1) ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}