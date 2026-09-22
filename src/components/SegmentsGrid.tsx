import React, { useState, useEffect, useRef, memo } from 'react';
import { segmentsData } from '../data/segments';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ChevronRight, Check } from 'lucide-react';
import { MotionReveal } from './common/MotionReveal';

export const SegmentsGrid: React.FC = memo(() => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const visibleSegments = segmentsData.slice(0, 6);
  const [selectedSegmentId, setSelectedSegmentId] = useState<string>(visibleSegments[0].id);
  const [isAutoPlaying, setIsAutoPlaying] = useState<boolean>(true);
  const [isInView, setIsInView] = useState<boolean>(false);
  const userInteractedRef = useRef<boolean>(false);

  // IntersectionObserver to only rotate when in viewport
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === 'undefined') {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { rootMargin: '50px 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Alternância automática a cada 3.5 segundos em loop contínuo - apenas quando visível na tela
  useEffect(() => {
    if (!isAutoPlaying || !isInView || userInteractedRef.current) return;

    const timer = setInterval(() => {
      setSelectedSegmentId((currentId) => {
        const currentIndex = visibleSegments.findIndex((s) => s.id === currentId);
        const nextIndex = (currentIndex + 1) % visibleSegments.length;
        return visibleSegments[nextIndex].id;
      });
    }, 3500);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isInView, visibleSegments]);

  const handleUserSelect = (segmentId: string) => {
    userInteractedRef.current = true;
    setIsAutoPlaying(false);
    setSelectedSegmentId(segmentId);
  };

  const activeSegment = visibleSegments.find((s) => s.id === selectedSegmentId) || visibleSegments[0];

  return (
    <section
      ref={sectionRef}
      id="segments-section"
      className="py-6 lg:py-8 bg-white border-b border-stone-200"
      aria-label="Segmentos Atendidos"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-4 sm:mb-5 gap-3">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                Mercados Atendidos
              </span>
              {isAutoPlaying && (
                <span className="inline-flex items-center gap-1 text-[10px] text-stone-600 bg-stone-100 px-1.5 py-0.5 rounded text-xs font-normal">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse" />
                  Rotação automática
                </span>
              )}
            </div>
            <h2 className="text-base sm:text-lg lg:text-xl font-semibold text-stone-900 tracking-tight mt-0.5">
              Soluções desenvolvidas para diferentes operações
            </h2>
            <p className="mt-0.5 text-xs text-stone-600">
              Engenharia adaptada aos requisitos regulatórios, de continuidade e segurança de cada setor de atividade.
            </p>
          </div>

          <button
            onClick={() => navigate('/segmentos')}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-emerald-800 transition-colors flex-shrink-0 cursor-pointer"
          >
            <span>Ver todos os 10 segmentos</span>
            <ArrowRight className="w-3 h-3 btn-arrow-icon" />
          </button>
        </MotionReveal>

        {/* Interactive Segment Showcase */}
        <MotionReveal delay={0.08} className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-5 items-start">
          {/* Left Vertical List */}
          <div className="lg:col-span-5 space-y-1">
            {visibleSegments.map((segment) => {
              const isSelected = segment.id === activeSegment.id;
              return (
                <button
                  key={segment.id}
                  onClick={() => handleUserSelect(segment.id)}
                  className={`relative overflow-hidden w-full text-left p-2 sm:p-2.5 rounded-md transition-colors duration-150 flex items-center justify-between border cursor-pointer ${
                    isSelected
                      ? 'bg-stone-50 border-emerald-600/50 text-stone-900 shadow-2xs'
                      : 'bg-white hover:bg-stone-50/60 border-stone-200 text-stone-600'
                  }`}
                >
                  {isSelected && isAutoPlaying && isInView && (
                    <div
                      key={`progress-${segment.id}`}
                      className="absolute bottom-0 left-0 right-0 h-[2px] bg-emerald-700 animate-[progress_3.5s_linear_infinite]"
                      style={{ animationDuration: '3500ms' }}
                    />
                  )}
                  <div className="pr-2.5">
                    <span className={`text-xs font-semibold block ${isSelected ? 'text-emerald-950 font-bold' : 'text-stone-800'}`}>
                      {segment.title}
                    </span>
                    <span className="text-[10px] text-stone-500 line-clamp-1">
                      {segment.tagline}
                    </span>
                  </div>
                  <ChevronRight
                    className={`w-3.5 h-3.5 flex-shrink-0 transition-transform ${
                      isSelected ? 'text-emerald-700 translate-x-0.5' : 'text-stone-400'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Detailed Preview */}
          <div className="lg:col-span-7 bg-white rounded-md border border-stone-200 overflow-hidden shadow-2xs flex flex-col justify-between">
            <div className="relative h-28 sm:h-32 overflow-hidden bg-stone-100">
              <img
                src={activeSegment.imageUrl}
                alt={activeSegment.title}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
                width="640"
                height="128"
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
                  className="group inline-flex items-center gap-1.5 text-[11px] font-medium text-stone-800 hover:text-emerald-800 cursor-pointer"
                >
                  <span>Ver especificações completas para {activeSegment.title}</span>
                  <ArrowRight className="w-3 h-3 btn-arrow-icon" />
                </button>
              </div>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
});

SegmentsGrid.displayName = 'SegmentsGrid';
