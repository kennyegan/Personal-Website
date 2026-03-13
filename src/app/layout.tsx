import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { personalInfo } from '@/lib/personal-info';
import '@/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(personalInfo.siteUrl),
  title: {
    default: `${personalInfo.name} - AI Researcher & Software Engineer`,
    template: `%s | ${personalInfo.name}`,
  },
  description:
    'AI Researcher and Software Engineer building research-driven AI systems, software platforms, and ambitious technical experiments.',
  keywords: [
    'AI Researcher',
    'Software Engineer',
    'Machine Learning',
    'Artificial Intelligence',
    'Full Stack Developer',
    'Python',
    'TypeScript',
    'Next.js',
  ],
  authors: [{ name: personalInfo.name }],
  creator: personalInfo.name,
  publisher: personalInfo.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: personalInfo.siteUrl,
    title: `${personalInfo.name} - AI Researcher & Software Engineer`,
    description:
      'AI Researcher and Software Engineer building research-driven AI systems, software platforms, and ambitious technical experiments.',
    siteName: personalInfo.name,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
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
        className={`${inter.className} relative min-h-screen bg-background text-text-secondary antialiased`}
      >
        <div className="min-h-screen">{children}</div>
      </body>
    </html>
  );
}
