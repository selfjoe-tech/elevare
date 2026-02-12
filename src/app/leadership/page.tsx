import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { EXECUTIVES } from "@/lib/leadership";
import { BadgeCheck, ShieldCheck, Scale } from "lucide-react";

function MediaPlaceholder({ name }: { name: string }) {
  const initials = name
    .replace(/\(.*?\)/g, "")
    .trim()
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase())
    .join("");

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-[radial-gradient(90%_80%_at_30%_20%,rgba(47,107,255,0.35)_0%,rgba(154,215,255,0.25)_35%,rgba(255,255,255,0.08)_70%,rgba(10,10,10,1)_110%)]">
      <div className="absolute inset-0 bg-black/55" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.10)_0%,transparent_50%)]" />

      <div className="absolute left-6 top-6 rounded-full bg-white/10 px-4 py-2 font-sans text-xs tracking-[0.28em] text-white/70">
        PHOTO
      </div>

      <div className="absolute bottom-6 left-6 right-6">
        <div className="text-5xl font-semibold text-white/85">{initials}</div>
        <div className="mt-1 text-sm text-white/70">Executive portrait placeholder</div>
      </div>
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* HERO (light blue -> white) */}
      <section className="[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_42%,#ffffff_100%)]">
        <Container className="py-20 sm:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  Leadership
                </div>
              </Reveal>

              <Reveal delay={90}>
                <h1 className="mt-6 text-4xl leading-tight text-[#0b1020] sm:text-5xl">
                  Executive stewardship{" "}
                  <span className="italic text-[#0b1020]/90">backed by discipline</span>.
                </h1>
              </Reveal>

              <Reveal delay={160}>
                <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#0b1020]/70">
                  Meet the leadership team responsible for strategy, investment oversight, governance alignment,
                  and client execution.
                </p>
              </Reveal>

              <Reveal delay={230}>
                <div className="mt-9 flex flex-wrap gap-3">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-4 py-2 text-xs font-sans text-[#2f6bff]">
                    <BadgeCheck className="h-4 w-4" /> Integrity
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-4 py-2 text-xs font-sans text-[#2f6bff]">
                    <ShieldCheck className="h-4 w-4" /> Risk discipline
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-4 py-2 text-xs font-sans text-[#2f6bff]">
                    <Scale className="h-4 w-4" /> Governance-first
                  </span>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* GRID (white) */}
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <div className="inline-flex items-center rounded-full bg-[#eaf1ff] px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#2f6bff]">
                Team
              </div>
              <h2 className="mt-6 text-3xl text-[#0b1020] sm:text-4xl">
                Click an executive to view the full profile.
              </h2>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {EXECUTIVES.map((e, idx) => (
              <Reveal key={e.slug} delay={idx * 70}>
                <Link
                  href={`/leadership/${e.slug}`}
                  className="group block rounded-[2rem] bg-[#0a0a0a] p-4 transition-transform duration-300 hover:-translate-y-1 motion-reduce:transition-none motion-reduce:hover:translate-y-0"
                >
                  <MediaPlaceholder name={e.name} />

                  <div className="mt-5 px-2 pb-2">
                    <div className="text-lg font-semibold text-white">
                      {e.name}
                    </div>
                    <div className="mt-1 text-sm text-white/70">{e.role}</div>
                    <div className="mt-3 text-sm text-white/65">
                      {e.tagline}
                    </div>

                    <div className="mt-5 inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#9ad7ff] transition group-hover:text-white">
                      View profile <span aria-hidden>→</span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* DARK CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/5 p-10 text-center backdrop-blur-md">
              <div className="text-xs font-sans uppercase tracking-[0.32em] text-white/55">
                Next step
              </div>
              <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Want an executive{" "}
                <span className="italic text-white/90">brief</span>?
              </h2>
              <p className="mx-auto mt-5 max-w-2xl text-white/70">
                Share your objective and we’ll respond with a structured approach and clear next steps.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <Link
                  href="/contact"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-white px-6 font-sans text-sm font-semibold text-[#2f6bff]"
                >
                  Contact Us
                </Link>
                <Link
                  href="/services"
                  className="inline-flex h-12 items-center justify-center rounded-2xl bg-[#2f6bff] px-6 font-sans text-sm font-semibold text-white"
                >
                  View Services
                </Link>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
