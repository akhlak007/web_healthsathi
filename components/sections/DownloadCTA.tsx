import Link from "next/link";
import { Icon } from "@/components/ui/Icon";
import { contentConfig } from "@/config/contentConfig";

export function DownloadCTA() {
  return (
    <section id="download" className="section-spacing relative overflow-hidden bg-brand-500">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(255,255,255,0.24),transparent_24rem),radial-gradient(circle_at_90%_70%,rgba(15,23,42,0.22),transparent_26rem)]" />
      <div className="noise-overlay" />
      <div className="container-shell grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/75">
            {contentConfig.home.sections.downloadEyebrow}
          </p>
          <h2 className="text-balance mt-4 text-4xl font-semibold text-white sm:text-5xl">
            {contentConfig.home.sections.downloadTitle}
          </h2>
          <p className="mt-5 max-w-3xl text-lg leading-8 text-white/85">{contentConfig.home.sections.downloadBody}</p>
        </div>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
          {contentConfig.hero.downloadLinks.map((link) => (
            <Link
              key={link.platform}
              href={link.href}
              className="focus-ring inline-flex min-w-52 items-center gap-3 rounded-2xl border border-white/50 bg-white/90 px-5 py-4 text-navy shadow-sm backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-premium"
            >
              <Icon name="Download" className="size-5 text-brand-600" />
              <span>
                <span className="block text-xs font-medium text-slate-500">{link.eyebrow}</span>
                <span className="block text-sm font-bold">{link.label}</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
