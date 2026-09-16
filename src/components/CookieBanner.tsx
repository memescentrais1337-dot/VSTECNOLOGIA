import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';

const COOKIE_CONSENT_KEY = 'vs_cookies_consent';

export const CookieBanner: React.FC = () => {
  const { navigate } = useNavigation();
  const [show, setShow] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [analyticsAllowed, setAnalyticsAllowed] = useState(true);

  useEffect(() => {
    try {
      const consent = localStorage.getItem(COOKIE_CONSENT_KEY);
      if (!consent) {
        setShow(true);
      }
    } catch {
      // Ignore
    }
  }, []);

  const handleAcceptAll = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: true, timestamp: Date.now() }));
    } catch {}
    setShow(false);
  };

  const handleRejectNonEssential = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: false, timestamp: Date.now() }));
    } catch {}
    setShow(false);
  };

  const handleSaveCustom = () => {
    try {
      localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify({ necessary: true, analytics: analyticsAllowed, timestamp: Date.now() }));
    } catch {}
    setShow(false);
  };

  if (!show) return null;

  return (
    <aside
      aria-label="Consentimento de Cookies LGPD"
      id="lgpd-cookie-banner"
      className="fixed bottom-0 left-0 right-0 z-40 p-4 sm:p-6 bg-slate-950/95 text-white border-t border-slate-800 backdrop-blur-md shadow-2xl"
    >
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
        <div className="max-w-3xl space-y-2">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Privacidade de Dados & LGPD
            </span>
          </div>
          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
            Utilizamos cookies essenciais e analíticos para assegurar o funcionamento técnico de nossas soluções B2B, aprimorar a sua experiência de navegação e atender aos parâmetros da Lei Geral de Proteção de Dados (LGPD).
          </p>
          <div className="flex items-center gap-3 text-xs">
            <button
              onClick={() => navigate('/politica-de-cookies')}
              className="text-emerald-400 hover:underline"
            >
              Ler Política de Cookies
            </button>
            <span className="text-slate-600">•</span>
            <button
              onClick={() => navigate('/politica-de-privacidade')}
              className="text-emerald-400 hover:underline"
            >
              Política de Privacidade
            </button>
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto justify-end">
          {showPreferences ? (
            <div className="flex items-center gap-3 w-full lg:w-auto justify-end">
              <label className="flex items-center gap-2 text-xs text-slate-300 cursor-pointer">
                <input
                  type="checkbox"
                  checked={analyticsAllowed}
                  onChange={(e) => setAnalyticsAllowed(e.target.checked)}
                  className="rounded border-slate-700 text-emerald-600 focus:ring-emerald-500"
                />
                <span>Cookies de Performance</span>
              </label>
              <button
                onClick={handleSaveCustom}
                className="px-4 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-colors"
              >
                Salvar Preferências
              </button>
            </div>
          ) : (
            <>
              <button
                onClick={() => setShowPreferences(true)}
                className="px-3.5 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-semibold transition-colors"
              >
                Personalizar
              </button>
              <button
                onClick={handleRejectNonEssential}
                className="px-3.5 py-2 rounded-lg border border-slate-700 hover:border-slate-500 text-slate-300 text-xs font-semibold transition-colors"
              >
                Recusar Não Essenciais
              </button>
              <button
                onClick={handleAcceptAll}
                className="px-5 py-2 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold shadow-xs transition-colors"
              >
                Aceitar Todos
              </button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
};
