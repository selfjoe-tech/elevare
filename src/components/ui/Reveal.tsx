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


import * as React from "react";

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  delayMs?: number;
};

type ObsEntry = {
  el: Element;
  setInView: React.Dispatch<React.SetStateAction<boolean>>;
};

let sharedIO: IntersectionObserver | null = null;
let sharedReduce = false;
let entries = new Map<Element, React.Dispatch<React.SetStateAction<boolean>>>();

function getSharedIO() {
  if (typeof window === "undefined") return null;

  // respect reduced motion once
  sharedReduce =
    window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;

  if (sharedReduce) return null;

  if (sharedIO) return sharedIO;

  sharedIO = new IntersectionObserver(
    (ioEntries) => {
      // batch updates in the same frame
      for (const entry of ioEntries) {
        if (!entry.isIntersecting) continue;
        const setter = entries.get(entry.target);
        if (setter) setter(true);
        entries.delete(entry.target);
        sharedIO?.unobserve(entry.target);
      }
    },
    { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
  );

  return sharedIO;
}

export function AnotherReveal({
  children,
  className,
  as: Comp = "div",
  delayMs = 0,
}: RevealProps) {
  const [inView, setInView] = React.useState(false);

  const ref = React.useCallback((node: HTMLElement | null) => {
    if (!node) return;

    // reduced motion: reveal immediately, no observers
    const io = getSharedIO();
    if (!io) {
      setInView(true);
      return;
    }

    // register this element
    entries.set(node, setInView);
    io.observe(node);
  }, []);

  return (
    <Comp
      ref={ref as any}
      className={cn("reveal", inView && "reveal-in", className)}
      style={delayMs ? { transitionDelay: `${delayMs}ms` } : undefined}
    >
      {children}
    </Comp>
  );
}

