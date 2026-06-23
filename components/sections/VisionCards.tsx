import { Icon } from "@/components/ui/Icon";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { contentConfig } from "@/config/contentConfig";

type VisionCardsProps = {
  preview?: boolean;
};

export function VisionCards({ preview = false }: VisionCardsProps) {
  return (
    <section
      className={`${preview ? "section-spacing bg-white dark:bg-slate-950" : "pb-20 pt-8"} relative overflow-hidden`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.16),transparent_30rem)] dark:bg-[radial-gradient(circle_at_50%_0%,rgba(20,184,166,0.14),transparent_30rem)]" />
      <div className="container-shell">
        {preview ? (
          <SectionHeader
            eyebrow={contentConfig.home.sections.visionEyebrow}
            title={contentConfig.home.sections.visionTitle}
            subtitle={contentConfig.home.sections.visionSubtitle}
            align="center"
          />
        ) : null}
        <div className="mt-10 grid gap-5 lg:grid-cols-3">
          {contentConfig.visions.map((vision, index) => (
            <MotionReveal key={vision.title} delay={index * 0.07}>
              <TiltCard className="h-full">
                <article className="group relative h-full overflow-hidden rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06]">
                  <div
                    className="absolute -right-10 -top-10 h-40 w-40 rounded-full blur-3xl transition group-hover:scale-125"
                    style={{ backgroundColor: `${vision.accent}40` }}
                  />
                  <div className="absolute inset-x-0 top-0 h-1" style={{ backgroundColor: vision.accent }} />
                  <span
                    className="relative grid size-16 place-items-center rounded-3xl text-white shadow-glow"
                    style={{ background: `linear-gradient(135deg, ${vision.accent}, #06B6D4)` }}
                  >
                    <Icon name={vision.icon} className="size-8 transition group-hover:scale-110" />
                  </span>
                  <h3 className="relative mt-6 text-2xl font-semibold text-navy dark:text-white">{vision.title}</h3>
                  <p className="relative mt-1 text-sm font-semibold text-brand-700 dark:text-brand-200">
                    {vision.subtitle}
                  </p>
                  <div className="relative mt-5 grid gap-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                    <p>{vision.concept}</p>
                    <p className="rounded-2xl border border-white/70 bg-white/70 p-4 font-medium text-slate-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06] dark:text-slate-200">
                      {vision.feature}
                    </p>
                  </div>
                </article>
              </TiltCard>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
