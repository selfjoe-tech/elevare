import type { Metadata } from "next";
import AboutPage from "./AboutPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Elevare Group Holdings, a South Africa-based alternative investment and financial advisory firm serving high net worth individuals, institutional investors, and growth-oriented businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Us",
    description:
      "Learn about Elevare Group Holdings, a South Africa-based alternative investment and financial advisory firm serving high net worth individuals, institutional investors, and growth-oriented businesses.",
    url: "/about",
    images: [
      {
        url: "/brand/icon.png",
        alt: "Elevare Conglomerate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us",
    description:
      "Learn about Elevare Group Holdings, a South Africa-based alternative investment and financial advisory firm serving high net worth individuals, institutional investors, and growth-oriented businesses.",
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
      name: "About Us",
      item: `${siteUrl}/about`,
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
      <AboutPage />
    </>
  );
}