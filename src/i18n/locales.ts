export const locales = ['en', 'ru', 'es-es', 'es-ar'] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = 'en';

/** BCP 47 tag for <html lang> and hreflang. */
export const htmlLang: Record<Locale, string> = {
  en: 'en',
  ru: 'ru',
  'es-es': 'es-ES',
  'es-ar': 'es-AR',
};

/** Short label for the topbar switcher. */
export const localeLabel: Record<Locale, string> = {
  en: 'EN',
  ru: 'RU',
  'es-es': 'ES',
  'es-ar': 'AR',
};

/** Full name, in its own language — used as the switcher's accessible label. */
export const localeName: Record<Locale, string> = {
  en: 'English',
  ru: 'Русский',
  'es-es': 'Español (España)',
  'es-ar': 'Español (Argentina)',
};

/** The default locale lives at the root; the rest are prefixed. */
export function localeHref(locale: Locale): string {
  return locale === defaultLocale ? '/' : `/${locale}/`;
}

export function isLocale(value: string | undefined): value is Locale {
  return locales.includes(value as Locale);
}
