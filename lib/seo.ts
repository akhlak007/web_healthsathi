import type { Metadata } from "next";
import { contentConfig, siteUrl } from "@/config/contentConfig";

type RouteKey = keyof typeof contentConfig.routeMeta;

export function createPageMetadata(path: RouteKey): Metadata {
  const route = contentConfig.routeMeta[path];
  const canonical = `${siteUrl}${path === "/" ? "" : path}`;

  return {
    title: route.title,
    description: route.description,
    alternates: {
      canonical
    },
    openGraph: {
      title: route.title,
      description: route.description,
      url: canonical
    },
    twitter: {
      title: route.title,
      description: route.description
    }
  };
}

export function getStructuredData() {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalOrganization",
    name: contentConfig.site.name,
    url: contentConfig.site.url,
    email: contentConfig.site.supportEmail,
    areaServed: contentConfig.site.location,
    description: contentConfig.site.description,
    sameAs: [contentConfig.site.url],
    contactPoint: {
      "@type": "ContactPoint",
      email: contentConfig.site.supportEmail,
      contactType: "customer support",
      areaServed: contentConfig.site.location
    }
  };
}
