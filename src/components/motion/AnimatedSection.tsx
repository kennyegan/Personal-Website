'use client';

import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  delay = 0,
  className,
  once = true,
}: AnimatedSectionProps) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-80px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
