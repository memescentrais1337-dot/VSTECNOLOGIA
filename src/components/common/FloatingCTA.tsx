import React, { useState, useEffect, useRef, memo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, MessageSquare, ArrowRight } from 'lucide-react';
import { useNavigation, smoothScrollToY } from '../../context/NavigationContext';
import { useMotionPreference } from './MotionReveal';

export const FloatingCTA: React.FC = memo(() => {
  const { currentPath, scrollToSection, openLeadModalWithData, isLeadModalOpen, isSearchOpen } =
    useNavigation();
  const prefersReduced = useMotionPreference();

  const [isVisible, setIsVisible] = useState(false);
  const [isNearFormOrFooter, setIsNearFormOrFooter] = useState(false);
  const targetBottomElementRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    // Cache target element to avoid querySelector / getElementById on every scroll frame
    const findBottomElement = () => {
      targetBottomElementRef.current =
        document.getElementById('specialist-cta-section') ||
        document.getElementById('contato-especialista') ||
        document.getElementById('corporate-footer');
    };

    findBottomElement();
    const timer = setTimeout(findBottomElement, 600);
    return () => clearTimeout(timer);
  }, [currentPath]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;

          // 1. Appear only after user scrolls past the first fold (> 480px)
          const passedHero = scrollY > 480;
          setIsVisible((prev) => (prev !== passedHero ? passedHero : prev));

          // 2. Hide when near form or footer
          const formEl = targetBottomElementRef.current;
          let nearBottom = false;
          if (passedHero && formEl) {
            const rect = formEl.getBoundingClientRect();
            nearBottom = rect.top <= window.innerHeight + 60;
          }
          setIsNearFormOrFooter((prev) => (prev !== nearBottom ? nearBottom : prev));

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  // Don't display if modals are open or user hasn't scrolled past hero or is near form
  const shouldShowCTA = isVisible && !isNearFormOrFooter && !isLeadModalOpen && !isSearchOpen;
  const shouldShowBackToTop = isVisible && !isLeadModalOpen && !isSearchOpen;

  const handleCTAClick = () => {
    if (
      scrollToSection('specialist-cta-section') ||
      scrollToSection('contato-especialista')
    ) {
      return;
    }
    openLeadModalWithData({ purpose: 'Empresa / Uso próprio' });
  };

  const handleBackToTop = () => {
    smoothScrollToY(0);
  };

  return (
    <>
      {/* DESKTOP FLOATING CONTROLS (Bottom Right) */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-30 items-center gap-2.5 pointer-events-none">
        <AnimatePresence>
          {shouldShowCTA && (
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 8, scale: 0.96 }}
              transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto shadow-lg rounded-full"
            >
              <button
                id="floating-desktop-specialist-cta"
                onClick={handleCTAClick}
                className="group flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-xs font-bold tracking-wide uppercase shadow-md transition-colors cursor-pointer"
                aria-label="Falar com um especialista de engenharia"
              >
                <MessageSquare className="w-4 h-4 text-emerald-200" />
                <span>Falar com especialista</span>
                <ArrowRight className="w-3.5 h-3.5 btn-arrow-icon" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {shouldShowBackToTop && (
            <motion.div
              initial={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={prefersReduced ? { opacity: 0 } : { opacity: 0, scale: 0.85 }}
              transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="pointer-events-auto"
            >
              <button
                id="floating-desktop-back-to-top"
                onClick={handleBackToTop}
                className="w-10 h-10 rounded-full bg-white/98 hover:bg-stone-50 active:bg-stone-100 text-stone-700 hover:text-emerald-700 border border-stone-200/90 shadow-md flex items-center justify-center transition-colors cursor-pointer"
                title="Voltar suavemente ao topo da página"
                aria-label="Voltar ao topo"
              >
                <ArrowUp className="w-4 h-4 stroke-[2.2]" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* MOBILE COMPACT BOTTOM BAR */}
      <AnimatePresence>
        {shouldShowCTA && (
          <motion.aside
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="sm:hidden fixed bottom-0 left-0 right-0 z-30 bg-white/98 backdrop-blur-xs border-t border-stone-200/90 px-3.5 py-2.5 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] flex items-center gap-2.5"
            aria-label="Acesso rápido para contato corporativo"
          >
            <button
              id="floating-mobile-specialist-cta"
              onClick={handleCTAClick}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-emerald-700 active:bg-emerald-900 text-white text-xs font-bold uppercase tracking-wider shadow-xs cursor-pointer"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-200" />
              <span>Falar com especialista</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <button
              id="floating-mobile-back-to-top"
              onClick={handleBackToTop}
              className="w-9 h-9 rounded-lg bg-stone-100 active:bg-stone-200 text-stone-700 border border-stone-200 flex items-center justify-center flex-shrink-0 cursor-pointer"
              title="Voltar ao topo"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="w-4 h-4 stroke-[2.2]" />
            </button>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
});

FloatingCTA.displayName = 'FloatingCTA';
