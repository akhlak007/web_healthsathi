import type { Metadata } from "next";
import { Icon } from "@/components/ui/Icon";
import { PageHero } from "@/components/pages/PageHero";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/mission");

export default function MissionPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.about.missionTitle}
        title={contentConfig.about.missionTitle}
        subtitle={contentConfig.about.mission}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <h2 className="text-3xl font-semibold text-navy dark:text-white">{contentConfig.about.pageTitle}</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">{contentConfig.about.mission}</p>
            <p className="mt-5 text-base leading-8 text-slate-600 dark:text-slate-300">{contentConfig.about.body}</p>
          </div>
          <div className="grid gap-4">
            {contentConfig.about.highlights.map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex gap-4">
                  <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <Icon name={item.icon} className="size-6" />
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold text-navy dark:text-white">{item.title}</h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
