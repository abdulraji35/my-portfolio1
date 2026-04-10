import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-shell">
        <Reveal className="gradient-border rounded-[34px] p-1 shadow-card">
          <div className="glass-panel rounded-[32px] p-8 sm:p-10">
            <SectionHeading
              eyebrow="Contact"
              title={siteContent.contact.heading}
              copy={siteContent.contact.copy}
            />

            <div className="grid gap-6 lg:grid-cols-[1fr_0.9fr]">
              <div className="space-y-4">
                <div className="rounded-[28px] border border-line bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-mist">
                    Email
                  </p>
                  <Link
                    href={`mailto:${siteContent.profile.email}`}
                    className="mt-3 inline-block font-display text-2xl font-semibold text-white link-underline"
                  >
                    {siteContent.profile.email}
                  </Link>
                </div>

                <div className="rounded-[28px] border border-line bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-mist">
                    Phone
                  </p>
                  <Link
                    href={`tel:${siteContent.profile.phone.replace(/\s+/g, "")}`}
                    className="mt-3 inline-block font-display text-2xl font-semibold text-white link-underline"
                  >
                    {siteContent.profile.phone}
                  </Link>
                </div>
              </div>

              <div className="space-y-4">
                <div className="rounded-[28px] border border-line bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-mist">
                    LinkedIn
                  </p>
                  <Link
                    href={siteContent.profile.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-block font-display text-xl font-semibold leading-8 text-white link-underline"
                  >
                    Connect professionally
                  </Link>
                </div>

                <div className="rounded-[28px] border border-line bg-white/5 p-6">
                  <p className="text-xs uppercase tracking-[0.24em] text-mist">
                    CV
                  </p>
                  <Link
                    href={siteContent.profile.cvPath}
                    download
                    className="mt-3 inline-flex rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-semibold text-white transition hover:border-gold hover:bg-gold/20"
                  >
                    Download Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
