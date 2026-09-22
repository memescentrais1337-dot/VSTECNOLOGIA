import React from 'react';
import { ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { MotionReveal } from './common/MotionReveal';

export const PreFooterCTA: React.FC = () => {
  const { scrollToSection, openLeadModalWithData } = useNavigation();

  return (
    <section
      id="pre-footer-cta-section"
      className="py-14 sm:py-16 bg-stone-900 text-white border-t border-stone-800"
      aria-label="Chamada para Ação Estratégica"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MotionReveal>
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-400">
                Planejamento e Viabilidade
              </span>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white tracking-tight mt-1">
                Seu próximo projeto começa com uma boa estratégia tecnológica.
              </h2>
              <p className="mt-2 text-sm text-stone-300 leading-relaxed">
                Conte seu desafio operacional. Nossa equipe de engenharia ajuda a especificar a arquitetura mais adequada com suporte, ART e homologação de fábrica.
              </p>
            </div>

            <div className="flex-shrink-0">
              <button
                id="pre-footer-specialist-btn"
                onClick={() => {
                  if (scrollToSection('specialist-cta-section') || scrollToSection('contato-especialista')) {
                    return;
                  }
                  openLeadModalWithData({ purpose: 'Empresa / Uso próprio' });
                }}
                className="group inline-flex items-center justify-center gap-2 px-5 py-3 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white text-sm font-medium transition-colors cursor-pointer"
              >
                <span>Fale com um especialista</span>
                <ArrowRight className="w-4 h-4 btn-arrow-icon" />
              </button>
            </div>
          </div>
        </MotionReveal>
      </div>
    </section>
  );
};
