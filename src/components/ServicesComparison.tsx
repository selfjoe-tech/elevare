import { ButtonLink } from "@/components/ButtonLink";

export type ServiceCompareItem = {
  title: string;
  bestFor: string;
  outcome: string;
  engagement: string;
  href: string;
};

export function ServicesComparison({ items }: { items: ServiceCompareItem[] }) {
  return (
    <div className="rounded-3xl border border-slate-200 bg-white overflow-hidden">
      <div className="p-6 sm:p-8">
        <div className="flex items-center justify-between gap-3">
          <div>
            <div className="text-sm font-semibold text-slate-900">Service comparison</div>
            <div className="mt-1 text-sm text-slate-600">
              A quick lens for choosing the right starting point.
            </div>
          </div>
          <div className="hidden sm:block h-[2px] w-20 rounded-full bg-gradient-to-r from-blue-700 via-indigo-600 to-[color:var(--champagne)] opacity-70" />
        </div>
      </div>

      {/* Desktop table */}
      <div className="hidden lg:block border-t border-slate-200">
        <table className="w-full text-left">
          <thead className="bg-slate-50">
            <tr className="text-xs font-semibold text-slate-600">
              <th className="px-6 py-3">Service</th>
              <th className="px-6 py-3">Best for</th>
              <th className="px-6 py-3">Outcome</th>
              <th className="px-6 py-3">Engagement</th>
              <th className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {items.map((s) => (
              <tr key={s.title} className="border-t border-slate-200">
                <td className="px-6 py-5">
                  <div className="font-semibold text-slate-900">{s.title}</div>
                </td>
                <td className="px-6 py-5 text-sm text-slate-600">{s.bestFor}</td>
                <td className="px-6 py-5 text-sm text-slate-600">{s.outcome}</td>
                <td className="px-6 py-5 text-sm text-slate-600">{s.engagement}</td>
                <td className="px-6 py-5">
                  <ButtonLink href={s.href} variant="ghost" className="px-0" withArrow>
                    View
                  </ButtonLink>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="lg:hidden border-t border-slate-200 p-6 sm:p-8 grid gap-4">
        {items.map((s) => (
          <div key={s.title} className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <div className="flex items-center justify-between">
              <div className="font-semibold text-slate-900">{s.title}</div>
              <span className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)] opacity-80" />
            </div>
            <div className="mt-3 grid gap-2 text-sm text-slate-600">
              <div><span className="font-semibold text-slate-700">Best for:</span> {s.bestFor}</div>
              <div><span className="font-semibold text-slate-700">Outcome:</span> {s.outcome}</div>
              <div><span className="font-semibold text-slate-700">Engagement:</span> {s.engagement}</div>
            </div>
            <div className="mt-4">
              <ButtonLink href={s.href} variant="ghost" className="px-0" withArrow>
                View
              </ButtonLink>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
