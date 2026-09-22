import React from 'react';
import {
  ShieldCheck,
  Award,
  Layers,
  FileCheck2,
  Users,
  Headphones,
} from 'lucide-react';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from './common/MotionReveal';

export const WhyChooseVS: React.FC = () => {
  const differentials = [
    {
      icon: <ShieldCheck className="w-5 h-5 text-emerald-800" />,
      title: 'Engenharia Especializada com ART',
      desc: 'Corpo técnico qualificado com engenheiros habilitados e registro ativo no CREA-GO (Nº 26.848), assegurando total conformidade jurídica e técnica.',
    },
    {
      icon: <Award className="w-5 h-5 text-emerald-800" />,
      title: 'Parcerias com Fabricantes Globais',
      desc: 'Canal oficial e homologado das maiores marcas do setor: AXIS, Avigilon, Hanwha, CAME, Bosch, Genetec, Cisco e Furukawa, com garantia e suporte de fábrica.',
    },
    {
      icon: <Layers className="w-5 h-5 text-emerald-800" />,
      title: 'Projetos Completos (Turn-Key)',
      desc: 'Solução de ponta a ponta: do levantamento e elaboração do projeto executivo até fornecimento, montagem física, comissionamento e testes.',
    },
    {
      icon: <Users className="w-5 h-5 text-emerald-800" />,
      title: 'Equipe Própria e Certificada',
      desc: 'Técnicos e especialistas próprios capacitados nas tecnologias implementadas, treinados em normas de segurança do trabalho (NR-10 e NR-35).',
    },
    {
      icon: <FileCheck2 className="w-5 h-5 text-emerald-800" />,
      title: 'Conformidade com Normas ABNT',
      desc: 'Rigorosa aderência às diretrizes ABNT NBR, TIA/EIA e melhores práticas de infraestrutura, com relatórios técnicos e certificação de cabos e enlaces.',
    },
    {
      icon: <Headphones className="w-5 h-5 text-emerald-800" />,
      title: 'Suporte Continuado com SLA',
      desc: 'Atendimento estruturado, manutenção preventiva programada e estoque de reposição para resposta rápida em ambientes de missão crítica.',
    },
  ];

  return (
    <section
      id="why-choose-vs-section"
      className="py-16 lg:py-24 bg-[#F1F2F0] border-b border-stone-200"
      aria-label="Por que a VS Tecnologia"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <MotionReveal className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Diferenciais Competitivos
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight mt-2">
            Por que a VS Tecnologia
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Solidez técnica, corpo de engenharia especializado e histórico de projetos em ambientes de alta criticidade.
          </p>
        </MotionReveal>

        {/* 6 Differentials Grid */}
        <MotionStaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentials.map((item, idx) => (
            <MotionStaggerItem key={idx}>
              <div
                className="bg-white border border-stone-200/90 rounded-md p-6 flex flex-col justify-between shadow-2xs hover:border-stone-400 transition-colors h-full"
              >
                <div>
                  <div className="w-9 h-9 rounded-md bg-stone-100 flex items-center justify-center mb-4">
                    {item.icon}
                  </div>
                  <h3 className="text-base font-semibold text-stone-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>
      </div>
    </section>
  );
};
