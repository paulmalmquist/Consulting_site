import type { Metadata } from 'next';

export const defaultMetadata: Metadata = {
  title: {
    default: 'Novendor',
    template: '%s | Novendor'
  },
  description:
    'We help operations leaders reduce system dependency with capability-first pilots, governance controls, and evidence-led cutovers.',
  metadataBase: new URL('https://{{DOMAIN}}'),
  openGraph: {
    title: 'Novendor',
    description: 'Reduce system dependency with controlled pilots and evidence-led cutovers.',
    type: 'website'
  },
  robots: {
    index: true,
    follow: true
  }
};
