import type { Metadata } from "next";
import { AccountDeletionForm } from "@/components/forms/AccountDeletionForm";
import { PageHero } from "@/components/pages/PageHero";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/account-deletion");

export default function AccountDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.privacyPolicy.effectiveDate}
        title={contentConfig.accountDeletion.pageTitle}
        subtitle={contentConfig.accountDeletion.pageSubtitle}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <AccountDeletionForm />
          <div className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]">
            <h2 className="text-2xl font-semibold text-navy dark:text-white">
              {contentConfig.accountDeletion.timelineTitle}
            </h2>
            <div className="mt-6 grid gap-4">
              {contentConfig.accountDeletion.timeline.map((item, index) => (
                <article key={item.title} className="flex gap-4 rounded-2xl bg-paper p-4 dark:bg-slate-950/50">
                  <span className="grid size-9 shrink-0 place-items-center rounded-full bg-brand-500 text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <div>
                    <h3 className="font-semibold text-navy dark:text-white">{item.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-600 dark:text-slate-300">{item.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
