import { StructuredSEOData } from '@/components/structured-seo-data';
import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/vendor/tooltip';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import './globals.css';

const textFont = Open_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'CarboxyDev',
  description:
    'Full-stack developer with strong UI/UX skills. Currently available for freelance and contract work. Experienced in React.js, Next.js, Node.js, and Tailwind CSS.',
  authors: [{ name: 'CarboxyDev', url: 'https://carboxy.dev' }],
  category: 'Personal Portfolio',
  keywords: [
    'CarboxyDev',
    'full-stack developer',
    'freelance web developer',
    'React developer',
    'Next.js developer',
    'UI/UX developer',
    'available for work',
    'open for freelance',
    'available developer',
  ],
  metadataBase: new URL('https://carboxy.dev'),
  openGraph: {
    title: 'CarboxyDev',
    description:
      'Currently open for work and contract projects. I build stunning full-stack web applications using React, Next.js, and Node.js.',
    url: 'https://carboxy.dev',
    siteName: 'CarboxyDev',
    images: [
      {
        url: 'https://carboxy.dev/logo.png',
        width: 1032,
        height: 1032,
        alt: 'CarboxyDev Logo',
      },
    ],
    locale: 'en-US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CarboxyDev',
    description:
      'Full-stack developer with a passion for clean UI and scalable backend. Currently open to work and remote opportunities.',
    images: ['https://carboxy.dev/logo.png'],
    creator: '@carboxydev',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          textFont.className,
          process.env.NODE_ENV == 'development' && 'debug-screens',
          'text-white antialiased'
        )}
      >
        <Toaster position="top-right" />
        <StructuredSEOData />
        <TooltipProvider>{children}</TooltipProvider>
        <Analytics />
      </body>
    </html>
  );
}
