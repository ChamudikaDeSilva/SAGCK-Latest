"use client";

import React, { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { CoCurricularMarqueeSection } from "@/components/home/CoCurricularMarqueeSection";
import { HousesShowcaseSection } from "@/components/home/HousesShowcaseSection";
import { CO_CURRICULAR_ITEMS } from "@/data/schoolData";

const CATEGORIES = [
  "All",
  "Leadership & Service",
  "STEM & Innovation",
  "Aesthetics & Music",
  "Athletics & Field Sports",
] as const;

export default function CampusLifePage() {
  const [selectedCategory, setSelectedCategory] = useState<(typeof CATEGORIES)[number]>("All");
  const [query, setQuery] = useState("");

  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    return CO_CURRICULAR_ITEMS.filter((item) => {
      const catMatch = selectedCategory === "All" || item.category === selectedCategory;
      const textMatch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.heritageNote.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q);
      return catMatch && textMatch;
    });
  }, [selectedCategory, query]);

  return (
    <>
      <PageHero
        eyebrow="25+ Clubs • 13+ Sports Disciplines"
        title="Vibrant Life Beyond"
        italicWord="the Classroom"
        description="Explore our rich tapestry of student societies, Kandy's pioneering Western Marching Band, National Cadet Corps, Girl Guides, District Hockey, and Pallekele Women's Cricket."
        image="/images/sports-campus.jpg"
        imageAlt="St. Anthony's Girls' College athletes practicing on the Kandy campus turf"
        currentPage="Campus Life"
      />

      {/* Interactive Filterable Societies & Athletics Directory */}
      <section className="py-20 sm:py-28 bg-ivory-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-8 space-y-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
                <Sparkles className="w-4 h-4 text-gold-600" />
                <span>Co-Curricular Directory</span>
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-900 mt-2">
                Find Your <span className="italic text-sky-600">Society or Squad</span>
              </h2>
            </div>

            {/* Search Input */}
            <div className="relative w-full lg:w-80">
              <Search className="w-4 h-4 text-navy-900/45 absolute left-4 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search band, hockey, robotics..."
                aria-label="Search clubs and sports"
                className="w-full rounded-full border border-ivory-300 bg-ivory-50 pl-11 pr-4 py-2.5 text-sm text-navy-900 placeholder:text-navy-900/45 focus:outline-none focus:ring-2 focus:ring-sky-500"
              />
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => {
              const active = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`relative px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-colors ${
                    active
                      ? "text-ivory-50"
                      : "bg-ivory-200/85 text-navy-900/80 hover:bg-ivory-300/70"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="campus-filter-pill"
                      transition={{ type: "spring", stiffness: 360, damping: 30 }}
                      className="absolute inset-0 rounded-full bg-navy-800 -z-0"
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </button>
              );
            })}
          </div>

          {/* Animated Reordering Grid */}
          <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.article
                  layout
                  key={item.name}
                  initial={{ opacity: 0, scale: 0.94 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.94 }}
                  transition={{ duration: 0.3 }}
                  className="rounded-3xl border border-ivory-300 bg-ivory-50 p-6 shadow-xs hover:shadow-md hover:border-sky-500/45 transition-colors space-y-2.5"
                >
                  <span className="inline-block text-[10px] uppercase tracking-[0.22em] font-semibold text-navy-800 bg-sky-100 px-3 py-1 rounded-full">
                    {item.category}
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-navy-900">
                    {item.name}
                  </h3>
                  <p className="text-sm text-navy-900/75 leading-relaxed">
                    {item.heritageNote}
                  </p>
                </motion.article>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredItems.length === 0 && (
            <div className="rounded-3xl border border-dashed border-ivory-300 p-12 text-center text-sm text-navy-900/70">
              No society or sport matched &ldquo;{query}&rdquo;. Try clearing your filter.
            </div>
          )}
        </div>
      </section>

      <CoCurricularMarqueeSection />
      <HousesShowcaseSection />
    </>
  );
}
