# AI Readiness & Operations Consulting Site

A premium, dark-mode Next.js site for AI Readiness & Operations Redesign consulting. Content lives in `/content`, and the UI is built with reusable components.

## Quick start

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run start
```

## Content editing

All copy and structured data lives in `/content`.

- Pages: `content/pages/*.mdx`
- Insights: `content/insights/*.mdx`
- Case studies: `content/case_studies/*.mdx`
- KB objects: `content/kb_objects/*.json`
- Navigation: `content/navigation.json`
- Home and carousel data: `content/*.json`

### Homepage layout updates

The homepage section order and copy live in `content/homepage.json`. Reorder the `sections` array to change the flow, and edit each section's `title`, `subtitle`, `cards`, or `tiles` fields to adjust card copy without touching React components.

## Search index

A static index is stored at `public/search-index.json`. Update it with:

```bash
npm run build:search
```

## Deployment

### GitHub Pages (static export)

This repo ships a GitHub Actions workflow that builds a static export into `out/` and publishes it to GitHub Pages. The legacy root `index.html` has been moved to `legacy/` so only the Next.js output is deployed.

1. In **Settings → Pages**, set **Source** to **GitHub Actions**.
2. (Optional) If you are serving from `https://{user}.github.io/{repo}/`, set a repository variable named `NEXT_PUBLIC_BASE_PATH` to `/{repo}`.
3. Push to `main` to trigger the build and deploy.

Custom domains should keep `NEXT_PUBLIC_BASE_PATH` empty and place the `CNAME` file in `public/` (already included).

### Other platforms

- Vercel: push the repo and set the build command to `npm run build`.
- Netlify: use the Next.js runtime or run `npm run build` with the Next adapter.

Update placeholder values in content files (`{{CONSULTANT_NAME}}`, `{{EMAIL}}`, `{{CALENDLY_URL}}`, `{{DOMAIN}}`, `{{LINKEDIN_URL}}`) before deploying.

## Project structure

```
app/
  about/
  contact/
  demo/
  industries/
  insights/
  legal/
  method/
  proof/
  services/
  layout.tsx
  page.tsx
  sitemap.ts
components/
  content/
  demo/
  layout/
  search/
  ui/
content/
  case_studies/
  insights/
  kb_objects/
  pages/
  deliverables.json
  home.json
  method_diagrams.json
  navigation.json
  services.json
  workflows.json
lib/
public/
  search-index.json
scripts/
```

## Directory guide

- `app/`: Next.js app router pages, layouts, and route segments that compose the site.
- `components/`: Reusable UI building blocks grouped by domain (layout, content, demo, search, and shared UI).
- `content/`: MDX and JSON content sources that drive pages, navigation, and marketing data.
- `lib/`: Helper utilities and shared logic used across the app and components.
- `public/`: Static assets, including the generated search index and any static files served at the root.
- `scripts/`: One-off scripts used for tasks like generating the search index.
