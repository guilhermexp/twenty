import { mergeTranslationsIntoOverrides } from 'src/engine/metadata-modules/utils/merge-translations-into-overrides.util';

describe('mergeTranslationsIntoOverrides', () => {
  it('returns existing overrides untouched when there is nothing to merge', () => {
    const existingOverrides = { labelSingular: 'Client' };

    expect(
      mergeTranslationsIntoOverrides({
        existingOverrides,
        translationEntries: [],
      }),
    ).toBe(existingOverrides);
  });

  it('adds a translation without touching other overrides', () => {
    expect(
      mergeTranslationsIntoOverrides({
        existingOverrides: { labelSingular: 'Client' },
        translationEntries: [
          { locale: 'pt-BR', property: 'labelSingular', value: 'Entreprise' },
        ],
      }),
    ).toEqual({
      labelSingular: 'Client',
      translations: { 'pt-BR': { labelSingular: 'Entreprise' } },
    });
  });

  it('merges into an existing locale group without dropping siblings', () => {
    expect(
      mergeTranslationsIntoOverrides({
        existingOverrides: {
          translations: {
            'pt-BR': { labelSingular: 'Entreprise' },
            'pseudo-en': { labelSingular: 'Unternehmen' },
          },
        },
        translationEntries: [
          { locale: 'pt-BR', property: 'labelPlural', value: 'Entreprises' },
        ],
      }),
    ).toEqual({
      translations: {
        'pt-BR': { labelSingular: 'Entreprise', labelPlural: 'Entreprises' },
        'pseudo-en': { labelSingular: 'Unternehmen' },
      },
    });
  });

  it('deletes an entry on empty value and prunes the emptied locale group', () => {
    expect(
      mergeTranslationsIntoOverrides({
        existingOverrides: {
          labelSingular: 'Client',
          translations: {
            'pt-BR': { labelSingular: 'Entreprise' },
            'pseudo-en': { labelSingular: 'Unternehmen' },
          },
        },
        translationEntries: [
          { locale: 'pt-BR', property: 'labelSingular', value: null },
        ],
      }),
    ).toEqual({
      labelSingular: 'Client',
      translations: { 'pseudo-en': { labelSingular: 'Unternehmen' } },
    });
  });

  it('collapses to null when the last translation of an otherwise empty blob is removed', () => {
    expect(
      mergeTranslationsIntoOverrides({
        existingOverrides: {
          translations: { 'pt-BR': { labelSingular: 'Entreprise' } },
        },
        translationEntries: [
          { locale: 'pt-BR', property: 'labelSingular', value: '' },
        ],
      }),
    ).toBeNull();
  });

  it('removing an absent entry is a no-op that still returns a copy', () => {
    expect(
      mergeTranslationsIntoOverrides({
        existingOverrides: null,
        translationEntries: [
          { locale: 'pt-BR', property: 'labelSingular', value: null },
        ],
      }),
    ).toBeNull();
  });

  it('does not mutate the existing overrides', () => {
    const existingOverrides = {
      translations: { 'pt-BR': { labelSingular: 'Entreprise' } },
    };

    mergeTranslationsIntoOverrides({
      existingOverrides,
      translationEntries: [
        { locale: 'pt-BR', property: 'labelSingular', value: 'Société' },
        { locale: 'en', property: 'labelSingular', value: 'Azienda' },
      ],
    });

    expect(existingOverrides).toEqual({
      translations: { 'pt-BR': { labelSingular: 'Entreprise' } },
    });
  });
});
