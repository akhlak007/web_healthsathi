"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";
import { NetworkImage } from "@/components/ui/NetworkImage";
import type { AnonymizedCaseStudy } from "@/types/research";

type ResearchExplorerProps = {
  cases: AnonymizedCaseStudy[];
};

export function ResearchExplorer({ cases }: ResearchExplorerProps) {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>(contentConfig.research.allCategoriesLabel);

  const filteredCases = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return cases.filter((caseStudy) => {
      const matchesCategory =
        category === contentConfig.research.allCategoriesLabel || caseStudy.category === category;
      const searchable = [
        caseStudy.title,
        caseStudy.category,
        caseStudy.diagnosis,
        ...caseStudy.symptoms,
        ...caseStudy.clinicalFindings,
        ...caseStudy.outcomeMetrics,
        ...caseStudy.tags
      ]
        .join(" ")
        .toLowerCase();

      return matchesCategory && (!normalizedQuery || searchable.includes(normalizedQuery));
    });
  }, [cases, category, query]);

  const featuredCase = cases.find((caseStudy) => caseStudy.featured) ?? cases[0];

  return (
    <section className="relative overflow-hidden pb-20">
      <div className="absolute inset-0 bg-mesh-light opacity-55 dark:bg-mesh-dark dark:opacity-45" />
      <div className="container-shell">
        <div className="relative rounded-[2rem] border border-white/70 bg-white/[0.72] p-5 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06]">
          <div className="grid gap-4">
            <label className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-paper px-4 py-3 transition focus-within:border-brand-300 focus-within:shadow-glow dark:border-white/10 dark:bg-slate-950/60">
              <Search aria-hidden="true" className="size-5 text-brand-600" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                className="focus-ring w-full bg-transparent text-sm font-medium text-navy outline-none dark:text-white"
                placeholder={contentConfig.research.searchPlaceholder}
              />
            </label>
            <div className="flex flex-wrap gap-2">
              {[contentConfig.research.allCategoriesLabel, ...contentConfig.research.categories.map((item) => item.name)].map(
                (item) => {
                  const active = category === item;

                  return (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`focus-ring relative overflow-hidden rounded-full border px-4 py-2 text-sm font-semibold transition ${
                        active
                          ? "border-brand-400 text-white shadow-glow"
                          : "border-slate-200 bg-white/70 text-slate-600 hover:border-brand-200 hover:text-brand-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-300"
                      }`}
                    >
                      {active ? (
                        <motion.span
                          layoutId="research-filter-active"
                          className="absolute inset-0 bg-gradient-to-r from-brand-500 via-accent to-coral"
                          transition={{ type: "spring", stiffness: 420, damping: 34 }}
                        />
                      ) : null}
                      <span className="relative">{item}</span>
                    </button>
                  );
                }
              )}
            </div>
          </div>
        </div>

        <div className="relative mt-8 grid gap-5 lg:grid-cols-3">
          <div className="grid gap-4 lg:col-span-2">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((caseStudy) => (
                <motion.article
                  layout
                  key={caseStudy.id}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  className="rounded-3xl border border-white/70 bg-white/[0.78] p-6 shadow-sm backdrop-blur-2xl transition hover:-translate-y-1 hover:shadow-premium dark:border-white/10 dark:bg-white/[0.06]"
                >
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                    <div>
                      <p className="text-sm font-semibold text-brand-700 dark:text-brand-200">{caseStudy.category}</p>
                      <h2 className="mt-2 text-2xl font-semibold text-navy dark:text-white">{caseStudy.title}</h2>
                    </div>
                    {caseStudy.featured ? (
                      <span className="rounded-full bg-coral/10 px-3 py-1 text-xs font-bold text-coral">
                        {contentConfig.research.featuredLabel}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-2">
                    <div className="rounded-2xl border border-slate-200/70 bg-paper p-4 dark:border-white/10 dark:bg-slate-950/50">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        {contentConfig.research.caseLabels.ageRange}
                      </p>
                      <p className="mt-2 text-lg font-semibold text-navy dark:text-white">{caseStudy.ageRange}</p>
                    </div>
                    <div className="rounded-2xl border border-slate-200/70 bg-paper p-4 dark:border-white/10 dark:bg-slate-950/50">
                      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">
                        {contentConfig.research.caseLabels.diagnosis}
                      </p>
                      <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-300">{caseStudy.diagnosis}</p>
                    </div>
                  </div>

                  <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <CaseList title={contentConfig.research.caseLabels.symptoms} items={caseStudy.symptoms} />
                    <CaseList
                      title={contentConfig.research.caseLabels.clinicalFindings}
                      items={caseStudy.clinicalFindings}
                    />
                    <CaseList title={contentConfig.research.caseLabels.outcomeMetrics} items={caseStudy.outcomeMetrics} />
                  </div>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {caseStudy.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand-700 dark:bg-brand-500/10 dark:text-brand-100"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          <aside className="sticky top-28 h-fit rounded-3xl border border-white/10 bg-navy p-6 text-white shadow-premium-dark">
            <NetworkImage
              src={contentConfig.visualAssets.researchSpotlight.src}
              alt={contentConfig.visualAssets.researchSpotlight.alt}
              priority
              className="mb-5 h-44 rounded-3xl"
            />
            <div className="mb-5 rounded-3xl border border-white/10 bg-white/[0.06] p-4">
              <p className="text-sm font-semibold text-brand-200">{featuredCase.category}</p>
              <h2 className="mt-2 text-xl font-semibold">{featuredCase.title}</h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">{featuredCase.diagnosis}</p>
            </div>
            <h2 className="text-2xl font-semibold">{contentConfig.research.pageTitle}</h2>
            <div className="mt-5 grid gap-3">
              {contentConfig.research.highlights.map((highlight) => (
                <p key={highlight} className="rounded-2xl bg-white/[0.06] p-4 text-sm leading-7 text-slate-300">
                  {highlight}
                </p>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}

function CaseList({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate-400">{title}</p>
      <ul className="mt-3 grid gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="rounded-2xl bg-paper px-3 py-2 text-sm leading-6 text-slate-600 dark:bg-slate-950/50 dark:text-slate-300"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
