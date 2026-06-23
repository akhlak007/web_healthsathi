import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { ResearchExplorer } from "@/components/research/ResearchExplorer";
import { contentConfig } from "@/config/contentConfig";
import { rawResearchCases } from "@/data/researchCases";
import { anonymizeCaseStudies } from "@/lib/anonymizer";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/research");

export default function ResearchPage() {
  const anonymizedCases = anonymizeCaseStudies(rawResearchCases);

  return (
    <>
      <PageHero
        eyebrow={contentConfig.home.sections.researchEyebrow}
        title={contentConfig.research.pageTitle}
        subtitle={contentConfig.research.pageSubtitle}
      />
      <section className="pb-10">
        <div className="container-shell grid gap-4 md:grid-cols-2 lg:grid-cols-5">
          {contentConfig.research.categories.map((category) => (
            <article
              key={category.name}
              className="rounded-3xl border border-white/70 bg-white/[0.72] p-5 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
            >
              <h2 className="font-semibold text-navy dark:text-white">{category.name}</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{category.description}</p>
            </article>
          ))}
        </div>
      </section>
      <ResearchExplorer cases={anonymizedCases} />
    </>
  );
}
