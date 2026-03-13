'use client';

import { useState } from 'react';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { dmMono, sora } from '@/lib/fonts';
import {
  currentFocus,
  timelineItems,
  type TimelineCategory,
  type TimelineItem,
} from '@data/timeline';

const badgeStyles: Record<
  TimelineCategory,
  { label: string; className: string }
> = {
  Research: {
    label: 'RESEARCH',
    className: 'border-[#38bdf8]/40 bg-[#38bdf8]/10 text-[#38bdf8]',
  },
  Publication: {
    label: 'PUBLICATION',
    className: 'border-[#34d399]/40 bg-[#34d399]/10 text-[#34d399]',
  },
  Career: {
    label: 'CAREER',
    className: 'border-[#fbbf24]/40 bg-[#fbbf24]/10 text-[#fbbf24]',
  },
  Project: {
    label: 'PROJECT',
    className: 'border-[#a78bfa]/40 bg-[#a78bfa]/10 text-[#a78bfa]',
  },
  Milestone: {
    label: 'MILESTONE',
    className: 'border-[#fb7185]/40 bg-[#fb7185]/10 text-[#fb7185]',
  },
  Stealth: {
    label: '🔒 STEALTH',
    className: 'border-[#475569]/55 bg-[#475569]/18 text-[#cbd5e1]',
  },
  Aerospace: {
    label: 'AEROSPACE',
    className: 'border-[#818cf8]/40 bg-[#818cf8]/10 text-[#818cf8]',
  },
  Award: {
    label: 'AWARD',
    className: 'border-[#f59e0b]/40 bg-[#f59e0b]/10 text-[#fbbf24]',
  },
  Founder: {
    label: 'FOUNDER',
    className: 'border-[#22c55e]/35 bg-[#22c55e]/10 text-[#86efac]',
  },
};

const sortedTimelineItems = [...timelineItems].sort((a, b) => {
  const yearDelta = Number(b.date) - Number(a.date);
  if (yearDelta !== 0) {
    return yearDelta;
  }

  return a.order - b.order;
});

const yearGroups = Array.from(
  new Set(sortedTimelineItems.map((item) => item.date))
).map((year) => ({
  year,
  items: sortedTimelineItems.filter((item) => item.date === year),
}));

function isExternalHref(href: string) {
  return href.startsWith('http://') || href.startsWith('https://');
}

function TimelineNode({ pulse }: { pulse?: boolean }) {
  return (
    <span className="pointer-events-none absolute left-[11px] top-8 -translate-x-1/2">
      <span
        className={`relative block h-3.5 w-3.5 rounded-full border border-[#38bdf8]/45 bg-background ${
          pulse ? 'updates-node-pulse' : ''
        }`}
      >
        <span className="absolute inset-[3px] rounded-full bg-[#38bdf8]" />
      </span>
    </span>
  );
}

function CurrentFocusCard() {
  return (
    <div className="relative overflow-hidden rounded-[30px] border border-white/[0.07] bg-[rgba(8,16,30,0.8)] px-5 py-6 shadow-[0_20px_56px_rgba(2,8,23,0.24)] backdrop-blur-[12px] sm:px-7 sm:py-7">
      <span className="updates-now-rail pointer-events-none absolute bottom-7 left-0 top-7 w-px rounded-full bg-[#38bdf8]" />
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.02),transparent_45%)]" />

      <div className="relative">
        <div className="flex flex-wrap items-center gap-3">
          <span
            className={`${dmMono.className} inline-flex rounded-full border border-[#38bdf8]/30 bg-[#38bdf8]/10 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.28em] text-[#38bdf8]`}
          >
            {currentFocus.eyebrow}
          </span>
          <span
            className={`${dmMono.className} inline-flex rounded-full border border-[#818cf8]/20 bg-[#818cf8]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-[#818cf8]`}
          >
            Current work
          </span>
        </div>

        <h3
          className={`${sora.className} mt-4 text-[1.85rem] font-semibold tracking-[-0.045em] text-[#f5fbff] sm:text-[2.1rem]`}
        >
          {currentFocus.title}
        </h3>

        <p className="mt-4 max-w-3xl text-[14px] leading-7 text-[#c6d4e8] sm:text-[15px]">
          {currentFocus.summary}
        </p>

        <ul className="mt-6 grid gap-3 md:grid-cols-3">
          {currentFocus.items.map((item) => (
            <li
              key={item}
              className="rounded-[18px] border border-white/[0.07] bg-white/[0.03] px-4 py-4 text-[14px] leading-6 text-[#dbe7f6]"
            >
              <span className="mb-3 block h-px w-10 bg-gradient-to-r from-[#38bdf8] to-transparent" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function UpdateCard({
  item,
  expanded,
  onToggle,
}: {
  item: TimelineItem;
  expanded: boolean;
  onToggle: () => void;
}) {
  const badge = badgeStyles[item.category];

  return (
    <article className="relative pl-8">
      <TimelineNode pulse={item.pulseNode} />

      <div className="group relative overflow-hidden rounded-[24px] border border-white/[0.07] bg-[rgba(8,16,30,0.78)] shadow-[0_14px_36px_rgba(2,8,23,0.2)] transition duration-200 hover:border-[#38bdf8]/22">
        <span className="pointer-events-none absolute bottom-5 left-0 top-5 w-px bg-[#38bdf8]/32 transition-all duration-300 group-hover:bg-[#38bdf8]/72" />

        <button
          type="button"
          onClick={onToggle}
          className="block w-full px-5 py-5 text-left"
          aria-expanded={expanded}
        >
          <div className="flex flex-wrap items-center gap-3">
            <span
              className={`${dmMono.className} inline-flex rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] ${badge.className}`}
            >
              {badge.label}
            </span>
            <span
              className={`${dmMono.className} text-[10px] uppercase tracking-[0.24em] text-[#818cf8]`}
            >
              {item.date}
            </span>
            <span
              className={`${dmMono.className} ml-auto inline-flex items-center gap-2 text-[10px] uppercase tracking-[0.24em] text-[#73839a]`}
            >
              {expanded ? 'Less' : 'More'}
              <ChevronDown
                size={13}
                className={`transition-transform duration-300 ${
                  expanded ? 'rotate-180' : ''
                }`}
              />
            </span>
          </div>

          <h3
            className={`${sora.className} mt-4 max-w-2xl text-[16px] font-semibold leading-6 text-[#f4f8ff] sm:text-[17px]`}
          >
            {item.title}
          </h3>

          <p className="mt-3 max-w-[44rem] text-[14px] leading-6 text-[#9fb0c3]">
            {item.description}
          </p>
        </button>

        <div
          className={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
            expanded
              ? 'mb-5 mt-1 grid-rows-[1fr] opacity-100'
              : 'mb-0 mt-0 grid-rows-[0fr] opacity-0'
          }`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-white/[0.06] pt-4">
              <p className="max-w-[44rem] text-[14px] leading-6 text-[#cad7e8]">
                {item.details}
              </p>

              {item.link && (
                <div className="mt-4">
                  <a
                    href={item.link.href}
                    target={isExternalHref(item.link.href) ? '_blank' : undefined}
                    rel={isExternalHref(item.link.href) ? 'noopener noreferrer' : undefined}
                    onClick={(event) => event.stopPropagation()}
                    className={`${dmMono.className} inline-flex items-center gap-2 rounded-full border border-[#38bdf8]/35 px-3 py-2 text-[11px] font-medium text-[#38bdf8] transition duration-300 hover:bg-[#38bdf8]/10`}
                  >
                    {item.link.label}
                    <ArrowUpRight size={13} />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

function YearSection({
  year,
  items,
  open,
  onToggle,
  expandedCards,
  onToggleCard,
}: {
  year: string;
  items: TimelineItem[];
  open: boolean;
  onToggle: () => void;
  expandedCards: Record<string, boolean>;
  onToggleCard: (id: string) => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        onClick={onToggle}
        className={`flex w-full items-center gap-4 rounded-[18px] border border-white/[0.05] bg-white/[0.015] px-3 py-3 text-left transition duration-300 hover:border-[#38bdf8]/14 hover:bg-white/[0.025] ${
          open ? 'border-[#38bdf8]/12 bg-white/[0.02]' : ''
        }`}
        aria-expanded={open}
        aria-controls={`timeline-year-${year}`}
      >
        <span
          className={`${dmMono.className} text-[12px] font-medium uppercase tracking-[0.28em] text-[#818cf8]`}
        >
          {year}
        </span>
        <span className="h-px flex-1 bg-gradient-to-r from-[#818cf8]/35 via-white/10 to-transparent" />
        <span
          className={`${dmMono.className} inline-flex min-w-8 items-center justify-center rounded-full border border-white/[0.07] bg-white/[0.03] px-2 py-1 text-[10px] uppercase tracking-[0.22em] text-[#94a3b8]`}
        >
          {items.length}
        </span>
        <ChevronDown
          size={15}
          className={`text-[#94a3b8] transition-transform duration-300 ${
            open ? 'rotate-180' : ''
          }`}
        />
      </button>

      <div
        id={`timeline-year-${year}`}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-300 ease-out ${
          open
            ? 'mt-4 grid-rows-[1fr] opacity-100'
            : 'mt-1 grid-rows-[0fr] opacity-70'
        }`}
      >
        <div className="overflow-hidden">
          <div className="space-y-4 pb-1">
            {items.map((item) => (
              <UpdateCard
                key={item.id}
                item={item}
                expanded={!!expandedCards[item.id]}
                onToggle={() => onToggleCard(item.id)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UpdatesSection() {
  const [openYears, setOpenYears] = useState<Record<string, boolean>>(() =>
    Object.fromEntries(yearGroups.map(({ year }) => [year, false]))
  );
  const [expandedCards, setExpandedCards] = useState<Record<string, boolean>>(
    {}
  );

  const toggleYear = (year: string) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  const toggleCard = (id: string) => {
    setExpandedCards((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section id="updates" className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2
          className={`${dmMono.className} text-[0.68rem] font-medium uppercase tracking-[0.28em] text-text-primary`}
        >
          Updates
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
      </div>

      <div className="relative">
        <CurrentFocusCard />

        <div className="relative mt-8 rounded-[30px] border border-white/[0.07] bg-[rgba(6,14,26,0.64)] p-4 shadow-[0_20px_56px_rgba(2,8,23,0.24)] backdrop-blur-[12px] sm:p-5">
          <span className="pointer-events-none absolute inset-0 rounded-[30px] bg-[linear-gradient(180deg,rgba(255,255,255,0.015),transparent_38%),radial-gradient(circle_at_top_right,rgba(56,189,248,0.05),transparent_24%)]" />
          <div className="pointer-events-none absolute bottom-5 left-[15px] top-5 w-px bg-[#38bdf8]/72 shadow-[0_0_8px_#38bdf8]" />

          <div className="relative space-y-4">
            {yearGroups.map(({ year, items }) => (
              <YearSection
                key={year}
                year={year}
                items={items}
                open={!!openYears[year]}
                onToggle={() => toggleYear(year)}
                expandedCards={expandedCards}
                onToggleCard={toggleCard}
              />
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .updates-now-rail {
          box-shadow: 0 0 16px rgba(56, 189, 248, 0.65);
          animation: updates-now-pulse 3.2s ease-in-out infinite;
        }

        .updates-node-pulse {
          animation: updates-node-pulse 2.8s ease-in-out infinite;
        }

        @keyframes updates-now-pulse {
          0%,
          100% {
            opacity: 0.56;
            box-shadow: 0 0 10px rgba(56, 189, 248, 0.36);
          }

          50% {
            opacity: 1;
            box-shadow: 0 0 18px rgba(56, 189, 248, 0.8);
          }
        }

        @keyframes updates-node-pulse {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(56, 189, 248, 0.2);
          }

          55% {
            box-shadow: 0 0 0 8px rgba(56, 189, 248, 0);
          }
        }
      `}</style>
    </section>
  );
}
