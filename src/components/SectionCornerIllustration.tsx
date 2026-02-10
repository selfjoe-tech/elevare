export function SectionCornerIllustration({
  side = "right",
}: {
  side?: "left" | "right";
}) {
  const pos =
    side === "right"
      ? "right-0 top-0 translate-x-1/4 -translate-y-1/4"
      : "left-0 top-0 -translate-x-1/4 -translate-y-1/4";

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        viewBox="0 0 360 360"
        className={["absolute h-[360px] w-[360px] opacity-40", pos].join(" ")}
      >
        <defs>
          <linearGradient id="secStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="rgba(37,99,235,0.22)" />
            <stop offset="0.55" stopColor="rgba(99,102,241,0.18)" />
            <stop offset="1" stopColor="rgba(14,165,233,0.14)" />
          </linearGradient>
        </defs>

        <g fill="none" stroke="url(#secStroke)" strokeWidth="1.2">
          <path d="M40 140 C110 80, 190 120, 250 70 C300 30, 330 70, 350 60" />
          <path
            d="M50 210 C140 150, 220 210, 280 160 C320 125, 340 160, 360 140"
            opacity="0.6"
          />
          <path
            d="M70 260 C150 230, 220 275, 290 245 C330 230, 345 255, 365 248"
            opacity="0.35"
          />
        </g>

        {/* stamp rings */}
        <g fill="none" stroke="rgba(15,23,42,0.10)" strokeWidth="1.2">
          <circle cx="120" cy="110" r="42" />
          <circle cx="120" cy="110" r="28" />
        </g>
      </svg>
    </div>
  );
}
