import type { Locale, MessageDictionary } from "@/lib/types";

export const locales: Locale[] = ["ru", "en", "uk", "de", "es", "pt"];
export const defaultLocale: Locale = "en";

export const localeNames: Record<Locale, string> = {
  ru: "Русский",
  en: "English",
  uk: "Українська",
  de: "Deutsch",
  es: "Español",
  pt: "Português"
};

export async function getDictionary(locale: Locale): Promise<MessageDictionary> {
  switch (locale) {
    case "ru":
      return (await import("@/messages/ru")).default;
    case "uk":
      return (await import("@/messages/uk")).default;
    case "de":
      return (await import("@/messages/de")).default;
    case "es":
      return (await import("@/messages/es")).default;
    case "pt":
      return (await import("@/messages/pt")).default;
    case "en":
    default:
      return (await import("@/messages/en")).default;
  }
}

export function isValidLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}
