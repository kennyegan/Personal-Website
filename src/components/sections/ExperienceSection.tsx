import { experience } from '@/lib/personal-info';

export default function ExperienceSection() {
  return (
    <section id="experience" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Experience
      </h2>
      <div className="space-y-12">
        {experience.map((role, i) => (
          <div
            key={i}
            className="group relative grid pb-1 sm:grid-cols-8 sm:gap-8 transition-all rounded-lg p-4 -mx-4 hover:bg-navy-800/50"
          >
            <div className="sm:col-span-2 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-400">
              {role.duration}
            </div>
            <div className="sm:col-span-6">
              <h3 className="text-slate-200 font-medium leading-snug">
                {role.title} ·{' '}
                <span className="text-accent">{role.company}</span>
              </h3>
              <p className="mt-2 text-sm text-slate-400 leading-normal">
                {role.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {role.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
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
