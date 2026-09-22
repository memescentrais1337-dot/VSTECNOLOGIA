import React from 'react';
import { serviceCategories } from '../data/services';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, ShieldCheck, Network, Cpu, Radio, CheckCircle2 } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const SolutionsPage: React.FC = () => {
  const { navigate, openLeadModalWithData } = useNavigation();

  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck': return <ShieldCheck className="w-8 h-8 text-emerald-600" />;
      case 'Network': return <Network className="w-8 h-8 text-emerald-600" />;
      case 'Cpu': return <Cpu className="w-8 h-8 text-emerald-600" />;
      case 'Radio': return <Radio className="w-8 h-8 text-emerald-600" />;
      default: return <ShieldCheck className="w-8 h-8 text-emerald-600" />;
    }
  };

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <span>Engenharia e Integração B2B</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Soluções completas para operações críticas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Desenvolvemos e implantamos ecossistemas convergentes que unem segurança física, transmissão de dados em alta velocidade, automação de acessos e telecomunicações unificadas.
          </p>
        </div>

        {/* Dedicated High-Conversion Brand Solutions Strip */}
        <div className="mt-10 p-6 bg-slate-900 rounded-2xl border border-slate-800 text-white shadow-lg">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
            <div>
              <span className="text-[11px] font-mono font-bold text-emerald-400 uppercase tracking-wider block">
                Soluções Específicas por Fabricante Homologado
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-white">
                Projetos e Tecnologias de Ponta para Campanhas e Grandes Contas
              </h2>
            </div>
            <span className="text-xs text-slate-400">
              Engenharia turn-key • Homologação oficial
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
            {[
              { slug: 'hanwha', name: 'Hanwha Vision', tag: 'IA Embarcada & Edge' },
              { slug: 'avigilon', name: 'Avigilon', tag: 'Busca por Aparência' },
              { slug: 'axis', name: 'Axis', tag: 'Ecossistema Conectado' },
              { slug: 'pelco', name: 'Pelco', tag: 'Missão Crítica & PTZ' },
              { slug: 'tyco', name: 'Tyco / iSTAR', tag: 'Controle de Acesso' },
            ].map((b) => (
              <button
                key={b.slug}
                onClick={() => navigate(`/solucoes/${b.slug}`)}
                className="group text-left p-3.5 rounded-xl bg-slate-950 border border-slate-800 hover:border-emerald-500/50 hover:bg-slate-900 transition-all cursor-pointer"
              >
                <div className="text-xs font-bold text-white group-hover:text-emerald-400 transition-colors flex items-center justify-between">
                  <span>{b.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-emerald-400" />
                </div>
                <div className="text-[11px] text-slate-400 mt-1">
                  {b.tag}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Categories Detailed Listing */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {serviceCategories.map((cat, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={cat.id}
              id={`solution-${cat.slug}`}
              className="bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-slate-300 transition-all p-6 sm:p-10"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 shadow-md">
                    <img
                      src={cat.imageUrl}
                      alt={cat.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 text-white font-mono text-xs font-bold px-3 py-1.5 rounded-md backdrop-blur-xs">
                      {cat.number}
                    </div>
                  </div>
                </div>

                {/* Text and details side */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-white shadow-xs border border-slate-200/80 flex items-center justify-center">
                      {getIcon(cat.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                        Vertical Especializada
                      </span>
                      <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
                        {cat.title}
                      </h2>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="mb-8">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                      Escopo de Serviços & Engenharia:
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {cat.services.map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-slate-200/60">
                    <button
                      onClick={() => navigate(`/solucoes/${cat.slug}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <span>Ver detalhes técnicos</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: `Cotação de engenharia para vertical: ${cat.title}` })}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <span>Solicitar Cotação</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-20">
        <PreFooterCTA />
      </div>
    </main>
  );
};
