import type { Metadata } from "next";
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
    return {
      robots: {
        index: false,
        follow: false,
      },
    };
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
      images: [
        {
          url: exec.image || "/brand/icon.png",
          alt: exec.name,
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
      ? {
          index: false,
          follow: false,
        }
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

  if (!exec) {
    notFound();
  }

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
              {
                "@type": "ListItem",
                position: 1,
                name: "Home",
                item: `${siteUrl}/`,
              },
              {
                "@type": "ListItem",
                position: 2,
                name: "Leadership",
                item: `${siteUrl}/team`,
              },
              {
                "@type": "ListItem",
                position: 3,
                name: exec.name,
                item: profileUrl,
              },
            ],
          },
          {
            "@type": "ProfilePage",
            url: profileUrl,
            name: `${exec.name} | ${exec.role}`,
            mainEntity: {
              "@type": "Person",
              name: exec.name,
              url: profileUrl,
              jobTitle: exec.role,
              description: exec.bio.join(" "),
              image: exec.image ? `${siteUrl}${exec.image}` : undefined,
              sameAs: exec.linkedin ? [exec.linkedin] : undefined,
              knowsAbout: exec.expertise,
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      ) : null}

      <ExecutiveProfilePage exec={exec} />
    </>
  );
}