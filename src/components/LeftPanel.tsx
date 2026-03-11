'use client';

import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '@/lib/personal-info';
import NovaChat from '@/components/NovaChat';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'updates', label: 'Updates' },
  { id: 'experience', label: 'Experience' },
];

interface LeftPanelProps {
  activeSection: string;
}

export default function LeftPanel({ activeSection }: LeftPanelProps) {
  return (
    <div className="flex w-full flex-col gap-8 lg:min-h-[calc(100vh-12rem)]">
      <div className="relative">
        <div className="pointer-events-none absolute -left-24 top-2 h-64 w-64 rounded-full bg-accent-violet/[0.08] blur-[128px]" />
        <div className="pointer-events-none absolute left-20 top-14 h-52 w-52 rounded-full bg-accent-cyan/[0.07] blur-[112px]" />

        <h1 className="max-w-lg text-5xl font-semibold tracking-[-0.06em] text-text-primary sm:text-6xl xl:text-[4.9rem] xl:leading-[0.95]">
          <a href="/">{personalInfo.name}</a>
        </h1>
        <h2 className="mt-6 text-xl font-medium tracking-[-0.025em] text-accent-cyan">
          {personalInfo.title}
        </h2>
        <p className="mt-6 max-w-lg text-[1.02rem] leading-8 text-text-secondary">
          I build research-driven AI systems, embedded products, and technical
          software across full-stack tools, analytics, and mission-oriented
          engineering.
        </p>

        <nav className="mt-14 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group flex items-center gap-3 text-xs font-bold uppercase tracking-[0.24em] transition-colors duration-300 ${
                    activeSection === item.id
                      ? 'text-accent-cyan'
                      : 'text-text-secondary hover:text-text-primary'
                  }`}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      activeSection === item.id
                        ? 'w-16 bg-accent-cyan shadow-[0_0_16px_rgba(66,215,255,0.28)]'
                        : 'w-8 bg-border group-hover:w-16 group-hover:bg-text-primary'
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {personalInfo.ui.showNovaAssistant && (
        <div className="hidden lg:flex justify-center lg:pt-4">
          <div className="w-full max-w-[320px]">
            <NovaChat variant="desktop" />
          </div>
        </div>
      )}

      <ul
        className="flex items-center gap-5 lg:mt-auto lg:pt-8"
        aria-label="Social links"
      >
        <li>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent-cyan"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
        </li>
        <li>
          <a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary transition-colors hover:text-accent-cyan"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-text-secondary transition-colors hover:text-accent-cyan"
            aria-label="Email"
          >
            <Mail size={20} />
          </a>
        </li>
        {personalInfo.resume.url && (
          <li>
            <a
              href={personalInfo.resume.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary transition-colors hover:text-accent-cyan"
              aria-label="Resume"
            >
              <FileText size={20} />
            </a>
          </li>
        )}
      </ul>
    </div>
  );
}
