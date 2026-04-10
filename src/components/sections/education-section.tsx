import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function EducationSection() {
  return (
    <section id="education" className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Education / Certifications"
          title="Technical depth anchored by engineering education and strengthened by focused analytics training."
          copy="This combination gives the portfolio a more credible mix of discipline, adaptability, and analytical range."
        />

        <div className="grid gap-6 xl:grid-cols-[1.08fr_0.92fr]">
          <Reveal className="glass-panel p-8 sm:p-10">
            <p className="text-xs uppercase tracking-[0.22em] text-mist">
              Education
            </p>
            <h3 className="mt-4 font-display text-4xl font-medium leading-tight text-ink">
              {siteContent.education.degree}
            </h3>
            <p className="mt-4 max-w-2xl text-base leading-8 text-mist">
              {siteContent.education.school}
            </p>
            <div className="mt-6 inline-flex rounded-full border border-black/10 bg-white px-4 py-2 text-sm font-medium text-ink shadow-sm">
              {siteContent.education.period}
            </div>
          </Reveal>

          <Reveal className="glass-panel p-8 sm:p-10" delay={0.12}>
            <p className="text-xs uppercase tracking-[0.22em] text-mist">
              Certifications
            </p>
            <div className="mt-5 grid gap-4">
              {siteContent.certifications.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-black/10 bg-white px-5 py-5 shadow-sm"
                >
                  <p className="text-sm leading-7 text-ink">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
