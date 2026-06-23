"use client";

import { useMemo, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";

export function ConsentFramework() {
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const consentItems = contentConfig.consent.items;
  const isAgreed = useMemo(
    () => consentItems.every((item) => checked[item.title]),
    [checked, consentItems]
  );

  return (
    <section className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-5 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.06] sm:p-7">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-navy dark:text-white">{contentConfig.consent.title}</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600 dark:text-slate-300">
            {contentConfig.consent.disclosure}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-2 text-xs font-semibold text-brand-700">
          <CheckCircle2 aria-hidden="true" className="size-4" />
          {contentConfig.consent.badge}
        </span>
      </div>

      <div className="mt-6 grid gap-3">
        {consentItems.map((item) => (
          <label
            key={item.title}
            className="flex cursor-pointer gap-4 rounded-2xl border border-slate-200 bg-paper p-4 transition hover:border-brand-200 hover:bg-brand-50/50 dark:border-white/10 dark:bg-slate-950/50 dark:hover:bg-white/[0.08]"
          >
            <input
              type="checkbox"
              className="mt-1 size-5 accent-brand-600"
              checked={Boolean(checked[item.title])}
              onChange={(event) =>
                setChecked((current) => ({
                  ...current,
                  [item.title]: event.target.checked
                }))
              }
            />
            <span>
              <span className="block font-semibold text-navy dark:text-white">{item.title}</span>
              <span className="mt-1 block text-sm leading-7 text-slate-600 dark:text-slate-300">{item.body}</span>
            </span>
          </label>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          className="focus-ring rounded-full border border-slate-300 bg-white/70 px-5 py-3 text-sm font-semibold text-slate-700 backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
        >
          {contentConfig.consent.cancelLabel}
        </button>
        <button
          type="button"
          disabled={!isAgreed}
          className="focus-ring rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-5 py-3 text-sm font-semibold text-white shadow-glow transition disabled:cursor-not-allowed disabled:from-slate-300 disabled:via-slate-300 disabled:to-slate-300 disabled:shadow-none"
        >
          {isAgreed ? contentConfig.consent.agreeLabel : contentConfig.consent.disabledHelper}
        </button>
      </div>
    </section>
  );
}
