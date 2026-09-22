import React, { useEffect, useState } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { segmentsData } from '../data/segments';
import { projectsData } from '../data/projects';
import { companyData } from '../data/company';
import { trackEvent } from '../utils/analytics';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Workflow,
  Cpu,
  Layers,
  Award,
  HelpCircle,
  MessageCircle,
  FileCheck2,
  ChevronDown,
} from 'lucide-react';
import { MotionReveal } from '../components/common/MotionReveal';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const SegmentDetailPage: React.FC = () => {
  const { routeParams, navigate, openLeadModalWithData } = useNavigation();
  const slug = routeParams.slug;

  const segment = segmentsData.find((s) => s.slug === slug) || segmentsData[0];
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  useEffect(() => {
    if (segment) {
      trackEvent('segment_view', {
        segment_id: segment.id,
        segment_slug: segment.slug,
        title: segment.title,
      });
    }
  }, [segment]);

  // Related projects
  const relatedProjects = projectsData.filter((p) => {
    if (segment.relatedCaseSlugs && segment.relatedCaseSlugs.includes(p.slug)) return true;
    if (segment.featuredProject === p.id || segment.featuredProject === p.slug) return true;
    return false;
  });

  const whatsappMessage = `Olá! Estou avaliando uma solução de engenharia para o segmento de ${segment.title} no site da VS Tecnologia. Gostaria de conversar com um especialista.`;
  const whatsappUrl = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleOpenLeadModal = () => {
    openLeadModalWithData({
      purpose: segment.title,
      projectSummary: `Solicitação de diagnóstico técnico para o segmento: ${segment.title} (${segment.tagline})`,
    });
  };

  return (
    <main className="pt-20 sm:pt-24 pb-16 bg-white min-h-screen">
      {/* Breadcrumb / Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => navigate('/segmentos')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para todos os Segmentos</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <MotionReveal className="lg:col-span-7 space-y-4">
            <span className="text-[11px] font-bold text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded border border-emerald-200 uppercase tracking-wider inline-block">
              Solução Especializada por Segmento
            </span>
            <h1 className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight">
              {segment.title}
            </h1>
            <p className="text-sm sm:text-base font-semibold text-emerald-900 leading-snug">
              {segment.tagline}
            </p>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed max-w-2xl">
              {segment.description}
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleOpenLeadModal}
                className="px-5 py-3 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs uppercase tracking-wider shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Solicitar Diagnóstico para {segment.title}</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { origin: `segment_${segment.id}` })}
                className="px-4 py-3 rounded-lg bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-xs flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-700" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>
          </MotionReveal>

          <MotionReveal delay={0.1} className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-md border border-stone-200 aspect-16/10 sm:aspect-4/3 max-h-80 relative">
              <img
                src={segment.imageUrl}
                alt={segment.title}
                className="w-full h-full object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-white text-[11px] font-mono bg-stone-900/80 backdrop-blur-xs px-2.5 py-1.5 rounded-lg border border-stone-700/80 flex items-center justify-between">
                <span>Engenharia Homologada VS</span>
                <span className="text-emerald-400 font-bold">CREA-GO 26.848</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </div>

      {/* Challenges & Solutions Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Challenges */}
          <MotionReveal className="bg-stone-50 p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 text-stone-950 font-bold text-sm sm:text-base mb-4">
              <div className="w-7 h-7 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <span>Desafios Críticos Deste Setor</span>
            </div>
            <ul className="space-y-3">
              {segment.challenges.map((c, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-500 mt-2 shrink-0" />
                  <span className="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          {/* Solutions */}
          <MotionReveal delay={0.1} className="bg-emerald-50/50 p-6 sm:p-7 rounded-2xl border border-emerald-200/90 shadow-2xs">
            <div className="flex items-center gap-2 text-emerald-950 font-bold text-sm sm:text-base mb-4">
              <div className="w-7 h-7 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <span>Soluções VS Homologadas para o Cenário</span>
            </div>
            <ul className="space-y-3">
              {segment.solutionsProvided.map((s, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-800">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 mt-0.5 shrink-0" />
                  <span className="leading-relaxed font-medium">{s}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>

      {/* Recommended Architecture */}
      {segment.recommendedArchitecture && segment.recommendedArchitecture.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <MotionReveal className="p-6 sm:p-8 bg-[#FAFBF9] rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-emerald-700" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                Topologia de Engenharia Recomendada
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-950 mb-6">
              Arquitetura de Integração para {segment.title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {segment.recommendedArchitecture.map((arch, idx) => (
                <div key={idx} className="bg-white p-5 rounded-xl border border-stone-200 shadow-2xs">
                  <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 mb-2 inline-block">
                    CAMADA 0{idx + 1}
                  </span>
                  <h4 className="text-sm font-bold text-stone-900 mb-1">{arch.title}</h4>
                  <p className="text-xs text-stone-600 leading-relaxed">{arch.desc}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      )}

      {/* Homologated Manufacturers & Differentials */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Manufacturers */}
          <MotionReveal className="lg:col-span-5 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Cpu className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-tight">
                Fabricantes Homologados para Este Setor
              </h3>
            </div>
            <p className="text-xs text-stone-500 mb-4 leading-relaxed">
              Combinamos o melhor de cada fabricante global para criar um ecossistema sem dependência exclusiva de marca única:
            </p>
            <div className="flex flex-wrap gap-2">
              {(segment.manufacturers || ['AXIS Communications', 'Hanwha Vision', 'Avigilon', 'CAME', 'Furukawa']).map(
                (brand, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1.5 rounded-lg bg-stone-100 text-stone-800 text-xs font-semibold border border-stone-200"
                  >
                    {brand}
                  </span>
                )
              )}
            </div>
          </MotionReveal>

          {/* Differentials */}
          <MotionReveal delay={0.1} className="lg:col-span-7 bg-white p-6 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-3">
              <Award className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm font-bold text-stone-900 uppercase tracking-tight">
                Diferenciais da Engenharia VS
              </h3>
            </div>
            <ul className="space-y-2.5">
              {(
                segment.differentials || [
                  'Engenharia própria com ART registrada no CREA-GO para todas as disciplinas',
                  'Equipe técnica própria com frota e base operacional localizada em Goiânia - GO',
                  'SLA de atendimento de emergência e peças de reposição rápida em estoque',
                ]
              ).map((diff, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="leading-snug">{diff}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>
        </div>
      </div>

      {/* Related Cases Section */}
      {relatedProjects.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <MotionReveal>
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider block">
                  Prova de Entrega
                </span>
                <h3 className="text-lg sm:text-xl font-bold text-stone-900">
                  Projetos Realizados em Operações Semelhantes
                </h3>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {relatedProjects.map((p) => (
                <div
                  key={p.id}
                  onClick={() => navigate(`/projetos/${p.slug}`)}
                  className="bg-stone-50 hover:bg-stone-100/90 border border-stone-200 rounded-2xl p-5 transition-all cursor-pointer flex flex-col sm:flex-row items-start gap-4 group"
                >
                  <div className="w-full sm:w-36 h-24 rounded-xl overflow-hidden shrink-0 border border-stone-200">
                    <img
                      src={p.heroImage}
                      alt={p.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                      loading="lazy"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      {p.client}
                    </span>
                    <h4 className="text-sm font-bold text-stone-900 group-hover:text-emerald-800 transition-colors line-clamp-1">
                      {p.title}
                    </h4>
                    <p className="text-xs text-stone-500 line-clamp-2 mt-1 leading-snug">
                      {p.shortDesc}
                    </p>
                    <span className="text-xs font-semibold text-emerald-700 inline-flex items-center gap-1 mt-2">
                      <span>Ver Case Completo</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      )}

      {/* Segment FAQ */}
      {segment.faq && segment.faq.length > 0 && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <MotionReveal className="bg-[#FAFBF9] rounded-2xl border border-stone-200 p-6 sm:p-8">
            <div className="flex items-center gap-2 mb-2">
              <HelpCircle className="w-4 h-4 text-emerald-700" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                Dúvidas Técnicas Frequentes
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-950 mb-6">
              Perguntas e Respostas sobre Soluções para {segment.title}
            </h3>

            <div className="space-y-3">
              {segment.faq.map((item, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-stone-200 overflow-hidden">
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full text-left p-4 flex items-center justify-between gap-3 cursor-pointer"
                    >
                      <span className="text-xs sm:text-sm font-bold text-stone-900">{item.q}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-stone-400 shrink-0 transition-transform ${
                          isOpen ? 'rotate-180 text-emerald-700' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 pt-1 text-xs text-stone-600 leading-relaxed border-t border-stone-100">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </MotionReveal>
        </div>
      )}

      {/* Final PreFooter CTA */}
      <PreFooterCTA />
    </main>
  );
};
