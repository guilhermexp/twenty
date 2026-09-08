import { useLingui } from '@lingui/react/macro';
import { isNonEmptyString } from '@sniptt/guards';
import { APP_LOCALES } from 'twenty-shared/translations';

export type LocaleOption = {
  label: string;
  value: (typeof APP_LOCALES)[keyof typeof APP_LOCALES];
  searchKeywords: string;
};

// Language name in English and in its own language, so it is searchable
// regardless of the UI language — e.g. typing "chinese" or "中文".
const getLocaleSearchKeywords = (
  locale: (typeof APP_LOCALES)[keyof typeof APP_LOCALES],
): string => {
  const displayNames = [locale, APP_LOCALES.en].map((displayLocale) => {
    try {
      return new Intl.DisplayNames([displayLocale], { type: 'language' }).of(
        locale,
      );
    } catch {
      return undefined;
    }
  });

  return [...new Set(displayNames.filter(isNonEmptyString))].join(' ');
};

const LOCALE_SEARCH_KEYWORDS: Record<string, string> = Object.fromEntries(
  Object.values(APP_LOCALES).map((locale) => [
    locale,
    getLocaleSearchKeywords(locale),
  ]),
);

export const useLocaleOptions = (): LocaleOption[] => {
  const { t } = useLingui();

  const unsortedLocaleOptions: Array<Omit<LocaleOption, 'searchKeywords'>> = [
    { label: t`English`, value: APP_LOCALES.en },
    { label: t`Portuguese — Brazil`, value: APP_LOCALES['pt-BR'] },
  ];

  if (process.env.NODE_ENV === 'development') {
    unsortedLocaleOptions.push({
      label: t`Pseudo-English`,
      value: APP_LOCALES['pseudo-en'],
    });
  }

  return [...unsortedLocaleOptions]
    .sort((a, b) => a.label.localeCompare(b.label))
    .map((option) => ({
      ...option,
      searchKeywords: LOCALE_SEARCH_KEYWORDS[option.value] ?? '',
    }));
};
