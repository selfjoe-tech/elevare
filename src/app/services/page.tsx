import type React from "react";
import Image from "next/image";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";
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
import { LightSweepText } from "@/components/ui/LightSweepText";

/**
 * Services page design language (revamped):
 * - Alternating light-blue / white / dark sections
 * - Executive panels + image media (no SVG illustrations)
 * - Strong hierarchy, less visual noise
 * - Reveal + CSS transitions only
 */

function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ");
}

export function SoftCard({
  children,
  className = "",
  id,
  bgImage, // new
  tintClassName = "bg-white/60", // new: frosted tint
  hoverTintClassName = "bg-white/45", // new: hover tint
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
  bgImage?: string;
  tintClassName?: string;
  hoverTintClassName?: string;
}) {
  return (
    <div
      id={id}
      className={cx(
        "group relative overflow-hidden",
        "transition-transform duration-300 hover:-translate-y-0.5",
        "motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className
      )}
    >
      {/* Background image layer */}
      {bgImage && (
        <div
          className={cx(
            "absolute inset-0 bg-cover bg-center",
            "transition-transform duration-700 ease-out",
            "group-hover:scale-110",
            "motion-reduce:transition-none motion-reduce:transform-none"
          )}
          style={{ backgroundImage: `url(${bgImage})` }}
        />
      )}

      {/* Optional subtle contrast gradient (helps text stay readable on busy images) */}
      {bgImage && (
        <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-white/10 to-white/25" />
      )}

      {/* Frosted glass layer (this is the blur) */}
      <div
        className={cx(
          "absolute inset-0",
          "transition-[backdrop-filter,background-color] duration-300",
          "group-hover:backdrop-blur-xl",
          hoverTintClassName
        )}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
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
        "relative overflow-hidden rounded-[2.25rem]",
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

/** Drop-in image slot (never squashes) */
function ImageSlot({
  src,
  alt,
  height = "hero",
  priority = false,
  className = "",
  caption,
  darkOverlay = false,
}: {
  src: string;
  alt: string;
  height?: "hero" | "standard";
  priority?: boolean;
  className?: string;
  caption?: { eyebrow?: string; text: string };
  darkOverlay?: boolean;
}) {
  const h =
    height === "hero"
      ? "h-[280px] sm:h-[380px] lg:h-[560px]"
      : "h-[260px] sm:h-[340px] lg:h-[420px]";

  return (
    <div className={cn("group relative w-full", h, className)}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        className="object-cover object-center"
        sizes="(min-width: 1024px) 560px, 100vw"
      />

      {/* Executive overlays (subtle, not busy) */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(85%_90%_at_30%_25%,rgba(47,107,255,0.18)_0%,rgba(154,215,255,0.08)_45%,rgba(0,0,0,0)_75%)] opacity-100 transition-opacity duration-300 group-hover:opacity-90 motion-reduce:transition-none" />
      {darkOverlay ? <div className="pointer-events-none absolute inset-0 bg-black/25" /> : null}
      <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />

    </div>
  );
}

export function ServicesHero() {
  return (
    <section className="[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_42%,#ffffff_100%)]">
      <Container className="py-20 sm:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <h1 className="mt-6 text-6xl leading-tight text-[#0b1020] sm:text-6xl">
              Services
            </h1>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-6 text-xl leading-tight text-[#0b1020] sm:text-xl">
              Sophisticated capital solutions{" "}
              <span className="italic text-[#0b1020]/90">with executive clarity</span>.
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <LightSweepText
              className="mt-6 text-base leading-relaxed"
              baseClassName="text-[#71fff8]/55"
              finalClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#3b82f6] to-[#1d4ed8]"
              highlightColor="#a5cbfc"
              durationMs={1400}
              delayMs={80}
              once
              revealFill
            >
              We provide private equity investments, wealth management, hedge fund strategies,
              and funding facilitation for high-net-worth individuals, institutional investors,
              and growth-oriented businesses.
            </LightSweepText>
          </Reveal>

          <Reveal delay={230}>
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <ButtonLink href="/contact" variant="contact">
                Contact Us
              </ButtonLink>
              <ButtonLink href="/about" variant="gold">
                About Elevare
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}

export default function ServicesPage() {
  return (
    <>
      {/* HERO (light blue -> white) */}
      <ServicesHero />

      {/* WHITE: Service tiles + anchors */}
      <section className="bg-white py-20 ">
        
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              
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
              <SoftCard id="private-equity" className="p-6 scroll-mt-32"
                bgImage="/stock/bus-15.jpg"

              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                    <BriefcaseBusiness className="h-5 w-5 text-[#2f6bff]" />
                  </div>
                  
                </div>

                <div className="mt-4 text-lg font-semibold text-[#0b1020]">Private Equity</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]">
                  Growth and buyout investments, sector focus, active portfolio management, and exit planning.
                </p>

                <div className="mt-5 h-px w-full bg-black/5" />
                <div className="mt-4 text-xs text-[#0b1020]">
                  Typical outputs: diligence notes, IC memo, governance plan.
                </div>
              </SoftCard>
            </Reveal>

            <Reveal delay={70}>
              <SoftCard id="wealth" className="p-6 scroll-mt-32"
                bgImage="/stock/bus-16.jpg"

              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                    <Users className="h-5 w-5 text-[#2f6bff]" />
                  </div>
                  
                </div>

                <div className="mt-4 text-lg font-semibold text-[#0b1020]">Wealth Management</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]">
                  Portfolio construction, allocation, risk profiling, and long-term wealth planning.
                </p>

                <div className="mt-5 h-px w-full bg-black/5" />
                <div className="mt-4 text-xs text-[#0b1020]">
                  Typical outputs: allocation plan, review cadence, reporting pack.
                </div>
              </SoftCard>
            </Reveal>

            <Reveal delay={110}>
              <SoftCard id="hedge" className="p-6 scroll-mt-32"
                  bgImage="/stock/bus-18.jpg"

              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                    <LineChart className="h-5 w-5 text-[#2f6bff]" />
                  </div>
                  
                </div>

                <div className="mt-4 text-lg font-semibold text-[#0b1020]">Hedge Fund Strategies</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]">
                  Risk-managed strategies designed for resilience, volatility control, and disciplined execution.
                </p>

                <div className="mt-5 h-px w-full bg-black/5" />
                <div className="mt-4 text-xs text-[#0b1020]">
                  Typical outputs: risk notes, strategy brief, performance review.
                </div>
              </SoftCard>
            </Reveal>

            <Reveal delay={150}>
              <SoftCard id="funding" className="p-6 scroll-mt-32"
                bgImage="/stock/bus-17.jpg"

              >
                <div className="flex items-center justify-between">
                  <div className="grid h-11 w-11 place-items-center rounded-2xl bg-[#eaf1ff]">
                    <HandCoins className="h-5 w-5 text-[#2f6bff]" />
                  </div>
                  
                </div>

                <div className="mt-4 text-lg font-semibold text-[#0b1020]">Funding Facilitation</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]">
                  Capital raising, structuring debt/equity/hybrids, investor introductions, and readiness support.
                </p>

                <div className="mt-5 h-px w-full bg-black/5" />
                <div className="mt-4 text-xs text-[#0b1020]">
                  Typical outputs: model review, investor pack, term sheet support.
                </div>
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
                  How we work.{" "}<br/>
                  <span className="italic text-white/90">The executive process</span>
                </h2>
                <p className="mt-4 text-white/70">
                  We keep decisions structured: document assumptions, map risk early, and report clearly.
                </p>
              </Reveal>

              

              <Reveal delay={170}>
                <div className="mt-10 h-px w-28 bg-white/10" />
              </Reveal>

              <Reveal delay={220}>
                <div className="mt-8 text-sm text-white/65">
                  Outcome: fewer surprises, clearer trade-offs, and better decisions under real constraints.
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
                <h3 className="mt-6 text-3xl leading-tight text-[#0b1020] sm:text-4xl">
                  Wealth Management
                </h3>
                <h3 className="mt-6 text-2xl leading-tight text-[#0b1020] sm:text-2xl">
                  Portfolios built for{" "}
                  <span className="italic text-[#0b1020]/90">risk-adjusted outcomes</span>.
                </h3>
                <p className="mt-4 text-[#0b1020]/70">
                  We design allocation and risk profiles that match your timeline and reporting expectations,
                  with a focus on sustainable long-term wealth planning.
                </p>
              </Reveal>

              
            </div>

            <div className="lg:col-span-6">
              <Reveal delay={140}>
                <MediaPanel>
                  <ImageSlot
                    src="/stock/bus-11.jpg" // put in /public/stock/
                    alt="Portfolio construction"
                    height="standard"
                    caption={{
                      eyebrow: "Portfolio",
                      text: "Allocation, downside control, and disciplined review cycles.",
                    }}
                  />
                </MediaPanel>
              </Reveal>
            </div>
          </div>

          {/* Row 2: media left, text right */}
          <div className="mt-14 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6 lg:order-1 order-2">
              <Reveal delay={120}>
                <MediaPanel>
                  <ImageSlot
                    src="/stock/bus-10.jpg" // put in /public/stock/
                    alt="Investor network and introductions"
                    height="standard"
                    caption={{
                      eyebrow: "Network",
                      text: "Introductions supported by diligence, structure, and governance.",
                    }}
                  />
                </MediaPanel>
              </Reveal>
            </div>

            <div className="lg:col-span-6 lg:order-2 order-1">
              <Reveal>
                <h3 className="mt-6 text-3xl leading-tight text-[#0b1020] sm:text-4xl">
                  Funding Facilitation
                </h3>
                <h3 className="mt-6 text-xl leading-tight text-[#0b1020] sm:text-xl">
                  Capital structures that{" "}
                  <span className="italic text-[#0b1020]/90">survive reality</span>.
                </h3>
                <p className="mt-4 text-[#0b1020]/70">
                  We support businesses through strategic funding, governance, and financial expertise,
                  connecting investors with quality opportunities via strong networks and disciplined diligence.
                </p>
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
