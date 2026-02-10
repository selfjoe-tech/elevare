import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import { profilePhilosophy, profileRegulatory, profileValues } from "@/lib/profile";
import { ProcessStepper } from "@/components/ProcessStepper";



export default function ApproachPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Approach"
        title="Investment Philosophy and Execution"
        subtitle={profilePhilosophy}
        primaryCta={{ label: "Start an enquiry", href: "/contact" }}
        secondaryCta={{ label: "Services", href: "/services" }}
        
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Execution"
              title="A disciplined flow"
              subtitle="A structured approach designed to support governance, risk awareness, and long-term value creation."
            />
          </Reveal>

          <div className="mt-10">
            <Reveal delayMs={120}>
              <ProcessStepper />
            </Reveal>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Regulatory"
                  title="Compliance posture"
                  subtitle="Committed to operating in line with applicable South African financial regulations."
                />
              </Reveal>
              <Reveal delayMs={120}>
                <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 text-sm text-slate-700">
                  {profileRegulatory}
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delayMs={120}>
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7">
                  <div className="text-sm font-semibold text-slate-900">Corporate values</div>
                  <div className="mt-5 grid gap-3">
                    {profileValues.map((v) => (
                      <div key={v} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                        {v}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7">
                    <ButtonLink href="/contact" variant="primary" withArrow>
                      Speak to us
                    </ButtonLink>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
