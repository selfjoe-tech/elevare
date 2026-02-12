import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  BriefcaseBusiness,
  HandCoins,
  ShieldCheck,
  LineChart,
  Users,
  Network,
  Scale,
  BadgeCheck,
  Landmark,
} from "lucide-react";

/**
 * Services page design language:
 * - Alternating light-blue / white / dark sections
 * - Collage-like soft panels
 * - Borderless media panels beside key statements (left/right)
 * - Memory-safe animations: Reveal + CSS transitions only
 */

function SoftCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[1.75rem] bg-white shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]",
        "transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** Borderless “image panel” (no border) */
function MediaPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[2rem] overflow-hidden",
        "shadow-[0_1px_0_rgba(16,24,40,0.06),0_22px_60px_rgba(16,24,40,0.12)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-4 py-2 text-xs font-sans text-[#2f6bff]">
      {icon}
      {text}
    </span>
  );
}

/* Small, lightweight SVG “image” illustrations */
function DealFlowIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full">
      <defs>
        <linearGradient id="df" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#9ad7ff" />
        </linearGradient>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#bcdcff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" fill="url(#bg)" />
      <circle cx="430" cy="70" r="150" fill="#2f6bff" opacity="0.10" />
      <circle cx="90" cy="100" r="140" fill="#9ad7ff" opacity="0.22" />

      <rect x="62" y="74" width="396" height="230" rx="28" fill="#fff" opacity="0.92" />
      <rect x="62" y="74" width="396" height="230" rx="28" fill="#2f6bff" opacity="0.04" />

      <text x="92" y="118" fontSize="14" fill="rgba(11,16,32,0.55)">
        Deal flow and diligence (illustrative)
      </text>

      {[
        { x: 104, w: 170, t: "Sourcing" },
        { x: 290, w: 150, t: "Diligence" },
        { x: 104, w: 210, t: "Structuring" },
        { x: 334, w: 106, t: "Execution" },
      ].map((p, i) => (
        <g key={i}>
          <rect
            x={p.x}
            y={150 + i * 40}
            width={p.w}
            height="26"
            rx="13"
            fill={i === 1 ? "url(#df)" : "rgba(47,107,255,0.14)"}
          />
          <text
            x={p.x + 14}
            y={168 + i * 40}
            fontSize="12"
            fill={i === 1 ? "white" : "rgba(11,16,32,0.70)"}
          >
            {p.t}
          </text>
        </g>
      ))}
    </svg>
  );
}

function PortfolioIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full">
      <defs>
        <linearGradient id="pf" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#75c2ff" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" fill="#ffffff" />
      <rect width="520" height="360" fill="#2f6bff" opacity="0.05" />
      <circle cx="95" cy="72" r="130" fill="#9ad7ff" opacity="0.20" />
      <circle cx="430" cy="110" r="160" fill="#2f6bff" opacity="0.12" />

      <rect x="66" y="82" width="388" height="220" rx="28" fill="#fff" opacity="0.92" />
      <text x="96" y="122" fontSize="14" fill="rgba(11,16,32,0.55)">
        Portfolio construction (illustrative)
      </text>

      {/* pie-ish */}
      <circle cx="170" cy="206" r="62" fill="rgba(47,107,255,0.12)" />
      <path
        d="M170 144 A62 62 0 0 1 226 222 L170 206 Z"
        fill="url(#pf)"
      />
      <path
        d="M170 206 L226 222 A62 62 0 0 1 118 248 Z"
        fill="rgba(47,107,255,0.22)"
      />

      {/* bars */}
      {[
        { x: 286, h: 72 },
        { x: 332, h: 110 },
        { x: 378, h: 88 },
      ].map((b, i) => (
        <rect
          key={i}
          x={b.x}
          y={260 - b.h}
          width="30"
          height={b.h}
          rx="12"
          fill={i === 1 ? "url(#pf)" : "rgba(47,107,255,0.18)"}
        />
      ))}

      <rect x="286" y="276" width="122" height="10" rx="5" fill="rgba(11,16,32,0.10)" />
    </svg>
  );
}

function NetworkIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full">
      <defs>
        <linearGradient id="nw" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#9ad7ff" />
        </linearGradient>
      </defs>
      <rect width="520" height="360" fill="#ffffff" />
      <rect width="520" height="360" fill="#2f6bff" opacity="0.05" />

      <circle cx="120" cy="110" r="120" fill="#9ad7ff" opacity="0.20" />
      <circle cx="420" cy="90" r="150" fill="#2f6bff" opacity="0.12" />

      {/* nodes */}
      {[
        { x: 120, y: 160 },
        { x: 230, y: 120 },
        { x: 330, y: 190 },
        { x: 260, y: 240 },
        { x: 390, y: 130 },
      ].map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="18" fill={i === 1 ? "url(#nw)" : "rgba(47,107,255,0.18)"} />
          <circle cx={n.x} cy={n.y} r="8" fill="#fff" opacity="0.9" />
        </g>
      ))}

      {/* lines */}
      <path d="M120 160 L230 120 L390 130 L330 190 L260 240 L120 160" fill="none" stroke="rgba(47,107,255,0.25)" strokeWidth="3" />
      <text x="84" y="78" fontSize="14" fill="rgba(11,16,32,0.55)">
        Investor network + introductions (illustrative)
      </text>
    </svg>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO (light blue -> white) */}
      <section className="[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_42%,#ffffff_100%)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  Services
                </div>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-6 text-4xl leading-tight text-[#0b1020] sm:text-5xl">
                  Sophisticated capital solutions{" "}
                  <span className="italic text-[#0b1020]/90">with executive clarity</span>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0b1020]/70">
                  We provide private equity investments, wealth management, hedge fund strategies,
                  and funding facilitation for high-net-worth individuals, institutional investors,
                  and growth-oriented businesses.
                </p>
              </Reveal>

              <Reveal delay={230}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="/contact" variant="contact">
                    Contact Us
                  </ButtonLink>
                  <ButtonLink href="/about" variant="gold">
                    About Elevare
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-10 flex flex-wrap gap-3">
                  <Chip icon={<BadgeCheck className="h-4 w-4" />} text="Rigorous diligence" />
                  <Chip icon={<Scale className="h-4 w-4" />} text="Governance-first" />
                  <Chip icon={<Landmark className="h-4 w-4" />} text="Compliance mindset" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={160}>
                <MediaPanel className="aspect-[16/11]">
                  <DealFlowIllustration />
                </MediaPanel>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* WHITE: Service tiles + anchors */}
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full bg-[#eaf1ff] px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#2f6bff]">
                What we deliver
              </div>
              <h2 className="mt-6 text-3xl text-[#0b1020] sm:text-4xl">
                Built for value creation, risk control, and long-term growth.
              </h2>
              <p className="mt-4 text-[#0b1020]/70">
                Each service is tailored to your objectives, constraints, and reporting requirements.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Reveal>
              <SoftCard id="private-equity" className="p-6 scroll-mt-32">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <BriefcaseBusiness className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-4 text-lg font-semibold text-[#0b1020]">
                  Private Equity
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  Growth and buyout investments, sector focus, active portfolio management, and exit planning.
                </p>
              </SoftCard>
            </Reveal>

            <Reveal delay={70}>
              <SoftCard id="wealth" className="p-6 scroll-mt-32">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <Users className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-4 text-lg font-semibold text-[#0b1020]">
                  Wealth Management
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  Portfolio construction, allocation, risk profiling, and long-term wealth planning.
                </p>
              </SoftCard>
            </Reveal>

            <Reveal delay={110}>
              <SoftCard id="hedge" className="p-6 scroll-mt-32">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <LineChart className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-4 text-lg font-semibold text-[#0b1020]">
                  Hedge Fund Strategies
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  Risk-managed strategies designed for resilience, volatility control, and disciplined execution.
                </p>
              </SoftCard>
            </Reveal>

            <Reveal delay={150}>
              <SoftCard id="funding" className="p-6 scroll-mt-32">
                <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <HandCoins className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-4 text-lg font-semibold text-[#0b1020]">
                  Funding Facilitation
                </div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  Capital raising, structuring debt/equity/hybrids, investor introductions, and readiness support.
                </p>
              </SoftCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* DARK: How we work (process) */}
      <section className="bg-ink py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                  How we work:{" "}
                  <span className="italic text-white/90">executive process</span>
                </h2>
                <p className="mt-4 text-white/70">
                  We keep decisions structured: document assumptions, map risk early, and report clearly.
                </p>
              </Reveal>

              <Reveal delay={110}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-sans text-white/75">
                    Discovery
                  </span>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-sans text-white/75">
                    Due diligence
                  </span>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-sans text-white/75">
                    Structuring
                  </span>
                  <span className="rounded-full bg-white/5 px-4 py-2 text-xs font-sans text-white/75">
                    Reporting
                  </span>
                </div>
              </Reveal>
            </div>

            <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
              {[
                {
                  n: "01",
                  t: "Discovery",
                  d: "Objectives, constraints, timelines, confidentiality boundaries.",
                  icon: <Users className="h-5 w-5 text-gold" />,
                },
                {
                  n: "02",
                  t: "Due diligence",
                  d: "Governance checks, documentation review, risk mapping.",
                  icon: <ShieldCheck className="h-5 w-5 text-gold" />,
                },
                {
                  n: "03",
                  t: "Structuring",
                  d: "Debt, equity, and hybrid structures aligned to real-world constraints.",
                  icon: <Scale className="h-5 w-5 text-gold" />,
                },
                {
                  n: "04",
                  t: "Reporting",
                  d: "Executive summaries, action items, and risk flags on an agreed cadence.",
                  icon: <BadgeCheck className="h-5 w-5 text-gold" />,
                },
              ].map((s, idx) => (
                <Reveal key={s.n} delay={idx * 70}>
                  <div className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                    <div className="flex items-center justify-between">
                      <div className="text-xs font-sans uppercase tracking-[0.32em] text-white/55">
                        {s.n}
                      </div>
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
                        {s.icon}
                      </div>
                    </div>
                    <div className="mt-5 text-lg text-white">{s.t}</div>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">{s.d}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* LIGHT BLUE ALT: two “statement + image” rows (alternating media left/right) */}
      <section className="[background:linear-gradient(180deg,#ffffff_0%,#eaf3ff_40%,#bcdcff_100%)] py-20">
        <Container>
          {/* Row 1: text left, media right */}
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-white/80 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  Wealth management
                </div>
                <h3 className="mt-6 text-3xl leading-tight text-[#0b1020] sm:text-4xl">
                  Portfolios built for{" "}
                  <span className="italic text-[#0b1020]/90">risk-adjusted outcomes</span>.
                </h3>
                <p className="mt-4 text-[#0b1020]/70">
                  We design allocation and risk profiles that match your timeline and reporting expectations,
                  with a focus on sustainable long-term wealth planning.
                </p>
              </Reveal>

              <Reveal delay={110}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Chip icon={<LineChart className="h-4 w-4" />} text="Allocation design" />
                  <Chip icon={<ShieldCheck className="h-4 w-4" />} text="Risk profiling" />
                  <Chip icon={<BadgeCheck className="h-4 w-4" />} text="Clear reporting" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={140}>
                <MediaPanel className="aspect-[16/11]">
                  <PortfolioIllustration />
                </MediaPanel>
              </Reveal>
            </div>
          </div>

          {/* Row 2: media left, text right */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <Reveal delay={120}>
                <MediaPanel className="aspect-[16/11]">
                  <NetworkIllustration />
                </MediaPanel>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:order-2 order-1">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-white/80 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  Funding facilitation
                </div>
                <h3 className="mt-6 text-3xl leading-tight text-[#0b1020] sm:text-4xl">
                  Capital structures that{" "}
                  <span className="italic text-[#0b1020]/90">survive reality</span>.
                </h3>
                <p className="mt-4 text-[#0b1020]/70">
                  We support businesses through strategic funding, governance, and financial expertise,
                  connecting investors with quality opportunities via strong networks and disciplined diligence.
                </p>
              </Reveal>

              <Reveal delay={110}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Chip icon={<HandCoins className="h-4 w-4" />} text="Debt / equity / hybrid" />
                  <Chip icon={<Network className="h-4 w-4" />} text="Investor introductions" />
                  <Chip icon={<Scale className="h-4 w-4" />} text="Structuring + governance" />
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* DARK CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/5 p-10 text-center backdrop-blur-md">
              <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                Next step
              </div>
              <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Tell us what you’re trying to{" "}
                <span className="italic text-white/90">achieve</span>.
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/70">
                We’ll respond with a structured approach, timelines, and the real constraints to consider.
              </p>

              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/contact" variant="contact">
                  Contact Us
                </ButtonLink>
                <ButtonLink href="/about" variant="gold">
                  Learn more
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
