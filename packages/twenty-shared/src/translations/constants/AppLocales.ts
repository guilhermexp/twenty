import { SOURCE_LOCALE } from '@/translations/constants/SourceLocale';

export const APP_LOCALES = {
  en: SOURCE_LOCALE,
  'pseudo-en': 'pseudo-en',
  'pt-BR': 'pt-BR',
} as const;

export type AppLocale = keyof typeof APP_LOCALES;
