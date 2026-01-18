import type { ReactNode } from 'react';
import { Fraunces, Inter } from 'next/font/google';
import { LayoutShell } from '../components/layout/LayoutShell';
import './globals.css';
import { defaultMetadata } from './metadata';

export const metadata = defaultMetadata;

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap'
});

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-serif',
  display: 'swap'
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${fraunces.variable}`}>
      <body className="font-sans antialiased subpixel-antialiased">
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
