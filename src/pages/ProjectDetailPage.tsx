import React, { useEffect } from 'react';
import { useNavigation } from '../context/NavigationContext';
import { projectsData } from '../data/projects';
import { companyData } from '../data/company';
import { trackEvent } from '../utils/analytics';
import {
  ArrowLeft,
  ArrowRight,
  MapPin,
  CheckCircle2,
  ShieldAlert,
  ShieldCheck,
  Workflow,
  Cpu,
  Calendar,
  Building2,
  MessageCircle,
  FileCheck2,
  Award,
  Layers,
} from 'lucide-react';
import { MotionReveal } from '../components/common/MotionReveal';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const ProjectDetailPage: React.FC = () => {
  const { routeParams, navigate, openLeadModalWithData } = useNavigation();
  const slug = routeParams.slug;

  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  useEffect(() => {
    if (project) {
      trackEvent('case_view', {
        case_id: project.id,
        case_slug: project.slug,
        client: project.client,
        segment: project.segment,
      });
    }
  }, [project]);

  const whatsappMessage = `Olá! Vi o case do projeto ${project.client} (${project.title}) no site da VS Tecnologia e gostaria de entender como aplicar uma arquitetura similar na minha empresa.`;
  const whatsappUrl = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(whatsappMessage)}`;

  const handleOpenLeadModal = () => {
    openLeadModalWithData({
      purpose: project.segment,
      projectSummary: `Interesse em projeto similar ao case: ${project.client} - ${project.title} (${project.segment} / ${project.location})`,
    });
  };

  return (
    <main className="pt-20 sm:pt-24 pb-16 bg-white min-h-screen">
      {/* Breadcrumb / Back button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <button
          onClick={() => navigate('/projetos')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para todos os Projetos</span>
        </button>
      </div>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        <div className="bg-stone-950 rounded-2xl sm:rounded-3xl overflow-hidden relative text-white border border-stone-800 shadow-lg">
          <div className="absolute inset-0 z-0">
            <img
              src={project.heroImage}
              alt={project.title}
              className="w-full h-full object-cover opacity-25 filter contrast-125"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/85 to-transparent" />
          </div>

          <div className="relative z-10 p-6 sm:p-12 lg:p-14 max-w-4xl">
            <div className="flex flex-wrap items-center gap-2 mb-4 text-xs font-semibold">
              <span className="px-3 py-1 rounded-md bg-emerald-700 text-white font-bold">
                {project.client}
              </span>
              <span className="px-3 py-1 rounded-md bg-stone-800/90 text-stone-300 border border-stone-700/60">
                {project.segment}
              </span>
              <span className="px-3 py-1 rounded-md bg-stone-800/90 text-stone-300 border border-stone-700/60 flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                {project.location}
              </span>
              <span className="px-3 py-1 rounded-md bg-stone-800/90 text-stone-300 border border-stone-700/60 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-stone-400" />
                {project.year}
              </span>
            </div>

            <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight leading-tight text-white">
              {project.title}
            </h1>

            <p className="mt-4 text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl">
              {project.fullDescription || project.shortDesc}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                type="button"
                onClick={handleOpenLeadModal}
                className="px-6 py-3.5 rounded-lg bg-emerald-700 hover:bg-emerald-600 active:bg-emerald-800 text-white font-bold text-xs uppercase tracking-wider shadow-md transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <FileCheck2 className="w-4 h-4" />
                <span>Solicitar Projeto Similar para Minha Empresa</span>
              </button>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => trackEvent('whatsapp_click', { origin: `case_${project.id}` })}
                className="px-5 py-3.5 rounded-lg bg-stone-900/90 hover:bg-stone-800 text-white font-semibold text-xs border border-stone-700 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Conversar no WhatsApp</span>
              </a>
            </div>
          </div>

          {/* Quick Technical Specs Bar */}
          <div className="relative z-10 border-t border-stone-800/80 bg-stone-900/60 backdrop-blur-xs px-6 sm:px-12 py-3.5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs text-stone-400">
            <div>
              <span className="block text-[10px] uppercase font-bold text-stone-500">Cliente</span>
              <span className="font-semibold text-white truncate block">{project.client}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-stone-500">Segmento</span>
              <span className="font-semibold text-white truncate block">{project.segment}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-stone-500">Localização</span>
              <span className="font-semibold text-white truncate block">{project.location}</span>
            </div>
            <div>
              <span className="block text-[10px] uppercase font-bold text-stone-500">Responsabilidade</span>
              <span className="font-semibold text-emerald-400 truncate block">CREA-GO 26.848 com ART</span>
            </div>
          </div>
        </div>
      </div>

      {/* Challenge & Solution Side by Side */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* Challenge */}
          <MotionReveal className="bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2.5 text-stone-900 font-bold text-base mb-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 text-amber-800 flex items-center justify-center shrink-0">
                <ShieldAlert className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 block">
                  Cenário Operacional
                </span>
                <span className="text-base text-stone-950 font-bold">O Desafio Técnico Inicial</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-600 leading-relaxed mt-2">
              {project.challenge}
            </p>
          </MotionReveal>

          {/* Solution */}
          <MotionReveal delay={0.1} className="bg-emerald-50/50 p-6 sm:p-8 rounded-2xl border border-emerald-200/90 shadow-2xs">
            <div className="flex items-center gap-2.5 text-emerald-950 font-bold text-base mb-3">
              <div className="w-8 h-8 rounded-lg bg-emerald-700 text-white flex items-center justify-center shrink-0">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-800 block">
                  Engenharia Turn-Key
                </span>
                <span className="text-base text-emerald-950 font-bold">A Solução Integrada da VS</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-stone-700 leading-relaxed mt-2">
              {project.solution}
            </p>
          </MotionReveal>
        </div>
      </div>

      {/* Technical Architecture Diagram */}
      {project.architectureSteps && project.architectureSteps.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
          <MotionReveal className="p-6 sm:p-8 bg-[#FAFBF9] rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Workflow className="w-4 h-4 text-emerald-700" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-900">
                Diagrama Topológico do Projeto
              </span>
            </div>
            <h3 className="text-lg sm:text-xl font-bold text-stone-950 mb-6">
              Arquitetura de Conexão e Fluxo de Dados Implementada
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 relative">
              {project.architectureSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="bg-white p-4 rounded-xl border border-stone-200 shadow-2xs flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                        ETAPA 0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-xs font-bold text-stone-900 leading-snug mb-1">
                      {step.step}
                    </h4>
                    <p className="text-[11px] text-stone-500 leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      )}

      {/* Technologies & Execution Steps */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Technologies */}
          <MotionReveal className="lg:col-span-5 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-4">
              <Cpu className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-tight">
                Tecnologias & Hardware Homologados
              </h3>
            </div>
            <ul className="space-y-2.5">
              {project.technologies.map((tech, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-stone-700">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                  <span className="leading-snug">{tech}</span>
                </li>
              ))}
            </ul>
          </MotionReveal>

          {/* Execution steps */}
          <MotionReveal delay={0.1} className="lg:col-span-7 bg-white p-6 sm:p-7 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-4">
              <Layers className="w-4 h-4 text-emerald-700" />
              <h3 className="text-sm sm:text-base font-bold text-stone-900 uppercase tracking-tight">
                Metodologia de Execução & Comissionamento
              </h3>
            </div>
            <div className="space-y-3">
              {project.execution.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 bg-stone-50 rounded-xl border border-stone-200/80">
                  <span className="w-5 h-5 rounded-md bg-stone-900 text-white font-mono text-[10px] font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-xs text-stone-700 leading-relaxed">{step}</p>
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      </div>

      {/* Results & Why VS */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-14">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Results */}
          <MotionReveal className="lg:col-span-7 bg-stone-900 text-white p-6 sm:p-8 rounded-2xl border border-stone-800 shadow-sm">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-400 block mb-1">
              Métricas & Conformidade Real
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white mb-4">
              Resultados Comprovados em Operação
            </h3>
            <div className="space-y-3">
              {project.results.map((result, idx) => (
                <div key={idx} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-stone-300 leading-relaxed">{result}</span>
                </div>
              ))}
            </div>
          </MotionReveal>

          {/* Why VS */}
          <MotionReveal delay={0.1} className="lg:col-span-5 bg-stone-50 p-6 sm:p-8 rounded-2xl border border-stone-200 shadow-2xs">
            <div className="flex items-center gap-2 mb-2">
              <Award className="w-4 h-4 text-emerald-700" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Diferenciais Técnicos
              </span>
            </div>
            <h3 className="text-base sm:text-lg font-bold text-stone-950 mb-3">
              Por que a VS Tecnologia?
            </h3>
            <ul className="space-y-2.5 text-xs text-stone-700">
              {project.whyVS ? (
                project.whyVS.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span className="leading-snug">{item}</span>
                  </li>
                ))
              ) : (
                <>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Engenharia própria registrada no CREA-GO com ART individual por projeto</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Parcerias homologadas e certificações diretas com os fabricantes</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700 shrink-0 mt-0.5" />
                    <span>Equipe local de implantação em Goiânia e suporte continuado com SLA</span>
                  </li>
                </>
              )}
            </ul>
          </MotionReveal>
        </div>
      </div>

      {/* Real Photos Gallery */}
      {project.gallery && project.gallery.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
          <MotionReveal>
            <h3 className="text-base sm:text-lg font-bold text-stone-900 mb-4">
              Registros Visuais da Operação
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.gallery.map((img, idx) => (
                <div key={idx} className="aspect-16/10 rounded-xl overflow-hidden border border-stone-200 shadow-2xs">
                  <img
                    src={img}
                    alt={`${project.title} - Registro ${idx + 1}`}
                    className="w-full h-full object-cover hover:scale-102 transition-transform duration-300"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </MotionReveal>
        </div>
      )}

      {/* Final PreFooter CTA */}
      <PreFooterCTA />
    </main>
  );
};
