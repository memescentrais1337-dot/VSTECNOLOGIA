import React, { useState } from 'react';
import { ArrowRight, CheckCircle2, Shield, Lock, Phone } from 'lucide-react';
import { companyData } from '../../data/company';

interface DirectLeadFormProps {
  solutionName: string;
  source: string;
  compact?: boolean;
}

export const DirectLeadForm: React.FC<DirectLeadFormProps> = ({
  solutionName,
  source,
  compact = false,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    projectScope: 'Novo projeto de segurança / automação',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Capture UTMs
    let utms: Record<string, string> = {};
    if (typeof window !== 'undefined') {
      const urlParams = new URLSearchParams(window.location.search);
      ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content'].forEach((key) => {
        const val = urlParams.get(key);
        if (val) utms[key] = val;
      });
    }

    const payload = {
      ...formData,
      solution: solutionName,
      source,
      utms,
      timestamp: new Date().toISOString(),
    };

    console.log('[Lead Capture - Solution Landing]:', payload);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 500);
  };

  if (submitted) {
    return (
      <div className="bg-white border border-emerald-200 rounded-2xl p-8 sm:p-10 text-center shadow-sm">
        <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-5 border border-emerald-100">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-stone-900 tracking-tight mb-2">
          Solicitação Recebida com Sucesso
        </h3>
        <p className="text-stone-600 text-sm leading-relaxed max-w-md mx-auto mb-6">
          Nosso departamento de engenharia analisará as informações de <strong className="text-stone-900">{solutionName}</strong> e entrará em contato para agendar o diagnóstico técnico preliminar.
        </p>
        <div className="pt-5 border-t border-stone-100 text-xs text-stone-500 flex flex-col sm:flex-row items-center justify-center gap-2">
          <span>Atendimento imediato por telefone:</span>
          <a
            href={`tel:${companyData.phoneRaw}`}
            className="text-emerald-800 font-bold hover:underline inline-flex items-center gap-1"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>{companyData.phone}</span>
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`bg-white border border-stone-200/90 rounded-xl shadow-2xs p-5 sm:p-7 ${
        compact ? 'p-5' : ''
      }`}
    >
      <div className="mb-5">
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-stone-100 text-stone-700 text-[10px] font-semibold uppercase tracking-wider mb-2">
          <Shield className="w-3 h-3 text-emerald-700" />
          <span>Atendimento de Engenharia VS</span>
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-stone-900 tracking-tight">
          Fale com um Especialista
        </h3>
        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
          Preencha os dados abaixo para receber um estudo preliminar e dimensionamento técnico específico para a sua operação.
        </p>
      </div>

      <div className="space-y-3">
        <div>
          <label htmlFor="lead-name" className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
            Nome Completo *
          </label>
          <input
            id="lead-name"
            type="text"
            required
            placeholder="Ex.: Carlos Mendes"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50/60 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="lead-company" className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
              Empresa / Órgão
            </label>
            <input
              id="lead-company"
              type="text"
              placeholder="Nome da sua empresa"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50/60 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors"
            />
          </div>

          <div>
            <label htmlFor="lead-phone" className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
              WhatsApp / Telefone *
            </label>
            <input
              id="lead-phone"
              type="tel"
              required
              placeholder="(00) 00000-0000"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-3.5 py-2.5 bg-stone-50/60 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors"
            />
          </div>
        </div>

        <div>
          <label htmlFor="lead-email" className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
            E-mail Corporativo *
          </label>
          <input
            id="lead-email"
            type="email"
            required
            placeholder="carlos@empresa.com.br"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50/60 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors"
          />
        </div>

        <div>
          <label htmlFor="lead-scope" className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
            Tipo de Projeto
          </label>
          <select
            id="lead-scope"
            value={formData.projectScope}
            onChange={(e) => setFormData({ ...formData, projectScope: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50/60 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors cursor-pointer"
          >
            <option value="Novo projeto de segurança / automação">Novo projeto turn-key completo</option>
            <option value="Expansão / Modernização de sistema legado">Modernização de sistema legado existente</option>
            <option value="Substituição emergencial de equipamentos">Substituição de câmeras / controladoras</option>
            <option value="Estudo de viabilidade técnica / RFP">Estudo de viabilidade / Cotação para licitação</option>
            <option value="Outro objetivo operacional">Outro objetivo corporativo</option>
          </select>
        </div>

        <div>
          <label htmlFor="lead-message" className="block text-[11px] font-bold text-stone-700 uppercase tracking-wider mb-1">
            Detalhes do Ambiente (Opcional)
          </label>
          <textarea
            id="lead-message"
            rows={2}
            placeholder="Ex.: Planta industrial com 40 câmeras e 8 portas de acesso controlado..."
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full px-3.5 py-2.5 bg-stone-50/60 border border-stone-300 rounded-lg text-xs sm:text-sm text-stone-900 placeholder-stone-400 focus:outline-none focus:bg-white focus:border-emerald-700 focus:ring-1 focus:ring-emerald-700 transition-colors resize-none"
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full mt-2 py-3 px-5 rounded-lg bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-bold text-xs sm:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-2xs cursor-pointer disabled:opacity-60"
        >
          {loading ? (
            <span>Enviando solicitação...</span>
          ) : (
            <>
              <span>SOLICITAR CONTATO</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-stone-500">
        <Lock className="w-3 h-3 text-emerald-700 shrink-0" />
        <span>Dados confidenciais protegidos. Contato estritamente técnico de engenharia.</span>
      </div>
    </form>
  );
};
