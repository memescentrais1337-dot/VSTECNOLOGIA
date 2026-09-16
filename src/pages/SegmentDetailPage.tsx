import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { segmentsData } from '../data/segments';
import { ArrowLeft, CheckCircle2, ShieldAlert, ShieldCheck } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const SegmentDetailPage: React.FC = () => {
  const { routeParams, navigate, openLeadModalWithData } = useNavigation();
  const slug = routeParams.slug;

  const segment = segmentsData.find((s) => s.slug === slug) || segmentsData[0];

  return (
    <main className="pt-20 sm:pt-24 pb-10 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-4">
        <button
          onClick={() => navigate('/segmentos')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para todos os segmentos</span>
        </button>
      </div>

      {/* Hero Section - Compact */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          <div className="lg:col-span-7">
            <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider">
              Vertical de Atuação
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight mt-0.5">
              {segment.title}
            </h1>
            <p className="mt-1 text-xs sm:text-sm font-medium text-emerald-800">
              {segment.tagline}
            </p>
            <p className="mt-2.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {segment.description}
            </p>

            <div className="mt-5 flex items-center gap-3">
              <button
                onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: `Atendimento técnico especializado para ${segment.title}` })}
                className="px-4 py-2 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-medium text-xs sm:text-sm shadow-2xs transition-colors"
              >
                Solicitar Diagnóstico para {segment.title}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-xl overflow-hidden shadow-2xs border border-stone-200 aspect-16/10 sm:aspect-4/3 max-h-64 sm:max-h-72">
              <img
                src={segment.imageUrl}
                alt={segment.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Challenges & Solutions - Compact Panels */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-stone-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6">
          {/* Challenges */}
          <div className="bg-stone-50/80 p-4 sm:p-5 rounded-xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 text-stone-900 font-semibold text-sm mb-3">
              <ShieldAlert className="w-4 h-4 text-amber-600" />
              <span>Desafios Críticos Deste Setor</span>
            </div>
            <ul className="space-y-2">
              {segment.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions */}
          <div className="bg-emerald-50/40 p-4 sm:p-5 rounded-xl border border-emerald-200/80 shadow-2xs">
            <div className="flex items-center gap-2 text-emerald-950 font-semibold text-sm mb-3">
              <ShieldCheck className="w-4 h-4 text-emerald-700" />
              <span>Soluções VS Homologadas para o Cenário</span>
            </div>
            <ul className="space-y-2">
              {segment.solutionsProvided.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-xs text-stone-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{s}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 sm:mt-10">
        <PreFooterCTA />
      </div>
    </main>
  );
};
