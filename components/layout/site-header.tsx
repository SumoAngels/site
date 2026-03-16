import { Suspense } from "react";
import Link from "next/link";

import type { Locale, MessageDictionary } from "@/lib/types";

import { LanguageSwitcher } from "./language-switcher";

type SiteHeaderProps = {
  locale: Locale;
  messages: MessageDictionary;
};

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#050914]/75 backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl flex-wrap items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Link href={`/${locale}`} className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 shadow-glow">
            <span className="display-font text-lg font-bold tracking-[0.18em] text-cyan-200">SS</span>
          </div>
          <div>
            <div className="display-font text-lg font-semibold tracking-[0.2em] text-white">
              {messages.brand.name}
            </div>
            <div className="text-xs text-mute">{messages.brand.tagline}</div>
          </div>
        </Link>

        <div className="flex flex-wrap items-center gap-3 sm:gap-4">
          <nav className="glass-tag flex items-center gap-1 rounded-full p-1 text-sm text-mute">
            <Link
              href={`/${locale}`}
              className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
            >
              {messages.nav.home}
            </Link>
            <Link
              href={`/${locale}/about`}
              className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
            >
              {messages.nav.about}
            </Link>
            <Link
              href={`/${locale}/api-status`}
              className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white"
            >
              {messages.nav.status}
            </Link>
          </nav>

          <Suspense
            fallback={
              <div className="glass-tag rounded-full px-3 py-2 text-xs text-mute">
                {messages.language.label}
              </div>
            }
          >
            <LanguageSwitcher currentLocale={locale} label={messages.language.label} />
          </Suspense>
        </div>
      </div>
    </header>
  );
}
