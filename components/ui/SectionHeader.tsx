type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
};

export function SectionHeader({ eyebrow, title, subtitle, align = "left", tone = "dark" }: SectionHeaderProps) {
  const titleClass = tone === "light" ? "text-white" : "text-navy dark:text-white";
  const subtitleClass = tone === "light" ? "text-slate-300" : "text-slate-600 dark:text-slate-300";

  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-200">
          {eyebrow}
        </p>
      ) : null}
      <h2 className={`text-balance text-3xl font-semibold tracking-normal sm:text-4xl lg:text-5xl ${titleClass}`}>
        {title}
      </h2>
      {subtitle ? <p className={`mt-5 text-lg leading-8 ${subtitleClass}`}>{subtitle}</p> : null}
    </div>
  );
}
