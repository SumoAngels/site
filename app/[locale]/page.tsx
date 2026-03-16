import type { Metadata } from "next";

import { SteamSearchForm } from "@/components/forms/steam-search-form";
import { ScanLoader } from "@/components/visual/scan-loader";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import type { Locale } from "@/lib/types";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getDictionary((isValidLocale(locale) ? locale : "en") as Locale);

  return {
    title: messages.meta.homeTitle,
    description: messages.meta.homeDescription
  };
}

export default async function HomePage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const messages = await getDictionary(safeLocale);

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="grid items-start gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="space-y-8">
          <div className="glass-tag inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
            {messages.home.badge}
          </div>

          <div className="space-y-4">
            <h1 className="display-font max-w-4xl text-5xl font-black uppercase tracking-[0.08em] text-white sm:text-6xl xl:text-7xl">
              <span className="gradient-text">{messages.home.title}</span>
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-300">{messages.home.subtitle}</p>
          </div>

          <SteamSearchForm locale={safeLocale} messages={messages.home} />

          <div className="grid gap-4 md:grid-cols-3">
            {messages.home.highlights.map((item) => (
              <article key={item.title} className="glass-panel rounded-[1.75rem] p-5">
                <h2 className="display-font text-lg font-semibold tracking-[0.08em] text-white">
                  {item.title}
                </h2>
                <p className="mt-3 text-sm leading-7 text-mute">{item.text}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-6 lg:pt-10">
          <ScanLoader />
          <div className="glass-panel rounded-[1.75rem] p-6">
            <div className="text-sm uppercase tracking-[0.22em] text-cyan-200">
              {messages.home.statsTitle}
            </div>
            <p className="mt-4 text-base leading-7 text-slate-300">{messages.home.statsText}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {messages.home.summaryTiles.map((tile) => (
                <div key={tile.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-mute">{tile.label}</div>
                  <div className="mt-2 display-font text-2xl text-white">{tile.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
