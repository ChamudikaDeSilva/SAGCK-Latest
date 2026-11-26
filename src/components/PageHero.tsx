"use client";

import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ChevronRight } from "lucide-react";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  italicWord?: string;
  description: string;
  image: string;
  imageAlt: string;
  currentPage: string;
}

export function PageHero({
  eyebrow,
  title,
  italicWord,
  description,
  image,
  imageAlt,
  currentPage,
}: PageHeroProps) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const smooth = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  const bgY = useTransform(smooth, [0, 1], ["0%", "22%"]);
  const bgScale = useTransform(smooth, [0, 1], [1.02, 1.12]);

  return (
    <section
      ref={ref}
      className="relative pt-36 pb-20 sm:pt-44 sm:pb-28 bg-navy-950 text-ivory-50 overflow-hidden"
    >
      <motion.div style={{ y: bgY, scale: bgScale }} className="absolute inset-0 will-change-transform">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-50"
        />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-navy-950/80 via-navy-950/65 to-navy-950 pointer-events-none"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 space-y-5">
        <nav
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.2em] text-ivory-200/75"
        >
          <Link href="/" className="hover:text-gold-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gold-500" />
          <span className="text-gold-400 font-semibold">{currentPage}</span>
        </nav>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs uppercase tracking-[0.26em] text-gold-400 font-semibold"
        >
          {eyebrow}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="font-serif text-4xl sm:text-6xl font-semibold text-ivory-50 max-w-4xl leading-[1.08]"
        >
          {title}{" "}
          {italicWord && (
            <span className="italic font-normal text-gold-400">{italicWord}</span>
          )}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16 }}
          className="max-w-2xl text-base sm:text-lg text-ivory-200/85 leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  );
}

