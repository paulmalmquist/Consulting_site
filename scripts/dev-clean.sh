#!/usr/bin/env bash
set -euo pipefail

# Cleans common Next dev corruption (missing chunks / layout.css 404) and restarts dev.

pkill -f "next dev" >/dev/null 2>&1 || true
pkill -f "next-server" >/dev/null 2>&1 || true

rm -rf .next node_modules/.cache .turbo

exec npm run dev -- --hostname 127.0.0.1 --port 3000

