import { SERVER_ERROR_CODES, type CommandResult } from '@/cli/types';
import { ConfigService } from '@/cli/utilities/config/config-service';
import { getConfigPath } from '@/cli/utilities/config/get-config-path';
import { detectLocalServer } from '@/cli/utilities/server/detect-local-server';
import { runSafe } from '@/cli/utilities/run-safe';

export type ServerStartOptions = {
  port?: number;
  test?: boolean;
  version?: string;
  onProgress?: (message: string) => void;
};

export type ServerStartResult = {
  port: number;
  url: string;
};

const innerServerStart = async (
  options: ServerStartOptions = {},
): Promise<CommandResult<ServerStartResult>> => {
  const { onProgress, test: isTest } = options;
  const defaultPort = isTest ? 2021 : 2020;
  const existingUrl = await detectLocalServer(options.port ?? defaultPort);

  if (existingUrl === null) {
    return {
      success: false,
      error: {
        code: SERVER_ERROR_CODES.LOCAL_SERVER_NOT_RUNNING,
        message:
          'No local fork server is running. Start this repository with `yarn start` and retry.',
      },
    };
  }

  const configService = new ConfigService(
    isTest ? { configPath: getConfigPath(true) } : undefined,
  );

  ConfigService.setActiveRemote('local');
  await configService.setConfig({ apiUrl: existingUrl });

  const port = parseInt(new URL(existingUrl).port, 10);

  onProgress?.(`Fork server detected on ${existingUrl}`);

  return {
    success: true,
    data: { port, url: existingUrl },
  };
};

export const serverStart = async (
  options?: ServerStartOptions,
): Promise<CommandResult<ServerStartResult>> =>
  runSafe(
    () => innerServerStart(options),
    SERVER_ERROR_CODES.LOCAL_SERVER_NOT_RUNNING,
  );
