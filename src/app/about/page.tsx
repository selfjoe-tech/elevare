import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import { ButtonLink } from "@/components/ButtonLink";
import { profileOverview, profileSite, profileTargetClients } from "@/lib/profile";

export default function AboutPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow={profileSite.markets}
        title="About Elevare"
        subtitle={profileOverview.summary}
        primaryCta={{ label: "Services", href: "/services" }}
        secondaryCta={{ label: "Team", href: "/team" }}
        
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Overview"
                  title="What we stand for"
                  subtitle={profileOverview.extended}
                />
              </Reveal>

              <div className="mt-10 grid gap-4">
                <Reveal delayMs={100}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-7">
                    <div className="text-sm font-semibold text-slate-900">Vision</div>
                    <p className="mt-2 text-sm text-slate-700">{profileOverview.vision}</p>
                  </div>
                </Reveal>
                <Reveal delayMs={160}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-7">
                    <div className="text-sm font-semibold text-slate-900">Mission</div>
                    <p className="mt-2 text-sm text-slate-700">{profileOverview.mission}</p>
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal>
                <div className="rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-indigo-50 p-7">
                  <div className="text-sm font-semibold text-slate-900">Target clients</div>
                  <div className="mt-5 grid gap-3">
                    {profileTargetClients.map((c) => (
                      <div key={c} className="rounded-2xl border border-slate-200 bg-white p-4 text-sm text-slate-700">
                        {c}
                      </div>
                    ))}
                  </div>
                  <div className="mt-7">
                    <ButtonLink href="/contact" variant="primary" withArrow>
                      Start an enquiry
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
