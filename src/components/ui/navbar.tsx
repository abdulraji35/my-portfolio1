"use client";

import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { navigationItems, siteContent } from "@/data/portfolio";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [activeSection, setActiveSection] = useState("projects");
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
    <header className="fixed inset-x-0 top-4 z-50">
      <div className="mx-auto hidden w-[min(1120px,calc(100%-1.5rem))] items-center justify-between rounded-full border border-black/10 bg-[rgba(179,171,161,0.82)] px-4 py-3 shadow-float backdrop-blur-xl lg:flex">
        <Link href="#home" className="group flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-white font-display text-sm font-semibold text-ink shadow-sm">
            AR
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink">
              {siteContent.profile.name}
            </p>
            <p className="text-xs text-ink/55">Data Analyst Portfolio</p>
          </div>
        </Link>

        <nav
          aria-label="Primary"
          className="flex items-center gap-1 rounded-full px-1"
        >
          {navigationItems.map((item) => (
            <Link
              key={item.id}
              href={item.href}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-medium text-ink/60 transition hover:bg-white/50 hover:text-ink",
                activeSection === item.id &&
                  "bg-white text-ink shadow-sm",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="inline-flex rounded-full bg-white px-5 py-3 text-sm font-semibold text-ink transition hover:translate-y-[-1px]"
          >
            Start a conversation
          </Link>
        </div>
      </div>

      <div className="mx-auto flex w-[calc(100%-1rem)] items-center justify-between rounded-[28px] border border-black/10 bg-[rgba(255,250,244,0.86)] px-4 py-3 shadow-float backdrop-blur-xl lg:hidden">
        <Link href="#home" className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-ink font-display text-sm font-semibold text-white">
            AR
          </div>
          <div>
            <p className="font-display text-sm font-semibold text-ink">
              {siteContent.profile.name}
            </p>
            <p className="text-xs text-ink/55">Portfolio</p>
          </div>
        </Link>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-black/10 bg-white text-ink"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen((current) => !current)}
        >
          <span className="relative h-4 w-5">
            <span
              className={cn(
                "absolute left-0 top-0 h-0.5 w-5 bg-ink transition",
                menuOpen && "top-1.5 rotate-45",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-1.5 h-0.5 w-5 bg-ink transition",
                menuOpen && "opacity-0",
              )}
            />
            <span
              className={cn(
                "absolute left-0 top-3 h-0.5 w-5 bg-ink transition",
                menuOpen && "top-1.5 -rotate-45",
              )}
            />
          </span>
        </button>
      </div>

      <AnimatePresence>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="mx-auto mt-3 w-[calc(100%-1rem)] overflow-hidden rounded-[28px] border border-black/10 bg-[rgba(255,250,244,0.96)] shadow-float lg:hidden"
          >
            <div className="flex flex-col gap-2 p-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.id}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className={cn(
                    "rounded-2xl border border-transparent px-4 py-3 text-sm font-medium text-ink/70 transition",
                    activeSection === item.id && "border-black/10 bg-white text-ink",
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="mt-2 inline-flex rounded-2xl bg-ink px-4 py-3 text-sm font-semibold text-white"
              >
                Start a conversation
              </Link>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
