import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  BadgeCheck,
  ShieldCheck,
  LineChart,
  Network,
  Landmark,
  Scale,
  BriefcaseBusiness,
  HandCoins,
  Users,
} from "lucide-react";

/**
 * Copy source:
 * Company Profile - Elevare Holdings.docx
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

/** Borderless “image card” */
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

function MiniStat({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-white/70 px-5 py-4 backdrop-blur-md">
      <div className="text-xs uppercase tracking-[0.28em] text-[#0b1020]/50">
        {label}
      </div>
      <div className="mt-2 text-lg font-semibold text-[#0b1020]">{value}</div>
    </div>
  );
}

function BarGraphIllustration() {
  return (
    <svg viewBox="0 0 520 340" className="h-full w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#9ad7ff" />
        </linearGradient>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#bcdcff" stopOpacity="1" />
          <stop offset="1" stopColor="#ffffff" stopOpacity="1" />
        </linearGradient>
      </defs>

      <rect width="520" height="340" fill="url(#bg)" />
      <circle cx="410" cy="40" r="130" fill="#2f6bff" opacity="0.10" />
      <circle cx="90" cy="90" r="120" fill="#9ad7ff" opacity="0.22" />

      {/* panel */}
      <rect x="56" y="70" width="408" height="210" rx="26" fill="#ffffff" opacity="0.92" />
      <rect x="56" y="70" width="408" height="210" rx="26" fill="#2f6bff" opacity="0.04" />

      {/* title */}
      <text x="86" y="110" fontSize="14" fill="rgba(11,16,32,0.55)">
        Capability dashboard (illustrative)
      </text>

      {/* bars */}
      {[
        { x: 120, h: 86 },
        { x: 200, h: 132 },
        { x: 280, h: 108 },
        { x: 360, h: 154 },
      ].map((b, i) => (
        <g key={i}>
          <rect x={b.x} y={240 - b.h} width="48" height={b.h} rx="16" fill="url(#g1)" />
          <rect x={b.x} y={248} width="48" height="8" rx="4" fill="rgba(11,16,32,0.10)" />
        </g>
      ))}

      {/* footer pills */}
      <rect x="86" y="264" width="120" height="36" rx="18" fill="#eaf1ff" />
      <rect x="216" y="264" width="138" height="36" rx="18" fill="#eaf1ff" />
      <rect x="366" y="264" width="78" height="36" rx="18" fill="#eaf1ff" />

      <text x="110" y="287" fontSize="12" fill="#2f6bff">Value</text>
      <text x="245" y="287" fontSize="12" fill="#2f6bff">Governance</text>
      <text x="388" y="287" fontSize="12" fill="#2f6bff">Risk</text>
    </svg>
  );
}

function TilesIllustration() {
  return (
    <svg viewBox="0 0 520 340" className="h-full w-full">
      <defs>
        <linearGradient id="t" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#9ad7ff" />
        </linearGradient>
      </defs>
      <rect width="520" height="340" fill="#ffffff" />
      <rect width="520" height="340" fill="#2f6bff" opacity="0.05" />

      <circle cx="80" cy="60" r="110" fill="#9ad7ff" opacity="0.20" />
      <circle cx="430" cy="90" r="140" fill="#2f6bff" opacity="0.12" />

      {[
        { x: 80, y: 86, w: 150, h: 92 },
        { x: 250, y: 64, w: 190, h: 116 },
        { x: 80, y: 196, w: 220, h: 104 },
        { x: 320, y: 200, w: 120, h: 100 },
      ].map((r, i) => (
        <g key={i}>
          <rect x={r.x} y={r.y} width={r.w} height={r.h} rx="28" fill="#ffffff" opacity="0.92" />
          <rect x={r.x + 22} y={r.y + 22} width="44" height="44" rx="16" fill={i === 1 ? "url(#t)" : "rgba(47,107,255,0.12)"} />
          <rect x={r.x + 78} y={r.y + 28} width={Math.max(56, r.w - 120)} height="10" rx="5" fill="rgba(11,16,32,0.14)" />
          <rect x={r.x + 78} y={r.y + 46} width={Math.max(44, r.w - 160)} height="10" rx="5" fill="rgba(11,16,32,0.10)" />
        </g>
      ))}
    </svg>
  );
}

export default function AboutPage() {
  return (
    <>
      {/* HERO (Light blue -> white) */}
      <section className="[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_42%,#ffffff_100%)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  About Elevare Group Holdings
                </div>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-6 text-4xl leading-tight text-[#0b1020] sm:text-5xl">
                  An alternative investment and financial advisory firm{" "}
                  <span className="italic text-[#0b1020]/90">built for disciplined capital</span>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-xl text-base leading-relaxed text-[#0b1020]/70">
                  Elevare Group Holdings (Pty) Ltd is a South Africa based alternative investment and financial advisory firm
                  providing sophisticated capital solutions to high net worth individuals, institutional investors, and growth oriented businesses.
                </p>
              </Reveal>

              <Reveal delay={230}>
                <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <ButtonLink href="/contact" variant="contact">
                    Contact Us
                  </ButtonLink>
                  <ButtonLink href="/services" variant="gold">
                    View Services
                  </ButtonLink>
                </div>
              </Reveal>

              <Reveal delay={280}>
                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  <MiniStat label="Core focus" value="Value creation" />
                  <MiniStat label="Priority" value="Risk management" />
                  <MiniStat label="Outcome" value="Long term growth" />
                </div>
              </Reveal>
            </div>

            {/* Borderless “image card” */}
            <div className="lg:col-span-6">
              <Reveal delay={160}>
                <MediaPanel className="aspect-[16/11]">
                  <BarGraphIllustration />
                </MediaPanel>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* DARK BAND (Vision + Mission) */}
      <section className="bg-ink py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12 lg:items-stretch">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                  Vision &{" "}
                  <span className="italic text-white/90">Mission</span>
                </h2>
                <p className="mt-4 max-w-xl text-white/70">
                  We’re building an African investment firm recognized for sustainable wealth creation, innovative solutions,
                  and superior risk adjusted returns.
                </p>
              </Reveal>

              <Reveal delay={120}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Chip icon={<LineChart className="h-4 w-4" />} text="Value creation" />
                  <Chip icon={<ShieldCheck className="h-4 w-4" />} text="Risk discipline" />
                  <Chip icon={<Network className="h-4 w-4" />} text="Strong networks" />
                </div>
              </Reveal>
            </div>

            <div className="grid gap-6 lg:col-span-7 lg:grid-cols-2">
              <Reveal>
                <div className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                    Vision
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    To be a leading African investment firm recognized for delivering sustainable wealth creation,
                    innovative financial solutions, and superior risk adjusted returns.
                  </p>
                </div>
              </Reveal>

              <Reveal delay={90}>
                <div className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                    Mission
                  </div>
                  <p className="mt-4 text-base leading-relaxed text-white/75">
                    To structure and manage capital efficiently by connecting investors with high quality opportunities
                    while supporting businesses through strategic funding, governance, and financial expertise.
                  </p>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* LIGHT SECTION (Services overview + image panel on LEFT) */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Borderless “image card” LEFT */}
            <div className="lg:col-span-5 lg:order-1 order-2">
              <Reveal>
                <MediaPanel className="aspect-[16/12]">
                  <TilesIllustration />
                </MediaPanel>
              </Reveal>
            </div>

            <div className="lg:col-span-7 lg:order-2 order-1">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-[#eaf1ff] px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#2f6bff]">
                  Core services
                </div>
                <h2 className="mt-6 text-3xl leading-tight text-[#0b1020] sm:text-4xl">
                  Sophisticated capital solutions with{" "}
                  <span className="italic text-[#0b1020]/90">practical execution</span>.
                </h2>
                <p className="mt-4 max-w-2xl text-[#0b1020]/70">
                  We specialize in private equity investments, wealth management, hedge fund strategies, and funding facilitation,
                  with a strong focus on value creation, risk management, and long term capital growth within Africa and select global markets.
                </p>
              </Reveal>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                <Reveal>
                  <SoftCard className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                        <BriefcaseBusiness className="h-5 w-5 text-[#2f6bff]" />
                      </div>
                      <div className="text-lg font-semibold text-[#0b1020]">Private Equity</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#0b1020]/65">
                      Growth capital and buyout investments, sector focused strategies, active portfolio management,
                      and exit planning.
                    </p>
                  </SoftCard>
                </Reveal>

                <Reveal delay={70}>
                  <SoftCard className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                        <Users className="h-5 w-5 text-[#2f6bff]" />
                      </div>
                      <div className="text-lg font-semibold text-[#0b1020]">Wealth Management</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#0b1020]/65">
                      Personalized portfolio construction, allocation and risk profiling, generational wealth planning,
                      and estate/succession support (with legal partners).
                    </p>
                  </SoftCard>
                </Reveal>

                <Reveal delay={110}>
                  <SoftCard className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                        <HandCoins className="h-5 w-5 text-[#2f6bff]" />
                      </div>
                      <div className="text-lg font-semibold text-[#0b1020]">Funding Facilitation</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#0b1020]/65">
                      Capital raising for SMEs and corporates, structuring debt/equity/hybrids,
                      investor introductions, modelling, and investment readiness support.
                    </p>
                  </SoftCard>
                </Reveal>

                <Reveal delay={150}>
                  <SoftCard className="p-6">
                    <div className="flex items-center gap-3">
                      <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                        <ShieldCheck className="h-5 w-5 text-[#2f6bff]" />
                      </div>
                      <div className="text-lg font-semibold text-[#0b1020]">Risk Management</div>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-[#0b1020]/65">
                      Governance aligned decisions, disciplined review cycles, and clear reporting structures.
                    </p>
                  </SoftCard>
                </Reveal>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* LIGHT BLUE ALT (Philosophy + Advantage) */}
      <section className="[background:linear-gradient(180deg,#ffffff_0%,#eaf3ff_40%,#bcdcff_100%)] py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-white/80 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  Investment philosophy
                </div>
                <h2 className="mt-6 text-3xl leading-tight text-[#0b1020] sm:text-4xl">
                  Disciplined allocation,{" "}
                  <span className="italic text-[#0b1020]/90">strong governance</span>,
                  and hands-on engagement.
                </h2>
                <p className="mt-4 text-[#0b1020]/70">
                  Our approach combines rigorous due diligence, strategic insight, and responsible investment practices
                  to ensure long-term value creation.
                </p>
              </Reveal>

              <Reveal delay={110}>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Chip icon={<BadgeCheck className="h-4 w-4" />} text="Rigorous due diligence" />
                  <Chip icon={<Scale className="h-4 w-4" />} text="Responsible investment" />
                  <Chip icon={<Landmark className="h-4 w-4" />} text="Governance-first" />
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={90}>
                <SoftCard className="p-8">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-[#2f6bff]">
                    Competitive advantage
                  </div>
                  <div className="mt-6 grid gap-3">
                    {[
                      "Deep understanding of African markets",
                      "Flexible and innovative capital structures",
                      "Strong investor and funding networks",
                      "Tailored solutions rather than one-size-fits-all products",
                      "Commitment to transparency and regulatory compliance",
                    ].map((t) => (
                      <div key={t} className="flex items-start gap-3 rounded-2xl bg-[#f4f8ff] px-5 py-4">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-[#2f6bff]" />
                        <div className="text-sm text-[#0b1020]/70">{t}</div>
                      </div>
                    ))}
                  </div>
                </SoftCard>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* DARK ALT (Compliance + Values) */}
      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-6">
              <Reveal>
                <h2 className="text-3xl leading-tight text-white sm:text-4xl">
                  Compliance and{" "}
                  <span className="italic text-white/90">professional standards</span>
                </h2>
                <p className="mt-4 text-white/70">
                  Elevare Group Holdings operates in accordance with South African financial regulations and is committed
                  to obtaining and maintaining all required licenses, including registration with the Financial Sector Conduct Authority (FSCA) where applicable.
                </p>
              </Reveal>

              <Reveal delay={110}>
                <div className="mt-8 rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                    Target clients
                  </div>
                  <div className="mt-5 grid gap-3 sm:grid-cols-2">
                    {[
                      "High-net-worth individuals (HNWIs)",
                      "Family offices",
                      "Institutional investors",
                      "Corporates and SMEs seeking growth or restructuring capital",
                      "International investors seeking African exposure",
                    ].map((t) => (
                      <div key={t} className="rounded-2xl bg-white/5 px-4 py-3 text-sm text-white/75">
                        {t}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={80}>
                <div className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                    Corporate values
                  </div>
                  <div className="mt-6 grid gap-3 sm:grid-cols-2">
                    {[
                      "Integrity and accountability",
                      "Excellence and professionalism",
                      "Client-centric approach",
                      "Innovation and adaptability",
                      "Responsible investment",
                    ].map((v) => (
                      <div key={v} className="rounded-2xl bg-white/5 px-5 py-4 text-sm text-white/75">
                        {v}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 h-px w-full bg-white/10" />
                  <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-end">
                    <ButtonLink href="/contact" variant="contact">
                      Contact Us
                    </ButtonLink>
                    <ButtonLink href="/services" variant="gold">
                      Explore Services
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
