import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { companyData } from '../data/company';
import { certificationsData } from '../data/certifications';
import { Phone, Mail } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

const directorPhoto = '/images/institucional/diretor-especialista.png';

export const AboutPage: React.FC = () => {
  const { navigate, openLeadModalWithData } = useNavigation();

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="max-w-3xl">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Estrutura Institucional
          </span>
          <h1 className="text-3xl sm:text-4xl lg:text-[40px] font-semibold text-stone-900 tracking-tight leading-tight mt-2">
            Engenharia, tecnologia e confiabilidade operacional
          </h1>
          <p className="mt-4 text-base sm:text-lg text-stone-600 leading-relaxed">
            A <strong className="text-stone-900 font-medium">VS Tecnologia e Automação LTDA</strong> é especializada em projetos turn-key de engenharia para segurança eletrônica, telecomunicações, infraestrutura de redes e automação corporativa.
          </p>
        </div>
      </div>

      {/* Narrative & Visual Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-5 text-sm sm:text-base text-stone-600 leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 leading-tight">
              Mais do que fornecer equipamentos: estruturamos operações seguras.
            </h2>
            <p>
              Com atuação consolidada a partir de Goiânia (GO) e capacidade de atendimento em todo o território nacional, a VS atua como parceira técnica de organizações que não podem operar com falhas em sistemas de segurança e comunicação.
            </p>
            <p>
              Trabalhamos com fornecimento direto dos principais fabricantes mundiais e equipe própria habilitada, assegurando cumprimento rigoroso de normas ABNT, TIA/EIA, NR-10 e NR-35.
            </p>
            <p>
              Todos os nossos projetos de engenharia contam com emissão de Anotação de Responsabilidade Técnica (ART) registrada no CREA-GO, garantindo conformidade documental para construtoras, concessionárias e órgãos públicos.
            </p>

            <div className="pt-4 flex flex-wrap items-center gap-4">
              <div className="p-4 rounded-md bg-stone-50 border border-stone-200 flex-1 min-w-[200px]">
                <span className="text-xs font-semibold text-emerald-800 uppercase block">Registro Profissional</span>
                <span className="text-sm font-semibold text-stone-900 mt-1 block">CREA-GO Nº 26.848</span>
                <span className="text-xs text-stone-500">Responsabilidade Técnica e ART</span>
              </div>
              <div className="p-4 rounded-md bg-stone-50 border border-stone-200 flex-1 min-w-[200px]">
                <span className="text-xs font-semibold text-emerald-800 uppercase block">Metodologia Turn-Key</span>
                <span className="text-sm font-semibold text-stone-900 mt-1 block">Ciclo Completo</span>
                <span className="text-xs text-stone-500">Do projeto ao suporte contínuo</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-md overflow-hidden border border-stone-200 shadow-sm bg-stone-100">
              <img
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1200&q=80"
                alt="Equipe de engenharia e centro de controle"
                className="w-full h-[400px] object-cover"
              />
              <div className="p-3 bg-stone-900 text-stone-200 flex items-center justify-between text-xs">
                <span>VS Tecnologia e Automação LTDA</span>
                <span className="font-mono text-stone-400">Goiânia - GO</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Leadership Profile: Hueliton Silva */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-200">
        <div className="max-w-3xl mb-10">
          <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Responsabilidade Técnica
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-stone-900 mt-1">
            Direção de Engenharia e Operações
          </h2>
          <p className="text-stone-600 text-sm mt-2">
            Projetos supervisionados por engenheiro habilitado com histórico de implantações críticas.
          </p>
        </div>

        <div className="bg-stone-50/80 rounded-md p-6 sm:p-8 border border-stone-200 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-3 flex flex-col items-center sm:items-start text-center sm:text-left">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-lg overflow-hidden bg-stone-100 border border-stone-200/90 shadow-xs ring-4 ring-white flex-shrink-0">
              <img
                src={directorPhoto}
                alt={`Foto de ${companyData.engineeringDirector.name}`}
                className="w-full h-full object-cover object-top"
                referrerPolicy="no-referrer"
              />
            </div>
            <h3 className="text-base font-semibold text-stone-900 mt-3">
              {companyData.engineeringDirector.name}
            </h3>
            <p className="text-xs font-medium text-emerald-800">
              {companyData.engineeringDirector.role}
            </p>
            <p className="text-xs text-stone-500 mt-0.5">
              CREA-GO 26.848
            </p>
          </div>

          <div className="lg:col-span-9 space-y-3 text-xs sm:text-sm text-stone-600 leading-relaxed border-t lg:border-t-0 lg:border-l border-stone-200 pt-6 lg:pt-0 lg:pl-8">
            <p>
              À frente do corpo técnico da VS, {companyData.engineeringDirector.name} supervisiona o planejamento executivo, os memoriais descritivos e a validação de arquitetura para contratos de média e alta complexidade.
            </p>
            <p>
              Com vasta experiência em segurança eletrônica integrada, redes de telecomunicações industriais e automação predial, sua diretriz é assegurar que cada implantação entregue robustez, escalabilidade e conformidade com as normas técnicas.
            </p>

            <div className="pt-3 flex flex-wrap items-center gap-4 text-xs font-medium text-stone-700">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500" />
                <span>{companyData.engineeringDirector.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500" />
                <span>{companyData.engineeringDirector.email}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Certifications and Partnerships */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 border-t border-stone-200">
        <div className="max-w-2xl mb-8">
          <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
            Capacitação
          </span>
          <h2 className="text-2xl font-semibold text-stone-900 mt-1">
            Certificações Técnicas e Parcerias Homologadas
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {certificationsData.map((c) => (
            <div key={c.id} className="rounded-md bg-white border border-stone-200 overflow-hidden flex flex-col justify-between hover:border-stone-400 hover:shadow-xs transition-all">
              <div>
                <div className="relative h-32 w-full overflow-hidden bg-stone-100 border-b border-stone-200/80">
                  <img
                    src={c.imageUrl}
                    alt={`Certificação ${c.name}`}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-stone-950/60 via-stone-950/20 to-transparent" />
                  <div className="absolute bottom-2 left-3 right-3">
                    <span className="text-[10px] font-semibold text-white bg-emerald-700/90 backdrop-blur-xs px-2 py-0.5 rounded uppercase tracking-wider">
                      {c.badgeText}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <span className="text-[11px] font-mono text-emerald-800 font-semibold uppercase block">{c.issuer}</span>
                  <h3 className="text-sm font-semibold text-stone-900 mt-1 line-clamp-2">{c.name}</h3>
                  <p className="text-xs text-stone-600 mt-1.5 leading-relaxed line-clamp-3">{c.description}</p>
                </div>
              </div>
              <div className="px-4 pb-3 pt-2 border-t border-stone-100 text-[10px] font-mono text-stone-400 uppercase">
                {c.category}
              </div>
            </div>
          ))}
        </div>
      </div>

      <PreFooterCTA />
    </main>
  );
};
