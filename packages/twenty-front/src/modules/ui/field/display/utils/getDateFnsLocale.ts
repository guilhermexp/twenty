import { isObject } from '@sniptt/guards';
import { type Locale } from 'date-fns';
import { type APP_LOCALES } from 'twenty-shared/translations';

type AppLocale = keyof typeof APP_LOCALES;
export const getDateFnsLocaleImport = (locale: AppLocale) => {
  switch (locale) {
    case 'en':
    case 'pseudo-en':
      return import('date-fns/locale/en-US');
    case 'pt-BR':
      return import('date-fns/locale/pt-BR');
    default: {
      return import('date-fns/locale/en-US');
    }
  }
};

const isDateFnsLocale = (value: unknown): value is Locale =>
  isObject(value) && 'code' in value && 'formatLong' in value;

export const getDateFnsLocale = async (
  localeString?: string | null,
): Promise<Locale | undefined> => {
  return getDateFnsLocaleImport(localeString as AppLocale)
    .then((localeModule) => Object.values(localeModule).find(isDateFnsLocale))
    .catch(() => undefined);
};
