export function HeroIllustrations() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Top-right: network + arcs + bars */}
      <svg
        viewBox="0 0 520 520"
        className="absolute right-0 top-0 h-[520px] w-[520px] translate-x-1/4 -translate-y-1/4 opacity-60"
      >
        <defs>
          <linearGradient id="heroStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(255,255,255,0.22)" />
            <stop offset="0.55" stopColor="rgba(99,102,241,0.20)" />
            <stop offset="1" stopColor="rgba(14,165,233,0.16)" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#heroStroke)" strokeWidth="1.2">
          <path d="M70 160 C140 90, 220 110, 290 70 C360 30, 420 80, 470 60" opacity="0.9" />
          <path d="M60 220 C160 140, 250 210, 330 150 C410 95, 455 165, 500 130" opacity="0.55" />
          <path d="M85 300 C160 250, 240 310, 330 270 C410 230, 455 300, 505 280" opacity="0.35" />
        </g>

        {/* Node graph */}
        <g stroke="rgba(255,255,255,0.20)" strokeWidth="1" fill="rgba(255,255,255,0.35)">
          {[
            [120, 170],
            [190, 120],
            [260, 145],
            [330, 95],
            [380, 150],
            [440, 110],
            [290, 210],
            [360, 230],
          ].map(([x, y], i) => (
            <circle key={i} cx={x} cy={y} r="4" />
          ))}
          <g fill="none" stroke="rgba(255,255,255,0.16)">
            <path d="M120 170 L190 120 L260 145 L330 95 L380 150 L440 110" />
            <path d="M260 145 L290 210 L360 230" />
            <path d="M190 120 L290 210" />
          </g>
        </g>

        {/* Candlestick-ish bars */}
        <g stroke="rgba(255,255,255,0.18)" strokeWidth="2" opacity="0.6">
          <path d="M130 370 V315" />
          <path d="M160 390 V330" />
          <path d="M190 360 V290" />
          <path d="M220 410 V345" />
          <path d="M250 385 V305" />
          <path d="M280 430 V360" />
          <path d="M310 395 V335" />
        </g>
      </svg>

      {/* Bottom-left: dot matrix field */}
      <svg
        viewBox="0 0 420 420"
        className="absolute left-0 bottom-0 h-[420px] w-[420px] -translate-x-1/4 translate-y-1/4 opacity-35"
      >
        <defs>
          <radialGradient id="dotFade" cx="40%" cy="40%" r="70%">
            <stop offset="0" stopColor="rgba(255,255,255,0.30)" />
            <stop offset="1" stopColor="rgba(255,255,255,0)" />
          </radialGradient>
        </defs>
        <rect width="420" height="420" fill="url(#dotFade)" />

        <g fill="rgba(255,255,255,0.22)">
          {Array.from({ length: 16 }).map((_, r) =>
            Array.from({ length: 16 }).map((__, c) => (
              <circle key={`${r}-${c}`} cx={28 + c * 22} cy={28 + r * 22} r="1.6" />
            ))
          )}
        </g>
      </svg>

      {/* Champagne micro-glint */}
      <div className="absolute right-10 top-28 hidden lg:block">
        <div className="h-2 w-2 rounded-full bg-[color:var(--champagne)] opacity-80" />
      </div>
    </div>
  );
}
