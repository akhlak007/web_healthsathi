import type { Metadata } from "next";
import { LegalSections } from "@/components/pages/LegalSections";
import { PageHero } from "@/components/pages/PageHero";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/terms-of-service");

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.terms.effectiveDate}
        title={contentConfig.terms.pageTitle}
        subtitle={contentConfig.terms.pageSubtitle}
      />
      <section className="pb-20">
        <div className="container-shell">
          <LegalSections sections={contentConfig.terms.sections} />
        </div>
      </section>
    </>
  );
}
