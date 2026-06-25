"use client";

import { FormEvent, useRef, useState } from "react";
import { LoaderCircle, Trash2 } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  reason: string;
};

const initialFormState: FormState = {
  fullName: "",
  email: "",
  phone: "",
  reason: ""
};

const configurationErrorMessage =
  "Account deletion service is not connected yet. Please contact support while Firebase setup is completed.";
const rateLimitWindowMs = 60_000;
const rateLimitStorageKey = "healthsathi-delete-account-last-submit";

const sanitizeText = (value: string, maxLength: number) =>
  value
    .replace(/[\u0000-\u001F\u007F]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, maxLength);

export function GooglePlayDeletionForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const submittingRef = useRef(false);
  const lastSubmittedAtRef = useRef(0);

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (submittingRef.current) {
      return;
    }

    setSuccessMessage("");
    setErrorMessage("");

    const fullName = sanitizeText(form.fullName, 120);
    const email = sanitizeText(form.email, 254).toLowerCase();
    const phone = sanitizeText(form.phone, 30);
    const reason = sanitizeText(form.reason, 1000);

    if (!fullName || !email || !phone) {
      setErrorMessage("Full name, email, and phone number are required.");
      return;
    }

    const storedSubmitTime = Number(window.sessionStorage.getItem(rateLimitStorageKey) || "0");
    const lastSubmittedAt = Math.max(lastSubmittedAtRef.current, Number.isFinite(storedSubmitTime) ? storedSubmitTime : 0);
    const now = Date.now();

    if (now - lastSubmittedAt < rateLimitWindowMs) {
      setErrorMessage("Please wait a minute before submitting another deletion request.");
      return;
    }

    submittingRef.current = true;
    setLoading(true);

    try {
      const [{ addDoc, collection, serverTimestamp }, { db, missingFirebaseEnv }] = await Promise.all([
        import("firebase/firestore"),
        import("@/src/lib/firebase")
      ]);

      if (!db) {
        console.error(
          `Firebase is not configured. Missing: ${missingFirebaseEnv.join(", ") || "Firestore configuration"}.`
        );
        setErrorMessage(`${configurationErrorMessage} Email: ${contentConfig.site.supportEmail}`);
        return;
      }

      await addDoc(collection(db, "deletion_requests"), {
        fullName,
        email,
        phone,
        reason,
        status: "pending",
        createdAt: serverTimestamp()
      });

      lastSubmittedAtRef.current = now;
      window.sessionStorage.setItem(rateLimitStorageKey, String(now));
      setForm(initialFormState);
      setSuccessMessage(
        "Your account deletion request has been submitted successfully. Our team will verify and process it."
      );
    } catch (error) {
      console.error(error);
      setErrorMessage(
        `Unable to submit request right now. Please try again or email ${contentConfig.site.supportEmail}.`
      );
    } finally {
      submittingRef.current = false;
      setLoading(false);
    }
  };

  return (
    <form
      className="rounded-[2rem] border border-white/70 bg-white/[0.72] p-6 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-white/[0.08]"
      onSubmit={handleSubmit}
    >
      <div className="flex items-center gap-3">
        <span className="grid size-12 place-items-center rounded-2xl bg-red-50 text-red-600">
          <Trash2 aria-hidden="true" className="size-6" />
        </span>
        <h2 className="text-2xl font-semibold text-navy dark:text-white">Request Account Deletion</h2>
      </div>
      <p className="mt-4 rounded-2xl bg-paper p-4 text-sm leading-7 text-slate-600 dark:bg-slate-950/50 dark:text-slate-300">
        Submitting this request will permanently remove your HealthSathi account and associated data after
        verification.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Full Name
          <input
            required
            value={form.fullName}
            onChange={(event) => updateField("fullName", event.target.value)}
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="Your full name"
          />
        </label>
        <label className="grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(event) => updateField("email", event.target.value)}
            className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
            placeholder="name@example.com"
          />
        </label>
      </div>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Phone Number
        <input
          required
          type="tel"
          value={form.phone}
          onChange={(event) => updateField("phone", event.target.value)}
          className="focus-ring rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          placeholder="+880..."
        />
      </label>

      <label className="mt-4 grid gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
        Reason
        <textarea
          rows={5}
          value={form.reason}
          onChange={(event) => updateField("reason", event.target.value)}
          className="focus-ring resize-none rounded-2xl border border-slate-200 bg-paper px-4 py-3 text-sm font-medium text-navy dark:border-white/10 dark:bg-slate-950/60 dark:text-white"
          placeholder="Tell us why you are requesting deletion"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="focus-ring mt-6 w-full rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-premium disabled:cursor-not-allowed disabled:from-slate-300 disabled:via-slate-300 disabled:to-slate-300 disabled:shadow-none"
      >
        {loading ? (
          <span className="inline-flex items-center justify-center gap-2">
            <LoaderCircle aria-hidden="true" className="size-4 animate-spin" />
            Submitting...
          </span>
        ) : (
          "Submit Deletion Request"
        )}
      </button>

      {successMessage ? (
        <div className="mt-4 rounded-2xl border border-brand-200 bg-brand-50 p-4 text-sm leading-6 text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100">
          <p className="font-semibold">Request received</p>
          <p className="mt-1">{successMessage}</p>
        </div>
      ) : null}

      {errorMessage ? (
        <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-700 dark:bg-red-500/10 dark:text-red-100">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
