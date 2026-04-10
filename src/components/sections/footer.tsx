import Link from "next/link";
import { siteContent } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="pb-10 pt-4">
      <div className="container-shell">
        <div className="flex flex-col gap-4 rounded-[28px] border border-black/10 bg-white/70 px-6 py-6 text-sm text-mist shadow-sm sm:flex-row sm:items-center sm:justify-between">
          <p>
            Copyright {new Date().getFullYear()} {siteContent.profile.name}. A
            recruiter-focused portfolio built with Next.js, Tailwind CSS, and
            Framer Motion.
          </p>
          <div className="flex flex-wrap items-center gap-4">
            <Link href={siteContent.profile.linkedin} className="link-underline">
              LinkedIn
            </Link>
            <Link href={`mailto:${siteContent.profile.email}`} className="link-underline">
              Email
            </Link>
            <Link href={siteContent.profile.cvPath} download className="link-underline">
              Resume
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
