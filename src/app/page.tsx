import type { Metadata } from "next";
import HomePage from "@/components/sections/HomePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    title: "Elevare Conglomerate",
    description:
      "Private equity, wealth management, funding facilitation and risk management.",
    images: [
      {
        url: "/brand/icon.png",
        alt: "Elevare Conglomerate",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Conglomerate",
    description:
      "Private equity, wealth management, funding facilitation and risk management.",
    images: ["/brand/icon.png"],
  },
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elevare Conglomerate",
  url: siteUrl,
  logo: `${siteUrl}/brand/icon.png`,
  description:
    "Private equity, wealth management, funding facilitation and risk management.",
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd),
        }}
      />
      <HomePage />
    </>
  );
}