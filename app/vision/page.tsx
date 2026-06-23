import type { Metadata } from "next";
import { PageHero } from "@/components/pages/PageHero";
import { VisionCards } from "@/components/sections/VisionCards";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/vision");

export default function VisionPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.home.sections.visionEyebrow}
        title={contentConfig.home.sections.visionTitle}
        subtitle={contentConfig.home.sections.visionSubtitle}
      />
      <VisionCards />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contentConfig.statistics.map((stat) => (
            <article
              key={stat.label}
              className="rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
            >
              <p className="text-3xl font-semibold text-navy dark:text-white">{stat.value}</p>
              <h2 className="mt-3 text-base font-semibold text-brand-700">{stat.label}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{stat.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
