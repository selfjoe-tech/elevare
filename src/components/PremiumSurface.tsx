import React from "react";

export function PremiumSurface({
  children,
  className = "",
  innerClassName = "",
}: {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}) {
  return (
    <div className={["relative", className].join(" ")}>
      {/* static glow (no animation) */}
      <div
        aria-hidden
        className="pointer-events-none absolute -inset-6 rounded-[32px] bg-[radial-gradient(circle_at_30%_20%,rgba(37,99,235,0.18),transparent_60%)] blur-2xl"
      />
      {/* gradient stroke */}
      <div className="relative rounded-[26px] bg-gradient-to-br from-blue-500/35 via-indigo-500/25 to-cyan-400/20 p-[1px]">
        <div
          className={[
            "rounded-[25px] border border-white/10 bg-white/5 shadow-[0_22px_80px_rgba(0,0,0,0.42)] backdrop-blur",
            innerClassName,
          ].join(" ")}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
