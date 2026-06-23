import Link from "next/link";
import { Mail, MapPin, Stethoscope } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-slate-200 bg-white dark:border-white/10 dark:bg-slate-950">
      <div className="absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-brand-500/10 to-transparent" />
      <div className="container-shell grid gap-10 py-12 lg:grid-cols-[1.2fr_1.8fr]">
        <div>
          <Link href="/" className="focus-ring inline-flex items-center gap-2 rounded-full">
            <span className="grid size-10 place-items-center rounded-full bg-gradient-to-br from-brand-500 via-accent to-coral text-white shadow-glow">
              <Stethoscope aria-hidden="true" className="size-5" />
            </span>
            <span className="text-lg font-bold text-navy dark:text-white">{contentConfig.site.name}</span>
          </Link>
          <p className="mt-5 max-w-md text-sm leading-7 text-slate-600 dark:text-slate-300">
            {contentConfig.footer.summary}
          </p>
          <div className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
            <span className="flex items-center gap-2">
              <Mail aria-hidden="true" className="size-4 text-brand-600" />
              {contentConfig.site.supportEmail}
            </span>
            <span className="flex items-center gap-2">
              <MapPin aria-hidden="true" className="size-4 text-brand-600" />
              {contentConfig.site.location}
            </span>
          </div>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {contentConfig.footer.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="focus-ring rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-brand-50 hover:text-brand-700 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="border-t border-slate-100 dark:border-white/10">
        <div className="container-shell flex flex-col gap-3 py-5 text-sm text-slate-500 dark:text-slate-400 sm:flex-row sm:items-center sm:justify-between">
          <span>{contentConfig.site.copyright}</span>
          <span>{contentConfig.site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
