import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { projectsData } from '../data/projects';
import { ArrowLeft, ArrowRight, Building2, MapPin, CheckCircle2, ShieldAlert, Wrench, Layers } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const ProjectDetailPage: React.FC = () => {
  const { routeParams, navigate, openLeadModalWithData } = useNavigation();
  const slug = routeParams.slug;

  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => navigate('/projetos')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para todos os Projetos</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="bg-slate-950 rounded-3xl overflow-hidden relative text-white">
          <div className="absolute inset-0 z-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-25 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
          </div>

          <div className="relative z-10 p-8 sm:p-14 max-w-3xl">
            <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold">
              <span className="px-3 py-1 rounded bg-emerald-600 text-white">
                {project.client}
              </span>
              <span className="px-3 py-1 rounded bg-slate-800 text-slate-300">
                {project.segment}
              </span>
              <span className="px-3 py-1 rounded bg-slate-800 text-slate-300 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-emerald-400" />
                {project.location}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base text-slate-300 leading-relaxed">
              {project.fullDescription || project.shortDesc}
            </p>

            <div className="mt-8">
              <button
                onClick={() =>
                  openLeadModalWithData({
                    purpose: 'Empresa / Uso próprio',
                    projectSummary: `Gostaria de uma solução similar ao projeto ${project.client} - ${project.title}`,
                  })
                }
                className="px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md transition-colors"
              >
                Quer uma solução parecida para sua operação?
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Challenge */}
          <div className="bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200">
            <div className="flex items-center gap-2 text-rose-700 font-bold text-base mb-3">
              <ShieldAlert className="w-5 h-5" />
              <span>O Desafio Técnico Inicial</span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Solution */}
          <div className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-200">
            <div className="flex items-center gap-2 text-emerald-800 font-bold text-base mb-3">
              <CheckCircle2 className="w-5 h-5" />
              <span>A Solução Implementada pela VS</span>
            </div>
            <p className="text-sm text-slate-700 leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>
      </div>

      {/* Technologies & Execution Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Execution steps */}
          <div className="lg:col-span-7">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Wrench className="w-5 h-5 text-emerald-600" />
              <span>Etapas de Execução do Projeto</span>
            </h2>
            <div className="space-y-3">
              {(project.executionSteps || project.execution || []).map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70">
                  <span className="w-6 h-6 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center flex-shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <span className="text-xs sm:text-sm font-medium text-slate-800">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies used */}
          <div className="lg:col-span-5">
            <h2 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Layers className="w-5 h-5 text-emerald-600" />
              <span>Tecnologias Utilizadas</span>
            </h2>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1.5 rounded-lg bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Results */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-3">
                Resultados Medidos:
              </h3>
              <ul className="space-y-2">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Galeria do Projeto & Instalação
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {project.gallery.map((imgUrl, i) => (
              <div key={i} className="rounded-xl overflow-hidden shadow-xs border border-slate-200 aspect-16/10">
                <img
                  src={imgUrl}
                  alt={`Registro de instalação ${i + 1}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Bottom CTA Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12">
        <div className="p-8 sm:p-12 rounded-3xl bg-emerald-700 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold">
              Precisa de um projeto deste porte para sua operação?
            </h3>
            <p className="text-emerald-100 text-xs sm:text-sm mt-1 max-w-xl">
              Nossa equipe de engenharia desenvolve toda a análise de risco e especificação técnica para seu cenário.
            </p>
          </div>
          <button
            onClick={() =>
              openLeadModalWithData({
                purpose: 'Empresa / Uso próprio',
                projectSummary: `Solicitação de consultoria baseada no case ${project.title}`,
              })
            }
            className="px-6 py-3.5 rounded-xl bg-white text-slate-900 font-bold text-xs sm:text-sm shadow-md hover:bg-slate-100 transition-colors flex-shrink-0"
          >
            Fale com um Especialista
          </button>
        </div>
      </div>

      <div className="mt-16">
        <PreFooterCTA />
      </div>
    </main>
  );
};
