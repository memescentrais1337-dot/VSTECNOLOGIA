import React from 'react';
import { turnkeySteps } from '../data/company';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from './common/MotionReveal';

export const TurnkeyProcess: React.FC = () => {
  const { openLeadModalWithData } = useNavigation();

  return (
    <section
      id="turnkey-process-section"
      className="py-16 lg:py-24 bg-white border-b border-stone-200"
      aria-label="Solução Turn-Key"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <MotionReveal className="max-w-2xl mb-12">
          <span className="text-xs font-semibold uppercase tracking-wider text-emerald-800">
            Metodologia Executiva
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-stone-900 tracking-tight mt-2">
            Da engenharia à operação contínua.
          </h2>
          <p className="mt-3 text-base text-stone-600">
            Um único interlocutor técnico responsável por todas as fases, assegurando previsibilidade de custos e cumprimento de prazos.
          </p>
        </MotionReveal>

        {/* Steps Grid */}
        <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 border-t border-stone-200 pt-8">
          {turnkeySteps.map((item) => (
            <MotionStaggerItem key={item.step} className="flex flex-col">
              <span className="font-mono text-sm font-semibold text-emerald-700">
                {item.step}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-stone-900">
                {item.title}
              </h3>
              <p className="mt-1 text-xs text-stone-500 leading-relaxed">
                {item.desc}
              </p>
            </MotionStaggerItem>
          ))}
        </MotionStaggerContainer>

        {/* Technical Callout Bar */}
        <MotionReveal delay={0.16} className="mt-16 p-6 sm:p-8 rounded-md bg-stone-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <h4 className="text-base sm:text-lg font-semibold text-white">
              Precisa de um projeto executivo completo com ART?
            </h4>
            <p className="text-xs sm:text-sm text-stone-300 mt-1">
              Nossa equipe técnica elabora o memorial descritivo e as especificações de engenharia para a sua operação.
            </p>
          </div>
          <button
            onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: 'Solicitação de viabilidade e projeto turn-key' })}
            className="flex-shrink-0 inline-flex items-center gap-2 px-4 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white text-xs sm:text-sm font-medium transition-colors cursor-pointer"
          >
            <span>Falar com equipe de engenharia</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </MotionReveal>
      </div>
    </section>
  );
};
