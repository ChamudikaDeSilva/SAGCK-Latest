"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap } from "lucide-react";
import { ACADEMIC_PATHWAYS } from "@/data/schoolData";
import { ParallaxLayer, RevealBlock } from "@/components/motion/ParallaxPrimitives";

export function AcademicsExplorerSection() {
  const [activeTab, setActiveTab] = useState(ACADEMIC_PATHWAYS[1].id);
  const current =
    ACADEMIC_PATHWAYS.find((p) => p.id === activeTab) ?? ACADEMIC_PATHWAYS[0];

  return (
    <section className="relative py-24 sm:py-32 bg-ivory-200/75 border-y border-ivory-300 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <RevealBlock className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
              <GraduationCap className="w-4 h-4 text-gold-600" />
              <span>Academic Architecture</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-900 leading-[1.08]">
              Pathways From Curious{" "}
              <span className="italic text-sky-600">First Steps</span> to University
            </h2>
          </RevealBlock>

          {/* Animated layoutId Pill Switcher */}
          <div
            role="tablist"
            aria-label="Academic Divisions"
            className="inline-flex flex-wrap gap-1.5 rounded-full bg-ivory-50 p-1.5 border border-ivory-300 shadow-xs"
          >
            {ACADEMIC_PATHWAYS.map((pathway) => {
              const selected = pathway.id === activeTab;
              return (
                <button
                  key={pathway.id}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  onClick={() => setActiveTab(pathway.id)}
                  className={`relative px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    selected ? "text-ivory-50" : "text-navy-900/75 hover:text-navy-800"
                  }`}
                >
                  {selected && (
                    <motion.span
                      layoutId="academics-tab-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-navy-800 -z-0"
                    />
                  )}
                  <span className="relative z-10">{pathway.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Pathway Panel */}
        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center rounded-[2rem] bg-ivory-50 border border-ivory-300 p-6 sm:p-10 shadow-[0_20px_50px_-20px_rgba(12,27,77,0.12)]"
          >
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="rounded-full bg-navy-800 text-gold-400 px-3.5 py-1 text-xs font-semibold tracking-wider uppercase">
                  {current.grades}
                </span>
                {current.mediums.map((med) => (
                  <span
                    key={med}
                    className="rounded-full border border-sky-500/25 bg-sky-100 px-3 py-1 text-xs font-medium text-navy-800"
                  >
                    {med}
                  </span>
                ))}
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900">
                  {current.headline}
                </h3>
                <p className="mt-3 text-sm sm:text-base text-navy-900/78 leading-relaxed">
                  {current.summary}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {current.streams.map((stream) => (
                  <div
                    key={stream.name}
                    className="rounded-2xl border border-ivory-300 bg-ivory-100/80 p-4 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-navy-800 font-semibold text-sm">
                      <BookOpen className="w-4 h-4 text-sky-600 shrink-0" />
                      <span>{stream.name}</span>
                    </div>
                    <p className="text-xs text-navy-900/75 leading-relaxed">
                      {stream.detail}
                    </p>
                  </div>
                ))}
              </div>

              <ul className="space-y-2 pt-1">
                {current.highlights.map((h) => (
                  <li
                    key={h}
                    className="flex items-center gap-2.5 text-sm text-navy-900/85 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-gold-600 shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>

              <div className="pt-2">
                <Link
                  href="/academics"
                  className="inline-flex items-center gap-2 rounded-full bg-navy-800 text-ivory-50 px-5 py-3 text-sm font-semibold hover:bg-sky-600 transition-colors"
                >
                  <span>Full Curriculum &amp; Labs</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-5">
              <ParallaxLayer offsetY={[-16, 16]}>
                <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border border-ivory-300 shadow-lg">
                  <Image
                    src={current.image}
                    alt={current.headline}
                    fill
                    sizes="(max-width: 1024px) 100vw, 42vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-950/65 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-navy-950/80 backdrop-blur-md border border-sky-300/25 px-4 py-3 text-ivory-50">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400">
                      {current.label}
                    </p>
                    <p className="font-serif text-lg font-medium">{current.grades}</p>
                  </div>
                </div>
              </ParallaxLayer>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
