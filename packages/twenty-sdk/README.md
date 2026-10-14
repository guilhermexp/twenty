<div align="center">
  <h1>Twenty SDK</h1>

<a href="https://www.npmjs.com/package/twenty-sdk"><img alt="NPM version" src="https://img.shields.io/npm/v/twenty-sdk.svg?style=for-the-badge&labelColor=000000"></a>
<a href="LICENSE"><img alt="License" src="https://img.shields.io/npm/l/next.svg?style=for-the-badge&labelColor=000000"></a>

</div>

A CLI and SDK to develop, build, and publish applications that extend Twenty CRM.

## Quick start

The recommended way to start is with [create-twenty-app](https://www.npmjs.com/package/create-twenty-app):

```bash
npx create-twenty-app@latest my-twenty-app
cd my-twenty-app
yarn twenty dev
```

## Documentation

Guides in this repository:

- [Logic function inputs](./docs/logic-function-inputs.md) — input schema inference, record-typed inputs, and the id contract

## Manual installation

If you are adding `twenty-sdk` to an existing project instead of using `create-twenty-app`:

```bash
yarn add twenty-sdk twenty-client-sdk
```

Then add a `twenty` script to your `package.json`:

```json
{
  "scripts": {
    "twenty": "twenty"
  }
}
```

Run `yarn twenty help` to see all available commands.

## Configuration

The CLI stores credentials per remote in `~/.twenty/config.json`. Run `yarn twenty remote:add` to configure a remote, or `yarn twenty remote:list` to see existing ones.

## Troubleshooting

- Auth errors: run `yarn twenty remote:add` to re-authenticate.
- Typings out of date: restart `yarn twenty dev` to refresh the client and types.
- Not seeing changes in dev: make sure dev mode is running (`yarn twenty dev`).

## Contributing

### Development setup

From the repository root:

```bash
yarn install
```

### Development mode

```bash
npx nx run twenty-sdk:dev
```

### Production build

```bash
npx nx run twenty-sdk:build
```

### Running the CLI locally

```bash
npx nx run twenty-sdk:start -- <command>
```
