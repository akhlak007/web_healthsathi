import { Icon } from "@/components/ui/Icon";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { WaveDivider } from "@/components/ui/WaveDivider";
import { contentConfig } from "@/config/contentConfig";

export function FeatureGrid() {
  return (
    <>
      <WaveDivider tone="light" />
      <section className="section-spacing relative overflow-hidden bg-paper dark:bg-slate-950">
        <div className="absolute inset-0 bg-mesh-light opacity-80 dark:bg-mesh-dark dark:opacity-70" />
        <div className="absolute inset-0 bg-grid-soft bg-[length:48px_48px] opacity-30 dark:opacity-10" />
      <div className="container-shell">
        <SectionHeader
          eyebrow={contentConfig.home.sections.platformEyebrow}
          title={contentConfig.home.sections.featuresTitle}
          subtitle={contentConfig.home.sections.featuresSubtitle}
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {contentConfig.features.map((feature, index) => (
            <MotionReveal key={feature.title} delay={index * 0.05}>
              <TiltCard className="h-full">
                <article className="premium-border h-full rounded-3xl p-px">
                  <div className="h-full rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:bg-white/[0.88] dark:border-white/10 dark:bg-white/[0.06] dark:hover:bg-white/[0.09]">
                    <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent text-white shadow-glow">
                      <Icon name={feature.icon} className="size-6" />
                    </span>
                    <h3 className="mt-5 text-xl font-semibold text-navy dark:text-white">{feature.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{feature.description}</p>
                  </div>
                </article>
              </TiltCard>
            </MotionReveal>
          ))}
        </div>
      </div>
      </section>
    </>
  );
}
