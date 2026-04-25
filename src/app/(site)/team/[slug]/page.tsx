import type { Metadata } from "next";
import Script from "next/script";
import { notFound } from "next/navigation";
import { EXECUTIVES, getExecutive } from "@/lib/leadership";
import ExecutiveProfilePage from "./ExecutiveProfilePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";

function isPendingProfile(name: string) {
  return /name pending/i.test(name);
}

export function generateStaticParams() {
  return EXECUTIVES.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const exec = getExecutive(slug);

  if (!exec) {
    return { robots: { index: false, follow: false } };
  }

  const pending = isPendingProfile(exec.name);
  const title = `${exec.name} | ${exec.role} | Elevare Conglomerate`;
  const description = `${exec.name} is ${exec.role} at Elevare Conglomerate. ${exec.tagline}${
    exec.location ? ` Based in ${exec.location}.` : ""
  }`;

  return {
    title,
    description,
    alternates: {
      canonical: `/team/${exec.slug}`,
    },
    openGraph: {
      title,
      description,
      url: `/team/${exec.slug}`,
      siteName: "Elevare Conglomerate",
      locale: "en_ZA",
      type: "profile",
      images: [
        {
          url: exec.image || "/brand/icon.png",
          width: 1200,
          height: 630,
          alt: `${exec.name} — ${exec.role} at Elevare Conglomerate`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [exec.image || "/brand/icon.png"],
    },
    robots: pending
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            "max-image-preview": "large",
            "max-snippet": -1,
            "max-video-preview": -1,
          },
        },
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const exec = getExecutive(slug);

  if (!exec) notFound();

  const pending = isPendingProfile(exec.name);
  const profileUrl = `${siteUrl}/team/${exec.slug}`;

  const jsonLd = pending
    ? null
    : {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
              { "@type": "ListItem", position: 2, name: "Team", item: `${siteUrl}/team` },
              { "@type": "ListItem", position: 3, name: exec.name, item: profileUrl },
            ],
          },
          {
            "@type": "ProfilePage",
            url: profileUrl,
            name: `${exec.name} | ${exec.role}`,
            inLanguage: "en-ZA",
            isPartOf: { "@type": "WebSite", url: siteUrl, name: "Elevare Conglomerate" },
            mainEntity: {
              "@type": "Person",
              name: exec.name,
              url: profileUrl,
              jobTitle: exec.role,
              description: exec.bio.join(" "),
              ...(exec.image ? { image: `${siteUrl}${exec.image}` } : {}),
              ...(exec.location ? { address: { "@type": "PostalAddress", addressRegion: exec.location } } : {}),
              ...(exec.linkedin ? { sameAs: [exec.linkedin] } : {}),
              ...(exec.expertise?.length ? { knowsAbout: exec.expertise } : {}),
              ...(exec.credentials?.length ? { hasCredential: exec.credentials.map((c) => ({
                "@type": "EducationalOccupationalCredential",
                credentialCategory: "degree",
                name: c,
              })) } : {}),
              worksFor: {
                "@type": "Organization",
                name: "Elevare Conglomerate",
                url: siteUrl,
                logo: `${siteUrl}/brand/icon.png`,
              },
            },
          },
        ],
      };

  return (
    <>
      {jsonLd ? (
        <Script
          id={`schema-exec-${exec.slug}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      ) : null}
      <ExecutiveProfilePage exec={exec} />
    </>
  );
}