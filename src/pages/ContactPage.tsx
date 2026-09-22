import React, { useState } from 'react';
import { companyData } from '../data/company';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  ShieldCheck,
} from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';
import { MotionReveal } from '../components/common/MotionReveal';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    whatsapp: '',
    email: '',
    cnpj: '',
    purpose: 'Empresa / Uso próprio',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <MotionReveal className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <Building2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Canais Corporativos</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Fale com a nossa equipe de engenharia
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Estamos prontos para atender sua demanda com precisão técnica, fornecimento direto e consultoria especializada.
          </p>
        </MotionReveal>
      </div>

      {/* Main Grid: Details / Map + Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Official corporate info */}
          <MotionReveal className="lg:col-span-5 space-y-8">
            {/* Contact info cards */}
            <div className="bg-slate-50 rounded-2xl p-6 sm:p-8 border border-slate-200/80 space-y-6">
              <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Dados Corporativos Oficiais</span>
              </h2>

              <div className="space-y-4 text-xs sm:text-sm text-slate-700">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-slate-900">{companyData.legalName}</strong>
                    <span>
                      {companyData.address.street}, Nº {companyData.address.number}<br />
                      {companyData.address.neighborhood} — {companyData.address.city} - {companyData.address.state}<br />
                      CEP: {companyData.address.zipCode}
                    </span>
                    <span className="block text-[11px] text-slate-500 mt-1 font-mono">
                      CNPJ: {companyData.cnpj}
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Central Telefônica</span>
                    <a href={`tel:${companyData.phoneRaw}`} className="font-bold text-slate-900 hover:text-emerald-700">
                      {companyData.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-200/60">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">E-mail Corporativo</span>
                    <a href={`mailto:${companyData.email}`} className="font-bold text-slate-900 hover:text-emerald-700">
                      {companyData.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-3 border-t border-slate-200/60">
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-emerald-600 flex-shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-500 block">Horário de Atendimento</span>
                    <span className="font-medium text-slate-900">{companyData.businessHours}</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-200/60">
                <a
                  href={`https://wa.me/${companyData.whatsappRaw}?text=Ol%C3%A1,%20gostaria%20de%20um%20atendimento%20t%C3%A9cnico%20da%20VS%20Tecnologia.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-xs transition-colors"
                >
                  <span>Iniciar Conversa no WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Visual Location Map Box */}
            <div className="rounded-2xl border border-slate-200 overflow-hidden bg-slate-100 p-4 relative">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-bold text-slate-800">Localização em Goiânia - GO</span>
                <span className="text-slate-500">Residencial Eli Forte</span>
              </div>
              <div className="h-48 rounded-xl overflow-hidden relative bg-slate-200 flex items-center justify-center">
                <img
                  src="https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80"
                  alt="Mapa de localização da VS Tecnologia"
                  className="w-full h-full object-cover filter contrast-125"
                />
                <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                  <div className="bg-white px-3 py-1.5 rounded-lg shadow-lg text-xs font-bold text-slate-900 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 fill-emerald-600" />
                    <span>VS Tecnologia e Automação</span>
                  </div>
                </div>
              </div>
              <p className="text-[11px] text-slate-500 mt-2 text-center">
                Atendimento presencial mediante agendamento prévio com a equipe de engenharia.
              </p>
            </div>
          </MotionReveal>

          {/* Right Column: Complete Corporate Form */}
          <MotionReveal delay={0.12} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900">
              Envie sua Mensagem ou Solicitação de Cotação
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 mb-8">
              Preencha o formulário abaixo com os detalhes da sua necessidade para que o especialista responsável retorne com a avaliação técnica.
            </p>

            {submitted ? (
              <div className="py-12 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900">
                  Mensagem Enviada com Sucesso!
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 max-w-md mx-auto">
                  Agradecemos seu contato. Nossa equipe técnica analisará sua demanda e retornará com brevidade.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-4 px-5 py-2.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-xs font-bold text-slate-700"
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Ex: João Silva"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Empresa *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Nome da sua empresa"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      E-mail corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="seu.nome@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(62) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      CNPJ
                    </label>
                    <input
                      type="text"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Finalidade
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none bg-white transition"
                    >
                      <option value="Empresa / Uso próprio">Empresa / Uso próprio</option>
                      <option value="Governo / Órgão público">Governo / Órgão público</option>
                      <option value="Construtora">Construtora</option>
                      <option value="Integrador">Integrador</option>
                      <option value="Revenda">Revenda</option>
                      <option value="Outro">Outro</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Mensagem ou Descrição do Projeto *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Conte sobre as necessidades da sua infraestrutura, prazos, número de pontos ou requisitos técnicos..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-xs sm:text-sm outline-none transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-colors"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Mensagem para Engenharia</span>
                  </button>
                  <p className="text-[11px] text-slate-400 text-center mt-3">
                    Ao enviar este formulário, você concorda com o tratamento de seus dados corporativos conforme a nossa Política de Privacidade.
                  </p>
                </div>
              </form>
            )}
          </MotionReveal>
        </div>
      </div>

      <div className="mt-20">
        <PreFooterCTA />
      </div>
    </main>
  );
};
