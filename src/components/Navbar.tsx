"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { SchoolCrest } from "./SchoolCrest";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "Heritage" },
  { href: "/academics", label: "Academics" },
  { href: "/campus-life", label: "Campus Life" },
  { href: "/admissions", label: "Admissions" },
];

export function Navbar() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  const isHeroRoute = pathname === "/";
  const useLightNav = !scrolled && isHeroRoute;

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
          scrolled ? "py-2.5 px-4 sm:px-6" : "py-4 px-4 sm:px-8"
        }`}
      >
        <div
          className={`mx-auto max-w-7xl rounded-full transition-all duration-500 flex items-center justify-between px-4 sm:px-6 py-2.5 ${
            scrolled
              ? "bg-ivory-50/92 backdrop-blur-xl shadow-[0_12px_40px_-10px_rgba(12,27,77,0.16)] border border-sky-400/25"
              : useLightNav
                ? "bg-navy-950/45 backdrop-blur-md border border-sky-300/20"
                : "bg-ivory-50/92 backdrop-blur-xl border border-ivory-300/80 shadow-sm"
          }`}
        >
          {/* Official School Logo & Wordmark */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-400 rounded-full pr-2"
          >
            <SchoolCrest
              className="w-10 h-10 sm:w-11 sm:h-11 transition-transform duration-300 group-hover:scale-105"
              priority
            />
            <div className="flex flex-col leading-none">
              <span
                className={`font-serif text-base sm:text-lg font-semibold tracking-tight transition-colors ${
                  useLightNav ? "text-ivory-50" : "text-navy-900"
                }`}
              >
                St. Anthony&apos;s Girls&apos; College
              </span>
              <span
                className={`text-[10px] sm:text-[11px] uppercase tracking-[0.22em] font-semibold mt-0.5 transition-colors ${
                  useLightNav ? "text-gold-400" : "text-sky-600"
                }`}
              >
                Kandy • Excelsior 1938
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav aria-label="Primary Navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                    active
                      ? useLightNav
                        ? "text-navy-950 font-semibold"
                        : "text-ivory-50 font-semibold"
                      : useLightNav
                        ? "text-ivory-100/88 hover:text-gold-300"
                        : "text-navy-900/75 hover:text-navy-800"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 32 }}
                      className={`absolute inset-0 rounded-full -z-10 ${
                        useLightNav ? "bg-gold-400" : "bg-navy-800"
                      }`}
                    />
                  )}
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action + Mobile Trigger */}
          <div className="flex items-center gap-2.5">
            <Link
              href="/admissions"
              className={`hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-300 ${
                useLightNav
                  ? "bg-sky-400 text-navy-950 hover:bg-gold-400"
                  : "bg-navy-800 text-ivory-50 hover:bg-sky-600"
              }`}
            >
              <span>Inquire</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className={`lg:hidden p-2 rounded-full transition-colors ${
                useLightNav
                  ? "text-ivory-50 hover:bg-white/15"
                  : "text-navy-900 hover:bg-ivory-200"
              }`}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Animated Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[80] bg-navy-950/96 backdrop-blur-xl text-ivory-50 flex flex-col justify-between p-6 sm:p-10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SchoolCrest className="w-11 h-11" />
                <div>
                  <p className="font-serif text-lg font-semibold">
                    St. Anthony&apos;s Girls&apos; College
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400">
                    Kandy • Excelsior 1938
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                aria-label="Close menu"
                className="p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-ivory-50 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <nav aria-label="Mobile Navigation" className="flex flex-col gap-3 my-auto">
              {NAV_LINKS.map((link, idx) => {
                const active = pathname === link.href;
                return (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.06 * idx + 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileOpen(false)}
                      className={`block py-2 font-serif text-4xl sm:text-5xl transition-colors ${
                        active ? "text-gold-400 italic" : "text-ivory-100 hover:text-sky-300"
                      }`}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            <div className="border-t border-white/15 pt-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-ivory-200/75">
              <span>381A Katugastota Road, Kandy 20000, Sri Lanka</span>
              <span className="text-gold-400">+94 81 221 2597</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
