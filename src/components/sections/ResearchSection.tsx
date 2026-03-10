import { researchPapers } from '@/lib/research';
import { ExternalLink, Github, FileText } from 'lucide-react';

export default function ResearchSection() {
  return (
    <section id="research" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Research
      </h2>
      <div className="space-y-4">
        {researchPapers.map((paper) => (
          <div
            key={paper.id}
            className="spotlight-card group relative rounded-lg p-4 -mx-4 transition-all hover:bg-navy-800/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-slate-200 font-medium leading-snug group-hover:text-accent transition-colors">
                  {paper.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {paper.authors.join(', ')} · {paper.year}
                </p>
                <p className="mt-2 text-sm text-slate-400 leading-normal line-clamp-2">
                  {paper.abstract}
                </p>
                <div className="mt-3 flex items-center gap-3">
                  <span
                    className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                      paper.status === 'Published'
                        ? 'bg-accent/10 text-accent'
                        : paper.status === 'Under Review'
                          ? 'bg-yellow-500/10 text-yellow-400'
                          : paper.status === 'Preprint'
                            ? 'bg-blue-500/10 text-blue-400'
                            : 'bg-slate-400/10 text-slate-400'
                    }`}
                  >
                    {paper.status}
                  </span>
                  {paper.citationCount && (
                    <span className="text-xs text-slate-400">
                      {paper.citationCount} citations
                    </span>
                  )}
                </div>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {paper.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {paper.pdfUrl && (
                  <a
                    href={paper.pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-accent"
                    aria-label={`${paper.title} PDF`}
                  >
                    <FileText size={16} />
                  </a>
                )}
                {paper.arxivUrl && (
                  <a
                    href={paper.arxivUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-accent"
                    aria-label={`${paper.title} arXiv`}
                  >
                    <ExternalLink size={16} />
                  </a>
                )}
                {paper.githubUrl && (
                  <a
                    href={paper.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-accent"
                    aria-label={`${paper.title} GitHub`}
                  >
                    <Github size={16} />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
