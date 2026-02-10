"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/ButtonLink";

type Tab = {
  key: string;
  label: string;
  title: string;
  body: string;
  bullets: string[];
  cta: { label: string; href: string };
};

const STORAGE_KEY = "elevare_home_lens_tab";

export function SegmentTabs({ tabs }: { tabs: Tab[] }) {
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [active, setActive] = useState(tabs[0]?.key ?? "");

  // Restore last selection
  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved && tabs.some((t) => t.key === saved)) setActive(saved);
    } catch {}
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Persist selection
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_KEY, active);
    } catch {}
  }, [active]);

  const current = useMemo(() => tabs.find((t) => t.key === active) ?? tabs[0], [tabs, active]);
  const activeIndex = Math.max(0, tabs.findIndex((t) => t.key === active));

  function moveFocus(nextIndex: number) {
    const idx = (nextIndex + tabs.length) % tabs.length;
    const nextKey = tabs[idx]?.key;
    if (!nextKey) return;
    setActive(nextKey);
    requestAnimationFrame(() => btnRefs.current[idx]?.focus());
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      {/* Tabs */}
      <div className="lg:col-span-5">
        <div
          role="tablist"
          aria-label="Client lens"
          className="inline-flex rounded-2xl border border-slate-200 bg-white p-1 shadow-sm"
        >
          {tabs.map((t, idx) => {
            const is = t.key === active;
            return (
              <button
                key={t.key}
                ref={(el) => {
                  btnRefs.current[idx] = el;
                }}
                role="tab"
                aria-selected={is}
                tabIndex={is ? 0 : -1}
                type="button"
                onClick={() => setActive(t.key)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowRight") { e.preventDefault(); moveFocus(idx + 1); }
                  if (e.key === "ArrowLeft") { e.preventDefault(); moveFocus(idx - 1); }
                  if (e.key === "Home") { e.preventDefault(); moveFocus(0); }
                  if (e.key === "End") { e.preventDefault(); moveFocus(tabs.length - 1); }
                }}
                className={[
                  "rounded-xl px-4 py-2 text-sm font-semibold transition",
                  is ? "bg-blue-700 text-white shadow-sm" : "text-slate-700 hover:bg-blue-50 hover:text-blue-900",
                ].join(" ")}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        <div className="mt-5 text-sm text-slate-600">
          Switch the lens to see how Elevare supports different client needs with the same disciplined approach.
        </div>

        <div className="mt-4 text-xs text-slate-500">
          Selected: <span className="font-semibold text-slate-700">{tabs[activeIndex]?.label}</span>
        </div>
      </div>

      {/* Panel */}
      <div className="lg:col-span-7">
        <Card className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(37,99,235,0.12),transparent_55%)]" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.10),transparent_55%)]" />

          <div className="relative p-7 sm:p-8">
            <div className="text-xs font-semibold tracking-wide text-blue-700">INVESTMENT LENS</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{current.title}</div>
            <p className="mt-3 text-sm text-slate-600">{current.body}</p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {current.bullets.map((b) => (
                <div key={b} className="rounded-xl bg-white/80 p-4 ring-1 ring-slate-200 transition hover:-translate-y-0.5 hover:shadow-sm">
                  <div className="flex gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    <div className="text-sm font-semibold text-slate-900">{b}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-7">
              <ButtonLink href={current.cta.href} variant="secondary" withArrow>
                {current.cta.label}
              </ButtonLink>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
