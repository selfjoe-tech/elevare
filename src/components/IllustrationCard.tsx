import Image from "next/image";

type Props = {
  src?: string; // e.g. "/illustrations/hero-1.png"
  alt?: string;
  label?: string;
  caption?: string;
  ratio?: "wide" | "square" | "tall"; // controls reserved space shape
  className?: string;
};

const ratioPad: Record<NonNullable<Props["ratio"]>, string> = {
  wide: "pb-[56%]",   // ~16:9-ish
  square: "pb-[100%]",
  tall: "pb-[125%]",
};

export function IllustrationCard({
  src,
  alt = "Illustration",
  label = "Illustration",
  caption = "Drop an image here later (public/illustrations)",
  ratio = "wide",
  className = "",
}: Props) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm",
        "transition hover:-translate-y-0.5 hover:shadow-md",
        className,
      ].join(" ")}
    >
      {/* Premium frame */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />

      <div className="relative p-5 sm:p-6">
        <div className="flex items-center justify-between gap-3">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
            <span className="h-2 w-2 rounded-full bg-blue-700" />
            {label}
          </div>
          <span className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)] opacity-80" />
        </div>

        {/* Reserved image space (always reserves space even if no image yet) */}
        <div className={["relative mt-4 w-full", ratioPad[ratio]].join(" ")}>
          <div className="absolute inset-0 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            {src ? (
              <Image
                src={src}
                alt={alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                sizes="(max-width: 768px) 92vw, (max-width: 1200px) 40vw, 520px"
                priority={label.toLowerCase().includes("hero")}
              />
            ) : (
              // Premium placeholder (no image yet)
              <div className="h-full w-full bg-gradient-to-br from-slate-50 via-white to-blue-50">
                <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.12)_1px,transparent_0)] [background-size:18px_18px]" />
                <div className="absolute inset-0 flex items-center justify-center p-6">
                  <div className="text-center">
                    <div className="text-sm font-semibold text-slate-800">
                      Illustration slot
                    </div>
                    <div className="mt-1 text-xs text-slate-600">
                      {caption}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white px-3 py-1 text-xs font-semibold text-blue-900 ring-1 ring-blue-200">
                      Suggested: 1600px wide • .webp/.png
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Subtle top gloss */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-white/35 to-transparent opacity-60"
            />
          </div>
        </div>

        <div className="mt-4 text-sm font-semibold text-slate-900">{alt}</div>
        <div className="mt-1 text-sm text-slate-600">{caption}</div>
      </div>
    </div>
  );
}
