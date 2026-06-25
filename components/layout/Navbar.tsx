"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { contentConfig } from "@/config/contentConfig";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`container-shell rounded-full transition-all duration-500 ${
          scrolled
            ? "glass-line shadow-premium"
            : "border border-white/50 bg-white/[0.48] shadow-sm backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/[0.36]"
        }`}
      >
        <div className="flex min-h-16 items-center justify-between gap-3 px-4 sm:px-5">
          <Link href="/" className="focus-ring flex items-center gap-2 rounded-full">
            <span className="relative grid size-10 place-items-center rounded-full bg-white/80 shadow-glow ring-1 ring-white/70 backdrop-blur dark:bg-white/10 dark:ring-white/10">
              <img
                src={contentConfig.site.logoMark}
                alt=""
                aria-hidden="true"
                className="h-9 w-9 object-contain"
              />
            </span>
            <span className="text-base font-bold tracking-normal text-navy dark:text-white">
              {contentConfig.site.name}
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-slate-200/70 bg-white/[0.45] p-1 backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.04] lg:flex">
            {contentConfig.nav.links.map((link) => {
              const active = pathname === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`focus-ring relative rounded-full px-3 py-2 text-sm font-medium transition ${
                    active
                      ? "text-brand-700 dark:text-white"
                      : "text-slate-600 hover:text-navy dark:text-slate-300 dark:hover:text-white"
                  }`}
                >
                  {active ? (
                    <motion.span
                      layoutId="nav-active-pill"
                      className="absolute inset-0 rounded-full bg-white shadow-sm ring-1 ring-brand-100 dark:bg-white/10 dark:ring-white/10"
                      transition={{ type: "spring", stiffness: 420, damping: 34 }}
                    />
                  ) : null}
                  <span className="relative z-10">{link.label}</span>
                </Link>
              );
            })}
          </div>

          <div className="hidden items-center gap-2 lg:flex">
            <ThemeToggle />
            <span className="rounded-full border border-brand-100 bg-brand-50/90 px-3 py-2 text-xs font-semibold text-brand-700 shadow-sm dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100">
              {contentConfig.nav.patientBadge}
            </span>
            <Link
              href={contentConfig.nav.doctorLoginHref}
              className="focus-ring relative overflow-hidden rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-4 py-2.5 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-0.5 hover:shadow-premium"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition hover:opacity-100" />
              <span className="relative">{contentConfig.nav.doctorLoginLabel}</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <button
              type="button"
              className="focus-ring grid size-11 place-items-center rounded-full border border-slate-200 bg-white/80 text-navy backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-white"
              aria-label={open ? contentConfig.nav.closeLabel : contentConfig.nav.menuLabel}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X aria-hidden="true" className="size-5" /> : <Menu aria-hidden="true" className="size-5" />}
            </button>
          </div>
        </div>

        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            className="border-t border-slate-100/80 px-4 pb-4 pt-2 dark:border-white/10 lg:hidden"
          >
            <div className="grid gap-1">
              {contentConfig.nav.links.map((link) => {
                const active = pathname === link.href;

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={`focus-ring rounded-2xl px-3 py-3 text-sm font-semibold transition ${
                      active
                        ? "bg-brand-50 text-brand-700 dark:bg-white/10 dark:text-white"
                        : "text-slate-700 hover:bg-brand-50 hover:text-brand-700 dark:text-slate-200 dark:hover:bg-white/10 dark:hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              <span className="rounded-full border border-brand-100 bg-brand-50 px-3 py-3 text-center text-xs font-semibold text-brand-700 dark:border-brand-500/20 dark:bg-brand-500/10 dark:text-brand-100">
                {contentConfig.nav.patientBadge}
              </span>
              <Link
                href={contentConfig.nav.doctorLoginHref}
                className="focus-ring rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-3 py-3 text-center text-sm font-semibold text-white shadow-glow"
              >
                {contentConfig.nav.doctorLoginLabel}
              </Link>
            </div>
          </motion.div>
        ) : null}
      </nav>
    </header>
  );
}
