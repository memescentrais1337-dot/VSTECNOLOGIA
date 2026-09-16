import React from 'react';
import { NavigationProvider, useNavigation } from './context/NavigationContext';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';
import { GlobalSearchModal } from './components/GlobalSearchModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { CookieBanner } from './components/CookieBanner';

// Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { SolutionDetailPage } from './pages/SolutionDetailPage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { SegmentsPage } from './pages/SegmentsPage';
import { SegmentDetailPage } from './pages/SegmentDetailPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { ProjectDetailPage } from './pages/ProjectDetailPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { LegalPage } from './pages/LegalPage';

const AppContent: React.FC = () => {
  const { currentPath, routeParams } = useNavigation();

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
    if (currentPath.startsWith('/solucoes/')) return <SolutionDetailPage />;
    if (currentPath.startsWith('/produtos/')) return <ProductDetailPage />;
    if (currentPath.startsWith('/segmentos/')) return <SegmentDetailPage />;
    if (currentPath.startsWith('/projetos/')) return <ProjectDetailPage />;

    // Fallback to Home
    return <HomePage />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-emerald-500 selection:text-white antialiased">
      <Header />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer />
      
      {/* Global Overlays & Widgets */}
      <LeadModal />
      <GlobalSearchModal />
      <WhatsAppButton />
      <CookieBanner />
    </div>
  );
};

export default function App() {
  return (
    <NavigationProvider>
      <AppContent />
    </NavigationProvider>
  );
}
