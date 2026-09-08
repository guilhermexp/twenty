import { findInvalidTranslationOverrideProperties } from 'src/engine/metadata-modules/utils/find-invalid-translation-override-properties.util';

describe('findInvalidTranslationOverrideProperties', () => {
  it('returns nothing when every property is translatable', () => {
    expect(
      findInvalidTranslationOverrideProperties(
        [
          { locale: 'pt-BR', property: 'labelSingular', value: 'Entreprise' },
          { locale: 'pt-BR', property: 'labelPlural', value: 'Entreprises' },
          {
            locale: 'pseudo-en',
            property: 'description',
            value: 'Ein Unternehmen',
          },
        ],
        'objectMetadata',
      ),
    ).toEqual([]);
  });

  it('returns nothing when there is no entry at all', () => {
    expect(
      findInvalidTranslationOverrideProperties([], 'objectMetadata'),
    ).toEqual([]);
  });

  it('returns the properties outside the allowlist', () => {
    expect(
      findInvalidTranslationOverrideProperties(
        [
          { locale: 'pt-BR', property: 'labelSingular', value: 'Entreprise' },
          { locale: 'pt-BR', property: 'icon', value: 'IconBuilding' },
          { locale: 'pt-BR', property: 'nameSingular', value: 'entreprise' },
        ],
        'objectMetadata',
      ),
    ).toEqual(['icon', 'nameSingular']);
  });

  it('reports a property invalid for the metadata name even when another one allows it', () => {
    expect(
      findInvalidTranslationOverrideProperties(
        [{ locale: 'pt-BR', property: 'labelSingular', value: 'Entreprise' }],
        'fieldMetadata',
      ),
    ).toEqual(['labelSingular']);
  });

  it('reports an invalid property once however many locales carry it', () => {
    expect(
      findInvalidTranslationOverrideProperties(
        [
          { locale: 'pt-BR', property: 'icon', value: 'IconBuilding' },
          { locale: 'pseudo-en', property: 'icon', value: 'IconBuilding' },
          { locale: 'en', property: 'icon', value: 'IconBuilding' },
        ],
        'objectMetadata',
      ),
    ).toEqual(['icon']);
  });

  it('rejects every property for a metadata name that translates nothing', () => {
    expect(
      findInvalidTranslationOverrideProperties(
        [
          { locale: 'pt-BR', property: 'label', value: 'Entreprise' },
          { locale: 'pt-BR', property: 'name', value: 'entreprise' },
        ],
        // Absent from the registry, so the `?? []` fallback makes every
        // property invalid rather than silently accepting the write.
        'agent',
      ),
    ).toEqual(['label', 'name']);
  });
});
