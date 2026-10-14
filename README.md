# Twenty (lean fork)

A personal, lean fork of [Twenty CRM](https://github.com/twentyhq/twenty) for self-hosting a single workspace.

Twenty is an open-source CRM built by the Twenty team (twentyhq). This fork keeps the CRM itself (objects, records, views, workflows, AI, email and calendar sync, the app SDK) and strips everything that only makes sense for the hosted cloud product, a multi-tenant deployment, or the upstream open-source project's community operations.

It is not affiliated with or supported by Twenty. Upstream lives at https://github.com/twentyhq/twenty.

## What was removed

Compared to upstream, this fork drops:

- **Billing**: Stripe, plans, trials, subscriptions, the billing UI and routes, the `BILLING` permission flag, the billing e-mail templates, and the billing plan mock generator.
- **Enterprise license**: the licensing module and every license gate; SSO, row-level security, audit logs, SES, custom AI providers and unlimited workspaces are always allowed.
- **Telemetry and analytics**: phone-home telemetry, enterprise seat reporting, product pageview analytics and the external support chat.
- **Docs and website**: the public `twenty-docs` and `twenty-website` packages, along with other packages the product never imported.
- **Locales**: every locale except `en` and `pt-BR` (plus the `pseudo-en` development locale).
- **Cloud and community leftovers**: the Settings community page, links to Twenty's website, docs and community channels, AI credits, custom domains and Cloudflare, multi-workspace support, the app marketplace and user impersonation.
- **Project tooling**: upstream deploy, release, merge-queue and bot workflows, contributor documents (CLA, code of conduct, contributing guide, trademark and security policies), issue templates, CODEOWNERS, Dependabot, Vale, Crowdin, danger and the cloud Docker charts.

Requests to `twenty-icons` (used to fetch company logos) are **off by default**. Set `ALLOW_REQUESTS_TO_TWENTY_ICONS=true` in the server environment to turn them back on.

The development seeder only creates a single structural workspace and admin user (configured through `SEED_WORKSPACE_NAME`, `SEED_ADMIN_EMAIL` and `SEED_ADMIN_PASSWORD`); it does not seed demo data.

## Stack

Nx / Yarn 4 monorepo:

- `twenty-server`: NestJS, TypeORM, PostgreSQL, Redis, GraphQL, BullMQ
- `twenty-front`: React 18, Jotai, Linaria, Lingui, Vite
- `twenty-ui`, `twenty-shared`, `twenty-emails`: shared UI components, isomorphic types/utilities, e-mail templates
- `twenty-sdk`, `twenty-client-sdk`, `twenty-front-component-renderer`: application SDK, CLI and runtime
- `twenty-docker`: Docker image and `docker-compose.yml` for self-hosting

## Running in development

Prerequisites: Node 24 (see `.nvmrc`), Yarn 4 via Corepack, PostgreSQL and Redis.

```bash
nvm install && nvm use              # Node 24
corepack enable
yarn install
```

Start PostgreSQL and Redis, either your own instances or with the helper script (it also initializes the database):

```bash
bash packages/twenty-utils/setup-dev-env.sh
```

Create the environment files from the examples and fill them in:

```bash
cp packages/twenty-server/.env.example packages/twenty-server/.env
cp packages/twenty-front/.env.example packages/twenty-front/.env
```

At minimum, check `PG_DATABASE_URL`, `REDIS_URL`, `APP_SECRET` and the `SEED_*` variables in the server `.env`. The front listens on port 3001 unless `REACT_APP_PORT` is set; to run it on 3002, set `REACT_APP_PORT=3002` in the front `.env` and `FRONTEND_URL=http://localhost:3002` in the server `.env`.

Reset the database and seed the development workspace:

```bash
npx nx database:reset twenty-server
```

Start everything:

```bash
yarn start
```

This runs the server on http://localhost:3000, the front on the port configured above (3002 in the setup described here) and the background worker.

See [`AGENTS.md`](AGENTS.md) for the day-to-day commands (tests, lint, typecheck, GraphQL code generation, upgrade commands) and the repository conventions.

## Self-hosting

`packages/twenty-docker` contains the Dockerfile, `docker-compose.yml` and `.env.example` used to run the server, worker, PostgreSQL and Redis in containers.

## License

Twenty is mostly licensed under the GNU Affero General Public License v3, with some packages under MIT; see [`LICENSE`](LICENSE) for the exact terms. This fork keeps those licenses and the upstream copyright. Credit for the product goes to the Twenty team and contributors at https://github.com/twentyhq/twenty.
