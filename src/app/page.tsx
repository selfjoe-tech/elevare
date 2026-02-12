import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { BriefcaseBusiness, HandCoins, ShieldCheck } from "lucide-react";
import Link from "next/link";
import CapabilityShowcase from "@/components/sections/CapabilityShowcase";




function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={`rounded-3xl border border-white/10 bg-ink/55 shadow-elite backdrop-blur-md ${className ?? ""}`}
    >
      {children}
    </div>
  );
}

function Divider() {
  return <div className="h-px w-full bg-white/10" />;
}

export default function HomePage() {
  return (
    <>
      {/* HERO (video-style) */}
      <section className="relative">
        <div className="relative min-h-[95vh] overflow-hidden">
          <Image
            src="/images/lion-6.jpg"
            alt=""
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-ink/70" />
          <div className="absolute inset-0 bg-gold-sheen" />

          <Container className="relative flex min-h-[82vh] items-end pb-14 pt-16">
            <div className="grid w-full gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-end">
              <div>
                

                <Reveal delay={80}>
                  <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl md:text-6xl">
                    Serious stewardship{" "}
                    <span className="italic text-white/90">for serious money</span>.
                  </h1>
                </Reveal>

                <Reveal delay={150}>
                  <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/80 sm:text-lg">
                    Transparent. Disciplined. Client-first.
                  </p>
                </Reveal>

                <Reveal delay={220}>
                  <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                    <ButtonLink href="/contact" variant="contact">
                      Contact Us
                    </ButtonLink>
                    <ButtonLink href="/services" variant="gold" className="justify-center">
                      Explore Services
                    </ButtonLink>
                    
                  </div>
                </Reveal>

                <Reveal delay={280}>
                  <div className="mt-10">
                    <Divider />
                    
                  </div>
                </Reveal>
              </div>

              {/* Floating KPI card (like the video) */}
              
            </div>
          </Container>
        </div>
      </section>

      {/* “Numbers speak” section (video motif) */}
      <section className="[background:radial-gradient(90%_80%_at_30%_40%,rgba(47,107,255,0.60)_0%,rgba(47,107,255,0.28)_40%,rgba(47,107,255,0.14)_62%,rgba(5,5,5,1)_84%)] py-18 sm:py-22 bg-white/100">
        

      {/* Mosaic cards (like the video’s feature grid) */}
        <Container>
  <section className="py-20">
    <Reveal>
      <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
        Support when you need it
      </h2>
    </Reveal>

    <div className="mt-12 grid gap-12 text-center md:grid-cols-3 md:gap-8">
      <Reveal>
        <div className="flex flex-col items-center">
          {/* Icon */}
          <div className="grid h-12 w-12 place-items-center rounded-md border border-gold/25 bg-gold/12">
            <BriefcaseBusiness className="h-6 w-6 text-gold" />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            Private Equity
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Growth capital, buyouts, portfolio support, and exit strategy planning.
          </p>

          <Link
            href="/services#private-equity"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold/90 transition hover:text-gold"
          >
            Find out more <span aria-hidden className="text-gold">→</span>
          </Link>
        </div>
      </Reveal>

      <Reveal delay={80}>
        <div className="flex flex-col items-center">
          <div className="grid h-12 w-12 place-items-center rounded-md border border-gold/25 bg-gold/12">
            <HandCoins className="h-6 w-6 text-gold" />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            Funding Facilitation
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Debt, equity, and hybrid instruments with investor introductions and deal structuring.
          </p>

          <Link
            href="/services#funding"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold/90 transition hover:text-gold"
          >
            Hone your structure <span aria-hidden className="text-gold">→</span>
          </Link>
        </div>
      </Reveal>

      <Reveal delay={160}>
        <div className="flex flex-col items-center">
          <div className="grid h-12 w-12 place-items-center rounded-md border border-gold/25 bg-gold/12">
            <ShieldCheck className="h-6 w-6 text-gold" />
          </div>

          <h3 className="mt-5 text-lg font-semibold text-white">
            Risk Management
          </h3>

          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/70">
            Transparent reporting, compliance alignment, and disciplined review cycles.
          </p>

          <Link
            href="/services#risk"
            className="mt-6 inline-flex items-center gap-2 font-sans text-sm font-semibold text-gold/90 transition hover:text-gold"
          >
            Join the review <span aria-hidden className="text-gold">→</span>
          </Link>
        </div>
      </Reveal>
    </div>
  </section>
</Container>
      </section>

      <CapabilityShowcase />


      {/* Gradient interstitial (like the video’s big color panel, but gold/ink) */}
<section className="[background:linear-gradient(180deg,rgba(255,255,255,0.92)_0%,rgba(255,255,255,0.78)_22%,rgba(30,58,138,0.55)_115%,rgba(10,16,32,1)_8%)] h-[95vh] py-50">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl leading-tight text-white sm:text-5xl">
                Close the performance gap{" "}
                <span className="italic text-white/90">in your capital</span>.
              </h2>
              <p className="mt-5 text-white/70">
                Decision speed improves when reporting is clear and governance is tight.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/contact" variant="contact">
                  Contact Us
                </ButtonLink>
                <ButtonLink href="/services" variant="gold">
                  View Services
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* <section className="py-20">
        <Container>
          <Reveal>
            <div className="flex items-end justify-between gap-6">
              <h2 className="text-4xl text-white">
                Trusted by high{" "}
                <span className="italic text-white/90">growth</span> teams
              </h2>
              <ButtonLink href="/contact" variant="gold">
                Customer stories
              </ButtonLink>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="mt-10">
              <div className="no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4">
                {[
                  {
                    org: "Family Office",
                    quote:
                      "The reporting cadence is unmatched. Clear, executive, and action-oriented.",
                    name: "Client Partner",
                  },
                  {
                    org: "Growth SME",
                    quote:
                      "Funding structure was realistic, fast, and governance-aligned.",
                    name: "Founder",
                  },
                  {
                    org: "Institutional",
                    quote:
                      "Disciplined diligence, transparent risk flags, and strong execution.",
                    name: "Investment Lead",
                  },
                ].map((t) => (
                  <div
                    key={t.org}
                    className="min-w-[86%] snap-center sm:min-w-[55%] lg:min-w-[38%]"
                  >
                    <Card className="p-8">
                      <div className="text-white/60">{t.org}</div>
                      <p className="mt-5 text-lg leading-relaxed text-white">
                        “{t.quote}”
                      </p>
                      <div className="mt-8 text-sm text-white/70">{t.name}</div>
                    </Card>
                  </div>
                ))}
              </div>

              <div className="mx-auto mt-4 h-1.5 w-44 rounded-full bg-white/10">
                <div className="h-1.5 w-12 rounded-full bg-gold/80" />
              </div>
            </div>
          </Reveal>
        </Container>
      </section> */}

      {/* FAQ (video-style pills) */}
      <section className="bg-black py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl text-white">
                Have a <span className="italic">question</span>?
              </h2>
              <p className="mt-4 text-white/70">
                Clear answers to common questions about how we work.
              </p>
            </div>
          </Reveal>

          <div className="mx-auto mt-10 max-w-3xl space-y-4">
            {[
              {
                q: "How do you protect client confidentiality?",
                a: "Strict information handling, need-to-know access, and professional governance standards.",
              },
              {
                q: "What happens after we contact you?",
                a: "Discovery call, documentation review, then a structured proposal with timelines and next steps.",
              },
              {
                q: "Do you offer custom structures?",
                a: "Yes. We tailor structures to the deal realities, risk profile, and governance requirements.",
              },
              {
                q: "How do you report progress?",
                a: "Executive summaries, risk flags, milestones, and action items delivered on an agreed cadence.",
              },
            ].map((item) => (
              <Reveal key={item.q} delay={70}>
                <details className="group rounded-2xl border border-white/10 bg-white/5 px-6 py-4">
                  <summary className="cursor-pointer list-none text-base text-white">
                    <div className="flex items-center justify-between gap-6">
                      <span>{item.q}</span>
                      <span className="grid h-9 w-9 place-items-center rounded-full border border-white/10 bg-ink/30 font-sans text-lg text-white/80 transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>
                  <p className="mt-4 text-white/70">{item.a}</p>
                </details>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final CTA + footer already exists (your footer component) */}
      <section className="[background:radial-gradient(90%_80%_at_30%_40%,rgba(47,107,255,0.60)_0%,rgba(47,107,255,0.28)_40%,rgba(47,107,255,0.14)_62%,rgba(5,5,5,1)_84%)] py-50">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="text-4xl text-white sm:text-5xl">
                Ready to shape the future{" "}
                <span className="italic text-white">of your capital</span> ?
              </h2>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="/contact" variant="contact">
                  Contact Us
                </ButtonLink>
                <ButtonLink href="/services" variant="gold">
                  View Services
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
