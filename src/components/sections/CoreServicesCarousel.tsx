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
  image: { src: string; alt: string };
  href?: string;

  sections?: {
    label: string;
    items: string[];
  }[];
};


const SLIDES: Slide[] = [
  {
    id: "corporate-finance-advisory",
    eyebrow: "CFA",
    title: "Corporate Finance Advisory",
    image: { src: "/stock/bus-15.jpg", alt: "Corporate Finance Advisory" },
    href: "/services#corporate-finance-advisory",
    sections: [
      {
        label: "Services include",
        items: [
          "Financial modelling and forecasting",
          "Business valuations",
          "Strategic planning and growth advisory",
          "Capital structure optimization",
        ],
      },
    ],
  },

  {
    id: "capital-raising-investor-readiness",
    eyebrow: "CR",
    title: "Capital Raising & Investor Readiness",
    image: { src: "/stock/bus-16.jpg", alt: "Capital Raising" },
    href: "/services#capital-raising-investor-readiness",
    sections: [
      {
        label: "Services include",
        items: [
          "Investment readiness assessments",
          "Pitch deck preparation",
          "Financial packaging and data rooms",
          "Investor introductions (non-advisory)",
        ],
      },
      {
        label: "Note",
        items: [
          "We facilitate introductions and provide support materials",
          "We do not provide investment advice or act as an intermediary",
        ],
      },
    ],
  },

  {
    id: "transaction-advisory",
    eyebrow: "TA",
    title: "Transaction Advisory (M&A Support)",
    image: { src: "/stock/bus-17.jpg", alt: "Transaction Advisory" },
    href: "/services#transaction-advisory",
    sections: [
      {
        label: "Services include",
        items: [
          "Deal structuring (non-regulated)",
          "Due diligence coordination",
          "Buyer/seller identification",
          "Negotiation support",
        ],
      },
    ],
  },

  {
    id: "private-equity",
    eyebrow: "PE",
    title: "Private Equity (Principal Investing)",
    image: { src: "/stock/bus-18.jpg", alt: "Private Equity" },
    href: "/services#private-equity",
    sections: [
      {
        label: "Focus areas",
        items: [
          "SME growth-stage investments",
          "Strategic minority stakes",
          "Sector-focused opportunities",
        ],
      },
    ],
  },

  {
    id: "due-diligence-business-analysis",
    eyebrow: "DD",
    title: "Due Diligence & Business Analysis",
    image: { src: "/about/2.avif", alt: "Due Diligence" },
    href: "/services#due-diligence-business-analysis",
    sections: [
      {
        label: "Services include",
        items: [
          "Commercial due diligence",
          "Financial analysis",
          "Operational reviews",
          "Market and industry research",
        ],
      },
    ],
  },

  {
    id: "training-advisory-workshops",
    eyebrow: "TAW",
    title: "Training & Advisory Workshops",
    image: { src: "/about/1.avif", alt: "Workshops" },
    href: "/services#training-advisory-workshops",
    sections: [
      {
        label: "Topics include",
        items: [
          "How to raise capital",
          "Financial fundamentals for founders",
          "Private equity and deal structuring basics",
        ],
      },
    ],
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

                          <div className="mt-3 max-w-xl space-y-4 text-sm text-white/70 sm:text-base">
                            {s.sections?.map((section) => (
                              <div key={section.label}>
                              <div
                                className={`mt-10 text-2xl font-bold ${
                                  section.label === "Note" ? "text-white italic font-normal" : "text-white"
                                }`}
                              >
                                {section.label === "Note" ? "Note*" : section.label}
                              </div>
                                <div className={`mt-1 space-y-1 ${section.label === "Note" ? "text-white italic font-normal" : "text-white"}`}>
                                  {section.items.map((item) => (
                                    <div key={item} className="flex text-white">
                                      <ChevronRight className="text-blue-500" size={30} />{item}
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
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