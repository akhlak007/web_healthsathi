"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { contentConfig } from "@/config/contentConfig";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { Icon } from "@/components/ui/Icon";
import { NetworkImage } from "@/components/ui/NetworkImage";
import { TiltCard } from "@/components/ui/TiltCard";

export function HeroSection() {
  return (
    <section className="relative isolate overflow-hidden pt-32 sm:pt-36">
      <div className="premium-mesh -z-20" />
      <div className="absolute inset-0 -z-10 bg-grid-soft bg-[length:44px_44px] opacity-40 dark:opacity-20" />
      <div className="noise-overlay" />
      <div className="premium-particles">
        {Array.from({ length: 18 }).map((_, index) => (
          <span
            key={index}
            style={{
              left: `${(index * 37) % 100}%`,
              top: `${(index * 23) % 100}%`,
              animationDelay: `${index * 0.27}s`
            }}
          />
        ))}
      </div>
      <div className="container-shell grid gap-12 pb-16 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/75 px-3 py-2 text-sm font-semibold text-brand-700 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/10 dark:text-brand-100">
            <ShieldCheck aria-hidden="true" className="size-4" />
            {contentConfig.hero.eyebrow}
          </div>
          <h1 className="text-balance mt-7 max-w-4xl text-5xl font-semibold tracking-normal text-navy dark:text-white sm:text-6xl lg:text-7xl">
            {contentConfig.hero.title}
          </h1>
          <p className="mt-6 max-w-2xl text-xl leading-8 text-slate-600 dark:text-slate-300">
            {contentConfig.hero.subtitle}
          </p>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            {contentConfig.hero.mission}
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href={contentConfig.hero.primaryCta.href}
              className="focus-ring group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-brand-500 via-accent to-coral px-5 py-3 text-sm font-semibold text-white shadow-glow transition hover:-translate-y-1 hover:shadow-premium"
            >
              <span className="absolute inset-0 bg-white/20 opacity-0 transition group-hover:opacity-100" />
              <span className="relative">{contentConfig.hero.primaryCta.label}</span>
              <ArrowRight aria-hidden="true" className="relative size-4 transition group-hover:translate-x-1" />
            </Link>
            <Link
              href={contentConfig.hero.secondaryCta.href}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/60 bg-white/[0.72] px-5 py-3 text-sm font-semibold text-navy shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-brand-500 hover:text-brand-700 dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:text-brand-100"
            >
              {contentConfig.hero.secondaryCta.label}
            </Link>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {contentConfig.hero.downloadLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.href}
                className="focus-ring inline-flex min-w-44 items-center gap-3 rounded-2xl border border-white/60 bg-white/70 px-4 py-3 shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:border-brand-200 hover:shadow-soft dark:border-white/10 dark:bg-white/10"
              >
                <Icon name="Download" className="size-5 text-brand-600" />
                <span>
                  <span className="block text-xs font-medium text-slate-500 dark:text-slate-400">{link.eyebrow}</span>
                  <span className="block text-sm font-bold text-navy dark:text-white">{link.label}</span>
                </span>
              </Link>
            ))}
          </div>

          <div className="mt-9 grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
            {contentConfig.impactStats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.08 }}
                className="rounded-2xl border border-white/60 bg-white/[0.62] p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/[0.06]"
              >
                <AnimatedCounter
                  value={stat.value}
                  suffix={stat.suffix}
                  className="text-2xl font-semibold text-navy dark:text-white"
                />
                <p className="mt-1 text-xs font-semibold text-brand-700 dark:text-brand-200">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          aria-label="HealthSathi platform dashboard mockups"
          className="relative min-h-[760px] lg:min-h-[700px]"
          initial={{ opacity: 0, scale: 0.96, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="absolute left-5 top-10 h-48 w-48 rounded-full bg-coral/20 blur-3xl" />
          <div className="absolute bottom-8 right-2 h-56 w-56 rounded-full bg-brand-500/[0.24] blur-3xl" />

          <div className="absolute inset-x-2 top-3 overflow-hidden rounded-[2.25rem] border border-white/60 bg-white/10 p-2 shadow-premium backdrop-blur-xl dark:border-white/10">
            <NetworkImage
              src={contentConfig.visualAssets.heroCareTeam.src}
              alt={contentConfig.visualAssets.heroCareTeam.alt}
              priority
              className="h-80 rounded-[1.75rem]"
              imageClassName="saturate-110"
            />
            <div className="pointer-events-none absolute inset-2 rounded-[1.75rem] bg-gradient-to-t from-slate-950 via-slate-950/18 to-transparent" />
            <div className="absolute bottom-8 left-8 max-w-xs">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-200">
                {contentConfig.hero.photoOverlay.label}
              </p>
              <p className="mt-2 text-sm leading-6 text-white/90">
                {contentConfig.hero.photoOverlay.body}
              </p>
            </div>
          </div>

          <motion.div
            className="absolute -left-1 top-64 z-20 w-56 rounded-3xl border border-white/60 bg-white/[0.82] p-4 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/[0.72]"
            animate={{ y: [0, -14, 0], rotate: [-2, 2, -2] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-brand-50 text-brand-600 dark:bg-brand-500/[0.15]">
                <Icon name={contentConfig.hero.floatingWidgets[0].icon} className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy dark:text-white">
                  {contentConfig.hero.floatingWidgets[0].title}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {contentConfig.hero.floatingWidgets[0].body}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute right-0 top-56 z-20 w-52 rounded-3xl border border-white/60 bg-white/80 p-4 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/[0.72]"
            animate={{ y: [0, 13, 0], rotate: [2, -2, 2] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-accent/10 text-accent">
                <Icon name={contentConfig.hero.floatingWidgets[1].icon} className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy dark:text-white">
                  {contentConfig.hero.floatingWidgets[1].title}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {contentConfig.hero.floatingWidgets[1].body}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute bottom-12 right-2 z-20 w-56 rounded-3xl border border-white/60 bg-white/[0.82] p-4 shadow-premium backdrop-blur-2xl dark:border-white/10 dark:bg-slate-950/[0.72]"
            animate={{ y: [0, -10, 0], rotate: [-1, 1.5, -1] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="flex items-center gap-3">
              <span className="grid size-11 place-items-center rounded-2xl bg-coral/10 text-coral">
                <Icon name={contentConfig.hero.floatingWidgets[2].icon} className="size-5" />
              </span>
              <div>
                <p className="text-sm font-semibold text-navy dark:text-white">
                  {contentConfig.hero.floatingWidgets[2].title}
                </p>
                <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                  {contentConfig.hero.floatingWidgets[2].body}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="absolute left-1/2 top-[23rem] z-10 w-[min(100%,640px)] -translate-x-1/2">
            <TiltCard>
              <div className="premium-border rounded-[2.2rem] p-px">
                <div className="relative overflow-hidden rounded-[2.2rem] border border-white/70 bg-slate-950 p-3 shadow-premium dark:border-white/10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_12%,rgba(20,184,166,0.22),transparent_24rem),radial-gradient(circle_at_88%_72%,rgba(6,182,212,0.18),transparent_20rem)]" />
                  <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.05] p-4 backdrop-blur-xl">
                    <div className="mb-4 flex items-center justify-between">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-300">
                          {contentConfig.hero.dashboard.eyebrow}
                        </p>
                        <p className="mt-1 text-lg font-semibold text-white">{contentConfig.hero.dashboard.title}</p>
                      </div>
                      <div className="rounded-full bg-brand-500 px-3 py-1 text-xs font-bold text-white shadow-glow">
                        {contentConfig.hero.dashboard.status}
                      </div>
                    </div>

                    <div className="grid gap-3 sm:grid-cols-2">
                      {contentConfig.hero.mockups.map((item, index) => (
                        <motion.div
                          key={item.title}
                          className="rounded-2xl border border-white/10 bg-white/[0.07] p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/[0.1]"
                          animate={{ y: [0, index % 2 === 0 ? -6 : 6, 0] }}
                          transition={{ duration: 4.5 + index * 0.25, repeat: Infinity, ease: "easeInOut" }}
                        >
                          <div className="flex items-center gap-3">
                            <span className="grid size-10 place-items-center rounded-full bg-white text-brand-600 shadow-glow">
                              <Icon name={item.icon} className="size-5" />
                            </span>
                            <div>
                              <p className="text-sm font-semibold text-white">{item.title}</p>
                              <p className="mt-1 text-xs text-slate-300">{item.value}</p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mt-4 rounded-3xl border border-white/70 bg-white p-4 shadow-soft">
                      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                        <div>
                          <p className="text-sm font-bold text-navy">{contentConfig.hero.dashboard.consentTitle}</p>
                          <p className="mt-1 text-xs leading-5 text-slate-500">
                            {contentConfig.hero.dashboard.consentBody}
                          </p>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          {contentConfig.statistics.slice(0, 3).map((stat) => (
                            <div key={stat.label} className="rounded-xl bg-slate-50 px-3 py-2">
                              <p className="text-sm font-bold text-navy">{stat.value}</p>
                              <p className="mt-1 text-[0.68rem] font-semibold text-slate-500">{stat.label}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
