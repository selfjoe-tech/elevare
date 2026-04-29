import type { Metadata } from "next";
import Script from "next/script";
import HomePage from "@/components/sections/HomePage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";
const pageUrl = siteUrl;

export const metadata: Metadata = {
  title: "Elevare Conglomerate | Private Equity, Wealth Management & Risk in South Africa",
  description:
    "Elevare Conglomerate delivers private equity, wealth management, funding facilitation, and risk management services in South Africa. Transparent, disciplined, and client-first.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    url: "/",
    siteName: "Elevare Conglomerate",
    title: "Elevare Conglomerate | Private Equity, Wealth Management & Risk in South Africa",
    description:
      "Elevare Conglomerate delivers private equity, wealth management, funding facilitation, and risk management services in South Africa. Transparent, disciplined, and client-first.",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/brand/icon.png",
        width: 1200,
        height: 630,
        alt: "Elevare Conglomerate — Private Equity, Wealth Management & Risk in South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elevare Conglomerate | Private Equity, Wealth Management & Risk in South Africa",
    description:
      "Elevare Conglomerate delivers private equity, wealth management, funding facilitation, and risk management services in South Africa.",
    images: ["/brand/icon.png"],
  },
};

// ── WebPage ───────────────────────────────────────────────────────────────────
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Elevare Conglomerate | Private Equity, Wealth Management & Risk in South Africa",
  url: pageUrl,
  description:
    "Elevare Conglomerate delivers private equity, wealth management, funding facilitation, and risk management services in South Africa.",
  inLanguage: "en-ZA",
  isPartOf: { "@type": "WebSite", url: siteUrl, name: "Elevare Conglomerate" },
  breadcrumb: {
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: pageUrl },
    ],
  },
};

// ── Organization ──────────────────────────────────────────────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elevare Conglomerate",
  url: siteUrl,
  logo: `${siteUrl}/brand/icon.png`,
  description:
    "Elevare Conglomerate delivers private equity, wealth management, funding facilitation, and risk management services in South Africa.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  sameAs: [
    // "https://www.linkedin.com/company/elevare-conglomerate",
    // "https://twitter.com/elevare_za",
  ],
};

// ── Service list ──────────────────────────────────────────────────────────────
const serviceListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Elevare Conglomerate Services",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Service",
        name: "Private Equity",
        description:
          "Growth capital, buyouts, portfolio support, and exit strategy planning.",
        url: `${siteUrl}/about#services`,
        provider: { "@type": "Organization", name: "Elevare Conglomerate" },
        areaServed: { "@type": "Country", name: "South Africa" },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Service",
        name: "Funding Facilitation",
        description:
          "Debt, equity, and hybrid instruments with investor introductions and deal structuring.",
        url: `${siteUrl}/about#services`,
        provider: { "@type": "Organization", name: "Elevare Conglomerate" },
        areaServed: { "@type": "Country", name: "South Africa" },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Service",
        name: "Risk Management",
        description:
          "Transparent reporting, compliance alignment, and disciplined review cycles.",
        url: `${siteUrl}/about#services`,
        provider: { "@type": "Organization", name: "Elevare Conglomerate" },
        areaServed: { "@type": "Country", name: "South Africa" },
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Service",
        name: "Wealth Management",
        description:
          "Comprehensive wealth management and financial planning services for individuals and institutions.",
        url: `${siteUrl}/about#services`,
        provider: { "@type": "Organization", name: "Elevare Conglomerate" },
        areaServed: { "@type": "Country", name: "South Africa" },
      },
    },
  ],
};

// ── FAQ (from the page's FAQ section) ────────────────────────────────────────
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How does Elevare Conglomerate protect client confidentiality?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elevare applies strict information handling, need-to-know access controls, and professional governance standards to protect all client information.",
      },
    },
    {
      "@type": "Question",
      name: "What happens after contacting Elevare Conglomerate?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process begins with a discovery call, followed by a documentation review, and then a structured proposal with clear timelines and next steps.",
      },
    },
    {
      "@type": "Question",
      name: "Does Elevare offer custom capital structures?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Elevare tailors structures to the specific deal realities, risk profile, and governance requirements of each client.",
      },
    },
    {
      "@type": "Question",
      name: "How does Elevare Conglomerate report progress to clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Elevare delivers executive summaries, risk flags, milestones, and action items on an agreed reporting cadence.",
      },
    },
  ],
};

export default function Page() {
  return (
    <>
      <Script
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="schema-organization"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="schema-services"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(serviceListJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="schema-faq"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <HomePage />
    </>
  );
}