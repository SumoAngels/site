export function cn(...classes: Array<string | false | null | undefined>) {
  return classes.filter(Boolean).join(" ");
}

export function roundHours(minutes: number | undefined) {
  return Number((((minutes ?? 0) / 60) || 0).toFixed(1));
}

export function formatCompactNumber(value: number | null, locale: string) {
  if (value === null || Number.isNaN(value)) {
    return "—";
  }

  return new Intl.NumberFormat(locale, {
    maximumFractionDigits: value >= 100 ? 0 : 1
  }).format(value);
}

export function formatCurrencyUsd(value: number | null, locale: string) {
  if (value === null || Number.isNaN(value)) {
    return "—";
  }

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: value >= 100 ? 0 : 2
  }).format(value);
}

export function formatDate(value: string | null, locale: string) {
  if (!value) {
    return "—";
  }

  const parsed = new Date(value);

  if (Number.isNaN(parsed.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat(locale, {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(parsed);
}

export function getCountryName(countryCode: string | null, locale: string) {
  if (!countryCode) {
    return "—";
  }

  try {
    const display = new Intl.DisplayNames([locale], { type: "region" });

    return display.of(countryCode) ?? countryCode;
  } catch {
    return countryCode;
  }
}

export function safeJsonParse<T>(value: string) {
  return JSON.parse(value) as T;
}
