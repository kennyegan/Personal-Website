import { sora, dmMono } from '@/lib/fonts';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <p
          className={`${dmMono.className} text-sm font-medium uppercase tracking-[0.28em] text-accent-cyan`}
        >
          404
        </p>
        <h1
          className={`${sora.className} mt-4 text-3xl font-semibold tracking-tight text-text-primary sm:text-4xl`}
        >
          Page not found
        </h1>
        <p className="mt-4 text-base text-text-secondary">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <a
          href="/"
          className={`${dmMono.className} mt-8 inline-flex items-center gap-2 rounded-full border border-accent-cyan/30 bg-accent-cyan/[0.08] px-5 py-2.5 text-xs font-medium uppercase tracking-[0.24em] text-accent-cyan transition duration-300 hover:bg-accent-cyan/[0.14]`}
        >
          Back home
        </a>
      </div>
    </div>
  );
}
