import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';
import { companyData } from '../data/company';

export const WhatsAppButton: React.FC = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  const whatsappUrl = `https://wa.me/${companyData.whatsappRaw}?text=Ol%C3%A1,%20gostaria%20de%20solicitar%20um%20atendimento%20t%C3%A9cnico%20da%20VS%20Tecnologia.`;

  return (
    <aside
      aria-label="Atendimento rápido WhatsApp"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2"
    >
      {/* Tooltip on desktop */}
      <div
        className={`hidden md:block transition-all duration-300 transform ${
          showTooltip ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2 pointer-events-none'
        } bg-slate-900 text-white text-xs font-semibold px-3 py-1.5 rounded-lg shadow-lg border border-slate-800 whitespace-nowrap`}
      >
        <span>Fale no WhatsApp da Engenharia</span>
      </div>

      <a
        id="floating-whatsapp-btn"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-emerald-600 hover:bg-emerald-500 active:bg-emerald-700 text-white rounded-full flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-emerald-400/50"
        aria-label="Abrir conversa no WhatsApp com a VS Tecnologia"
      >
        <MessageCircle className="w-7 h-7 fill-white/20 stroke-white" />
      </a>
    </aside>
  );
};
