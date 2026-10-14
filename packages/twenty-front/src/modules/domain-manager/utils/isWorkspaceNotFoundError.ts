import { CombinedGraphQLErrors } from '@apollo/client/errors';

// The public workspace lookup answers NOT_FOUND only when the instance has no
// workspace yet; any other failure says nothing about whether one exists.
export const isWorkspaceNotFoundError = (error: unknown): boolean =>
  CombinedGraphQLErrors.is(error) &&
  error.errors.some(
    (graphQLError) => graphQLError.extensions?.code === 'NOT_FOUND',
  );
