import { ButtonLink } from "@/components/ButtonLink";

export function MobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-3 sm:hidden">
      <div className="mx-auto max-w-md rounded-2xl border border-slate-200 bg-white/90 p-3 shadow-lg backdrop-blur">
        <div className="flex items-center justify-between gap-3">
          <div className="min-w-0">
            <div className="text-sm font-semibold text-slate-900 truncate">Start an enquiry</div>
            <div className="text-xs text-slate-600 truncate">Private equity • wealth • funding</div>
          </div>
          <ButtonLink href="/contact" variant="primary" className="shrink-0" withArrow>
            Contact
          </ButtonLink>
        </div>
      </div>
    </div>
  );
}
