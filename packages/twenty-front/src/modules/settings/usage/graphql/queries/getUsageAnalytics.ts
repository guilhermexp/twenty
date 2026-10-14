import { gql } from '@apollo/client';

export const GET_USAGE_ANALYTICS = gql`
  query GetUsageAnalytics($input: UsageAnalyticsInput) {
    getUsageAnalytics(input: $input) {
      usageByUser {
        key
        label
        unit
        quantity
      }
      usageByOperationType {
        key
        unit
        quantity
      }
      usageByModel {
        key
        unit
        quantity
      }
      timeSeries {
        date
        unit
        quantity
      }
      periodStart
      periodEnd
      userDailyUsage {
        userWorkspaceId
        dailyUsage {
          date
          unit
          quantity
        }
      }
    }
  }
`;
