import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

/**
 * =========================================================================
 * CONFIGURAÇÃO DO VÍDEO PRINCIPAL DO HERO
 * =========================================================================
 * Arquivo de vídeo padrão localizado em: public/videos/hero-vs.mp4
 * 
 * COMO TROCAR O VÍDEO POSTERIORMENTE:
 * 1. Basta substituir o arquivo 'public/videos/hero-vs.mp4' pelo seu novo vídeo, OU
 * 2. Adicionar seu novo arquivo (ex: 'meu-video.mp4') em 'public/videos/' e atualizar
 *    a constante 'DEFAULT_HERO_VIDEO' logo abaixo para '/videos/meu-video.mp4'.
 * =========================================================================
 */
export const DEFAULT_HERO_VIDEO = '/videos/hero-vs.mp4';
export const DEFAULT_HERO_POSTER = '/images/hero-video-poster.jpg';

export interface HeroMediaConfig {
  /** Caminho do vídeo para desktop (salvo em /public/videos/...) */
  desktopVideo: string;
  /** Caminho opcional do vídeo para mobile (vertical 9:16 ou mesmo arquivo) */
  mobileVideo?: string;
  /** Imagem estática de fallback/poster enquanto carrega */
  posterDesktop: string;
  posterMobile?: string;
}

export const defaultHeroMedia: HeroMediaConfig = {
  desktopVideo: DEFAULT_HERO_VIDEO,
  mobileVideo: DEFAULT_HERO_VIDEO,
  posterDesktop: DEFAULT_HERO_POSTER,
  posterMobile: DEFAULT_HERO_POSTER,
};

interface HeroProps {
  mediaConfig?: HeroMediaConfig;
}

export const Hero: React.FC<HeroProps> = ({ mediaConfig = defaultHeroMedia }) => {
  const { navigate, openLeadModalWithData } = useNavigation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Acessibilidade: verificar se o usuário prefere redução de movimento
  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
      setPrefersReducedMotion(mediaQuery.matches);

      const listener = (e: MediaQueryListEvent) => {
        setPrefersReducedMotion(e.matches);
      };

      if (mediaQuery.addEventListener) {
        mediaQuery.addEventListener('change', listener);
        return () => mediaQuery.removeEventListener('change', listener);
      }
    }
  }, []);

  // Garantir autoplay contínuo e silencioso (Cross-browser, iOS Safari & Chrome)
  useEffect(() => {
    const video = videoRef.current;
    if (video && !prefersReducedMotion) {
      video.muted = true;
      video.defaultMuted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Navegador bloqueou reprodução automática; o poster estático permanecerá visível
        });
      }
    }
  }, [prefersReducedMotion]);

  return (
    <section
      id="hero-section"
      className="relative w-full min-h-[500px] lg:min-h-[560px] h-[68vh] lg:h-[72vh] flex items-center overflow-hidden bg-stone-950 pt-16 pb-12 lg:pt-20 lg:pb-16"
      aria-label="Apresentação institucional VS Tecnologia"
    >
      {/* 
        VÍDEO DE FUNDO EM LOOP CONTÍNUO
        - Autoplay, Muted, Loop, playsInline
        - Sem controles ou barras de reprodução
        - Suave transição de opacidade quando carregado (fade-in)
      */}
      <video
        ref={videoRef}
        autoPlay={!prefersReducedMotion}
        muted
        loop
        playsInline
        preload="metadata"
        poster={mediaConfig.posterDesktop}
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 transition-opacity duration-1000 ${
          isVideoLoaded ? 'opacity-100' : 'opacity-90'
        }`}
        aria-hidden="true"
      >
        {mediaConfig.mobileVideo && (
          <source
            src={mediaConfig.mobileVideo}
            type="video/mp4"
            media="(max-width: 767px)"
          />
        )}
        <source src={mediaConfig.desktopVideo} type="video/mp4" />
      </video>

      {/* 
        OVERLAY CORPORATIVO MULTICAMADAS PARA CONTRASTE E LEGIBILIDADE
        1. Gradiente horizontal: escurece a área de leitura à esquerda (85% -> 60% -> 25%)
        2. Gradiente vertical no mobile para proteger o texto
        3. Efeito de vinheta lateral sutil
      */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(7, 14, 22, 0.88) 0%, rgba(7, 14, 22, 0.68) 42%, rgba(7, 14, 22, 0.32) 100%)',
        }}
      />

      {/* Camada vertical para mobile */}
      <div
        className="absolute inset-0 z-10 pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(7, 14, 22, 0.80) 0%, rgba(7, 14, 22, 0.55) 100%)',
        }}
      />

      {/* Transição inferior suave e elegante entre o Hero e a próxima seção (Soluções) */}
      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent pointer-events-none z-10" />

      {/* CONTEÚDO PRINCIPAL (Alinhado com precisão tipográfica) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="max-w-3xl">
          {/* Eyebrow Institucional */}
          <div className="mb-4 sm:mb-5">
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400">
              ENGENHARIA • TECNOLOGIA • AUTOMAÇÃO
            </span>
          </div>

          {/* Título Principal */}
          <h1 className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-[1.2] max-w-[680px]">
            Tecnologia integrada para operações mais seguras e eficientes.
          </h1>

          {/* Descrição Institucional */}
          <p className="mt-3.5 sm:mt-4 text-sm sm:text-base text-stone-200 leading-relaxed max-w-[620px]">
            A VS Tecnologia e Automação desenvolve soluções completas em segurança, infraestrutura, automação e telecomunicações para empresas e operações de alta complexidade.
          </p>

          {/* Botões de Ação (CTAs) */}
          <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4">
            <button
              id="hero-solutions-cta-btn"
              onClick={() => navigate('/solucoes')}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm text-center"
            >
              Conheça nossas soluções
            </button>

            <button
              id="hero-specialist-cta-btn"
              onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio' })}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-xs font-medium text-sm transition-all"
            >
              <span>Fale com um especialista</span>
              <ArrowRight className="w-4 h-4 text-stone-300" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
