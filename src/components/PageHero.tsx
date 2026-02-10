import { Container } from "@/components/Container";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/ButtonLink";
import { ContourLines } from "@/components/ContourLines";

export function PageHero({
  eyebrow,
  title,
  subtitle,
  primaryCta,
  secondaryCta,
  rightSlot,
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };
  rightSlot?: React.ReactNode;
}) {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-slate-950" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.44),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_8%,rgba(99,102,241,0.30),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.18] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:18px_18px]" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-b from-transparent to-white" />
      </div>

      <ContourLines className="opacity-70" />

      <Container className="pt-14 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            {eyebrow ? (
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/10">
                  <span className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)]" />
                  {eyebrow}
                </div>
              </Reveal>
            ) : null}

            <Reveal delayMs={80}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-white sm:text-5xl">
                {title}
              </h1>
            </Reveal>

            {subtitle ? (
              <Reveal delayMs={140}>
                <p className="mt-5 max-w-2xl text-pretty text-lg text-white/75">{subtitle}</p>
              </Reveal>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-wrap gap-3">
                  {primaryCta ? (
                    <ButtonLink href={primaryCta.href} variant="secondary" className="bg-white/95" withArrow>
                      {primaryCta.label}
                    </ButtonLink>
                  ) : null}
                  {secondaryCta ? (
                    <ButtonLink href={secondaryCta.href} variant="ghost" className="text-white hover:bg-white/10" withArrow>
                      {secondaryCta.label}
                    </ButtonLink>
                  ) : null}
                </div>
              </Reveal>
            )}
          </div>

          {rightSlot ? <div className="lg:col-span-4">{rightSlot}</div> : null}
        </div>
      </Container>
    </section>
  );
}
