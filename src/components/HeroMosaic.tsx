import React from "react";

const tiles = [
  { k: "Governance-first", v: "Decision quality, accountability" },
  { k: "Due diligence", v: "Rigorous evaluation mindset" },
  { k: "Risk-aware", v: "Durable portfolio thinking" },
  { k: "Value creation", v: "Active engagement orientation" },
  { k: "Flexible structures", v: "Debt • Equity • Hybrid" },
  { k: "African markets", v: "Local insight + execution focus" },
];

export function HeroMosaic() {
  return (
    <div className="grid gap-3 sm:grid-cols-2">
      {tiles.map((t) => (
        <div
          key={t.k}
          className={[
            "group rounded-2xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5 backdrop-blur",
            "transition will-change-transform",
            "hover:bg-white/10 hover:-translate-y-0.5",
          ].join(" ")}
        >
          <div className="flex items-start gap-3">
            <div className="mt-1 h-10 w-10 rounded-2xl bg-gradient-to-br from-blue-500/25 to-indigo-500/20 ring-1 ring-white/10" />
            <div>
              <div className="text-sm font-semibold text-white">{t.k}</div>
              <div className="mt-1 text-xs text-white/65">{t.v}</div>

              {/* champagne micro-accent */}
              <div className="mt-3 h-[2px] w-10 rounded-full bg-[color:var(--champagne)] opacity-70 transition group-hover:w-14" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
