import type { Metadata } from "next";

import { StatCard } from "@/components/visual/stat-card";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { getStatusSnapshot } from "@/lib/status";
import type { Locale } from "@/lib/types";
import { formatDate } from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getDictionary((isValidLocale(locale) ? locale : "en") as Locale);

  return {
    title: messages.meta.statusTitle,
    description: messages.meta.statusDescription
  };
}

export default async function ApiStatusPage({
  params
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const messages = await getDictionary(safeLocale);
  const snapshot = getStatusSnapshot();

  return (
    <section className="mx-auto w-full max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8">
        <h1 className="display-font text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
          {messages.status.title}
        </h1>
        <p className="mt-3 max-w-3xl text-lg text-slate-300">{messages.status.subtitle}</p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <StatCard
          label={messages.status.runtimeTitle}
          value={snapshot.runtime}
          hint={`${messages.status.refreshed}: ${formatDate(snapshot.timestamp, safeLocale)}`}
        />
        <StatCard
          label={messages.status.demoTitle}
          value={snapshot.demoModeEnabled ? messages.status.ready : messages.status.missing}
          hint={
            snapshot.demoModeEnabled
              ? messages.status.detailKeys.demoReady
              : messages.status.detailKeys.demoMissing
          }
          accent="violet"
        />
        <StatCard
          label={messages.status.servicesTitle}
          value={`${snapshot.services.filter((service) => service.status === "ready").length}/${snapshot.services.length}`}
          hint={messages.status.subtitle}
        />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel rounded-[2rem] p-6">
          <h2 className="display-font text-2xl font-semibold text-white">
            {messages.status.servicesTitle}
          </h2>
          <div className="mt-6 grid gap-4">
            {snapshot.services.map((service) => (
              <article
                key={service.id}
                className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold text-white">
                    {messages.status.serviceLabels[service.id]}
                  </h3>
                  <span className="glass-tag rounded-full px-3 py-1 text-xs uppercase tracking-[0.18em] text-cyan-200">
                    {service.status === "ready" ? messages.status.ready : messages.status.missing}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-mute">
                  {messages.status.detailKeys[service.detailKey]}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="glass-panel rounded-[2rem] p-6">
          <h2 className="display-font text-2xl font-semibold text-white">
            {messages.status.endpointsTitle}
          </h2>
          <div className="mt-6 space-y-3">
            {snapshot.endpoints.map((endpoint) => (
              <div
                key={endpoint}
                className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
              >
                {endpoint}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
