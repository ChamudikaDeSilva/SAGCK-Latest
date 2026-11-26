"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { SCHOOL_IDENTITY } from "@/data/schoolData";

function ScrubWord({
  word,
  index,
  total,
  progress,
}: {
  word: string;
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
}) {
  const start = index / total;
  const end = Math.min(1, start + 1.4 / total);
  const opacity = useTransform(progress, [start, end], [0.22, 1]);

  return (
    <motion.span style={{ opacity }} className="inline-block mr-[0.28em]">
      {word}
    </motion.span>
  );
}

export function VisionManifestoSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 0.85", "center 0.45"],
  });

  const statement =
    "Excelsior — ever higher. A proud daughter for the strength of the nation, rooted in Katugastota heritage since 1938.";
  const words = statement.split(" ");

  return (
    <section
      ref={sectionRef}
      className="relative py-20 sm:py-28 bg-ivory-100 bg-heritage-grid border-b border-ivory-300/80 overflow-hidden"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.26em] text-sky-600 font-semibold">
          <span className="h-px w-8 bg-gold-500" />
          <span>College Vision &amp; Excelsior</span>
          <span className="h-px w-8 bg-gold-500" />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7 }}
          className="font-sinhala text-2xl sm:text-3xl md:text-4xl font-semibold text-navy-800 leading-snug"
        >
          &ldquo;{SCHOOL_IDENTITY.visionSinhala}&rdquo;
        </motion.p>

        <h2 className="font-serif text-3xl sm:text-5xl md:text-[3.25rem] font-medium leading-[1.18] text-navy-900">
          {words.map((word, idx) => (
            <ScrubWord
              key={`${word}-${idx}`}
              word={word}
              index={idx}
              total={words.length}
              progress={scrollYProgress}
            />
          ))}
        </h2>

        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          {[
            "Dark Blue • Light Blue • Yellow",
            "Rev. Fr. Corne Hyid, Founder",
            "Good Shepherd Pioneers",
          ].map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-sky-500/25 bg-ivory-50 px-4 py-1.5 text-xs font-medium text-navy-800 shadow-xs"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
