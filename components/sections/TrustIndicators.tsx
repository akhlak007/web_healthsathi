import { Icon } from "@/components/ui/Icon";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { contentConfig } from "@/config/contentConfig";

export function TrustIndicators() {
  return (
    <section className="section-spacing relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-mesh-dark opacity-80" />
      <div className="noise-overlay" />
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <SectionHeader
            eyebrow={contentConfig.home.sections.trustEyebrow}
            title={contentConfig.home.sections.trustTitle}
            subtitle={contentConfig.site.description}
            tone="light"
          />
          <div className="grid gap-4">
            {contentConfig.trustIndicators.map((item, index) => (
              <MotionReveal key={item.title} delay={index * 0.06}>
                <article className="rounded-3xl border border-white/10 bg-white/[0.07] p-6 shadow-premium-dark backdrop-blur-2xl transition hover:-translate-y-1 hover:border-brand-300/40 hover:bg-white/[0.1]">
                  <div className="flex gap-4">
                    <span className="grid size-12 shrink-0 place-items-center rounded-2xl bg-white text-brand-600 shadow-glow">
                      <Icon name={item.icon} className="size-6" />
                    </span>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-2 text-sm leading-7 text-slate-300">{item.body}</p>
                    </div>
                  </div>
                </article>
              </MotionReveal>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {contentConfig.impactStats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-white/10 bg-white/[0.07] p-5 shadow-premium-dark backdrop-blur-2xl"
            >
              <AnimatedCounter value={stat.value} suffix={stat.suffix} className="text-3xl font-semibold text-white" />
              <p className="mt-2 text-sm font-semibold text-brand-200">{stat.label}</p>
              <p className="mt-3 text-sm leading-6 text-slate-300">{stat.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
