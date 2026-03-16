import type { Metadata } from "next";
import ContactPage from "./ContactPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Elevare Group Holdings for private equity, wealth management, funding facilitation and risk management enquiries.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Us",
    description:
      "Contact Elevare Group Holdings for private equity, wealth management, funding facilitation and risk management enquiries.",
    url: "/contact",
    images: [
      {
        url: "/brand/icon.png",
        alt: "Elevare Conglomerate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us",
    description:
      "Contact Elevare Group Holdings for private equity, wealth management, funding facilitation and risk management enquiries.",
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
      name: "Contact Us",
      item: `${siteUrl}/contact`,
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
      <ContactPage />
    </>
  );
}