#!/usr/bin/env bash
set -euo pipefail

script_dir="$(cd -- "$(dirname -- "${BASH_SOURCE[0]}")" && pwd)"
repo_root="$(cd -- "$script_dir/../../.." && pwd)"
compose_file="$repo_root/packages/twenty-docker/docker-compose.yml"
env_file="$repo_root/packages/twenty-docker/.env"
env_example="$repo_root/packages/twenty-docker/.env.example"

if ! command -v docker >/dev/null 2>&1; then
  echo "Error: docker is required" >&2
  exit 1
fi

if ! docker compose version >/dev/null 2>&1; then
  echo "Error: Docker Compose v2 is required" >&2
  exit 1
fi

if ! docker info >/dev/null 2>&1; then
  echo "Error: Docker is not running" >&2
  exit 1
fi

if [ ! -f "$env_file" ]; then
  cp "$env_example" "$env_file"
  echo "Created $env_file; review its values before production use."
fi

echo "Building the fork image from $repo_root"
docker compose --env-file "$env_file" -f "$compose_file" up -d --build

echo "Fork server is running at ${SERVER_URL:-http://localhost:3000}"
