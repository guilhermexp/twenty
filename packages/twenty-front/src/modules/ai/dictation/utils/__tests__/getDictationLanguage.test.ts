import { getDictationLanguage } from '@/ai/dictation/utils/getDictationLanguage';

describe('getDictationLanguage', () => {
  it('uses the workspace member locale', () => {
    expect(getDictationLanguage('pt-BR')).toBe('pt-BR');
  });

  it.each([undefined, null, ''])(
    'falls back to the source locale for %p',
    (locale) => {
      expect(getDictationLanguage(locale)).toBe('en');
    },
  );

  // The pseudo locale is a translation-coverage tool, not a language anything
  // can be recognised in.
  it('falls back to the source locale for the pseudo locale', () => {
    expect(getDictationLanguage('pseudo-en')).toBe('en');
  });
});
