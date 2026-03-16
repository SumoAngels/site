"use client";

import { useTransition } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

import { localeNames, locales } from "@/lib/i18n";
import type { Locale } from "@/lib/types";
import { cn } from "@/lib/utils";

type LanguageSwitcherProps = {
  currentLocale: Locale;
  label: string;
};

export function LanguageSwitcher({ currentLocale, label }: LanguageSwitcherProps) {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [isPending, startTransition] = useTransition();

  return (
    <label className="glass-tag flex items-center gap-3 rounded-full px-3 py-2 text-xs text-mute">
      <span className="hidden sm:inline">{label}</span>
      <select
        aria-label={label}
        className={cn(
          "bg-transparent text-sm font-medium text-text outline-none",
          isPending && "opacity-70"
        )}
        value={currentLocale}
        onChange={(event) => {
          const nextLocale = event.target.value as Locale;
          const segments = pathname.split("/");

          if (segments[1]) {
            segments[1] = nextLocale;
          }

          const query = searchParams.toString();
          const nextPath = `${segments.join("/")}${query ? `?${query}` : ""}`;

          startTransition(() => {
            router.push(nextPath);
          });
        }}
      >
        {locales.map((locale) => (
          <option key={locale} value={locale} className="bg-slate-950 text-text">
            {localeNames[locale]}
          </option>
        ))}
      </select>
    </label>
  );
}
