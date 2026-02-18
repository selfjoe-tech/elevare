import Image from "next/image";
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
  Building2,
  Globe2,
  Sparkles,
  HeartHandshake,
  Home,
} from "lucide-react";
import { LightSweepText } from "@/components/ui/LightSweepText";
import CoreServicesCarousel from "@/components/sections/CoreServicesCarousel";
import { InvestmentPhilosophySection } from "@/components/sections/Philosophy";


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

/** Generic drop-in image slot (prevents squashing) */
function ImageSlot({
  src,
  alt,
  className = "",
  overlay = true,
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  overlay?: boolean;
  priority?: boolean;
}) {
  return (
    <div className={["group relative min-h-0 overflow-hidden", className].join(" ")}>
      <div className="relative h-[300px] w-full sm:h-[360px] lg:h-[440px]">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover object-center"
          sizes="(min-width: 1024px) 560px, 100vw"
        />
      </div>

      {overlay ? (
        <>
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_30%_25%,rgba(47,107,255,0.18)_0%,rgba(154,215,255,0.08)_45%,rgba(0,0,0,0)_75%)]" />
          <div className="pointer-events-none absolute inset-0 bg-black/20" />
        </>
      ) : null}
    </div>
  );
}


export function WeWork () {
  return (
     <section className="bg-ink py-20">
            <Container>
              <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
                <div className="lg:col-span-5">
                  <Reveal>
                   <div className="mb-2 h-[3px] w-10 rounded-full bg-[#3b82f6]" />

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
                      <div className=" bg-white/5 p-8 backdrop-blur-md">
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

  );
};


export function AboutHero() {
  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24">
      <div className="pointer-events-none absolute inset-0 opacity-70 [background:radial-gradient(900px_circle_at_20%_20%,rgba(59,130,246,0.18),transparent_60%),radial-gradient(800px_circle_at_85%_30%,rgba(124,58,237,0.14),transparent_55%)]" />

      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ✅ Direct grid child gets the span */}
          <div className="lg:col-span-6">
            <Reveal from="left">
              <div className="relative overflow-hidden bg-white/[0.03]">
                {/* ✅ Real height so it can't collapse */}
                <div className="relative w-full h-[260px] sm:h-[360px] lg:h-[520px]">
                  <Image
                    src="/stock/bus-19.jpg"
                    alt="About Elevare"
                    fill
                    priority
                    className="object-cover object-center"   // ✅ force fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-black/35 via-black/0 to-black/15" />
              </div>
            </Reveal>
          </div>

          {/* ✅ Direct grid child gets the span */}
          <div className="lg:col-span-6">
            <Reveal from="right">
              <h1 className="text-4xl font-semibold leading-tight text-white sm:text-6xl">
                About Us
              </h1>
            </Reveal>

            <Reveal delay={80} from="right">
              <div className="mt-6 text-base leading-relaxed text-white/75 sm:text-lg">
                <LightSweepText
                  className="leading-relaxed"
                  baseClassName="text-white/55"
                  finalClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#60a5fa] to-[#1d4ed8]"
                  highlightColor="#a5cbfc"
                  durationMs={1400}
                  delayMs={60}
                  once
                  revealFill
                >
                  Elevare Group Holdings (Pty) Ltd is a South Africa based alternative investment and
                  financial advisory firm providing sophisticated capital solutions to high net worth
                  individuals, institutional investors, and growth oriented businesses.
                </LightSweepText>
              </div>
            </Reveal>

            <Reveal delay={160} from="right">
              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
                <ButtonLink href="/contact" variant="contact">
                  Contact Us
                </ButtonLink>
                
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}


export default function AboutPage() {
  return (
    <>
      {/* HERO (Light blue -> white) */}
      <AboutHero />

      {/* DARK BAND (Vision + Mission) */}
      <section className="relative bg-black py-24 sm:py-28 lg:py-32">
  {/* subtle atmosphere */}
  

  <Container className="relative">
    {/* Header */}
    <div className="mx-auto max-w-3xl text-center">
      <Reveal>
        <h2 className="font-bold text-5xl leading-tight text-white sm:text-5xl">
          Vision & <span className="italic text-white/90">Mission</span>
        </h2>
      </Reveal>

      
    </div>

    {/* 3-feature panel (clean + consistent, no “funny” borders) */}
    <div className="mt-14">
      <Reveal>
        <div className="mx-auto max-w-6xl overflow-hidden">
          <div className="grid md:grid-cols-3 divide-y divide-white/10 md:divide-y-0 md:divide-x">
            {/* Item 1 */}
            <div className="p-8 sm:p-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl border border-white/15 bg-white/5">
                <LineChart className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Value creation</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                Clear structures, disciplined allocation, and an execution mindset focused on outcomes.
              </p>
            </div>

            {/* Item 2 */}
            <div className="p-8 sm:p-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center border border-white/15 bg-white/5">
                <ShieldCheck className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Risk discipline</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                Governance-led decisions with transparency, risk flags, and practical review cycles.
              </p>
            </div>

            {/* Item 3 */}
            <div className="p-8 sm:p-10 text-center">
              <div className="mx-auto grid h-12 w-12 place-items-center border border-white/15 bg-white/5">
                <Network className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-white">Strong networks</h3>
              <p className="mx-auto mt-3 max-w-xs text-sm leading-relaxed text-white/70">
                Investor and partner relationships that help deals move from intent to execution.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </div>

    {/* Vision (text LEFT, image RIGHT) */}
    <div className="mt-20 grid sm:h-[100vh] items-center gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal from="left" delay={120}>
        <div className="w-full">
                    <div className="h-[3px] w-10 rounded-full bg-[#3b82f6]" />

          <h3 className="font-bold mt-4 text-5xl leading-tight text-white sm:text-5xl">
            Vision
          </h3>


          <h3 className="mt-4 text-xl leading-tight text-white sm:text-xl">
            Sustainable wealth creation, built for Africa.
          </h3>

          <p className="mt-4 text-base leading-relaxed text-white/75">
            To be a leading African investment firm recognized for delivering sustainable wealth creation,
            innovative financial solutions, and superior risk adjusted returns.
          </p>

          <div className="mt-7 h-px w-24 bg-white/10" />

          
        </div>
      </Reveal>

      <Reveal delay={120} from="left">
        <div className="w-full min-w-0 h-full">
          <div className="group relative w-full h-full overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.55)]">
            {/* big, stable image slot */}
            <div className="relative w-full h-full aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/stock/bus-13.jpg"
                alt="Vision illustration"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            {/* overlays */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_30%_25%,rgba(47,107,255,0.18)_0%,rgba(154,215,255,0.08)_45%,rgba(0,0,0,0)_75%)]" />
            <div className="pointer-events-none absolute inset-0 bg-black/25" />
          </div>
        </div>
      </Reveal>
    </div>

    {/* Divider */}
    <div className="mx-auto my-16 h-px w-full max-w-6xl bg-white/10" />

    {/* Mission (image LEFT, text RIGHT) */}
    <div className="grid items-center sm:h-[100vh] gap-12 lg:grid-cols-2 lg:gap-16">
      <Reveal from="right" delay={120}>
        <div className="w-full min-w-0 lg:order-1 order-2">
          <div className="group relative w-full overflow-hidden shadow-[0_22px_60px_rgba(0,0,0,0.55)]">
            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9]">
              <Image
                src="/stock/bus-12.jpg"
                alt="Mission illustration"
                fill
                className="object-cover object-center"
                sizes="(min-width: 1024px) 50vw, 100vw"
              />
            </div>

            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(80%_90%_at_30%_25%,rgba(47,107,255,0.18)_0%,rgba(154,215,255,0.08)_45%,rgba(0,0,0,0)_75%)]" />
            <div className="pointer-events-none absolute inset-0 bg-black/25" />
          </div>
        </div>
      </Reveal>

      <Reveal delay={120} from="right">
        <div className="w-full lg:order-2 order-1">
                    <div className="h-[3px] w-10 rounded-full bg-[#3b82f6]" />

          <h3 className="font-bold mt-4 text-5xl leading-tight text-white sm:text-5xl">
            Mission
          </h3>

          <h3 className="mt-4 text-xl leading-tight text-white sm:text-xl">
            Structure and manage capital efficiently, with governance.
          </h3>

          <p className="mt-4 text-base leading-relaxed text-white/75">
            To structure and manage capital efficiently by connecting investors with high quality opportunities
            while supporting businesses through strategic funding, governance, and financial expertise.
          </p>

          <div className="mt-7 h-px w-24 bg-white/10" />

          
        </div>
      </Reveal>
    </div>
  </Container>
</section>


      {/* LIGHT SECTION (Services overview + IMAGE SLOT on LEFT) */}
      <CoreServicesCarousel />
      <WeWork />

      {/* LIGHT BLUE ALT (Philosophy + Advantage) */}
      <InvestmentPhilosophySection />

      {/* DARK ALT (Compliance + Values) */}
      <ComplianceSection />
    </>
  );
}



export function ComplianceSection() {
  return (
    <>

    <WhoWeServeSection />

      {/* VALUES (FULL WIDTH, SUPPORT-STYLE) */}
      <ValuesSection />
      {/* COMPLIANCE (NO IMAGE, CENTERED) */}
      <section className="[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_40%,#ffffff_100%)]  py-24 sm:py-28 lg:py-32">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-4xl leading-tight text-black sm:text-5xl">
                Compliance and{" "}
                <span className="italic text-black">professional standards</span>
              </h2>

            <LightSweepText
              className="mt-6 text-xl leading-relaxed"
              baseClassName="text-[#71fff8]/55"
              finalClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#3b82f6] to-[#1d4ed8]"
              highlightColor="#a5cbfc"
              durationMs={1400}
              delayMs={80}
              once
              revealFill
            >                Elevare Group Holdings operates with a governance-first mindset and aligns with South African
                financial regulation expectations, including licensing and registration requirements (where applicable),
                with a focus on disciplined reporting and client confidentiality.
              </LightSweepText>

              {/* Pill chips */}
              

              <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <ButtonLink href="/contact" variant="contact">
                  Contact Us
                </ButtonLink>
                
              </div>
            </div>
          </Reveal>
        </Container>
      </section>

      {/* TARGET CLIENTS (FULL WIDTH, SUPPORT-STYLE) */}
      
    </>
  );
}

export function ValuesSection() {
  return (
    <section className="bg-black py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            
            <h3 className="font-bold mt-4 text-3xl leading-tight text-white sm:text-4xl">
                            Our values
            </h3>
            
          </Reveal>
        </div>

        {/* Feature-divider UI wrapper */}
        <div className="mx-auto mt-14 w-full max-w-6xl overflow-hidden">
          <div
  className={[
    "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 text-center",
    // desktop-only vertical dividers (no left on first, no right on last)
    "lg:[&>*]:border-r lg:[&>*]:border-white/10 lg:[&>*:last-child]:border-r-0",
  ].join(" ")}
>
            {[
              {
                icon: <Landmark className="h-6 w-6 text-white" />,
                title: "Integrity",
                desc: "Accountability, confidentiality, and clear decision trails.",
              },
              {
                icon: <BadgeCheck className="h-6 w-6 text-white" />,
                title: "Excellence",
                desc: "High standards in analysis, structuring, and reporting cadence.",
              },
              {
                icon: <HeartHandshake className="h-6 w-6 text-white" />,
                title: "Client-first",
                desc: "Discretion, clarity, and consistent follow-through on commitments.",
              },
              {
                icon: <Sparkles className="h-6 w-6 text-white" />,
                title: "Innovation",
                desc: "Practical solutions, not complexity for its own sake.",
              },
              {
                icon: <Scale className="h-6 w-6 text-white" />,
                title: "Responsibility",
                desc: "Governance-led thinking and risk-aware capital stewardship.",
              },
            ].map((x) => (
              <div key={x.title} className="flex flex-col items-center px-7 py-10">
                <Reveal>
                  <div className="flex flex-col items-center">
                    <div className="grid h-12 w-12 place-items-center border border-white/15 bg-white/5">
                    {x.icon}
                  </div>
                  <h4 className="mt-5 text-lg font-semibold text-white">{x.title}</h4>
                  <p className="mt-3 max-w-[22rem] text-sm leading-relaxed text-white/70">
                    {x.desc}
                  </p>
                  </div>
                  
                </Reveal>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function WhoWeServeSection() {
  const items = [
    {
      icon: <Users className="h-5 w-5" />,
      metric: "HNWIs",
      desc: "Private capital needs, structured execution, and discreet engagement.",
    },
    {
      icon: <Home className="h-5 w-5" />,
      metric: "Family",
      desc: "Multi-year planning, governance-led decisions, and clear reporting.",
    },
    {
      icon: <Landmark className="h-5 w-5" />,
      metric: "Institutions",
      desc: "Mandate-aware structures with risk discipline and documentation rigor.",
    },
    {
      icon: <Building2 className="h-5 w-5" />,
      metric: "SMEs",
      desc: "Growth or restructuring capital supported by executive-level process.",
    },
    // If you want 5, we can do 5-up on xl. The reference is 4-up, so this is optional.
    // {
    //   icon: <Globe2 className="h-5 w-5" />,
    //   metric: "Global",
    //   desc: "African market insight, access support, and disciplined oversight.",
    // },
  ];

  return (
    <section className="bg-black py-20 sm:py-24">
      <Container>
        {/* Header block (left aligned like reference) */}
        <div className="max-w-3xl">
          <Reveal>
            

            <h3 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
              Target clients with{" "}
              <span className="italic text-white/90">serious intent</span>
            </h3>

             <LightSweepText
              className="mt-6 text-xl leading-relaxed"
              baseClassName="text-[#71fff8]/55"
              finalClassName="text-transparent bg-clip-text bg-gradient-to-r from-[#3b82f6] via-[#3b82f6] to-[#1d4ed8]"
              highlightColor="#a5cbfc"
              durationMs={1400}
              delayMs={80}
              once
              revealFill
            > 
              We work with client profiles that value discretion, clarity, and disciplined execution.
            </LightSweepText>
          </Reveal>
        </div>

        {/* Metrics grid (like the screenshot) */}
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((x, i) => (
            <Reveal key={x.metric} delay={i * 70}>
              <div className="relative">
                {/* purple bar */}
                <div className="h-[3px] w-10 rounded-full bg-[#3b82f6]" />

                {/* metric row (icon + big “metric”) */}
                <div className="mt-6 flex items-baseline gap-3">
                  <div className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                    {x.metric}
                  </div>
                </div>

                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                  {x.desc}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Optional: if you still want the 5th item (International investors) in the same style */}
        <div className="mt-10 hidden xl:block">
          <div className="grid grid-cols-5 gap-10">
            <Reveal delay={320}>
              <div className="col-span-1 relative">
                <div className="h-[3px] w-10 rounded-full bg-[#3b82f6]" />
                <div className="mt-6 flex items-baseline gap-3">
                  
                  <div className="text-4xl font-semibold tracking-tight text-white">
                    Global
                  </div>
                </div>
                <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                  African market insight, access support, and disciplined oversight.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </Container>
    </section>
  );
}