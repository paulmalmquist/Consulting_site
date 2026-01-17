import type { ReactNode } from 'react';
import { LayoutShell } from '../components/layout/LayoutShell';
import './globals.css';
import { defaultMetadata } from './metadata';

export const metadata = defaultMetadata;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
