import type { ReactNode } from "react";
import { notFound } from "next/navigation";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { getDictionary, isValidLocale, locales } from "@/lib/i18n";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const messages = await getDictionary(locale);

  return (
    <div lang={locale} className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-grid opacity-40" />
        <div className="absolute left-[-10%] top-24 h-72 w-72 animate-aurora rounded-full bg-violet-500/12 blur-3xl" />
        <div className="absolute right-[-4%] top-40 h-80 w-80 animate-aurora rounded-full bg-cyan-400/10 blur-3xl" />
      </div>
      <div className="relative z-10 flex min-h-screen flex-col">
        <SiteHeader locale={locale} messages={messages} />
        <main className="flex-1">{children}</main>
        <SiteFooter messages={messages} />
      </div>
    </div>
  );
}
