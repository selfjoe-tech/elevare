import React from "react";

export function MarketLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 280"
      preserveAspectRatio="none"
      className={[
        "pointer-events-none absolute inset-x-0 -top-10 h-44 w-full opacity-60",
        className,
      ].join(" ")}
    >
      <defs>
        <linearGradient id="ml" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="rgba(37,99,235,0.0)" />
          <stop offset="0.35" stopColor="rgba(37,99,235,0.40)" />
          <stop offset="0.7" stopColor="rgba(99,102,241,0.32)" />
          <stop offset="1" stopColor="rgba(14,165,233,0.0)" />
        </linearGradient>
      </defs>

      <g fill="none" stroke="url(#ml)" strokeWidth="2">
        <path d="M0,210 C100,130 160,170 240,115 C320,60 380,170 470,135 C560,100 610,35 700,95 C780,145 860,85 940,125 C1030,170 1100,120 1200,150" />
        <path opacity="0.55" d="M0,235 C120,200 170,220 250,190 C330,160 390,205 480,190 C570,175 620,150 705,165 C790,180 875,165 950,185 C1040,210 1110,195 1200,205" />
      </g>

      {/* tiny “ticks” */}
      <g opacity="0.35" fill="rgba(15,23,42,0.0)">
        {Array.from({ length: 24 }).map((_, i) => (
          <rect
            key={i}
            x={i * 52}
            y={240}
            width={1.2}
            height={26}
            fill="rgba(37,99,235,0.18)"
          />
        ))}
      </g>
    </svg>
  );
}
