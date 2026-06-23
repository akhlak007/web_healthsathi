"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { LockKeyhole } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";

export function DoctorLoginForm() {
  const [role, setRole] = useState<string>(contentConfig.doctorLogin.roles[0]);
  const [consent, setConsent] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="relative overflow-hidden rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]"
      onSubmit={(event) => {
        event.preventDefault();
        if (consent) {
          setSubmitted(true);
        }
      }}
    >
      <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="absolute -bottom-16 -left-16 h-40 w-40 rounded-full bg-coral/20 blur-3xl" />
      <div className="relative flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-gradient-to-br from-brand-500 to-accent text-white shadow-glow">
          <LockKeyhole aria-hidden="true" className="size-6" />
        </span>
        <div>
          <h2 className="text-2xl font-semibold text-navy dark:text-white">{contentConfig.doctorLogin.pageTitle}</h2>
          <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{role}</p>
        </div>
      </div>

      <div className="relative mt-6 grid grid-cols-3 gap-2 rounded-full border border-slate-200 bg-paper p-1 dark:border-white/10 dark:bg-slate-950/60">
        {contentConfig.doctorLogin.roles.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => setRole(item)}
            className={`focus-ring relative rounded-full px-3 py-2 text-sm font-semibold transition ${
              role === item
                ? "text-white"
                : "text-slate-600 hover:text-brand-700 dark:text-slate-300 dark:hover:text-white"
            }`}
          >
            {role === item ? (
              <motion.span
                layoutId="doctor-role-active"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral shadow-glow"
                transition={{ type: "spring", stiffness: 420, damping: 34 }}
              />
            ) : null}
            <span className="relative">{item}</span>
          </button>
        ))}
      </div>

      <div className="relative mt-6 grid gap-4">
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.doctorLogin.fields.email}
          <input
            type="email"
            required
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy transition focus:border-brand-300 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="doctor@healthsathi.com"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          {contentConfig.doctorLogin.fields.password}
          <input
            type="password"
            required
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy transition focus:border-brand-300 dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="********"
          />
        </label>
        <label className="flex cursor-pointer gap-3 rounded-2xl border border-slate-200 bg-paper p-4 text-sm leading-6 text-slate-600 transition hover:border-brand-200 dark:border-white/10 dark:bg-slate-950/60 dark:text-slate-300">
          <input
            type="checkbox"
            className="mt-1 size-5 accent-brand-600"
            checked={consent}
            onChange={(event) => setConsent(event.target.checked)}
          />
          {contentConfig.doctorLogin.consent}
        </label>
      </div>

      <button
        type="submit"
        disabled={!consent}
        className="focus-ring relative mt-6 w-full rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-premium disabled:cursor-not-allowed disabled:from-slate-300 disabled:via-slate-300 disabled:to-slate-300 disabled:shadow-none"
      >
        {consent ? contentConfig.doctorLogin.submitLabel : contentConfig.doctorLogin.disabledLabel}
      </button>

      {submitted ? (
        <p className="relative mt-4 rounded-2xl bg-brand-50 p-4 text-sm leading-6 text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
          {contentConfig.doctorLogin.successMessage}
        </p>
      ) : null}
    </form>
  );
}
