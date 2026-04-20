import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/button";
import { BriefcaseBusiness, HandCoins, ShieldCheck } from "lucide-react";
import Link from "next/link";
import CapabilityShowcase from "@/components/sections/CapabilityShowcase";


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
            src="/stock/e-1.jpg"
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
                    Impact Through{" "}
                    Integrity
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
                    <ButtonLink href="/about" variant="gold" className="justify-center">
                      About us
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
    {/* Column wrapper */}
    <div className="flex flex-col items-center">
      <Reveal>
        <h2 className="text-center text-3xl font-semibold text-white sm:text-4xl">
          Support when you need it
        </h2>
      </Reveal>

      {/* 3 features */}
      <div className="mt-12 grid w-full max-w-6xl text-center gap-y-10 md:grid-cols-3 md:gap-x-0">
  {[
    { letter: "A", title: "Corporate Finance Advisory" },
    { letter: "B", title: "Capital Raising & Investor Readiness" },
    { letter: "C", title: "Transaction Advisory (M&A Support)" },
    { letter: "D", title: "Private Equity (Principal Investing)" },
    { letter: "E", title: "Due Diligence & Business Analysis" },
    { letter: "F", title: "Training & Advisory Workshops" },
  ].map((item, index) => (
    <Reveal key={item.letter} delay={index * 80}>
      <div
        className={`flex flex-col items-center px-0 md:px-10 ${
          index % 3 !== 2 ? "md:border-r md:border-white/10" : ""
        } ${index < 3 ? "md:pb-10" : ""}`}
      >
        

        <h3 className="mt-5 text-lg font-semibold text-white">{item.title}</h3>
      </div>
    </Reveal>
  ))}
</div>


      {/* Big image space below */}
      {/* Big image space below */}
  <div className="mt-14 w-full max-w-6xl">
    <div className="group relative overflow-hidden bg-white/5 shadow-[0_22px_60px_rgba(0,0,0,0.35)]">
      {/* IMAGE: fixed heights so it always renders */}
      <div className="relative h-[220px] w-full sm:h-[320px] lg:h-[520px] ">
        <Image
          src="/stock/bus-1.jpg"
          alt="Elevare support overview"
          fill
          className="object-cover rounded-[20px]"
          sizes="(min-width: 1024px) 1024px, 100vw,"
        />
      </div>

      {/* Soft overlay for the executive vibe */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(90%_80%_at_30%_35%,rgba(47,107,255,0.22)_0%,rgba(154,215,255,0.10)_40%,rgba(10,10,10,0.0)_70%)] opacity-100 transition-opacity duration-300 group-hover:opacity-90 motion-reduce:transition-none" />

      {/* Slight dark wash so text stays readable */}
      <div className="pointer-events-none absolute inset-0 bg-black/25" />

      {/* Caption strip */}
      
    </div>
  </div>

    </div>
  </section>
</Container>


      </section>

      <CapabilityShowcase />


      {/* Gradient interstitial (like the video’s big color panel, but gold/ink) */}
<section className="relative h-[95vh] overflow-hidden py-20 sm:py-24">
  {/* Background image */}
  <Image
    src="/stock/bus-29.jpg" // <-- change to your image path in /public
    alt="Background"
    fill
    priority
    className="object-cover object-center"
    sizes="100vw"
  />

  {/* Gradient overlay (your existing gradient, but as an overlay) */}
  <div className="pointer-events-none absolute inset-0 " />

  {/* Optional extra darken for readability */}
  <div className="pointer-events-none absolute inset-0 bg-black/25" />

  {/* Content */}
  <Container className="relative z-10 h-full">
    <div className="flex h-full items-center justify-center">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl leading-tight text-white sm:text-5xl">
            Close the performance gap in{" "}
            <span className="italic text-white/90">your </span>
            capital
          </h2>

          <p className="mt-5 text-white/70">
            Decision speed improves when reporting is clear and governance is tight.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <ButtonLink href="/contact" variant="contact">
              Contact Us
            </ButtonLink>
            <ButtonLink href="/about" variant="gold">
              About us
            </ButtonLink>
          </div>
        </div>
      </Reveal>
    </div>
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
                Questions?
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
      <section className="[background:radial-gradient(90%_80%_at_30%_40%,rgba(47,107,255,0.60)_0%,rgba(47,107,255,0.28)_40%,rgba(47,107,255,0.14)_62%,rgba(5,5,5,1)_84%)] py-24 sm:py-28 lg:py-32">
  <Container>
    <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:items-center">
      {/* LEFT */}
      <Reveal>
        <div className="max-w-2xl">
          <h2 className="text-4xl leading-tight text-white sm:text-5xl">
            Ready to shape the future of{" "}
            <span className="italic text-white"> your </span>
            capital?
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            Structured capital decisions, clear reporting, and disciplined governance built for long-term outcomes.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ButtonLink href="/contact" variant="contact">
              Contact Us
            </ButtonLink>
            <ButtonLink href="/about" variant="gold">
              About Us
            </ButtonLink>
          </div>
        </div>
      </Reveal>

      {/* RIGHT (image slot) */}
      <Reveal delay={120}>
        <div className="order-2 lg:order-none">
          <div className="group relative overflow-hidden ">
            {/* Use fixed height so it never collapses */}
            <div className="relative mx-auto h-[220px] w-full max-w-[560px] sm:h-[280px] lg:h-[420px]">
  <Image
    src="/brand/logo-2.png"
    alt="Elevare illustration"
    fill
    className="object-contain object-center"
    sizes="(min-width: 1024px) 560px, (min-width: 640px) 80vw, 92vw"
  />
</div>

            {/* Blue overlay to match scheme */}

            {/* Light wash for readability */}
          </div>
        </div>
      </Reveal>
    </div>
  </Container>
</section>
    </>
  );
}
