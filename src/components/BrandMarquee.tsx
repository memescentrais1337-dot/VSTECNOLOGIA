import React, { memo } from 'react';
import { representedBrands } from '../data/brands';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { MotionReveal } from './common/MotionReveal';

export const BrandMarquee: React.FC = memo(() => {
  const { navigate } = useNavigation();

  return (
    <section
      id="represented-brands-section"
      className="py-8 lg:py-10 bg-white border-b border-stone-200 relative overflow-hidden"
      aria-label="Marcas e Fabricantes Representados"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal className="text-center max-w-3xl mx-auto mb-6 sm:mb-8">
          <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
            Parcerias Tecnológicas Homologadas
          </span>
          <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight mt-1">
            Tecnologia dos principais fabricantes do mercado
          </h2>
          <p className="mt-1 text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl mx-auto">
            Equipamentos originais, suporte de engenharia e integração com líderes globais.
          </p>
        </MotionReveal>

        {/* Marquee Container with GPU-accelerated seamless infinite loop */}
        <div className="relative w-full overflow-hidden select-none">
          {/* Side subtle fade gradients for professional visual framing */}
          <div className="absolute left-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 bg-gradient-to-r from-white via-white/85 to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-8 sm:w-16 lg:w-20 bg-gradient-to-l from-white via-white/85 to-transparent z-10 pointer-events-none" />

          {/* Continuous Hardware-Accelerated Track */}
          <div
            className="flex w-max animate-marquee hover:[animation-play-state:paused] active:[animation-play-state:paused] py-3 items-center"
            style={{ touchAction: 'pan-y' }}
          >
            {/* Track 1: First set of brands */}
            <div className="flex items-center gap-3.5 sm:gap-5 pr-3.5 sm:pr-5 shrink-0">
              {representedBrands.map((brand, idx) => (
                <div
                  key={`track1-${brand.id || brand.name}-${idx}`}
                  title={brand.name}
                  className="w-[150px] sm:w-[180px] lg:w-[200px] h-[72px] sm:h-[82px] lg:h-[88px] bg-white rounded-md border border-stone-200/90 p-3 sm:p-4 flex items-center justify-center select-none shadow-2xs shrink-0"
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    loading="lazy"
                    decoding="async"
                    width="160"
                    height="50"
                    className="max-h-[38px] sm:max-h-[44px] lg:max-h-[48px] max-w-[120px] sm:max-w-[140px] lg:max-w-[155px] w-auto h-auto object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>

            {/* Track 2: Duplicate set for mathematically seamless infinite wrapping */}
            <div
              className="flex items-center gap-3.5 sm:gap-5 pr-3.5 sm:pr-5 shrink-0"
              aria-hidden="true"
            >
              {representedBrands.map((brand, idx) => (
                <div
                  key={`track2-${brand.id || brand.name}-${idx}`}
                  title={brand.name}
                  className="w-[150px] sm:w-[180px] lg:w-[200px] h-[72px] sm:h-[82px] lg:h-[88px] bg-white rounded-md border border-stone-200/90 p-3 sm:p-4 flex items-center justify-center select-none shadow-2xs shrink-0"
                >
                  <img
                    src={brand.logo}
                    alt={brand.alt}
                    loading="lazy"
                    decoding="async"
                    width="160"
                    height="50"
                    className="max-h-[38px] sm:max-h-[44px] lg:max-h-[48px] max-w-[120px] sm:max-w-[140px] lg:max-w-[155px] w-auto h-auto object-contain pointer-events-none"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Link to Products/Catalog */}
        <div className="mt-7 sm:mt-9 text-center">
          <button
            id="brand-marquee-catalog-btn"
            onClick={() => navigate('/produtos')}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-stone-300 hover:border-stone-400 bg-white hover:bg-stone-50 text-xs sm:text-sm font-medium text-stone-700 hover:text-stone-900 transition-colors shadow-2xs cursor-pointer"
          >
            <span>Consultar equipamentos e soluções por fabricante</span>
            <ArrowRight className="w-3.5 h-3.5 text-stone-500" />
          </button>
        </div>
      </div>
    </section>
  );
});

BrandMarquee.displayName = 'BrandMarquee';
