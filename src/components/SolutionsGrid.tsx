import React, { memo } from 'react';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { useNavigation } from '../context/NavigationContext';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from './common/MotionReveal';

export const SolutionsGrid: React.FC = memo(() => {
  const { navigate } = useNavigation();

  return (
    <section
      id="solutions-section"
      className="py-8 lg:py-10 bg-[#F7F7F5] border-b border-stone-200"
      aria-label="Soluções Integradas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Compact Header */}
        <MotionReveal className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-7 gap-3">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
              Escopo de Atuação
            </span>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight mt-1">
              Soluções integradas para operações críticas
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600">
              Engenharia consultiva e implantação de infraestruturas convergentes para ambientes que exigem alta confiabilidade.
            </p>
          </div>

          <button
            onClick={() => navigate('/solucoes')}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-emerald-800 transition-colors flex-shrink-0 cursor-pointer"
          >
            <span>Ver matriz completa</span>
            <ArrowRight className="w-3.5 h-3.5 btn-arrow-icon" />
          </button>
        </MotionReveal>

        {/* 4 Pillars Grid - Compact cards */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCategories.map((category) => (
            <MotionStaggerItem
              key={category.id}
              className="flex flex-col"
            >
              <div
                id={`solution-card-${category.id}`}
                onClick={() => navigate(`/solucoes/${category.slug}`)}
                className="group cursor-pointer bg-white rounded-md border border-stone-200 hover:border-stone-400 overflow-hidden shadow-2xs card-hover-subtle flex flex-col justify-between h-full"
              >
                {/* Image container */}
                <div className="relative h-28 sm:h-32 overflow-hidden bg-stone-100">
                  <img
                    src={category.imageUrl}
                    alt={category.title}
                    className="w-full h-full object-cover img-hover-subtle"
                    loading="lazy"
                    decoding="async"
                    width="320"
                    height="128"
                  />
                  <div className="absolute top-2 left-2 bg-stone-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded-xs">
                    {category.number}
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-stone-900 group-hover:text-emerald-800 transition-colors leading-snug">
                      {category.title}
                    </h3>
                    <p className="mt-1 text-xs text-stone-600 line-clamp-3 leading-relaxed">
                      {category.description}
                    </p>
                  </div>

                  <div className="mt-3.5 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-emerald-800">
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3 h-3 btn-arrow-icon" />
                  </div>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </section>
  );
});

SolutionsGrid.displayName = 'SolutionsGrid';
