import React from "react";

const items = [
  { title: "Governance-first", desc: "Accountability and decision quality." },
  { title: "Due diligence driven", desc: "Rigorous evaluation mindset." },
  { title: "Risk-aware", desc: "Designed for durable outcomes." },
  { title: "Value creation focus", desc: "Hands-on engagement orientation." },
  { title: "Flexible structures", desc: "Debt, equity, hybrid thinking." },
];

export function TrustRail() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 ring-1 ring-white/5 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs font-semibold tracking-wide text-white/70">TRUST & DISCIPLINE</div>
        <div className="hidden text-xs text-white/55 sm:block">Built for investor confidence</div>
      </div>

      <div className="mt-4 flex gap-3 overflow-x-auto pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {items.map((i) => (
          <div
            key={i.title}
            className="min-w-[240px] rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10"
          >
            <div className="flex items-start gap-3">
              <div className="mt-1 h-9 w-9 rounded-2xl bg-gradient-to-br from-blue-500/25 to-indigo-500/20 ring-1 ring-white/10" />
              <div>
                <div className="text-sm font-semibold text-white">{i.title}</div>
                <div className="mt-1 text-xs text-white/65">{i.desc}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
