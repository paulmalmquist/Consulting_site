import type { ReactNode } from 'react';
import { IBM_Plex_Mono, Orbitron } from 'next/font/google';
import { LayoutShell } from '../components/layout/LayoutShell';
import './globals.css';
import { defaultMetadata } from './metadata';

export const metadata = defaultMetadata;

const orbitron = Orbitron({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  weight: ['400', '500', '600', '700']
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500']
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${orbitron.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased subpixel-antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
