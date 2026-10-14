import { gql } from '@apollo/client';

export const FIND_ONE_APPLICATION_REGISTRATION_DETAILS = gql`
  query FindOneApplicationRegistrationDetails($id: UUID!) {
    findOneApplication(id: $id) {
      id
      applicationRegistration {
        id
        description
        author
        category
        websiteUrl
        aboutDescription
        termsUrl
        emailSupport
        issueReportUrl
        galleryImageUrls
      }
    }
  }
`;
