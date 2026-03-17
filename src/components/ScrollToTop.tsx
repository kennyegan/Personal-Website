'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > 400);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.25 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.08] bg-surface/80 text-text-secondary shadow-[0_8px_24px_rgba(2,8,23,0.4)] backdrop-blur-md transition-colors duration-200 hover:border-accent-cyan/30 hover:text-accent-cyan"
          aria-label="Scroll to top"
        >
          <ArrowUp size={16} />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
