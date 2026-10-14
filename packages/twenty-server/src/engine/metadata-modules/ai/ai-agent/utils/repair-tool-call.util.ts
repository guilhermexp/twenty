import {
  type LanguageModel,
  type LanguageModelUsage,
  NoSuchToolError,
  Output,
  type StepResult,
  type ToolSet,
  generateText,
} from 'ai';
import { type z } from 'zod';

import { UsageOperationType } from 'src/engine/core-modules/usage/enums/usage-operation-type.enum';
import { AiUsageQuotaService } from 'src/engine/metadata-modules/ai/ai-usage-quota/services/ai-usage-quota.service';
import { extractCacheCreationTokensFromSteps } from 'src/engine/metadata-modules/ai/ai-usage-quota/utils/extract-cache-creation-tokens.util';
import { buildAiTelemetry } from 'src/engine/metadata-modules/ai/ai-models/utils/build-ai-telemetry.util';

type ToolCall = {
  type: 'tool-call';
  toolCallId: string;
  toolName: string;
  input: string;
};

type RepairToolCallUsageContext = {
  aiUsageQuotaService: AiUsageQuotaService;
  modelId: string;
  workspaceId: string;
  userWorkspaceId: string | null;
  operationType: UsageOperationType;
};

export const repairToolCall = async ({
  toolCall,
  tools,
  inputSchema,
  error,
  model,
  usageContext,
}: {
  toolCall: ToolCall;
  tools: Record<string, unknown>;
  inputSchema: (toolCall: { toolName: string }) => unknown;
  error: Error;
  model: LanguageModel;
  usageContext?: RepairToolCallUsageContext;
}): Promise<ToolCall | null> => {
  // Don't attempt to fix invalid tool names
  if (NoSuchToolError.isInstance(error)) {
    return null;
  }

  const tool = tools[toolCall.toolName];

  if (!tool || typeof tool !== 'object' || !('inputSchema' in tool)) {
    return null;
  }

  const schema = inputSchema(toolCall);

  if (!schema || typeof schema !== 'object') {
    return null;
  }

  let usage: LanguageModelUsage | undefined;
  let steps: StepResult<ToolSet>[] | undefined;

  try {
    const result = await generateText({
      model,
      output: Output.object({ schema: schema as z.ZodTypeAny }),
      prompt: [
        `The AI model attempted to call the tool "${toolCall.toolName}" with invalid input.`,
        ``,
        `Input provided:`,
        JSON.stringify(toolCall.input, null, 2),
        ``,
        `Error encountered:`,
        error.message,
        ``,
        `Please fix the input to exactly match the required schema.`,
        `Pay special attention to:`,
        `- Enum values must match exactly (e.g., "DescNullsLast" not "desc")`,
        `- Object structures must match the schema shape`,
        `- Array items must follow the specified format`,
      ].join('\n'),
      experimental_telemetry: buildAiTelemetry({
        functionId: 'repair-tool-call',
        workspaceId: usageContext?.workspaceId,
        userWorkspaceId: usageContext?.userWorkspaceId,
      }),
    });

    usage = result.usage;
    steps = result.steps;

    const repairedInput = result.output;

    if (repairedInput == null) {
      return null;
    }

    return {
      type: 'tool-call',
      toolCallId: toolCall.toolCallId,
      toolName: toolCall.toolName,
      input: JSON.stringify(repairedInput),
    };
  } catch {
    return null;
  } finally {
    if (usageContext && usage) {
      const cacheCreationTokens = steps
        ? extractCacheCreationTokensFromSteps(steps)
        : 0;

      void usageContext.aiUsageQuotaService.consumeAndRecordUsage(
        usageContext.modelId,
        { usage, cacheCreationTokens },
        usageContext.workspaceId,
        usageContext.operationType,
        null,
        usageContext.userWorkspaceId,
      );
    }
  }
};
