export const locales = ['en', 'es'] as const;

export type Locale = (typeof locales)[number];

export type Copy = Record<Locale, string>;

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function t(copy: Copy, locale: Locale): string {
  return copy[locale];
}
