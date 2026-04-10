import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

const projectYears = ["2025", "2025", "2025", "2024", "2024", "2024"];

function ProjectVisual({
  index,
  title,
}: {
  index: number;
  title: string;
}) {
  const variant = index % 4;

  if (variant === 0) {
    return (
      <div className="relative h-[360px] overflow-hidden rounded-[34px] bg-[#ece7df] p-6 sm:h-[420px]">
        {/* Replace this abstract showcase with a real project screenshot when available. */}
        <div className="absolute right-5 top-5 rounded-full bg-white px-4 py-2 text-xs uppercase tracking-[0.18em] text-mist shadow-sm">
          mobile workflow
        </div>
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-[radial-gradient(circle_at_center,rgba(22,19,17,0.08),transparent_60%)]" />
        <div className="absolute left-1/2 top-1/2 h-[260px] w-[138px] -translate-x-1/2 -translate-y-1/2 rounded-[34px] border-[8px] border-[#191919] bg-[linear-gradient(180deg,#243955_0%,#152236_100%)] shadow-[0_30px_60px_rgba(0,0,0,0.22)] sm:h-[300px] sm:w-[156px]">
          <div className="mx-auto mt-3 h-5 w-20 rounded-full bg-black/45" />
          <div className="px-4 pt-6 text-white">
            <p className="text-xs uppercase tracking-[0.18em] text-white/70">
              {title}
            </p>
            <p className="mt-3 text-xl font-medium leading-tight">
              Find insight, faster.
            </p>
            <div className="mt-5 space-y-2">
              <div className="h-8 rounded-full bg-white/10" />
              <div className="h-8 rounded-full bg-white/10" />
              <div className="h-8 rounded-full bg-white/10" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 1) {
    return (
      <div className="relative h-[360px] overflow-hidden rounded-[34px] bg-[#2f6ae0] p-6 sm:h-[420px]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.18),transparent_32%)]" />
        <div className="absolute left-6 right-6 top-8 rounded-[26px] bg-white p-5 shadow-[0_24px_50px_rgba(23,24,33,0.15)]">
          <div className="flex items-center justify-between">
            <div className="flex gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-[#ffb4b4]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#f6d08a]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#98ddb2]" />
            </div>
            <span className="text-xs uppercase tracking-[0.18em] text-mist">
              assistant
            </span>
          </div>
          <div className="mt-5 rounded-[22px] border border-black/5 bg-[#f6f8fc] p-4">
            <div className="max-w-[240px] rounded-[18px] bg-white p-4 text-sm leading-6 text-mist shadow-sm">
              Hello. Ask a question about your data and I will route the best
              answer path for you.
            </div>
            <div className="mt-4 ml-auto max-w-[220px] rounded-[18px] bg-[#dfeafe] p-4 text-sm leading-6 text-ink">
              Surface the booking and revenue trends by region.
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (variant === 2) {
    return (
      <div className="relative h-[360px] overflow-hidden rounded-[34px] bg-[#f1ede6] p-6 sm:h-[420px]">
        <div className="grid h-full gap-4 sm:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[28px] bg-white p-5 shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-mist">
              dashboard view
            </p>
            <div className="mt-6 grid gap-3">
              <div className="h-20 rounded-[24px] bg-[#e7efff]" />
              <div className="grid grid-cols-2 gap-3">
                <div className="h-28 rounded-[24px] bg-[#f8f2e8]" />
                <div className="h-28 rounded-[24px] bg-[#eef1f4]" />
              </div>
              <div className="h-16 rounded-[24px] bg-[#f5f7fa]" />
            </div>
          </div>
          <div className="rounded-[28px] bg-[#1f2430] p-5 text-white shadow-sm">
            <p className="text-xs uppercase tracking-[0.18em] text-white/65">
              summary
            </p>
            <p className="mt-4 font-display text-3xl font-medium">30%</p>
            <p className="mt-2 text-sm leading-7 text-white/75">
              Faster reporting delivered through cleaner analytics workflows and
              stakeholder-focused design.
            </p>
            <div className="mt-6 h-2 rounded-full bg-white/10">
              <div className="h-2 w-[68%] rounded-full bg-[#8ab0ff]" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative h-[360px] overflow-hidden rounded-[34px] bg-[#e9e2d7] p-6 sm:h-[420px]">
      <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-white/80 blur-2xl" />
      <div className="absolute right-6 top-6 rounded-full border border-black/10 bg-white/85 px-4 py-2 text-xs uppercase tracking-[0.18em] text-mist shadow-sm">
        insight flow
      </div>
      <div className="grid h-full gap-4">
        <div className="rounded-[28px] bg-white p-5 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.18em] text-mist">
                {title}
              </p>
              <p className="mt-3 font-display text-2xl font-medium text-ink">
                Structured analysis with a polished output layer.
              </p>
            </div>
            <div className="h-16 w-16 rounded-[22px] bg-[#dfeafe]" />
          </div>
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="rounded-[24px] bg-[#2f6ae0] p-4 text-white shadow-sm" />
          <div className="rounded-[24px] bg-white shadow-sm" />
          <div className="rounded-[24px] bg-[#f6f0e6] shadow-sm" />
        </div>
      </div>
    </div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Featured Projects"
          title="A cleaner, more persuasive case-study section built to hold attention longer."
          copy="I used the project information from your resume and presented it with a more editorial structure, stronger visual pacing, and outcome-led writing."
        />

        <div className="grid gap-x-8 gap-y-16 xl:grid-cols-2">
          {siteContent.featuredProjects.map((project, index) => {
            const showTextFirst = index % 2 === 0;

            return (
              <Reveal
                key={project.title}
                className={index % 2 === 1 ? "xl:translate-y-16" : ""}
                delay={index * 0.06}
              >
                <article className="space-y-6">
                  {showTextFirst ? (
                    <>
                      <div className="max-w-xl space-y-3">
                        <p className="text-sm text-mist">
                          {project.title} | {projectYears[index]}
                        </p>
                        <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
                          {project.summary}
                        </h3>
                      </div>
                      <ProjectVisual index={index} title={project.title} />
                    </>
                  ) : (
                    <>
                      <ProjectVisual index={index} title={project.title} />
                      <div className="max-w-xl space-y-3">
                        <p className="text-sm text-mist">
                          {project.title} | {projectYears[index]}
                        </p>
                        <h3 className="font-display text-[clamp(2rem,4vw,3rem)] font-medium leading-[1.02] tracking-[-0.04em] text-ink">
                          {project.summary}
                        </h3>
                      </div>
                    </>
                  )}

                  <div className="rounded-[30px] border border-black/10 bg-white/70 p-6 shadow-sm">
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-mist">
                          Problem it solves
                        </p>
                        <p className="mt-3 text-sm leading-7 text-mist">
                          {project.problem}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.18em] text-mist">
                          Outcome / impact
                        </p>
                        <p className="mt-3 text-sm leading-7 text-mist">
                          {project.impact}
                        </p>
                      </div>
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full border border-black/10 bg-white px-3 py-2 text-xs uppercase tracking-[0.16em] text-ink shadow-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="mt-6 flex flex-wrap gap-3">
                      {project.githubUrl === "#" ? (
                        <span className="inline-flex rounded-full border border-dashed border-black/10 px-4 py-2 text-sm text-mist">
                          GitHub link pending
                        </span>
                      ) : (
                        <Link
                          href={project.githubUrl}
                          className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-highlight"
                        >
                          GitHub
                        </Link>
                      )}

                      {project.demoUrl === "#" ? (
                        <span className="inline-flex rounded-full border border-dashed border-black/10 px-4 py-2 text-sm text-mist">
                          Demo link pending
                        </span>
                      ) : (
                        <Link
                          href={project.demoUrl}
                          className="inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink transition hover:bg-highlight"
                        >
                          Live Demo
                        </Link>
                      )}
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
