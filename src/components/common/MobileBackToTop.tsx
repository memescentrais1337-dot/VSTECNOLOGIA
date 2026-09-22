import React, { useState, useEffect, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';

/**
 * MobileBackToTop
 * Exclusively active on mobile viewports (sm:hidden).
 * Appears dynamically as the user scrolls down past the hero fold.
 * Tapping smoothly returns the scroll position to the top of the page.
 */
export const MobileBackToTop: React.FC = memo(() => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;
          const show = scrollY > 280;
          setIsVisible((prev) => (prev !== show ? show : prev));
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          id="mobile-floating-back-to-top"
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.8, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 12 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          whileTap={{ scale: 0.9 }}
          className="sm:hidden fixed bottom-21 right-6 z-40 w-11 h-11 rounded-full bg-white/95 text-stone-700 active:bg-stone-100 hover:text-emerald-700 border border-stone-200/90 shadow-md flex items-center justify-center cursor-pointer backdrop-blur-xs transition-colors"
          aria-label="Voltar ao topo da página"
          title="Voltar ao topo"
        >
          <ArrowUp className="w-5 h-5 text-stone-700 stroke-[2.3]" />
        </motion.button>
      )}
    </AnimatePresence>
  );
});

MobileBackToTop.displayName = 'MobileBackToTop';
