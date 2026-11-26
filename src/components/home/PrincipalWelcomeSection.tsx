"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Quote } from "lucide-react";
import { SCHOOL_IDENTITY } from "@/data/schoolData";
import { ParallaxLayer, RevealBlock } from "@/components/motion/ParallaxPrimitives";

export function PrincipalWelcomeSection() {
  return (
    <section className="relative py-20 sm:py-28 bg-ivory-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Overlapping Parallax Courtyard Image + Plaque */}
          <div className="lg:col-span-6 relative">
            <ParallaxLayer offsetY={[-22, 22]} scaleRange={[1.03, 1]}>
              <div className="relative aspect-[4/3] sm:aspect-[5/4] rounded-[2rem] overflow-hidden shadow-[0_24px_60px_-15px_rgba(12,27,77,0.22)] border border-ivory-300">
                <Image
                  src="/images/courtyard-arch.jpg"
                  alt="Shaded heritage stone colonnade and sunlit veranda at St. Anthony's Girls' College, Kandy"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/60 via-transparent to-transparent" />
              </div>
            </ParallaxLayer>

            {/* Floating Counter-Moving Heritage Plaque */}
            <div className="relative sm:absolute sm:-bottom-8 sm:-right-4 mt-4 sm:mt-0 z-10 max-w-xs">
              <ParallaxLayer offsetY={[24, -32]}>
                <div className="rounded-2xl bg-navy-900 text-ivory-50 p-6 shadow-2xl border border-sky-400/35">
                  <p className="text-[11px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
                    Excelsior Spirit
                  </p>
                  <p className="mt-2 font-serif text-xl font-semibold leading-snug">
                    From 38 Founding Girls to a Leading National Institution
                  </p>
                  <p className="mt-2 text-xs text-sky-300">
                    381A Katugastota Rd • Kandy 20000
                  </p>
                </div>
              </ParallaxLayer>
            </div>
          </div>

          {/* Right: Editorial Leadership Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <RevealBlock>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
                <Quote className="w-4 h-4 text-gold-600" />
                <span>Leadership &amp; Ethos</span>
              </span>
            </RevealBlock>

            <RevealBlock delay={0.08}>
              <h2 className="font-serif text-3xl sm:text-5xl font-semibold text-navy-900 leading-[1.1]">
                Where Tradition Inspires{" "}
                <span className="italic text-sky-600">Modern Fearlessness</span>
              </h2>
            </RevealBlock>

            <RevealBlock delay={0.14}>
              <p className="text-base sm:text-lg text-navy-900/80 leading-relaxed">
                Every morning beneath the rain trees of Katugastota Road, our daughters step into
                the legacy forged by Father Corne Hyid and Sister Mary Andrew in 1938. Wearing
                our dark blue, light blue, and yellow colors, we unite Sri Lankan values with
                bilingual scholarship, modern STEM laboratories, and artistic expression.
              </p>
            </RevealBlock>

            <RevealBlock delay={0.2}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    title: "Bilingual Fluency",
                    detail: "English Medium from Grade 6 alongside rich Sinhala & Tamil roots.",
                  },
                  {
                    title: "Whole-Girl Growth",
                    detail: "25+ clubs, Cadet Corps, Girl Guides & Kandy's pioneer band.",
                  },
                  {
                    title: "Civic Courage",
                    detail: "Empowering future physicians, engineers, educators & leaders.",
                  },
                ].map((pillar) => (
                  <div
                    key={pillar.title}
                    className="rounded-2xl border border-ivory-300 bg-ivory-50 p-4 shadow-xs"
                  >
                    <h3 className="font-serif text-lg font-semibold text-navy-800">
                      {pillar.title}
                    </h3>
                    <p className="mt-1 text-xs text-navy-900/75 leading-relaxed">
                      {pillar.detail}
                    </p>
                  </div>
                ))}
              </div>
            </RevealBlock>

            <RevealBlock delay={0.25}>
              <div className="pt-3 border-t border-ivory-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <p className="font-serif text-xl font-semibold text-navy-900">
                    {SCHOOL_IDENTITY.principal}
                  </p>
                  <p className="text-xs text-navy-900/65">
                    {SCHOOL_IDENTITY.principalTitle}
                  </p>
                </div>

                <Link
                  href="/about"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-sky-600 transition-colors"
                >
                  <span>Read Full College Story</span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>
    </section>
  );
}
