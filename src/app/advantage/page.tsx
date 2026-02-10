import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import { profileAdvantage } from "@/lib/profile";

export default function AdvantagePage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Why Elevare"
        title="Competitive Advantage"
        subtitle="Differentiators built for disciplined decisions and consistent delivery."
        primaryCta={{ label: "Start an enquiry", href: "/contact" }}
        secondaryCta={{ label: "Services", href: "/services" }}
        
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Differentiators"
              title="What sets us apart"
              subtitle="Practical advantages that support outcomes across investments, wealth, and funding."
            />
          </Reveal>

          <div className="mt-10 grid gap-4 lg:grid-cols-2">
            {profileAdvantage.map((a, i) => (
              <Reveal key={a} delayMs={60 * i}>
                <div className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-[color:var(--champagne-2)] opacity-90" />
                    <div className="text-sm font-semibold text-slate-900">{a}</div>
                  </div>
                  <div className="mt-4 h-[2px] w-10 rounded-full bg-blue-700/70" />
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14">
            <Reveal>
              <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-950 to-slate-950 p-8 sm:p-10 text-white">
                <div className="text-2xl font-semibold">Let’s align on your objective</div>
                <p className="mt-3 max-w-2xl text-sm text-white/75">
                  We’ll route your enquiry to the appropriate service team: private equity, wealth management, or funding facilitation.
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
          </div>
        </Container>
      </section>
    </div>
  );
}
