import { serverStart } from '@/cli/operations/server-start';
import { detectLocalServer } from '@/cli/utilities/server/detect-local-server';
import chalk from 'chalk';
import type { Command } from 'commander';

const startAction = async (
  _version: string | undefined,
  options: { port?: string; test?: boolean },
) => {
  const defaultPort = options.test ? 2021 : 3000;
  const port = options.port ? parseInt(options.port, 10) : defaultPort;

  if (Number.isNaN(port) || port < 1 || port > 65535) {
    console.error(chalk.red('Invalid port number.'));
    process.exit(1);
  }

  const result = await serverStart({
    port,
    test: options.test,
    onProgress: (message) => console.log(chalk.gray(message)),
  });

  if (!result.success) {
    console.error(chalk.red(result.error.message));
    process.exit(1);
  }
};

const statusAction = async (options: { test?: boolean }) => {
  const defaultPort = options.test ? 2021 : 3000;
  const url = await detectLocalServer(defaultPort);

  if (url === null) {
    console.log(chalk.gray('No local fork server is running.'));

    return;
  }

  console.log(chalk.green('Local fork server is running.'));
  console.log(`  URL: ${url}`);
};

export const registerServerCommands = (program: Command): void => {
  program
    .command('server:start [version]')
    .description('Connect the SDK to a locally running fork server')
    .option('-p, --port <port>', 'HTTP port')
    .option('--test', 'Use the separate test server on port 2021')
    .action(startAction);

  program
    .command('server:status')
    .description('Show the local fork server status')
    .option('--test', 'Check the test server')
    .action(statusAction);

  const server = program
    .command('server', { hidden: true })
    .description('Manage the local fork server');

  const deprecate = (oldCmd: string, newCmd: string) =>
    console.warn(
      chalk.yellow(
        `⚠ \`twenty server ${oldCmd}\` is deprecated. Use \`twenty ${newCmd}\` instead.`,
      ),
    );

  server
    .command('start [version]')
    .option('-p, --port <port>', 'HTTP port')
    .option('--test', 'Use the separate test server on port 2021')
    .action(
      async (
        version: string | undefined,
        options: { port?: string; test?: boolean },
      ) => {
        deprecate('start', 'server:start');
        await startAction(version, options);
      },
    );

  server
    .command('status')
    .option('--test', 'Check the test server')
    .action(async (options: { test?: boolean }) => {
      deprecate('status', 'server:status');
      await statusAction(options);
    });
};
