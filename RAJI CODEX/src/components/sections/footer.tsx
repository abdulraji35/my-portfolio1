import Link from "next/link";
import { siteContent } from "@/data/portfolio";

export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="container-shell flex flex-col gap-4 text-sm text-mist sm:flex-row sm:items-center sm:justify-between">
        <p>
          Copyright {new Date().getFullYear()} {siteContent.profile.name}. Built
          with Next.js, Tailwind CSS, and Framer Motion.
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
    </footer>
  );
}
