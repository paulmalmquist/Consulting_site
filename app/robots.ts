export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/'
    },
    sitemap: 'https://{{DOMAIN}}/sitemap.xml'
  };
}
