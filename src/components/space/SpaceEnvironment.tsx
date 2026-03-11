'use client';

import { motion, useReducedMotion } from 'framer-motion';

function OrbitalMarker({ animated }: { animated: boolean }) {
  return (
    <div
      className={`space-orbit__marker ${animated ? 'space-orbit__marker--counter' : ''}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 92 28" className="h-6 w-[4.8rem] sm:h-7 sm:w-[5.5rem]" fill="none">
        <defs>
          <linearGradient id="orbital-trail" x1="0" y1="14" x2="92" y2="14" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="rgb(var(--color-accent-cyan) / 0)" />
            <stop offset="42%" stopColor="rgb(var(--color-accent-cyan) / 0.22)" />
            <stop offset="100%" stopColor="rgb(var(--color-accent-violet) / 0.08)" />
          </linearGradient>
        </defs>
        <path
          d="M4 14H32"
          stroke="url(#orbital-trail)"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
        <path
          d="M54 14H82"
          stroke="rgb(var(--color-accent-violet) / 0.26)"
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeDasharray="3.5 6"
        />
        <path
          d="M43 8.5L48.5 14L43 19.5L37.5 14L43 8.5Z"
          fill="rgb(var(--color-text-primary))"
          fillOpacity="0.96"
        />
        <circle
          cx="43"
          cy="14"
          r="8"
          stroke="rgb(var(--color-accent-cyan) / 0.24)"
          strokeWidth="1"
        />
        <circle
          className={`space-orbit__beacon ${animated ? 'space-orbit__beacon--pulse' : ''}`}
          cx="43"
          cy="14"
          r="1.9"
          fill="rgb(var(--color-accent-cyan))"
        />
        <circle
          cx="83.5"
          cy="14"
          r="1.2"
          fill="rgb(var(--color-text-primary) / 0.72)"
        />
      </svg>
    </div>
  );
}

export default function SpaceEnvironment() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial={prefersReducedMotion ? false : { opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      <div className="space-environment absolute inset-0">
        <div className="space-environment__base" />
        <div className="space-environment__gradient" />
        <div className="space-environment__nebula space-environment__nebula--violet" />
        <div className="space-environment__nebula space-environment__nebula--cyan" />
        <div className="space-stars space-stars--base" />
        <div
          className={`space-stars space-stars--twinkle-a ${prefersReducedMotion ? '' : 'space-stars--twinkle-a-animated'}`}
        />
        <div
          className={`space-stars space-stars--twinkle-b ${prefersReducedMotion ? '' : 'space-stars--twinkle-b-animated'}`}
        />
        <div
          className={`space-stars space-stars--drift ${prefersReducedMotion ? '' : 'space-stars--drift-animated'}`}
        />
        <div className="space-environment__vignette" />

        <div className="space-orbit">
          <div className="space-orbit__shell space-orbit__shell--outer" />
          <div className="space-orbit__shell space-orbit__shell--inner" />
          <div className={`space-orbit__track ${prefersReducedMotion ? '' : 'space-orbit__track--animated'}`}>
            <div className="space-orbit__anchor">
              <OrbitalMarker animated={!prefersReducedMotion} />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
