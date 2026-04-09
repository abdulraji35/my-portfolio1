"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems, siteContent } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("about");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -45% 0px", threshold: 0.1 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink/70 backdrop-blur-xl">
      <div className="container-shell flex min-h-[76px] items-center justify-between gap-4">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 font-display text-sm font-semibold text-white">
            AR
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-white">
              {siteContent.profile.name}
            </p>
            <p className="text-xs text-mist">Data Analyst Portfolio</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="hidden items-center gap-2 rounded-full border border-line bg-white/5 px-3 py-2 lg:flex"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm text-mist transition",
                activeSection === item.id &&
                  "bg-white text-ink shadow-[0_10px_30px_rgba(255,255,255,0.12)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteContent.profile.cvPath}
            download
            className="hidden rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-medium text-white transition hover:border-gold hover:bg-gold/20 lg:inline-flex"
          >
            Download CV
          </Link>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-line bg-white/5 text-white lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label="Toggle navigation menu"
            onClick={() => setMenuOpen((current) => !current)}
          >
            <span className="relative h-4 w-5">
              <span
                className={cn(
                  "absolute left-0 top-0 h-0.5 w-5 bg-white transition",
                  menuOpen && "top-1.5 rotate-45",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1.5 h-0.5 w-5 bg-white transition",
                  menuOpen && "opacity-0",
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-3 h-0.5 w-5 bg-white transition",
                  menuOpen && "top-1.5 -rotate-45",
                )}
              />
            </span>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden border-t border-white/5 lg:hidden"
          >
            <div className="container-shell flex flex-col gap-2 py-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-2xl border border-transparent px-4 py-3 text-sm text-mist transition",
                    activeSection === item.id && "border-line bg-white/5 text-white",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href={siteContent.profile.cvPath}
                download
                className="mt-2 inline-flex rounded-2xl border border-gold/40 bg-gold/10 px-4 py-3 text-sm font-medium text-white"
              >
                Download CV
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
