import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { ButtonLink } from "@/components/ButtonLink";
import { Reveal } from "@/components/Reveal";
import { ContourLines } from "@/components/ContourLines";
import { PremiumSurface } from "@/components/PremiumSurface";
import { MarketLines } from "@/components/MarketLines";
import { HeroMosaic } from "@/components/HeroMosaic";
import { StickySectionNav } from "@/components/StickySectionNav";
import { QuoteBlock } from "@/components/QuoteBlock";
import { ProcessStepper } from "@/components/ProcessStepper";
import { SegmentTabs } from "@/components/SegmentTabs";
import { CaseStudyPreview } from "@/components/CaseStudyPreview";
import { advantages, overview, philosophy, services, site } from "@/lib/content";
import { HeroIllustrations } from "@/components/HeroIllustrations";
import { SectionCornerIllustration } from "@/components/SectionCornerIllustration";
import { IllustrationCard } from "@/components/IllustrationCard";


function PremiumBackdrop() {
  return (
    <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.44),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_8%,rgba(99,102,241,0.30),transparent_58%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(14,165,233,0.18),transparent_62%)]" />
      <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:18px_18px]" />
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-white" />
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative">
      {/* HERO */}
      <section id="top" className="relative">
        <PremiumBackdrop />
        <ContourLines className="opacity-70" />


        <Container className="pt-14 pb-12 sm:pt-20 sm:pb-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              

              <Reveal delayMs={80}>
                <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                  Sophisticated capital solutions with a governance-first mindset
                </h1>
              </Reveal>

              <Reveal delayMs={140}>
                <p className="mt-5 max-w-2xl text-pretty text-lg text-white/75">
                  {overview.summary}
                </p>
              </Reveal>

              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-wrap gap-3">
                  <ButtonLink href="/services" variant="secondary" className="bg-white/95" withArrow>
                    Explore services
                  </ButtonLink>
                  <ButtonLink href="/contact" variant="ghost" className="text-white hover:bg-white/10" withArrow>
                    Speak to us
                  </ButtonLink>
                </div>
              </Reveal>

              {/* Upgrade #1: Hero Mosaic */}
              
            </div>

            {/* Right: your panel, upgraded with PremiumSurface, NO rotating gradient */}
            <div className="lg:col-span-4">
              
              
            </div>
          </div>
        </Container>
      </section>

      {/* CONTENT + Sticky nav wrapper */}
      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 xl:grid-cols-[1fr_260px] xl:items-start">
            <div className="space-y-14">
              {/* Upgrade #2: MarketLines motif used behind headings */}
              <section id="philosophy" className="relative scroll-mt-28">

                <MarketLines className="text-blue-200" />
                <Reveal>
                  <QuoteBlock label="Investment Philosophy" quote={philosophy} href="/approach" />
                </Reveal>
              </section>

              {/* Upgrade #5/6: Sections with IDs for nav + micro hover interactions inside */}
              <section id="execution" className="relative scroll-mt-28">
                <MarketLines className="opacity-40" />
                <Reveal>
                  <SectionHeading
                    eyebrow="Execution"
                    title="Discipline you can feel"
                    subtitle="A structured flow supporting governance strength, risk awareness, and long-term value creation."
                  />
                </Reveal>
                <div className="mt-10">
                  <Reveal delayMs={120}>
                    <ProcessStepper />
                  </Reveal>
                </div>
              </section>

              <section id="lens" className="relative scroll-mt-28">
                <Reveal>
                  <SectionHeading
                    eyebrow="Client Lens"
                    title="A tailored route for every capital objective"
                    subtitle="Choose your lens. The page adapts without overwhelming the scroll."
                  />
                </Reveal>
                <div className="mt-10">
                  <Reveal delayMs={120}>
                    <SegmentTabs
                      tabs={[
                        {
                          key: "investors",
                          label: "Investors",
                          title: "Risk-aware growth with disciplined allocation",
                          body:
                            "Elevare supports high-net-worth and institutional investors with alternative investment thinking, governance strength, and long-term value creation focus.",
                          bullets: [
                            "Private equity value creation focus",
                            "Wealth management portfolio discipline",
                            "Africa-focused market understanding",
                            "Transparency and governance mindset",
                          ],
                          cta: { label: "Explore services", href: "/services" },
                        },
                        {
                          key: "businesses",
                          label: "Businesses",
                          title: "Funding facilitation built for execution",
                          body:
                            "For SMEs and corporates, Elevare supports structuring, investment readiness, and introductions through funding networks aligned to the deal.",
                          bullets: [
                            "Debt, equity, and hybrid structuring",
                            "Financial modelling and readiness support",
                            "Investor introductions and deal support",
                            "Governance-first approach",
                          ],
                          cta: { label: "Start an enquiry", href: "/contact" },
                        },
                        {
                          key: "institutions",
                          label: "Institutions",
                          title: "Structured solutions with compliance awareness",
                          body:
                            "Elevare’s approach prioritizes robust governance, diligence, and responsible investment practices to support institutional-grade decision-making.",
                          bullets: [
                            "Rigorous due diligence orientation",
                            "Responsible investment posture",
                            "Flexible capital structures",
                            "Long-term value creation mindset",
                          ],
                          cta: { label: "View our approach", href: "/approach" },
                        },
                      ]}
                    />
                  </Reveal>
                </div>
              </section>

              {/* Upgrade #8: Case study previews */}
              <section id="casework" className="relative scroll-mt-28">

                <Reveal>
                  <SectionHeading
                    eyebrow="Casework"
                    title="What our work looks like"
                    subtitle="Illustrative previews aligned to your core services. No invented clients or figures."
                  />
                </Reveal>
                <div className="mt-10">
                  <Reveal delayMs={120}>
                    <CaseStudyPreview />
                  </Reveal>
                </div>
              </section>

              <section id="advantage" className="relative scroll-mt-28">

                <Reveal>
                  <SectionHeading
                    eyebrow="Why Elevare"
                    title="Differentiators that matter"
                    subtitle="Designed for disciplined decisions and consistent delivery."
                  />
                </Reveal>

                <div className="mt-10 grid gap-4 lg:grid-cols-12">
                  <Reveal className="lg:col-span-7">
                    <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-800 to-indigo-800 p-8 text-white">
                      <div className="text-xs font-semibold text-white/80">SIGNATURE STRENGTH</div>
                      <div className="mt-2 text-2xl font-semibold">{advantages[0]}</div>
                      <div className="mt-3 text-sm text-white/80">
                        Flexible capital structures and strong funding networks to support execution.
                      </div>
                      <div className="mt-6">
                        <ButtonLink href="/advantage" variant="secondary" className="bg-white/95" withArrow>
                          View all advantages
                        </ButtonLink>
                      </div>
                    </div>
                  </Reveal>

                  <div className="lg:col-span-5 grid gap-4">
                    {advantages.slice(1, 3).map((a, i) => (
                      <Reveal key={a} delayMs={100 * i}>
                        <div className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
                          <div className="text-sm font-semibold text-slate-900">{a}</div>
                          <div className="mt-2 text-sm text-slate-600">
                            A practical advantage that supports outcomes.
                          </div>
                          <div className="mt-4 h-[2px] w-10 rounded-full bg-[color:var(--champagne)] opacity-70" />
                        </div>
                      </Reveal>
                    ))}
                  </div>
                </div>
              </section>

              {/* CTA */}
              <section id="contact" className="scroll-mt-28">
                <Reveal>
                  <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-950 to-slate-950 p-8 sm:p-10 text-white">
                    <div className="inline-flex rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/85 ring-1 ring-white/10">
                      Start here
                    </div>
                    <h3 className="mt-4 text-balance text-3xl font-semibold">
                      Let’s discuss your capital objectives
                    </h3>
                    <p className="mt-3 text-sm text-white/75">
                      Connect for private equity, wealth management, or funding facilitation support.
                    </p>

                    <div className="mt-6 flex flex-wrap gap-3">
                      <ButtonLink href="/contact" variant="secondary" className="bg-white/95" withArrow>
                        Contact
                      </ButtonLink>
                      <ButtonLink href="/services" variant="ghost" className="text-white hover:bg-white/10" withArrow>
                        Explore services
                      </ButtonLink>
                    </div>
                  </div>
                </Reveal>
              </section>
            </div>

            {/* Upgrade #5: Sticky section nav */}
            <StickySectionNav
              items={[
                { id: "philosophy", label: "Philosophy" },
                { id: "execution", label: "Execution" },
                { id: "lens", label: "Client Lens" },
                { id: "casework", label: "Casework" },
                { id: "advantage", label: "Advantage" },
                { id: "contact", label: "Contact" },
              ]}
            />
          </div>
        </Container>
      </section>
    </div>
  );
}
