import { projects } from '@/lib/projects';
import { ExternalLink, Github } from 'lucide-react';

export default function ProjectsSection() {
  return (
    <section id="projects" className="mb-24 scroll-mt-16 lg:scroll-mt-24">
      <h2 className="mb-8 text-sm font-bold uppercase tracking-widest text-slate-200 lg:hidden">
        Projects
      </h2>
      <div className="space-y-4">
        {projects.map((project) => (
          <div
            key={project.id}
            className="spotlight-card group relative rounded-lg p-4 -mx-4 transition-all hover:bg-navy-800/50"
          >
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1">
                <h3 className="text-slate-200 font-medium leading-snug group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-normal">
                  {project.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <li
                      key={tech}
                      className="rounded-full bg-accent/10 px-3 py-1 text-xs font-medium text-accent"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center gap-3 pt-1">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-accent"
                    aria-label={`${project.title} GitHub`}
                  >
                    <Github size={16} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 transition-colors hover:text-accent"
                    aria-label={`${project.title} live site`}
                  >
                    <ExternalLink size={16} />
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
