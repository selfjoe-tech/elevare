import React from "react";

export function ContourLines({ className = "" }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 1200 700"
      className={[
        "pointer-events-none absolute inset-0 h-full w-full",
        "text-white/10",
        className,
      ].join(" ")}
      preserveAspectRatio="none"
    >
      <g fill="none" stroke="currentColor" strokeWidth="1">
        <path d="M-50,120 C150,40 320,190 520,110 C720,30 880,170 1100,90 C1220,50 1320,90 1260,140" />
        <path d="M-60,165 C150,85 330,235 520,155 C710,75 900,215 1100,135 C1220,95 1320,135 1260,185" />
        <path d="M-70,210 C140,130 320,280 520,200 C710,120 900,260 1100,180 C1220,140 1320,180 1260,230" />

        <path d="M-40,300 C170,220 340,360 560,290 C780,220 920,360 1120,290 C1250,240 1330,300 1270,340" />
        <path d="M-60,345 C150,265 330,405 560,335 C790,265 920,405 1120,335 C1250,285 1330,345 1270,385" />
        <path d="M-80,390 C130,310 310,450 560,380 C810,310 930,450 1120,380 C1250,330 1330,390 1270,430" />

        <path d="M-50,505 C160,430 320,560 560,490 C800,420 940,550 1120,490 C1260,450 1330,505 1270,540" />
        <path d="M-70,550 C140,475 300,605 560,535 C820,465 950,595 1120,535 C1260,495 1330,550 1270,585" />
        <path d="M-90,595 C120,520 280,650 560,580 C840,510 960,640 1120,580 C1260,540 1330,595 1270,630" />
      </g>

      <rect
        x="38"
        y="38"
        width="1124"
        height="624"
        rx="28"
        className="opacity-25"
        fill="none"
        stroke="currentColor"
      />
    </svg>
  );
}
