export type QuotaConsumptionRow = {
  operationType: string;
  userWorkspaceId: string;
  apiKeyId: string;
  applicationId: string;
  agentId: string;
  workflowId: string;
  logicFunctionId: string;
  quantity: string | number;
};
