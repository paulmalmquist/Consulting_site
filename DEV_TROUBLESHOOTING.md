# Dev Troubleshooting Notes

## Recurring issue: Next.js dev cache/chunk corruption

### Common symptoms
- Browser shows `ERR_CONNECTION_REFUSED` on `localhost:3000` or `127.0.0.1:3000`.
- Dev server logs show missing chunk/module errors like:
  - `Cannot find module './925.js'`
  - `TypeError: Cannot read properties of undefined (reading 'call')`
  - `ENOENT ... .next/server/vendor-chunks/...`
- HTML routes return `200` but static assets return `404`:
  - `/_next/static/css/app/layout.css?...`
  - `/_next/static/chunks/webpack.js?...`
  - `/_next/static/chunks/main-app.js?...`
- CSS request fails:
  - `GET /_next/static/css/app/layout.css?... 404`
  - sometimes `500` before returning to `404`.

### What usually causes it
- Stale or partially-written `.next` artifacts after interrupted runs, process crashes, or overlapping dev sessions.
- A previous `next dev` process still bound to port `3000` while files were changed.

## Recovery runbook (works reliably)

1. Stop any process listening on port `3000`:

```bash
lsof -iTCP:3000 -sTCP:LISTEN -n -P
kill <PID>
```

2. Remove stale Next build output:

```bash
find . -maxdepth 1 -type d \( -name '.next' -o -name '.next_stale_*' \) -exec rm -rf {} +
```

3. Start dev server:

```bash
npm run dev -- --hostname 0.0.0.0 --port 3000
```

4. Verify app and CSS endpoint:

```bash
curl -I http://127.0.0.1:3000/
curl -I "http://127.0.0.1:3000/_next/static/css/app/layout.css?v=test"
```

Note: the second command can return `404` with a fake querystring. For a true check, load `/` first and use the exact `layout.css?v=...` URL emitted in HTML.

### Verify emitted chunk URLs (not just CSS)

```bash
curl -s http://127.0.0.1:3000/ > /tmp/home-check.html
for p in \
  "$(rg -o '/_next/static/css/app/layout.css\?v=[0-9]+' /tmp/home-check.html | head -n1)" \
  "$(rg -o '/_next/static/chunks/webpack.js\?v=[0-9]+' /tmp/home-check.html | head -n1)" \
  "$(rg -o '/_next/static/chunks/main-app.js\?v=[0-9]+' /tmp/home-check.html | head -n1)"; do
  echo "$p -> $(curl -s -o /dev/null -w '%{http_code}' "http://127.0.0.1:3000$p")"
done
```

## Quick verify command block

```bash
curl -s http://127.0.0.1:3000/ > /tmp/home-check.html
URL=$(rg -o '/_next/static/css/app/layout.css\?v=[0-9]+' /tmp/home-check.html | head -n1)
echo "$URL"
curl -I "http://127.0.0.1:3000$URL"
```

## Prevention
- Avoid multiple `next dev` sessions at the same time.
- If the app is interrupted mid-compile, do a clean restart (remove `.next` and stale dirs) before debugging UI/CSS.
- When behavior looks inconsistent with code changes, verify the active process and rebuild output first.
- In `zsh`, avoid bare globs like `.next_stale_*` in commands; unmatched globs can error and skip cleanup.
