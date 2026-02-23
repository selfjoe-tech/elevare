import Link from "next/link";
import Container from "@/components/ui/Container";
import { ArrowUpRightIcon, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import Image from "next/image";

function SocialIcon({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      aria-label={label}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.07] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#2f6bff]/50"
    >
      <span className="transition group-hover:scale-105">{children}</span>
    </a>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative border-t border-white/10 bg-ink">
      {/* subtle top glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-[radial-gradient(60%_120%_at_30%_0%,rgba(47,107,255,0.22)_0%,rgba(5,5,5,0)_70%)]" />

      <Container className="relative py-14">
        <div className="grid gap-10 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <div className="flex flex-col items-start gap">
                    <div className="relative h-[55px] w-[170px] sm:w-[200px]">
                      <Image
                        src="/brand/logo-1.png"
                        alt="Elevare Group Holdings"
                        fill
                        priority
                        className="object-contain object-left transition-opacity duration-200 group-hover:opacity-90"
                        sizes="300px"
                      />
                    </div>
            
                    <p className="ml-5 text-[7px] tracking-[0.18em] text-white/100">
                      IMPACT THROUGH INTEGRITY
                    </p>
                  </div>

            

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <SocialIcon href="https://www.linkedin.com" label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://x.com" label="X">
                <Twitter className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.instagram.com" label="Instagram">
                <Instagram className="h-5 w-5" />
              </SocialIcon>
              <SocialIcon href="https://www.facebook.com" label="Facebook">
                <Facebook className="h-5 w-5" />
              </SocialIcon>

              <div className="ml-1 text-xs text-white/45">
                Follow for updates & insights.
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.32em] text-white/60">
              Pages
            </div>
            <div className="mt-4 grid gap-2 text-sm">
              {[
                { href: "/about", label: "About" },
                { href: "/team", label: "Team" },
                { href: "/contact", label: "Contact" },
                { href: "/about#services", label: "Services" },


              ].map((l) => (
                <Link
                  key={l.href}
                  className="w-fit flex gap-2 text-white/75 transition hover:text-white"
                  href={l.href}
                >
                  {l.label}
                  <ArrowUpRightIcon />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="md:col-span-4">
            <div className="text-xs uppercase tracking-[0.32em] text-white/60">
              Contact
            </div>

            <div className="mt-4 space-y-2 text-sm text-white/75">
  <a
    className="block w-fit text-white/60 transition hover:text-white"
    href="mailto:info@elevaregroupholdings.co.za"
  >
    info@elevaregroupholdings.co.za
  </a>

  {/* Phone slot */}
  <a
    className="block w-fit text-white/60 transition hover:text-white"
    href="tel:+27123456789"
  >
    +27 12 345 6789
  </a>

  <a
    className="block w-fit text-white/60 transition hover:text-white"
    href="https://elevaregroupholdings.co.za"
    target="_blank"
    rel="noreferrer"
  >
    elevaregroupholdings.co.za
  </a>
</div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Elevare Group Holdings (Pty) Ltd</div>

          <div className="flex flex-wrap items-center gap-4">
            <Link className="text-white/50 hover:text-white/80" href="/privacy">
              Privacy
            </Link>
            <Link className="text-white/50 hover:text-white/80" href="/terms">
              Terms
            </Link>
            <div className="hidden h-3 w-px bg-white/15 md:block" />
            <div className="tracking-[0.22em] text-white/45">
              DISCIPLINED CAPITAL. CLEAR REPORTING.
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
