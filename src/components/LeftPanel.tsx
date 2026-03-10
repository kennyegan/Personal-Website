'use client';

import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { personalInfo } from '@/lib/personal-info';
import NovaChat from '@/components/NovaChat';

const navItems = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'research', label: 'Research' },
  { id: 'updates', label: 'Updates' },
  { id: 'contact', label: 'Contact' },
];

interface LeftPanelProps {
  activeSection: string;
}

export default function LeftPanel({ activeSection }: LeftPanelProps) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Top block: identity + nav */}
      <div>
        <h1 className="text-4xl font-bold text-slate-100 sm:text-5xl">
          <a href="/">{personalInfo.name}</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium text-accent">
          {personalInfo.title}
        </h2>
        <p className="mt-4 max-w-xs leading-normal text-slate-400">
          I build research-driven AI systems, software platforms, and ambitious
          technical experiments.
        </p>

        <nav className="mt-16 hidden lg:block" aria-label="In-page navigation">
          <ul className="space-y-4">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`group flex items-center gap-3 text-xs font-bold uppercase tracking-widest transition-colors ${
                    activeSection === item.id
                      ? 'text-slate-100'
                      : 'text-slate-400 hover:text-slate-200'
                  }`}
                >
                  <span
                    className={`block h-px transition-all ${
                      activeSection === item.id
                        ? 'w-16 bg-slate-100'
                        : 'w-8 bg-slate-400 group-hover:w-16 group-hover:bg-slate-200'
                    }`}
                  />
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Middle: Nova — flex-1 lets it fill the gap, grid places orb dead center */}
      <div className="hidden lg:flex flex-1 items-center justify-center">
        <NovaChat />
      </div>

      {/* Bottom: social links */}
      <ul className="flex items-center gap-5" aria-label="Social links">
        <li>
          <a
            href={personalInfo.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-slate-400 transition-colors hover:text-accent"
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
            className="text-slate-400 transition-colors hover:text-accent"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
        </li>
        <li>
          <a
            href={`mailto:${personalInfo.email}`}
            className="text-slate-400 transition-colors hover:text-accent"
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
              className="text-slate-400 transition-colors hover:text-accent"
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
