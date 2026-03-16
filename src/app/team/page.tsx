import type { Metadata } from "next";
import LeadershipPage from "./LeadershipPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";
const routePath = "/team"; // change if this page is actually /leadership

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the Elevare leadership team responsible for strategy, investment oversight, governance alignment, and client execution.",
  alternates: {
    canonical: routePath,
  },
  openGraph: {
    title: "Leadership",
    description:
      "Meet the Elevare leadership team responsible for strategy, investment oversight, governance alignment, and client execution.",
    url: routePath,
    images: [
      {
        url: "/brand/icon.png",
        alt: "Elevare Conglomerate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership",
    description:
      "Meet the Elevare leadership team responsible for strategy, investment oversight, governance alignment, and client execution.",
    images: ["/brand/icon.png"],
  },
};

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
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
      item: `${siteUrl}${routePath}`,
    },
  ],
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd),
        }}
      />
      <LeadershipPage />
    </>
  );
}