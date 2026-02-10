import Link from "next/link";
import React from "react";

type Variant = "primary" | "secondary" | "ghost";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
  withArrow = false,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
  withArrow?: boolean;
}) {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-xl px-4 py-2 text-sm font-semibold transition active:translate-y-[1px] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2";

  const styles: Record<Variant, string> = {
    primary: "bg-blue-700 text-white hover:bg-blue-800",
    secondary: "bg-white text-blue-900 ring-1 ring-inset ring-blue-200 hover:bg-blue-50",
    ghost: "text-blue-800 hover:bg-blue-50",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]} ${className}`}>
      <span className="relative z-10">{children}</span>

      {withArrow ? (
        <span className="relative z-10 transition group-hover:translate-x-0.5">→</span>
      ) : null}

      {/* Hover shine (no continuous animation) */}
      {variant !== "ghost" ? (
        <span aria-hidden className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute -left-1/2 top-0 h-full w-1/2 rotate-12 bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[240%]" />
        </span>
      ) : null}
    </Link>
  );
}
