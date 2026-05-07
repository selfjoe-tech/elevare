import Link from "next/link";
import Container from "@/components/ui/Container";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function SiteFooter() {
  const leftLinks = [
    { href: "/", label: "Home" },
    { href: "/about#services", label: "Services" },
    { href: "/about", label: "About Us" },
    { href: "/contact", label: "Contact Us" },
    { href: "/team", label: "The Team" },

  ];

  

  return (
    <footer className="bg-black text-white">
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* Left */}
          <div>
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Impact through integrity
            </h2>

            <div className="mt-12 grid gap-10 sm:grid-cols-2 sm:gap-16">
              <nav className="space-y-5">
                {leftLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="block flex items-center text-base text-white/85 transition hover:text-white"
                  >
                    {item.label} <ArrowUpRight />
                  </Link>
                ))}
              </nav>

              
            </div>

            {/* Disclaimer */}
            <div className="mt-14 max-w-2xl">
              <div className="text-sm font-medium text-white">
                Disclaimer
              </div>

              <p className="mt-3 text-sm leading-relaxed text-white/60">
              We do not provide financial advice or intermediary services as defined under 
              applicable financial services regulations. All services are limited to advisory, 
              support, and principal investing activities.
              </p>
            </div>

            {/* Bottom */}
            <div className="mt-14 flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
              <div>
                © {new Date().getFullYear()} Elevare Conglomerate. All Rights
                Reserved.
              </div>

              <div>
                Developed by{" "}
                <Link
                  href="https://thaboliz.co.za/services/technologies"
                  className="text-white transition hover:text-white/70"
                >
                  Thaboliz Technologies
                </Link>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="flex min-h-[260px] items-center justify-center lg:min-h-[420px] lg:justify-end">
            <div className="relative h-[220px] w-full max-w-[320px] sm:h-[280px] sm:max-w-[420px] lg:h-[360px] lg:max-w-[520px]">
              <Image
                src="/brand/logo-2.png"
                alt="Elevare Conglomerate"
                fill
                className="object-contain object-center"
                sizes="(max-width: 1024px) 100vw, 520px"
              />
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}