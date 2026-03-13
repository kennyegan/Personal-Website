'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { dmMono, sora } from '@/lib/fonts';
import { experience } from '@/lib/personal-info';

function ExperienceCard({
  role,
  open,
  onToggle,
}: {
  role: (typeof experience)[number];
  open: boolean;
  onToggle: () => void;
}) {
  return (
    <article
      className={`group relative overflow-hidden rounded-[30px] border bg-[rgba(7,15,28,0.78)] shadow-[0_18px_46px_rgba(2,8,23,0.2)] backdrop-blur-[8px] transition-[border-color,background-color,box-shadow] duration-300 ${
        open
          ? 'border-[#42d7ff]/18 bg-[rgba(8,16,30,0.88)] shadow-[0_22px_58px_rgba(2,8,23,0.28)]'
          : 'border-white/[0.06] hover:border-white/[0.1]'
      }`}
    >
      <span className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.018),transparent_32%),radial-gradient(circle_at_top_right,rgba(66,215,255,0.045),transparent_20%)]" />
      <span
        className={`pointer-events-none absolute bottom-6 left-0 top-6 w-px rounded-full bg-[#42d7ff] transition-all duration-300 ${
          open ? 'opacity-100 shadow-[0_0_16px_rgba(66,215,255,0.45)]' : 'opacity-30'
        }`}
      />

      <button
        type="button"
        onClick={onToggle}
        className="relative block w-full px-5 py-5 text-left sm:px-6 sm:py-6"
        aria-expanded={open}
      >
        <div>
          <div className="flex flex-wrap items-start justify-between gap-3">
            <p
              className={`${dmMono.className} text-[10px] font-medium uppercase tracking-[0.32em] text-[#8d99ff] sm:text-[11px]`}
            >
              {role.duration}
            </p>
            <span
              className={`${dmMono.className} inline-flex items-center gap-2 rounded-full border px-3 py-2 text-[10px] uppercase tracking-[0.28em] transition duration-300 ${
                open
                  ? 'border-[#42d7ff]/18 bg-[#42d7ff]/[0.08] text-[#eef5ff]'
                  : 'border-white/[0.07] bg-white/[0.02] text-text-secondary'
              }`}
            >
              {open ? 'Close' : 'Open'}
              <span
                className={`inline-flex h-5 w-5 items-center justify-center rounded-full border transition duration-300 ${
                  open
                    ? 'border-[#42d7ff]/20 bg-[#42d7ff]/[0.12] text-[#42d7ff]'
                    : 'border-white/[0.08] bg-white/[0.03] text-text-secondary'
                }`}
              >
                <ChevronDown
                  size={11}
                  className={`transition-transform duration-300 ${
                    open ? 'rotate-180' : ''
                  }`}
                />
              </span>
            </span>
          </div>

          <div className="mt-4 min-w-0">
            <h3
              className={`${sora.className} max-w-[38rem] text-[1.1rem] font-semibold leading-[1.18] tracking-[-0.045em] text-[#eef5ff] sm:text-[1.24rem]`}
            >
              {role.title}
            </h3>
            <p className="mt-3 text-[0.96rem] leading-6 text-[#42d7ff]">
              {role.company}
            </p>
            {role.companyDetail && (
              <p className="mt-1 text-[13px] leading-5 text-text-secondary/72">
                {role.companyDetail}
              </p>
            )}
            <p className="mt-2 text-xs text-text-secondary/70">{role.location}</p>

            <div className="relative mt-5">
              <p
                className={`max-w-[46rem] overflow-hidden text-[14px] leading-7 text-[#a9b8cb] transition-[max-height,color] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                  open ? 'max-h-72 text-[#c9d6e6]' : 'max-h-[3.75rem]'
                }`}
              >
                {role.description}
              </p>
              {!open && (
                <span className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-[rgba(8,16,30,0.96)] to-transparent" />
              )}
            </div>
          </div>
        </div>
      </button>

      <div
        className={`grid overflow-hidden px-5 transition-[grid-template-rows,opacity,margin] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] sm:px-6 ${
          open
            ? 'mb-6 mt-0 grid-rows-[1fr] opacity-100'
            : 'mb-0 mt-0 grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/[0.06] pt-4">
            <ul className="flex flex-wrap gap-2.5">
              {role.skills.map((skill) => (
                <li
                  key={skill}
                  className="rounded-full border border-[#22e6b8]/14 bg-[#22e6b8]/[0.05] px-3 py-1.5 text-xs font-medium text-[#8cf5df]"
                >
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const [openIndex, setOpenIndex] = useState(-1);

  return (
    <section id="experience" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2
          className={`${dmMono.className} text-[0.68rem] font-medium uppercase tracking-[0.28em] text-text-primary`}
        >
          Experience
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
      </div>

      <div className="space-y-4">
        {experience.map((role, index) => (
          <ExperienceCard
            key={`${role.title}-${role.company}`}
            role={role}
            open={openIndex === index}
            onToggle={() =>
              setOpenIndex((current) => (current === index ? -1 : index))
            }
          />
        ))}
      </div>
    </section>
  );
}
