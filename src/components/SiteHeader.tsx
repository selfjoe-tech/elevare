"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Container } from "@/components/Container";
import { site } from "@/lib/content";

const nav = [
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/clients", label: "Clients" },
  { href: "/approach", label: "Approach" },
  { href: "/leadership", label: "Leadership" },
  { href: "/compliance", label: "Compliance" },
  { href: "/contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  // Close menu on route changes via basic escape/resize UX
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/60 bg-white/70 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="group flex items-center gap-3">
          <div className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-blue-700 to-indigo-600 text-white shadow-sm">
            <span className="text-sm font-bold">E</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-semibold text-slate-900">{site.name}</div>
            <div className="text-xs text-slate-500">{site.tagline}</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex">
          {nav.map((i) => (
            <Link
              key={i.href}
              href={i.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-blue-50 hover:text-blue-900"
            >
              {i.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link
            href="/contact"
            className="hidden rounded-xl bg-blue-700 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-800 sm:inline-flex"
          >
            Get in touch
          </Link>

          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-slate-50 lg:hidden"
          >
            ☰
          </button>
        </div>
      </Container>

      {/* Mobile menu */}
      <div
        className={[
          "lg:hidden overflow-hidden border-t border-slate-200 bg-white",
          "transition-[max-height,opacity] duration-300 ease-out",
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        ].join(" ")}
      >
        <Container className="py-4">
          <div className="grid gap-2">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-slate-800 hover:bg-blue-50 hover:text-blue-900"
              >
                {i.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-blue-700 px-4 py-3 text-center text-sm font-semibold text-white hover:bg-blue-800 sm:hidden"
            >
              Get in touch
            </Link>
          </div>
        </Container>
      </div>
    </header>
  );
}
