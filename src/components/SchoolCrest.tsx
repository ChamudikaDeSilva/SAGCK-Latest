"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface SchoolCrestProps {
  className?: string;
  animate?: boolean;
  priority?: boolean;
}

/**
 * Displays the official St. Anthony's Girls' College, Kandy crest (/images/logo.jpeg)
 * inside a crisp, elevated white crest medallion with school yellow and light blue framing.
 */
export function SchoolCrest({
  className = "w-11 h-11",
  animate = false,
  priority = false,
}: SchoolCrestProps) {
  return (
    <motion.div
      initial={animate ? { opacity: 0, scale: 0.9 } : false}
      animate={animate ? { opacity: 1, scale: 1 } : undefined}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative shrink-0 overflow-hidden rounded-2xl bg-white p-1 shadow-[0_6px_20px_-4px_rgba(12,27,77,0.35)] ring-2 ring-gold-400/80 ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-xl bg-white">
        <Image
          src="/images/logo.jpeg"
          alt="St. Anthony's Girls' College, Kandy Official Crest - SAGC Excelsior"
          fill
          priority={priority}
          sizes="160px"
          className="object-cover object-[47%_54%] scale-[1.08]"
        />
      </div>
    </motion.div>
  );
}
