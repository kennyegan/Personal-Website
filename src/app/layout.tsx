import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/styles/globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Kenny Egan - AI Researcher & Software Engineer',
    template: '%s | Kenny Egan'
  },
  description: 'AI Researcher, Software Engineer, and Startup Founder passionate about building the future through innovative technology solutions. Explore my projects, research publications, and professional journey.',
  keywords: [
    'AI Researcher',
    'Software Engineer',
    'Machine Learning',
    'Artificial Intelligence',
    'Startup Founder',
    'Full Stack Developer',
    'React',
    'Python',
    'TypeScript',
    'Next.js'
  ],
  authors: [{ name: 'Kenny Egan' }],
  creator: 'Kenny Egan',
  publisher: 'Kenny Egan',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://kenny.dev',//TODO: change this to the actual domain
    title: 'Kenny Egan - AI Researcher & Software Engineer',
    description: 'AI Researcher, Software Engineer, and Startup Founder passionate about building the future through innovative technology solutions.',
    siteName: 'Kenny Egan Portfolio',
    images: [
      {
        url: '/images/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Kenny Chen - AI Researcher & Software Engineer',
      },
    ],
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
  verification: {
    google: 'your-google-verification-code',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-dark-950 text-white antialiased`}>
        <div className="relative min-h-screen flex flex-col">
          {/* Background Effects */}
          <div className="fixed inset-0 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950" />
          <div className="fixed inset-0 bg-grid opacity-10" />
          <div className="fixed inset-0 bg-gradient-to-r from-transparent via-neon-blue-500/5 to-transparent" />
          
          {/* Navigation */}
          <Navbar />
          
          {/* Main Content */}
          <main className="relative flex-1 pt-16">
            {children}
          </main>
          
          {/* Footer */}
          <Footer />
          
          {/* Floating Elements */}
          <div className="fixed top-1/4 left-10 w-2 h-2 bg-neon-blue-500 rounded-full animate-float opacity-60 hidden lg:block" />
          <div className="fixed top-1/2 right-10 w-3 h-3 bg-cyber-purple-500 rounded-full animate-float opacity-40 hidden lg:block" style={{ animationDelay: '2s' }} />
          <div className="fixed bottom-1/4 left-20 w-1 h-1 bg-electric-green-500 rounded-full animate-float opacity-80 hidden lg:block" style={{ animationDelay: '4s' }} />
        </div>
      </body>
    </html>
  );
}
