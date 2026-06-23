import type { Metadata } from "next";
import { DoctorLoginForm } from "@/components/forms/DoctorLoginForm";
import { PageHero } from "@/components/pages/PageHero";
import { NetworkImage } from "@/components/ui/NetworkImage";
import { contentConfig } from "@/config/contentConfig";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata("/doctor-login");

export default function DoctorLoginPage() {
  return (
    <>
      <PageHero
        eyebrow={contentConfig.nav.doctorLoginLabel}
        title={contentConfig.doctorLogin.pageTitle}
        subtitle={contentConfig.doctorLogin.pageSubtitle}
      />
      <section className="relative overflow-hidden pb-20">
        <div className="absolute inset-0 bg-mesh-light opacity-55 dark:bg-mesh-dark dark:opacity-45" />
        <div className="container-shell grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <DoctorLoginForm />
          <div className="rounded-[2rem] border border-white/10 bg-navy p-6 text-white shadow-premium-dark">
            <NetworkImage
              src={contentConfig.visualAssets.doctorLogin.src}
              alt={contentConfig.visualAssets.doctorLogin.alt}
              priority
              className="mb-6 h-48 rounded-3xl"
            />
            <h2 className="text-2xl font-semibold">{contentConfig.privacyPolicy.sections[3].title}</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">{contentConfig.privacyPolicy.sections[3].body}</p>
            <div className="mt-6 grid gap-3">
              {contentConfig.privacyPolicy.sections[3].items?.map((item) => (
                <p key={item} className="rounded-2xl bg-white/[0.06] p-4 text-sm leading-7 text-slate-300">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
