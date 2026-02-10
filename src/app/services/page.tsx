import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { PremiumSurface } from "@/components/PremiumSurface";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import {
  profileServices,
  profileTargetClients,
  profileSite,
  profilePhilosophy,
} from "@/lib/profile";

export default function ServicesPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow={profileSite.markets}
        title="Services"
        subtitle="Sophisticated capital solutions across private equity, wealth management, and funding facilitation."
        primaryCta={{ label: "Start an enquiry", href: "/contact" }}
        secondaryCta={{ label: "Our approach", href: "/approach" }}
        rightSlot={
          <Reveal delayMs={180}>
            <PremiumSurface innerClassName="p-6 sm:p-7">
              <div className="text-sm font-semibold text-white/90">Core services</div>
              <div className="mt-5 space-y-3">
                {profileServices.map((s) => (
                  <a
                    key={s.key}
                    href={s.href}
                    className="group block rounded-2xl border border-white/10 bg-white/5 p-4 transition hover:bg-white/10 hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-white">{s.title}</div>
                        <div className="mt-1 line-clamp-2 text-xs text-white/70">{s.subtitle}</div>
                      </div>
                      <div className="text-white/60 transition group-hover:translate-x-0.5 group-hover:text-white/90">
                        →
                      </div>
                    </div>
                  </a>
                ))}
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10">
                <div className="text-xs font-semibold text-white/85">Philosophy</div>
                <div className="mt-1 text-sm text-white/75">{profilePhilosophy}</div>
              </div>
            </PremiumSurface>
          </Reveal>
        }
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="What we do"
              title="Three service lines, one disciplined mindset"
              subtitle="Built around governance, diligence, risk awareness, and practical execution."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {profileServices.map((s, idx) => (
              <Reveal key={s.key} delayMs={80 * idx}>
                <div className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(37,99,235,0.10),transparent_55%)]" />
                  <div aria-hidden className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(99,102,241,0.08),transparent_55%)]" />
                  <div className="relative">
                    <div className="text-xs font-semibold tracking-wide text-blue-800">SERVICE</div>
                    <div className="mt-2 text-xl font-semibold text-slate-900">{s.title}</div>
                    <p className="mt-3 text-sm text-slate-600">{s.intro}</p>

                    <div className="mt-5 grid gap-2">
                      {s.bullets.slice(0, 3).map((b) => (
                        <div key={b} className="flex gap-2 text-sm text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-6">
                      <ButtonLink href={s.href} variant="secondary" withArrow>
                        View {s.title}
                      </ButtonLink>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Who we serve"
                  title="Target clients"
                  subtitle="Designed for high-quality opportunities and long-term value creation."
                />
              </Reveal>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {profileTargetClients.map((c, i) => (
                  <Reveal key={c} delayMs={40 * i}>
                    <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                      <div className="text-sm font-semibold text-slate-900">{c}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            
          </div>

          <div className="mt-14">
            <Reveal>
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-blue-950 to-slate-950 p-8 sm:p-10 text-white">
                <div className="text-xs font-semibold tracking-wide text-white/80">Start here</div>
                <div className="mt-2 text-3xl font-semibold">Tell us your objective</div>
                <p className="mt-3 max-w-2xl text-sm text-white/75">
                  Private equity, wealth management, or funding facilitation. We’ll route your enquiry to the appropriate team.
                </p>
                <div className="mt-6 flex flex-wrap gap-3">
                  <ButtonLink href="/contact" variant="secondary" className="bg-white/95" withArrow>
                    Contact
                  </ButtonLink>
                  <ButtonLink href="/approach" variant="ghost" className="text-white hover:bg-white/10" withArrow>
                    Our approach
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
