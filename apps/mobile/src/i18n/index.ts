import type { Locale } from "@money-memory/shared";
import ar from "./ar.json";
import en from "./en.json";
import he from "./he.json";

const dictionaries: Record<Locale, Record<string, string>> = { he, ar, en };

let current: Locale = "he";

export function setLocale(locale: Locale): void {
  current = locale;
}

/** Task 8 replaces this with a full i18n setup. Missing keys show the key itself. */
export function t(key: string): string {
  return dictionaries[current][key] ?? key;
}
