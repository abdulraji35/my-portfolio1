import { siteContent } from "@/data/portfolio";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";

export function AboutSection() {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="About Me"
          title="Analytical thinking shaped by engineering, sharpened by business data, and expanded by AI."
          copy={siteContent.about.intro}
        />

        <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal className="glass-panel p-8 shadow-card">
            <div className="space-y-5 text-sm leading-8 text-mist sm:text-base">
              {siteContent.about.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <Reveal className="space-y-4" delay={0.12}>
            {siteContent.about.highlights.map((highlight, index) => (
              <div
                key={highlight}
                className="glass-panel flex items-start gap-4 p-6 shadow-card"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white text-sm font-semibold text-ink">
                  0{index + 1}
                </div>
                <div>
                  <p className="font-display text-xl font-medium text-white">
                    {highlight}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-mist">
                    I focus on work that improves clarity, speeds up reporting, and helps people make better decisions with confidence.
                  </p>
                </div>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
