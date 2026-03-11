import { updates } from '@/lib/updates';

export default function UpdatesSection() {
  return (
    <section id="updates" className="mb-24 scroll-mt-16 lg:mb-28 lg:scroll-mt-24">
      <div className="mb-8 flex items-center gap-4">
        <h2 className="text-[0.68rem] font-bold uppercase tracking-[0.26em] text-text-primary">
          Updates
        </h2>
        <span className="h-px flex-1 bg-gradient-to-r from-border/80 to-transparent" />
      </div>

      <div className="space-y-8">
        {updates.map((group) => (
          <div
            key={group.year}
            className="rounded-[32px] border border-border/75 bg-surface/42 p-6 shadow-[0_26px_80px_rgba(2,8,23,0.2)] backdrop-blur-xl"
          >
            <div className="mb-5 flex items-center gap-4">
              <h3 className="text-lg font-semibold text-accent-cyan">
                {group.year}
              </h3>
              <span className="h-px flex-1 bg-gradient-to-r from-accent-violet/25 to-transparent" />
            </div>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm leading-7 text-text-secondary"
                >
                  <span className="mt-2.5 block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-mint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
