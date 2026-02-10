import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import { profileServices } from "@/lib/profile";

const svc = profileServices.find((s) => s.key === "private-equity")!;

export default function PrivateEquityPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Service"
        title="Private Equity"
        subtitle={svc.intro}
        primaryCta={{ label: "Start an enquiry", href: "/contact" }}
        secondaryCta={{ label: "All services", href: "/services" }}
        
        
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Core focus"
              title="Growth capital and buyout investments"
              subtitle="Delivered with a value creation mindset, disciplined diligence, and governance strength."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7 rounded-3xl border border-slate-200 bg-white p-7">
              <div className="text-sm font-semibold text-slate-900">What we do</div>
              <div className="mt-5 grid gap-3">
                {svc.bullets.map((b) => (
                  <div key={b} className="flex gap-3 text-sm text-slate-700">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <ButtonLink href="/contact" variant="primary" withArrow>
                  Speak to us
                </ButtonLink>
                <ButtonLink href="/approach" variant="secondary" withArrow>
                  Investment approach
                </ButtonLink>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delayMs={120}>
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7">
                  <div className="text-sm font-semibold text-slate-900">Typical outcomes</div>
                  <div className="mt-4 grid gap-3">
                    {[
                      "Clear evaluation and diligence orientation",
                      "Governance-aligned structuring and decision support",
                      "Active value creation mindset across engagement",
                      "Exit planning aligned to long-term value",
                    ].map((o) => (
                      <div key={o} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                        {o}
                      </div>
                    ))}
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
