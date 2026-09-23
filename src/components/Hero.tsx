import React, { useState, useEffect, useRef, memo } from 'react';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { useMotionPreference } from './common/MotionReveal';
import { getSiteConfig } from '../lib/content';

const heroConfig = getSiteConfig().home.hero;

export const DEFAULT_HERO_VIDEO = heroConfig.desktopVideo || '/videos/hero-vs.mp4';
export const DEFAULT_HERO_POSTER = heroConfig.posterDesktop || '/images/hero-video-poster.jpg';

export interface HeroMediaConfig {
  desktopVideo: string;
  mobileVideo?: string;
  posterDesktop: string;
  posterMobile?: string;
}

export const defaultHeroMedia: HeroMediaConfig = {
  desktopVideo: heroConfig.desktopVideo || DEFAULT_HERO_VIDEO,
  mobileVideo: heroConfig.mobileVideo || DEFAULT_HERO_VIDEO,
  posterDesktop: heroConfig.posterDesktop || DEFAULT_HERO_POSTER,
  posterMobile: heroConfig.posterMobile || DEFAULT_HERO_POSTER,
};

interface HeroProps {
  mediaConfig?: HeroMediaConfig;
}

export const Hero: React.FC<HeroProps> = memo(({ mediaConfig = defaultHeroMedia }) => {
  const { navigate, scrollToSection, openLeadModalWithData } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  const prefersReduced = useMotionPreference();

  // Autoplay management and smart pausing when outside of viewport
  useEffect(() => {
    const video = videoRef.current;
    const section = sectionRef.current;
    if (!video) return;

    if (prefersReduced) {
      video.pause();
      return;
    }

    video.muted = true;
    video.defaultMuted = true;

    // IntersectionObserver to pause video decoding when scrolled out of viewport
    if (typeof IntersectionObserver !== 'undefined' && section) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        },
        { threshold: 0.05 }
      );

      observer.observe(section);
      return () => observer.disconnect();
    } else {
      video.play().catch(() => {});
    }
  }, [prefersReduced]);

  return (
    <section
      ref={sectionRef}
      id="hero-section"
      className="relative w-full min-h-[500px] lg:min-h-[560px] h-[68vh] lg:h-[72vh] flex items-center overflow-hidden bg-stone-950 pt-16 pb-12 lg:pt-20 lg:pb-16"
      aria-label="Apresentação institucional VS Tecnologia"
    >
      <video
        ref={videoRef}
        autoPlay={!prefersReduced}
        muted
        loop
        playsInline
        preload="metadata"
        poster={mediaConfig.posterDesktop}
        onLoadedData={() => setIsVideoLoaded(true)}
        className={`absolute inset-0 w-full h-full object-cover object-center pointer-events-none select-none z-0 transition-opacity duration-700 ${
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

      {/* Multilayer contrast overlay */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(90deg, rgba(7, 14, 22, 0.88) 0%, rgba(7, 14, 22, 0.68) 42%, rgba(7, 14, 22, 0.32) 100%)',
        }}
      />

      <div
        className="absolute inset-0 z-10 pointer-events-none sm:hidden"
        style={{
          background:
            'linear-gradient(180deg, rgba(7, 14, 22, 0.80) 0%, rgba(7, 14, 22, 0.55) 100%)',
        }}
      />

      <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-stone-950/80 via-stone-950/40 to-transparent pointer-events-none z-10" />

      {/* Main hero content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-20">
        <div className="max-w-3xl">
          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0.3 : 0.55, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mb-4 sm:mb-5"
          >
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.2em] uppercase text-emerald-400">
              {heroConfig.eyebrow}
            </span>
          </motion.div>

          <motion.h1
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0.35 : 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="text-2xl sm:text-3xl lg:text-[38px] font-semibold text-white tracking-tight leading-[1.2] max-w-[680px]"
          >
            {heroConfig.headline}
          </motion.h1>

          <motion.p
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0.35 : 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-3.5 sm:mt-4 text-sm sm:text-base text-stone-200 leading-relaxed max-w-[620px]"
          >
            {heroConfig.subheadline}
          </motion.p>

          <motion.div
            initial={prefersReduced ? { opacity: 0 } : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: prefersReduced ? 0.35 : 0.58, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 sm:mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4"
          >
            <button
              id="hero-solutions-cta-btn"
              onClick={() => {
                if (!scrollToSection('solutions-section')) {
                  navigate('/solucoes');
                }
              }}
              className="px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white font-medium text-sm transition-colors shadow-sm text-center cursor-pointer"
            >
              {heroConfig.ctaPrimary}
            </button>

            <button
              id="hero-specialist-cta-btn"
              onClick={() => {
                if (!scrollToSection('specialist-cta-section')) {
                  openLeadModalWithData({ purpose: 'Empresa / Uso próprio' });
                }
              }}
              className="group inline-flex items-center justify-center gap-2 px-5 py-2.5 sm:px-6 sm:py-3 rounded-md bg-white/10 hover:bg-white/15 active:bg-white/20 text-white border border-white/20 hover:border-white/30 backdrop-blur-xs font-medium text-sm transition-colors cursor-pointer"
            >
              <span>{heroConfig.ctaSecondary}</span>
              <ArrowRight className="w-4 h-4 text-stone-300 btn-arrow-icon" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
});

Hero.displayName = 'Hero';
