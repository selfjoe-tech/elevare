import Image from "next/image";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { notFound } from "next/navigation";
import { EXECUTIVES, getExecutive } from "@/lib/leadership";
import {
  BadgeCheck,
  ShieldCheck,
  Scale,
  BriefcaseBusiness,
  Linkedin,
  MapPin,
  Plus
} from "lucide-react";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";


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

function ExecAccordionRow({
  value,
  title,
  items,
}: {
  value: string;
  title: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <AccordionItem value={value} className="border-0">
      <div className="border-y border-[#3b82f6]/70">
        <AccordionTrigger
          className={[
            "group flex w-full items-center justify-between gap-6 py-10 text-left",
            "hover:no-underline",
            "text-white",
          ].join(" ")}
        >
          <span className="text-3xl font-semibold tracking-tight sm:text-4xl">
            {title}
          </span>

          {/* plus icon like reference */}
          <span className="ml-auto grid h-10 w-10 place-items-center">
            <Plus
              className={[
                "h-9 w-9 text-white/80 transition-transform duration-300",
                "group-data-[state=open]:rotate-45",
              ].join(" ")}
            />
          </span>
        </AccordionTrigger>

        <AccordionContent className="pb-10">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((t) => (
              <div
                key={t}
                className="rounded-2xl bg-white/5 px-5 py-4 text-sm leading-relaxed text-white/75 backdrop-blur-md"
              >
                <span className="mr-2 inline-block h-2 w-2 translate-y-[-1px] rounded-full bg-[#3b82f6]" />
                {t}
              </div>
            ))}
          </div>
        </AccordionContent>
      </div>
    </AccordionItem>
  );
}

function ProfileMedia({ name, image }: { name: string; image?: string | null }) {
  if (!image) return <MediaPlaceholder name={name} />;

  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem]">
      <Image
        src={image}
        alt={name}
        fill
        priority
        className="object-cover object-center"
        sizes="(min-width: 1024px) 420px, 100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-black/25" />
    </div>
  );
}

function Pill({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-sans text-white/85">
      {icon}
      {text}
    </span>
  );
}

function SectionHeader({
  eyebrow,
  title,
  subtitle,
  dark,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  dark?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      {eyebrow ? (
        <div
          className={[
            "text-xs font-sans uppercase tracking-[0.32em]",
            dark ? "text-white/60" : "text-[#2f6bff]",
          ].join(" ")}
        >
          {eyebrow}
        </div>
      ) : null}

      <h2
        className={[
          "mt-4 text-4xl leading-tight sm:text-5xl",
          dark ? "text-white" : "text-[#0b1020]",
        ].join(" ")}
      >
        {title}
      </h2>

      {subtitle ? (
        <p className={["mt-5 text-base leading-relaxed sm:text-lg", dark ? "text-white/70" : "text-[#0b1020]/70"].join(" ")}>
          {subtitle}
        </p>
      ) : null}
    </div>
  );
}

function DetailCard({
  title,
  items,
}: {
  title: string;
  items?: string[];
}) {
  if (!items?.length) return null;

  return (
    <div className="snap-start rounded-[2rem] bg-white p-8 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
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

export default async function ExecutiveProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exec = getExecutive(slug);
  if (!exec) return notFound();

  return (
    <>
      {/* HERO (black, cleaner, less clutter) */}
      <section className="relative overflow-hidden bg-black">
        <div className="absolute left-0 top-0 h-1 w-full bg-[#3b82f6]" />
        <div className="pointer-events-none absolute inset-0 opacity-80 [background:radial-gradient(900px_circle_at_20%_20%,rgba(59,130,246,0.20),transparent_60%),radial-gradient(850px_circle_at_85%_35%,rgba(124,58,237,0.16),transparent_55%)]" />

        <Container className="relative py-16 sm:py-20">
          <Reveal>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/team"
                className="inline-flex items-center gap-2 font-sans text-sm font-semibold text-white/80 hover:text-white"
              >
                ← Back
              </Link>

              {/* ✅ LinkedIn (only if available) */}
              {exec.linkedin ? (
                <Link
                  href={exec.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-11 items-center gap-2 rounded-2xl bg-white/10 px-4 font-sans text-sm font-semibold text-white hover:bg-white/15"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </Link>
              ) : null}
            </div>
          </Reveal>

          <div className="mt-10 grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-4">
              <Reveal from="left" delay={80}>
                <ProfileMedia name={exec.name} image={exec.image} />
              </Reveal>
            </div>

            <div className="lg:col-span-8">
              

              <Reveal delay={160} from="right">
                <h1 className="mt-5 text-4xl leading-tight text-white sm:text-6xl">
                  {exec.name}
                </h1>
              </Reveal>

              <Reveal delay={210} from="right">
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-base text-white/75">
                  <span>{exec.role}</span>
                  {exec.location ? (
                    <>
                      <span className="text-white/35">•</span>
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="h-4 w-4 text-white/55" />
                        {exec.location}
                      </span>
                    </>
                  ) : null}
                </div>
              </Reveal>

              <Reveal delay={260} from="right">
                <p className="mt-6 max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {exec.tagline}
                </p>
              </Reveal>

              

              {/* Small “focus” card to add structure without clutter */}
              <Reveal delay={340} from="right">
                <div className="mt-10 rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
                      <BriefcaseBusiness className="h-5 w-5 text-[#9ad7ff]" />
                    </div>
                    <div>
                      <div className="text-lg font-semibold text-white">Executive focus</div>
                      <div className="text-sm text-white/65">
                        Reporting, governance, and client-first execution
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* BIO (separate, breathable) */}
      <section className="bg-white py-20 sm:py-24">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Biography"
              title={
                <>
                  Background and <span className="italic text-[#0b1020]/90">career path</span>
                </>
              }
              subtitle="A concise summary of experience, progression, and mandate."
            />
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-8">
              <Reveal>
                <div className="rounded-[2rem] bg-white p-10 shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]">
                  <div className="space-y-5 text-base leading-relaxed text-[#0b1020]/75">
                    {exec.bio.map((p) => (
                      <p key={p}>{p}</p>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>

            <div className="lg:col-span-4">
              <Reveal delay={90}>
                <div className="rounded-[2rem] bg-[#0a0a0a] p-8">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-white/55">
                    Quick view
                  </div>

                  <div className="mt-5 space-y-3">
                    <div className="rounded-2xl bg-white/5 px-5 py-4">
                      <div className="text-sm font-semibold text-white">Role</div>
                      <div className="mt-1 text-sm text-white/70">{exec.role}</div>
                    </div>

                    {exec.location ? (
                      <div className="rounded-2xl bg-white/5 px-5 py-4">
                        <div className="text-sm font-semibold text-white">Region</div>
                        <div className="mt-1 text-sm text-white/70">{exec.location}</div>
                      </div>
                    ) : null}

                    {exec.linkedin ? (
                      <Link
                        href={exec.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between rounded-2xl bg-white/10 px-5 py-4 text-sm font-semibold text-white hover:bg-white/15"
                      >
                        <span className="inline-flex items-center gap-2">
                          <Linkedin className="h-4 w-4" />
                          View LinkedIn profile
                        </span>
                        <span className="text-white/60 group-hover:text-white">→</span>
                      </Link>
                    ) : (
                      <div className="rounded-2xl bg-white/5 px-5 py-4 text-sm text-white/60">
                        LinkedIn: not provided
                      </div>
                    )}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* DETAILS (less clutter: snap carousel on mobile, grid on desktop) */}
      <section className="bg-black py-20 sm:py-24">
  <Container>
    <Reveal>
      <SectionHeader
        title={
          <>
            Professional Details
          </>
        }
        subtitle="Organized by how the executive operates, what they specialize in, and formal credentials."
        dark
      />
    </Reveal>

    <div className="mt-12">
      <Accordion type="single" collapsible className="space-y-6">
        <Reveal>
          <ExecAccordionRow
            value="responsibilities"
            title="Responsibilities"
            items={exec.responsibilities}
          />
        </Reveal>

        <Reveal delay={80}>
          <ExecAccordionRow
            value="expertise"
            title="Expertise"
            items={exec.expertise}
          />
        </Reveal>

        <Reveal delay={160}>
          <ExecAccordionRow
            value="credentials"
            title="Credentials"
            items={exec.credentials}
          />
        </Reveal>
      </Accordion>
    </div>
  </Container>
</section>


      {/* CTA */}
      <section className="bg-[#0a0a0a] py-20 sm:py-24">
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
                  href="/about#services"
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
