import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Link from "next/link";
import { EXECUTIVES } from "@/lib/leadership";
import { BadgeCheck, ShieldCheck, Scale, UserRound, ChevronRight, ArrowLeft, ArrowUpRight } from "lucide-react";
import { ButtonLink } from "@/components/ui/button";

function Pill({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-sans text-white/85">
      {icon}
      {text}
    </span>
  );
}

function AvatarPlaceholder() {
  return (
    <div className="grid h-24 w-24 place-items-center rounded-full bg-white/10 ring-1 ring-white/10">
      <UserRound className="h-9 w-9 text-white/70" />
    </div>
  );
}

export default function LeadershipPage() {
  return (
    <>
      {/* HERO (centered, no image) */}
      <section className="bg-black">
        <Container className="py-20 sm:py-24">
          <div className="mx-auto max-w-3xl text-center">
            

            <Reveal delay={90}>
              <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl">
                Executive stewardship{" "}
                <span className="italic text-white/90">backed by discipline</span>.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
                Meet the leadership team responsible for strategy, investment oversight,
                governance alignment, and client execution.
              </p>
            </Reveal>

            
          </div>
        </Container>
      </section>

      {/* TEAM (simple row like your reference, black background) */}
      <section className="bg-black">
        <Container className="py-20 sm:py-24">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
            <h1 className="mt-6 text-4xl leading-tight text-white sm:text-5xl">
              Meet The Leadership
                
              </h1>              <p className="mt-2 text-sm text-white/65">
                Select an executive to view the full profile.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid grid-cols-2 justify-items-center gap-x-6 gap-y-10 sm:grid-cols-3 md:grid-cols-4">
            {EXECUTIVES.map((e, idx) => (
              <Reveal key={e.slug} delay={idx * 60}>
                <Link
                  href={`/team/${e.slug}`}
                  className={[
                    "group flex w-full max-w-[220px] flex-col items-center text-center",
                    "focus:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-black rounded-2xl",
                  ].join(" ")}
                >
                  <div className="transition-transform duration-200 group-hover:scale-[1.02] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
                    <AvatarPlaceholder />
                  </div>

                    <div className="flex items-center justify-between gap-3">
                      <div className="flex flex-col justify-center mt-4 min-h-[44px]">
                        <div className="text-sm font-semibold text-white">{e.name}</div>
                        <div className="mt-1 text-xs text-white/60">{e.role}</div>
                      </div>

                      <ArrowUpRight
                        className="shrink-0 h-7 w-7"
                        strokeWidth={3}
                        aria-hidden="true"
                      />
                    </div>

                  
                </Link>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* DARK CTA (optional keep) */}
      <section className="bg-black py-20">
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
                <ButtonLink
                  href="/contact"
                  variant="contact"
                  className="inline-flex h-12 items-center justify-center bg-white px-6 font-sans text-sm font-semibold text-black"
                >
                  Contact Us
                </ButtonLink>
                <ButtonLink
                  href="/about"
                  className="inline-flex h-12 items-center justify-center bg-gold px-6 font-sans text-sm font-semibold text-black"
                >
                  About Us
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
