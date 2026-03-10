import { personalInfo } from '@/lib/personal-info';

export default function ContactSection() {
  return (
    <section id="contact" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Contact
      </h2>
      <div className="max-w-md">
        <h3 className="text-2xl font-bold text-slate-200">Get In Touch</h3>
        <p className="mt-4 text-slate-400 leading-relaxed">
          I&apos;m always interested in hearing about new research
          collaborations, engineering challenges, or opportunities to build
          something ambitious. If you have a question or just want to say hi,
          I&apos;ll do my best to get back to you.
        </p>
        <a
          href={`mailto:${personalInfo.email}`}
          className="mt-6 inline-block rounded border border-accent px-6 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent/10"
        >
          Say Hello
        </a>
      </div>
    </section>
  );
}
