'use client';

import { motion } from 'framer-motion';
import { Crosshair } from 'lucide-react';
import {
  currentFocus,
  timelineItems,
  type TimelineCategory,
} from '@data/timeline';

const categoryStyles: Record<TimelineCategory, string> = {
  Research:
    'border-accent-cyan/20 bg-accent-cyan/[0.08] text-accent-cyan',
  Publication:
    'border-accent-violet/22 bg-accent-violet/[0.1] text-accent-violet',
  Career: 'border-border/80 bg-white/[0.03] text-text-primary',
  Product:
    'border-accent-cyan/16 bg-accent-cyan/[0.06] text-text-primary',
  Aerospace:
    'border-accent-violet/18 bg-accent-violet/[0.08] text-text-primary',
  Engineering: 'border-mint/20 bg-mint/[0.08] text-mint',
};

const revealTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};

function TimelineNode() {
  return (
    <span className="absolute left-3 top-6 -translate-x-1/2 md:left-[-2rem]">
      <span className="absolute inset-[-7px] rounded-full bg-accent-cyan/18 blur-[10px]" />
      <span className="relative block h-3.5 w-3.5 rounded-full border border-accent-cyan/40 bg-background/90">
        <span className="absolute inset-[3px] rounded-full bg-accent-cyan shadow-[0_0_14px_rgba(66,215,255,0.55)]" />
      </span>
    </span>
  );
}

export default function UpdatesSection() {
  return (
    <section id="updates" className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-text-primary">
          Updates
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={revealTransition}
        className="relative overflow-hidden rounded-[34px] border border-accent-violet/20 bg-surface/56 p-6 shadow-[0_30px_90px_rgba(2,8,23,0.28)] backdrop-blur-xl sm:p-8"
      >
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(122,92,255,0.16),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(66,215,255,0.08),transparent_34%)]" />
        <div className="pointer-events-none absolute right-0 top-0 h-36 w-36 rounded-full bg-accent-cyan/[0.06] blur-[80px]" />

        <div className="relative">
          <div className="flex items-start justify-between gap-6">
            <div>
              <span className="inline-flex items-center rounded-full border border-accent-cyan/16 bg-accent-cyan/[0.08] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-accent-cyan">
                {currentFocus.eyebrow}
              </span>
              <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em] text-text-primary sm:text-[2rem]">
                {currentFocus.title}
              </h3>
            </div>

            <span className="hidden h-11 w-11 items-center justify-center rounded-full border border-accent-violet/20 bg-background/40 text-accent-violet sm:flex">
              <Crosshair size={16} />
            </span>
          </div>

          <p className="mt-4 max-w-2xl text-[1.02rem] leading-8 text-text-primary/90">
            {currentFocus.summary}
          </p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {currentFocus.items.map((item) => (
              <div
                key={item}
                className="rounded-[22px] border border-border/70 bg-background/24 px-4 py-4 shadow-[0_18px_45px_rgba(2,8,23,0.14)]"
              >
                <div className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint shadow-[0_0_14px_rgba(34,230,184,0.35)]" />
                  <p className="text-sm leading-7 text-text-secondary">{item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      <div className="relative mt-10">
        <div className="pointer-events-none absolute bottom-4 left-3 top-4 w-px bg-gradient-to-b from-accent-violet/45 via-border/80 to-transparent md:left-[6.5rem]" />

        <div className="space-y-6">
          {timelineItems.map((item, index) => (
            <motion.article
              key={`${item.date}-${item.title}`}
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ ...revealTransition, delay: index * 0.04 }}
              className="relative md:grid md:grid-cols-[5.25rem_1fr] md:gap-8"
            >
              <div className="hidden pt-5 text-right md:block">
                <span className="text-[0.68rem] font-bold uppercase tracking-[0.24em] text-text-secondary">
                  {item.date}
                </span>
              </div>

              <div className="relative pl-8 md:pl-0">
                <TimelineNode />

                <div className="group rounded-[28px] border border-border/75 bg-surface/44 p-5 shadow-[0_24px_70px_rgba(2,8,23,0.18)] backdrop-blur-xl transition duration-300 hover:border-accent-cyan/18 hover:bg-surface/52 hover:shadow-[0_30px_80px_rgba(2,8,23,0.28)] sm:p-6">
                  <div className="flex flex-wrap items-center gap-3">
                    <span
                      className={`rounded-full border px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.18em] ${categoryStyles[item.category]}`}
                    >
                      {item.category}
                    </span>
                    <span className="text-[0.68rem] font-bold uppercase tracking-[0.22em] text-text-secondary md:hidden">
                      {item.date}
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-semibold tracking-[-0.025em] text-text-primary sm:text-[1.15rem]">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-text-secondary sm:text-[0.97rem]">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
