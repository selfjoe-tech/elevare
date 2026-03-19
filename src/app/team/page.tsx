import type { Metadata } from "next";
import Script from "next/script";
import LeadershipPage from "./LeadershipPage";
import { EXECUTIVES } from "@/lib/leadership";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";
const routePath = "/team";
const pageUrl = `${siteUrl}${routePath}`;

export const metadata: Metadata = {
  title: "Leadership Team | Strategy, Investment Oversight & Governance | Elevare Conglomerate",
  description:
    "Meet the Elevare Conglomerate leadership team responsible for strategy, investment oversight, governance alignment, and client execution across private equity, wealth management, and financial advisory.",
  alternates: {
    canonical: routePath,
  },
  openGraph: {
    title: "Leadership Team | Strategy, Investment Oversight & Governance | Elevare Conglomerate",
    description:
      "Meet the Elevare Conglomerate leadership team responsible for strategy, investment oversight, governance alignment, and client execution.",
    url: routePath,
    siteName: "Elevare Conglomerate",
    locale: "en_ZA",
    type: "website",
    images: [
      {
        url: "/brand/icon.png",
        width: 1200,
        height: 630,
        alt: "Elevare Conglomerate Leadership Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Leadership Team | Strategy, Investment Oversight & Governance | Elevare Conglomerate",
    description:
      "Meet the Elevare Conglomerate leadership team responsible for strategy, investment oversight, governance alignment, and client execution.",
    images: ["/brand/icon.png"],
  },
};

// ── Breadcrumb ─────────────────────────────────────────────────────────────────
const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Team", item: pageUrl },
  ],
};

// ── WebPage ────────────────────────────────────────────────────────────────────
const webPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Elevare Conglomerate Leadership Team",
  url: pageUrl,
  description:
    "Meet the Elevare Conglomerate leadership team responsible for strategy, investment oversight, governance alignment, and client execution.",
  inLanguage: "en-ZA",
  isPartOf: { "@type": "WebSite", url: siteUrl, name: "Elevare Conglomerate" },
  breadcrumb: breadcrumbJsonLd,
  about: {
    "@type": "Organization",
    name: "Elevare Conglomerate",
    url: siteUrl,
  },
};

// ── ItemList of Person nodes — one per executive ──────────────────────────────
// Pulls directly from the same EXECUTIVES array the page renders,
// so adding a new team member automatically updates the schema too.
const teamListJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Elevare Conglomerate Executive Leadership",
  url: pageUrl,
  itemListElement: EXECUTIVES.map((e, idx) => ({
    "@type": "ListItem",
    position: idx + 1,
    item: {
      "@type": "Person",
      name: e.name,
      jobTitle: e.role,
      url: `${pageUrl}/${e.slug}`,
      ...(e.image ? { image: `${siteUrl}${e.image}` } : {}),
      worksFor: {
        "@type": "Organization",
        name: "Elevare Conglomerate",
        url: siteUrl,
      },
    },
  })),
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
        id="schema-webpage"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(webPageJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <Script
        id="schema-team-list"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(teamListJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      <LeadershipPage />
    </>
  );
}