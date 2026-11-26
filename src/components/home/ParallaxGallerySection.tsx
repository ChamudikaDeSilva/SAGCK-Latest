"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useScroll, useSpring, useTransform } from "framer-motion";
import { Camera, Maximize2, X } from "lucide-react";
import { GALLERY_PHOTOS, GalleryPhoto } from "@/data/schoolData";
import { RevealBlock } from "@/components/motion/ParallaxPrimitives";

export function ParallaxGallerySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [lightboxPhoto, setLightboxPhoto] = useState<GalleryPhoto | null>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const smooth = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  const yCol1 = useTransform(smooth, [0, 1], [-24, 34]);
  const yCol2 = useTransform(smooth, [0, 1], [38, -46]);
  const yCol3 = useTransform(smooth, [0, 1], [-18, 28]);

  const col1 = GALLERY_PHOTOS.filter((p) => p.column === 1);
  const col2 = GALLERY_PHOTOS.filter((p) => p.column === 2);
  const col3 = GALLERY_PHOTOS.filter((p) => p.column === 3);

  const renderPhotoCard = (photo: GalleryPhoto) => (
    <button
      key={photo.id}
      type="button"
      onClick={() => setLightboxPhoto(photo)}
      className="group relative w-full text-left rounded-3xl overflow-hidden border border-ivory-300 bg-navy-950 shadow-[0_18px_40px_-15px_rgba(12,27,77,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500"
    >
      <div className={`relative w-full ${photo.aspectClass} overflow-hidden`}>
        <Image
          src={photo.src}
          alt={photo.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/90 via-navy-950/20 to-transparent opacity-85 group-hover:opacity-95 transition-opacity" />

        <div className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 backdrop-blur-md border border-white/25 flex items-center justify-center text-ivory-50 opacity-0 group-hover:opacity-100 transition-all duration-300">
          <Maximize2 className="w-4 h-4" />
        </div>

        <div className="absolute bottom-5 left-5 right-5 text-ivory-50">
          <span className="inline-block text-[10px] uppercase tracking-[0.24em] text-gold-400 font-semibold">
            {photo.category}
          </span>
          <h3 className="font-serif text-2xl font-semibold mt-0.5 leading-snug">
            {photo.title}
          </h3>
          <p className="text-xs text-ivory-200/80 mt-1 line-clamp-2">
            {photo.subtitle}
          </p>
        </div>
      </div>
    </button>
  );

  return (
    <section
      ref={sectionRef}
      className="relative py-24 sm:py-32 bg-ivory-100 bg-heritage-grid overflow-hidden"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-8">
        <RevealBlock className="text-center max-w-2xl mx-auto space-y-3 mb-16">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.24em] text-sky-600 font-semibold">
            <Camera className="w-4 h-4 text-gold-600" />
            <span>Campus Atmosphere</span>
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl font-semibold text-navy-900">
            Scenes Across <span className="italic text-sky-600">Katugastota Road</span>
          </h2>
          <p className="text-sm sm:text-base text-navy-900/75">
            Scroll gently to feel the shifting perspective across our heritage colonnades,
            laboratories, reading hall, and misty grounds. Click any scene to expand.
          </p>
        </RevealBlock>

        {/* 3-Column Multi-Speed Parallax Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-start">
          <motion.div style={{ y: yCol1 }} className="space-y-6 lg:space-y-8 will-change-transform">
            {col1.map(renderPhotoCard)}
          </motion.div>

          <motion.div
            style={{ y: yCol2 }}
            className="space-y-6 lg:space-y-8 md:mt-10 will-change-transform"
          >
            {col2.map(renderPhotoCard)}
          </motion.div>

          <motion.div style={{ y: yCol3 }} className="space-y-6 lg:space-y-8 will-change-transform">
            {col3.map(renderPhotoCard)}
          </motion.div>
        </div>
      </div>

      {/* Interactive Lightbox Modal */}
      <AnimatePresence>
        {lightboxPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxPhoto(null)}
            className="fixed inset-0 z-[95] bg-navy-950/88 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.94, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 12 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-4xl w-full rounded-3xl overflow-hidden bg-navy-900 border border-sky-400/30 shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setLightboxPhoto(null)}
                aria-label="Close photo preview"
                className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-navy-950/75 hover:bg-sky-600 text-ivory-50 border border-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-[16/10] w-full">
                <Image
                  src={lightboxPhoto.src}
                  alt={lightboxPhoto.title}
                  fill
                  sizes="90vw"
                  className="object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 bg-navy-950 text-ivory-50 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] uppercase tracking-[0.22em] text-gold-400 font-semibold">
                    {lightboxPhoto.category}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-semibold mt-0.5">
                    {lightboxPhoto.title}
                  </h3>
                  <p className="text-sm text-ivory-200/80 mt-1">{lightboxPhoto.subtitle}</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
