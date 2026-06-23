"use client";

import { useState } from "react";
import { contentConfig } from "@/config/contentConfig";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.contact.fields.name}
          <input
            required
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="Your name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.contact.fields.email}
          <input
            required
            type="email"
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="name@example.com"
          />
        </label>
      </div>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        {contentConfig.contact.fields.subject}
        <input
          required
          className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          placeholder="How can we help?"
        />
      </label>
      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        {contentConfig.contact.fields.message}
        <textarea
          required
          rows={6}
          className="focus-ring resize-none rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          placeholder="Write your message"
        />
      </label>
      <button
        type="submit"
        className="focus-ring mt-6 w-full rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-premium"
      >
        {contentConfig.contact.submitLabel}
      </button>
      {submitted ? (
        <p className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm leading-6 text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
          {contentConfig.contact.successMessage}
        </p>
      ) : null}
    </form>
  );
}
