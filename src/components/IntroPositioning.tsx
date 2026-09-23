import React, { useState, useEffect, useRef, memo } from 'react';
import { ArrowRight, Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { MotionReveal } from './common/MotionReveal';
import { getSiteConfig } from '../lib/content';

const turnkeyConfig = getSiteConfig().home.turnkey;

export const IntroPositioning: React.FC = memo(() => {
  const { navigate } = useNavigation();
  const sectionRef = useRef<HTMLElement>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isInView, setIsInView] = useState(false);

  const carouselImages = turnkeyConfig.carouselImages || [
    {
      src: '/images/turnkey/turnkey-slide-1.png',
      alt: 'Engenharia Turn-Key e implantação de sistemas de missão crítica',
    },
    {
      src: '/images/turnkey/turnkey-slide-2.png',
      alt: 'Supervisão técnica, cabeamento estruturado e infraestrutura',
    },
    {
      src: '/images/turnkey/turnkey-slide-3.png',
      alt: 'Automação predial, segurança eletrônica e controle de acesso',
    },
    {
      src: '/images/turnkey/turnkey-slide-4.png',
      alt: 'Equipe técnica de engenharia e operações em campo',
    },
  ];

  // Pause carousel auto-rotation when offscreen
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

  useEffect(() => {
    if (!isInView) return;

    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3500);

    return () => clearInterval(timer);
  }, [isInView, carouselImages.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  };

  const lifecycleVerbs = turnkeyConfig.lifecycleVerbs || [
    { verb: 'Analisa', desc: 'Diagnóstico técnico de vulnerabilidades e demandas no local.' },
    { verb: 'Projeta', desc: 'Engenharia com memoriais executivos, diagramas e cálculo de carga.' },
    { verb: 'Especifica', desc: 'Seleção dos equipamentos adequados para cada requisito operacional.' },
    { verb: 'Fornece', desc: 'Equipamentos originais homologados com garantia direta de fábrica.' },
    { verb: 'Integra', desc: 'Convergência de CFTV, controle de acesso, redes e telecomunicações.' },
    { verb: 'Instala', desc: 'Montagem física em conformidade rigorosa com normas de segurança.' },
    { verb: 'Configura', desc: 'Parametrização analítica, segmentação de redes e redundâncias.' },
    { verb: 'Mantém', desc: 'Manutenção preventiva, corretiva e suporte contínuo com SLA.' },
  ];

  return (
    <section
      ref={sectionRef}
      id="intro-positioning-section"
      className="py-8 lg:py-10 bg-white border-b border-stone-200"
      aria-label="Posicionamento Institucional"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          {/* Engineering Visual - 4 Images Sliding Carousel */}
          <MotionReveal className="lg:col-span-6 order-2 lg:order-1" delay={0.06}>
            <div className="rounded-md overflow-hidden border border-stone-200 shadow-sm bg-stone-900 relative group">
              <div className="relative w-full h-[280px] sm:h-[350px] overflow-hidden">
                <div
                  className="flex h-full transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${currentSlide * 100}%)`, willChange: 'transform' }}
                >
                  {carouselImages.map((img, idx) => (
                    <div key={idx} className="w-full h-full flex-shrink-0 relative">
                      <img
                        src={img.src}
                        alt={img.alt}
                        className={`w-full h-full object-cover ${idx === 1 ? 'object-[center_20%]' : 'object-center'}`}
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="350"
                      />
                    </div>
                  ))}
                </div>

                {/* Carousel Controls */}
                <button
                  type="button"
                  id="turnkey-carousel-prev-btn"
                  onClick={prevSlide}
                  className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm z-10 cursor-pointer"
                  aria-label="Imagem anterior"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  id="turnkey-carousel-next-btn"
                  onClick={nextSlide}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-stone-900/60 hover:bg-stone-900 text-white flex items-center justify-center transition-opacity opacity-0 group-hover:opacity-100 focus:opacity-100 backdrop-blur-sm z-10 cursor-pointer"
                  aria-label="Próxima imagem"
                >
                  <ChevronRight className="w-4 h-4" />
                </button>

                {/* Progress Indicators / Dots */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 z-10 bg-stone-900/50 backdrop-blur-sm px-2.5 py-1 rounded-full">
                  {carouselImages.map((_, idx) => (
                    <button
                      key={idx}
                      id={`turnkey-carousel-indicator-${idx + 1}`}
                      onClick={() => setCurrentSlide(idx)}
                      className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                        currentSlide === idx ? 'w-5 bg-emerald-400' : 'w-1.5 bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`Ir para imagem ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </MotionReveal>

          {/* Content */}
          <MotionReveal className="lg:col-span-6 order-1 lg:order-2" delay={0.1}>
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
              {turnkeyConfig.eyebrow}
            </span>

            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight leading-snug mt-1">
              {turnkeyConfig.headline}
            </h2>

            <p className="mt-2 text-xs sm:text-sm text-stone-600 leading-relaxed">
              {turnkeyConfig.description}
            </p>

            {/* Lifecycle verbs */}
            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2">
              {lifecycleVerbs.map((item) => (
                <div
                  key={item.verb}
                  className="p-2 rounded bg-stone-50 border border-stone-200/80 hover:border-stone-300 transition-colors"
                >
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className="w-3.5 h-3.5 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center flex-shrink-0">
                      <Check className="w-2 h-2 stroke-[3]" />
                    </div>
                    <span className="text-xs font-semibold text-stone-900 truncate">
                      {item.verb}
                    </span>
                  </div>
                  <span className="text-[11px] text-stone-500 leading-tight block line-clamp-2">
                    {item.desc}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4">
              <button
                id="intro-about-cta-btn"
                onClick={() => navigate('/quem-somos')}
                className="group inline-flex items-center gap-2 px-4 py-2 rounded-md bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm transition-colors cursor-pointer"
              >
                <span>{turnkeyConfig.ctaText}</span>
                <ArrowRight className="w-3.5 h-3.5 btn-arrow-icon" />
              </button>
            </div>
          </MotionReveal>
        </div>
      </div>
    </section>
  );
});

IntroPositioning.displayName = 'IntroPositioning';
