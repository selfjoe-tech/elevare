import Link from "next/link";
import Container from "@/components/ui/Container";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-ink">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-sm tracking-[0.22em] text-white">ELEVARE</div>
            <p className="mt-4 text-sm leading-relaxed text-white/70">
              Sophisticated capital solutions for high-net-worth individuals,
              institutional investors, and growth-oriented businesses.
            </p>
            <div className="mt-6 h-px w-24 bg-gold/35" />
          </div>

          <div className="text-sm">
            <div className="text-xs uppercase tracking-[0.32em] text-white/60">
              Navigation
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <Link className="text-white/75 hover:text-white" href="/about">About</Link>
              <Link className="text-white/75 hover:text-white" href="/services">Services</Link>
              <Link className="text-white/75 hover:text-white" href="/team">Team</Link>
              <Link className="text-white/75 hover:text-white" href="/contact">Contact</Link>
            </div>
          </div>

          <div className="text-sm">
            <div className="text-xs uppercase tracking-[0.32em] text-white/60">
              Contact
            </div>
            <div className="mt-4 space-y-2 text-white/75">
              <div>Republic of South Africa</div>
              <div className="text-white/60">info@elevaregroupholdings.co.za</div>
              <div className="text-white/60">elevaregroupholdings.co.za</div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-white/50 md:flex-row md:items-center md:justify-between">
          <div>© {new Date().getFullYear()} Elevare Group Holdings (Pty) Ltd</div>
          <div className="tracking-[0.22em]">EXECUTIVE TREATMENT. DISCIPLINED CAPITAL.</div>
        </div>
      </Container>
    </footer>
  );
}
