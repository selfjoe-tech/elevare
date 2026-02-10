import { Container } from "@/components/Container";
import { SectionHeading } from "@/components/SectionHeading";
import { Reveal } from "@/components/Reveal";
import { IllustrationCard } from "@/components/IllustrationCard";
import { PageHero } from "@/components/PageHero";
import { profileContact } from "@/lib/profile";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="relative">
      <PageHero
        eyebrow="Contact"
        title="Start an enquiry"
        subtitle="Investor and business enquiries routed to the appropriate service team."
        primaryCta={{ label: "Services", href: "/services" }}
        secondaryCta={{ label: "Team", href: "/team" }}
        
      />

      <section className="bg-white">
        <Container className="py-12 sm:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              <Reveal>
                <SectionHeading
                  eyebrow="Details"
                  title="Reach us"
                  subtitle="Use email or the enquiry form. We’ll respond as soon as possible."
                />
              </Reveal>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <Reveal delayMs={80}>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="text-xs font-semibold text-slate-600">Email</div>
                    <div className="mt-2 text-sm font-semibold text-slate-900">{profileContact.email}</div>
                  </div>
                </Reveal>
                <Reveal delayMs={140}>
                  <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
                    <div className="text-xs font-semibold text-slate-600">Website</div>
                    <a
                      href={profileContact.websiteHref}
                      className="mt-2 block text-sm font-semibold text-blue-800 hover:underline"
                    >
                      {profileContact.websiteLabel}
                    </a>
                  </div>
                </Reveal>
              </div>

              <div className="mt-10">
                <Reveal delayMs={200}>
                  <div className="rounded-3xl border border-slate-200 bg-white p-7">
                    <div className="text-sm font-semibold text-slate-900">Location</div>
                    <div className="mt-2 text-sm text-slate-600">
                      Add an office address and embed a map when available.
                    </div>
                    <div className="mt-5 aspect-[16/9] rounded-2xl border border-slate-200 bg-gradient-to-br from-slate-50 via-white to-blue-50" />
                  </div>
                </Reveal>
              </div>
            </div>

            <div className="lg:col-span-5">
              <Reveal delayMs={120}>
                <ContactForm />
              </Reveal>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
}
