import React, { ReactNode, memo, useEffect, useState } from 'react';
import { motion } from 'motion/react';

// Singleton listeners to avoid N listeners for N components
let cachedPrefersReduced: boolean | null = null;
const reducedListeners = new Set<(val: boolean) => void>();

let cachedIsMobile: boolean | null = null;
const mobileListeners = new Set<(val: boolean) => void>();
let resizeTimeout: ReturnType<typeof setTimeout> | null = null;

function initGlobalListeners() {
  if (typeof window === 'undefined') return;

  if (cachedPrefersReduced === null && window.matchMedia) {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    cachedPrefersReduced = mq.matches;
    mq.addEventListener?.('change', (e) => {
      cachedPrefersReduced = e.matches;
      reducedListeners.forEach((cb) => cb(e.matches));
    });
  }

  if (cachedIsMobile === null) {
    cachedIsMobile = window.innerWidth < 768;
    window.addEventListener(
      'resize',
      () => {
        if (resizeTimeout) return;
        resizeTimeout = setTimeout(() => {
          resizeTimeout = null;
          const next = window.innerWidth < 768;
          if (next !== cachedIsMobile) {
            cachedIsMobile = next;
            mobileListeners.forEach((cb) => cb(next));
          }
        }, 120);
      },
      { passive: true }
    );
  }
}

/**
 * Shared singleton hook to detect prefers-reduced-motion without duplicating listeners
 */
export const useMotionPreference = (): boolean => {
  const [val, setVal] = useState<boolean>(() => {
    initGlobalListeners();
    return cachedPrefersReduced ?? false;
  });

  useEffect(() => {
    initGlobalListeners();
    reducedListeners.add(setVal);
    return () => {
      reducedListeners.delete(setVal);
    };
  }, []);

  return val;
};

/**
 * Shared singleton hook to detect mobile width (< 768px) with throttled resize
 */
export const useIsMobile = (): boolean => {
  const [val, setVal] = useState<boolean>(() => {
    initGlobalListeners();
    return cachedIsMobile ?? false;
  });

  useEffect(() => {
    initGlobalListeners();
    mobileListeners.add(setVal);
    return () => {
      mobileListeners.delete(setVal);
    };
  }, []);

  return val;
};

interface MotionRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  yOffset?: number;
  duration?: number;
  id?: string;
  amount?: number;
}

/**
 * High-performance section reveal component.
 * - Hardware accelerated with transform3d
 * - Lightweight cubic-bezier easing
 * - viewport: once: true (animates once, never repeats)
 */
export const MotionReveal: React.FC<MotionRevealProps> = memo(({
  children,
  className = '',
  delay = 0,
  yOffset = 28,
  duration = 0.65,
  amount = 0.15,
  id,
}) => {
  const prefersReduced = useMotionPreference();
  const isMobile = useIsMobile();

  const effectiveY = prefersReduced ? 0 : isMobile ? Math.min(yOffset, 16) : yOffset;
  const effectiveDuration = prefersReduced ? 0.35 : duration;

  return (
    <motion.div
      id={id}
      initial={{
        opacity: 0,
        y: effectiveY,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: effectiveDuration,
        delay,
        ease: prefersReduced ? 'easeOut' : [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

MotionReveal.displayName = 'MotionReveal';

export const MotionStaggerContainer: React.FC<{
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  id?: string;
  amount?: number;
}> = memo(({ children, className = '', staggerDelay = 0.08, id, amount = 0.15 }) => {
  const prefersReduced = useMotionPreference();

  return (
    <motion.div
      id={id}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReduced ? 0.04 : staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

MotionStaggerContainer.displayName = 'MotionStaggerContainer';

export const MotionStaggerItem: React.FC<{
  children: ReactNode;
  className?: string;
  yOffset?: number;
  duration?: number;
}> = memo(({ children, className = '', yOffset = 20, duration = 0.55 }) => {
  const prefersReduced = useMotionPreference();
  const isMobile = useIsMobile();

  const effectiveY = prefersReduced ? 0 : isMobile ? Math.min(yOffset, 14) : yOffset;

  return (
    <motion.div
      variants={{
        hidden: {
          opacity: 0,
          y: effectiveY,
        },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: prefersReduced ? 0.3 : duration,
            ease: prefersReduced ? 'easeOut' : [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

MotionStaggerItem.displayName = 'MotionStaggerItem';

export const MotionImageReveal: React.FC<{
  children: ReactNode;
  className?: string;
  delay?: number;
  amount?: number;
}> = memo(({ children, className = '', delay = 0, amount = 0.15 }) => {
  const prefersReduced = useMotionPreference();
  const isMobile = useIsMobile();

  const effectiveY = prefersReduced ? 0 : isMobile ? 12 : 20;

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: effectiveY,
        scale: prefersReduced ? 1 : 0.99,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true, amount }}
      transition={{
        duration: prefersReduced ? 0.35 : 0.65,
        delay,
        ease: prefersReduced ? 'easeOut' : [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
});

MotionImageReveal.displayName = 'MotionImageReveal';
