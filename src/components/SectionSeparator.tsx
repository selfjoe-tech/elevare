export function SectionSeparator() {
  return (
    <div aria-hidden className="py-8">
      <div className="flex items-center gap-3">
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)] opacity-80" />
        <div className="h-px flex-1 bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
      </div>
    </div>
  );
}
