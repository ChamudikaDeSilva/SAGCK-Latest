"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  animate,
  motion,
  useInView,
  useMotionTemplate,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";

interface ParallaxLayerProps {
  children: React.ReactNode;
  offsetY?: [number, number];
  scaleRange?: [number, number];
  className?: string;
}

/**
 * Scroll-linked vertical + scale parallax wrapper bound to its own viewport travel.
 */
export function ParallaxLayer({
  children,
  offsetY = [-36, 36],
  scaleRange,
  className = "",
}: ParallaxLayerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 26,
    restDelta: 0.001,
  });

  const y = useTransform(smoothProgress, [0, 1], offsetY);
  const scale = useTransform(
    smoothProgress,
    [0, 1],
    scaleRange ?? [1, 1]
  );

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div style={scaleRange ? { y, scale } : { y }} className="will-change-transform h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}

interface RevealBlockProps {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

export function RevealBlock({
  children,
  delay = 0,
  direction = "up",
  className = "",
}: RevealBlockProps) {
  const offsets: Record<NonNullable<RevealBlockProps["direction"]>, { x: number; y: number }> = {
    up: { x: 0, y: 28 },
    down: { x: 0, y: -28 },
    left: { x: 32, y: 0 },
    right: { x: -32, y: 0 },
    none: { x: 0, y: 0 },
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: offsets[direction].x, y: offsets[direction].y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, amount: 0.16 }}
      transition={{
        duration: 0.75,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  onClick?: () => void;
}

/**
 * Interactive pointer-reactive 3D perspective card with ambient radial sheen.
 */
export function TiltCard({
  children,
  className = "",
  glowColor = "rgba(200, 155, 60, 0.18)",
  onClick,
}: TiltCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);
  const sheenX = useMotionValue(50);
  const sheenY = useMotionValue(50);

  const springX = useSpring(rotateX, { stiffness: 220, damping: 24 });
  const springY = useSpring(rotateY, { stiffness: 220, damping: 24 });

  const background = useMotionTemplate`radial-gradient(320px circle at ${sheenX}% ${sheenY}%, ${glowColor}, transparent 70%)`;

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = cardRef.current?.getBoundingClientRect();
    if (!rect) return;
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    rotateX.set((0.5 - py) * 10);
    rotateY.set((px - 0.5) * 10);
    sheenX.set(px * 100);
    sheenY.set(py * 100);
  }

  function handleMouseLeave() {
    rotateX.set(0);
    rotateY.set(0);
    sheenX.set(50);
    sheenY.set(50);
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        rotateX: springX,
        rotateY: springY,
        transformPerspective: 950,
      }}
      whileTap={{ scale: 0.985 }}
      className={`relative will-change-transform ${className}`}
    >
      <motion.div
        aria-hidden="true"
        style={{ background }}
        className="pointer-events-none absolute inset-0 rounded-[inherit] z-10"
      />
      {children}
    </motion.div>
  );
}

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
}

export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  durationMs = 1500,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.4 });
  const startVal = target > 1900 ? target - 60 : 0;
  const [display, setDisplay] = useState(startVal);

  useEffect(() => {
    if (!isInView) return;
    const prefersReduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const controls = animate(startVal, target, {
      duration: prefersReduced ? 0 : durationMs / 1000,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (latest) => {
        setDisplay(Math.round(latest));
      },
    });

    return () => controls.stop();
  }, [isInView, startVal, target, durationMs]);

  return (
    <span ref={ref} className="tabular-nums">
      {prefix}
      {target > 2000 ? display.toLocaleString() : display}
      {suffix}
    </span>
  );
}
