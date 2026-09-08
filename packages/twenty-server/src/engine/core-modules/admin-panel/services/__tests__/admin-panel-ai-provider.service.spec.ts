/* @license Enterprise */

import { Test, type TestingModule } from '@nestjs/testing';

import { AdminPanelAiProviderService } from 'src/engine/core-modules/admin-panel/services/admin-panel-ai-provider.service';
import { TwentyConfigService } from 'src/engine/core-modules/twenty-config/twenty-config.service';
import { AiModelRegistryService } from 'src/engine/metadata-modules/ai/ai-models/services/ai-model-registry.service';
import { DefaultAiCatalogService } from 'src/engine/metadata-modules/ai/ai-models/services/default-ai-catalog.service';

describe('AdminPanelAiProviderService', () => {
  let service: AdminPanelAiProviderService;
  let providers: Record<string, unknown>;

  const twentyConfigService = {
    get: jest.fn(),
    set: jest.fn(),
  };

  const givenProviders = () => {
    twentyConfigService.get.mockReturnValue(providers);
  };

  const addProvider = () =>
    service.addProvider({
      providerName: 'my-gateway',
      providerConfig: {
        npm: '@ai-sdk/openai-compatible',
        baseUrl: 'https://gateway.internal',
      },
    });

  beforeEach(async () => {
    jest.clearAllMocks();
    providers = {};

    twentyConfigService.set.mockImplementation(
      async (_key: string, value: Record<string, unknown>) => {
        providers = value;
      },
    );

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AdminPanelAiProviderService,
        { provide: TwentyConfigService, useValue: twentyConfigService },
        { provide: AiModelRegistryService, useValue: {} },
        { provide: DefaultAiCatalogService, useValue: {} },
      ],
    }).compile();

    service = module.get<AdminPanelAiProviderService>(
      AdminPanelAiProviderService,
    );
  });

  describe('addProvider', () => {
    it('persists the provider', async () => {
      givenProviders();

      await expect(addProvider()).resolves.toBe(true);
      expect(providers).toHaveProperty('my-gateway');
    });

    it('rejects a config whose npm package is not a supported SDK', async () => {
      givenProviders();

      await expect(
        service.addProvider({
          providerName: 'my-gateway',
          providerConfig: { npm: 'not-an-ai-sdk-package' },
        }),
      ).rejects.toThrow('Invalid provider configuration');
      expect(twentyConfigService.set).not.toHaveBeenCalled();
    });

    it('rejects a provider name that is not slug-safe', async () => {
      givenProviders();

      await expect(
        service.addProvider({
          providerName: 'not a slug',
          providerConfig: {
            npm: '@ai-sdk/openai-compatible',
            baseUrl: 'https://gateway.internal',
          },
        }),
      ).rejects.toThrow('Invalid provider name');
    });
  });

  describe('removeProvider', () => {
    it('removes the provider', async () => {
      givenProviders();
      providers = { 'my-gateway': { npm: '@ai-sdk/openai-compatible' } };

      await expect(service.removeProvider('my-gateway')).resolves.toBe(true);
      expect(providers).not.toHaveProperty('my-gateway');
    });
  });
});
