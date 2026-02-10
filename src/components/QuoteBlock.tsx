import React from "react";
import { ButtonLink } from "@/components/ButtonLink";

export function QuoteBlock({
  quote,
  label,
  href = "/approach",
}: {
  quote: string;
  label: string;
  href?: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white">
      {/* Static premium border glow */}
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(37,99,235,0.14),transparent_55%)]"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle_at_85%_20%,rgba(99,102,241,0.12),transparent_55%)]"
      />

      <div className="relative p-8 sm:p-10">
        <div className="inline-flex rounded-full bg-blue-700/10 px-3 py-1 text-xs font-semibold text-blue-800">
          {label}
        </div>

        <blockquote className="mt-5 text-balance text-2xl font-semibold leading-snug text-slate-900 sm:text-3xl">
          “{quote}”
        </blockquote>

        <div className="mt-6 flex flex-wrap items-center gap-3">
          <ButtonLink href={href} variant="secondary">
            Read the approach
          </ButtonLink>
          <span className="text-sm text-slate-500">
            Governance-first. Due diligence driven. Value creation focused.
          </span>
        </div>
      </div>
    </div>
  );
}
