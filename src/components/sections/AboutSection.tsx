import { personalInfo } from '@/lib/personal-info';

export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        About
      </h2>
      <div className="space-y-4 text-slate-400 leading-relaxed">
        <p>
          I&apos;m a software engineer and AI researcher focused on building
          systems that sit at the intersection of machine learning, data
          analysis, and full-stack development. I care about writing clean,
          reliable code and designing experiments that produce real insight.
        </p>
        <p>
          Currently, I work as a{' '}
          <span className="text-slate-200">
            Software Development Engineer Intern
          </span>{' '}
          at{' '}
          <a
            href="#"
            className="text-accent hover:underline"
          >
            Capital Technology Group
          </a>
          , where I contribute to production systems and collaborate with senior
          engineers on complex technical challenges.
        </p>
        <p>
          Outside of work, I build tools for automated literature review,
          analyze financial sentiment at scale, develop IoT wearables, and
          explore academic performance prediction with machine learning. I&apos;m
          driven by curiosity and a desire to push what&apos;s technically
          possible.
        </p>
      </div>
    </section>
  );
}
