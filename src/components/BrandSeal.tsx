import React from "react";

export function BrandSeal({ className = "" }: { className?: string }) {
  return (
    <div className={["inline-flex items-center gap-3", className].join(" ")}>
      <div className="grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br from-blue-700 to-indigo-700 text-white shadow-sm ring-1 ring-white/10">
        <span className="text-sm font-bold">E</span>
      </div>
      <div className="leading-tight">
        <div className="text-xs font-semibold tracking-[0.22em] text-white/60">ELEVARE</div>
        <div className="text-sm font-semibold text-white/90">Capital & Governance</div>
      </div>
    </div>
  );
}
