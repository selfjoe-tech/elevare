"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { LightSweepText } from "../ui/LightSweepText";

function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

type Slide = {
  id: string;
  eyebrow?: string;
  title: string;
  description: string;
  image: { src: string; alt: string };
  href?: string;
};

const SLIDES: Slide[] = [
  {
    id: "private-equity",
    eyebrow: "PE",
    title: "Private Equity",
    description:
      "Growth capital and buyout investments, sector focused strategies, active portfolio management, and exit planning.",
    image: { src: "/stock/bus-15.jpg", alt: "Private Equity" },
    href: "/services#private-equity",
  },
  {
    id: "wealth",
    eyebrow: "WM",
    title: "Wealth Management",
    description:
      "Personalized portfolio construction, allocation and risk profiling, generational wealth planning, and estate/succession support (with legal partners).",
    image: { src: "/stock/bus-16.jpg", alt: "Wealth Management" },
    href: "/services#wealth",
  },
  {
    id: "funding",
    eyebrow: "FF",
    title: "Funding Facilitation",
    description:
      "Capital raising for SMEs and corporates, structuring debt/equity/hybrids, investor introductions, modelling, and investment readiness support.",
    image: { src: "/stock/bus-17.jpg", alt: "Funding Facilitation" },
    href: "/services#funding",
  },
  {
    id: "risk",
    eyebrow: "RM",
    title: "Risk Management",
    description:
      "Governance aligned decisions, disciplined review cycles, and clear reporting structures.",
    image: { src: "/stock/bus-18.jpg", alt: "Risk Management" },
    href: "/services#risk",
  },
];

export default function CoreServicesCarousel({
  title = "Core Services",
  subtitle = `We specialize in private equity investments, wealth management, hedge fund strategies, and funding facilitation,
with a strong focus on value creation, risk management, and long term capital growth within Africa and select global markets.`,
  slides = SLIDES,
  autoPlayMs = 6500,
}: {
  title?: string;
  subtitle?: string;
  slides?: Slide[];
  autoPlayMs?: number;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [hoverPause, setHoverPause] = React.useState(false);

  const scrollPrev = React.useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = React.useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  // Autoplay (pauses on hover)
  React.useEffect(() => {
    if (!emblaApi) return;
    if (!isPlaying) return;
    if (hoverPause) return;

    const t = window.setInterval(() => emblaApi.scrollNext(), autoPlayMs);
    return () => window.clearInterval(t);
  }, [emblaApi, isPlaying, hoverPause, autoPlayMs]);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24" id="services">
      {/* atmosphere */}
      <div className="pointer-events-none absolute inset-0 opacity-80 bg-black" />

      <Container className="relative w-full">
        <Reveal>
          <div className=" text-center">
            <h2 className="font-bold text-5xl leading-tight text-white sm:text-5xl">
                {title}
            </h2>
           
          </div>
        </Reveal>

        <div
          className="mt-12"
          onMouseEnter={() => setHoverPause(true)}
          onMouseLeave={() => setHoverPause(false)}
        >
          <div className="relative overflow-hidden bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            {/* viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {slides.map((s) => (
                  <div key={s.id} className="min-w-0 flex-[0_0_100%]">
                    {/* not squashed: fixed heights per breakpoint */}
                    <div className="grid lg:grid-cols-12">
                      {/* image */}
                      <div className="lg:col-span-6">
                        <div className="relative h-60 w-full sm:h-80 lg:h-[440px]">
                          <Image
                            src={s.image.src}
                            alt={s.image.alt}
                            fill
                            className="object-cover object-center"
                            sizes="(min-width: 1024px) 50vw, 100vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-black/0" />
                        </div>
                      </div>

                      {/* text */}
                      <div className="lg:col-span-6">
                        <div className="flex h-full min-h-[260px] flex-col justify-center p-6 sm:p-8 lg:h-[440px] lg:p-10">
                          <div className="flex items-center gap-4">
                           
                            
                          </div>

                          <h3 className="mt-5 text-5xl font-semibold text-white sm:text-5xl">
                            {s.title}
                          </h3>

                          <p className="mt-3 max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
                            {s.description}
                          </p>

                          
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* controls: pause left, arrows + count right */}
            <div className="absolute bottom-4 left-4 flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsPlaying((v) => !v)}
                className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 text-white hover:bg-white/15 transition-colors"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
              </button>
            </div>

            <div className="absolute bottom-4 right-4 flex items-center gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500 text-white hover:bg-white/15 transition-colors"
                aria-label="Previous"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="select-none text-sm font-semibold text-white/80">
                {selected + 1}/{slides.length}
              </div>

              <button
                type="button"
                onClick={scrollNext}
                className="grid h-11 w-11 place-items-center rounded-xl bg-blue-500 text-white hover:bg-white/15 transition-colors"
                aria-label="Next"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
