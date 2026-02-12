"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { cn } from "@/lib/cn";

function Digit({ n, active }: { n: number; active: boolean }) {
  return (
    <div className="h-12 w-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
      <div
        className={cn(
          "transition-transform duration-700 ease-out motion-reduce:transition-none"
        )}
        style={{
          transform: active ? `translateY(${-n * 48}px)` : `translateY(0px)`,
        }}
      >
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className="grid h-12 place-items-center font-sans text-lg text-white/90">
            {i}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function Odometer({
  value,
  className,
}: {
  value: string; // digits only, e.g. "74952278"
  className?: string;
}) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  const digits = useMemo(
    () => value.split("").map((c) => (/\d/.test(c) ? Number(c) : null)),
    [value]
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={ref} className={cn("flex flex-wrap items-center gap-2", className)}>
      {digits.map((d, idx) =>
        d === null ? (
          <span key={idx} className="px-1 text-white/70">
            {value[idx]}
          </span>
        ) : (
          <Digit key={idx} n={d} active={active} />
        )
      )}
    </div>
  );
}
