"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";

export function AccountDeletionForm() {
  const [confirmed, setConfirmed] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]"
      onSubmit={(event) => {
        event.preventDefault();
        if (confirmed) {
          setSubmitted(true);
        }
      }}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-red-50 text-red-600">
          <Trash2 aria-hidden="true" className="size-6" />
        </span>
        <h2 className="text-2xl font-semibold text-navy dark:text-white">{contentConfig.accountDeletion.formTitle}</h2>
      </div>

      <div className="mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.accountDeletion.fields.email}
          <input
            required
            type="email"
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="name@example.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.accountDeletion.fields.userId}
          <input
            required
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="HS-000000"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.accountDeletion.fields.reason}
          <textarea
            required
            rows={5}
            className="focus-ring resize-none rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="Tell us why you are requesting deletion"
          />
        </label>
        <label className="flex cursor-pointer gap-3 rounded-2xl border border-slate-200 bg-paper p-4 text-sm leading-6 text-slate-600 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300">
          <input
            type="checkbox"
            className="mt-1 size-5 accent-brand-600"
            checked={confirmed}
            onChange={(event) => setConfirmed(event.target.checked)}
          />
          {contentConfig.accountDeletion.fields.confirmation}
        </label>
      </div>

      <button
        type="submit"
        disabled={!confirmed}
        className="focus-ring mt-6 w-full rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-premium disabled:cursor-not-allowed disabled:from-slate-300 disabled:via-slate-300 disabled:to-slate-300 disabled:shadow-none"
      >
        {confirmed ? contentConfig.accountDeletion.submitLabel : contentConfig.accountDeletion.disabledLabel}
      </button>

      {submitted ? (
        <p className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm leading-6 text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
          {contentConfig.accountDeletion.successMessage}
        </p>
      ) : null}
    </form>
  );
}
