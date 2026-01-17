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

## Search index

A static index is stored at `public/search-index.json`. Update it with:

```bash
npm run build:search
```

## Deployment

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
