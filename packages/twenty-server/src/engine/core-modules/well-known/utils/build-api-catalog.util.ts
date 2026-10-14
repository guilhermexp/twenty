import { ApiPath } from 'twenty-shared/types';

// service-desc points at each host's live OpenAPI, which is generated per
// workspace and so includes that workspace's custom objects.
export const buildApiCatalog = (baseUrl: string) => ({
  linkset: [
    {
      anchor: `${baseUrl}/${ApiPath.Rest}`,
      'service-desc': [
        {
          href: `${baseUrl}/${ApiPath.Rest}/open-api/core`,
          type: 'application/json',
        },
      ],
      'service-meta': [
        {
          href: `${baseUrl}/${ApiPath.WellKnown}/oauth-protected-resource`,
          type: 'application/json',
        },
      ],
    },
    {
      anchor: `${baseUrl}/${ApiPath.Rest}/metadata`,
      'service-desc': [
        {
          href: `${baseUrl}/${ApiPath.Rest}/open-api/metadata`,
          type: 'application/json',
        },
      ],
    },
    {
      anchor: `${baseUrl}/${ApiPath.Mcp}`,
      'service-desc': [
        {
          href: `${baseUrl}/${ApiPath.WellKnown}/mcp/server-card.json`,
          type: 'application/json',
        },
      ],
    },
  ],
});
