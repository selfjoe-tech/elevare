"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";
import {
  ShieldCheck,
  Network,
  Scale,
  LineChart,
  BadgeCheck,
  Landmark,
} from "lucide-react";

function useInView(threshold = 0.22) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || active) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) {
      setActive(true);
      return;
    }

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
          io.disconnect();
        }
      },
      { threshold }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [active, threshold]);

  return { ref, active };
}

function MetricBar({
  label,
  note,
  value,
  active,
}: {
  label: string;
  note: string;
  value: number; // 0..100 (visual emphasis, not a claim)
  active: boolean;
}) {
  return (
    <div className="space-y-2">
      <div className="flex items-end justify-between gap-4">
        <div className="text-sm font-semibold text-[#0b1020]">{label}</div>
        <div className="text-xs text-[#0b1020]/55">{note}</div>
      </div>

      <div className="h-9 w-full rounded-2xl bg-[#eaf1ff] p-1">
        <div
          className="h-full rounded-2xl bg-gradient-to-r from-[#2f6bff] to-[#75c2ff] transition-[width] duration-700 ease-out motion-reduce:transition-none"
          style={{ width: active ? `${value}%` : "0%" }}
        />
      </div>
    </div>
  );
}

function BarGraphIllustration() {
  return (
    <svg viewBox="0 0 420 220" className="h-[160px] w-full">
      <defs>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" stopOpacity="1" />
          <stop offset="1" stopColor="#75c2ff" stopOpacity="1" />
        </linearGradient>
        <linearGradient id="fade" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#2f6bff" stopOpacity="0.18" />
          <stop offset="1" stopColor="#2f6bff" stopOpacity="0" />
        </linearGradient>
      </defs>

      {/* soft bg */}
      <rect x="0" y="0" width="420" height="220" rx="18" fill="url(#fade)" />

      {/* axis */}
      <line x1="46" y1="178" x2="392" y2="178" stroke="#0b1020" strokeOpacity="0.12" />
      <line x1="46" y1="34" x2="46" y2="178" stroke="#0b1020" strokeOpacity="0.12" />

      {/* bars */}
      {[
        { x: 90, h: 92, label: "Value" },
        { x: 160, h: 126, label: "Risk" },
        { x: 230, h: 110, label: "Growth" },
        { x: 300, h: 140, label: "Networks" },
      ].map((b) => (
        <g key={b.x}>
          <rect
            x={b.x}
            y={178 - b.h}
            width="44"
            height={b.h}
            rx="14"
            fill="url(#g)"
          />
          
        </g>
      ))}

      {/* title */}
      
    </svg>
  );
}

function TileIllustration() {
  return (
    <svg viewBox="0 0 420 260" className="h-[160px] w-full">
      <defs>
        <linearGradient id="tg" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#9ad7ff" />
        </linearGradient>
      </defs>

      <rect x="0" y="0" width="420" height="260" rx="22" fill="#f5f9ff" />
      <g opacity="0.95">
        {[
          { x: 220, y: 62 },
          { x: 292, y: 92 },
          { x: 168, y: 108 },
          { x: 244, y: 140 },
          { x: 316, y: 158 },
        ].map((t, i) => (
          <g key={i}>
            <rect x={t.x} y={t.y} width="78" height="56" rx="18" fill="#ffffff" stroke="rgba(47,107,255,0.14)" />
            <rect x={t.x + 16} y={t.y + 16} width="22" height="22" rx="7" fill={i === 3 ? "url(#tg)" : "rgba(47,107,255,0.10)"} />
            <rect x={t.x + 44} y={t.y + 18} width="22" height="6" rx="3" fill="rgba(11,16,32,0.12)" />
            <rect x={t.x + 44} y={t.y + 30} width="16" height="6" rx="3" fill="rgba(11,16,32,0.10)" />
          </g>
        ))}
      </g>
    </svg>
  );
}

export default function CapabilityShowcase() {
  const { ref, active } = useInView();

  return (
    <section
      className={cn(
        "py-20",
        "[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_40%,#ffffff_100%)]"
      )}
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h2 className="text-4xl leading-tight text-[#0b1020] sm:text-5xl">
              Statistic capability,{" "}
              <span className="italic text-[#0b1020]/90">built on discipline</span>
            </h2>
          </Reveal>
          <Reveal delay={90}>
            <p className="mt-5 text-base leading-relaxed text-[#0b1020]/70">
              Elevare Group Holdings provides sophisticated capital solutions with a strong focus on
              value creation, risk management, and long-term capital growth within Africa and select global markets.
            </p>
          </Reveal>
        </div>

        {/* Collage grid */}
        <div ref={ref} className="mt-14 grid gap-6 lg:grid-cols-12">
          {/* LEFT COLUMN */}
          <div className="grid gap-6 lg:col-span-3">
            <Reveal>
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
                
                <div className="mt-4">
                  <BarGraphIllustration />
                </div>
                
              </div>
            </Reveal>

            <Reveal delay={80}>
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
                <div className="flex items-center gap-3">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                    <Landmark className="h-5 w-5 text-[#2f6bff]" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0b1020]">Regulatory alignment</div>
                    <div className="text-xs text-[#0b1020]/55">
                      Transparency & compliance focus
                    </div>
                  </div>
                </div>

                <div className="mt-5 grid gap-3">
                  {[
                    { icon: <BadgeCheck className="h-4 w-4 text-[#2f6bff]" />, t: "Transparent reporting cadence" },
                    { icon: <ShieldCheck className="h-4 w-4 text-[#2f6bff]" />, t: "Risk flags and governance checks" },
                    { icon: <Scale className="h-4 w-4 text-[#2f6bff]" />, t: "Responsible investment practices" },
                  ].map((x) => (
                    <div key={x.t} className="flex items-center gap-3 rounded-2xl bg-[#f4f8ff] px-4 py-3">
                      <div className="grid h-8 w-8 place-items-center rounded-xl bg-white">
                        {x.icon}
                      </div>
                      <div className="text-sm text-[#0b1020]/75">{x.t}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* MIDDLE BIG CARD */}
          <div className="lg:col-span-6">
            <Reveal delay={120}>
              <div className="h-full rounded-[2.25rem] border border-black/5 bg-white p-8 shadow-[0_1px_0_rgba(16,24,40,0.06),0_22px_60px_rgba(16,24,40,0.12)]">
                <div className="text-xs uppercase tracking-[0.28em] text-[#0b1020]/45">
                  Mission-driven execution
                </div>

                <h3 className="mt-4 text-3xl leading-tight text-[#0b1020]">
                  We structure and manage capital efficiently.
                </h3>

                <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[#0b1020]/65">
                  We connect investors with high-quality opportunities while supporting businesses through
                  strategic funding, governance, and financial expertise.
                </p>

                

                <div className="mt-10 flex flex-wrap gap-3">
                  {[
                    { icon: <LineChart className="h-4 w-4" />, t: "Value creation focus" },
                    { icon: <ShieldCheck className="h-4 w-4" />, t: "Risk management" },
                    { icon: <Network className="h-4 w-4" />, t: "Strong investor networks" },
                  ].map((b) => (
                    <span
                      key={b.t}
                      className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-4 py-2 text-xs font-sans text-[#2f6bff]"
                    >
                      {b.icon}
                      {b.t}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid gap-6 lg:col-span-3">
            <Reveal delay={140}>
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-7 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
                <div className="text-xl leading-tight text-[#0b1020]">
                  Empower smarter{" "}
                  <span className="italic text-[#0b1020]/90">investment operations</span>
                </div>
                <p className="mt-3 text-sm text-[#0b1020]/65">
                  Our vision is sustainable wealth creation with innovative financial solutions
                  and superior risk-adjusted returns.
                </p>
                
              </div>
            </Reveal>

            <Reveal delay={180}>
              <div className="rounded-[1.75rem] border border-black/5 bg-white p-6 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-[#2f6bff] to-[#9ad7ff]" />
                  <div>
                    <div className="text-sm font-semibold text-[#0b1020]">Executive reporting</div>
                    <div className="text-xs text-[#0b1020]/55">
                      Action items + risk flags
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-[#0b1020]/65">
                  Tailored solutions rather than one-size-fits-all products, backed by transparency
                  and regulatory compliance commitments.
                </p>

                <div className="mt-5 rounded-2xl bg-[#f4f8ff] px-4 py-3 text-xs text-[#0b1020]/60">
                  Competitive advantages: African market insight, innovative structures, strong networks.
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <Reveal delay={220}>
          <div className="mx-auto mt-14 max-w-4xl text-center text-sm text-[#0b1020]/55">
            We continue to push the boundaries of structured finance through disciplined capital allocation,
            governance, and responsible investment practices.
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
