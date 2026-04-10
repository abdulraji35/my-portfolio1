import { siteContent } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="section-band py-20 sm:py-24">
      <div className="container-shell">
        <div className="grid gap-10 xl:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionHeading
              eyebrow="About Me"
              title="A data analyst with engineering discipline, business clarity, and a growing edge in AI."
              copy={siteContent.about.intro}
            />
          </Reveal>

          <div className="space-y-6">
            <Reveal className="glass-panel p-8 sm:p-10">
              <div className="space-y-5 text-base leading-8 text-mist">
                {siteContent.about.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </Reveal>

            <div className="grid gap-4 md:grid-cols-3">
              {siteContent.about.highlights.map((highlight, index) => (
                <Reveal
                  key={highlight}
                  className="rounded-[28px] border border-black/10 bg-white/70 p-6 shadow-sm"
                  delay={index * 0.08}
                >
                  <p className="text-xs uppercase tracking-[0.22em] text-mist">
                    0{index + 1}
                  </p>
                  <p className="mt-3 font-display text-2xl font-medium leading-tight text-ink">
                    {highlight}
                  </p>
                  <p className="mt-3 text-sm leading-7 text-mist">
                    Work designed to reduce friction, strengthen decisions, and
                    make reporting more useful.
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
