import React, { useState, useEffect } from 'react';
import { X, ArrowRight, ArrowLeft, CheckCircle2, Send, Building, Factory, Landmark, Wrench, Store, HelpCircle } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const MODAL_STORAGE_KEY = 'vs_contact_modal_seen';

export const LeadModal: React.FC = () => {
  const { isLeadModalOpen, setIsLeadModalOpen, leadModalInitialData } = useNavigation();

  const [step, setStep] = useState<1 | 2>(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    purpose: 'Empresa / Uso próprio',
    projectSummary: '',
    name: '',
    company: '',
    cnpj: '',
    email: '',
    phone: '',
    additionalInfo: '',
  });

  // 10-second automatic trigger on first navigation
  useEffect(() => {
    if (typeof window === 'undefined') return;

    try {
      const alreadySeen = localStorage.getItem(MODAL_STORAGE_KEY);
      if (!alreadySeen) {
        const timer = setTimeout(() => {
          const checkAgain = localStorage.getItem(MODAL_STORAGE_KEY);
          if (!checkAgain) {
            setIsLeadModalOpen(true);
            localStorage.setItem(MODAL_STORAGE_KEY, 'true');
          }
        }, 10000);

        return () => clearTimeout(timer);
      }
    } catch {
      // Ignore
    }
  }, [setIsLeadModalOpen]);

  // Sync initial data if opened manually with prefilled data
  useEffect(() => {
    if (leadModalInitialData) {
      setFormData((prev) => ({
        ...prev,
        purpose: leadModalInitialData.purpose || prev.purpose,
        projectSummary: leadModalInitialData.projectSummary || prev.projectSummary,
      }));
    }
  }, [leadModalInitialData]);

  const handleClose = () => {
    setIsLeadModalOpen(false);
    try {
      localStorage.setItem(MODAL_STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
  };

  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setStep(2);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      localStorage.setItem(MODAL_STORAGE_KEY, 'true');
    } catch {
      // Ignore
    }
  };

  const purposeOptions = [
    { id: 'Empresa / Uso próprio', label: 'Empresa / Uso próprio', desc: 'Instalações corporativas e plantas industriais', icon: <Building className="w-4 h-4 text-emerald-800" /> },
    { id: 'Governo / Órgão público', label: 'Governo / Órgão público', desc: 'Editais, segurança pública e infraestrutura', icon: <Landmark className="w-4 h-4 text-emerald-800" /> },
    { id: 'Construtora', label: 'Construtora', desc: 'Projetos prediais, loteamentos e condomínios', icon: <Factory className="w-4 h-4 text-emerald-800" /> },
    { id: 'Integrador', label: 'Integrador', desc: 'Parceria técnica de engenharia e fornecimento', icon: <Wrench className="w-4 h-4 text-emerald-800" /> },
    { id: 'Revenda', label: 'Revenda', desc: 'Distribuição e cotação para revenda', icon: <Store className="w-4 h-4 text-emerald-800" /> },
    { id: 'Outro', label: 'Outro', desc: 'Demandas específicas de engenharia', icon: <HelpCircle className="w-4 h-4 text-emerald-800" /> },
  ];

  if (!isLeadModalOpen) return null;

  return (
    <div
      id="lead-capture-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-stone-950/70 backdrop-blur-xs animate-in fade-in duration-150"
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="lead-modal-title"
    >
      <div
        id="lead-capture-modal-container"
        className="w-full max-w-[800px] max-h-[90vh] bg-white rounded-md shadow-xl border border-stone-200 overflow-y-auto relative flex flex-col justify-between"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          id="close-lead-modal-btn"
          onClick={handleClose}
          className="absolute top-4 right-4 p-2 text-stone-400 hover:text-stone-900 rounded-md hover:bg-stone-100 transition-colors z-20"
          aria-label="Fechar formulário"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="p-6 sm:p-8 pb-4 border-b border-stone-200">
          <div className="flex items-center gap-2 mb-2 text-xs font-medium text-stone-500">
            <span className="text-emerald-800 font-semibold">Atendimento Técnico</span>
            <span>•</span>
            <span>{step === 1 ? 'Etapa 1 de 2: Finalidade' : 'Etapa 2 de 2: Dados corporativos'}</span>
          </div>

          <h2 id="lead-modal-title" className="text-xl sm:text-2xl font-semibold text-stone-900 tracking-tight">
            Fale com nossos especialistas
          </h2>
          <p className="text-xs sm:text-sm text-stone-500 mt-1">
            Compartilhe as diretrizes do seu projeto para receber uma análise técnica preliminar.
          </p>

          {/* Progress Bar */}
          <div className="w-full bg-stone-100 h-1 rounded-full mt-4 overflow-hidden">
            <div
              className="bg-emerald-700 h-full transition-all duration-200"
              style={{ width: step === 1 ? '50%' : '100%' }}
            />
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 pt-6 flex-1">
          {submitted ? (
            <div className="py-10 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                <CheckCircle2 className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-stone-900">
                Solicitação enviada com sucesso
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 max-w-md mx-auto leading-relaxed">
                Nossos engenheiros receberam as especificações do seu projeto. Retornaremos o contato em horário comercial.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-5 py-2.5 rounded-md bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs sm:text-sm transition-colors"
                >
                  Concluir e voltar ao site
                </button>
              </div>
            </div>
          ) : step === 1 ? (
            /* STEP 1: Finalidade do Projeto */
            <form onSubmit={handleNextStep} className="space-y-6">
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-stone-700 mb-3">
                  Qual é o perfil ou finalidade da sua demanda?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {purposeOptions.map((opt) => {
                    const isSelected = formData.purpose === opt.id;
                    return (
                      <div
                        key={opt.id}
                        onClick={() => setFormData({ ...formData, purpose: opt.id })}
                        className={`cursor-pointer p-3.5 rounded-md border transition-all duration-150 flex items-start gap-3 ${
                          isSelected
                            ? 'border-emerald-700 bg-emerald-50/40 text-stone-900'
                            : 'border-stone-200 hover:border-stone-400 bg-white'
                        }`}
                      >
                        <div className="mt-0.5">{opt.icon}</div>
                        <div>
                          <span className={`text-xs font-semibold block ${isSelected ? 'text-stone-950' : 'text-stone-800'}`}>
                            {opt.label}
                          </span>
                          <span className="text-[11px] text-stone-500 leading-tight block mt-0.5">
                            {opt.desc}
                          </span>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-stone-700 mb-1.5">
                  Resumo do projeto (opcional)
                </label>
                <textarea
                  rows={3}
                  value={formData.projectSummary}
                  onChange={(e) => setFormData({ ...formData, projectSummary: e.target.value })}
                  placeholder="Ex: Reforma de cabeamento estruturado e instalação de CFTV para galpão logístico..."
                  className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition resize-none bg-white"
                />
              </div>

              <div className="flex items-center justify-end pt-2">
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm transition-colors"
                >
                  <span>Continuar para dados de contato</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          ) : (
            /* STEP 2: Dados de Contato */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="p-3 rounded-md bg-stone-50 border border-stone-200 flex items-center justify-between text-xs mb-4">
                <span className="text-stone-600">
                  Finalidade: <strong className="text-stone-900">{formData.purpose}</strong>
                </span>
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="text-stone-700 hover:text-emerald-800 underline font-medium"
                >
                  Alterar
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Nome completo *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Seu nome"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Empresa
                  </label>
                  <input
                    type="text"
                    placeholder="Nome da empresa"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    E-mail corporativo *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="contato@empresa.com.br"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Telefone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(62) 99999-9999"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    CNPJ (opcional)
                  </label>
                  <input
                    type="text"
                    placeholder="00.000.000/0000-00"
                    value={formData.cnpj}
                    onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-stone-700 mb-1">
                    Localidade / Prazo
                  </label>
                  <input
                    type="text"
                    placeholder="Cidade/UF da instalação"
                    value={formData.additionalInfo}
                    onChange={(e) => setFormData({ ...formData, additionalInfo: e.target.value })}
                    className="w-full px-3 py-2 rounded-md border border-stone-300 focus:border-stone-600 text-xs sm:text-sm outline-none transition bg-white"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-stone-200">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-stone-600 hover:text-stone-900"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Voltar para Etapa 1</span>
                </button>

                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white font-medium text-xs sm:text-sm transition-colors"
                >
                  <Send className="w-4 h-4" />
                  <span>Falar com um especialista</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
