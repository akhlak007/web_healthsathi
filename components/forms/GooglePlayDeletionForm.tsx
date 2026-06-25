"use client";

import { FormEvent, useState } from "react";
import { Trash2 } from "lucide-react";

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

export function GooglePlayDeletionForm() {
  const [form, setForm] = useState<FormState>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const updateField = (field: keyof FormState, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSuccessMessage("");
    setErrorMessage("");

    const fullName = form.fullName.trim();
    const email = form.email.trim();
    const phone = form.phone.trim();
    const reason = form.reason.trim();

    if (!fullName || !email || !phone) {
      setErrorMessage("Full name, email, and phone number are required.");
      return;
    }

    setLoading(true);

    try {
      const [{ addDoc, collection, serverTimestamp }, { db, missingFirebaseEnv }] = await Promise.all([
        import("firebase/firestore"),
        import("@/src/lib/firebase")
      ]);

      if (!db) {
        throw new Error(
          `Firebase is not configured. Missing: ${missingFirebaseEnv.join(", ") || "Firestore configuration"}.`
        );
      }

      await addDoc(collection(db, "deletion_requests"), {
        fullName,
        email,
        phone,
        reason,
        status: "pending",
        createdAt: serverTimestamp()
      });

      setForm(initialFormState);
      setSuccessMessage("Your account deletion request has been submitted successfully.");
    } catch (error) {
      setErrorMessage(error instanceof Error ? error.message : "Unable to submit request. Please try again.");
    } finally {
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
        {loading ? "Submitting..." : "Submit Deletion Request"}
      </button>

      {successMessage ? (
        <p className="mt-4 rounded-2xl bg-brand-50 p-4 text-sm leading-6 text-brand-700 dark:bg-brand-500/10 dark:text-brand-100">
          {successMessage}
        </p>
      ) : null}

      {errorMessage ? (
        <p className="mt-4 rounded-2xl bg-red-50 p-4 text-sm leading-6 text-red-700 dark:bg-red-500/10 dark:text-red-100">
          {errorMessage}
        </p>
      ) : null}
    </form>
  );
}
