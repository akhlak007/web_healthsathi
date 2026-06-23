import { contentConfig } from "@/config/contentConfig";
import { MotionReveal } from "@/components/ui/MotionReveal";
import { SectionHeader } from "@/components/ui/SectionHeader";

export function TeamPreview() {
  return (
    <section className="section-spacing bg-white dark:bg-slate-950">
      <div className="container-shell">
        <SectionHeader
          eyebrow={contentConfig.home.sections.teamEyebrow}
          title={contentConfig.home.sections.teamTitle}
          subtitle={contentConfig.home.sections.teamSubtitle}
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {contentConfig.team.members.map((member, index) => (
            <MotionReveal key={member.name} delay={index * 0.05}>
              <article className="h-full rounded-3xl border border-slate-200 bg-paper p-6 shadow-sm transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]">
                <p className="text-xl font-semibold text-navy dark:text-white">{member.name}</p>
                <p className="mt-2 text-sm font-semibold text-brand-700 dark:text-brand-200">{member.role}</p>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{member.focus}</p>
              </article>
            </MotionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
