"use client";

import React from "react";
import Link from "next/link";
import { ArrowUp, Globe, MapPin, Phone } from "lucide-react";
import { SCHOOL_IDENTITY } from "@/data/schoolData";
import { SchoolCrest } from "./SchoolCrest";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-navy-950 text-ivory-100 overflow-hidden border-t border-sky-400/20">
      <div className="bg-dark-heritage-grid absolute inset-0 opacity-45 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute -top-40 right-0 w-[520px] h-[520px] rounded-full bg-sky-500/15 blur-[120px] pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute -bottom-32 left-0 w-[400px] h-[400px] rounded-full bg-gold-500/10 blur-[120px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          {/* Brand Column */}
          <div className="md:col-span-5 space-y-5">
            <div className="flex items-center gap-4">
              <SchoolCrest className="w-14 h-14 shrink-0" />
              <div>
                <h2 className="font-serif text-2xl font-semibold text-ivory-50 leading-tight">
                  {SCHOOL_IDENTITY.fullName}
                </h2>
                <p className="font-sinhala text-sm text-sky-300 mt-0.5">
                  {SCHOOL_IDENTITY.sinhalaName}
                </p>
              </div>
            </div>

            <p className="text-sm text-ivory-200/75 leading-relaxed max-w-md">
              {SCHOOL_IDENTITY.mission}
            </p>

            <div className="inline-block rounded-2xl border border-gold-400/30 bg-navy-900/70 px-4 py-3">
              <p className="text-[11px] uppercase tracking-[0.22em] text-sky-300 font-semibold">
                Motto: {SCHOOL_IDENTITY.motto}
              </p>
              <p className="font-sinhala text-sm font-medium text-gold-300 mt-1">
                &ldquo;{SCHOOL_IDENTITY.visionSinhala}&rdquo;
              </p>
              <p className="text-xs text-ivory-200/75 mt-0.5 italic">
                &ldquo;{SCHOOL_IDENTITY.visionEnglish}&rdquo;
              </p>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-gold-400 font-semibold">
              Explore College
            </h3>
            <ul className="space-y-2.5 text-sm text-ivory-200/80">
              <li>
                <Link href="/" className="hover:text-sky-300 transition-colors">
                  Home Showcase
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-sky-300 transition-colors">
                  Heritage &amp; Pioneers (1938)
                </Link>
              </li>
              <li>
                <Link href="/academics" className="hover:text-sky-300 transition-colors">
                  Academic Streams &amp; Labs
                </Link>
              </li>
              <li>
                <Link href="/campus-life" className="hover:text-sky-300 transition-colors">
                  Societies, Band &amp; Sports
                </Link>
              </li>
              <li>
                <Link href="/admissions" className="hover:text-sky-300 transition-colors">
                  Admissions &amp; Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Card */}
          <div className="md:col-span-4 space-y-4">
            <h3 className="text-xs uppercase tracking-[0.22em] text-gold-400 font-semibold">
              Campus Directory
            </h3>
            <div className="space-y-3 text-sm text-ivory-200/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span>{SCHOOL_IDENTITY.address}</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="tel:+94812212597"
                  className="hover:text-gold-400 transition-colors"
                >
                  {SCHOOL_IDENTITY.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-sky-400 shrink-0" />
                <a
                  href="https://www.sagc.sch.lk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold-400 transition-colors"
                >
                  {SCHOOL_IDENTITY.website}
                </a>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <div className="flex items-center gap-1.5" aria-label="Official School Colors: Dark Blue, Light Blue, and Yellow">
                <span className="w-4 h-4 rounded-full bg-navy-800 border border-white/25" title="Dark Blue" />
                <span className="w-4 h-4 rounded-full bg-sky-400 border border-white/25" title="Light Blue" />
                <span className="w-4 h-4 rounded-full bg-gold-400 border border-white/25" title="Yellow" />
              </div>
              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-sky-400/30 bg-white/5 text-xs font-medium text-ivory-100 hover:bg-gold-400 hover:text-navy-950 hover:border-gold-400 transition-all duration-300"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory-200/60">
          <p>
            &copy; {SCHOOL_IDENTITY.copyrightYear} {SCHOOL_IDENTITY.fullName}. Founded{" "}
            {SCHOOL_IDENTITY.foundedDate}.
          </p>
          <p>Dark Blue • Light Blue • Yellow | Kandy, Sri Lanka</p>
        </div>
      </div>
    </footer>
  );
}
