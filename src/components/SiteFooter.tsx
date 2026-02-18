import Link from "next/link";
import { Container } from "@/components/Container";
import { site } from "@/lib/content";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-semibold text-white/85">
      {children}
    </span>
  );
}

function FooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const isExternal = href.startsWith("http");
  const cls =
    "group inline-flex items-center justify-between gap-2 rounded-xl px-3 py-2 text-sm text-white/75 ring-1 ring-transparent transition hover:bg-white/5 hover:text-white hover:ring-white/10 focus:outline-none focus:ring-2 focus:ring-blue-200";

  if (isExternal) {
    return (
      <a className={cls} href={href} target="_blank" rel="noreferrer">
        <span>{children}</span>
        <span className="text-white/45 transition group-hover:translate-x-0.5 group-hover:text-white/75">
          →
        </span>
      </a>
    );
  }

  return (
    <Link className={cls} href={href}>
      <span>{children}</span>
      
    </Link>
  );
}

function SocialIconButton({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  const disabled = !href || href === "#";
  return (
    <a
      href={href || "#"}
      target={disabled ? undefined : "_blank"}
      rel={disabled ? undefined : "noreferrer"}
      aria-label={label}
      title={disabled ? `${label} (add link)` : label}
      className={[
        "inline-flex h-10 w-10 items-center justify-center rounded-2xl",
        "border border-white/10 bg-white/5 text-white/80",
        "transition hover:bg-white/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-blue-200",
        disabled ? "opacity-50 pointer-events-none" : "",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

function FacebookIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56V12h2.76l-.44 2.89h-2.32v6.99A10 10 0 0 0 22 12z" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M18.9 2H22l-6.8 7.8L23.3 22h-6.6l-5.2-6.7L5.8 22H2.7l7.3-8.4L1 2h6.7l4.7 6.1L18.9 2zm-1.2 18h1.7L6.8 4H5L17.7 20z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 fill-current">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm10 2H7a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm-5 4.2A3.8 3.8 0 1 1 8.2 12 3.8 3.8 0 0 1 12 8.2zm0 2A1.8 1.8 0 1 0 13.8 12 1.8 1.8 0 0 0 12 10.2zM17.6 6.4a1 1 0 1 1-1 1 1 1 0 0 1 1-1z" />
    </svg>
  );
}

export function SiteFooter() {
  // If you have real links, add them in lib/content as:
  // site.facebook, site.x (or site.twitter), site.instagram
  const socials = {
    facebook: (site as any).facebook ?? "#",
    x: (site as any).x ?? (site as any).twitter ?? "#",
    instagram: (site as any).instagram ?? "#",
  };

  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-slate-950">
      {/* Clean premium backdrop */}
      <div aria-hidden className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(37,99,235,0.38),transparent_58%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_6%,rgba(99,102,241,0.22),transparent_58%)]" />
        <div className="absolute inset-0 opacity-[0.12] bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.14)_1px,transparent_0)] [background-size:18px_18px]" />
      </div>

      <Container className="py-12 sm:py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold text-white/90 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-[color:var(--champagne-2)]" />
              {site.markets}
            </div>

            <div className="mt-4 text-lg font-semibold text-white">{site.name}</div>
            <div className="mt-1 text-sm text-white/70">{site.tagline}</div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Africa-focused</Pill>
              <Pill>Risk-aware</Pill>
              <Pill>Governance-first</Pill>
            </div>

            {/* Socials */}
            <div className="mt-6">
              <div className="text-sm font-semibold text-white/90">Follow</div>
              <div className="mt-3 flex items-center gap-2">
                <SocialIconButton href={socials.facebook} label="Facebook">
                  <FacebookIcon />
                </SocialIconButton>
                <SocialIconButton href={socials.x} label="X">
                  <XIcon />
                </SocialIconButton>
                <SocialIconButton href={socials.instagram} label="Instagram">
                  <InstagramIcon />
                </SocialIconButton>
              </div>
            </div>
          </div>

          {/* Explore */}
          <div className="lg:col-span-4">
            <div className="text-sm font-semibold text-white/90">Explore</div>
            <div className="mt-3 grid gap-2">
              <FooterLink href="/services">Services</FooterLink>
              <FooterLink href="/approach">Investment Approach</FooterLink>
              <FooterLink href="/team">Leadership</FooterLink>
              <FooterLink href="/compliance">Compliance</FooterLink>
            </div>

            <div className="mt-8 text-sm font-semibold text-white/90">Company</div>
            <div className="mt-3 grid gap-2">
              <FooterLink href="/about">About</FooterLink>
              <FooterLink href="/advantage">Competitive Advantage</FooterLink>
              <FooterLink href="/contact">Contact</FooterLink>
            </div>
          </div>

          {/* Contact + Note */}
          <div className="lg:col-span-4">
            <div className="rounded-3xl border border-white/10 bg-white/5 p-6 ring-1 ring-white/10">
              <div className="text-sm font-semibold text-white/90">Contact</div>

              <div className="mt-3 space-y-2 text-sm text-white/70">
                <div>{site.headOffice}</div>

                <a
                  className="inline-flex items-center gap-2 font-semibold text-white hover:underline"
                  href={`mailto:${site.email}`}
                >
                  {site.email}
                  <span className="text-white/45">→</span>
                </a>

                <div>{site.website}</div>
              </div>

              

              <div className="mt-5 flex flex-wrap gap-2">
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-2xl bg-white/90 px-4 text-sm font-semibold text-slate-950 transition hover:bg-white"
                  href="/contact"
                >
                  Start an enquiry
                </Link>
                <Link
                  className="inline-flex h-10 items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-4 text-sm font-semibold text-white/85 transition hover:bg-white/10"
                  href="/services"
                >
                  Explore services
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/55 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
              {site.markets}
            </span>
            <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-white/70">
              Long-term value creation
            </span>
          </div>
        </div>
      </Container>
    </footer>
  );
}
