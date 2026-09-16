import React from 'react';
import { ArrowRight } from 'lucide-react';
import { serviceCategories } from '../data/services';
import { useNavigation } from '../context/NavigationContext';

export const SolutionsGrid: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <section
      id="solutions-section"
      className="py-8 lg:py-10 bg-[#F7F7F5] border-b border-stone-200"
      aria-label="Soluções Integradas"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading - Compact Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-6 sm:mb-7 gap-3">
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
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-emerald-800 transition-colors flex-shrink-0"
          >
            <span>Ver matriz completa</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* 4 Pillars Grid - Compact cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {serviceCategories.map((category) => (
            <div
              key={category.id}
              id={`solution-card-${category.id}`}
              onClick={() => navigate(`/solucoes/${category.slug}`)}
              className="group cursor-pointer bg-white rounded-md border border-stone-200 hover:border-stone-400 overflow-hidden shadow-2xs transition-all duration-200 flex flex-col justify-between"
            >
              {/* Image container */}
              <div className="relative h-28 sm:h-32 overflow-hidden bg-stone-100">
                <img
                  src={category.imageUrl}
                  alt={category.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                  loading="lazy"
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
                  <p className="mt-1 text-[11px] text-stone-500 line-clamp-2 leading-relaxed">
                    {category.subtitle}
                  </p>

                  {/* Highlights list */}
                  <ul className="mt-2.5 space-y-1 border-t border-stone-100 pt-2">
                    {category.services.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="text-[11px] text-stone-600 flex items-start gap-1.5">
                        <span className="text-emerald-700 font-bold">•</span>
                        <span className="truncate">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action */}
                <div className="mt-3 pt-2 border-t border-stone-100 flex items-center justify-between text-[11px] font-medium text-stone-800 group-hover:text-emerald-800">
                  <span>Conhecer soluções</span>
                  <ArrowRight className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
