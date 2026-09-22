import React, { Suspense } from 'react';
import { AnimatePresence, motion, MotionConfig } from 'motion/react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { useMotionPreference } from './components/common/MotionReveal';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';

// Main Landing Page is bundled synchronously for immediate LCP and TTI
import { HomePage } from './pages/HomePage';

// Secondary pages and landing pages are lazy-loaded for optimal initial performance and code-splitting
const SolutionsPage = React.lazy(() => import('./pages/SolutionsPage').then(m => ({ default: m.SolutionsPage })));
const SolutionDetailPage = React.lazy(() => import('./pages/SolutionDetailPage').then(m => ({ default: m.SolutionDetailPage })));
const SolutionLanding = React.lazy(() => import('./components/landing/SolutionLanding').then(m => ({ default: m.SolutionLanding })));
const ProductsPage = React.lazy(() => import('./pages/ProductsPage').then(m => ({ default: m.ProductsPage })));
const ProductDetailPage = React.lazy(() => import('./pages/ProductDetailPage').then(m => ({ default: m.ProductDetailPage })));
const SegmentsPage = React.lazy(() => import('./pages/SegmentsPage').then(m => ({ default: m.SegmentsPage })));
const SegmentDetailPage = React.lazy(() => import('./pages/SegmentDetailPage').then(m => ({ default: m.SegmentDetailPage })));
const ProjectsPage = React.lazy(() => import('./pages/ProjectsPage').then(m => ({ default: m.ProjectsPage })));
const ProjectDetailPage = React.lazy(() => import('./pages/ProjectDetailPage').then(m => ({ default: m.ProjectDetailPage })));
const AboutPage = React.lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ContactPage = React.lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const LegalPage = React.lazy(() => import('./pages/LegalPage').then(m => ({ default: m.LegalPage })));

import { solutionsLandingData } from './data/solutionsLandingData';

const AppContent: React.FC = () => {
  const { currentPath, routeParams } = useNavigation();
  const prefersReduced = useMotionPreference();

  // Check if current route is one of the 5 dedicated solution landing pages
  const isLandingSlug = (slug?: string): slug is 'hanwha' | 'avigilon' | 'axis' | 'pelco' | 'tyco' => {
    return !!slug && ['hanwha', 'avigilon', 'axis', 'pelco', 'tyco'].includes(slug);
  };

  const isBrandLandingPage = currentPath.startsWith('/solucoes/') && isLandingSlug(routeParams.slug);

  // Route selector
  const renderCurrentPage = () => {
    // Exact matching
    if (currentPath === '/') return <HomePage />;
    if (currentPath === '/solucoes') return <SolutionsPage />;
    if (currentPath === '/produtos') return <ProductsPage />;
    if (currentPath === '/segmentos') return <SegmentsPage />;
    if (currentPath === '/projetos') return <ProjectsPage />;
    if (currentPath === '/quem-somos') return <AboutPage />;
    if (currentPath === '/contato') return <ContactPage />;
    if (currentPath === '/politica-de-privacidade') return <LegalPage type="privacy" />;
    if (currentPath === '/politica-de-cookies') return <LegalPage type="cookies" />;
    if (currentPath === '/termos-de-uso') return <LegalPage type="terms" />;

    // Dynamic slug matching
    if (currentPath.startsWith('/solucoes/')) {
      if (isLandingSlug(routeParams.slug)) {
        const landingData = solutionsLandingData[routeParams.slug];
        if (landingData) {
          return <SolutionLanding data={landingData} />;
        }
      }
      return <SolutionDetailPage />;
    }
    if (currentPath.startsWith('/produtos/')) return <ProductDetailPage />;
    if (currentPath.startsWith('/segmentos/')) return <SegmentDetailPage />;
    if (currentPath.startsWith('/projetos/')) return <ProjectDetailPage />;

    // Fallback to Home
    return <HomePage />;
  };

  const pageVariants = {
    initial: {
      opacity: 0,
      y: prefersReduced ? 0 : 8,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReduced ? 0.2 : 0.24,
        ease: [0.22, 1, 0.36, 1],
      },
    },
    exit: {
      opacity: 0,
      y: prefersReduced ? 0 : -6,
      transition: {
        duration: prefersReduced ? 0.14 : 0.16,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div
      className={`min-h-screen flex flex-col bg-white ${
        isBrandLandingPage ? 'text-stone-900 selection:bg-emerald-700' : 'text-slate-900 selection:bg-emerald-500'
      } selection:text-white antialiased`}
    >
      {!isBrandLandingPage && <Header />}

      <AnimatePresence
        mode="wait"
        onExitComplete={() => {
          // Instant scroll jump between page change so new page starts clean
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
        }}
      >
        <motion.div
          key={currentPath}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageVariants}
          className="flex-1 flex flex-col"
        >
          <Suspense fallback={<div className="min-h-screen bg-white" />}>
            {renderCurrentPage()}
          </Suspense>
        </motion.div>
      </AnimatePresence>

      {!isBrandLandingPage && <Footer />}

      {/* Global Overlays & Widgets */}
      <LeadModal />
      {!isBrandLandingPage && <GlobalSearchModal />}
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default function App() {
  return (
    <MotionConfig reducedMotion="never">
      <NavigationProvider>
        <AppContent />
      </NavigationProvider>
    </MotionConfig>
  );
}
