import type { Metadata } from "next";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { DownloadCTA } from "@/components/sections/DownloadCTA";
import { FeatureGrid } from "@/components/sections/FeatureGrid";
import { HeroSection } from "@/components/sections/HeroSection";
import { ResearchPreview } from "@/components/sections/ResearchPreview";
import { TeamPreview } from "@/components/sections/TeamPreview";
import { TrustIndicators } from "@/components/sections/TrustIndicators";
import { VisionCards } from "@/components/sections/VisionCards";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/");

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeatureGrid />
      <TrustIndicators />
      <AboutPreview />
      <VisionCards preview />
      <ResearchPreview />
      <TeamPreview />
      <DownloadCTA />
    </>
  );
}
