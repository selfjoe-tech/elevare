"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Card } from "@/components/Card";
import { ButtonLink } from "@/components/ButtonLink";

const steps = [
  { key: "discover", label: "Discover", title: "Clarify objectives and constraints", body: "Align on objectives, risk tolerance, timelines, and fit.", chips: ["Objectives", "Constraints", "Fit"] },
  { key: "diligence", label: "Diligence", title: "Rigorous evaluation mindset", body: "A due diligence orientation that supports disciplined decision-making and governance strength.", chips: ["Due diligence", "Governance", "Risk"] },
  { key: "structure", label: "Structure", title: "Fit-for-purpose structuring", body: "Support structuring across investment and funding considerations aligned to long-term value creation.", chips: ["Debt/Equity/Hybrid", "Readiness", "Terms"] },
  { key: "execute", label: "Execute", title: "Hands-on engagement and delivery", body: "Execution support through engagement, introductions, and practical delivery focus.", chips: ["Engagement", "Networks", "Delivery"] },
];

const STORAGE_KEY = "elevare_home_stepper";

export function ProcessStepper() {
  const btnRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [active, setActive] = useState(steps[0].key);

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      if (saved && steps.some((s) => s.key === saved)) setActive(saved);
    } catch {}
  }, []);

  useEffect(() => {
    try { sessionStorage.setItem(STORAGE_KEY, active); } catch {}
  }, [active]);

  const current = useMemo(() => steps.find((s) => s.key === active) ?? steps[0], [active]);
  const activeIndex = Math.max(0, steps.findIndex((s) => s.key === active));

  function moveFocus(nextIndex: number) {
    const idx = (nextIndex + steps.length) % steps.length;
    const nextKey = steps[idx]?.key;
    if (!nextKey) return;
    setActive(nextKey);
    requestAnimationFrame(() => btnRefs.current[idx]?.focus());
  }

  return (
    <div className="grid gap-6 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <div className="text-sm font-semibold text-slate-900">How we work</div>
        <p className="mt-2 text-sm text-slate-600">
          A disciplined flow designed to support governance, risk awareness, and long-term value creation.
        </p>

        <div className="mt-5 grid gap-2" role="tablist" aria-label="Execution steps">
          {steps.map((s, idx) => {
            const is = s.key === active;
            return (
              <button
                key={s.key}
                ref={(el) => { btnRefs.current[idx] = el; }}
                type="button"
                role="tab"
                aria-selected={is}
                tabIndex={is ? 0 : -1}
                onClick={() => setActive(s.key)}
                onKeyDown={(e) => {
                  if (e.key === "ArrowDown") { e.preventDefault(); moveFocus(idx + 1); }
                  if (e.key === "ArrowUp") { e.preventDefault(); moveFocus(idx - 1); }
                  if (e.key === "Home") { e.preventDefault(); moveFocus(0); }
                  if (e.key === "End") { e.preventDefault(); moveFocus(steps.length - 1); }
                }}
                className={[
                  "flex items-center justify-between rounded-2xl border px-4 py-3 text-left transition active:translate-y-[1px]",
                  is ? "border-blue-200 bg-blue-50 text-blue-900" : "border-slate-200 bg-white hover:bg-slate-50 text-slate-800",
                ].join(" ")}
              >
                <span className="text-sm font-semibold">{s.label}</span>
                <span className={is ? "text-[color:var(--champagne-2)]" : "text-slate-300"}>●</span>
              </button>
            );
          })}
        </div>

        <div className="mt-4 text-xs text-slate-500">
          Selected: <span className="font-semibold text-slate-700">{steps[activeIndex]?.label}</span>
        </div>
      </div>

      <div className="lg:col-span-7">
        <Card className="relative overflow-hidden">
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(37,99,235,0.12),transparent_55%)]" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_86%_18%,rgba(99,102,241,0.10),transparent_55%)]" />

          <div className="relative p-7 sm:p-8">
            <div className="text-xs font-semibold tracking-wide text-blue-800">DISCIPLINED EXECUTION</div>
            <div className="mt-2 text-2xl font-semibold text-slate-900">{current.title}</div>
            <p className="mt-3 text-sm text-slate-600">{current.body}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {current.chips.map((c) => (
                <span
                  key={c}
                  className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-700 ring-1 ring-slate-200"
                >
                  {c}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <ButtonLink href="/approach" variant="secondary" withArrow>
                Investment approach
              </ButtonLink>
              <ButtonLink href="/contact" variant="primary" withArrow>
                Start an enquiry
              </ButtonLink>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}
