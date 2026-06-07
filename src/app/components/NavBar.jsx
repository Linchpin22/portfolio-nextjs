"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home",       href: "#home"       },
  { label: "About",      href: "#about"      },
  { label: "Skills",     href: "#skills"     },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects"   },
  { label: "Contact",    href: "#contact"    },
];

export default function Navbar() {
  const [isOpen, setIsOpen]       = useState(false);
  const [scrolled, setScrolled]   = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-[999] transition-all duration-300 ${
          scrolled
            ? "bg-[#0f0f0f]/85 backdrop-blur-md border-b border-white/8 py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">

          {/* Logo */}
          <Link
            href="/"
            className="text-white font-semibold text-lg tracking-tight"
          >
            Anuj<span className="text-white/40">.</span>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-7">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm text-white/60 hover:text-white transition-colors duration-150"
              >
                {l.label}
              </Link>
            ))}
          </div>

          {/* Desktop actions */}
          <div className="hidden md:flex items-center gap-2">
            <Link
              href="https://drive.google.com/file/d/1oSatgM5YKsSssvZRcbT0BBsgychuLwDN/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium px-4 py-1.5 rounded-lg border border-white/15 text-white/80 hover:border-white/35 hover:text-white hover:bg-white/5 transition-all duration-150"
            >
              Resume
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium px-4 py-1.5 rounded-lg bg-white text-black hover:bg-white/90 transition-all duration-150"
            >
              Hire me
            </Link>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setIsOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="fixed top-0 right-0 z-50 h-full w-72 bg-[#111] border-l border-white/10 flex flex-col p-6"
            >
              <div className="flex justify-between items-center mb-10">
                <span className="text-white font-semibold text-lg">
                  Anuj<span className="text-white/40">.</span>
                </span>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-white/50 hover:text-white"
                  aria-label="Close menu"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="flex flex-col gap-1 flex-1">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    onClick={() => setIsOpen(false)}
                    className="text-white/60 hover:text-white hover:bg-white/5 text-base font-medium px-3 py-2.5 rounded-lg transition-all duration-150"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="flex flex-col gap-2 pt-6 border-t border-white/10">
                <Link
                  href="https://drive.google.com/file/d/1WHNnaPDt_L0RaoZ1BQ_M_egVc_jDjWDq/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="text-sm font-medium text-center py-2.5 rounded-lg border border-white/15 text-white/80 hover:border-white/30 hover:text-white transition-all"
                >
                  Resume
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}