import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";
import { ContactForm } from "@/components/forms/ContactForm";
import { PageHero } from "@/components/pages/PageHero";
import { NetworkImage } from "@/components/ui/NetworkImage";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/contact");

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.contact.supportTitle}
        title={contentConfig.contact.pageTitle}
        subtitle={contentConfig.contact.pageSubtitle}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-45 dark:bg-mesh-dark dark:opacity-35" />
        <div className="container-shell grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <ContactForm />
          <aside className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]">
            <NetworkImage
              src={contentConfig.visualAssets.support.src}
              alt={contentConfig.visualAssets.support.alt}
              priority
              className="mb-6 h-44 rounded-3xl"
            />
            <h2 className="text-2xl font-semibold text-navy dark:text-white">{contentConfig.contact.supportTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              {contentConfig.contact.supportBody}
            </p>
            <div className="mt-6 grid gap-3">
              <p className="flex items-center gap-3 rounded-2xl bg-paper p-4 text-sm font-semibold text-slate-700 dark:bg-slate-950/50 dark:text-slate-300">
                <Mail aria-hidden="true" className="size-5 text-brand-600" />
                {contentConfig.site.supportEmail}
              </p>
              <p className="flex items-center gap-3 rounded-2xl bg-paper p-4 text-sm font-semibold text-slate-700 dark:bg-slate-950/50 dark:text-slate-300">
                <MapPin aria-hidden="true" className="size-5 text-brand-600" />
                {contentConfig.site.location}
              </p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
