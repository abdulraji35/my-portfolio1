import Link from "next/link";
import { Reveal } from "@/components/ui/reveal";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteContent } from "@/data/portfolio";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 sm:py-24">
      <div className="container-shell">
        <Reveal className="glass-panel p-8 sm:p-10 lg:p-12">
          <div className="grid gap-10 xl:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="Contact"
                title={siteContent.contact.heading}
                copy={siteContent.contact.copy}
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-mist">
                  Email
                </p>
                <Link
                  href={`mailto:${siteContent.profile.email}`}
                  className="mt-4 inline-block font-display text-2xl font-medium leading-tight text-ink link-underline"
                >
                  {siteContent.profile.email}
                </Link>
              </div>

              <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-mist">
                  Phone
                </p>
                <Link
                  href={`tel:${siteContent.profile.phone.replace(/\s+/g, "")}`}
                  className="mt-4 inline-block font-display text-2xl font-medium leading-tight text-ink link-underline"
                >
                  {siteContent.profile.phone}
                </Link>
              </div>

              <div className="rounded-[28px] border border-black/10 bg-white p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-mist">
                  LinkedIn
                </p>
                <Link
                  href={siteContent.profile.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block font-display text-2xl font-medium leading-tight text-ink link-underline"
                >
                  Connect professionally
                </Link>
              </div>

              <div className="rounded-[28px] border border-black/10 bg-highlight p-6 shadow-sm">
                <p className="text-xs uppercase tracking-[0.2em] text-mist">
                  Resume
                </p>
                <Link
                  href={siteContent.profile.cvPath}
                  download
                  className="mt-4 inline-flex rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
                >
                  Download CV
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
