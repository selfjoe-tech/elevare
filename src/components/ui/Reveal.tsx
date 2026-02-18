"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/cn";

type RevealFrom = "bottom" | "left" | "right";

export default function Reveal({
  children,
  className,
  delay = 0,
  from = "bottom",
  distance = 16, // px-ish in Tailwind terms (4 = 1rem); we map to classes below
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  from?: RevealFrom;
  distance?: 8 | 12 | 16 | 20 | 24;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || shown) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          io.disconnect();
        }
      },
      { threshold: 0.18 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [shown]);

  // Tailwind translate utilities are discrete. We'll map "distance" to the closest class.
  const distClass =
    distance === 8
      ? "translate-2"
      : distance === 12
      ? "translate-3"
      : distance === 16
      ? "translate-4"
      : distance === 20
      ? "translate-5"
      : "translate-6";

  const hiddenTransform =
    from === "left"
      ? `opacity-0 -${distClass} translate-y-0`
      : from === "right"
      ? `opacity-0 ${distClass} translate-y-0`
      : `opacity-0 translate-y-4`; // bottom default keeps your original behavior

  const shownTransform = "opacity-100 translate-x-0 translate-y-0";

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={cn(
        "transition-all duration-700 ease-out will-change-transform",
        shown ? shownTransform : hiddenTransform,
        "motion-reduce:transition-none motion-reduce:transform-none motion-reduce:opacity-100",
        className
      )}
    >
      {children}
    </div>
  );
}
