import { contentConfig } from "@/config/contentConfig";
import { PrimaryLink } from "@/components/ui/PrimaryLink";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { NetworkImage } from "@/components/ui/NetworkImage";
import { TiltCard } from "@/components/ui/TiltCard";

export function AboutPreview() {
  return (
    <section className="section-spacing relative overflow-hidden bg-paper dark:bg-slate-950">
      <div className="absolute inset-0 bg-mesh-light opacity-65 dark:bg-mesh-dark dark:opacity-55" />
      <div className="container-shell grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <MotionReveal>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-200">
            {contentConfig.home.sections.aboutEyebrow}
          </p>
          <h2 className="text-balance mt-4 text-4xl font-semibold text-navy dark:text-white sm:text-5xl">
            {contentConfig.home.sections.aboutTitle}
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600 dark:text-slate-300">
            {contentConfig.home.sections.aboutBody}
          </p>
          <div className="mt-7">
            <PrimaryLink label={contentConfig.home.sections.aboutCta} href="/about" />
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {contentConfig.impactStats.slice(0, 3).map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/60 bg-white/60 p-4 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl font-semibold text-navy dark:text-white"
                />
                <p className="mt-1 text-xs font-semibold text-slate-500 dark:text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </MotionReveal>

        <div className="relative grid gap-4 md:grid-cols-3">
          <div className="absolute -left-6 top-10 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
          <div className="absolute -right-4 bottom-8 h-40 w-40 rounded-full bg-coral/20 blur-3xl" />
          {contentConfig.about.media.map((item, index) => (
            <MotionReveal key={item.title} delay={index * 0.06}>
              <TiltCard className={`h-full ${index === 1 ? "md:mt-8" : index === 2 ? "md:mt-16" : ""}`}>
                <article className="h-full rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
                  <NetworkImage
                    src={contentConfig.visualAssets.aboutStory[index].src}
                    alt={contentConfig.visualAssets.aboutStory[index].alt}
                    priority
                    className="mb-5 h-32 rounded-2xl"
                  />
                  <p className="text-lg font-semibold text-navy dark:text-white">{item.title}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</p>
                </article>
              </TiltCard>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
