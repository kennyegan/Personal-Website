import { experience } from '@/lib/personal-info';

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-text-primary">
          Experience
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
      </div>

      <div className="space-y-12">
        {experience.map((role, i) => (
          <div
            key={i}
            className="group relative -mx-4 rounded-[30px] border border-border/60 bg-surface/22 p-5 shadow-[0_20px_55px_rgba(2,8,23,0.12)] backdrop-blur-xl transition-all duration-300 hover:border-accent-cyan/18 hover:bg-surface/48 hover:shadow-[0_30px_80px_rgba(2,8,23,0.18)] sm:grid sm:grid-cols-8 sm:gap-8"
          >
            <div className="mb-3 mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-text-secondary/90 sm:col-span-2">
              {role.duration}
            </div>
            <div className="sm:col-span-6">
              <h3 className="font-medium leading-snug text-text-primary">
                {role.title} ·{' '}
                <span className="text-accent-cyan">{role.company}</span>
              </h3>
              <p className="mt-3 text-sm leading-7 text-text-secondary">
                {role.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-mint/20 bg-mint/10 px-3 py-1 text-xs font-medium text-mint"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
