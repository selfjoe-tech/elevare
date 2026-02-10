const principles = [
  { title: "Governance-first", body: "Decisions built on accountability and discipline." },
  { title: "Due diligence", body: "Rigour that supports quality outcomes." },
  { title: "Risk-aware", body: "Designed for durability across cycles." },
  { title: "Value creation", body: "Engagement focused on long-term outcomes." },
  { title: "Flexible structuring", body: "Debt, equity, and hybrid thinking." },
];

export function PrinciplesRail() {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white p-6">
      <div className="flex items-center justify-between">
        <div className="text-sm font-semibold text-slate-900">Principles</div>
        <div className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)] opacity-80" />
      </div>

      <div className="mt-5 flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {principles.map((p) => (
          <div
            key={p.title}
            className="snap-start min-w-[260px] rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-slate-50 p-5 transition hover:-translate-y-0.5 hover:shadow-sm"
          >
            <div className="text-sm font-semibold text-slate-900">{p.title}</div>
            <div className="mt-2 text-sm text-slate-600">{p.body}</div>
            <div className="mt-4 h-[2px] w-10 rounded-full bg-[color:var(--champagne)] opacity-70" />
          </div>
        ))}
      </div>
    </div>
  );
}
