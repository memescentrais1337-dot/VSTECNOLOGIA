import React, { useState, useEffect, useCallback } from 'react';
import {
  X,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  MessageCircle,
  FileSpreadsheet,
  Clock,
  Sparkles,
} from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import { companyData } from '../../data/company';

const EXIT_INTENT_STORAGE_KEY = 'vs_exit_intent_triggered_session';

export const ExitIntentModal: React.FC = () => {
  const { isLeadModalOpen } = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    purpose: 'Empresa / Uso próprio',
    name: '',
    phone: '',
    email: '',
    demand: '',
  });

  const triggerModal = useCallback(() => {
    // If the lead capture modal is already open, do not trigger
    if (isLeadModalOpen) return;

    try {
      const alreadyTriggered = sessionStorage.getItem(EXIT_INTENT_STORAGE_KEY);
      if (alreadyTriggered) return;

      sessionStorage.setItem(EXIT_INTENT_STORAGE_KEY, 'true');
      setIsOpen(true);
    } catch {
      setIsOpen(true);
    }
  }, [isLeadModalOpen]);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    // Grace period of 5 seconds to ensure user is truly engaging before triggering exit intent
    let isArmed = false;
    const armTimer = setTimeout(() => {
      isArmed = true;
    }, 5000);

    // Desktop Exit-Intent: mouse leaves top of viewport
    const handleMouseLeave = (e: MouseEvent) => {
      if (!isArmed) return;
      if (e.clientY <= 5) {
        triggerModal();
      }
    };

    // Mobile / Touch Exit-Intent: fast scroll back to the top after viewing content
    let lastScrollY = window.scrollY;
    let maxScrollY = 0;

    const handleScroll = () => {
      if (!isArmed) return;
      const currentScrollY = window.scrollY;
      if (currentScrollY > maxScrollY) {
        maxScrollY = currentScrollY;
      }

      // If user scrolled down past 450px and then scrolls back quickly to the top (< 60px)
      if (maxScrollY > 450 && currentScrollY < 60 && lastScrollY > 120) {
        triggerModal();
      }
      lastScrollY = currentScrollY;
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      clearTimeout(armTimer);
      document.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [triggerModal]);

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleOpenWhatsAppFromQuote = () => {
    const text = `Olá! Solicitei uma cotação no site da VS Tecnologia.\n\n• Nome: ${formData.name}\n• Finalidade: ${formData.purpose}\n• E-mail: ${formData.email}\n• Telefone: ${formData.phone}\n• Demanda / Equipamentos: ${formData.demand || 'Gostaria de uma cotação e dimensionamento'}`;
    const url = `https://wa.me/${companyData.whatsappRaw}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    handleClose();
  };

  if (!isOpen) return null;

  return (
    <div
      id="exit-intent-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 bg-stone-950/75 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-intent-title"
    >
      <div
        id="exit-intent-modal-container"
        className="w-full max-w-[620px] max-h-[92vh] bg-white rounded-xl shadow-2xl border border-stone-200 overflow-y-auto relative flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-exit-intent-btn"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-800 rounded-lg hover:bg-stone-100 transition-colors z-20 cursor-pointer"
          aria-label="Fechar pop-up"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-7 pb-4 bg-gradient-to-b from-stone-50 to-white border-b border-stone-200/80">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-800 text-[10px] font-bold uppercase tracking-wider mb-2.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>ÚLTIMA OPORTUNIDADE • ANTES DE SAIR</span>
          </div>

          <h2
            id="exit-intent-title"
            className="text-xl sm:text-2xl font-black text-stone-950 tracking-tight leading-tight"
          >
            Faça sua Cotação Direta com Nossa Engenharia
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 mt-1.5 leading-relaxed">
            Não feche seu projeto sem comparar. Receba dimensionamento técnico preliminar e
            condições direto de fábrica com garantia oficial e suporte especializado.
          </p>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 pt-5 flex-1">
          {submitted ? (
            <div className="py-6 text-center space-y-3.5">
              <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-stone-900 tracking-tight">
                Cotação solicitada com sucesso!
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Nossos engenheiros receberam sua solicitação de cotação e entrarão em contato em
                horário comercial com a proposta técnica.
              </p>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3">
                <button
                  type="button"
                  onClick={handleOpenWhatsAppFromQuote}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Agilizar no WhatsApp da Engenharia</span>
                </button>
                <button
                  type="button"
                  onClick={handleClose}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs sm:text-sm transition-colors cursor-pointer"
                >
                  Continuar navegando
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-[11px] font-bold uppercase tracking-wider text-stone-700 mb-1.5">
                  Finalidade do Projeto / Perfil *
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Empresa / Uso próprio',
                    'Governo / Órgão público',
                    'Construtora',
                    'Integrador',
                    'Revenda',
                    'Outro',
                  ].map((item) => {
                    const isSelected = formData.purpose === item;
                    return (
                      <button
                        type="button"
                        key={item}
                        onClick={() => setFormData({ ...formData, purpose: item })}
                        className={`px-2.5 py-1.5 rounded-md text-xs font-medium text-left border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-emerald-50 text-emerald-950 border-emerald-600 font-bold ring-1 ring-emerald-600'
                            : 'bg-stone-50 hover:bg-stone-100 text-stone-700 border-stone-200'
                        }`}
                      >
                        {item}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-stone-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(62) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  E-mail Corporativo *
                </label>
                <input
                  type="email"
                  required
                  placeholder="seu.email@empresa.com.br"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition bg-white"
                />
              </div>

              <div>
                <label className="block text-[11px] font-bold text-stone-700 mb-1">
                  Equipamentos ou Soluções que deseja cotar (opcional)
                </label>
                <textarea
                  rows={2}
                  value={formData.demand}
                  onChange={(e) => setFormData({ ...formData, demand: e.target.value })}
                  placeholder="Ex: Câmeras IP, controle de acesso facial, sistema de alarme de incêndio, nobreak..."
                  className="w-full px-3 py-2 rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition resize-none bg-white"
                />
              </div>

              <div className="pt-2 space-y-2.5">
                <button
                  type="submit"
                  className="w-full py-3 px-5 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs sm:text-sm tracking-wider uppercase shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-200" />
                  <span>SOLICITAR COTAÇÃO GRATUITA AGORA</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center">
                  <button
                    type="button"
                    onClick={handleClose}
                    className="text-[11px] text-stone-500 hover:text-stone-800 transition-colors cursor-pointer"
                  >
                    Não, obrigado. Prefiro continuar navegando no site
                  </button>
                </div>
              </div>

              {/* Trust Badges */}
              <div className="pt-3 border-t border-stone-100 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-[10px] text-stone-500 font-medium">
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3 h-3 text-emerald-700" />
                  <span>CREA-GO Nº 26.848</span>
                </div>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3 text-emerald-700" />
                  <span>Resposta em Horário Comercial</span>
                </div>
                <span>•</span>
                <span className="text-emerald-700 font-semibold">Sem compromisso</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
