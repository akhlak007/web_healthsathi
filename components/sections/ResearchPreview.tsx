import { Microscope, Search } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { NetworkImage } from "@/components/ui/NetworkImage";

export function ResearchPreview() {
  return (
    <section className="section-spacing relative overflow-hidden bg-paper dark:bg-slate-950">
      <div className="absolute inset-0 bg-mesh-light opacity-55 dark:bg-mesh-dark dark:opacity-45" />
      <div className="container-shell grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <MotionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-200">
            {contentConfig.home.sections.researchEyebrow}
          </p>
          <h2 className="text-balance mt-4 text-4xl font-semibold text-navy dark:text-white sm:text-5xl">
            {contentConfig.home.sections.researchTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {contentConfig.research.pageSubtitle}
          </p>
          <ul className="mt-7 grid gap-3">
            {contentConfig.research.highlights.map((highlight) => (
              <li key={highlight} className="flex gap-3 text-sm leading-7 text-slate-600 dark:text-slate-300">
                <Microscope aria-hidden="true" className="mt-1 size-5 shrink-0 text-brand-600" />
                {highlight}
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <PrimaryLink label={contentConfig.home.sections.researchCta} href="/research" />
          </div>
        </MotionReveal>

        <MotionReveal delay={0.08}>
          <div className="rounded-[2rem] border border-white/70 bg-slate-950 p-5 shadow-premium dark:border-white/10">
            <NetworkImage
              src={contentConfig.visualAssets.researchSpotlight.src}
              alt={contentConfig.visualAssets.researchSpotlight.alt}
              priority
              className="mb-5 h-48 rounded-3xl"
            />
            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.08] px-4 py-3">
              <Search aria-hidden="true" className="size-5 text-brand-200" />
              <span className="text-sm text-slate-300">{contentConfig.research.searchPlaceholder}</span>
            </div>
            <div className="mt-5 grid gap-3">
              {contentConfig.research.categories.slice(0, 4).map((category) => (
                <div
                  key={category.name}
                  className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 transition hover:-translate-y-1 hover:bg-white/[0.1]"
                >
                  <p className="font-semibold text-white">{category.name}</p>
                  <p className="mt-1 text-sm leading-6 text-slate-300">{category.description}</p>
                </div>
              ))}
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
}
