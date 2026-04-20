// app/layout.tsx
import type { Metadata, Viewport } from 'next';
import { Playfair_Display } from 'next/font/google';
import './globals.css';
import Providers from '@/components/Provider';

/* ── Fonts ──────────────────────────────────────────────────────
   Self-hosted via next/font. The CSS variable is applied to
   <html> so every child layout/page can consume it as
   var(--font-heading) — matching what globals.css already expects.
────────────────────────────────────────────────────────────────── */
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-heading',   // matches the CSS var in globals.css
  display: 'swap',
});

/* ── Metadata ───────────────────────────────────────────────────── */
export const metadata: Metadata = {
  title: {
    default: 'BuildMax | Strategic Real Estate Investments',
    template: '%s | BuildMax',
  },
  description:
    'BuildMax partners with discerning investors to acquire, develop, and manage premium properties across key markets.',
  openGraph: {
    type: 'website',
    siteName: 'BuildMax',
  },
};

export const viewport: Viewport = {
  themeColor: '#0d3b66',
  width: 'device-width',
  initialScale: 1,
};

/* ── Layout ─────────────────────────────────────────────────────── */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // Apply the font CSS variable to <html> so all nested layouts inherit it
    <html lang="en" className={playfair.variable}>
      <body>
        {/*
          Providers goes here at the root so its context (query client,
          theme, auth, etc.) is available to every route — including any
          future routes outside (dashboard) like /login or /api/auth.
        */}
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}