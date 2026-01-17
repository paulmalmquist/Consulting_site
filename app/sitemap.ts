import { getAllCaseStudies, getAllInsights } from '../lib/content';

export default function sitemap() {
  const baseUrl = 'https://{{DOMAIN}}';
  const staticRoutes = ['', '/services', '/method', '/industries', '/proof', '/demo', '/insights', '/about', '/contact', '/legal'];

  const dynamicRoutes = [
    ...getAllInsights().map((post) => `/insights/${post.slug}`),
    ...getAllCaseStudies().map((study) => `/proof/${study.slug}`)
  ];

  return [...staticRoutes, ...dynamicRoutes].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString()
  }));
}
