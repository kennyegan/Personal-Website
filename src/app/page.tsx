'use client';

import { useEffect, useState } from 'react';
import LeftPanel from '@/components/LeftPanel';
import NovaChat from '@/components/NovaChat';
import SpaceEnvironment from '@/components/space/SpaceEnvironment';
import { personalInfo } from '@/lib/personal-info';

import AboutSection from '@/components/sections/AboutSection';
import ExperienceSection from '@/components/sections/ExperienceSection';
import UpdatesSection from '@/components/sections/UpdatesSection';
import ScrollProgress from '@/components/ScrollProgress';
import ScrollToTop from '@/components/ScrollToTop';

const sectionIds = ['about', 'updates', 'experience'];

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => section instanceof HTMLElement);

    if (sections.length === 0) return;

    let frame = 0;

    // Use scroll position instead of intersection events so the final section
    // still highlights correctly when the page approaches the footer.
    const updateActiveSection = () => {
      frame = 0;

      const viewportAnchor = window.scrollY + window.innerHeight * 0.34;
      const isNearPageBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 32;

      if (isNearPageBottom) {
        setActiveSection(sections.at(-1)?.id ?? sectionIds[0]);
        return;
      }

      let nextActiveSection = sections[0].id;

      for (const section of sections) {
        if (section.offsetTop <= viewportAnchor) {
          nextActiveSection = section.id;
        }
      }

      setActiveSection(nextActiveSection);
    };

    const requestSectionUpdate = () => {
      if (frame) return;

      frame = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();

    window.addEventListener('scroll', requestSectionUpdate, { passive: true });
    window.addEventListener('resize', requestSectionUpdate);

    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener('scroll', requestSectionUpdate);
      window.removeEventListener('resize', requestSectionUpdate);
    };
  }, []);

  return (
    <>
      <ScrollProgress />
      <ScrollToTop />
      <SpaceEnvironment />

      <div className="relative z-10 mx-auto min-h-screen max-w-screen-xl px-6 py-10 md:px-12 md:py-16 lg:px-20 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-14">
          <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[47%] lg:flex-col lg:py-24">
            <LeftPanel activeSection={activeSection} />
          </header>

          <main
            id="content"
            className="pt-16 lg:w-[53%] lg:border-l lg:border-border/45 lg:py-24 lg:pl-10 xl:pl-14"
          >
            {personalInfo.ui.showNovaAssistant && (
              <div className="mb-16 lg:hidden">
                <NovaChat variant="mobile" />
              </div>
            )}

            <AboutSection />
            <UpdatesSection />
            <ExperienceSection />

            <footer className="pb-16 text-sm text-text-secondary">
              <p>
                Built with{' '}
                <a
                  href="https://nextjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-text-primary transition-colors hover:text-accent-cyan after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-cyan after:transition-all after:duration-300 hover:after:w-full"
                >
                  Next.js
                </a>{' '}
                and{' '}
                <a
                  href="https://tailwindcss.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-text-primary transition-colors hover:text-accent-cyan after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-cyan after:transition-all after:duration-300 hover:after:w-full"
                >
                  Tailwind CSS
                </a>
                . Deployed on{' '}
                <a
                  href="https://vercel.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative text-text-primary transition-colors hover:text-accent-cyan after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-accent-cyan after:transition-all after:duration-300 hover:after:w-full"
                >
                  Vercel
                </a>
                .
              </p>
            </footer>
          </main>
        </div>
      </div>
    </>
  );
}
