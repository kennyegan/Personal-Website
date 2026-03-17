'use client';

import { sora, dmMono } from '@/lib/fonts';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p
          className={`${dmMono.className} text-sm font-medium uppercase tracking-[0.28em] text-accent-cyan`}
        >
          Error
        </p>
        <h1
          className={`${sora.className} mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl`}
        >
          Something went wrong
        </h1>
        <p className="mt-4 text-base text-text-secondary">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className={`${dmMono.className} mt-8 inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.08] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.24em] text-accent-cyan transition duration-300 hover:bg-accent-cyan/[0.14]`}
        >
          Try again
        </button>
      </div>
    </div>
  );
}
