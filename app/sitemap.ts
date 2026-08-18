import type { MetadataRoute } from "next";
import { NAV } from "./data";

const SITE_URL = "https://arjunganesh.dev";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      changeFrequency: "monthly",
      priority: 1,
    },
    ...NAV.map(({ href }) => ({
      url: `${SITE_URL}${href}`,
      changeFrequency: "monthly" as const,
      priority: href === "/work" || href === "/research" ? 0.9 : 0.7,
    })),
  ];
}
