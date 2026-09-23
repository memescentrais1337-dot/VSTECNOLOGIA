import React, { useEffect, useRef, useState, memo } from 'react';
import { Layers, Award, ShieldCheck, Cpu, Activity } from 'lucide-react';
import { MotionReveal } from './common/MotionReveal';
import { getSiteConfig } from '../lib/content';

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

const statsConfig = getSiteConfig().home.stats;

const iconMap: Record<string, React.ReactNode> = {
  projetos: <Layers className="w-3.5 h-3.5 text-emerald-400" />,
  experiencia: <Award className="w-3 h-3 text-emerald-400" />,
  fabricantes: <ShieldCheck className="w-3 h-3 text-emerald-400" />,
  segmentos: <Cpu className="w-3 h-3 text-emerald-400" />,
};

const metrics: MetricItem[] = statsConfig.metrics.map((m) => ({
  ...m,
  icon: iconMap[m.id] || <Layers className="w-3.5 h-3.5 text-emerald-400" />,
}));

export const EngineeringStats: React.FC = memo(() => {
  const sectionRef = useRef<HTMLElement>(null);
  const heroCardRef = useRef<HTMLDivElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [animatedValues, setAnimatedValues] = useState<number[]>([0, 0, 0, 0]);

  // Check user prefers-reduced-motion
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.matchMedia) {
      setPrefersReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    }
  }, []);

  // IntersectionObserver & Smooth rAF Count-Up
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);

          if (prefersReducedMotion) {
            setAnimatedValues(metrics.map((m) => m.value));
            return;
          }

          const duration = 1200; // 1.2s smooth count
          const start = performance.now();

          const step = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            // Cubic ease-out deceleration
            const easeOut = 1 - Math.pow(1 - progress, 3);

            setAnimatedValues(metrics.map((m) => Math.min(Math.round(easeOut * m.value), m.value)));

            if (progress < 1) {
              requestAnimationFrame(step);
            } else {
              setAnimatedValues(metrics.map((m) => m.value));
            }
          };

          requestAnimationFrame(step);
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [hasAnimated, prefersReducedMotion]);

  // Subtle Mouse Parallax / Tilt without React re-renders (direct DOM)
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (prefersReducedMotion) return;
    const card = heroCardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateY = ((x - centerX) / centerX) * 1.5;
    const rotateX = -((y - centerY) / centerY) * 1.5;

    card.style.transform = `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateY(-2px)`;
  };

  const handleMouseLeave = () => {
    const card = heroCardRef.current;
    if (!card) return;
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) translateY(0px)';
  };

  return (
    <section
      ref={sectionRef}
      id="engineering-stats-section"
      className="relative py-7 sm:py-8 lg:py-9 bg-[#F4F4F2] overflow-hidden"
      aria-label="Engenharia que Entrega Resultado"
    >
      <div className="max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="relative rounded-2xl bg-[#0B1015] border border-white/10 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.06)] overflow-hidden p-5 sm:p-7 lg:p-8">
            <div
              className="absolute inset-0 pointer-events-none opacity-[0.04] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:32px_32px]"
              aria-hidden="true"
            />
            <div
              className="absolute top-1/2 right-10 -translate-y-1/2 w-[420px] h-[420px] bg-emerald-500/[0.07] blur-[80px] pointer-events-none rounded-full"
              aria-hidden="true"
            />

            <div className="absolute top-3 left-4 text-[9px] font-mono text-white/20 tracking-wider hidden sm:block select-none">
              SYS / PERF.MONITOR // LAT 16°40′S LONG 49°15′W
            </div>
            <div className="absolute top-3 right-4 text-[9px] font-mono text-emerald-400/40 tracking-wider hidden sm:block select-none flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              OPERATIONAL SPEC: 99.98%
            </div>

            <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-center">
              <div className="lg:col-span-5 space-y-3">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-950/70 border border-emerald-500/30 text-[10px] font-mono tracking-wider text-emerald-300 uppercase shadow-2xs">
                  <Activity className="w-3 h-3 text-emerald-400 animate-pulse" />
                  <span className="font-semibold">{statsConfig.badge}</span>
                </div>

                <h2 className="text-xl sm:text-2xl lg:text-[28px] font-bold text-white tracking-tight leading-tight">
                  {statsConfig.headline} <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-emerald-300 to-teal-200">{statsConfig.headlineHighlight}</span>
                </h2>

                <p className="text-xs sm:text-[13px] text-stone-300/80 leading-relaxed max-w-md">
                  {statsConfig.subheadline}
                </p>

                <div className="pt-2 border-t border-white/10 space-y-2 max-w-md">
                  <div className="flex items-center justify-between text-[10px] font-mono text-stone-400">
                    <span className="text-stone-400">Taxa de Conformidade Técnica</span>
                    <span className="text-emerald-400 font-semibold">{statsConfig.complianceRate}</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-emerald-500 to-teal-400 rounded-full transition-all duration-700"
                      style={{ width: hasAnimated ? '100%' : '0%' }}
                    />
                  </div>

                  <div className="flex items-center justify-between text-[9px] font-mono text-stone-500">
                    <span>DISPONIBILIDADE SLA & TURN-KEY</span>
                    <span>ESTRUTURA VERIFICADA</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {/* Protagonist Card */}
                  <div
                    ref={heroCardRef}
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                    style={{
                      transition: 'transform 0.2s ease-out',
                      willChange: 'transform',
                    }}
                    className="group relative sm:row-span-2 rounded-xl bg-gradient-to-b from-white/[0.08] to-white/[0.02] border border-white/15 p-4 sm:p-5 flex flex-col justify-between overflow-hidden shadow-[0_12px_24px_rgba(0,0,0,0.3)] hover:border-emerald-500/40"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                          {metrics[0].icon}
                        </div>
                        <span className="text-[10px] font-mono text-emerald-400 tracking-wider px-2 py-0.5 rounded bg-emerald-950/60 border border-emerald-500/20">
                          {metrics[0].scopeTag}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <div className="flex items-baseline tracking-tight">
                          <span className="text-2xl font-bold text-emerald-400 select-none mr-1">
                            {metrics[0].prefix}
                          </span>
                          <span className="text-4xl sm:text-5xl font-extrabold text-white font-mono tabular-nums leading-none tracking-tight">
                            {animatedValues[0]}
                          </span>
                        </div>
                        <h3 className="text-sm sm:text-base font-bold text-white tracking-tight pt-1">
                          {metrics[0].title}
                        </h3>
                        <p className="text-xs text-stone-300/80 leading-relaxed pt-1">
                          {metrics[0].description}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2.5 mt-3 border-t border-white/10 flex items-center justify-between text-[9px] font-mono text-stone-400">
                      <span className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        DEPLOY / MULTI-SITE
                      </span>
                      <span className="text-emerald-400/80">VERIFICADO</span>
                    </div>
                  </div>

                  {/* Card 2 */}
                  <div className="group rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between transition-colors duration-200 hover:border-emerald-500/40 shadow-sm">
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

                  {/* Card 3 */}
                  <div className="group rounded-xl bg-gradient-to-b from-white/[0.06] to-white/[0.02] border border-white/10 p-3.5 sm:p-4 flex flex-col justify-between transition-colors duration-200 hover:border-emerald-500/40 shadow-sm">
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

                  {/* Card 4 */}
                  <div className="sm:col-span-2 rounded-xl bg-gradient-to-r from-white/[0.05] to-white/[0.02] border border-white/10 p-3 sm:p-3.5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors duration-200 hover:border-emerald-500/40">
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
        </MotionReveal>
      </div>
    </section>
  );
});

EngineeringStats.displayName = 'EngineeringStats';
