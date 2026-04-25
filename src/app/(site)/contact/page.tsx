import type { Metadata } from "next";
import Script from "next/script";
import ContactPage from "./ContactPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";
const pageUrl = `${siteUrl}/contact`;

export const metadata: Metadata = {
  title: "Contact Elevare Conglomerate | Private Equity & Financial Advisory Enquiries",
  description:
    "Contact Elevare Group Holdings for private equity, wealth management, funding facilitation, and risk management enquiries in South Africa. Submit a mandate brief and receive a structured response.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Elevare Conglomerate | Private Equity & Financial Advisory Enquiries",
    description:
      "Contact Elevare Group Holdings for private equity, wealth management, funding facilitation, and risk management enquiries in South Africa.",
    url: "/contact",
    siteName: "Elevare Conglomerate",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/brand/icon.png",
        width: 1200,
        height: 630,
        alt: "Elevare Conglomerate — Contact Us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Elevare Conglomerate | Private Equity & Financial Advisory Enquiries",
    description:
      "Contact Elevare Group Holdings for private equity, wealth management, funding facilitation, and risk management enquiries in South Africa.",
    images: ["/brand/icon.png"],
  },
};

// ── Breadcrumb ─────────────────────────────────────────────────────────────────
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: pageUrl },
  ],
};

// ── ContactPage ────────────────────────────────────────────────────────────────
const contactPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Elevare Conglomerate",
  url: pageUrl,
  description:
    "Submit a mandate enquiry to Elevare Group Holdings for private equity, wealth management, funding facilitation, and risk management services in South Africa.",
  inLanguage: "en-ZA",
  isPartOf: { "@type": "WebSite", url: siteUrl, name: "Elevare Conglomerate" },
  breadcrumb: breadcrumbJsonLd,
  mainEntity: {
    "@type": "Organization",
    name: "Elevare Group Holdings",
    url: siteUrl,
    email: "info@elevare.co.za",
    telephone: "+27000000000",
    address: {
      "@type": "PostalAddress",
      addressCountry: "ZA",
      addressRegion: "South Africa",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        email: "info@elevare.co.za",
        telephone: "+27000000000",
        availableLanguage: "English",
        areaServed: "ZA",
      },
    ],
  },
};

export default function Page() {
  return (
    <>
      <Script
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="schema-contact-page"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(contactPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <ContactPage />
    </>
  );
}