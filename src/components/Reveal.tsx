"use client";

import React, { useEffect, useRef, useState } from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;     // stagger support
  y?: number;           // translateY pixels
  once?: boolean;       // default true
};

export function Reveal({ children, className = "", delayMs = 0, y = 14, once = true }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user preference to reduce motion
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    if (reduce) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry) return;
        if (entry.isIntersecting) {
          setShown(true);
          if (once) io.unobserve(entry.target);
        }
      },
      { root: null, threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );

    io.observe(el);

    return () => {
      io.disconnect();
    };
  }, [once]);

  return (
    <div
      ref={ref}
      className={[
        "transition-[opacity,transform] duration-700 ease-out will-change-[opacity,transform]",
        shown ? "opacity-100 translate-y-0" : "opacity-0",
        className,
      ].join(" ")}
      style={{
        transform: shown ? "translate3d(0,0,0)" : `translate3d(0,${y}px,0)`,
        transitionDelay: `${delayMs}ms`,
      }}
    >
      {children}
    </div>
  );
}
