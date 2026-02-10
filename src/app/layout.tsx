import type { Metadata } from "next";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { ScrollProgress } from "@/components/ScrollProgress";
import { PageFade } from "@/components/PageFade";
import { MobileCTA } from "@/components/MobileCTA";
import { site } from "@/lib/content";

export const metadata: Metadata = {
  title: `${site.name} | ${site.tagline}`,
  description: "Alternative investment and financial advisory firm providing private equity, wealth management, and funding facilitation.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <ScrollProgress />
        <SiteHeader />
        <main className="relative">
          <PageFade>{children}</PageFade>
        </main>
        <SiteFooter />
        <MobileCTA />
      </body>
    </html>
  );
}
