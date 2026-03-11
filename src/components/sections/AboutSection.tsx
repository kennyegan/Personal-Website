export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-text-primary">
          About
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
      </div>

      <div className="rounded-[32px] border border-border/75 bg-surface/42 px-6 py-7 shadow-[0_30px_90px_rgba(2,8,23,0.22)] backdrop-blur-xl sm:px-8">
        <div className="space-y-5 text-base leading-7 text-text-secondary">
          <p className="text-[1.05rem] leading-8 text-text-primary/92">
            I&apos;m a software engineer and AI researcher focused on building
            systems that sit at the intersection of machine learning, data
            analysis, and full-stack development.
          </p>
          <p>
            I care about writing clean, reliable code and designing experiments
            that produce real insight.
          </p>
          <p>
            Currently, I work as a{' '}
            <span className="text-text-primary">
              Software Development Engineer Intern
            </span>{' '}
            at{' '}
            <span className="text-accent-cyan">
              Capital Technology Group
            </span>
            , where I contribute to production systems and collaborate with
            senior engineers on complex technical challenges.
          </p>
          <p>
            Outside of work, I build tools for automated literature review,
            analyze financial sentiment at scale, develop IoT wearables, and
            explore academic performance prediction with machine learning.
            I&apos;m driven by curiosity and a desire to push what&apos;s
            technically possible.
          </p>
        </div>
      </div>
    </section>
  );
}
