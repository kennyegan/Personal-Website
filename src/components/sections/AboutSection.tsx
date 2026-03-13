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
            I&apos;m an AI researcher and engineer working across the full
            stack of technical systems, from embedded hardware and space
            systems to the internals of modern machine learning models.
          </p>
          <p>
            I care about building systems that are both rigorous and real. That
            means writing clean, production-grade software and designing
            experiments that produce genuine insight rather than just
            impressive metrics.
          </p>
          <p>
            I currently work as an{' '}
            <span className="text-text-primary">AI Research Assistant</span>,
            where I help develop machine learning systems for speech and
            biosignal understanding. The goal of this research is to enable
            more reliable speech decoding and enhancement from difficult
            sensing environments, helping move assistive and human-computer
            interfaces toward more natural and accessible communication.
          </p>
          <p>
            Previously, I worked as a{' '}
            <span className="text-text-primary">
              Software Engineering Intern (Machine Learning Focus)
            </span>{' '}
            at <span className="text-accent-cyan">Capital Technology Group</span>,
            where I worked on machine learning systems analyzing large
            government and financial datasets. My work involved developing
            models and data pipelines supporting anomaly detection, trade
            surveillance, and predictive analytics across complex regulatory
            environments.
          </p>
          <p>
            Outside of research, I spend a lot of time engineering systems that
            live beyond the lab. That includes embedded platforms, data
            infrastructure, and technical software designed to move ideas from
            theory into real-world deployment.
          </p>
          <p>
            Some of the systems I&apos;m currently building can&apos;t be
            public yet. When they are, you&apos;ll probably see them appear
            here.
          </p>
        </div>
      </div>
    </section>
  );
}
