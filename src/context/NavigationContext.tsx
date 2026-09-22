import React, { createContext, useContext, useState, useEffect, ReactNode, useCallback } from 'react';

export type RoutePath =
  | '/'
  | '/solucoes'
  | '/solucoes/:slug'
  | '/produtos'
  | '/produtos/:slug'
  | '/segmentos'
  | '/segmentos/:slug'
  | '/projetos'
  | '/projetos/:slug'
  | '/quem-somos'
  | '/contato'
  | '/politica-de-privacidade'
  | '/politica-de-cookies'
  | '/termos-de-uso';

export interface LeadModalData {
  purpose?: string;
  projectSummary?: string;
  targetChannel?: 'whatsapp' | 'specialist';
  brandName?: string;
  solutionName?: string;
}

interface NavigationContextType {
  currentPath: string;
  routeParams: { slug?: string };
  navigate: (path: string) => void;
  prefetchRoute: (path: string) => void;
  scrollToSection: (sectionId: string) => boolean;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isLeadModalOpen: boolean;
  setIsLeadModalOpen: (open: boolean) => void;
  leadModalInitialData?: LeadModalData;
  openLeadModalWithData: (data?: LeadModalData) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

/**
 * Animated smooth scroll engine using requestAnimationFrame and easeInOutCubic.
 * - Dynamic duration: 700ms to 1100ms based on distance
 * - Fixed header deduction: targetTop - headerHeight - 24px (never conceals section headings)
 * - Anti-hijacking: manual scroll (wheel, touchstart, keydown) immediately halts rAF loop
 */
let activeScrollCancel: (() => void) | null = null;

export function smoothScrollToY(
  targetY: number,
  customDuration?: number,
  onComplete?: () => void
) {
  if (typeof window === 'undefined') return;

  // Cancel any running programmatic animation
  if (activeScrollCancel) {
    activeScrollCancel();
    activeScrollCancel = null;
  }

  const startY = window.pageYOffset || document.documentElement.scrollTop;
  const distance = targetY - startY;

  // If already at or very close to target (< 4px), jump and complete immediately
  if (Math.abs(distance) < 4) {
    window.scrollTo(0, targetY);
    onComplete?.();
    return;
  }

  const prefersReduced =
    typeof window.matchMedia === 'function' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Calculate proportional duration (700ms to 1100ms based on travel distance)
  const calculatedDuration = prefersReduced
    ? 380
    : Math.min(1100, Math.max(720, 700 + (Math.abs(distance) / 2500) * 400));
  const duration = customDuration ?? calculatedDuration;

  const startTime = performance.now();
  let animationFrameId: number | null = null;

  // Natural cubic deceleration curve: starts gentle, builds momentum, softly glides to a stop
  function easeInOutCubic(t: number): number {
    return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  // Interruption listener: user manual scroll immediately cancels programmatic animation
  const cancelScroll = () => {
    if (animationFrameId !== null) {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = null;
    }
    window.removeEventListener('wheel', cancelScroll);
    window.removeEventListener('touchstart', cancelScroll);
    window.removeEventListener('keydown', handleKeyInterrupt);
    activeScrollCancel = null;
  };

  const handleKeyInterrupt = (e: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'PageUp', 'PageDown', 'Space', 'Home', 'End'].includes(e.code)) {
      cancelScroll();
    }
  };

  activeScrollCancel = cancelScroll;

  window.addEventListener('wheel', cancelScroll, { passive: true });
  window.addEventListener('touchstart', cancelScroll, { passive: true });
  window.addEventListener('keydown', handleKeyInterrupt, { passive: true });

  function animationStep(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * eased);

    if (progress < 1) {
      animationFrameId = requestAnimationFrame(animationStep);
    } else {
      window.scrollTo(0, targetY);
      cancelScroll();
      onComplete?.();
    }
  }

  animationFrameId = requestAnimationFrame(animationStep);
}

/**
 * Calculates target Y with header offset deduction (targetTop - headerHeight - 24px)
 */
export function calculateElementTargetY(element: HTMLElement): number {
  const rect = element.getBoundingClientRect();
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const header = document.querySelector('header') || document.getElementById('main-header');
  const headerHeight = header ? header.getBoundingClientRect().height : 76;
  const offset = headerHeight + 24;
  return Math.max(0, rect.top + scrollTop - offset);
}

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname || '/';
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalInitialData, setLeadModalInitialData] = useState<LeadModalData | undefined>(undefined);
  const scrollPositionsMap = React.useRef<Map<string, number>>(new Map());

  // Prefetch route data / resources on hover/focus to maximize perceived performance
  const prefetchRoute = useCallback((path: string) => {
    if (typeof window === 'undefined') return;
    // Pre-resolve path
    const cleanPath = path.split('#')[0];
    if (!cleanPath) return;
    // Touch route map or warm memory
    scrollPositionsMap.current.has(cleanPath);
  }, []);

  const scrollToSection = useCallback((sectionId: string): boolean => {
    if (typeof window === 'undefined') return false;
    const cleanId = sectionId.replace(/^#/, '');
    const element = document.getElementById(cleanId);
    if (element) {
      const targetY = calculateElementTargetY(element);
      smoothScrollToY(targetY);
      return true;
    }
    return false;
  }, []);

  // Handle scrolling to hash target with retry if element is still rendering
  const scrollToHashWithRetry = useCallback((hash: string, attempts = 10) => {
    const cleanId = hash.replace(/^#/, '');
    if (!cleanId) return;

    const tryScroll = (remaining: number) => {
      const el = document.getElementById(cleanId);
      if (el) {
        const targetY = calculateElementTargetY(el);
        smoothScrollToY(targetY);
      } else if (remaining > 0) {
        setTimeout(() => tryScroll(remaining - 1), 60);
      }
    };

    tryScroll(attempts);
  }, []);

  // Sync with browser back/forward buttons (popstate) with scroll position restoration
  useEffect(() => {
    const handlePopState = () => {
      const pathname = window.location.pathname || '/';
      setCurrentPath(pathname);
      if (window.location.hash) {
        scrollToHashWithRetry(window.location.hash);
      } else {
        const savedScrollY = scrollPositionsMap.current.get(pathname);
        if (typeof savedScrollY === 'number' && savedScrollY > 0) {
          // Restore user's previous scroll position smoothly
          setTimeout(() => {
            smoothScrollToY(savedScrollY, 400);
          }, 50);
        } else {
          smoothScrollToY(0, 300);
        }
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, [scrollToHashWithRetry]);

  // Check initial hash on mount
  useEffect(() => {
    if (typeof window !== 'undefined' && window.location.hash) {
      scrollToHashWithRetry(window.location.hash);
    }
  }, [scrollToHashWithRetry]);

  const navigate = useCallback((target: string) => {
    if (typeof window === 'undefined') return;

    // Save current scroll position for the current page before navigation
    const currentScrollY = window.pageYOffset || document.documentElement.scrollTop;
    scrollPositionsMap.current.set(currentPath, currentScrollY);

    // Separate pathname from hash if present
    const hashIndex = target.indexOf('#');
    let targetPath = hashIndex !== -1 ? target.slice(0, hashIndex) : target;
    const targetHash = hashIndex !== -1 ? target.slice(hashIndex + 1) : '';

    // If target is just a hash like '#formulario'
    if (target.startsWith('#')) {
      targetPath = currentPath;
    } else if (!targetPath) {
      targetPath = currentPath;
    }

    const isSamePage = targetPath === currentPath;

    if (isSamePage) {
      if (targetHash) {
        window.history.pushState({}, '', `${targetPath}#${targetHash}`);
        scrollToHashWithRetry(targetHash);
      } else {
        smoothScrollToY(0);
      }
      return;
    }

    // Different page navigation: push state, change path, start at top unless hash present
    const fullUrl = targetHash ? `${targetPath}#${targetHash}` : targetPath;
    window.history.pushState({}, '', fullUrl);
    setCurrentPath(targetPath);

    if (targetHash) {
      scrollToHashWithRetry(targetHash, 12);
    }
  }, [currentPath, scrollToHashWithRetry]);

  const openLeadModalWithData = (data?: LeadModalData) => {
    setLeadModalInitialData(data);
    setIsLeadModalOpen(true);
  };

  // Parse route slug if path has 2 segments (e.g. /produtos/axis-q3538-lve)
  const segments = currentPath.split('/').filter(Boolean);
  let routeParams: { slug?: string } = {};

  if (segments.length >= 2) {
    routeParams.slug = segments[1];
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        routeParams,
        navigate,
        prefetchRoute,
        scrollToSection,
        isSearchOpen,
        setIsSearchOpen,
        isLeadModalOpen,
        setIsLeadModalOpen,
        leadModalInitialData,
        openLeadModalWithData,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};

