import { ui as en } from "./en";
import { ui as es } from "./es";

const dictionaries = { en, es } as const;

export type Locale = keyof typeof dictionaries;
export type TranslationKey = keyof typeof en;

export function useTranslations(lang: Locale) {
  return function t(key: TranslationKey): string {
    return dictionaries[lang]?.[key] ?? en[key];
  };
}

export function getLocaleFromUrl(url: URL): Locale {
  const [, locale] = url.pathname.split("/");
  if (locale === "es") return "es";
  return "en";
}

/**
 * Given a pathname and a target locale, return the equivalent path in that locale.
 * e.g. localePath("/pricing", "es") => "/es/pricing"
 *      localePath("/es/pricing", "en") => "/pricing"
 */
export function localePath(pathname: string, locale: Locale): string {
  // Strip trailing slash for comparison (keep root "/" as-is)
  const clean = pathname === "/" ? "/" : pathname.replace(/\/$/, "");

  // Remove existing /es prefix if present
  const withoutLocale = clean.startsWith("/es")
    ? clean.replace(/^\/es/, "") || "/"
    : clean;

  if (locale === "en") {
    return withoutLocale;
  }
  // Spanish
  return withoutLocale === "/" ? "/es/" : `/es${withoutLocale}`;
}
