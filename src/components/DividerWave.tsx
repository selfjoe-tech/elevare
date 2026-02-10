import React from "react";

export function DividerWave({ flip = false }: { flip?: boolean }) {
  return (
    <div aria-hidden className={flip ? "rotate-180" : ""}>
      <svg viewBox="0 0 1440 90" className="h-[60px] w-full">
        <defs>
          <linearGradient id="elevareWave" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="rgba(37,99,235,0.18)" />
            <stop offset="0.55" stopColor="rgba(99,102,241,0.16)" />
            <stop offset="1" stopColor="rgba(14,165,233,0.12)" />
          </linearGradient>
        </defs>
        <path
          d="M0,40 C180,90 420,0 720,45 C1020,90 1260,10 1440,50 L1440,90 L0,90 Z"
          fill="url(#elevareWave)"
        />
      </svg>
    </div>
  );
}
