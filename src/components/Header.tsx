import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  ArrowUp,
  Menu,
  X,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';
import { useNavigation, smoothScrollToY } from '../context/NavigationContext';
import { useMotionPreference } from './common/MotionReveal';
import { companyData } from '../data/company';

const headerLogo = '/images/institucional/logo-header.jpg';

export const Header: React.FC = memo(() => {
  const { currentPath, navigate, prefetchRoute, scrollToSection, openLeadModalWithData } = useNavigation();
  const prefersReduced = useMotionPreference();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');

  // Cache section positions to avoid layout thrashing (offsetTop forced reflows) during scroll
  const sectionCacheRef = useRef<Array<{ id: string; name: string; top: number }>>([]);

  useEffect(() => {
    const measureSections = () => {
      if (window.location.pathname !== '/' && currentPath !== '/') return;
      const sections = [
        { id: 'hero-section', name: 'Início' },
        { id: 'solutions-section', name: 'Soluções' },
        { id: 'segments-section', name: 'Segmentos' },
        { id: 'projects-showcase-section', name: 'Projetos' },
        { id: 'intro-positioning-section', name: 'Quem Somos' },
        { id: 'specialist-cta-section', name: 'Contato' },
      ];

      sectionCacheRef.current = sections.map((sec) => {
        const el = document.getElementById(sec.id);
        return {
          id: sec.id,
          name: sec.name,
          top: el ? el.offsetTop : 0,
        };
      });
    };

    measureSections();
    const timer = setTimeout(measureSections, 500);
    window.addEventListener('resize', measureSections, { passive: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', measureSections);
    };
  }, [currentPath]);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY || document.documentElement.scrollTop;

          // Transition threshold around 100px - only update state when value changes
          const nextScrolled = scrollY > 100;
          setIsScrolled((prev) => (prev !== nextScrolled ? nextScrolled : prev));

          // Precise section spy using cached offsets (zero DOM queries)
          if (window.location.pathname === '/' || currentPath === '/') {
            const sections = sectionCacheRef.current;
            const scrollCheckPosition = scrollY + 160;
            let current = 'Início';

            for (let i = sections.length - 1; i >= 0; i--) {
              const sec = sections[i];
              if (sec.top > 0 && sec.top <= scrollCheckPosition) {
                current = sec.name;
                break;
              }
            }

            setActiveSection((prev) => (prev !== current ? current : prev));
          } else {
            setActiveSection((prev) => (prev !== '' ? '' : prev));
          }

          ticking = false;
        });
        ticking = true;
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

  const scrolledCompactLinks = [
    { label: 'Soluções', path: '/solucoes', sectionId: 'solutions-section' },
    { label: 'Projetos', path: '/projetos', sectionId: 'projects-showcase-section' },
    { label: 'Quem Somos', path: '/quem-somos', sectionId: 'intro-positioning-section' },
  ];

  const handleNavClick = (path: string, sectionId?: string) => {
    if (currentPath === '/' && sectionId) {
      if (scrollToSection(sectionId)) {
        setIsMobileMenuOpen(false);
        return;
      }
    }
    navigate(sectionId ? `${path}#${sectionId}` : path);
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
              ? 'w-full max-w-[850px] mx-auto h-14 bg-white/95 backdrop-blur-xs rounded-[16px] border border-stone-200/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] px-3 sm:px-5 flex items-center justify-between'
              : 'w-full bg-white border-b border-stone-200/80 shadow-none px-4 sm:px-6 lg:px-8 py-3'
          }`}
        >
          <div className={`w-full flex items-center justify-between ${!isScrolled ? 'max-w-7xl mx-auto' : ''}`}>
            {/* Logo */}
            <button
              id="brand-logo-btn"
              onClick={() => handleNavClick('/')}
              className="flex items-center gap-2.5 sm:gap-3 text-left focus:outline-none group flex-shrink-0 cursor-pointer"
              aria-label="VS Tecnologia e Automação - Página Inicial"
            >
              <div className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center bg-stone-900 shadow-2xs flex-shrink-0">
                <img
                  src={headerLogo}
                  alt="Logo VS Tecnologia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  decoding="async"
                  width="32"
                  height="32"
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

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center space-x-1" aria-label="Navegação principal">
              {(isScrolled ? scrolledCompactLinks : navLinks).map((link) => {
                const active = isLinkActive(link.label, link.path);
                return (
                  <button
                    key={link.path}
                    id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                    onClick={() => handleNavClick(link.path, link.sectionId)}
                    onMouseEnter={() => prefetchRoute(link.path)}
                    onFocus={() => prefetchRoute(link.path)}
                    className={`relative px-2.5 sm:px-3 py-1.5 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                      active
                        ? 'text-stone-950 font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-50/80 rounded-md'
                    }`}
                  >
                    <span>{link.label}</span>
                    {/* Discrete green indicator bar */}
                    {active && (
                      <span
                        className="absolute bottom-0 left-2.5 right-2.5 h-[2px] bg-emerald-600 rounded-full transition-opacity duration-200"
                      />
                    )}
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden sm:flex items-center gap-2 sm:gap-3 flex-shrink-0">
              <button
                id="header-search-btn"
                onClick={() => {
                  if (currentPath !== '/') {
                    navigate('/');
                  } else {
                    smoothScrollToY(0);
                  }
                }}
                className={`inline-flex items-center gap-1.5 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors font-medium cursor-pointer ${
                  isScrolled ? 'px-2 py-1 text-xs' : 'px-2.5 py-1.5 text-xs'
                }`}
                title="Voltar ao início da página"
                aria-label="Voltar ao início"
              >
                <ArrowUp className={isScrolled ? 'w-3.5 h-3.5 text-emerald-700' : 'w-4 h-4 text-emerald-700'} />
                <span>Voltar ao início</span>
              </button>

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

              <button
                id="header-specialist-cta-btn"
                onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio' })}
                className={`group inline-flex items-center gap-1.5 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-medium transition-colors shadow-xs cursor-pointer ${
                  isScrolled
                    ? 'px-3 py-1.5 text-xs'
                    : 'px-4 py-2 text-xs sm:text-sm'
                }`}
              >
                <span>{isScrolled ? 'Fale conosco' : 'Fale com um especialista'}</span>
                <ArrowRight className={`${isScrolled ? 'w-3 h-3' : 'w-3.5 h-3.5'} btn-arrow-icon`} />
              </button>
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-1 sm:hidden flex-shrink-0">
              {isScrolled ? (
                <>
                  <button
                    onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio' })}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-emerald-700 text-white text-[11px] font-medium mr-1 shadow-2xs cursor-pointer"
                  >
                    <span>Fale conosco</span>
                    <ArrowRight className="w-2.5 h-2.5" />
                  </button>
                  <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-1.5 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none cursor-pointer"
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
                        smoothScrollToY(0);
                      }
                    }}
                    className="p-2 text-stone-600 hover:text-stone-900 cursor-pointer"
                    title="Voltar ao início"
                    aria-label="Voltar ao início"
                  >
                    <ArrowUp className="w-5 h-5 text-emerald-700" />
                  </button>

                  <button
                    id="mobile-menu-toggle-btn"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="p-2 text-stone-700 hover:text-stone-900 rounded-md focus:outline-none cursor-pointer"
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
                  className="p-1.5 text-stone-500 hover:text-stone-900 rounded-md cursor-pointer"
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
                    className={`w-full flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors cursor-pointer ${
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
                className="w-full py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-medium text-center transition-colors shadow-2xs cursor-pointer"
              >
                Fale com um especialista
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

Header.displayName = 'Header';
