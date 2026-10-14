# Deploy the fork on Podman

These files provide a Podman Compose deployment that builds the image from this
repository.

## How to use

1. Copy `.env.example` to `.env`.
2. Set `POSTGRES_PASSWORD`, `SERVER_URL`, and `APP_SECRET`.
3. Build and start the fork with `podman-compose up -d --build`.

If you need to stop the fork, run `podman-compose down`.

### Install systemd service (optional)

To install a systemd service, edit `twenty.service` and change these variables:

```ini
WorkingDirectory=/opt/apps/twenty
EnvironmentFile=/opt/apps/twenty/.env
```

`WorkingDirectory` should point to the directory containing
`podman-compose.yml`. `EnvironmentFile` should point to its `.env` file.

Run `./install-systemd-user-service` to install and start the service for the
current user. If the stack is already running, stop it first with
`podman-compose down`.

## Compatibility

These files should be compatible with Podman 4.3+ and Podman Compose 1.0+.
