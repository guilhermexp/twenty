import { afterEach, describe, expect, it } from 'vitest';

import { setFrontComponentTranslations } from '@/sdk/front-component/translations/front-component-translations';
import { generateMessageId } from 'twenty-shared/i18n';
import { resolveTranslation } from '@/sdk/front-component/translations/resolveTranslation';

afterEach(() => {
  setFrontComponentTranslations({});
});

describe('resolveTranslation', () => {
  it('returns the translation for the active locale', () => {
    setFrontComponentTranslations({
      'pt-BR': { [generateMessageId('Save')]: 'Salvar' },
    });

    expect(resolveTranslation('Save', undefined, 'pt-BR')).toBe('Salvar');
  });

  it('falls back to the source message when the locale is missing', () => {
    setFrontComponentTranslations({
      'pt-BR': { [generateMessageId('Save')]: 'Salvar' },
    });

    expect(resolveTranslation('Save', undefined, 'pseudo-en')).toBe('Save');
  });

  it('falls back to the source message when the key is untranslated', () => {
    setFrontComponentTranslations({ 'pt-BR': {} });

    expect(resolveTranslation('Cancel', undefined, 'pt-BR')).toBe('Cancel');
  });

  it('resolves context-disambiguated messages independently', () => {
    setFrontComponentTranslations({
      'pt-BR': {
        [generateMessageId('Open', 'door')]: 'Abrir',
        [generateMessageId('Open', 'store')]: 'Aberta',
      },
    });

    expect(
      resolveTranslation(
        { message: 'Open', context: 'door' },
        undefined,
        'pt-BR',
      ),
    ).toBe('Abrir');
    expect(
      resolveTranslation(
        { message: 'Open', context: 'store' },
        undefined,
        'pt-BR',
      ),
    ).toBe('Aberta');
  });

  it('interpolates values into the resolved translation', () => {
    setFrontComponentTranslations({
      'pt-BR': {
        [generateMessageId('Saved {count} cards')]: 'Cartões salvos: {count}',
      },
    });

    expect(
      resolveTranslation('Saved {count} cards', { count: 5 }, 'pt-BR'),
    ).toBe('Cartões salvos: 5');
  });
});
