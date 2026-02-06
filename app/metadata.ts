import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Capability-First Operations Modernization',
    template: '%s | Capability-First Modernization'
  },
  description: 'We help operations leaders reduce system dependency with capability-first pilots, governance controls, and evidence-led cutovers.',
  metadataBase: new URL('https://{{DOMAIN}}'),
  openGraph: {
    title: 'Capability-First Operations Modernization',
    description: 'Reduce system dependency with controlled pilots and evidence-led cutovers.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};
