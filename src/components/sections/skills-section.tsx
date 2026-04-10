import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Skills / Tech Stack"
          title="A practical toolkit for dashboards, data workflows, and AI-assisted problem solving."
          copy="The stack below reflects the work I already do across reporting, modeling, analytics delivery, and modern automation."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {siteContent.skills.map((group, index) => (
            <Reveal
              key={group.title}
              className="glass-panel p-7 sm:p-8"
              delay={index * 0.08}
            >
              <div className="flex items-center justify-between gap-4">
                <p className="font-display text-2xl font-medium text-ink">
                  {group.title}
                </p>
                <span className="rounded-full bg-black/5 px-3 py-1 text-xs uppercase tracking-[0.18em] text-mist">
                  {String(group.items.length).padStart(2, "0")} items
                </span>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-black/10 bg-white px-4 py-2 text-sm text-ink shadow-sm"
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
