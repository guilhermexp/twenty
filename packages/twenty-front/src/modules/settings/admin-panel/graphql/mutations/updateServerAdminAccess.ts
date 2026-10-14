import { gql } from '@apollo/client';

export const UPDATE_SERVER_ADMIN_ACCESS = gql`
  mutation UpdateServerAdminAccess(
    $userId: UUID!
    $canAccessFullAdminPanel: Boolean
    $otp: String
  ) {
    updateServerAdminAccess(
      userId: $userId
      canAccessFullAdminPanel: $canAccessFullAdminPanel
      otp: $otp
    ) {
      id
      email
      firstName
      lastName
      canAccessFullAdminPanel
    }
  }
`;
