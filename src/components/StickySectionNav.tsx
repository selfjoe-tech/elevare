"use client";

import { useEffect, useMemo, useState } from "react";

type Item = { id: string; label: string };

export function StickySectionNav({ items }: { items: Item[] }) {
  const [active, setActive] = useState(items[0]?.id ?? "");

  const ids = useMemo(() => items.map((i) => i.id), [items]);

  useEffect(() => {
    const els = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActive(visible.target.id);
      },
      { threshold: [0.15, 0.22, 0.35], rootMargin: "-10% 0px -70% 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [ids]);

  return (
    <aside className="hidden xl:block">
      <div className="sticky top-24 rounded-3xl border border-slate-200 bg-white/70 p-3 shadow-sm backdrop-blur">
        <div className="px-2 pb-2 text-xs font-semibold tracking-wide text-slate-500">
          ON THIS PAGE
        </div>
        <div className="grid gap-1">
          {items.map((i) => {
            const is = i.id === active;
            return (
              <a
                key={i.id}
                href={`#${i.id}`}
                className={[
                  "flex items-center justify-between rounded-2xl px-3 py-2 text-sm font-semibold transition",
                  is ? "bg-blue-50 text-blue-900" : "text-slate-700 hover:bg-slate-50",
                ].join(" ")}
              >
                <span>{i.label}</span>
                <span
                  className={[
                    "text-xs transition",
                    is ? "text-[color:var(--champagne-2)]" : "text-slate-300",
                  ].join(" ")}
                >
                  ●
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </aside>
  );
}
