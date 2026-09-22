import React, { memo } from 'react';
import { projectsData } from '../data/projects';
import { useNavigation } from '../context/NavigationContext';
import { ArrowRight } from 'lucide-react';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from './common/MotionReveal';

export const ProjectsShowcase: React.FC = memo(() => {
  const { navigate } = useNavigation();

  return (
    <section
      id="projects-showcase-section"
      className="py-8 lg:py-10 bg-white border-b border-stone-200"
      aria-label="Projetos e Cases de Sucesso"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-6 sm:mb-7 gap-4">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
              Cases de Engenharia
            </span>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight mt-1">
              Projetos em operações reais
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600">
              Implantações de alta complexidade executadas para concessionárias, hospitais e operações críticas.
            </p>
          </div>

          <button
            onClick={() => navigate('/projetos')}
            className="group inline-flex items-center gap-1.5 text-xs font-semibold text-stone-900 hover:text-emerald-800 transition-colors flex-shrink-0 cursor-pointer"
          >
            <span>Ver todos os projetos executados</span>
            <ArrowRight className="w-3.5 h-3.5 btn-arrow-icon" />
          </button>
        </MotionReveal>

        {/* Editorial Real Project Showcase - Compact Layout */}
        <MotionStaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {projectsData.map((project) => (
            <MotionStaggerItem key={project.id} className="flex flex-col">
              <div
                id={`project-card-${project.id}`}
                onClick={() => navigate(`/projetos/${project.slug}`)}
                className="group cursor-pointer flex flex-col justify-between p-3 rounded-md border border-stone-200 hover:border-stone-400 bg-white shadow-2xs card-hover-subtle h-full"
              >
                <div>
                  {/* Real Photo - Compact height */}
                  <div className="relative h-36 sm:h-40 overflow-hidden rounded bg-stone-100 mb-2.5">
                    <img
                      src={project.heroImage}
                      alt={project.title}
                      className="w-full h-full object-cover img-hover-subtle"
                      loading="lazy"
                      decoding="async"
                      width="400"
                      height="160"
                    />
                    <div className="absolute top-2 left-2 bg-stone-900/90 text-white text-[10px] font-mono px-1.5 py-0.5 rounded-xs">
                      {project.location}
                    </div>
                  </div>

                  {/* Meta line: Client - City */}
                  <span className="text-[11px] font-semibold text-emerald-800 uppercase tracking-wider block truncate">
                    {project.client} — {project.location.split(',')[0]}
                  </span>

                  {/* Title */}
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900 mt-0.5 group-hover:text-emerald-800 transition-colors leading-snug line-clamp-1">
                    {project.title}
                  </h3>

                  {/* Scope line: Infraestrutura • Segurança • Controle de acesso */}
                  <p className="text-[11px] text-stone-500 font-medium mt-1 truncate">
                    {project.technologies.slice(0, 3).join(' • ')}
                  </p>

                  {/* Short factual description */}
                  <p className="mt-1.5 text-xs text-stone-600 line-clamp-2 leading-relaxed">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Simple Link */}
                <div className="mt-3 pt-2.5 border-t border-stone-100 flex items-center justify-between text-xs font-medium text-stone-900 group-hover:text-emerald-800 transition-colors">
                  <span>Ver projeto</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </section>
  );
});

ProjectsShowcase.displayName = 'ProjectsShowcase';
