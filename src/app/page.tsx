'use client';

import { useState, useEffect, useCallback } from 'react';
import LeftPanel from '@/components/LeftPanel';

import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import ProjectsSection from '@/components/sections/ProjectsSection';
import ResearchSection from '@/components/sections/ResearchSection';
import UpdatesSection from '@/components/sections/UpdatesSection';
import ContactSection from '@/components/sections/ContactSection';

const sectionIds = [
  'about',
  'experience',
  'projects',
  'research',
  'updates',
  'contact',
];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '0px 0px -60% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const cards = (e.currentTarget as HTMLDivElement).querySelectorAll(
      '.spotlight-card'
    );
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      (card as HTMLElement).style.setProperty(
        '--mouse-x',
        `${e.clientX - rect.left}px`
      );
      (card as HTMLElement).style.setProperty(
        '--mouse-y',
        `${e.clientY - rect.top}px`
      );
    });
  }, []);

  return (
    <div
      className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0"
      onMouseMove={handleMouseMove}
    >
      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <LeftPanel activeSection={activeSection} />
        </header>

        <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
          <AboutSection />
          <ExperienceSection />
          <ProjectsSection />
          <ResearchSection />
          <UpdatesSection />
          <ContactSection />

          <footer className="pb-16 text-sm text-slate-400">
            <p>
              Built with{' '}
              <a
                href="https://nextjs.org"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-accent transition-colors"
              >
                Next.js
              </a>{' '}
              and{' '}
              <a
                href="https://tailwindcss.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-accent transition-colors"
              >
                Tailwind CSS
              </a>
              . Deployed on{' '}
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-200 hover:text-accent transition-colors"
              >
                Vercel
              </a>
              .
            </p>
          </footer>
        </main>
      </div>

    </div>
  );
}
