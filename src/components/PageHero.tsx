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
  bgImage = "/images/hero/lion-4.jpg", // put your image here
}: {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  primaryCta?: { label: string; href: string; variant?: "primary" | "contact" | "ghost" };
  secondaryCta?: { label: string; href: string; variant?: "primary" | "contact" | "ghost" };
  rightSlot?: React.ReactNode;
  bgImage?: string;
}) {
  return (
    <section className="relative overflow-hidden">
      {/* Image background */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        {/* Darken for legibility */}
        <div className="absolute inset-0 bg-black/70" />
        {/* Gold aura */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(212,175,55,0.18),transparent_60%)]" />
        <div className="absolute inset-0 opacity-[0.10] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:18px_18px]" />
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-black" />
      </div>

      <ContourLines className="opacity-40" />

      <Container className="pt-14 pb-12 sm:pt-20 sm:pb-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-8">
            {eyebrow ? (
              <Reveal>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-paper/90 ring-1 ring-white/10">
                  <span className="h-2 w-2 rounded-full bg-gold" />
                  {eyebrow}
                </div>
              </Reveal>
            ) : null}

            <Reveal delayMs={80}>
              <h1 className="mt-5 text-balance text-4xl font-semibold tracking-tight text-paper sm:text-5xl">
                {title}
              </h1>
            </Reveal>

            {subtitle ? (
              <Reveal delayMs={140}>
                <p className="mt-5 max-w-2xl text-pretty text-lg text-paper/75">
                  {subtitle}
                </p>
              </Reveal>
            ) : null}

            {(primaryCta || secondaryCta) && (
              <Reveal delayMs={200}>
                <div className="mt-7 flex flex-wrap gap-3">
                  {primaryCta ? (
                    <ButtonLink
                      href={primaryCta.href}
                      variant={primaryCta.variant ?? "primary"}
                      withArrow
                    >
                      {primaryCta.label}
                    </ButtonLink>
                  ) : null}
                  {secondaryCta ? (
                    <ButtonLink
                      href={secondaryCta.href}
                      variant={secondaryCta.variant ?? "ghost"}
                      withArrow
                    >
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
