import React from "react";
import { ButtonLink } from "@/components/ButtonLink";

const cases = [
  {
    title: "Private Equity",
    subtitle: "Value creation focus",
    body: "Growth capital and buyout investments delivered with active portfolio engagement and a disciplined governance mindset.",
    href: "/services/private-equity",
    tag: "Investment",
  },
  {
    title: "Wealth Management",
    subtitle: "Preservation + long-term growth",
    body: "Personalized, risk-aware portfolio construction designed for durable outcomes across market cycles.",
    href: "/services/wealth-management",
    tag: "Advisory",
  },
  {
    title: "Funding Facilitation",
    subtitle: "Readiness → introductions → execution",
    body: "Capital structuring support for SMEs and corporates, aligning funding networks with deal requirements.",
    href: "/services/funding-facilitation",
    tag: "Structuring",
  },
];

export function CaseStudyPreview() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {cases.map((c) => (
        <div
          key={c.title}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          {/* subtle motif */}
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_55%)]" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />

          <div className="relative p-7">
            <div className="flex items-center justify-between gap-3">
              <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {c.tag}
              </div>
              <span className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)] opacity-80" />
            </div>

            <div className="mt-5 text-lg font-semibold text-slate-900">{c.title}</div>
            <div className="mt-1 text-sm font-semibold text-blue-800">{c.subtitle}</div>
            <p className="mt-3 text-sm text-slate-600">{c.body}</p>

            <div className="mt-6">
              <ButtonLink href={c.href} variant="ghost" className="px-0" withArrow>
                View details
              </ButtonLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
