import { useQuery } from '@apollo/client/react';
import { type Manifest } from 'twenty-shared/application';
import {
  FindOneApplicationDocument,
  FindOneApplicationManifestDocument,
} from '~/generated-metadata/graphql';

// Loads the app + its registration manifest. Both queries are cache-first since
// the application detail page already issues them.
export const useApplicationManifest = (applicationId: string) => {
  const { data: appData, loading: appLoading } = useQuery(
    FindOneApplicationDocument,
    {
      variables: { id: applicationId },
      fetchPolicy: 'cache-first',
      skip: !applicationId,
    },
  );

  const application = appData?.findOneApplication;

  const { data: manifestData, loading: manifestLoading } = useQuery(
    FindOneApplicationManifestDocument,
    {
      variables: { id: applicationId },
      fetchPolicy: 'cache-first',
      skip: !applicationId,
    },
  );

  const manifest = manifestData?.findOneApplication?.applicationRegistration
    ?.manifest as Manifest | undefined;

  return {
    application,
    manifest,
    isLoading: appLoading || manifestLoading,
  };
};
