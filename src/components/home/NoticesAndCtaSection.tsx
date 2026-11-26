"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Bell, Calendar, MapPin, Phone } from "lucide-react";
import { LATEST_NOTICES, SCHOOL_IDENTITY } from "@/data/schoolData";
import { RevealBlock } from "@/components/motion/ParallaxPrimitives";

export function NoticesAndCtaSection() {
  return (
    <section className="relative py-24 sm:py-32 bg-ivory-200/75 border-t border-ivory-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-20">
        {/* Notices Strip */}
        <div>
          <RevealBlock className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
                <Bell className="w-4 h-4 text-gold-600" />
                <span>College Circulars &amp; Calendar</span>
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-navy-900 mt-2">
                Notices &amp; <span className="italic text-sky-600">Milestones</span>
              </h2>
            </div>

            <Link
              href="/admissions"
              className="text-sm font-semibold text-navy-800 hover:text-sky-600 transition-colors inline-flex items-center gap-1.5"
            >
              <span>Admission Inquiries</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealBlock>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LATEST_NOTICES.map((notice, idx) => (
              <RevealBlock key={notice.id} delay={idx * 0.08}>
                <article className="h-full rounded-3xl border border-ivory-300 bg-ivory-50 p-7 shadow-xs hover:shadow-lg hover:border-sky-500/40 transition-all duration-300 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="rounded-full bg-sky-100 text-navy-800 font-semibold px-3 py-1">
                        {notice.category}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-navy-900/60 font-medium">
                        <Calendar className="w-3.5 h-3.5 text-gold-600" />
                        {notice.date}
                      </span>
                    </div>

                    <h3 className="font-serif text-2xl font-semibold text-navy-900 leading-snug">
                      {notice.title}
                    </h3>
                    <p className="text-sm text-navy-900/75 leading-relaxed">
                      {notice.excerpt}
                    </p>
                  </div>

                  <Link
                    href="/admissions"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.18em] font-semibold text-sky-600 hover:text-navy-800 hover:translate-x-1 transition-all"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </article>
              </RevealBlock>
            ))}
          </div>
        </div>

        {/* High-Contrast Invitation Banner in Dark Blue, Light Blue & Yellow */}
        <RevealBlock>
          <div className="relative rounded-[2.25rem] overflow-hidden bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 text-ivory-50 p-8 sm:p-14 shadow-2xl border border-sky-400/30">
            <div
              aria-hidden="true"
              className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-sky-400/20 blur-[90px] pointer-events-none"
            />
            <div
              aria-hidden="true"
              className="absolute -left-16 -bottom-24 w-72 h-72 rounded-full bg-gold-400/15 blur-[90px] pointer-events-none"
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <p className="text-xs uppercase tracking-[0.26em] text-sky-300 font-semibold">
                  Begin Your Antonian Journey • Excelsior
                </p>
                <h2 className="font-serif text-3xl sm:text-5xl font-semibold leading-[1.08]">
                  Visit Our Campus on{" "}
                  <span className="italic text-gold-400">Katugastota Road</span>
                </h2>
                <p className="text-sm sm:text-base text-ivory-100/85 max-w-2xl leading-relaxed">
                  Whether inquiring about Primary admissions, Grade 6 English Medium placements, or
                  Collegiate Advanced Level streams, our office welcomes families and alumnae.
                </p>

                <div className="flex flex-wrap gap-5 pt-2 text-xs sm:text-sm text-ivory-100/90">
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-sky-300" />
                    {SCHOOL_IDENTITY.address}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Phone className="w-4 h-4 text-gold-400" />
                    {SCHOOL_IDENTITY.phone}
                  </span>
                </div>
              </div>

              <div className="lg:col-span-4 flex lg:justify-end">
                <Link
                  href="/admissions"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-7 py-4 text-sm font-semibold text-navy-950 shadow-xl hover:bg-gold-400 hover:scale-[1.02] transition-all duration-300"
                >
                  <span>Admissions &amp; Inquiry Form</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  );
}
