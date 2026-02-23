"use client";

import * as React from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";

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
  slides = SLIDES,
  autoPlayMs = 6500,
}: {
  title?: string;
  slides?: Slide[];
  autoPlayMs?: number;
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selected, setSelected] = React.useState(0);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [hoverPause, setHoverPause] = React.useState(false);

  const scrollPrev = React.useCallback(() => {
    emblaApi?.scrollPrev();
  }, [emblaApi]);

  const scrollNext = React.useCallback(() => {
    emblaApi?.scrollNext();
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => setSelected(emblaApi.selectedScrollSnap());
    onSelect();
    emblaApi.on("select", onSelect);

    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi]);

  React.useEffect(() => {
    if (!emblaApi || !isPlaying || hoverPause) return;

    const t = window.setInterval(() => {
      emblaApi.scrollNext();
    }, autoPlayMs);

    return () => window.clearInterval(t);
  }, [emblaApi, isPlaying, hoverPause, autoPlayMs]);

  return (
    <section className="relative overflow-hidden bg-black py-20 sm:py-24" id="services">
      <div className="pointer-events-none absolute inset-0 bg-black" />

      <Container className="relative w-full">
        <Reveal>
          <div className="text-center">
            <h2 className="font-bold text-5xl leading-tight text-white sm:text-5xl">{title}</h2>
          </div>
        </Reveal>

        <div
          className="mt-12"
          onMouseEnter={() => setHoverPause(true)}
          onMouseLeave={() => setHoverPause(false)}
        >
          <div className="overflow-hidden bg-white/[0.03] shadow-[0_30px_90px_rgba(0,0,0,0.55)]">
            {/* viewport */}
            <div ref={emblaRef} className="overflow-hidden">
              <div className="flex">
                {slides.map((s) => (
                  <div key={s.id} className="min-w-0 flex-[0_0_100%]">
                    <div className="grid lg:min-h-[440px] lg:grid-cols-12">
                      {/* image */}
                      <div className="lg:col-span-6">
                        <div className="relative h-60 w-full sm:h-80 lg:h-full lg:min-h-[440px]">
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
                        <div className="flex h-full min-h-[260px] flex-col justify-center p-6 sm:p-8 lg:min-h-[440px] lg:p-10">
                          <h3 className="text-4xl font-semibold leading-tight text-white sm:text-5xl">
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

            {/* ✅ Dedicated control bar (no overlap) */}
            <div className="border-t border-white/10 bg-black/35 px-4 py-3 backdrop-blur-sm sm:px-5">
              <div className="flex flex-wrap items-center justify-between gap-3">
                {/* Left controls */}
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsPlaying((v) => !v)}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:bg-white/10"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </button>

                  
                </div>

                {/* Right controls */}
                <div className="flex items-center gap-2 sm:gap-3">
                  <button
                    type="button"
                    onClick={scrollPrev}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-[#2563eb] text-white transition hover:opacity-90"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>

                  <div className="min-w-[52px] text-center text-sm font-semibold text-white/80">
                    {selected + 1}/{slides.length}
                  </div>

                  <button
                    type="button"
                    onClick={scrollNext}
                    className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-white/10 bg-[#2563eb] text-white transition hover:opacity-90"
                    aria-label="Next"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}