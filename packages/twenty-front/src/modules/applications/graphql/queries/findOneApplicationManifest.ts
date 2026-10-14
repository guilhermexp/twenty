import { gql } from '@apollo/client';

export const FIND_ONE_APPLICATION_MANIFEST = gql`
  query FindOneApplicationManifest($id: UUID!) {
    findOneApplication(id: $id) {
      id
      applicationRegistration {
        id
        manifest
      }
    }
  }
`;
