import React, { useState, useEffect } from 'react';
import { useNavigation } from '../../context/NavigationContext';
import { SolutionLandingData } from '../../types/solutionLanding';
import { DirectLeadForm } from './DirectLeadForm';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from '../common/MotionReveal';
import {
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronDown,
  Phone,
  MessageCircle,
  FileCheck,
  Wrench,
  Headphones,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { companyData } from '../../data/company';

interface SolutionLandingProps {
  data: SolutionLandingData;
}

const headerLogo = '/images/institucional/logo-header.jpg';

export const SolutionLanding: React.FC<SolutionLandingProps> = ({ data }) => {
  const { navigate, scrollToSection, openLeadModalWithData } = useNavigation();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [vsSlide, setVsSlide] = useState(0);

  // 5 Fotos reais da VS Tecnologia para o carrossel institucional em loop de 4 segundos
  const vsPhotos = [
    {
      src: '/images/institucional/banner-destaque.png',
      alt: 'Infraestrutura e Tecnologia Corporativa VS Tecnologia',
      caption: 'Infraestrutura Tecnológica e Capacidade Operacional',
      tag: 'Estrutura & Operações',
      desc: 'Sede e estrutura técnica para suporte a projetos corporativos de grande porte em todo o Brasil.',
    },
    {
      src: '/images/turnkey/turnkey-slide-1.png',
      alt: 'Engenharia Turn-Key e Projetos Executivos com ART',
      caption: 'Engenharia Turn-Key e Projetos de Alta Complexidade',
      tag: 'Projetos com ART',
      desc: 'Elaboração de memoriais, cálculos e projetos executivos registrados no CREA-GO sob o Nº 26.848.',
    },
    {
      src: '/images/turnkey/turnkey-slide-2.png',
      alt: 'Infraestrutura Física de Redes, Racks e Cabeamento Estruturado',
      caption: 'Infraestrutura Física de Redes e Cabeamento Estruturado',
      tag: 'Normas ABNT & TIA/EIA',
      desc: 'Montagem de racks, certificação de cabeamento de dados e fibra óptica para alta disponibilidade.',
    },
    {
      src: '/images/turnkey/turnkey-slide-3.png',
      alt: 'Sistemas Integrados de Segurança Eletrônica, CFTV e Controle de Acesso',
      caption: 'Automação Predial, CFTV IP e Controle de Acessos Críticos',
      tag: 'Sistemas Críticos',
      desc: 'Convergência de tecnologias líderes mundiais com inteligência analítica e proteção patrimonial.',
    },
    {
      src: '/images/turnkey/turnkey-slide-4.png',
      alt: 'Equipe Técnica de Engenharia e Operações em Campo',
      caption: 'Corpo Técnico Próprio Habilitado e Certificado em Campo',
      tag: 'Equipe Própria Especializada',
      desc: 'Técnicos e engenheiros treinados diretamente pelos fabricantes, cumprindo normas NR-10 e NR-35.',
    },
  ];

  // Loop automático de 4 em 4 segundos
  useEffect(() => {
    const timer = setInterval(() => {
      setVsSlide((prev) => (prev + 1) % vsPhotos.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [vsPhotos.length]);

  const [activeLpStep, setActiveLpStep] = useState<string>('lp-hero');

  const lpNavSteps = [
    { id: 'lp-hero', label: 'Visão Geral' },
    { id: 'lp-tecnologia', label: 'Tecnologia' },
    { id: 'lp-cases', label: 'Cases Reais' },
    { id: 'lp-aplicacoes', label: 'Aplicações' },
    { id: 'conheca-a-vs-tecnologia', label: 'VS Engenharia' },
    { id: 'contato-especialista', label: 'Contato' },
  ];

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollPos = (window.scrollY || document.documentElement.scrollTop) + 160;
          for (let i = lpNavSteps.length - 1; i >= 0; i--) {
            const step = lpNavSteps[i];
            const el = document.getElementById(step.id);
            if (el && el.offsetTop <= scrollPos) {
              setActiveLpStep(step.id);
              break;
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const prevVsSlide = () => {
    setVsSlide((prev) => (prev - 1 + vsPhotos.length) % vsPhotos.length);
  };

  const nextVsSlide = () => {
    setVsSlide((prev) => (prev + 1) % vsPhotos.length);
  };

  const scrollToForm = () => {
    scrollToSection('contato-especialista');
  };

  const handleOpenWhatsAppIntake = () => {
    openLeadModalWithData({
      purpose: 'Empresa / Uso próprio',
      projectSummary: `Interesse em soluções de engenharia ${data.brandName} (${data.solutionName})`,
      targetChannel: 'whatsapp',
      brandName: data.brandName,
      solutionName: data.solutionName,
    });
  };

  return (
    <div className="bg-white text-stone-900 min-h-screen font-sans antialiased selection:bg-emerald-700 selection:text-white">
      {/* =========================================================================
          HEADER INSTITUCIONAL COMPACTO & CORPORATIVO B2B
         ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-2xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3 sm:gap-5">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2.5 text-left focus:outline-none group cursor-pointer"
              aria-label="Página Inicial VS Tecnologia"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-md overflow-hidden bg-stone-900 border border-stone-300 shadow-2xs flex-shrink-0">
                <img
                  src={headerLogo}
                  alt="Logo VS Tecnologia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-stone-900 text-sm sm:text-base tracking-tight leading-tight">
                  VS Tecnologia
                </span>
                <span className="text-[10px] font-medium text-stone-500 uppercase tracking-wider hidden sm:block">
                  Engenharia & Automação
                </span>
              </div>
            </button>

            <div className="h-5 w-px bg-stone-200 hidden md:block" />

            <div className="hidden md:flex items-center gap-1.5">
              <span className="text-[11px] text-stone-500">Parceiro Homologado:</span>
              <span className="text-xs font-bold text-stone-900 bg-stone-100 px-2 py-0.5 rounded border border-stone-200">
                {data.brandName}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <a
              href={`tel:${companyData.phoneRaw}`}
              className="hidden lg:flex items-center gap-1.5 text-xs font-semibold text-stone-700 hover:text-emerald-800 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-emerald-700" />
              <span>{companyData.phone}</span>
            </a>

            <button
              type="button"
              onClick={handleOpenWhatsAppIntake}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-emerald-50 hover:bg-emerald-100 text-emerald-800 border border-emerald-200 text-xs font-bold transition-all cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
              <span className="hidden sm:inline">WhatsApp Engenharia</span>
              <span className="sm:hidden">WhatsApp</span>
            </button>

            <button
              onClick={scrollToForm}
              className="px-3.5 sm:px-4 py-1.5 sm:py-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-[11px] sm:text-xs font-bold tracking-wider uppercase shadow-2xs transition-all cursor-pointer"
            >
              FALAR COM UM ESPECIALISTA
            </button>
          </div>
        </div>
      </header>

      {/* =========================================================================
          01. HERO SECTION (Compacto, Imersivo, Fundo com Imagem Estática e Overlay)
         ========================================================================= */}
      <section
        id="lp-hero"
        className="relative w-full flex items-center overflow-hidden bg-stone-950 py-9 sm:py-11 lg:py-12 border-b border-stone-800"
      >
        {/* Imagem de Fundo Estática, de alta qualidade e contexto técnico */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">
          <img
            src={data.heroBgImage || data.heroImage}
            alt={data.solutionName}
            className="w-full h-full object-cover object-center scale-100"
            loading="eager"
            fetchPriority="high"
            decoding="async"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Overlay escuro em camadas para máxima legibilidade e padrão nobre da VS */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'linear-gradient(90deg, rgba(7, 14, 22, 0.95) 0%, rgba(7, 14, 22, 0.88) 46%, rgba(7, 14, 22, 0.58) 100%)',
          }}
        />
        <div
          className="absolute inset-0 z-10 pointer-events-none sm:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(7, 14, 22, 0.95) 0%, rgba(7, 14, 22, 0.82) 100%)',
          }}
        />
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent pointer-events-none z-10" />

        {/* Conteúdo Editorial do Hero */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
          <MotionReveal className="max-w-3xl">
            {/* Eyebrow / Selo acima do título */}
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 sm:py-1 rounded-full bg-emerald-950/80 border border-emerald-500/30 text-emerald-400 text-[10px] sm:text-[11px] font-semibold tracking-wider uppercase mb-2 sm:mb-2.5 backdrop-blur-xs shadow-xs">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
              <span>{data.heroEyebrow || `${data.brandName} • ${data.eyebrow}`}</span>
            </div>

            {/* Headline forte em 2 ou 3 linhas */}
            <h1 className="text-xl sm:text-2xl lg:text-[30px] font-semibold text-white tracking-tight leading-[1.2] max-w-[740px]">
              {data.headline}{' '}
              {data.headlineHighlight && (
                <span className="text-emerald-400 block sm:inline">
                  {data.headlineHighlight}
                </span>
              )}
            </h1>

            {/* Subtítulo explicativo */}
            <p className="mt-2.5 sm:mt-3 text-xs sm:text-sm leading-relaxed text-stone-200/90 max-w-[620px]">
              {data.subheadline}
            </p>

            {/* 2 CTAs: 1. Especialista | 2. WhatsApp */}
            <div className="mt-5 sm:mt-6 flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3">
              <button
                id="lp-hero-specialist-cta-btn"
                onClick={scrollToForm}
                className="px-5 py-2.5 rounded-md bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-xs tracking-wider uppercase transition-colors shadow-sm text-center cursor-pointer inline-flex items-center justify-center gap-2"
              >
                <span>FALAR COM UM ESPECIALISTA</span>
                <ArrowRight className="w-3.5 h-3.5 btn-arrow-icon" />
              </button>

              <button
                id="lp-hero-whatsapp-cta-btn"
                type="button"
                onClick={handleOpenWhatsAppIntake}
                className="group inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-md bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-xs font-medium text-xs tracking-wider uppercase transition-colors cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span>CONVERSAR NO WHATSAPP</span>
              </button>
            </div>

            {/* Micro Trust Strip Simplificado e Discreto */}
            <div className="mt-5 pt-3.5 border-t border-white/10 flex flex-wrap items-center gap-3.5 sm:gap-4 text-[11px] text-stone-300 font-medium">
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>CREA-GO Nº 26.848</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <FileCheck className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Projetos com ART</span>
              </div>
              <span className="text-white/20 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Garantia de Fábrica</span>
              </div>
            </div>
          </MotionReveal>
        </div>
      </section>

      {/* Sub-navegação interna sticky das etapas da Landing Page (PARTE 16) */}
      <nav
        aria-label="Etapas da Solução"
        className="sticky top-16 z-30 bg-white/95 backdrop-blur-md border-b border-stone-200/90 shadow-2xs py-2 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 sm:gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-1 sm:gap-1.5 flex-nowrap">
            {lpNavSteps.map((step) => {
              const isActive = activeLpStep === step.id;
              return (
                <button
                  key={step.id}
                  onClick={() => scrollToSection(step.id)}
                  className={`whitespace-nowrap text-[11px] sm:text-xs font-semibold px-2.5 sm:px-3 py-1.5 rounded-md transition-all cursor-pointer ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-800 border border-emerald-200/90 shadow-2xs font-bold'
                      : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100/70 border border-transparent'
                  }`}
                >
                  {step.label}
                </button>
              );
            })}
          </div>

          <button
            onClick={scrollToForm}
            className="hidden md:inline-flex items-center gap-1.5 text-xs font-bold text-emerald-800 hover:text-emerald-900 uppercase tracking-wider whitespace-nowrap cursor-pointer hover:underline"
          >
            <span>Falar com especialista</span>
            <ArrowRight className="w-3.5 h-3.5 btn-arrow-icon" />
          </button>
        </div>
      </nav>

      {/* =========================================================================
          02. TECNOLOGIAS / PRODUTOS (Catálogo Editorial Compacto)
         ========================================================================= */}
      <section id="lp-tecnologia" className="py-10 lg:py-14 bg-white border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
              CATÁLOGO TÉCNICO & EQUIPAMENTOS
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-tight mb-2">
              {data.technologiesTitle || 'Tecnologia completa em uma única solução'}
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              {data.technologiesSubtitle || 'Componentes projetados para transformar vídeo bruto em inteligência operacional imediata.'}
            </p>
          </div>

          {/* Destaque para NÚMEROS TÉCNICOS COMPACTOS (ex: Tyco ou métricas de topo) */}
          {data.heroMetrics && data.heroMetrics.length > 0 && (
            <div className="mb-8 bg-[#F7F8F5] p-5 sm:p-6 rounded-xl border border-stone-200 shadow-2xs">
              <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider block mb-4">
                Indicadores Técnicos de Alto Desempenho
              </span>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 divide-y lg:divide-y-0 lg:divide-x divide-stone-200">
                {data.heroMetrics.map((m, mIdx) => (
                  <div key={mIdx} className={`${mIdx > 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-emerald-800 tracking-tight mb-0.5">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold text-stone-900 uppercase tracking-wider mb-0.5">
                      {m.label}
                    </div>
                    <div className="text-[11px] text-stone-500 leading-normal">
                      {m.detail}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Blocos de Produtos em Layout Alternado (Estilo Catálogo Compacto) */}
          <div className="space-y-6">
            {data.technologies.map((tech, idx) => {
              const isEven = idx % 2 === 1;
              return (
                <div
                  key={idx}
                  className="bg-[#F7F8F5] rounded-xl border border-stone-200/90 overflow-hidden shadow-2xs"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 p-5 sm:p-6 lg:p-7 items-center">
                    {/* Text Column */}
                    <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-wider">
                          {tech.category}
                        </span>
                        {tech.tag && (
                          <span className="text-[11px] text-stone-400">
                            • {tech.tag}
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl font-bold text-stone-950 mb-2 tracking-tight">
                        {tech.title}
                      </h3>

                      <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                        {tech.description}
                      </p>

                      <div className="space-y-1.5 mb-5">
                        {tech.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5 stroke-[2.5]" />
                            <span className="text-xs sm:text-sm text-stone-700 leading-normal">
                              {feat}
                            </span>
                          </div>
                        ))}
                      </div>

                      {tech.specs && (
                        <div className="pt-4 border-t border-stone-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                          {Object.entries(tech.specs).map(([key, val], sIdx) => (
                            <div key={sIdx}>
                              <span className="text-[10px] font-bold uppercase text-stone-500 block mb-0.5">
                                {key}
                              </span>
                              <span className="text-xs sm:text-sm font-semibold text-stone-900 block">
                                {val}
                              </span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Image Column */}
                    <div className={`lg:col-span-5 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                      <div className="relative rounded-lg overflow-hidden bg-white border border-stone-200 aspect-[16/11] max-h-[260px] group">
                        <img
                          src={tech.image || data.heroImage}
                          alt={tech.title}
                          className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                          loading="lazy"
                        />
                        <div className="absolute bottom-2.5 left-2.5 right-2.5 bg-white/95 backdrop-blur-xs px-2.5 py-1.5 rounded border border-stone-200 text-[11px] font-semibold text-stone-900 shadow-2xs flex items-center justify-between">
                          <span className="truncate">{tech.title}</span>
                          <span className="text-[10px] text-emerald-800 font-bold uppercase tracking-wider ml-2 shrink-0">{tech.tag || data.brandName}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================================
          03. AUTORIDADE / CASES REAIS & PROVAS SOCIAIS
         ========================================================================= */}
      <section id="lp-cases" className="py-10 lg:py-14 bg-[#F7F8F5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
              AUTORIDADE COMPROVADA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-tight mb-2">
              Projetos que exigem confiança e precisão
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              A VS Tecnologia projeta, integra e sustenta infraestruturas críticas onde a falha não é uma opção. Conheça implantações reais atendidas pela nossa equipe de engenharia.
            </p>
          </div>

          <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
            {data.cases.map((c, idx) => (
              <MotionStaggerItem key={idx} className="flex flex-col group card-hover-subtle bg-white p-4 sm:p-5 rounded-xl border border-stone-200/90 shadow-2xs">
                <div className="relative aspect-[16/10] overflow-hidden rounded-lg bg-stone-100 border border-stone-200 mb-3">
                  <img
                    src={c.image}
                    alt={c.client}
                    className="w-full h-full object-cover img-hover-subtle"
                    loading="lazy"
                  />
                  <span className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-white/95 backdrop-blur-xs border border-stone-200 text-stone-800 text-[10px] font-bold shadow-2xs">
                    {c.tag}
                  </span>
                </div>
                <div className="flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block mb-0.5">
                      {c.highlight}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-1 leading-snug">
                      {c.client}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                      {c.description}
                    </p>
                  </div>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          07. CONHEÇA A VS TECNOLOGIA (Carrossel Compacto em Loop de 4s & Institucional)
         ========================================================================= */}
      <section id="conheca-a-vs-tecnologia" className="py-10 lg:py-14 bg-white border-b border-stone-200/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header da Seção */}
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
              ESTRUTURA & ENGENHARIA CONSULTIVA
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-tight mb-2">
              Conheça a VS Tecnologia
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Mais de uma década entregando soluções integradas de missão crítica, segurança eletrônica, redes e automação com responsabilidade técnica formal e metodologia turn-key.
            </p>
          </div>

          {/* Grid Principal: 5 Fotos em Loop de 4s (Esquerda) + Visão Geral da VS (Direita) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start mb-10">
            {/* Coluna Esquerda: Slideshow de 5 Fotos com Loop de 4s */}
            <div className="lg:col-span-6">
              <div className="relative rounded-xl overflow-hidden border border-stone-300/90 bg-stone-950 shadow-xs group">
                {/* Visualizador de Imagens */}
                <div className="relative w-full h-[260px] sm:h-[300px] lg:h-[330px] overflow-hidden">
                  {vsPhotos.map((photo, pIdx) => (
                    <div
                      key={pIdx}
                      className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
                        pIdx === vsSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
                      }`}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-full object-cover"
                        loading={pIdx === 0 ? 'eager' : 'lazy'}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-stone-950/90 via-stone-950/30 to-transparent" />
                    </div>
                  ))}

                  {/* Badges Flutuantes Superiores */}
                  <div className="absolute top-3 left-3 right-3 z-20 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-0.5 rounded bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-bold uppercase tracking-wider border border-white/20">
                      {vsPhotos[vsSlide].tag}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-emerald-700/90 backdrop-blur-xs text-white text-[11px] font-mono font-bold">
                      0{vsSlide + 1} / 0{vsPhotos.length}
                    </span>
                  </div>

                  {/* Controles Manuais Laterais */}
                  <button
                    onClick={prevVsSlide}
                    aria-label="Foto anterior"
                    className="absolute left-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextVsSlide}
                    aria-label="Próxima foto"
                    className="absolute right-2.5 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-stone-900/70 hover:bg-stone-900 text-white flex items-center justify-center transition-all border border-white/20 cursor-pointer"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>

                  {/* Legenda e Descrição na base da foto */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-4 text-white">
                    <p className="text-xs sm:text-sm font-bold text-white mb-0.5 leading-snug">
                      {vsPhotos[vsSlide].caption}
                    </p>
                    <p className="text-[11px] text-stone-300 leading-relaxed line-clamp-2">
                      {vsPhotos[vsSlide].desc}
                    </p>
                  </div>
                </div>

                {/* 5 Indicadores em Barra com Progresso de 4s */}
                <div className="p-2.5 bg-stone-900 border-t border-stone-800 flex items-center gap-1.5">
                  {vsPhotos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setVsSlide(i)}
                      aria-label={`Ir para foto ${i + 1}`}
                      className="flex-1 h-1 rounded-full overflow-hidden bg-stone-700 transition-all cursor-pointer"
                    >
                      <div
                        className={`h-full transition-all duration-300 ${
                          i === vsSlide ? 'bg-emerald-500 w-full' : 'w-0'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* Informações de Registro e Credenciamento */}
              <div className="mt-3 grid grid-cols-2 gap-2.5 text-xs">
                <div className="p-2.5 rounded-lg bg-[#F7F8F5] border border-stone-200">
                  <span className="text-stone-500 block text-[9px] uppercase font-bold">Registro Profissional</span>
                  <span className="font-bold text-stone-900 text-[11px]">CREA-GO Nº 26.848</span>
                </div>
                <div className="p-2.5 rounded-lg bg-[#F7F8F5] border border-stone-200">
                  <span className="text-stone-500 block text-[9px] uppercase font-bold">Responsabilidade Técnica</span>
                  <span className="font-bold text-emerald-800 text-[11px]">Emissão de ART em 100% dos Projetos</span>
                </div>
              </div>
            </div>

            {/* Coluna Direita: Narrativa Corporativa Completa da VS */}
            <div className="lg:col-span-6 space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-stone-950 tracking-tight leading-snug mb-2.5">
                  Engenharia que transforma complexidade técnica em segurança e estabilidade operacional.
                </h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-stone-700 leading-relaxed">
                  <p>
                    A <strong className="text-stone-900 font-semibold">{companyData.legalName}</strong> é especializada em projetos turn-key de engenharia para sistemas críticos de segurança eletrônica, telecomunicações, redes industriais e automação predial.
                  </p>
                  <p>
                    Com sede própria em {companyData.address.city} ({companyData.address.state}) e capacidade de mobilização técnica em todo o Brasil, atuamos como parceira estratégica de organizações com operações contínuas — concessionárias, hospitais, indústrias e edifícios corporativos.
                  </p>
                  <p>
                    Não atuamos como revendedores de caixas. Desenvolvemos o diagnóstico preliminar, dimensionamos a arquitetura ideal de marcas líderes globais como <strong className="text-stone-900 font-semibold">{data.brandName}</strong>, executamos a infraestrutura física e fornecemos sustentação contínua com equipe própria.
                  </p>
                </div>
              </div>

              {/* Destaque do Diretor de Engenharia */}
              <div className="p-3.5 rounded-xl bg-[#F7F8F5] border border-stone-200/90 flex items-center gap-3.5">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200 border-2 border-white shadow-2xs shrink-0">
                  <img
                    src="/images/institucional/diretor-especialista.png"
                    alt={companyData.engineeringDirector.name}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-emerald-800 uppercase tracking-wider block">
                    Direção de Engenharia e Operações
                  </span>
                  <h4 className="text-sm font-bold text-stone-950">
                    {companyData.engineeringDirector.name}
                  </h4>
                  <p className="text-[11px] text-stone-600 leading-tight mt-0.5">
                    Supervisão técnica de ponta a ponta com conformidade às normas ABNT, TIA/EIA, NR-10 e NR-35.
                  </p>
                </div>
              </div>

              {/* Botões de Ação */}
              <div className="pt-1 flex flex-wrap items-center gap-3">
                <button
                  onClick={scrollToForm}
                  className="px-4 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center gap-1.5 cursor-pointer"
                >
                  <span>SOLICITAR CONTATO COM ENGENHARIA</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  type="button"
                  onClick={handleOpenWhatsAppIntake}
                  className="px-3.5 py-2.5 rounded-lg border border-stone-300 hover:bg-stone-50 text-stone-800 text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-700" />
                  <span>WHATSAPP DIRETO</span>
                </button>
              </div>
            </div>
          </div>

          {/* 4 Pilares Institucionais em Caixas Abertas Compactas */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5 pt-8 border-t border-stone-200">
            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-stone-200/90 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <FileCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-950 mb-1.5">
                  Engenharia Consultiva & ART
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Projetos executivos registrados no CREA-GO com Anotação de Responsabilidade Técnica formal para total conformidade jurídica.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                CREA-GO Nº 26.848
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-stone-200/90 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Wrench className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-950 mb-1.5">
                  Metodologia Turn-Key 100%
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Um único parceiro responsável por diagnóstico, infraestrutura, cabeamento, equipamentos, parametrização e treinamento.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                Ciclo Completo Integrado
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-stone-200/90 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-950 mb-1.5">
                  Parcerias Oficiais de Fábrica
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Fornecimento direto com garantia oficial de fabricante, peças de reposição e canais diretos de suporte técnico avançado.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                Garantia e Procedência Legal
              </div>
            </div>

            <div className="p-4 sm:p-5 rounded-xl bg-[#F7F8F5] border border-stone-200/90 flex flex-col justify-between">
              <div>
                <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-800 flex items-center justify-center mb-3">
                  <Headphones className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-stone-950 mb-1.5">
                  Corpo Técnico Próprio & SLA
                </h4>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Técnicos de campo próprios em Goiânia com atendimento presencial e suporte remoto contínuo para operações ininterruptas.
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-stone-200 text-[11px] font-semibold text-emerald-800">
                Atendimento Contínuo
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          08. O QUE SUA OPERAÇÃO GANHA? (Retorno Operacional Compacto)
         ========================================================================= */}
      <section id="lp-aplicacoes" className="py-10 lg:py-14 bg-[#F7F8F5] border-b border-stone-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-8">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
              RETORNO OPERACIONAL
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight leading-tight mb-2">
              O que sua operação ganha?
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
              Três pilares de valor mensurável para diretores de operações, tecnologia da informação e segurança patrimonial.
            </p>
          </div>

          <MotionStaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5 sm:gap-6">
            {data.businessBenefits.map((benefit, bIdx) => (
              <MotionStaggerItem
                key={bIdx}
                className="bg-white border border-stone-200/90 rounded-xl overflow-hidden flex flex-col justify-between shadow-2xs card-hover-subtle group"
              >
                {benefit.image && (
                  <div className="aspect-[16/9] max-h-[160px] overflow-hidden bg-stone-100 border-b border-stone-100 relative">
                    <img
                      src={benefit.image}
                      alt={benefit.title}
                      className="w-full h-full object-cover img-hover-subtle"
                      loading="lazy"
                    />
                    <div className="absolute top-2.5 left-2.5 px-2 py-0.5 rounded bg-stone-900/80 backdrop-blur-xs text-white text-[10px] font-mono font-bold">
                      {benefit.number}
                    </div>
                  </div>
                )}
                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1">
                  <div>
                    {!benefit.image && (
                      <div className="text-2xl sm:text-3xl font-black text-emerald-800 font-mono mb-2">
                        {benefit.number}
                      </div>
                    )}
                    <h3 className="text-base sm:text-lg font-bold text-stone-950 mb-2 tracking-tight">
                      {benefit.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mb-4">
                      {benefit.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-stone-200 space-y-2">
                    {benefit.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-700 mt-1.5 shrink-0" />
                        <span className="text-xs sm:text-sm text-stone-700 leading-relaxed">
                          {h}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </MotionStaggerItem>
            ))}
          </MotionStaggerContainer>
        </div>
      </section>

      {/* =========================================================================
          10. FORMULÁRIO DE CONTATO (Fundo Branco, Compacto)
         ========================================================================= */}
      <section id="contato-especialista" className="py-10 lg:py-14 bg-white border-b border-stone-200/80">
        <MotionReveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
              ESTUDO TÉCNICO PRELIMINAR
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-2">
              Conte um pouco sobre seu projeto
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 max-w-lg mx-auto">
              Nossa equipe de engenharia entrará em contato para analisar os requisitos e dimensionar a arquitetura ideal de <strong className="text-stone-900">{data.brandName}</strong> para sua empresa.
            </p>
          </div>

          <DirectLeadForm
            solutionName={data.solutionName}
            source={data.formSource}
          />
        </MotionReveal>
      </section>

      {/* =========================================================================
          11. FAQ ACCORDION (Fundo Off-White #F7F8F5, Compacto)
         ========================================================================= */}
      <section className="py-10 lg:py-14 bg-[#F7F8F5] border-b border-stone-200/80">
        <MotionReveal className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-[11px] font-bold text-emerald-800 uppercase tracking-widest block mb-1.5">
              DÚVIDAS FREQUENTES
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-stone-950 tracking-tight mb-2">
              Perguntas sobre {data.brandName} e implantação turn-key
            </h2>
            <p className="text-xs sm:text-sm text-stone-600">
              Respostas diretas de engenharia para apoiar sua tomada de decisão.
            </p>
          </div>

          <div className="space-y-2.5">
            {data.faq.map((item, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-stone-200 rounded-lg overflow-hidden transition-colors shadow-2xs"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full text-left p-4 sm:p-4.5 flex items-center justify-between gap-3 cursor-pointer hover:bg-stone-50/60 transition-colors"
                  >
                    <span className="text-xs sm:text-sm font-bold text-stone-900">
                      {item.question}
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 text-emerald-800 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-stone-600 leading-relaxed border-t border-stone-100">
                      {item.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </MotionReveal>
      </section>

      {/* =========================================================================
          12. CTA FINAL (Seção em Verde Escuro #0a3520, Compacta)
         ========================================================================= */}
      <section className="py-12 lg:py-14 bg-[#0a3520] text-center text-white relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-900/80 border border-emerald-700/60 text-emerald-300 text-[10px] font-bold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>Engenharia Turn-key com Garantia</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight leading-tight mb-3">
            {data.finalCTA.headline || 'Vamos conversar sobre seu projeto?'}
          </h2>
          <p className="text-xs sm:text-sm text-emerald-100/90 max-w-xl mx-auto mb-6">
            {data.finalCTA.subheadline || 'Fale com um especialista da VS e entenda qual arquitetura faz sentido para sua operação.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={scrollToForm}
              className="px-6 py-3 rounded-lg bg-white hover:bg-stone-100 text-emerald-950 text-xs sm:text-sm font-bold uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span>{data.finalCTA.buttonText || 'FALAR COM UM ESPECIALISTA'}</span>
            </button>

            <button
              type="button"
              onClick={handleOpenWhatsAppIntake}
              className="px-5 py-3 rounded-lg bg-emerald-800/80 hover:bg-emerald-800 text-white border border-emerald-700/80 text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 text-emerald-300" />
              <span>CONVERSAR NO WHATSAPP</span>
            </button>
          </div>

          <p className="text-[11px] text-emerald-200/60 mt-5">
            Atendimento técnico realizado por engenheiros certificados • CREA-GO Nº 26.848
          </p>
        </div>
      </section>

      {/* =========================================================================
          13. FOOTER INSTITUCIONAL SÓBRIO & LIMPO
         ========================================================================= */}
      <footer className="py-8 bg-white border-t border-stone-200 text-stone-600 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 pb-6 border-b border-stone-200">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded overflow-hidden bg-stone-900">
                <img
                  src={headerLogo}
                  alt="VS Tecnologia"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-bold text-stone-900 text-xs sm:text-sm block">
                  VS Tecnologia e Automação
                </span>
                <span className="text-[10px] text-stone-500 block">
                  Engenharia e Integração B2B • CREA-GO Nº 26.848
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-stone-700 font-medium text-xs">
              <button
                onClick={() => navigate('/')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Início
              </button>
              <button
                onClick={() => navigate('/solucoes')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Soluções
              </button>
              <button
                onClick={() => navigate('/projetos')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Projetos
              </button>
              <button
                onClick={() => navigate('/quem-somos')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Quem Somos
              </button>
              <button
                onClick={() => navigate('/politica-de-privacidade')}
                className="hover:text-emerald-800 transition-colors cursor-pointer"
              >
                Privacidade
              </button>
            </div>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-stone-500">
            <div>
              {companyData.tradeName} — {companyData.address.city}, {companyData.address.state} • CNPJ {companyData.cnpj}
            </div>
            <div>
              © {new Date().getFullYear()} VS Tecnologia e Automação. Todos os direitos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
