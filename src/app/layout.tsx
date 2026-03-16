import "./globals.css";
import type { Metadata } from "next";
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

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elevare Conglomerate",
    template: "%s | Elevare Conglomerate",
  },
  description:
    "Private equity, wealth management, funding facilitation and risk management.",
  applicationName: "Elevare Conglomerate",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Elevare Conglomerate",
    title: "Elevare Conglomerate",
    description:
      "Private equity, wealth management, funding facilitation and risk management.",
    locale: "en_ZA",
    images: [
      {
        url: "/brand/icon.png",
        width: 1200,
        height: 630,
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

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#0a0a0a]">
        <NextTopLoader color="#37c2d4" height={2} showSpinner={false} zIndex={9999} />
        <div className="min-h-screen">
          <div className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(200,162,74,0.08)_0%,transparent_65%)]" />
          <div className="relative overflow-hidden bg-ink shadow-elite">
            <a
              href="#content"
              className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:font-sans focus:text-ink"
            >
              Skip to content
            </a>

            <SiteHeader />
            <main id="content">{children}</main>
            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}