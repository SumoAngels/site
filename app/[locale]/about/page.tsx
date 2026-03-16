import type { Metadata } from "next";

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
    title: messages.meta.aboutTitle,
    description: messages.meta.aboutDescription
  };
}

export default async function AboutPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const messages = await getDictionary(safeLocale);

  return (
    <section className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="glass-panel rounded-[2rem] p-8 sm:p-10">
        <div className="glass-tag inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.24em] text-cyan-200">
          SteamScan
        </div>
        <h1 className="mt-6 display-font text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
          {messages.about.title}
        </h1>
        <p className="mt-4 max-w-3xl text-lg leading-8 text-slate-300">{messages.about.intro}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="display-font text-xl font-semibold text-white">
              {messages.about.missionTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-mute">{messages.about.missionText}</p>
          </article>
          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="display-font text-xl font-semibold text-white">
              {messages.about.dataTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-mute">{messages.about.dataText}</p>
          </article>
          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="display-font text-xl font-semibold text-white">
              {messages.about.privacyTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-mute">{messages.about.privacyText}</p>
          </article>
          <article className="rounded-[1.5rem] border border-white/10 bg-white/5 p-6">
            <h2 className="display-font text-xl font-semibold text-white">
              {messages.about.stackTitle}
            </h2>
            <p className="mt-3 text-sm leading-7 text-mute">{messages.about.stackText}</p>
          </article>
        </div>

        <p className="mt-8 text-base leading-7 text-slate-300">{messages.about.cta}</p>
      </div>
    </section>
  );
}
