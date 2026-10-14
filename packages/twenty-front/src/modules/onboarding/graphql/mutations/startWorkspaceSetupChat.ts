import { gql } from '@apollo/client';

export const START_WORKSPACE_SETUP_CHAT = gql`
  mutation StartWorkspaceSetupChat {
    startWorkspaceSetupChat {
      outcome
      thread {
        id
        title
        totalInputTokens
        totalOutputTokens
        contextWindowTokens
        conversationSize
        deletedAt
        lastMessageAt
        createdAt
        updatedAt
      }
    }
  }
`;
