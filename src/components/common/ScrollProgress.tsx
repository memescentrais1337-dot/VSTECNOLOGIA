import React from 'react';
import { motion, useScroll } from 'motion/react';
import { useMotionPreference } from './MotionReveal';

/**
 * High-performance, transform-based scroll progress indicator.
 * - Thickness: 2.5px
 * - Color: Institutional Emerald (#059669 / #047857)
 * - Uses GPU-accelerated scaleX with transform-origin: 0%
 * - Zero layout recalculations (no width/height mutations)
 */
export const ScrollProgress: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const prefersReduced = useMotionPreference();

  if (prefersReduced) {
    return null;
  }

  return (
    <motion.div
      id="global-scroll-progress"
      style={{
        scaleX: scrollYProgress,
        transformOrigin: '0%',
      }}
      className="fixed top-0 left-0 right-0 h-[2.5px] bg-emerald-600 z-50 pointer-events-none shadow-[0_0_8px_rgba(5,150,105,0.4)]"
      aria-hidden="true"
    />
  );
};
