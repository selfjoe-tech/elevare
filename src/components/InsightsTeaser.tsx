import { ButtonLink } from "@/components/ButtonLink";

const insights = [
  {
    title: "Governance-first capital",
    body: "A practical lens for improving decision quality, accountability, and durability in capital allocation.",
    href: "/approach",
    tag: "Governance",
  },
  {
    title: "Risk-aware allocation",
    body: "How disciplined portfolio construction supports preservation and long-term compounding across cycles.",
    href: "/services",
    tag: "Wealth",
  },
  {
    title: "Funding readiness checklist",
    body: "A clean framework for preparing SMEs and corporates for funding conversations, structuring, and execution.",
    href: "/services/funding-facilitation",
    tag: "Funding",
  },
];

export function InsightsTeaser() {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {insights.map((i) => (
        <div
          key={i.title}
          className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white transition hover:-translate-y-0.5 hover:shadow-md"
        >
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_55%)]" />
          <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />

          <div className="relative p-7">
            <div className="flex items-center justify-between">
              <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                {i.tag}
              </span>
              <span className="h-2 w-2 rounded-full bg-[color:var(--champagne)] opacity-80" />
            </div>

            <div className="mt-5 text-lg font-semibold text-slate-900">{i.title}</div>
            <p className="mt-3 text-sm text-slate-600">{i.body}</p>

            <div className="mt-6">
              <ButtonLink href={i.href} variant="ghost" className="px-0" withArrow>
                Read
              </ButtonLink>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
