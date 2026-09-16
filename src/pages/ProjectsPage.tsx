import React from 'react';
import { projectsData } from '../data/projects';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight, MapPin, Building2, CheckCircle2 } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const ProjectsPage: React.FC = () => {
  const { navigate, openLeadModalWithData } = useNavigation();

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Cases de Engenharia & Sucesso</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Projetos que transformam operações críticas
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Conheça algumas das implantações de alta complexidade desenvolvidas pela VS Tecnologia e Automação para líderes do setor elétrico, hospitalar de excelência e defesa nacional.
          </p>
        </div>
      </div>

      {/* Projects Showcase Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {projectsData.map((project, idx) => {
          const isEven = idx % 2 === 1;
          return (
            <div
              key={project.id}
              id={`case-${project.slug}`}
              className="bg-slate-50 rounded-3xl border border-slate-200/80 overflow-hidden shadow-xs hover:border-slate-300 transition-all p-6 sm:p-10"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 items-center ${isEven ? 'lg:flex-row-reverse' : ''}`}>
                {/* Visual */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative rounded-2xl overflow-hidden aspect-16/10 shadow-md">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 text-white text-xs font-semibold px-3 py-1 rounded border border-slate-700">
                      {project.segment}
                    </div>
                    <div className="absolute bottom-4 left-4 bg-slate-950/80 text-white text-xs font-medium px-3 py-1 rounded flex items-center gap-1.5 border border-slate-700">
                      <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{project.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">
                    Cliente: {project.client}
                  </span>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                    {project.title}
                  </h2>
                  <p className="mt-4 text-sm sm:text-base text-slate-600 leading-relaxed">
                    {project.shortDesc}
                  </p>

                  <div className="mt-6 pt-4 border-t border-slate-200/60">
                    <h3 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-2">
                      Resultados Alcançados:
                    </h3>
                    <ul className="space-y-1.5">
                      {project.results.slice(0, 3).map((res, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-8 flex flex-wrap items-center gap-3">
                    <button
                      onClick={() => navigate(`/projetos/${project.slug}`)}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <span>Ver estudo de caso detalhado</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: `Projeto similar ao case ${project.title}` })}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-slate-300 hover:border-slate-400 bg-white text-slate-800 font-semibold text-xs sm:text-sm transition-colors"
                    >
                      <span>Quero uma solução similar</span>
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
