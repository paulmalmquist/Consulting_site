import type { ReactNode } from 'react';
import { IBM_Plex_Mono, Inter } from 'next/font/google';
import { LayoutShell } from '../components/layout/LayoutShell';
import './globals.css';
import { defaultMetadata } from './metadata';

export const metadata = defaultMetadata;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const plexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  display: 'swap',
  weight: ['400', '500']
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${plexMono.variable}`}>
      <body className="font-sans antialiased subpixel-antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
