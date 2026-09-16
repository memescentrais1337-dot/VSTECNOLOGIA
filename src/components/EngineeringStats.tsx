import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Layers, Award, ShieldCheck, Cpu, ArrowUpRight, Activity } from 'lucide-react';

interface MetricItem {
  id: string;
  prefix?: string;
  value: number;
  suffix?: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  technicalCode: string;
  scopeTag: string;
}

const metrics: MetricItem[] = [
  {
    id: 'projetos',
    prefix: '+',
    value: 120,
    title: 'Projetos Executados',
    description: 'Missões críticas implantadas em infraestruturas privadas e governamentais de alta complexidade em todo o território nacional.',
    icon: <Layers className="w-3.5 h-3.5 text-emerald-400" />,
    technicalCode: 'PRJ / 120',
    scopeTag: 'DESTAQUE NACIONAL'
  },
  {
    id: 'experiencia',
    prefix: '+',
    value: 15,
    title: 'Anos de Experiência',
    description: 'Engenharia aplicada em CFTV IP, redes industriais e automação predial.',
    icon: <Award className="w-3 h-3 text-emerald-400" />,
    technicalCode: 'EXP / 15Y',
    scopeTag: 'HISTÓRICO TÉCNICO'
  },
  {
    id: 'fabricantes',
    prefix: '+',
    value: 20,
    title: 'Fabricantes Homologados',
    description: 'Alianças diretas com os líderes globais de segurança e conectividade.',
    icon: <ShieldCheck className="w-3 h-3 text-emerald-400" />,
    technicalCode: 'PAR / 20+',
    scopeTag: 'TIER-1 ALLIANCE'
  },
  {
    id: 'segmentos',
    value: 10,
    title: 'Segmentos Atendidos',
    description: 'Atuação especializada em portos, defesa, indústrias e data centers.',
    icon: <Cpu className="w-3 h-3 text-emerald-400" />,
    technicalCode: 'VRT / 10',
    scopeTag: 'VERTICAL EXP'
  }
];

export const EngineeringStats: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  // Subtle Mouse Parallax / Tilt state for hero card
  const heroCardRef = useRef<HTMLDivElement>(null);
  const [heroTilt, setHeroTilt] = useState({ x: 0, y: 0, glowX: 50, glowY: 50 });
  const [isHovered, setIsHovered] = useState(false);

  // Check user prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  // IntersectionObserver & Smooth Count-Up
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (prefersReducedMotion) {
            setAnimatedValues(metrics.map((m) => m.value));
            return;
          }

          const duration = 1500; // 1.5s
          const frameDuration = 1000 / 60;
          const totalFrames = Math.round(duration / frameDuration);
          let frame = 0;

          const timer = setInterval(() => {
            frame++;
            const progress = frame / totalFrames;
            // Cubic ease-out deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);

            const next = metrics.map((m) => {
              return Math.min(Math.round(easeOut * m.value), m.value);
            });

            setAnimatedValues(next);

            if (frame >= totalFrames) {
              clearInterval(timer);
              setAnimatedValues(metrics.map((m) => m.value));
            }
          }, frameDuration);
        }
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -30px 0px'
      }
    );

    const el = sectionRef.current;
    if (el) observer.observe(el);

    return () => {
      if (el) observer.unobserve(el);
    };
  }, [hasAnimated, prefersReducedMotion]);

  // Handle subtle 3D tilt on the protagonist card
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const card = heroCardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Constrained rotation angle: maximum 1.5 degrees for tight compact control
    const rotateY = ((x - centerX) / centerX) * 1.5;
    const rotateX = -((y - centerY) / centerY) * 1.5;

    const glowX = (x / rect.width) * 100;
    const glowY = (y / rect.height) * 100;

    setHeroTilt({ x: rotateX, y: rotateY, glowX, glowY });
  }, [prefersReducedMotion]);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setHeroTilt({ x: 0, y: 0, glowX: 50, glowY: 50 });
  };

  return (
    <section
      ref={sectionRef}
      id="engineering-stats-section"
      className="relative py-7 sm:py-8 lg:py-9 bg-[#F4F4F2] overflow-hidden"
      aria-label="Engenharia que Entrega Resultado"
    >
      {/* Outer Shell Wrapper: Formato "Ilha Premium" compacto */}
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl bg-[#0B1015] border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden p-5 sm:p-7 lg:p-8">

          {/* Background Blueprint Grid, Technical Lines & Ambient Glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
            aria-hidden="true"
          />
          {/* Radial soft emerald glow behind metrics area */}
          <div
            className="absolute top-1/2 right-10 -translate-y-1/2 w-[420px] h-[420px] bg-emerald-500/[0.07] blur-[80px] pointer-events-none rounded-full"
            aria-hidden="true"
          />

          {/* Subtle architectural coordinates / blueprint corner marks */}
          <div className="absolute top-3 left-4 text-[9px] font-mono text-white/20 tracking-wider hidden sm:block select-none">
            SYS / PERF.MONITOR // LAT 16°40′S LONG 49°15′W
          </div>
          <div className="absolute top-3 right-4 text-[9px] font-mono text-emerald-400/40 tracking-wider hidden sm:block select-none flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            OPERATIONAL SPEC: 99.98%
          </div>

          {/* Main Asymmetric Grid: Left (Editorial/Brand) ~38% | Right (Metrics Composition) ~62% */}
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">

            {/* LADO ESQUERDO (~38%): Identidade, Autoridade e Manifesto Técnico */}
            <div className="lg:col-span-5 space-y-3">
              {/* Technical Badge */}
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[10px] font-mono tracking-wider text-emerald-300 uppercase shadow-2xs">
                <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                <span className="font-semibold">ENGENHARIA CONSULTIVA</span>
              </div>

              {/* Main Strong Headline */}
              <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-tight">
                Engenharia que entrega <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">resultado</span>
              </h2>

              {/* Supporting Editorial Paragraph */}
              <p className="text-xs sm:text-[13px] text-stone-300/80 leading-relaxed max-w-md">
                Projetos executados com foco em performance, confiabilidade e integração para operações críticas.
              </p>

              {/* Technical Precision Spec Bars */}
              <div className="pt-2 border-t border-white/10 space-y-2 max-w-md">
                <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                  <span className="text-stone-400">Taxa de Conformidade Técnica</span>
                  <span className="text-emerald-400 font-semibold">100% Homologado</span>
                </div>
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-1000"
                    style={{ width: hasAnimated ? '100%' : '0%' }}
                  />
                </div>

                <div className="flex items-center justify-between text-[9px] font-mono text-stone-500">
                  <span>DISPONIBILIDADE SLA & TURN-KEY</span>
                  <span>ESTRUTURA VERIFICADA</span>
                </div>
              </div>
            </div>

            {/* LADO DIREITO (~62%): Composição Assimétrica dos Indicadores */}
            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">

                {/* 1. O PROTAGONISTA (+120 PROJETOS EXECUTADOS) - Altura dupla no desktop sm:row-span-2 */}
                <div
                  ref={heroCardRef}
                  onMouseMove={handleMouseMove}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  style={{
                    transform: isHovered
                      ? `perspective(1000px) rotateX(${heroTilt.x}deg) rotateY(${heroTilt.y}deg) translateY(-2px)`
                      : 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)',
                    transition: isHovered ? 'transform 0.1s ease-out' : 'transform 0.3s ease-out',
                  }}
                  className="group relative sm:row-span-2 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.3)] transition-colors hover:border-emerald-500/40"
                >
                  {/* Interactive Dynamic Glow tracking mouse */}
                  <div
                    className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background: `radial-gradient(350px circle at ${heroTilt.glowX}% ${heroTilt.glowY}%, rgba(16, 185, 129, 0.12), transparent 70%)`
                    }}
                    aria-hidden="true"
                  />

                  {/* Fundo Gráfico Abstrato de Engenharia: Arco Técnico de Precisão (Gira lentamente) */}
                  <div
                    className="absolute -right-6 -bottom-6 w-40 h-40 pointer-events-none opacity-15 select-none"
                    aria-hidden="true"
                  >
                    <svg viewBox="0 0 200 200" className="w-full h-full animate-[spin_60s_linear_infinite]">
                      <circle cx="100" cy="100" r="85" fill="none" stroke="#34D399" strokeWidth="1" strokeDasharray="6 8" />
                      <circle cx="100" cy="100" r="70" fill="none" stroke="#FFFFFF" strokeWidth="0.75" strokeDasharray="3 15" />
                      <circle cx="100" cy="100" r="55" fill="none" stroke="#34D399" strokeWidth="1" strokeDasharray="40 100" />
                      <path d="M100,10 L100,25 M100,175 L100,190 M10,100 L25,100 M175,100 L190,100" stroke="#FFFFFF" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Top Technical Metadata */}
                  <div>
                    <div className="flex items-center justify-between mb-2.5">
                      <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[9px] font-mono text-emerald-400">
                        {metrics[0].icon}
                        <span className="font-semibold">{metrics[0].scopeTag}</span>
                      </div>
                      <span className="text-[9px] font-mono text-stone-400 tracking-wider">
                        {metrics[0].technicalCode}
                      </span>
                    </div>

                    {/* Protagonist Big Number */}
                    <div className="my-1.5">
                      <div className="flex items-baseline tracking-tight font-sans">
                        <span className="text-2xl sm:text-3xl font-bold text-emerald-400 select-none mr-0.5">
                          {metrics[0].prefix}
                        </span>
                        <span className="text-5xl sm:text-6xl font-extrabold text-white font-mono tabular-nums leading-none tracking-tighter">
                          {animatedValues[0]}
                        </span>
                      </div>

                      <h3 className="mt-2 text-base sm:text-lg font-bold text-white tracking-tight flex items-center gap-1.5">
                        <span>{metrics[0].title}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity" />
                      </h3>

                      <p className="mt-1 text-xs text-stone-300/85 leading-relaxed">
                        {metrics[0].description}
                      </p>
                    </div>
                  </div>

                  {/* Bottom Technical Verification Status */}
                  <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-stone-400">
                    <span className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                      DEPLOY / MULTI-SITE
                    </span>
                    <span className="text-emerald-400/80">VERIFICADO</span>
                  </div>
                </div>

                {/* 2. CARD (+15 ANOS DE EXPERIÊNCIA) */}
                <div className="group rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:border-emerald-500/40 hover:-translate-y-0.5 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">
                        {metrics[1].icon}
                      </div>
                      <span className="text-[9px] font-mono text-stone-400 tracking-wider">
                        {metrics[1].technicalCode}
                      </span>
                    </div>

                    <div className="flex items-baseline tracking-tight my-0.5">
                      <span className="text-lg font-bold text-emerald-400 select-none mr-0.5">
                        {metrics[1].prefix}
                      </span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums leading-none tracking-tight">
                        {animatedValues[1]}
                      </span>
                    </div>

                    <h3 className="mt-1 text-xs sm:text-sm font-bold text-white tracking-tight">
                      {metrics[1].title}
                    </h3>
                    <p className="mt-0.5 text-[10.5px] text-stone-300/75 leading-snug line-clamp-2">
                      {metrics[1].description}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-[8.5px] font-mono text-stone-400">
                    <span>SOLIDEZ HISTÓRICA</span>
                    <span className="text-emerald-400/80">VIGENTE</span>
                  </div>
                </div>

                {/* 3. CARD (+20 FABRICANTES HOMOLOGADOS) */}
                <div className="group rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-200 hover:border-emerald-500/40 hover:-translate-y-0.5 shadow-sm">
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="w-6 h-6 rounded-md bg-white/[0.06] border border-white/10 flex items-center justify-center">
                        {metrics[2].icon}
                      </div>
                      <span className="text-[9px] font-mono text-stone-400 tracking-wider">
                        {metrics[2].technicalCode}
                      </span>
                    </div>

                    <div className="flex items-baseline tracking-tight my-0.5">
                      <span className="text-lg font-bold text-emerald-400 select-none mr-0.5">
                        {metrics[2].prefix}
                      </span>
                      <span className="text-3xl sm:text-4xl font-extrabold text-white font-mono tabular-nums leading-none tracking-tight">
                        {animatedValues[2]}
                      </span>
                    </div>

                    <h3 className="mt-1 text-xs sm:text-sm font-bold text-white tracking-tight">
                      {metrics[2].title}
                    </h3>
                    <p className="mt-0.5 text-[10.5px] text-stone-300/75 leading-snug line-clamp-2">
                      {metrics[2].description}
                    </p>
                  </div>

                  <div className="pt-2 mt-2 border-t border-white/5 flex items-center justify-between text-[8.5px] font-mono text-stone-400">
                    <span>CONTRATOS DIRETOS</span>
                    <span className="text-emerald-400/80">HOMOLOGADO</span>
                  </div>
                </div>

                {/* 4. CARD (10 SEGMENTOS ATENDIDOS) - Ocupa linha inteira no grid direito para fechar com harmonia */}
                <div className="sm:col-span-2 rounded-xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-all duration-200 hover:border-emerald-500/40">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-md bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center flex-shrink-0">
                      {metrics[3].icon}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl sm:text-2xl font-extrabold text-white font-mono tabular-nums leading-none">
                          {animatedValues[3]}
                        </span>
                        <h3 className="text-xs sm:text-sm font-bold text-white tracking-tight">
                          {metrics[3].title}
                        </h3>
                      </div>
                      <p className="text-[10px] text-stone-300/75 mt-0.5 line-clamp-1">
                        {metrics[3].description}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 font-mono text-[9px] text-emerald-400 bg-white/[0.04] px-2.5 py-1 rounded border border-white/5 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    <span>DEFESA / INDÚSTRIA / LOGÍSTICA / SAÚDE</span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
