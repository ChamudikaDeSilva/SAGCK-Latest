"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import { HERO_STATS, SCHOOL_IDENTITY } from "@/data/schoolData";
import { SchoolCrest } from "@/components/SchoolCrest";
import { AnimatedCounter } from "@/components/motion/ParallaxPrimitives";

export function HeroSection() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const smoothScroll = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 24,
    restDelta: 0.001,
  });

  const bgY = useTransform(smoothScroll, [0, 1], ["0%", "24%"]);
  const bgScale = useTransform(smoothScroll, [0, 1], [1.02, 1.16]);
  const mistY = useTransform(smoothScroll, [0, 1], ["0%", "-14%"]);
  const contentY = useTransform(smoothScroll, [0, 1], ["0%", "18%"]);
  const contentOpacity = useTransform(smoothScroll, [0, 0.72], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-navy-950 text-ivory-50 flex flex-col justify-between pt-28 pb-8 sm:pb-12"
    >
      {/* Layer 0: Parallax Campus Background Photography */}
      <motion.div
        style={{ y: bgY, scale: bgScale }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src="/images/hero.webp"
          alt="St. Anthony's Girls' College Kandy campus nestled against emerald Kandy hills"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Layer 1: Rich Dark Blue & Light Blue Atmospheric Scrims */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy-950/82 via-navy-900/48 to-navy-950/95 pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-navy-950/75 via-transparent to-sky-600/20 pointer-events-none"
      />

      {/* Layer 2: Floating Yellow & Light Blue Ambient Glows */}
      <motion.div
        style={{ y: mistY }}
        aria-hidden="true"
        className="absolute -top-24 right-[-10%] w-[540px] h-[540px] rounded-full bg-sky-400/18 blur-[130px] pointer-events-none"
      />
      <motion.div
        style={{ y: mistY }}
        aria-hidden="true"
        className="absolute bottom-24 left-[-8%] w-[380px] h-[380px] rounded-full bg-gold-400/12 blur-[120px] pointer-events-none"
      />

      {/* Layer 3: Foreground Hero Narrative */}
      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-8 my-auto py-8 sm:py-12"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-6">
            {/* Heritage Eyebrow Pill */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-flex flex-wrap items-center gap-2.5 rounded-full border border-sky-300/35 bg-navy-950/60 backdrop-blur-md px-4 py-1.5 text-xs sm:text-sm"
            >
              <Sparkles className="w-3.5 h-3.5 text-gold-400 shrink-0" />
              <span className="font-sinhala text-sky-300 tracking-wide">
                {SCHOOL_IDENTITY.sinhalaName}
              </span>
              <span className="hidden sm:inline text-gold-400/70">•</span>
              <span className="hidden sm:inline uppercase tracking-[0.2em] text-[11px] text-gold-300 font-semibold">
                Excelsior • Est. 1938
              </span>
            </motion.div>

            {/* Monumental Display Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif text-4xl sm:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.03] text-ivory-50"
            >
              Grace in Learning.{" "}
              <span className="block italic font-normal text-gold-400 mt-1">
                Strength for the Nation.
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl text-base sm:text-lg text-ivory-100/88 leading-relaxed"
            >
              From 38 pioneering girls gathered under one roof in Senkadagala in 1938 to over{" "}
              <strong className="text-sky-300 font-semibold">3,500 Antonian daughters</strong>{" "}
              today—discover Kandy&apos;s distinguished sanctuary of scholarship, bilingual discovery,
              music, and championship athletics.
            </motion.p>

            {/* Primary Actions */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.34, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap items-center gap-4 pt-2"
            >
              <Link
                href="/about"
                className="group inline-flex items-center gap-2.5 rounded-full bg-gold-500 px-6 py-3.5 text-sm font-semibold text-navy-950 shadow-[0_12px_32px_-8px_rgba(242,190,26,0.55)] hover:bg-gold-400 transition-all duration-300"
              >
                <span>Explore Our 1938 Legacy</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/academics"
                className="inline-flex items-center gap-2.5 rounded-full border border-sky-300/40 bg-navy-900/60 backdrop-blur-md px-6 py-3.5 text-sm font-semibold text-ivory-50 hover:bg-sky-500/25 hover:border-sky-300 transition-all duration-300"
              >
                <Compass className="w-4 h-4 text-sky-300" />
                <span>Academic Pathways</span>
              </Link>
            </motion.div>
          </div>

          {/* Right-side Floating Official Crest Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex lg:col-span-4 justify-end"
          >
            <div className="relative rounded-3xl border border-sky-300/30 bg-navy-950/65 backdrop-blur-xl p-8 max-w-xs text-center shadow-2xl">
              <div className="mx-auto flex items-center justify-center">
                <SchoolCrest className="w-28 h-28" animate priority />
              </div>
              <p className="mt-4 text-xs uppercase tracking-[0.28em] text-sky-300 font-semibold">
                Motto • Excelsior
              </p>
              <p className="mt-2 font-sinhala text-base font-medium text-gold-300 leading-snug">
                &ldquo;{SCHOOL_IDENTITY.visionSinhala}&rdquo;
              </p>
              <p className="mt-1.5 text-xs text-ivory-200/80 italic">
                &ldquo;{SCHOOL_IDENTITY.visionEnglish}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-center gap-2 text-[11px] uppercase tracking-[0.2em] text-sky-300">
                <span>Katugastota Rd</span>
                <span>•</span>
                <span>Kandy</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Bottom Stats Bar + Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mx-auto max-w-7xl w-full px-4 sm:px-8"
      >
        <div className="rounded-3xl border border-sky-300/20 bg-navy-950/70 backdrop-blur-xl px-6 py-5 grid grid-cols-2 md:grid-cols-4 gap-6">
          {HERO_STATS.map((stat) => (
            <div key={stat.label} className="space-y-0.5">
              <p className="font-serif text-2xl sm:text-3xl font-semibold text-gold-400">
                <AnimatedCounter
                  target={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix}
                />
              </p>
              <p className="text-xs sm:text-sm text-sky-100/85 font-medium tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        <div className="hidden sm:flex justify-center pt-5">
          <div className="flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.26em] text-sky-200/75">
            <span>Scroll to Explore</span>
            <motion.div
              animate={{ y: [0, 7, 0] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              className="w-px h-6 bg-gradient-to-b from-gold-400 via-sky-400 to-transparent"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
