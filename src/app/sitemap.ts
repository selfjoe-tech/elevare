import type { MetadataRoute } from "next";
import { EXECUTIVES } from "@/lib/leadership";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://www.elevare.co.za";

function isPendingProfile(name: string) {
  return /name pending/i.test(name);
}

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${siteUrl}/`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${siteUrl}/about`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${siteUrl}/contact`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${siteUrl}/team`,
      lastModified: new Date("2026-03-16"),
      changeFrequency: "monthly",
      priority: 0.8,
    },
  ];

  const executivePages: MetadataRoute.Sitemap = EXECUTIVES.filter(
    (e) => !isPendingProfile(e.name)
  ).map((e) => ({
    url: `${siteUrl}/team/${e.slug}`,
    lastModified: new Date("2026-03-16"),
    changeFrequency: "monthly",
    priority: 0.7,
    images: e.image ? [`${siteUrl}${e.image}`] : undefined,
  }));

  return [...staticPages, ...executivePages];
}