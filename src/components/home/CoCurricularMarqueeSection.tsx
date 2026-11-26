"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Music, Trophy } from "lucide-react";
import { CO_CURRICULAR_ITEMS } from "@/data/schoolData";
import { ParallaxLayer, RevealBlock } from "@/components/motion/ParallaxPrimitives";

export function CoCurricularMarqueeSection() {
  const rowOne = CO_CURRICULAR_ITEMS.slice(0, 7);
  const rowTwo = CO_CURRICULAR_ITEMS.slice(7);

  return (
    <section className="relative py-24 sm:py-32 bg-navy-900 text-ivory-100 overflow-hidden">
      <div className="bg-dark-heritage-grid absolute inset-0 opacity-40 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-8 space-y-16">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <RevealBlock className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-gold-400 font-semibold">
              <Trophy className="w-4 h-4" />
              <span>25+ Societies &amp; 13+ Athletics Disciplines</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-ivory-50 leading-[1.08]">
              From Brass Triumphs to{" "}
              <span className="italic text-sky-300">Pallekele Greens</span>
            </h2>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <Link
              href="/campus-life"
              className="inline-flex items-center gap-2 rounded-full border border-gold-400/45 bg-navy-800/70 px-5 py-3 text-sm font-semibold text-gold-300 hover:bg-gold-400 hover:text-navy-950 transition-all duration-300"
            >
              <span>Explore All Clubs &amp; Sports</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </RevealBlock>
        </div>

        {/* Dual Parallax Spotlight Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          <ParallaxLayer offsetY={[-16, 16]}>
            <div className="group h-full rounded-[2rem] overflow-hidden border border-sky-300/20 bg-navy-950/75 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/band-heritage.jpg"
                  alt="Brass marching instruments and dark blue, light blue, and yellow banners of the St. Anthony's Girls' College Western Band"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-navy-800/95 border border-sky-300/40 px-3.5 py-1 text-xs font-semibold text-sky-200">
                  <Music className="w-3.5 h-3.5 text-gold-400" />
                  <span>First in Kandy District</span>
                </span>
              </div>

              <div className="p-7 sm:p-8 space-y-3 flex-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-50">
                  The 1967 Champion Western Band
                </h3>
                <p className="text-sm text-ivory-200/80 leading-relaxed">
                  St. Anthony&apos;s Girls&apos; College pioneered the very first western school
                  band in the Kandy district, winning the prestigious Bandaranaike Memorial
                  Championship in 1967—a melodic legacy carried proudly today alongside our Girl
                  Guides and National Cadet Corps.
                </p>
              </div>
            </div>
          </ParallaxLayer>

          <ParallaxLayer offsetY={[18, -18]}>
            <div className="group h-full rounded-[2rem] overflow-hidden border border-sky-300/20 bg-navy-950/75 flex flex-col">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src="/images/sports-campus.jpg"
                  alt="Antonian female student athletes practicing field hockey and cricket against misty Kandy mountains"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950 via-navy-950/20 to-transparent" />
                <span className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-gold-500 px-3.5 py-1 text-xs font-semibold text-navy-950">
                  <Trophy className="w-3.5 h-3.5" />
                  <span>13+ Competitive Sports</span>
                </span>
              </div>

              <div className="p-7 sm:p-8 space-y-3 flex-1">
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-ivory-50">
                  District Hockey &amp; Pallekele Women&apos;s Cricket
                </h3>
                <p className="text-sm text-ivory-200/80 leading-relaxed">
                  From fiercely contested Kandy District field hockey matches to our celebrated
                  annual Women&apos;s Cricket encounter against Mahamaya Balika Vidyalaya at
                  Pallekele International Cricket Stadium, our daughters compete in dark blue,
                  light blue, and yellow with sportsmanship and grit.
                </p>
              </div>
            </div>
          </ParallaxLayer>
        </div>
      </div>

      {/* Dual Counter-Scrolling Infinite Marquee */}
      <div className="relative z-10 mt-16 space-y-4 marquee-group">
        <div className="overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee-left">
            {[...rowOne, ...rowOne].map((item, idx) => (
              <div
                key={`r1-${item.name}-${idx}`}
                className="shrink-0 w-72 rounded-2xl border border-sky-300/18 bg-white/[0.05] backdrop-blur-sm px-5 py-4 hover:border-gold-400/55 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-gold-400 font-semibold">
                  {item.category}
                </p>
                <h4 className="font-serif text-xl font-semibold text-ivory-50 mt-1">
                  {item.name}
                </h4>
                <p className="text-xs text-ivory-200/75 mt-1.5 line-clamp-2">
                  {item.heritageNote}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden">
          <div className="flex w-max gap-4 animate-marquee-right">
            {[...rowTwo, ...rowTwo].map((item, idx) => (
              <div
                key={`r2-${item.name}-${idx}`}
                className="shrink-0 w-72 rounded-2xl border border-sky-400/25 bg-navy-800/55 backdrop-blur-sm px-5 py-4 hover:border-sky-300/65 transition-colors"
              >
                <p className="text-[10px] uppercase tracking-[0.22em] text-sky-300 font-semibold">
                  {item.category}
                </p>
                <h4 className="font-serif text-xl font-semibold text-ivory-50 mt-1">
                  {item.name}
                </h4>
                <p className="text-xs text-ivory-200/75 mt-1.5 line-clamp-2">
                  {item.heritageNote}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
