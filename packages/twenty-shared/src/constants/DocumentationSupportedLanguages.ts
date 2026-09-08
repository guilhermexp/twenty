import { DOCUMENTATION_DEFAULT_LANGUAGE } from './DocumentationDefaultLanguage';

// Align with APP_LOCALES (en, pt-BR, pseudo-en). getDocumentationUrl uses
// locale.split('-')[0], so pt-BR maps to 'pt'. pseudo-en is a test locale
// with no docs prefix.
export const DOCUMENTATION_SUPPORTED_LANGUAGES = [
  DOCUMENTATION_DEFAULT_LANGUAGE,
  'pt',
] as const;

export type DocumentationSupportedLanguage =
  (typeof DOCUMENTATION_SUPPORTED_LANGUAGES)[number];
