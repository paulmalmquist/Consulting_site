import { getAllDocs, getAllResearchEntries } from '../lib/content';

export default function sitemap() {
  const baseUrl = 'https://{{DOMAIN}}';
  const staticRoutes = [
    '',
    '/shift',
    '/services',
    '/industries',
    '/docs',
    '/research',
    '/about',
    '/contact',
    '/legal'
  ];

  const dynamicRoutes = [
    ...getAllDocs().map((doc) => `/docs/${doc.slug}`),
    ...getAllResearchEntries().map((entry) => `/research/${entry.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));
}
