import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education / Certifications"
          title="A foundation in aerospace engineering, strengthened by analytics and AI specialization."
          copy="The combination of formal engineering education and targeted analytics training gives this portfolio both rigor and adaptability."
        />

        <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal className="glass-panel p-8 shadow-card">
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Education
            </p>
            <h3 className="mt-4 font-display text-3xl font-semibold text-white">
              {siteContent.education.degree}
            </h3>
            <p className="mt-4 text-base leading-8 text-mist">
              {siteContent.education.school}
            </p>
            <p className="mt-5 inline-flex rounded-full border border-line bg-white/5 px-4 py-2 text-sm text-white">
              {siteContent.education.period}
            </p>
          </Reveal>

          <Reveal className="glass-panel p-8 shadow-card" delay={0.12}>
            <p className="text-xs uppercase tracking-[0.28em] text-gold">
              Certifications
            </p>
            <div className="mt-5 space-y-4">
              {siteContent.certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-3xl border border-line bg-white/5 p-5"
                >
                  <p className="text-sm leading-7 text-white/90">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
