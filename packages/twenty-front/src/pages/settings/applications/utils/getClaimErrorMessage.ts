import { type MessageDescriptor } from '@lingui/core';
import { msg } from '@lingui/core/macro';

export const getClaimErrorMessage = (code: string): MessageDescriptor => {
  switch (code) {
    case 'PROVENANCE_NOT_FOUND':
      return msg`No provenance attestation was found for this package. Publish it from GitHub Actions with npm trusted publishing, then try claiming again.`;
    case 'PROVENANCE_CHECK_UNAVAILABLE':
      return msg`We could not reach the package registry to verify the package provenance. Please try again in a few minutes.`;
    case 'GITHUB_ORG_OWNERSHIP_REQUIRED':
      return msg`Your GitHub account does not own the organization that publishes this package. If you are an owner, grant this app access to the organization on GitHub's authorization screen (Organization access section).`;
    case 'GITHUB_AUTH_FAILED':
      return msg`GitHub authorization failed or was denied. Please connect your GitHub account again.`;
    case 'CLAIM_NOT_CONFIGURED':
      return msg`Claiming is not configured on this server. Ask an administrator to set up the GitHub OAuth app.`;
    case 'CLAIM_NOT_SUPPORTED':
      return msg`Only applications published to npm can be claimed this way.`;
    case 'APPLICATION_REGISTRATION_ALREADY_OWNED':
      return msg`This application has already been claimed by a workspace.`;
    case 'APPLICATION_REGISTRATION_NOT_FOUND':
      return msg`This application could not be found.`;
    default:
      return msg`Could not complete the claim. Please try again.`;
  }
};
