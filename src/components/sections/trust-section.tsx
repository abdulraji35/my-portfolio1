import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function TrustSection() {
  return (
    <section className="section-band py-20 sm:py-24">
      <div className="container-shell">
        <SectionHeading
          eyebrow="Trust-Building"
          title="Signals that help recruiters and clients feel more confident staying on the page."
          copy="Because your resume did not include testimonials, I kept those areas clearly marked as placeholders while using real trust signals from your background."
        />

        <div className="grid gap-5 xl:grid-cols-3">
          {siteContent.trust.principles.map((item, index) => (
            <Reveal
              key={item.title}
              className="rounded-[30px] border border-black/10 bg-white/72 p-7 shadow-sm"
              delay={index * 0.06}
            >
              <p className="text-xs uppercase tracking-[0.2em] text-mist">
                Why it matters
              </p>
              <p className="mt-4 font-display text-3xl font-medium leading-tight text-ink">
                {item.title}
              </p>
              <p className="mt-4 text-sm leading-7 text-mist">
                {item.description}
              </p>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-5 xl:grid-cols-2">
          {/* These testimonial cards remain placeholders until you replace them with real quotes. */}
          {siteContent.trust.testimonials.map((testimonial, index) => (
            <Reveal
              key={`${testimonial.author}-${index}`}
              className="glass-panel p-8"
              delay={index * 0.08}
            >
              <p className="text-xs uppercase tracking-[0.22em] text-mist">
                Placeholder testimonial
              </p>
              <p className="mt-4 font-display text-2xl font-medium leading-[1.25] text-ink">
                "{testimonial.quote}"
              </p>
              <div className="mt-6">
                <p className="text-sm font-semibold text-ink">
                  {testimonial.author}
                </p>
                <p className="mt-1 text-sm text-mist">{testimonial.role}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
