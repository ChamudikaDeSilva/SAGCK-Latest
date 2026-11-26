"use client";

import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Award, Shield, X } from "lucide-react";
import { FOUR_HOUSES, HouseProfile } from "@/data/schoolData";
import { RevealBlock, TiltCard } from "@/components/motion/ParallaxPrimitives";

export function HousesShowcaseSection() {
  const [selectedHouse, setSelectedHouse] = useState<HouseProfile | null>(null);

  return (
    <section className="relative py-24 sm:py-32 bg-ivory-100 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <RevealBlock className="space-y-3 max-w-2xl">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
              <Shield className="w-4 h-4 text-gold-600" />
              <span>The Inter-House System</span>
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-900 leading-[1.08]">
              Four Houses Honoring{" "}
              <span className="italic text-sky-600">Founding Pioneers</span>
            </h2>
          </RevealBlock>

          <RevealBlock delay={0.1}>
            <p className="max-w-sm text-sm text-navy-900/75 leading-relaxed">
              Every Antonian daughter belongs to a living fellowship named for the visionary
              sisters and principals who built our college. Click any crest to read its story.
            </p>
          </RevealBlock>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {FOUR_HOUSES.map((house, idx) => (
            <RevealBlock key={house.id} delay={idx * 0.08}>
              <TiltCard
                onClick={() => setSelectedHouse(house)}
                glowColor={`${house.accentHex}33`}
                className="group cursor-pointer rounded-3xl overflow-hidden shadow-[0_18px_40px_-15px_rgba(12,27,77,0.22)] border border-white/15 h-full"
              >
                <div
                  style={{ backgroundColor: house.colorHex, color: house.textHex }}
                  className="p-7 h-full flex flex-col justify-between min-h-[340px] relative"
                >
                  <div
                    aria-hidden="true"
                    className="absolute -right-8 -top-8 w-36 h-36 rounded-full opacity-18 transition-transform duration-500 group-hover:scale-125"
                    style={{ backgroundColor: house.accentHex }}
                  />

                  <div className="relative z-10 space-y-4">
                    <div className="flex items-center justify-between">
                      <span
                        className="inline-flex items-center justify-center w-12 h-12 rounded-2xl border border-white/25 font-serif text-2xl font-bold shadow-inner"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.12)",
                          color: house.accentHex,
                        }}
                      >
                        {house.name.charAt(0)}
                      </span>
                      <span
                        className="text-[11px] uppercase tracking-[0.2em] font-semibold"
                        style={{ color: house.accentHex }}
                      >
                        House 0{idx + 1}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-serif text-3xl font-semibold tracking-tight">
                        {house.name}
                      </h3>
                      <p className="mt-1 text-xs font-medium text-white/85">
                        {house.patron}
                      </p>
                    </div>

                    <p className="text-sm text-white/85 leading-relaxed italic font-serif">
                      &ldquo;{house.motto}&rdquo;
                    </p>
                  </div>

                  <div className="relative z-10 pt-5 mt-5 border-t border-white/20 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {house.values.map((val) => (
                        <span
                          key={val}
                          className="rounded-full bg-white/12 px-2.5 py-0.5 text-[11px] font-medium text-white/95"
                        >
                          {val}
                        </span>
                      ))}
                    </div>

                    <span
                      className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.16em] group-hover:translate-x-1 transition-transform"
                      style={{ color: house.accentHex }}
                    >
                      <span>Inspect Heritage</span>
                      <span>→</span>
                    </span>
                  </div>
                </div>
              </TiltCard>
            </RevealBlock>
          ))}
        </div>
      </div>

      {/* Interactive House Heritage Modal */}
      <AnimatePresence>
        {selectedHouse && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedHouse(null)}
            className="fixed inset-0 z-[90] bg-navy-950/75 backdrop-blur-md flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 18 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.94, y: 12 }}
              transition={{ type: "spring", stiffness: 320, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-lg w-full rounded-[2rem] overflow-hidden bg-ivory-50 border border-ivory-300 shadow-2xl"
            >
              <div
                style={{ backgroundColor: selectedHouse.colorHex }}
                className="p-8 text-ivory-50 relative"
              >
                <button
                  type="button"
                  onClick={() => setSelectedHouse(null)}
                  aria-label="Close house details"
                  className="absolute top-5 right-5 p-2 rounded-full bg-black/25 hover:bg-black/45 text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
                <p
                  className="text-xs uppercase tracking-[0.24em] font-semibold"
                  style={{ color: selectedHouse.accentHex }}
                >
                  Patron Heritage
                </p>
                <h3 className="font-serif text-4xl font-semibold mt-1">
                  {selectedHouse.name}
                </h3>
                <p className="text-sm text-white/85 mt-1">
                  Honoring {selectedHouse.patron} • {selectedHouse.patronRole}
                </p>
              </div>

              <div className="p-8 space-y-5 text-navy-900">
                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-sky-600 font-semibold">
                    House Ethos
                  </p>
                  <p className="font-serif text-2xl italic text-navy-900 mt-1">
                    &ldquo;{selectedHouse.motto}&rdquo;
                  </p>
                </div>

                <p className="text-sm text-navy-900/80 leading-relaxed">
                  {selectedHouse.story}
                </p>

                <div className="rounded-2xl bg-ivory-200/85 border border-ivory-300 p-4 flex items-start gap-3">
                  <Award className="w-5 h-5 text-gold-600 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-navy-800">
                      Co-Curricular Distinction
                    </p>
                    <p className="text-sm text-navy-900/85 mt-0.5">
                      {selectedHouse.legacyWins}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
