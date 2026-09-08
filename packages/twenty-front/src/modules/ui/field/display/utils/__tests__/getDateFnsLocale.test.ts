import { getDateFnsLocale } from '@/ui/field/display/utils/getDateFnsLocale';

describe('getDateFnsLocale', () => {
  it('should load the default en-US locale', async () => {
    const locale = await getDateFnsLocale('en-US');

    expect(locale).toBeDefined();
    expect(locale?.code).toBe('en-US');
    expect(typeof locale?.formatDistance).toBe('function');
  });

  it('should load a non-default locale (pt-BR)', async () => {
    const locale = await getDateFnsLocale('pt-BR');

    expect(locale).toBeDefined();
    expect(locale?.code).toBe('pt-BR');
  });

  it('should fall back to en-US for an unknown locale', async () => {
    const locale = await getDateFnsLocale('zz-ZZ');

    expect(locale?.code).toBe('en-US');
  });

  it('should fall back to en-US for nullish input', async () => {
    expect((await getDateFnsLocale(undefined))?.code).toBe('en-US');
    expect((await getDateFnsLocale(null))?.code).toBe('en-US');
  });
});
