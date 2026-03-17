import { dmMono } from '@/lib/fonts';
import AnimatedSection from '@/components/motion/AnimatedSection';

export default function AboutSection() {
  return (
    <section id="about" className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <AnimatedSection>
        <div className="mb-8 flex items-center gap-4">
          <h2
            className={`${dmMono.className} text-[0.68rem] font-medium uppercase tracking-[0.28em] text-text-primary`}
          >
            About
          </h2>
          <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="rounded-[32px] border border-border/75 bg-surface/48 px-6 py-7 shadow-[0_26px_72px_rgba(2,8,23,0.2)] backdrop-blur-md sm:px-8">
          <div className="space-y-5 text-base leading-7 text-text-secondary">
            <p className="text-[1.05rem] leading-8 text-text-primary/92">
              I&apos;m an AI researcher and engineer working across the full
              stack of technical systems, from embedded hardware and space
              systems to the internals of modern machine learning models.
            </p>
            <p>
              I focus on building systems that are both rigorous and real,
              combining production-grade engineering with experiments that
              produce genuine insight rather than just impressive metrics.
            </p>
            <p>
              I currently work as an{' '}
              <span className="text-text-primary">AI Research Assistant</span>{' '}
              developing machine learning systems for speech and biosignal
              understanding. Previously, I worked as a{' '}
              <span className="text-text-primary">
                Software Engineering Intern (Machine Learning Focus)
              </span>{' '}
              at <span className="text-accent-cyan">Capital Technology Group</span>,
              contributing to ML systems operating on large government and
              financial datasets for anomaly detection, trade surveillance, and
              predictive analytics.
            </p>
            <p>
              Outside of research, I build systems that connect theory with
              deployment, including embedded platforms, data infrastructure, and
              technical software.
            </p>
            <p>
              Some of the systems I&apos;m currently building can&apos;t be
              public yet. When they are, they&apos;ll probably show up here.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
