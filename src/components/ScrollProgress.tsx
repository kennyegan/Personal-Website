'use client';

import { motion, useScroll, useSpring, useReducedMotion } from 'framer-motion';

export default function ScrollProgress() {
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 50,
    restDelta: 0.001,
  });

  if (prefersReducedMotion) return null;

  return (
    <motion.div
      className="fixed left-0 right-0 top-0 z-50 h-[2px] origin-left bg-accent-cyan shadow-[0_0_8px_rgba(66,215,255,0.5)]"
      style={{ scaleX }}
    />
  );
}
