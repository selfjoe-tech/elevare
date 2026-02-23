import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { ButtonLink } from "@/components/ui/button";
import {
  Mail,
  Phone,
  MapPin,
  ShieldCheck,
  BadgeCheck,
  Scale,
  Landmark,
  MessageSquareText,
  Clock,
} from "lucide-react";

function SoftCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[1.75rem] bg-white shadow-[0_1px_0_rgba(16,24,40,0.06),0_18px_50px_rgba(16,24,40,0.10)]",
        "transition-transform duration-300 hover:-translate-y-0.5 motion-reduce:transition-none motion-reduce:hover:translate-y-0",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

/** Borderless “image card” (no border) */
function MediaPanel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "rounded-[2rem] overflow-hidden",
        "shadow-[0_1px_0_rgba(16,24,40,0.06),0_22px_60px_rgba(16,24,40,0.12)]",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

function Chip({ icon, text }: { icon: React.ReactNode; text: string }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-[#eaf1ff] px-4 py-2 text-xs font-sans text-[#2f6bff]">
      {icon}
      {text}
    </span>
  );
}

/** Light-blue “secure comms” illustration */
function SecureCommsIllustration() {
  return (
    <svg viewBox="0 0 520 360" className="h-full w-full">
      <defs>
        <linearGradient id="bg" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#bcdcff" />
          <stop offset="1" stopColor="#ffffff" />
        </linearGradient>
        <linearGradient id="g" x1="0" x2="1">
          <stop offset="0" stopColor="#2f6bff" />
          <stop offset="1" stopColor="#9ad7ff" />
        </linearGradient>
      </defs>

      <rect width="520" height="360" fill="url(#bg)" />
      <circle cx="430" cy="75" r="150" fill="#2f6bff" opacity="0.10" />
      <circle cx="90" cy="110" r="140" fill="#9ad7ff" opacity="0.22" />

      {/* main panel */}
      <rect x="70" y="72" width="380" height="240" rx="30" fill="#fff" opacity="0.92" />
      <rect x="70" y="72" width="380" height="240" rx="30" fill="#2f6bff" opacity="0.04" />

      {/* header */}
      <rect x="100" y="102" width="160" height="14" rx="7" fill="rgba(11,16,32,0.14)" />
      <rect x="100" y="126" width="120" height="10" rx="5" fill="rgba(11,16,32,0.10)" />

      {/* message bubbles */}
      <rect x="100" y="158" width="230" height="46" rx="18" fill="rgba(47,107,255,0.14)" />
      <rect x="120" y="172" width="160" height="10" rx="5" fill="rgba(11,16,32,0.12)" />
      <rect x="100" y="214" width="280" height="54" rx="18" fill="url(#g)" opacity="0.95" />
      <rect x="120" y="234" width="180" height="10" rx="5" fill="rgba(255,255,255,0.85)" />

      {/* lock icon */}
      <rect x="362" y="152" width="64" height="64" rx="20" fill="#ffffff" />
      <rect x="372" y="170" width="44" height="34" rx="12" fill="rgba(47,107,255,0.14)" />
      <rect x="385" y="156" width="18" height="18" rx="9" fill="rgba(47,107,255,0.22)" />
      <rect x="392" y="180" width="6" height="14" rx="3" fill="rgba(47,107,255,0.55)" />

      <text x="100" y="300" fontSize="12" fill="rgba(11,16,32,0.55)">
        Confidential and governance-aligned communication
      </text>
    </svg>
  );
}

export default function ContactPage() {
  return (
    <>
      {/* HERO (Light blue -> white) */}
      

      {/* WHITE: Contact channels (clean, no heavy UI) */}
      <section className="bg-white py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">

              <h2 className="mt-6 font-bold text-5xl text-[#0b1020] sm:text-5xl">
                Contact Us              
              </h2>
              
              <h2 className="mt-6 text-xl text-[#0b1020] sm:text-xl">
                Choose the channel that fits the mandate.
              </h2>
              <p className="mt-4 text-[#0b1020]/70">
                Replace the placeholders below with your real contact details once you’re ready.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <Reveal>
              <SoftCard className="p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <Mail className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-5 text-lg font-semibold text-[#0b1020]">Email</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  Best for proposals, documents, and detailed briefs.
                </p>
                <div className="mt-5 rounded-2xl bg-[#f4f8ff] px-4 py-3 text-sm text-[#0b1020]/70">
                  info@yourdomain.com
                </div>
              </SoftCard>
            </Reveal>

            <Reveal delay={70}>
              <SoftCard className="p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <Phone className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-5 text-lg font-semibold text-[#0b1020]">Phone</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  For urgent matters and quick alignment before a formal brief.
                </p>
                <div className="mt-5 rounded-2xl bg-[#f4f8ff] px-4 py-3 text-sm text-[#0b1020]/70">
                  +27 00 000 0000
                </div>
              </SoftCard>
            </Reveal>

            <Reveal delay={140}>
              <SoftCard className="p-7">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf1ff]">
                  <MapPin className="h-5 w-5 text-[#2f6bff]" />
                </div>
                <div className="mt-5 text-lg font-semibold text-[#0b1020]">Location</div>
                <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">
                  South Africa based, serving Africa and select global markets.
                </p>
                <div className="mt-5 rounded-2xl bg-[#f4f8ff] px-4 py-3 text-sm text-[#0b1020]/70">
                  South Africa
                </div>
              </SoftCard>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* DARK: Form + process guidance */}
      <section className="bg-ink py-20" id="contact-form">
        <Container>
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <Reveal>
                <h2 className="text-5xl leading-tight text-white sm:text-5xl">
                  Submit an{" "}
                  <span className="italic text-white/90">enquiry</span>
                </h2>
                <p className="mt-4 text-white/70">
                  Provide the objective, timeline, and constraints. We’ll respond with a structured next step.
                </p>
              </Reveal>

              
            </div>

            <div className="lg:col-span-7">
              <Reveal delay={140}>
                <div className="rounded-[2rem] bg-white/5 p-8 backdrop-blur-md">
                  <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                    Enquiry form
                  </div>

                  <form className="mt-7 grid gap-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-sans uppercase tracking-[0.28em] text-white/60">
                          Full name
                        </span>
                        <input
                          className="h-12 w-full rounded-2xl bg-white/5 px-4 font-sans text-sm text-white placeholder:text-white/35 outline-none ring-1 ring-white/10 focus:ring-gold/30"
                          placeholder="Your name"
                        />
                      </label>

                      <label className="grid gap-2">
                        <span className="text-xs font-sans uppercase tracking-[0.28em] text-white/60">
                          Email
                        </span>
                        <input
                          type="email"
                          className="h-12 w-full rounded-2xl bg-white/5 px-4 font-sans text-sm text-white placeholder:text-white/35 outline-none ring-1 ring-white/10 focus:ring-gold/30"
                          placeholder="you@company.com"
                        />
                      </label>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      <label className="grid gap-2">
                        <span className="text-xs font-sans uppercase tracking-[0.28em] text-white/60">
                          Mandate type
                        </span>
                        <select className="h-12 w-full rounded-2xl bg-white/5 px-4 font-sans text-sm text-white outline-none ring-1 ring-white/10 focus:ring-gold/30">
                          <option className="bg-[#0a0a0a]" value="private-equity">
                            Private Equity
                          </option>
                          <option className="bg-[#0a0a0a]" value="wealth">
                            Wealth Management
                          </option>
                          <option className="bg-[#0a0a0a]" value="hedge">
                            Hedge Fund Strategies
                          </option>
                          <option className="bg-[#0a0a0a]" value="funding">
                            Funding Facilitation
                          </option>
                          <option className="bg-[#0a0a0a]" value="other">
                            Other
                          </option>
                        </select>
                      </label>

                      <label className="grid gap-2">
                        <span className="text-xs font-sans uppercase tracking-[0.28em] text-white/60">
                          Timeline
                        </span>
                        <input
                          className="h-12 w-full rounded-2xl bg-white/5 px-4 font-sans text-sm text-white placeholder:text-white/35 outline-none ring-1 ring-white/10 focus:ring-gold/30"
                          placeholder="e.g., 30 days"
                        />
                      </label>
                    </div>

                    <label className="grid gap-2">
                      <span className="text-xs font-sans uppercase tracking-[0.28em] text-white/60">
                        Objective / context
                      </span>
                      <textarea
                        rows={5}
                        className="w-full rounded-2xl bg-white/5 px-4 py-3 font-sans text-sm text-white placeholder:text-white/35 outline-none ring-1 ring-white/10 focus:ring-gold/30"
                        placeholder="Briefly describe what you want to achieve, constraints, and what you need from Elevare."
                      />
                    </label>

                    <div className="mt-2 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                      

                      <div className="flex gap-3">
                        
                        <ButtonLink href="#" variant="gold">
                          Submit
                        </ButtonLink>
                      </div>
                    </div>
                  </form>
                </div>
              </Reveal>
            </div>
          </div>
        </Container>
      </section>

      {/* LIGHT BLUE ALT: What happens next */}
      <section className="[background:linear-gradient(180deg,#ffffff_0%,#eaf3ff_40%,#bcdcff_100%)] py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mt-6 text-3xl text-[#0b1020] sm:text-4xl">
                What happens next?
              </h2>


              <h2 className="mt-6 text-xl text-[#0b1020] sm:text-xl">
                A disciplined process from{" "}
                <span className="italic text-[#0b1020]/90">discovery</span> to execution.
              </h2>


              <p className="mt-4 text-[#0b1020]/70">
                We document assumptions, map risk early, and keep reporting action-oriented.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              {
                icon: <BadgeCheck className="h-5 w-5 text-[#2f6bff]" />,
                t: "Discovery call",
                d: "Objectives, constraints, timeline, and information boundaries.",
              },
              {
                icon: <ShieldCheck className="h-5 w-5 text-[#2f6bff]" />,
                t: "Diligence + structure",
                d: "Governance checks, risk flags, and a realistic structure for the mandate.",
              },
              {
                icon: <Scale className="h-5 w-5 text-[#2f6bff]" />,
                t: "Execution + reporting",
                d: "Clear milestones, action items, and an agreed reporting cadence.",
              },
            ].map((x, idx) => (
              <Reveal key={x.t} delay={idx * 80}>
                <SoftCard className="p-7">
                  <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[#eaf1ff]">
                    {x.icon}
                  </div>
                  <div className="mt-5 text-lg font-semibold text-[#0b1020]">{x.t}</div>
                  <p className="mt-2 text-sm leading-relaxed text-[#0b1020]/65">{x.d}</p>
                </SoftCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Final dark CTA */}
      <section className="bg-[#0a0a0a] py-20">
        <Container>
          <Reveal>
            <div className="mx-auto max-w-4xl rounded-[2rem] bg-white/5 p-10 text-center backdrop-blur-md">
              <div className="text-xs font-sans uppercase tracking-[0.32em] text-gold/85">
                Ready
              </div>
              <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Let’s align your capital{" "}
                <span className="italic text-white/90">with governance</span>.
              </h2>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:justify-center">
                <ButtonLink href="#contact-form" variant="gold">
                  Start an enquiry
                </ButtonLink>
                <ButtonLink href="/about" variant="contact">
                  About us
                </ButtonLink>
              </div>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
