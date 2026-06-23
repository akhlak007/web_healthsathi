import Link from "next/link";
import { ArrowRight } from "lucide-react";

type PrimaryLinkProps = {
  label: string;
  href: string;
  tone?: "dark" | "light" | "outline";
};

export function PrimaryLink({ label, href, tone = "dark" }: PrimaryLinkProps) {
  const toneClass =
    tone === "light"
      ? "bg-white text-navy hover:bg-slate-100"
      : tone === "outline"
        ? "border border-white/60 bg-white/70 text-navy backdrop-blur-xl hover:border-brand-500 hover:text-brand-700 dark:border-white/10 dark:bg-white/10 dark:text-white"
        : "bg-gradient-to-r from-brand-500 via-accent to-coral text-white shadow-glow hover:-translate-y-1 hover:shadow-premium";

  return (
    <Link
      href={href}
      className={`focus-ring group inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition ${toneClass}`}
    >
      {label}
      <ArrowRight aria-hidden="true" className="size-4 transition group-hover:translate-x-1" strokeWidth={2} />
    </Link>
  );
}
