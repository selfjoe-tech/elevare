import type { Metadata } from "next";
import Script from "next/script";
import AboutPage from "./AboutPage";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";
const pageUrl = `${siteUrl}/about`;

export const metadata: Metadata = {
  title: "About Elevare Conglomerate | Alternative Investment & Financial Advisory in South Africa",
  description:
    "Elevare Group Holdings is a South Africa-based alternative investment and financial advisory firm delivering private equity, wealth management, funding facilitation, and risk management to HNWIs, institutions, and growth-oriented businesses.",
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Elevare Conglomerate | Alternative Investment & Financial Advisory in South Africa",
    description:
      "Elevare Group Holdings is a South Africa-based alternative investment and financial advisory firm delivering private equity, wealth management, funding facilitation, and risk management to HNWIs, institutions, and growth-oriented businesses.",
    url: "/about",
    siteName: "Elevare Conglomerate",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/brand/icon.png",
        width: 1200,
        height: 630,
        alt: "Elevare Conglomerate — Alternative Investment & Financial Advisory in South Africa",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Elevare Conglomerate | Alternative Investment & Financial Advisory in South Africa",
    description:
      "Elevare Group Holdings is a South Africa-based alternative investment and financial advisory firm delivering private equity, wealth management, funding facilitation, and risk management.",
    images: ["/brand/icon.png"],
  },
};

// ── Breadcrumb ─────────────────────────────────────────────────────────────────
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About", item: pageUrl },
  ],
};

// ── WebPage ────────────────────────────────────────────────────────────────────
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "About Elevare Conglomerate",
  url: pageUrl,
  description:
    "Elevare Group Holdings is a South Africa-based alternative investment and financial advisory firm serving high net worth individuals, institutional investors, and growth-oriented businesses.",
  inLanguage: "en-ZA",
  isPartOf: { "@type": "WebSite", url: siteUrl, name: "Elevare Conglomerate" },
  breadcrumb: breadcrumbJsonLd,
  about: {
    "@type": "Organization",
    name: "Elevare Conglomerate",
    url: siteUrl,
  },
};

// ── Organization (enriched with vision, mission, values) ──────────────────────
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Elevare Group Holdings",
  alternateName: "Elevare Conglomerate",
  url: siteUrl,
  logo: `${siteUrl}/brand/icon.png`,
  description:
    "Elevare Group Holdings is a South Africa-based alternative investment and financial advisory firm providing sophisticated capital solutions to high net worth individuals, institutional investors, and growth-oriented businesses.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  knowsAbout: [
    "Private Equity",
    "Wealth Management",
    "Funding Facilitation",
    "Risk Management",
    "Alternative Investments",
    "Financial Advisory",
  ],
  sameAs: [
    // "https://www.linkedin.com/company/elevare-conglomerate",
    // "https://twitter.com/elevare_za",
  ],
};

// ── FinancialService with full process and client coverage ─────────────────────
const financialServiceJsonLd = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: "Elevare Conglomerate",
  url: siteUrl,
  description:
    "Alternative investment and financial advisory services including private equity, wealth management, funding facilitation, and risk management across South Africa.",
  areaServed: [
    { "@type": "Country", name: "South Africa" },
    { "@type": "Place", name: "Africa" },
  ],
  provider: {
    "@type": "Organization",
    name: "Elevare Group Holdings",
    url: siteUrl,
  },
  // Delivery process mapped from the WeWork section
  serviceOutput: [
    {
      "@type": "Thing",
      name: "Discovery",
      description:
        "Objectives, constraints, timelines, and confidentiality boundaries established upfront.",
    },
    {
      "@type": "Thing",
      name: "Due Diligence",
      description:
        "Governance checks, documentation review, and risk mapping.",
    },
    {
      "@type": "Thing",
      name: "Structuring",
      description:
        "Debt, equity, and hybrid structures aligned to real-world constraints.",
    },
    {
      "@type": "Thing",
      name: "Reporting",
      description:
        "Executive summaries, action items, and risk flags on an agreed cadence.",
    },
  ],
  // Target client types from WhoWeServeSection
  audience: [
    {
      "@type": "Audience",
      audienceType: "High Net Worth Individuals",
      description:
        "Private capital needs, structured execution, and discreet engagement.",
    },
    {
      "@type": "Audience",
      audienceType: "Family Offices",
      description:
        "Multi-year planning, governance-led decisions, and clear reporting.",
    },
    {
      "@type": "Audience",
      audienceType: "Institutional Investors",
      description:
        "Mandate-aware structures with risk discipline and documentation rigor.",
    },
    {
      "@type": "Audience",
      audienceType: "SMEs",
      description:
        "Growth or restructuring capital supported by executive-level process.",
    },
    {
      "@type": "Audience",
      audienceType: "Global Investors",
      description:
        "African market insight, access support, and disciplined oversight.",
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
        id="schema-breadcrumb"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbJsonLd).replace(/</g, "\\u003c"),
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
        id="schema-financial-service"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(financialServiceJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <AboutPage />
    </>
  );
}