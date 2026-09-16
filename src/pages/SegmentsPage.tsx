import React from 'react';
import { segmentsData } from '../data/segments';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, Check, Building2 } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const SegmentsPage: React.FC = () => {
  const { navigate, openLeadModalWithData } = useNavigation();

  return (
    <main className="pt-20 sm:pt-24 pb-10 bg-white min-h-screen">
      {/* Header - Compact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 sm:mb-8">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-[11px] font-semibold uppercase tracking-wider mb-2">
            <Building2 className="w-3 h-3 text-emerald-600" />
            <span>Mercados e Verticais B2B</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight">
            Engenharia sob medida para cada setor
          </h1>
          <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
            Cada vertical de mercado opera sob regulamentações específicas, riscos operacionais próprios e exigências técnicas singulares. Desenvolvemos soluções adequadas às suas normas.
          </p>
        </div>
      </div>

      {/* 10 Verticals Grid - Compact, denser presentation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {segmentsData.map((seg) => (
            <div
              key={seg.id}
              className="bg-stone-50/60 rounded-xl border border-stone-200 overflow-hidden shadow-2xs hover:shadow-sm transition-all flex flex-col justify-between"
            >
              <div>
                <div className="relative h-36 sm:h-40 overflow-hidden bg-stone-100">
                  <img
                    src={seg.imageUrl}
                    alt={seg.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-stone-950/20 to-transparent" />
                  <div className="absolute bottom-2.5 left-3 right-3 text-white">
                    <span className="text-[9px] uppercase font-mono font-semibold tracking-wider px-1.5 py-0.5 rounded bg-emerald-700">
                      Segmento Crítico
                    </span>
                    <h2 className="text-sm sm:text-base font-semibold mt-1 text-white leading-tight">
                      {seg.title}
                    </h2>
                  </div>
                </div>

                <div className="p-3.5 sm:p-4 space-y-2.5">
                  <p className="text-[11px] font-semibold text-emerald-800 line-clamp-1">
                    {seg.tagline}
                  </p>
                  <p className="text-xs text-stone-600 leading-relaxed line-clamp-3">
                    {seg.description}
                  </p>

                  <div className="pt-2 border-t border-stone-200/70">
                    <h3 className="text-[10px] font-bold text-stone-900 uppercase tracking-wider mb-1.5">
                      Soluções Principais:
                    </h3>
                    <div className="space-y-1">
                      {seg.solutionsProvided.map((sol, i) => (
                        <div key={i} className="flex items-start gap-1.5 text-[11px] text-stone-700">
                          <Check className="w-3 h-3 text-emerald-700 mt-0.5 flex-shrink-0" />
                          <span className="leading-snug">{sol}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-3.5 sm:p-4 pt-0">
                <div className="pt-2.5 border-t border-stone-200/70 flex items-center justify-between gap-2">
                  <button
                    onClick={() => navigate(`/segmentos/${seg.slug}`)}
                    className="inline-flex items-center gap-1 text-[11px] font-medium text-stone-800 hover:text-emerald-800 transition-colors"
                  >
                    <span>Ver detalhes</span>
                    <ArrowRight className="w-3 h-3 text-emerald-700" />
                  </button>

                  <button
                    onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: `Projeto para o segmento: ${seg.title}` })}
                    className="px-2.5 py-1 rounded bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-[11px] font-medium transition-colors shadow-2xs"
                  >
                    Cotação
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-10 sm:mt-12">
        <PreFooterCTA />
      </div>
    </main>
  );
};
