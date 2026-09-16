import React, { useRef, useEffect, useState, useCallback } from 'react';
import { representedBrands } from '../data/brands';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

export const BrandMarquee: React.FC = () => {
  const { navigate } = useNavigation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeftState, setScrollLeftState] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll boundary to update arrow button states
  const checkScrollability = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;
    const { scrollLeft, scrollWidth, clientWidth } = container;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;
    checkScrollability();
    container.addEventListener('scroll', checkScrollability, { passive: true });
    window.addEventListener('resize', checkScrollability);
    return () => {
      container.removeEventListener('scroll', checkScrollability);
      window.removeEventListener('resize', checkScrollability);
    };
  }, [checkScrollability]);

  // Smooth automatic scrolling loop
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let animationFrameId: number;

    const step = () => {
      if (!isPaused && !isDragging && container) {
        // Increment scroll position continuously (approx 0.8px per frame for elegant corporate flow)
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 2) {
          // Wrap seamlessly back to start
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += 0.8;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [isPaused, isDragging]);

  // Handle manual navigation arrows
  const handleScroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  // Touch and drag support for fluid manual inspection
  const handleMouseDown = (e: React.MouseEvent) => {
    const container = scrollRef.current;
    if (!container) return;
    setIsDragging(true);
    setStartX(e.pageX - container.offsetLeft);
    setScrollLeftState(container.scrollLeft);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    e.preventDefault();
    const container = scrollRef.current;
    if (!container) return;
    const x = e.pageX - container.offsetLeft;
    const walk = (x - startX) * 1.5;
    container.scrollLeft = scrollLeftState - walk;
  };

  const handleMouseUpOrLeave = () => {
    if (isDragging) {
      setIsDragging(false);
    }
  };

  // Duplicate items array to guarantee continuous uninterrupted auto-scrolling loop
  const brandsList = [...representedBrands, ...representedBrands];

  return (
    <section
      id="represented-brands-section"
      className="py-8 lg:py-10 bg-white border-b border-stone-200 relative overflow-hidden"
      aria-label="Marcas e Fabricantes Representados"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Centered Heading with Generous Breathing Room */}
        <div className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
            Parcerias Tecnológicas Homologadas
          </span>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight mt-1">
            Tecnologia dos principais fabricantes do mercado
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Equipamentos originais, suporte de engenharia e integração com líderes globais.
          </p>
        </div>

        {/* Carousel Container com Auto-scroll contínuo e pausa ao passar o mouse */}
        <div
          className="relative group"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => {
            setIsPaused(false);
            handleMouseUpOrLeave();
          }}
        >
          {/* Subtle Side Fade Gradients */}
          {canScrollLeft && (
            <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300" />
          )}
          {canScrollRight && (
            <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10 pointer-events-none transition-opacity duration-300" />
          )}

          {/* Navigation Arrow Left */}
          <button
            type="button"
            onClick={() => handleScroll('left')}
            disabled={!canScrollLeft}
            className={`flex absolute left-1 sm:left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white border border-stone-200 hover:border-stone-300 text-stone-700 hover:text-stone-900 shadow-md items-center justify-center transition-all ${
              !canScrollLeft ? 'opacity-20 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-105'
            } focus:outline-none`}
            aria-label="Ver fabricantes anteriores"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {/* Navigation Arrow Right */}
          <button
            type="button"
            onClick={() => handleScroll('right')}
            disabled={!canScrollRight}
            className={`flex absolute right-1 sm:right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-white/95 hover:bg-white border border-stone-200 hover:border-stone-300 text-stone-700 hover:text-stone-900 shadow-md items-center justify-center transition-all ${
              !canScrollRight ? 'opacity-20 cursor-not-allowed' : 'opacity-90 hover:opacity-100 hover:scale-105'
            } focus:outline-none`}
            aria-label="Ver próximos fabricantes"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Horizontal Scrolling Track */}
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUpOrLeave}
            className={`flex items-center gap-4 sm:gap-5 py-3 px-4 overflow-x-auto select-none no-scrollbar cursor-grab ${
              isDragging ? 'cursor-grabbing' : ''
            }`}
            style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}
          >
            {brandsList.map((brand, idx) => (
              <div
                key={`${brand.id || brand.name}-${idx}`}
                className="flex-shrink-0"
              >
                {brand.url ? (
                  <a
                    href={brand.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    title={`${brand.name} - Conheça o fabricante homologado`}
                    className="group/item block w-[170px] sm:w-[190px] lg:w-[210px] h-[80px] sm:h-[88px] lg:h-[94px] bg-white rounded-md border border-stone-200/90 hover:border-stone-400 p-3 sm:p-4 flex items-center justify-center transition-all duration-200 hover:shadow-2xs focus:outline-none focus:ring-1 focus:ring-stone-400"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      loading="lazy"
                      className="max-h-[42px] sm:max-h-[48px] lg:max-h-[52px] max-w-[130px] sm:max-w-[150px] lg:max-w-[165px] w-auto h-auto object-contain transition-transform duration-200 group-hover/item:scale-102 pointer-events-none"
                    />
                  </a>
                ) : (
                  <div
                    title={brand.name}
                    className="w-[170px] sm:w-[190px] lg:w-[210px] h-[80px] sm:h-[88px] lg:h-[94px] bg-white rounded-md border border-stone-200/90 p-3 sm:p-4 flex items-center justify-center transition-all duration-200"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.alt}
                      loading="lazy"
                      className="max-h-[42px] sm:max-h-[48px] lg:max-h-[52px] max-w-[130px] sm:max-w-[150px] lg:max-w-[165px] w-auto h-auto object-contain pointer-events-none"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Action Link to Catalog */}
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => navigate('/produtos')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors shadow-2xs"
          >
            <span>Consultar equipamentos e soluções por fabricante</span>
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
          </button>
        </div>
      </div>
    </section>
  );
};
