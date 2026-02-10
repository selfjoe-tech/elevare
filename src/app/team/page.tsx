import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import { profileLeadership } from "@/lib/profile";

export default function TeamPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Leadership"
        title="Leadership Team"
        subtitle="A leadership team with experience across corporate banking, treasury, public-sector finance, audit, and governance."
        primaryCta={{ label: "Start an enquiry", href: "/contact" }}
        secondaryCta={{ label: "About", href: "/about" }}
        
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <Reveal>
            <SectionHeading
              eyebrow="Profiles"
              title="Meet the team"
              subtitle="Roles and responsibilities aligned to strategy, finance oversight, and investment execution."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {profileLeadership.map((p, i) => (
              <Reveal key={p.name} delayMs={70 * i}>
                <div className="rounded-3xl border border-slate-200 bg-white p-7 transition hover:-translate-y-0.5 hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <div className="text-xl font-semibold text-slate-900">{p.name}</div>
                      <div className="mt-1 text-sm font-semibold text-blue-800">{p.role}</div>
                    </div>
                    {"isTBC" in p && p.isTBC ? (
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
                        TBC
                      </span>
                    ) : null}
                  </div>

                  <p className="mt-4 text-sm text-slate-600">{p.bio}</p>

                  <div className="mt-6">
                    <div className="text-sm font-semibold text-slate-900">Key responsibilities</div>
                    <div className="mt-3 grid gap-2">
                      {p.responsibilities.map((r) => (
                        <div key={r} className="flex gap-3 text-sm text-slate-700">
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-700" />
                          <span>{r}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
}
