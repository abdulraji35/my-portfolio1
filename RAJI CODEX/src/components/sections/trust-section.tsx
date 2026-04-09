import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function TrustSection() {
  return (
    <section className="py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Trust-Building"
          title="A portfolio that signals reliability, curiosity, and delivery."
          copy="This section blends genuine strengths from the resume with placeholder social proof blocks that can be replaced later with real recommendations."
        />

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-5">
            {siteContent.trust.principles.map((item, index) => (
              <Reveal
                key={item.title}
                className="glass-panel p-7 shadow-card"
                delay={index * 0.08}
              >
                <p className="font-display text-2xl font-semibold text-white">
                  {item.title}
                </p>
                <p className="mt-3 text-sm leading-7 text-mist">
                  {item.description}
                </p>
              </Reveal>
            ))}
          </div>

          <div className="grid gap-5">
            {/* These testimonial cards are intentionally placeholder content because the resume did not include real testimonials. */}
            {siteContent.trust.testimonials.map((testimonial, index) => (
              <Reveal
                key={`${testimonial.author}-${index}`}
                className="gradient-border rounded-[30px] p-1 shadow-card"
                delay={index * 0.1}
              >
                <div className="glass-panel rounded-[28px] p-7">
                  <p className="font-display text-xl font-medium leading-9 text-white">
                    "{testimonial.quote}"
                  </p>
                  <div className="mt-6">
                    <p className="text-sm font-semibold text-white">
                      {testimonial.author}
                    </p>
                    <p className="mt-1 text-sm text-mist">{testimonial.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
