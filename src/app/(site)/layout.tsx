import "../globals.css";
import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import SiteHeader from "@/components/site/SiteHeader";
import SiteFooter from "@/components/site/SiteFooter";
import NextTopLoader from "nextjs-toploader";

const serif = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";
const siteName = "Elevare Conglomerate";
const defaultTitle =
  "Elevare Conglomerate | Corporate Finance Advisory, Capital Raising & Investor Readiness, Transaction Advisory (M&A Support), Private Equity (Principal Investing), Due Diligence & Business Analysis, Training & Advisory Workshops";
const defaultDescription =
  "Elevare Conglomerate delivers Corporate Finance Advisory, Capital Raising & Investor Readiness, Transaction Advisory (M&A Support), Private Equity (Principal Investing), Due Diligence & Business Analysis, Training & Advisory Workshops services in South Africa.";

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#0a0a0a" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),

  title: {
    default: defaultTitle,
    template: "%s | Elevare Conglomerate",
  },

  description: defaultDescription,
  applicationName: siteName,

  keywords: [
    "private equity South Africa",
    "wealth management South Africa",
    "funding facilitation South Africa",
    "risk management South Africa",
    "Elevare Conglomerate",
    "investment firm South Africa",
    "South African private equity",
    "business funding South Africa",
    "financial services South Africa",
    "Investment Firm",
    "Investec",
    "Investment Firms in South Africa",
    "Gracious Mutsindikwa",
    "Smile Carnegie Sibanda",
  ],

  authors: [{ name: siteName, url: siteUrl }],
  creator: siteName,
  publisher: siteName,
  category: "Finance",

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    url: "/",
    siteName,
    title: defaultTitle,
    description: defaultDescription,
    locale: "en_ZA",
    images: [
      {
        url: "/brand/icon.png",
        width: 1200,
        height: 630,
        alt: "Elevare Conglomerate — Private Equity, Wealth Management & Risk in South Africa",
        type: "image/png",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: ["/brand/icon.png"],
    // site: "@elevare_za",
    // creator: "@elevare_za",
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon-32x32.png",
  },


  robots: {
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

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteName,
  url: siteUrl,
  logo: `${siteUrl}/brand/icon.png`,
  description: defaultDescription,
  address: {
    "@type": "PostalAddress",
    addressCountry: "ZA",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer support",
    availableLanguage: ["English"],
  },
  sameAs: [],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: `${siteUrl}/search?q={search_term_string}`,
    },
    "query-input": "required name=search_term_string",
  },
};

const financialServiceSchema = {
  "@context": "https://schema.org",
  "@type": "FinancialService",
  name: siteName,
  url: siteUrl,
  description: defaultDescription,
  areaServed: { "@type": "Country", name: "South Africa" },
  provider: {
    "@type": "Organization",
    name: siteName,
    url: siteUrl,
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Elevare Conglomerate Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Corporate Finance Advisory",
          description:
            "Financial modelling and forecasting, Business valuations, Strategic planning and growth advisory, Capital structure optimization"
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Capital Raising & Investor Readiness",
          description:
            "Investment readiness assessments, Pitch deck preparation, Financial packaging and data rooms, Investor introductions (non-advisory)",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Transaction Advisory (M&A Support)",
          description:
        "Deal structuring (non-regulated), Due diligence coordination, Buyer/seller identificationNegotiation support"
      },
    },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Private Equity (Principal Investing)",
          description:
        "SME growth-stage investments, Strategic minority stakes, Sector-focused opportunities",        
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Due Diligence & Business Analysis",
          description:
          "Commercial due diligence, Financial analysis,Operational reviews, Market and industry research"        

        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Training & Advisory Workshops",
          description:
          "How to raise capital, Financial fundamentals for founders, Private equity and deal structuring basics"     
          
        },
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(financialServiceSchema).replace(/</g, "\\u003c"),
          }}
        />

        <NextTopLoader color="#37c2d4" height={2} showSpinner={false} zIndex={9999} />

        <div className="min-h-screen">
          <div className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(200,162,74,0.08)_0%,transparent_65%)]" />

          <div className="relative overflow-hidden bg-ink shadow-elite">
            <SiteHeader />
            <main id="content">{children}</main>
            <SiteFooter />
          </div>
        </div>
    </>
     
  );
}