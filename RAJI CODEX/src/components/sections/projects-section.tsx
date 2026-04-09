import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="Selected work designed to show range, clarity, and real analytical value."
          copy="Each project below is drawn from the resume and reframed to highlight the business problem, the analytical approach, and the practical outcome."
        />

        <div className="grid gap-6 xl:grid-cols-2">
          {siteContent.featuredProjects.map((project, index) => (
            <Reveal
              key={project.title}
              className="gradient-border rounded-[32px] p-1 shadow-card"
              delay={index * 0.06}
            >
              <article className="glass-panel flex h-full flex-col rounded-[30px] p-7">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs uppercase tracking-[0.3em] text-gold">
                      Case Study
                    </p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">
                      {project.title}
                    </h3>
                  </div>
                  <div className="rounded-full border border-line bg-white/5 px-3 py-1 text-xs text-mist">
                    Featured
                  </div>
                </div>

                <p className="mt-5 text-sm leading-7 text-mist">
                  {project.summary}
                </p>

                <div className="mt-6 space-y-4 text-sm leading-7 text-white/90">
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-mist">
                      Problem
                    </p>
                    <p className="mt-2 text-mist">{project.problem}</p>
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-[0.24em] text-mist">
                      Outcome / Impact
                    </p>
                    <p className="mt-2 text-mist">{project.impact}</p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-3">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-line bg-white/5 px-3 py-2 text-xs uppercase tracking-[0.18em] text-mist"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-8 flex flex-wrap gap-3">
                  {project.githubUrl === "#" ? (
                    <span className="inline-flex rounded-full border border-dashed border-line bg-white/5 px-4 py-2 text-sm text-mist">
                      GitHub link pending
                    </span>
                  ) : (
                    <Link
                      href={project.githubUrl}
                      className="inline-flex rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/25 hover:bg-white/10"
                    >
                      GitHub
                    </Link>
                  )}
                  {project.demoUrl === "#" ? (
                    <span className="inline-flex rounded-full border border-dashed border-line bg-white/5 px-4 py-2 text-sm text-mist">
                      Demo link pending
                    </span>
                  ) : (
                    <Link
                      href={project.demoUrl}
                      className="inline-flex rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/25 hover:bg-white/10"
                    >
                      Live Demo
                    </Link>
                  )}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
