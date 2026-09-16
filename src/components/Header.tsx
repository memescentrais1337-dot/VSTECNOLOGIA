import React, { useState, useEffect } from 'react';
import {
  Phone,
  ArrowUp,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { companyData } from '../data/company';

const headerLogo = '/images/institucional/logo-header.jpg';

export const Header: React.FC = () => {
  const { currentPath, navigate, setIsSearchOpen, openLeadModalWithData } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  useEffect(() => {
    const handleScroll = () => {
      // Transition threshold around 100-120px as requested
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Section spy when on home page
      if (window.location.pathname === '/' || currentPath === '/') {
        const sections = [
          { id: 'solutions-section', name: 'Soluções' },
          { id: 'projects-showcase-section', name: 'Projetos' },
          { id: 'intro-positioning-section', name: 'Quem Somos' },
          { id: 'specialist-cta-section', name: 'Fale Conosco' },
        ];

        const scrollPosition = window.scrollY + 200;
        let current = '';

        for (const section of sections) {
          const el = document.getElementById(section.id);
          if (el) {
            const top = el.offsetTop;
            const height = el.offsetHeight;
            if (scrollPosition >= top && scrollPosition < top + height) {
              current = section.name;
              break;
            }
          }
        }

        setActiveSection(current);
      } else {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [currentPath]);

  const navLinks = [
    { label: 'Início', path: '/' },
    { label: 'Soluções', path: '/solucoes', sectionId: 'solutions-section' },
    { label: 'Produtos', path: '/produtos' },
    { label: 'Segmentos', path: '/segmentos', sectionId: 'segments-section' },
    { label: 'Projetos', path: '/projetos', sectionId: 'projects-showcase-section' },
    { label: 'Quem Somos', path: '/quem-somos', sectionId: 'intro-positioning-section' },
    { label: 'Contato', path: '/contato', sectionId: 'specialist-cta-section' },
  ];

  // Scrolled concise links requested: Soluções | Projetos | Quem Somos
  const scrolledCompactLinks = [
    { label: 'Soluções', path: '/solucoes', sectionId: 'solutions-section' },
    { label: 'Projetos', path: '/projetos', sectionId: 'projects-showcase-section' },
    { label: 'Quem Somos', path: '/quem-somos', sectionId: 'intro-positioning-section' },
  ];

  const handleNavClick = (path: string, sectionId?: string) => {
    // If we are on homepage and sectionId exists, smooth scroll to it
    if (currentPath === '/' && sectionId) {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
        setIsMobileMenuOpen(false);
        return;
      }
    }
    navigate(path);
    setIsMobileMenuOpen(false);
  };

  const isLinkActive = (label: string, path: string) => {
    if (activeSection && activeSection.toLowerCase() === label.toLowerCase()) {
      return true;
    }
    if (path === '/' && currentPath === '/' && !activeSection) return true;
    if (path !== '/' && currentPath.startsWith(path)) return true;
    return false;
  };

  return (
    <>
      <header
        id="main-header"
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-out flex justify-center ${
          isScrolled
            ? 'pt-3 sm:pt-4 px-3 sm:px-6 pointer-events-none'
            : 'pt-0 px-0 pointer-events-auto'
        }`}
      >
        <div
          className={`pointer-events-auto transition-all duration-300 ease-out ${
            isScrolled
              ? 'w-full max-w-[850px] mx-auto h-14 bg-white/92 backdrop-blur-md rounded-[16px] border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 sm:px-5 flex items-center justify-between'
              : 'w-full bg-white border-b border-stone-200/80 shadow-none px-4 sm:px-6 lg:px-8 py-3'
          }`}
        >
          <div className={`w-full flex items-center justify-between ${!isScrolled ? 'max-w-7xl mx-auto' : ''}`}>
            {/* Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group flex-shrink-0"
              aria-label="VS Tecnologia e Automação - Página Inicial"
            >
              <div
                className={`rounded-md overflow-hidden flex items-center justify-center bg-stone-900 shadow-2xs transition-all duration-300 ${
                  isScrolled ? 'w-7 h-7 sm:w-8 sm:h-8' : 'w-9 h-9'
                }`}
              >
                <img
                  src={headerLogo}
                  alt="Logo VS Tecnologia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span
                  className={`font-semibold text-stone-900 tracking-tight leading-tight transition-all duration-300 ${
                    isScrolled ? 'text-sm sm:text-base' : 'text-base'
                  }`}
                >
                  VS Tecnologia
                </span>
                {!isScrolled && (
                  <span className="text-[11px] font-normal text-stone-500 hidden sm:inline">
                    Engenharia & Automação
                  </span>
                )}
              </div>
            </button>

            {/* Desktop Navigation Links - Smooth transition between full bar and compact floating bar */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegação principal">
              {(isScrolled ? scrolledCompactLinks : navLinks).map((link) => {
                const active = isLinkActive(link.label, link.path);
                return (
                  <button
                    key={link.path}
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavClick(link.path, link.sectionId)}
                    className={`relative px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors ${
                      active
                        ? 'text-stone-950 font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50/80 rounded-md'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Discrete green indicator bar below active item */}
                    {active && (
                      <span className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-emerald-600 rounded-full transition-all duration-300" />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right actions: Back to Top, Phone (when at top), Specialist CTA */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Back to top button */}
              <button
                id="header-search-btn"
                onClick={() => {
                  if (currentPath !== '/') {
                    navigate('/');
                  } else {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }
                }}
                className={`inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors font-medium ${
                  isScrolled ? 'px-2 py-1 text-xs' : 'px-2.5 py-1.5 text-xs'
                }`}
                title="Voltar ao início da página"
                aria-label="Voltar ao início"
              >
                <ArrowUp className={isScrolled ? 'w-3.5 h-3.5 text-emerald-700' : 'w-4 h-4 text-emerald-700'} />
                <span>Voltar ao início</span>
              </button>

              {/* Telephone (only visible in top state for minimal layout in compact state) */}
              {!isScrolled && (
                <a
                  id="header-phone-link"
                  href={`tel:${companyData.phoneRaw}`}
                  className="hidden xl:flex items-center gap-1.5 text-xs font-medium text-stone-700 hover:text-stone-900 px-2.5 py-1.5 rounded-md border border-stone-200 bg-stone-50 hover:bg-stone-100 transition-colors"
                  title="Central de Atendimento Corporativo"
                >
                  <Phone className="w-3.5 h-3.5 text-emerald-700" />
                  <span>{companyData.phone}</span>
                </a>
              )}

              {/* Specialist CTA button (adapts smoothly to 'Fale conosco →' in compact floating bar) */}
              <button
                id="header-specialist-cta-btn"
                onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio' })}
                className={`inline-flex items-center gap-1.5 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-medium transition-all shadow-xs ${
                  isScrolled
                    ? 'px-3 py-1.5 text-xs'
                    : 'px-4 py-2 text-xs sm:text-sm'
                }`}
              >
                <span>{isScrolled ? 'Fale conosco' : 'Fale com um especialista'}</span>
                <ArrowRight className={isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'} />
              </button>
            </div>

            {/* Mobile Actions: Compact during scroll [VS] Fale conosco → ☰ */}
            <div className="flex items-center gap-1 sm:hidden flex-shrink-0">
              {isScrolled ? (
                <>
                  <button
                    onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio' })}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-700 text-white text-[11px] font-medium mr-1 shadow-2xs"
                  >
                    <span>Fale conosco</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-1.5 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none"
                    aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                  >
                    {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                  </button>
                </>
              ) : (
                <>
                  <button
                    id="mobile-search-toggle-btn"
                    onClick={() => {
                      if (currentPath !== '/') {
                        navigate('/');
                      } else {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                      }
                    }}
                    className="p-2 text-stone-600 hover:text-stone-900"
                    title="Voltar ao início"
                    aria-label="Voltar ao início"
                  >
                    <ArrowUp className="w-5 h-5 text-emerald-700" />
                  </button>

                  <button
                    id="mobile-menu-toggle-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none"
                    aria-label={isMobileMenuOpen ? 'Fechar menu' : 'Abrir menu'}
                  >
                    {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div
          id="mobile-drawer"
          className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs lg:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          <div
            className="fixed inset-y-0 right-0 w-full max-w-xs bg-white shadow-xl flex flex-col justify-between p-6 overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-stone-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-md bg-stone-900 flex items-center justify-center text-white font-bold text-sm">
                    VS
                  </div>
                  <span className="font-semibold text-stone-900 text-sm">VS Tecnologia</span>
                </div>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md"
                  aria-label="Fechar menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="py-4 space-y-1">
                {navLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path, link.sectionId)}
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${
                      isLinkActive(link.label, link.path)
                        ? 'text-stone-950 font-semibold bg-stone-100'
                        : 'text-stone-700 hover:text-stone-900 hover:bg-stone-50'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight className="w-4 h-4 text-stone-400" />
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-stone-200 space-y-3">
              <a
                href={`tel:${companyData.phoneRaw}`}
                className="flex items-center justify-center gap-2 w-full py-2.5 rounded-md border border-stone-200 text-stone-700 text-sm font-medium bg-stone-50"
              >
                <Phone className="w-4 h-4 text-emerald-700" />
                <span>{companyData.phone}</span>
              </a>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openLeadModalWithData({ purpose: 'Empresa / Uso próprio' });
                }}
                className="w-full py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium text-center transition-colors shadow-2xs"
              >
                Fale com um especialista
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
