import React, { useState } from 'react';
import { Phone, Mail, CheckCircle2, Send } from 'lucide-react';
import { companyData } from '../data/company';
import { MotionReveal } from './common/MotionReveal';

const directorPhoto = '/images/institucional/diretor-especialista.png';

export const SpecialistCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    cnpj: '',
    email: '',
    purpose: 'Empresa / Uso próprio',
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="specialist-cta-section"
      className="py-7 lg:py-9 bg-[#F7F7F5] border-b border-stone-200"
      aria-label="Atendimento com Especialista"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 lg:gap-7 items-start">
          {/* Left Column: Context & Specialist Profile Card */}
          <MotionReveal className="lg:col-span-5 space-y-4">
            <div>
              <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
                Engenharia Consultiva
              </span>
              <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight mt-1">
                Vamos planejar seu próximo projeto.
              </h2>
              <p className="mt-1.5 text-xs sm:text-sm text-stone-600 leading-relaxed">
                Converse diretamente com nosso corpo de engenharia. Avaliamos a viabilidade da sua planta, normas cabíveis e a arquitetura mais eficiente.
              </p>
            </div>

            {/* Specialist Profile Card - Compact */}
            <div className="bg-white rounded-lg p-4 sm:p-4.5 border border-stone-200 shadow-2xs">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-4">
                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-stone-100 border border-stone-200/90 shadow-2xs flex-shrink-0 ring-2 ring-stone-50">
                  <img
                    src={directorPhoto}
                    alt={`Foto de perfil de ${companyData.engineeringDirector.name}`}
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    decoding="async"
                    width="80"
                    height="80"
                  />
                </div>
                <div className="text-center sm:text-left flex-1 min-w-0">
                  <span className="inline-block text-[10px] font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded uppercase tracking-wider mb-0.5">
                    {companyData.engineeringDirector.role}
                  </span>
                  <h3 className="text-sm sm:text-base font-semibold text-stone-900 tracking-tight">
                    {companyData.engineeringDirector.name}
                  </h3>
                  <p className="text-[11px] text-stone-500 font-mono mt-0.5">
                    Responsável Técnico • CREA-GO 26.848
                  </p>

                  <div className="mt-2.5 pt-2.5 border-t border-stone-100 space-y-1 text-[11px] text-stone-700">
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <Phone className="w-3 h-3 text-stone-500 flex-shrink-0" />
                      <span>Central Técnica: <strong className="text-stone-900">{companyData.engineeringDirector.phone}</strong></span>
                    </div>
                    <div className="flex items-center justify-center sm:justify-start gap-1.5">
                      <Mail className="w-3 h-3 text-stone-500 flex-shrink-0" />
                      <span>E-mail: <strong className="text-stone-900">{companyData.engineeringDirector.email}</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-3.5 pt-3 border-t border-stone-100">
                <a
                  href={`https://wa.me/${companyData.whatsappRaw}?text=Ol%C3%A1,%20gostaria%20de%20conversar%20com%20a%20engenharia%20da%20VS%20Tecnologia.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-1.5 py-2 px-3.5 rounded-md bg-stone-900 hover:bg-stone-800 active:bg-stone-950 text-white font-medium text-xs transition-colors shadow-2xs"
                >
                  <span>Atendimento via WhatsApp</span>
                </a>
              </div>
            </div>
          </MotionReveal>

          {/* Right Column: Consultation Form - Compact */}
          <MotionReveal delay={0.14} className="lg:col-span-7 bg-white rounded-md p-4 sm:p-5 border border-stone-200 shadow-2xs">
            <h3 className="text-base sm:text-lg font-semibold text-stone-900">
              Solicitar Contato Técnico
            </h3>
            <p className="text-[11px] text-stone-500 mt-0.5 mb-4">
              Preencha os dados da sua empresa para receber uma avaliação técnica de nossa equipe.
            </p>

            {submitted ? (
              <div className="py-8 text-center space-y-2.5">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-800 mx-auto flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-semibold text-stone-900">
                  Solicitação enviada com sucesso
                </h4>
                <p className="text-xs text-stone-600 max-w-md mx-auto">
                  Nossa equipe de engenharia entrará em contato em horário comercial através do telefone e e-mail informados.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-3 px-3.5 py-1.5 rounded-md bg-stone-100 hover:bg-stone-200 text-xs font-medium text-stone-700"
                >
                  Enviar nova solicitação
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">
                      Nome completo *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Seu nome"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">
                      Empresa
                    </label>
                    <input
                      type="text"
                      placeholder="Razão social ou nome fantasia"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none transition bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">
                      E-mail corporativo *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="nome@empresa.com.br"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">
                      Telefone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="(62) 99999-9999"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none transition bg-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">
                      CNPJ (opcional)
                    </label>
                    <input
                      type="text"
                      placeholder="00.000.000/0000-00"
                      value={formData.cnpj}
                      onChange={(e) => setFormData({ ...formData, cnpj: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none transition bg-white"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-medium text-stone-700 mb-1">
                      Finalidade
                    </label>
                    <select
                      value={formData.purpose}
                      onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                      className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none bg-white transition"
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
                  <label className="block text-[11px] font-medium text-stone-700 mb-1">
                    Descrição do projeto
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Descreva a demanda, local de instalação, prazos ou especificações desejadas..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-2.5 py-1.5 rounded-md border border-stone-300 focus:border-stone-600 text-xs outline-none transition resize-none bg-white"
                  />
                </div>

                <div className="pt-1.5">
                  <button
                    type="submit"
                    className="w-full py-2.5 rounded-md bg-emerald-700 hover:bg-emerald-800 active:bg-emerald-900 text-white font-medium text-xs sm:text-sm flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                  >
                    <Send className="w-3.5 h-3.5" />
                    <span>Enviar solicitação técnica</span>
                  </button>
                  <p className="text-[10px] text-stone-500 text-center mt-2">
                    Tratamento de dados em conformidade com as diretrizes da LGPD.
                  </p>
                </div>
              </form>
            )}
          </MotionReveal>
        </div>
      </div>
    </section>
  );
};
