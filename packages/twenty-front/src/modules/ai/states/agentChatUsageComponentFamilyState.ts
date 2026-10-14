import { AgentChatComponentInstanceContext } from '@/ai/contexts/AgentChatComponentInstanceContext';
import { createAtomComponentFamilyState } from '@/ui/utilities/state/jotai/utils/createAtomComponentFamilyState';

export type AgentChatLastMessageUsage = {
  inputTokens: number;
  outputTokens: number;
  cachedInputTokens: number;
};

export type AgentChatUsageState = {
  lastMessage: AgentChatLastMessageUsage | null;
  conversationSize: number;
  contextWindowTokens: number;
  inputTokens: number;
  outputTokens: number;
};

export const agentChatUsageComponentFamilyState =
  createAtomComponentFamilyState<
    AgentChatUsageState | null,
    { threadId: string | null }
  >({
    key: 'agentChatUsageComponentFamilyState',
    defaultValue: null,
    componentInstanceContext: AgentChatComponentInstanceContext,
  });
