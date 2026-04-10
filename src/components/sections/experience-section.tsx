import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="section-band py-20 sm:py-24">
      <div className="container-shell">
        <div className="grid gap-10 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="space-y-6">
            <SectionHeading
              eyebrow="Experience / Achievements"
              title="A profile that combines operational reporting, stakeholder support, and modern AI capability."
              copy="This section is structured to make your experience easier to scan and more persuasive for recruiters who move fast."
            />

            <Reveal className="glass-panel p-7 sm:p-8">
              <p className="font-display text-2xl font-medium text-ink">
                Achievement Highlights
              </p>
              <ul className="mt-6 space-y-4">
                {siteContent.achievements.map((item) => (
                  <li key={item} className="flex gap-3 text-sm leading-7 text-mist">
                    <span className="mt-2 h-2.5 w-2.5 rounded-full bg-teal" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="space-y-5">
            {siteContent.experience.map((item, index) => (
              <Reveal
                key={`${item.company}-${item.role}`}
                className="rounded-[32px] border border-black/10 bg-white/72 p-7 shadow-sm sm:p-8"
                delay={index * 0.06}
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div className="max-w-xl">
                    <p className="text-xs uppercase tracking-[0.22em] text-mist">
                      {item.company} | {item.location}
                    </p>
                    <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-ink">
                      {item.role}
                    </h3>
                  </div>
                  <div className="rounded-full border border-black/10 bg-highlight px-4 py-2 text-xs uppercase tracking-[0.18em] text-ink">
                    {item.period}
                  </div>
                </div>

                <ul className="mt-6 grid gap-3">
                  {item.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="rounded-[22px] border border-black/5 bg-white px-4 py-4 text-sm leading-7 text-mist"
                    >
                      {bullet}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
