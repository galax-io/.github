import type { Locale } from './locales';
import type { Strings } from './types';
import { en } from './en';
import { ru } from './ru';
import { esES } from './es-es';
import { esAR } from './es-ar';

export type { Strings } from './types';

export const ui: Record<Locale, Strings> = {
  en,
  ru,
  'es-es': esES,
  'es-ar': esAR,
};
