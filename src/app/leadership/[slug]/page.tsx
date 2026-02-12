import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EXECUTIVES, getExecutive } from "@/lib/leadership";
import { BadgeCheck, ShieldCheck, Scale, BriefcaseBusiness } from "lucide-react";

export function generateStaticParams() {
  return EXECUTIVES.map((e) => ({ slug: e.slug }));
}

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

function ListBlock({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items?.length) return null;
  return (
    <div className="rounded-[2rem] bg-white p-8 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
      <div className="text-xs font-sans uppercase tracking-[0.32em] text-[#2f6bff]">
        {title}
      </div>
      <div className="mt-5 space-y-3">
        {items.map((t) => (
          <div key={t} className="flex items-start gap-3 rounded-2xl bg-[#f4f8ff] px-5 py-4">
            <span className="mt-2 h-2 w-2 rounded-full bg-[#2f6bff]" />
            <div className="text-sm text-[#0b1020]/75">{t}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function ExecutiveProfilePage({
  params,
}: {
  params: { slug: string };
}) {
  const exec = getExecutive(params.slug);
  if (!exec) return notFound();

  return (
    <>
      {/* HERO (light blue -> white) */}
      <section className="[background:linear-gradient(180deg,#bcdcff_0%,#eaf3ff_42%,#ffffff_100%)]">
        <Container className="py-16 sm:py-20">
          <Reveal>
            <Link
              href="/leadership"
              className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-[#2f6bff] hover:opacity-85"
            >
              ← Back to leadership
            </Link>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-4">
              <Reveal delay={90}>
                <MediaPlaceholder name={exec.name} />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              <Reveal delay={110}>
                <div className="inline-flex items-center rounded-full bg-white/70 px-5 py-2 text-xs font-sans uppercase tracking-[0.32em] text-[#0b1020]/60">
                  Executive profile
                </div>
              </Reveal>

              <Reveal delay={160}>
                <h1 className="mt-5 text-4xl leading-tight text-[#0b1020] sm:text-5xl">
                  {exec.name}
                </h1>
              </Reveal>

              <Reveal delay={210}>
                <div className="mt-3 text-base text-[#0b1020]/75">
                  {exec.role}
                  {exec.location ? (
                    <span className="text-[#0b1020]/45"> • {exec.location}</span>
                  ) : null}
                </div>
              </Reveal>

              <Reveal delay={260}>
                <p className="mt-5 max-w-3xl text-[#0b1020]/70">
                  {exec.tagline}
                </p>
              </Reveal>

              <Reveal delay={300}>
                <div className="mt-8 flex flex-wrap gap-3">
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

      {/* WHITE: Bio */}
      <section className="bg-white py-20">
        <Container>
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <Reveal>
                <div className="rounded-[2rem] bg-white p-8 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-[#2f6bff]">
                    Biography
                  </div>
                  <div className="mt-5 space-y-4 text-base leading-relaxed text-[#0b1020]/70">
                    {exec.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-5">
              <Reveal delay={90}>
                <div className="rounded-[2rem] bg-[#0a0a0a] p-8">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/5">
                      <BriefcaseBusiness className="h-5 w-5 text-[#9ad7ff]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">Executive focus</div>
                      <div className="text-sm text-white/65">
                        Reporting, governance, and client-first execution
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 rounded-2xl bg-white/5 px-5 py-4 text-sm text-white/70">
                    Tip: When you upload real portraits later, set{" "}
                    <span className="font-sans text-white">image</span> in{" "}
                    <span className="font-sans text-white">src/lib/leadership.ts</span>
                    to <span className="font-sans text-white">/images/executives/{exec.slug}.jpg</span>.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* LIGHT BLUE: Responsibilities / Expertise / Credentials */}
      <section className="[background:linear-gradient(180deg,#ffffff_0%,#eaf3ff_40%,#bcdcff_100%)] py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <Reveal>
                <ListBlock title="Responsibilities" items={exec.responsibilities} />
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={80}>
                <ListBlock title="Expertise" items={exec.expertise} />
              </Reveal>
            </div>
            <div className="lg:col-span-4">
              <Reveal delay={160}>
                <ListBlock title="Credentials" items={exec.credentials} />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* DARK CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/5 p-10 text-center backdrop-blur-md">
              <div className="text-xs font-sans uppercase tracking-[0.32em] text-white/55">
                Work with Elevare
              </div>
              <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Request an executive{" "}
                <span className="italic text-white/90">consultation</span>.
              </h2>
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
