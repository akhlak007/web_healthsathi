import type { Metadata } from "next";
import { ConsentFramework } from "@/components/pages/ConsentFramework";
import { LegalSections } from "@/components/pages/LegalSections";
import { PageHero } from "@/components/pages/PageHero";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/privacy-policy");

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.privacyPolicy.effectiveDate}
        title={contentConfig.privacyPolicy.pageTitle}
        subtitle={contentConfig.privacyPolicy.pageSubtitle}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-8">
          <div className="rounded-3xl border border-white/70 bg-white/[0.72] p-5 text-sm font-semibold text-slate-600 shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-300">
            {contentConfig.privacyPolicy.classification}
          </div>
          <LegalSections sections={contentConfig.privacyPolicy.sections} />
          <ConsentFramework />
          <section className="rounded-[2rem] border border-white/10 bg-navy p-6 text-white shadow-premium-dark">
            <h2 className="text-3xl font-semibold">{contentConfig.privacyPolicy.visibilityTitle}</h2>
            <p className="mt-3 max-w-4xl text-sm leading-7 text-slate-300">
              {contentConfig.privacyPolicy.visibilitySubtitle}
            </p>
            <div className="mt-6 grid gap-4 lg:grid-cols-3">
              {contentConfig.privacyPolicy.visibilityMatrix.map((zone) => (
                <article key={zone.zone} className="rounded-3xl border border-white/10 bg-white/[0.06] p-5">
                  <h3 className="text-xl font-semibold">{zone.zone}</h3>
                  <ul className="mt-4 grid gap-3">
                    {zone.details.map((detail) => (
                      <li key={detail} className="text-sm leading-6 text-slate-300">
                        {detail}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
