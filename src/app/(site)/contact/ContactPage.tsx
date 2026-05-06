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
} from "lucide-react";
import ContactDetails from "./ContactDetails";

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

/** Light-blue “secure comms” illustration */

export default function ContactPage() {
  return (
    <>
      {/* HERO (Light blue -> white) */}
      



      {/* WHITE: Contact channels (clean, no heavy UI) */}
     



      {/* DARK: Form + process guidance */}

      <ContactDetails />

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
              
              <h2 className="mt-4 text-4xl leading-tight text-white sm:text-5xl">
                Let’s align <span className="italic text-white/90">your {" "}</span>capital with success
                
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
