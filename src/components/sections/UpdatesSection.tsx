import { updates } from '@/lib/updates';

export default function UpdatesSection() {
  return (
    <section id="updates" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Updates
      </h2>
      <div className="space-y-8">
        {updates.map((group) => (
          <div key={group.year}>
            <h3 className="mb-3 text-lg font-semibold text-accent">
              {group.year}
            </h3>
            <ul className="space-y-2">
              {group.items.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-sm text-slate-400 leading-normal"
                >
                  <span className="mt-2 block h-1 w-1 flex-shrink-0 rounded-full bg-slate-400" />
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
