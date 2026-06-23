import type { Metadata } from "next";
import { CircleHelp } from "lucide-react";
import { PageHero } from "@/components/pages/PageHero";
import { NetworkImage } from "@/components/ui/NetworkImage";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/support");

export default function SupportPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.contact.supportTitle}
        title={contentConfig.support.pageTitle}
        subtitle={contentConfig.support.pageSubtitle}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="grid gap-4">
            {contentConfig.support.categories.map((category) => (
              <article
                key={category.title}
                className="rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
              >
                <div className="flex gap-4">
                  <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-brand-50 text-brand-600">
                    <CircleHelp aria-hidden="true" className="size-5" />
                  </span>
                  <div>
                    <h2 className="text-xl font-semibold text-navy dark:text-white">{category.title}</h2>
                    <p className="mt-2 text-sm leading-7 text-slate-600 dark:text-slate-300">{category.body}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <div className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]">
            <NetworkImage
              src={contentConfig.visualAssets.support.src}
              alt={contentConfig.visualAssets.support.alt}
              priority
              className="mb-6 h-44 rounded-3xl"
            />
            <h2 className="text-2xl font-semibold text-navy dark:text-white">{contentConfig.support.faqTitle}</h2>
            <div className="mt-6 grid gap-3">
              {contentConfig.support.faq.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-2xl border border-slate-200 bg-paper p-4 dark:border-white/10 dark:bg-slate-950/50"
                >
                  <summary className="cursor-pointer text-sm font-semibold text-navy dark:text-white">
                    {item.question}
                  </summary>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
