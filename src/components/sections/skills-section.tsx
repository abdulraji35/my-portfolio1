import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills / Tech Stack"
          title="A modern analytics toolkit built for insight, automation, and decision support."
          copy="These are the tools and capabilities I rely on to analyze data, build dashboards, automate reporting, and create practical AI-assisted workflows."
        />

        <div className="grid gap-6 lg:grid-cols-3">
          {siteContent.skills.map((group, index) => (
            <Reveal
              key={group.title}
              className="glass-panel p-7 shadow-card"
              delay={index * 0.08}
            >
              <p className="font-display text-2xl font-semibold text-white">
                {group.title}
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-mist"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
