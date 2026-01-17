import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'AI Readiness & Operations Redesign',
    template: '%s | AI Readiness & Operations'
  },
  description: 'AI readiness consulting for operations leaders: workflow compression, governance, and human-in-the-loop delivery.',
  metadataBase: new URL('https://{{DOMAIN}}'),
  openGraph: {
    title: 'AI Readiness & Operations Redesign',
    description: 'Operational clarity and AI readiness for executives.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};
