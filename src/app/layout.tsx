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

export const metadata: Metadata = {
  title: "Elevare Group Holdings",
  description: "Executive capital solutions and disciplined stewardship.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-[#0a0a0a]">
        <NextTopLoader
          color="#37c2d4"     // gold-ish
          height={2}
          showSpinner={false}
          zIndex={9999}
        />
        <div className="min-h-screen">
          {/* Outer subtle sheen (like the video’s soft surround) */}
          <div className="pointer-events-none fixed inset-0 [background:radial-gradient(60%_60%_at_50%_0%,rgba(200,162,74,0.08)_0%,transparent_65%)]" />

          {/* Stage */}
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
