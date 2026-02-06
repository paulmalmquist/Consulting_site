import { getAllCaseStudies, getAllDocs, getAllInsights } from '../lib/content';

export default function sitemap() {
  const baseUrl = 'https://{{DOMAIN}}';
  const staticRoutes = ['', '/capabilities', '/services', '/method', '/industries', '/proof', '/demo', '/insights', '/docs', '/about', '/contact', '/legal'];

  const dynamicRoutes = [
    ...getAllInsights().map((post) => `/insights/${post.slug}`),
    ...getAllCaseStudies().map((study) => `/proof/${study.slug}`),
    ...getAllDocs().map((doc) => `/docs/${doc.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));
}
