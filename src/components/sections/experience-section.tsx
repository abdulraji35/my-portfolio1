import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="container-shell">
        <div className="grid gap-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              eyebrow="Experience / Achievements"
              title="Work that connects analysis, reporting, and execution."
              copy="From operations reporting to AI-enhanced analytics tooling, my experience shows a pattern: turning messy information into clearer systems and better decisions."
            />

            <Reveal className="glass-panel p-7 shadow-card">
              <p className="font-display text-2xl font-semibold text-white">
                Achievement Highlights
              </p>
              <ul className="mt-6 space-y-4 text-sm leading-7 text-mist">
                {siteContent.achievements.map((item) => (
                  <li key={item} className="flex gap-3">
                    <span className="mt-2 h-2 w-2 rounded-full bg-gold" />
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
                className="glass-panel p-7 shadow-card"
                delay={index * 0.06}
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="font-display text-2xl font-semibold text-white">
                      {item.role}
                    </h3>
                    <p className="mt-2 text-base text-gold">
                      {item.company} | {item.location}
                    </p>
                  </div>
                  <p className="rounded-full border border-line bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.2em] text-mist">
                    {item.period}
                  </p>
                </div>

                <ul className="mt-6 space-y-3 text-sm leading-7 text-mist">
                  {item.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 rounded-full bg-teal" />
                      <span>{bullet}</span>
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
