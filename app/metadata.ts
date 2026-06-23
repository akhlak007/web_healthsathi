import type { Metadata } from "next";
import { contentConfig, siteUrl } from "@/config/contentConfig";

export const baseMetadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: contentConfig.seo.title,
    template: `%s | ${contentConfig.site.name}`
  },
  description: contentConfig.seo.description,
  keywords: [...contentConfig.seo.keywords],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: contentConfig.site.name,
    title: contentConfig.seo.title,
    description: contentConfig.seo.description,
    images: [
      {
        url: contentConfig.seo.image,
        width: 1200,
        height: 630,
        alt: contentConfig.site.name
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: contentConfig.seo.title,
    description: contentConfig.seo.description,
    images: [contentConfig.seo.image]
  },
  robots: {
    index: true,
    follow: true
  }
};
