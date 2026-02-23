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

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className={cn("sticky top-0 z-50", scrolled ? "bg-ink/35 backdrop-blur-md" : "bg-transparent")}>
      <Container className="py-4">
        <div className="flex items-center justify-between rounded-full border border-white/10 bg-ink/45 px-4 py-3 backdrop-blur-md sm:px-6">
          <Link href="/" className="inline-flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-2xl gold-hairline bg-ink/60">
              <span className="text-sm font-semibold tracking-wider text-gold">E</span>
            </div>
            <div className="leading-none">
              <div className="text-sm tracking-[0.22em] text-white">ELEVARE</div>
              <div className="text-[11px] tracking-[0.28em] text-white/55">GROUP HOLDINGS</div>
            </div>
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
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
            className="md:hidden rounded-full border border-white/15 px-4 py-2 font-sans text-sm text-white/90"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label="Toggle menu"
          >
            Menu
          </button>
        </div>

        {open ? (
          <div className="mt-3 rounded-3xl border border-white/10 bg-ink/65 p-3 backdrop-blur-md md:hidden">
            <div className="flex flex-col gap-2">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={cn(
                    "rounded-2xl px-4 py-3 text-sm tracking-wide transition",
                    pathname === l.href
                      ? "bg-gold/10 text-gold border border-gold/20"
                      : "text-white/85 hover:text-white border border-transparent hover:border-white/10"
                  )}
                >
                  {l.label}
                </Link>
              ))}
              <ButtonLink href="/contact" variant="contact" className="w-full justify-center">
                Contact Us
              </ButtonLink>
            </div>
          </div>
        ) : null}
      </Container>
    </header>
  );
}
