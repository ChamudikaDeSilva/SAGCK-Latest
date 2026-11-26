"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring } from "framer-motion";
import { HERITAGE_TIMELINE } from "@/data/schoolData";
import { RevealBlock } from "@/components/motion/ParallaxPrimitives";

export function HeritageTimelineSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.7", "end 0.7"],
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 26,
    restDelta: 0.001,
  });

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-navy-950 text-ivory-100 overflow-x-clip"
    >
      <div className="bg-dark-heritage-grid absolute inset-0 opacity-45 pointer-events-none" />
      <div
        aria-hidden="true"
        className="absolute top-20 -left-24 w-[420px] h-[420px] rounded-full bg-sky-500/20 blur-[130px] pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Sticky Heritage Sidebar */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 space-y-6">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.26em] text-sky-300 font-semibold">
              <span className="h-px w-8 bg-gold-400" />
              <span>Chronicle of Resilience</span>
            </span>

            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-ivory-50 leading-[1.08]">
              Eight Decades of{" "}
              <span className="italic text-gold-400">Senkadagala</span> History
            </h2>

            <p className="text-sm sm:text-base text-ivory-200/75 leading-relaxed max-w-md">
              Born from faith and defended by Kandy parents, St. Anthony&apos;s Girls&apos; College
              evolved from one classroom into a powerhouse of academic and co-curricular distinction.
            </p>

            {/* Scroll-linked Vertical Timeline Progress Rail */}
            <div className="hidden lg:flex items-center gap-4 pt-4">
              <div className="relative w-1 h-40 rounded-full bg-white/15 overflow-hidden">
                <motion.div
                  style={{ scaleY }}
                  className="w-full h-full origin-top bg-gradient-to-b from-gold-400 via-sky-400 to-navy-700"
                />
              </div>
              <div className="text-xs text-ivory-200/70 space-y-1">
                <p className="font-semibold text-gold-300 uppercase tracking-[0.2em]">
                  1938 → Today
                </p>
                <p>Scroll through milestones shaping generations of Antonian daughters.</p>
              </div>
            </div>
          </div>

          {/* Right: Milestone Timeline Cards */}
          <div className="lg:col-span-7 relative space-y-8 pl-6 sm:pl-10 border-l border-sky-400/25">
            {HERITAGE_TIMELINE.map((item, idx) => (
              <RevealBlock key={item.year} delay={idx * 0.05} direction="up">
                <article className="group relative rounded-3xl border border-white/12 bg-white/[0.04] backdrop-blur-md p-6 sm:p-8 hover:border-sky-400/50 hover:bg-white/[0.07] transition-all duration-300">
                  {/* Timeline Node Dot */}
                  <span
                    aria-hidden="true"
                    className="absolute -left-[31px] sm:-left-[47px] top-8 w-3.5 h-3.5 rounded-full bg-gold-400 ring-4 ring-navy-950 group-hover:scale-125 transition-transform"
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                    <div className="sm:col-span-8 space-y-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <span className="font-serif text-2xl sm:text-3xl font-semibold text-gold-400">
                          {item.year}
                        </span>
                        <span className="rounded-full bg-navy-800 border border-sky-400/35 px-3 py-0.5 text-[11px] uppercase tracking-[0.18em] text-sky-200">
                          {item.era}
                        </span>
                      </div>

                      <h3 className="font-serif text-xl sm:text-2xl font-semibold text-ivory-50">
                        {item.title}
                      </h3>

                      <p className="text-sm text-ivory-200/80 leading-relaxed">
                        {item.description}
                      </p>

                      <p className="pt-1 text-xs font-semibold text-sky-300 tracking-wide">
                        ✦ {item.highlight}
                      </p>
                    </div>

                    <div className="sm:col-span-4">
                      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/15">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          sizes="(max-width: 640px) 100vw, 220px"
                          className="object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </div>
                    </div>
                  </div>
                </article>
              </RevealBlock>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
