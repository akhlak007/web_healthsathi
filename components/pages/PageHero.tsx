type PageHeroProps = {
  eyebrow?: string;
  title: string;
  subtitle: string;
};

export function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative isolate overflow-hidden pb-12 pt-32 sm:pt-36">
      <div className="premium-mesh -z-20 opacity-80" />
      <div className="absolute inset-0 -z-10 bg-grid-soft bg-[length:44px_44px] opacity-35 dark:opacity-15" />
      <div className="noise-overlay" />
      <div className="container-shell">
        <div className="max-w-4xl">
          {eyebrow ? (
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-brand-600 dark:text-brand-200">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-balance mt-4 text-5xl font-semibold tracking-normal text-navy dark:text-white sm:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-3xl text-xl leading-8 text-slate-600 dark:text-slate-300">{subtitle}</p>
        </div>
      </div>
    </section>
  );
}
