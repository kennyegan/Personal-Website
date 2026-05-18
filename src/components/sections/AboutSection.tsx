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
              I’m an AI researcher and engineer working across machine learning, embedded intelligence, and large-scale technical infrastructure.
            </p>
            <p>
              My work spans the full stack of modern AI systems, from embedded and hardware-integrated environments to multimodal learning, model architecture, and production ML infrastructure. I focus on building systems that are technically rigorous while remaining practical and deployable in real-world environments.
            </p>
            <p>
              I currently work as an <span className="text-text-primary">AI R&D Co-op</span> at <span className="text-accent-cyan">Amazon Lab126</span>, contributing to embedded AI and multimodal systems research focused on real-world intelligent systems and production-oriented AI technologies.
            </p>
            <p>
              Previously, I worked as a <span className="text-text-primary">Software Engineering Intern</span> with a machine learning focus at Capital Technology Group, contributing to ML systems operating on large government and financial datasets for anomaly detection, trade surveillance, predictive analytics, and data-driven risk modeling.
            </p>
            <p>
              Outside of formal research, I build independent technical systems spanning embedded platforms, scalable infrastructure, intelligent data pipelines, and applied AI products.
            </p>
            <p>
              Some of the systems I’m currently developing are not public yet. When they are, they’ll appear here.
            </p>
          </div>
        </div>
      </AnimatedSection>
    </section>
  );
}
