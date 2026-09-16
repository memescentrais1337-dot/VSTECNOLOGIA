import React, { useState } from 'react';
import { segmentsData } from '../data/segments';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';

export const SegmentsGrid: React.FC = () => {
  const { navigate } = useNavigation();
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(segmentsData[0].id);

  const activeSegment = segmentsData.find((s) => s.id === selectedSegmentId) || segmentsData[0];

  return (
    <section
      id="segments-section"
      className="py-6 lg:py-8 bg-white border-b border-stone-200"
      aria-label="Segmentos Atendidos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-5 gap-3">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
              Mercados Atendidos
            </span>
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-stone-900 tracking-tight mt-0.5">
              Soluções desenvolvidas para diferentes operações
            </h2>
            <p className="mt-0.5 text-xs text-stone-600">
              Engenharia adaptada aos requisitos regulatórios, de continuidade e segurança de cada setor de atividade.
            </p>
          </div>

          <button
            onClick={() => navigate('/segmentos')}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-emerald-800 transition-colors flex-shrink-0"
          >
            <span>Ver todos os 10 segmentos</span>
            <ArrowRight className="w-3 h-3" />
          </button>
        </div>

        {/* Interactive Segment Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          {/* Left Vertical List - Compact rows */}
          <div className="lg:col-span-5 space-y-1">
            {segmentsData.slice(0, 6).map((segment) => {
              const isSelected = segment.id === activeSegment.id;
              return (
                <button
                  key={segment.id}
                  onClick={() => setSelectedSegmentId(segment.id)}
                  className={`w-full text-left p-2 sm:p-2.5 rounded-md transition-all duration-150 flex items-center justify-between border ${
                    isSelected
                      ? 'bg-stone-50 border-stone-400 text-stone-900 shadow-2xs'
                      : 'bg-white hover:bg-stone-50/60 border-stone-200 text-stone-600'
                  }`}
                >
                  <div className="pr-2.5">
                    <span className={`text-xs font-semibold block ${isSelected ? 'text-stone-900' : 'text-stone-800'}`}>
                      {segment.title}
                    </span>
                    <span className="text-[10px] text-stone-500 line-clamp-1">
                      {segment.tagline}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 flex-shrink-0 ${
                      isSelected ? 'text-emerald-700' : 'text-stone-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Preview - Ultra Compact card */}
          <div className="lg:col-span-7 bg-white rounded-md border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
            <div className="relative h-28 sm:h-32 overflow-hidden bg-stone-100">
              <img
                src={activeSegment.imageUrl}
                alt={activeSegment.title}
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute bottom-0 inset-x-0 bg-stone-900/90 text-white px-3 py-1.5">
                <span className="text-[9px] font-mono text-stone-300 uppercase tracking-wider">
                  Aplicação Específica
                </span>
                <h3 className="text-xs sm:text-sm font-semibold text-white leading-tight">
                  {activeSegment.title}
                </h3>
              </div>
            </div>

            <div className="p-3 sm:p-3.5 space-y-2.5">
              <p className="text-xs text-stone-600 leading-relaxed">
                {activeSegment.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2.5 border-t border-stone-100">
                <div>
                  <h4 className="text-[10px] font-semibold text-stone-900 uppercase tracking-wider mb-1">
                    Desafios do Setor
                  </h4>
                  <ul className="space-y-0.5">
                    {activeSegment.challenges.map((c, i) => (
                      <li key={i} className="text-[10px] sm:text-[11px] text-stone-600 flex items-start gap-1">
                        <span className="text-stone-400">•</span>
                        <span className="leading-snug">{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-[10px] font-semibold text-stone-900 uppercase tracking-wider mb-1">
                    Soluções VS Integradas
                  </h4>
                  <ul className="space-y-0.5">
                    {activeSegment.solutionsProvided.map((s, i) => (
                      <li key={i} className="text-[10px] sm:text-[11px] text-stone-600 flex items-start gap-1">
                        <Check className="w-3 h-3 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <span className="leading-snug">{s}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                <button
                  onClick={() => navigate(`/segmentos/${activeSegment.slug}`)}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-800 hover:text-emerald-800"
                >
                  <span>Ver especificações completas para {activeSegment.title}</span>
                  <ArrowRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
