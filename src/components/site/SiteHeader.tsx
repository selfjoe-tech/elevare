"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import Container from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/button";
import { cn } from "@/lib/cn";

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const links = useMemo(
    () => [
      { href: "/about", label: "About" },
      { href: "/services", label: "Services" },
      { href: "/team", label: "Team" },
      { href: "/contact", label: "Contact" },
    ],
    []
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition",
        scrolled ? "border-white/10 bg-ink/70 backdrop-blur-md" : "border-transparent bg-transparent"
      )}
    >
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group inline-flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl gold-hairline bg-ink/60">
            <span className="text-sm font-semibold tracking-wider text-gold">
              E
            </span>
          </div>
          <div className="leading-none">
            <div className="text-sm tracking-[0.22em] text-white">
              ELEVARE
            </div>
            <div className="text-[11px] tracking-[0.28em] text-white/55">
              GROUP HOLDINGS
            </div>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={cn(
                  "text-sm tracking-wide transition",
                  active ? "text-gold" : "text-white/80 hover:text-white"
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <ButtonLink href="/contact" variant="contact">
            Contact Us
          </ButtonLink>
        </div>

        <button
          className="md:hidden rounded-xl border border-white/15 px-3 py-2 font-sans text-sm text-white/90"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
        >
          Menu
        </button>
      </Container>

      {open ? (
        <div className="border-t border-white/10 bg-ink/85 backdrop-blur-md md:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm tracking-wide transition",
                    pathname === l.href
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : "text-white/85 hover:text-white border border-transparent hover:border-white/10"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-2">
                <ButtonLink href="/contact" variant="contact" className="w-full">
                  Contact Us
                </ButtonLink>
              </div>
            </div>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
