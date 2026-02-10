"use client";

import { useEffect, useRef } from "react";

export function ScrollProgress() {
  const barRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const reduce = window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
    const el = barRef.current;
    if (!el) return;

    let ticking = false;

    const update = () => {
      ticking = false;
      const doc = document.documentElement;
      const max = doc.scrollHeight - doc.clientHeight;
      const y = window.scrollY || doc.scrollTop;
      const p = max > 0 ? Math.min(1, Math.max(0, y / max)) : 0;
      el.style.transform = `scaleX(${p})`;
      if (reduce) el.style.transition = "none";
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[60] h-[3px] w-full bg-transparent">
      <div
        ref={barRef}
        className="h-full origin-left bg-gradient-to-r from-blue-600 via-indigo-500 to-[color:var(--champagne)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
