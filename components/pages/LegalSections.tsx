type LegalSectionsProps = {
  sections: readonly {
    title: string;
    body?: string;
    items?: readonly string[];
  }[];
};

export function LegalSections({ sections }: LegalSectionsProps) {
  return (
    <div className="grid gap-5">
      {sections.map((section, index) => (
        <article
          key={section.title}
          className="rounded-3xl border border-white/70 bg-white/[0.72] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-soft dark:border-white/10 dark:bg-white/[0.06]"
        >
          <div className="flex gap-4">
            <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand-50 text-sm font-bold text-brand-700">
              {index + 1}
            </span>
            <div>
              <h2 className="text-2xl font-semibold text-navy dark:text-white">{section.title}</h2>
              {section.body ? (
                <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{section.body}</p>
              ) : null}
              {section.items ? (
                <ul className="mt-5 grid gap-3">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-paper p-4 text-sm leading-7 text-slate-600 dark:bg-slate-950/50 dark:text-slate-300"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}
