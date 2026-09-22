import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { companyData } from '../data/company';
import { MotionReveal } from './common/MotionReveal';

const footerLogo = '/images/institucional/logo-footer.jpg';
import {
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Instagram,
  Youtube,
  ShieldCheck,
} from 'lucide-react';

export const Footer: React.FC = () => {
  const { navigate } = useNavigation();

  return (
    <footer id="corporate-footer" className="bg-stone-950 text-stone-400 text-xs border-t border-stone-800">
      {/* Institutional Credentials Strip */}
      <MotionReveal className="border-b border-stone-800/80 py-6 bg-stone-900/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-stone-300 font-medium">
              <ShieldCheck className="w-4 h-4 text-emerald-500" />
              <span>Conformidade técnica e registro profissional:</span>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-stone-300 text-xs font-mono">
              <span>CREA-GO Nº 26.848</span>
              <span className="text-stone-600">•</span>
              <span>Parcerias Homologadas de Fábrica</span>
              <span className="text-stone-600">•</span>
              <span>Projetos com ART</span>
            </div>
          </div>
        </div>
      </MotionReveal>

      {/* Main 5 Columns */}
      <MotionReveal delay={0.08} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
          {/* Column 1: Logo & Company Identification */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-md overflow-hidden flex items-center justify-center bg-stone-900 border border-stone-800">
                <img
                  src={footerLogo}
                  alt="Logo VS Tecnologia"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                  decoding="async"
                  width="32"
                  height="32"
                />
              </div>
              <div>
                <span className="text-white font-semibold text-sm block leading-tight">
                  VS Tecnologia
                </span>
                <span className="text-[10px] text-stone-400 uppercase tracking-wider block">
                  Engenharia e Automação
                </span>
              </div>
            </div>

            <p className="text-stone-400 text-xs leading-relaxed">
              Desenvolvimento e integração de soluções em segurança eletrônica, telecomunicações e infraestrutura para operações corporativas.
            </p>

            <div className="pt-2 flex items-center gap-2.5">
              {companyData.social.linkedin && (
                <a
                  href={companyData.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-stone-900 border border-stone-800 hover:border-stone-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="LinkedIn da VS Tecnologia"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
              {companyData.social.instagram && (
                <a
                  href={companyData.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-stone-900 border border-stone-800 hover:border-stone-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="Instagram da VS Tecnologia"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}
              {companyData.social.youtube && (
                <a
                  href={companyData.social.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-md bg-stone-900 border border-stone-800 hover:border-stone-600 hover:text-white flex items-center justify-center transition-colors"
                  aria-label="YouTube da VS Tecnologia"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>

          {/* Column 2: Empresa */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Empresa
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Página Inicial
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/quem-somos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Quem Somos & Engenharia
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/projetos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Projetos e Cases Reais
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/contato')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Fale com Nossos Especialistas
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Soluções */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Soluções por Fabricante
            </h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/solucoes/hanwha')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Hanwha Vision AI
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/solucoes/avigilon')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Avigilon Unity & Analytics
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/solucoes/axis')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Axis Connected Security
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/solucoes/pelco')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Pelco VideoXpert VMS
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/solucoes/tyco')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Tyco / iSTAR Ultra G2
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Produtos */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Equipamentos e Linhas
            </h4>
            <ul className="space-y-2.5">
              <li>
                <button
                  onClick={() => navigate('/produtos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Câmeras e Sistemas de Vídeo
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/produtos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Controle de Acesso Biométrico
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/produtos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Switches e Redes Industriais
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/produtos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Cancelas e Catracas CAME
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/produtos')}
                  className="hover:text-stone-200 transition-colors"
                >
                  Software VMS Unificado
                </button>
              </li>
            </ul>
          </div>

          {/* Column 5: Dados Corporativos Oficiais */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-4">
              Matriz Corporativa
            </h4>
            <div className="space-y-2.5 text-stone-400">
              <p className="font-medium text-stone-200">
                {companyData.legalName}
              </p>
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-stone-500 mt-0.5 flex-shrink-0" />
                <span>
                  {companyData.address.street}, Nº {companyData.address.number}<br />
                  {companyData.address.neighborhood} — {companyData.address.city} - {companyData.address.state}<br />
                  CEP {companyData.address.zipCode}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-stone-500 flex-shrink-0" />
                <a href={`tel:${companyData.phoneRaw}`} className="hover:text-white">
                  {companyData.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-stone-500 flex-shrink-0" />
                <a href={`mailto:${companyData.email}`} className="hover:text-white truncate">
                  {companyData.email}
                </a>
              </div>
              <p className="text-[11px] text-stone-500 pt-1 font-mono">
                CNPJ: {companyData.cnpj}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Legal bar */}
        <div className="mt-12 pt-8 border-t border-stone-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px]">
          <p className="text-stone-500 text-center sm:text-left">
            © {new Date().getFullYear()} {companyData.tradeName}. Todos os direitos reservados.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 text-stone-400">
            <button
              onClick={() => navigate('/politica-de-privacidade')}
              className="hover:text-stone-200 transition-colors"
            >
              Política de Privacidade
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/politica-de-cookies')}
              className="hover:text-stone-200 transition-colors"
            >
              Política de Cookies
            </button>
            <span>•</span>
            <button
              onClick={() => navigate('/termos-de-uso')}
              className="hover:text-stone-200 transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </MotionReveal>
    </footer>
  );
};
