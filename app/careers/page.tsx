import type { Metadata } from "next";
import { Briefcase } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/careers");

export default function CareersPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.nav.links.find((link) => link.href === "/careers")?.label}
        title={contentConfig.careers.pageTitle}
        subtitle={contentConfig.careers.pageSubtitle}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-navy dark:text-white">{contentConfig.careers.pageTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
              {contentConfig.careers.body}
            </p>
          </div>
          <div className="grid gap-4">
            {contentConfig.careers.openings.map((opening) => (
              <article
                key={opening}
                className="flex gap-4 rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                  <Briefcase aria-hidden="true" className="size-5" />
                </span>
                <h3 className="text-xl font-semibold text-navy dark:text-white">{opening}</h3>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
