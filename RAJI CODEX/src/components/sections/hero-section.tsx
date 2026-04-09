"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteContent } from "@/data/portfolio";

export function HeroSection() {
  const { profile } = siteContent;

  return (
    <section id="home" className="relative pb-20 pt-12 sm:pb-24 sm:pt-16">
      <div className="container-shell">
        <div className="grid items-center gap-10 lg:grid-cols-[1.18fr_0.82fr]">
          <div className="space-y-8">
            <motion.span
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="pill"
            >
              {profile.location} | {profile.availability}
            </motion.span>

            <div className="space-y-5">
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.05 }}
                className="font-display text-lg font-medium text-gold"
              >
                {profile.name}
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="max-w-4xl font-display text-5xl font-semibold tracking-tight text-white sm:text-6xl xl:text-7xl"
              >
                {profile.headline}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.75, delay: 0.16 }}
                className="max-w-2xl text-base leading-8 text-mist sm:text-lg"
              >
                {profile.subheadline}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.22 }}
                className="max-w-xl text-sm uppercase tracking-[0.28em] text-mist"
              >
                {profile.title}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.28 }}
              className="flex flex-col gap-3 sm:flex-row"
            >
              <Link
                href="#projects"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-ink transition hover:translate-y-[-1px]"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center justify-center rounded-full border border-line bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-white/30 hover:bg-white/10"
              >
                Contact Me
              </Link>
              <Link
                href={profile.cvPath}
                download
                className="inline-flex items-center justify-center rounded-full border border-gold/40 bg-gold/10 px-6 py-3.5 text-sm font-semibold text-white transition hover:border-gold hover:bg-gold/20"
              >
                Download CV
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.34 }}
              className="grid gap-4 sm:grid-cols-3"
            >
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="glass-panel px-5 py-5 shadow-card"
                >
                  <p className="font-display text-2xl font-semibold text-white">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-mist">{stat.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.95, delay: 0.16 }}
            className="relative"
          >
            <div className="gradient-border rounded-[32px] p-1 shadow-halo">
              <div className="glass-panel relative overflow-hidden rounded-[30px] px-6 py-7 sm:px-8 sm:py-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(79,209,197,0.18),transparent_36%)]" />
                <div className="relative z-10 space-y-8">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs uppercase tracking-[0.3em] text-mist">
                        Profile Snapshot
                      </p>
                      <p className="mt-3 font-display text-2xl font-semibold text-white">
                        Premium analytics partner
                      </p>
                    </div>
                    <div className="rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold">
                      Available
                    </div>
                  </div>

                  <div className="grid gap-6 xl:grid-cols-[1fr_0.85fr]">
                    <div className="gradient-border rounded-[28px] p-1">
                      <div className="flex min-h-[300px] flex-col items-center justify-center rounded-[26px] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] px-6 text-center">
                        {/* Replace this placeholder card with a real profile image if available. */}
                        {/* Example: swap this block for <Image src="/profile.jpg" ... /> after adding the image to /public. */}
                        <div className="flex h-28 w-28 items-center justify-center rounded-full border border-white/10 bg-white/5 font-display text-3xl font-semibold text-white">
                          AR
                        </div>
                        <p className="mt-5 font-display text-xl font-medium text-white">
                          {profile.name}
                        </p>
                        <p className="mt-2 max-w-xs text-sm leading-7 text-mist">
                          Data analyst focused on high-clarity dashboards, operational insight, and modern AI-enhanced reporting systems.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        {
                          label: "Core Edge",
                          value:
                            "Business storytelling backed by technical depth in SQL, Power BI, Python, and AI workflows.",
                        },
                        {
                          label: "Recent Focus",
                          value:
                            "Dashboards, ETL logic, RAG systems, agentic workflows, and reporting automation.",
                        },
                        {
                          label: "Recruiter Signal",
                          value:
                            "Strong hybrid profile blending analytics, engineering discipline, and emerging AI capability.",
                        },
                      ].map((item) => (
                        <div key={item.label} className="glass-panel p-5">
                          <p className="text-xs uppercase tracking-[0.26em] text-mist">
                            {item.label}
                          </p>
                          <p className="mt-3 text-sm leading-7 text-white/90">
                            {item.value}
                          </p>
                        </div>
                      ))}
                    </div>
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
