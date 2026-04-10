"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/portfolio";

export function HeroSection() {
  const { profile } = siteContent;

  return (
    <section id="home" className="pb-24 pt-32 sm:pb-28 sm:pt-36 lg:pt-40">
      <div className="container-shell">
        <div className="grid gap-10 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pill"
            >
              Data Analyst | Power BI | SQL | AI Workflows
            </motion.span>

            <div className="space-y-6">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="font-display text-lg font-medium text-mist"
              >
                {profile.name}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-5xl font-display text-[clamp(3.4rem,8vw,6.8rem)] font-medium leading-[0.92] tracking-[-0.06em] text-ink"
              >
                Premium analytics experiences for teams that need clearer
                reporting, faster insight, and trustworthy execution.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                className="max-w-2xl text-lg leading-8 text-mist"
              >
                {profile.subheadline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="max-w-2xl text-sm uppercase tracking-[0.26em] text-mist"
              >
                {profile.title}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-ink px-6 py-3.5 text-sm font-semibold text-white transition hover:translate-y-[-1px]"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Contact Me
              </Link>
              <Link
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center rounded-full border border-black/10 bg-white/70 px-6 py-3.5 text-sm font-semibold text-ink transition hover:bg-white"
              >
                Download CV
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.34 }}
              className="flex flex-wrap gap-3"
            >
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-full border border-black/10 bg-white/70 px-5 py-3 shadow-sm"
                >
                  <p className="font-display text-2xl font-medium text-ink">
                    {stat.value}
                  </p>
                  <p className="text-xs uppercase tracking-[0.18em] text-mist">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.16 }}
            className="relative"
          >
            <div className="glass-panel overflow-hidden p-5 sm:p-6">
              <div className="rounded-[30px] bg-highlight p-6 sm:p-8">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-xs uppercase tracking-[0.26em] text-mist">
                    Profile Snapshot
                  </p>
                  <div className="rounded-full bg-white px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink shadow-sm">
                    Open to Work
                  </div>
                </div>

                <div className="mt-8 grid gap-6 lg:grid-cols-[auto_1fr] lg:items-end">
                  <div className="relative flex h-28 w-28 items-center justify-center rounded-[28px] bg-white shadow-sm sm:h-32 sm:w-32">
                    {/* Replace this monogram block with a real profile image when available. */}
                    {/* Example: swap this element for an Image component after adding a headshot to /public. */}
                    <div className="flex h-20 w-20 items-center justify-center rounded-[22px] bg-ink font-display text-3xl font-medium text-white">
                      AR
                    </div>
                    <div className="absolute -right-2 -top-2 h-8 w-8 rounded-full border border-white/80 bg-[#c7d8ff]" />
                  </div>

                  <div className="space-y-3">
                    <p className="font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                      Trusted analytical thinking with a modern delivery stack.
                    </p>
                    <p className="max-w-xl text-sm leading-7 text-mist sm:text-base">
                      I build dashboards, SQL workflows, and AI-supported
                      analytics systems that feel clear, usable, and business
                      ready.
                    </p>
                  </div>
                </div>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-[26px] bg-white p-5 shadow-sm">
                    <p className="text-xs uppercase tracking-[0.22em] text-mist">
                      Strongest Signals
                    </p>
                    <p className="mt-3 font-display text-2xl font-medium text-ink">
                      Power BI, SQL, Excel, Python
                    </p>
                    <p className="mt-2 text-sm leading-7 text-mist">
                      Built for reporting, modeling, dashboarding, and practical
                      automation.
                    </p>
                  </div>

                  <div className="rounded-[26px] bg-[#2f6ae0] p-5 text-white shadow-sm">
                    <p className="text-xs uppercase tracking-[0.22em] text-white/75">
                      Current Edge
                    </p>
                    <p className="mt-3 font-display text-2xl font-medium">
                      Analytics + AI workflows
                    </p>
                    <p className="mt-2 text-sm leading-7 text-white/80">
                      Combining business insight with RAG, prompt engineering,
                      and agentic tooling.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
