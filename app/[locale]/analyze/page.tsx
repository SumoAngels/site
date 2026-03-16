import type { Metadata } from "next";
import Link from "next/link";

import { HoursChart } from "@/components/charts/hours-chart";
import { StatCard } from "@/components/visual/stat-card";
import { getFaceitStats } from "@/lib/faceit";
import { getDictionary, isValidLocale } from "@/lib/i18n";
import { scanSteamAccount } from "@/lib/steam";
import type { Locale, SteamScanResult, WarningKey } from "@/lib/types";
import {
  formatCompactNumber,
  formatCurrencyUsd,
  formatDate,
  getCountryName
} from "@/lib/utils";

export const dynamic = "force-dynamic";

export async function generateMetadata({
  params
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const messages = await getDictionary((isValidLocale(locale) ? locale : "en") as Locale);

  return {
    title: messages.meta.analyzeTitle,
    description: messages.meta.analyzeDescription
  };
}

function UnavailableState({
  locale,
  title,
  description,
  backHomeLabel,
  statusLabel
}: {
  locale: Locale;
  title: string;
  description: string;
  backHomeLabel: string;
  statusLabel: string;
}) {
  return (
    <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="glass-panel rounded-[2rem] p-8 text-center sm:p-12">
        <h1 className="display-font text-4xl font-bold uppercase tracking-[0.08em] text-white">
          {title}
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">{description}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link
            href={`/${locale}`}
            className="glass-button inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            {backHomeLabel}
          </Link>
          <Link
            href={`/${locale}/api-status`}
            className="glass-tag inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            {statusLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}

function buildWarnings({
  steamScan,
  faceitNickname,
  faceitApiConfigured,
  faceitStats
}: {
  steamScan: SteamScanResult;
  faceitNickname?: string;
  faceitApiConfigured: boolean;
  faceitStats: Awaited<ReturnType<typeof getFaceitStats>>;
}) {
  const warnings = [...steamScan.warnings, ...(faceitStats?.warnings ?? [])];

  if (faceitNickname && !faceitApiConfigured) {
    warnings.push("faceitApiMissing");
  }

  if (faceitNickname && faceitApiConfigured && !faceitStats) {
    warnings.push("faceitLookupFailed");
  }

  return warnings.filter((warning, index, array) => array.indexOf(warning) === index) as WarningKey[];
}

export default async function AnalyzePage({
  params,
  searchParams
}: {
  params: Promise<{ locale: string }>;
  searchParams: Promise<{ profile?: string; faceit?: string }>;
}) {
  const [{ locale }, { profile, faceit }] = await Promise.all([params, searchParams]);
  const safeLocale: Locale = isValidLocale(locale) ? locale : "en";
  const messages = await getDictionary(safeLocale);
  const profileInput = profile?.trim();
  const faceitNickname = faceit?.trim();

  if (!profileInput) {
    return (
      <section className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <div className="glass-panel rounded-[2rem] p-8 text-center sm:p-12">
          <h1 className="display-font text-4xl font-bold uppercase tracking-[0.08em] text-white">
            {messages.analyze.emptyTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-slate-300">
            {messages.analyze.emptyText}
          </p>
          <Link
            href={`/${safeLocale}`}
            className="glass-button mt-8 inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            {messages.common.backHome}
          </Link>
        </div>
      </section>
    );
  }

  if (!process.env.STEAM_API_KEY) {
    return (
      <UnavailableState
        locale={safeLocale}
        title={messages.analyze.title}
        description={messages.analyze.warningKeys.steamApiMissing}
        backHomeLabel={messages.common.backHome}
        statusLabel={messages.nav.status}
      />
    );
  }

  let steamScan: SteamScanResult;

  try {
    steamScan = await scanSteamAccount(profileInput);
  } catch {
    return (
      <UnavailableState
        locale={safeLocale}
        title={messages.analyze.title}
        description={messages.analyze.warningKeys.steamProfileLookupFailed}
        backHomeLabel={messages.common.backHome}
        statusLabel={messages.nav.status}
      />
    );
  }

  const faceitApiConfigured = Boolean(process.env.FACEIT_API_KEY);
  const faceitStats =
    faceitNickname && faceitApiConfigured ? await getFaceitStats(faceitNickname) : null;
  const warnings = buildWarnings({
    steamScan,
    faceitNickname,
    faceitApiConfigured,
    faceitStats
  });

  const faceitSectionMessage = !faceitNickname
    ? messages.analyze.faceitFields.noFaceit
    : !faceitApiConfigured
      ? messages.analyze.warningKeys.faceitApiMissing
      : !faceitStats
        ? messages.analyze.warningKeys.faceitLookupFailed
        : null;

  const profileSummary = steamScan.profile;
  const countryName = getCountryName(profileSummary.countryCode, safeLocale);
  const lastSeen = profileSummary.lastLogoff
    ? formatDate(new Date(profileSummary.lastLogoff * 1000).toISOString(), safeLocale)
    : "-";

  return (
    <section className="mx-auto w-full max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
      <div className="mb-8 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="glass-tag inline-flex rounded-full px-4 py-2 text-xs uppercase tracking-[0.22em] text-cyan-200">
            {messages.analyze.scanLabel}
          </div>
          <h1 className="mt-4 display-font text-4xl font-bold uppercase tracking-[0.08em] text-white sm:text-5xl">
            {messages.analyze.title}
          </h1>
          <p className="mt-3 max-w-3xl text-lg text-slate-300">{messages.analyze.subtitle}</p>
        </div>

        <div className="glass-panel rounded-[1.5rem] px-5 py-4">
          <div className="text-xs uppercase tracking-[0.18em] text-mute">{messages.common.liveData}</div>
          <div className="mt-2 text-sm text-slate-200">{messages.analyze.liveHint}</div>
        </div>
      </div>

      <div className="glass-panel rounded-[2rem] p-6 sm:p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center gap-5">
            <img
              src={profileSummary.avatar}
              alt={profileSummary.nickname}
              className="h-24 w-24 rounded-[1.75rem] border border-white/10 object-cover"
            />
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-cyan-200">
                {messages.analyze.profileCardTitle}
              </div>
              <h2 className="mt-2 display-font text-3xl font-semibold text-white">
                {profileSummary.nickname}
              </h2>
              <p className="mt-2 text-sm text-mute">
                {profileSummary.steamId}
                {profileSummary.realName ? ` | ${profileSummary.realName}` : ""}
              </p>
            </div>
          </div>

          <Link
            href={profileSummary.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="glass-button inline-flex rounded-full px-6 py-3 text-sm font-semibold text-white"
          >
            {messages.common.openSteamProfile}
          </Link>
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
          <StatCard
            label={messages.analyze.profileFields.steamLevel}
            value={formatCompactNumber(profileSummary.level, safeLocale)}
            hint={`${messages.analyze.profileFields.lastSeen}: ${lastSeen}`}
          />
          <StatCard
            label={messages.analyze.profileFields.createdAt}
            value={formatDate(profileSummary.createdAt, safeLocale)}
            hint={`${messages.analyze.profileFields.country}: ${countryName}`}
            accent="violet"
          />
          <StatCard
            label={messages.analyze.profileFields.vacBans}
            value={formatCompactNumber(profileSummary.vacBans, safeLocale)}
            hint={`${messages.analyze.profileFields.gameBans}: ${formatCompactNumber(profileSummary.gameBans, safeLocale)}`}
          />
          <StatCard
            label={messages.analyze.profileFields.communityBan}
            value={profileSummary.communityBanned ? messages.common.yes : messages.common.no}
            hint={`${messages.analyze.profileFields.country}: ${countryName}`}
            accent="violet"
          />
          <StatCard
            label={messages.analyze.profileFields.totalGames}
            value={formatCompactNumber(steamScan.games.totalGames, safeLocale)}
            hint={`${messages.analyze.chartTotalHours}: ${formatCompactNumber(steamScan.games.totalHours, safeLocale)} h`}
          />
          <StatCard
            label={messages.analyze.profileFields.cs2Hours}
            value={`${formatCompactNumber(steamScan.games.cs2Hours, safeLocale)} h`}
            hint={messages.analyze.gamesTitle}
          />
          <StatCard
            label={messages.analyze.profileFields.inventoryValue}
            value={formatCurrencyUsd(steamScan.inventory.estimatedValueUsd, safeLocale)}
            hint={messages.analyze.inventoryTitle}
            accent="violet"
          />
          <StatCard
            label={messages.analyze.profileFields.inventoryItems}
            value={formatCompactNumber(steamScan.inventory.totalItems, safeLocale)}
            hint={`${messages.analyze.profileFields.marketable}: ${formatCompactNumber(steamScan.inventory.marketableItems, safeLocale)}`}
          />
          <StatCard
            label={messages.analyze.profileFields.marketable}
            value={formatCompactNumber(steamScan.inventory.marketableItems, safeLocale)}
            hint={`${messages.analyze.profileFields.tradable}: ${formatCompactNumber(steamScan.inventory.tradableItems, safeLocale)}`}
          />
          <StatCard
            label={messages.analyze.profileFields.country}
            value={countryName}
            hint={profileSummary.visibilityState === 3 ? messages.common.liveData : messages.common.unavailable}
            accent="violet"
          />
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <HoursChart games={steamScan.games.topGames} locale={safeLocale} messages={messages.analyze} />

        <div className="glass-panel rounded-[1.75rem] p-6">
          <h2 className="display-font text-xl font-semibold tracking-[0.12em] text-white">
            {messages.analyze.topGamesTitle}
          </h2>
          <div className="mt-6 space-y-4">
            {steamScan.games.topGames.length ? (
              steamScan.games.topGames.map((game, index) => (
                <article
                  key={`${game.appid}-${game.name}`}
                  className="flex items-center gap-4 rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                >
                  <div className="display-font flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-cyan-400/15 bg-cyan-400/10 text-cyan-200">
                    {(index + 1).toString().padStart(2, "0")}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="truncate text-base font-semibold text-white">{game.name}</div>
                    <div className="mt-1 text-sm text-mute">
                      {formatCompactNumber(game.hours, safeLocale)} h
                    </div>
                  </div>
                </article>
              ))
            ) : (
              <p className="text-sm text-mute">{messages.analyze.noGames}</p>
            )}
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-6 xl:grid-cols-[1fr_1fr]">
        <div className="glass-panel rounded-[1.75rem] p-6">
          <h2 className="display-font text-xl font-semibold tracking-[0.12em] text-white">
            {messages.analyze.inventoryTitle}
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-mute">{messages.analyze.profileFields.inventoryValue}</div>
              <div className="mt-3 display-font text-3xl text-white">
                {formatCurrencyUsd(steamScan.inventory.estimatedValueUsd, safeLocale)}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-mute">{messages.analyze.profileFields.inventoryItems}</div>
              <div className="mt-3 display-font text-3xl text-white">
                {formatCompactNumber(steamScan.inventory.totalItems, safeLocale)}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-mute">{messages.analyze.profileFields.marketable}</div>
              <div className="mt-3 display-font text-3xl text-white">
                {formatCompactNumber(steamScan.inventory.marketableItems, safeLocale)}
              </div>
            </div>
            <div className="rounded-[1.4rem] border border-white/10 bg-white/5 p-5">
              <div className="text-sm text-mute">{messages.analyze.profileFields.tradable}</div>
              <div className="mt-3 display-font text-3xl text-white">
                {formatCompactNumber(steamScan.inventory.tradableItems, safeLocale)}
              </div>
            </div>
          </div>
        </div>

        <div className="glass-panel rounded-[1.75rem] p-6">
          <h2 className="display-font text-xl font-semibold tracking-[0.12em] text-white">
            {messages.analyze.faceitTitle}
          </h2>

          {faceitStats ? (
            <div className="mt-6 space-y-6">
              <div className="flex items-center gap-4">
                {faceitStats.avatar ? (
                  <img
                    src={faceitStats.avatar}
                    alt={faceitStats.nickname}
                    className="h-16 w-16 rounded-2xl border border-white/10 object-cover"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white">
                    F
                  </div>
                )}
                <div>
                  <div className="display-font text-2xl font-semibold text-white">
                    {faceitStats.nickname}
                  </div>
                  <div className="mt-1 text-sm text-mute">
                    {faceitStats.region ?? messages.common.unknown}
                    {" | "}
                    {getCountryName(faceitStats.country, safeLocale)}
                  </div>
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <StatCard
                  label={messages.analyze.faceitFields.elo}
                  value={formatCompactNumber(faceitStats.elo, safeLocale)}
                />
                <StatCard
                  label={messages.analyze.faceitFields.level}
                  value={formatCompactNumber(faceitStats.level, safeLocale)}
                  accent="violet"
                />
                <StatCard
                  label={messages.analyze.faceitFields.matches}
                  value={formatCompactNumber(faceitStats.matches, safeLocale)}
                />
                <StatCard
                  label={messages.analyze.faceitFields.winRate}
                  value={faceitStats.winRate !== null ? `${formatCompactNumber(faceitStats.winRate, safeLocale)}%` : "-"}
                  accent="violet"
                />
              </div>

              <div>
                <div className="mb-4 text-sm uppercase tracking-[0.18em] text-cyan-200">
                  {messages.analyze.faceitFields.recentMatches}
                </div>
                <div className="space-y-3">
                  {faceitStats.recentMatches.length ? (
                    faceitStats.recentMatches.map((match) => (
                      <div
                        key={match.matchId}
                        className="rounded-[1.4rem] border border-white/10 bg-white/5 p-4"
                      >
                        <div className="flex items-center justify-between gap-3">
                          <div className="text-sm font-semibold text-white">
                            {match.map ?? messages.common.unknown}
                          </div>
                          <div className="text-xs uppercase tracking-[0.18em] text-cyan-200">
                            {messages.analyze.matchResults[match.result]}
                          </div>
                        </div>
                        <div className="mt-2 text-sm text-mute">
                          {match.kills ?? "-"} / {match.deaths ?? "-"} {messages.analyze.faceitFields.avgKd}:{" "}
                          {match.kdRatio !== null ? formatCompactNumber(match.kdRatio, safeLocale) : "-"}
                        </div>
                        <div className="mt-2 text-xs text-mute">{formatDate(match.startedAt, safeLocale)}</div>
                      </div>
                    ))
                  ) : (
                    <p className="text-sm text-mute">{messages.analyze.faceitFields.noMatchHistory}</p>
                  )}
                </div>
              </div>
            </div>
          ) : (
            <p className="mt-6 text-sm text-mute">{faceitSectionMessage}</p>
          )}
        </div>
      </div>

      <div className="mt-8 glass-panel rounded-[1.75rem] p-6">
        <h2 className="display-font text-xl font-semibold tracking-[0.12em] text-white">
          {messages.analyze.warningsTitle}
        </h2>
        <div className="mt-5 space-y-3">
          {warnings.length ? (
            warnings.map((warning) => (
              <div
                key={warning}
                className="rounded-[1.3rem] border border-cyan-400/10 bg-cyan-400/5 px-4 py-3 text-sm text-slate-200"
              >
                {messages.analyze.warningKeys[warning]}
              </div>
            ))
          ) : (
            <div className="rounded-[1.3rem] border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200">
              {messages.common.noWarnings}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
