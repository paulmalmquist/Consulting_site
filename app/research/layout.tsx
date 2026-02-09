import type { Metadata } from 'next';
import type { ReactNode } from 'react';

export const metadata: Metadata = {
  title: {
    default: 'Research',
    template: '%s | Research'
  },
  description: 'Clear frameworks for building internal execution without vendor dependency.',
  openGraph: {
    title: 'Research | NoVendor',
    description: 'Clear frameworks for building internal execution without vendor dependency.',
    type: 'website'
  }
};

export default function ResearchLayout({ children }: { children: ReactNode }) {
  return children;
}
