import React, { useState } from 'react';
import { certificationsData } from '../data/certifications';
import { ShieldCheck, Award, Layers, CheckCircle2, FileCheck, ShieldAlert, Check, X, ExternalLink, Filter } from 'lucide-react';
import { MotionReveal, MotionStaggerContainer, MotionStaggerItem } from './common/MotionReveal';

export const CertificationsGrid: React.FC = () => {
  const [selectedCertId, setSelectedCertId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('all');

  const selectedCert = certificationsData.find((c) => c.id === selectedCertId);

  // Group categories for quick filters without losing any item
  const categories = [
    { id: 'all', label: 'Todas as Certificações' },
    { id: 'fabricantes', label: 'Fabricantes Globais' },
    { id: 'conformidade', label: 'Conformidade & NRs' },
  ];

  const filteredCerts = certificationsData.filter((cert) => {
    if (filterCategory === 'all') return true;
    if (filterCategory === 'conformidade') {
      return cert.id === 'nr-certifications' || cert.id === 'produtos-controlados';
    }
    if (filterCategory === 'fabricantes') {
      return cert.id !== 'nr-certifications' && cert.id !== 'produtos-controlados';
    }
    return true;
  });

  const getCertIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award':
        return <Award className="w-3.5 h-3.5" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-3.5 h-3.5" />;
      case 'Layers':
        return <Layers className="w-3.5 h-3.5" />;
      case 'CheckCircle2':
        return <CheckCircle2 className="w-3.5 h-3.5" />;
      case 'FileCheck':
        return <FileCheck className="w-3.5 h-3.5" />;
      default:
        return <ShieldCheck className="w-3.5 h-3.5" />;
    }
  };

  return (
    <section
      id="certifications-section"
      className="py-7 lg:py-9 bg-white border-b border-stone-200"
      aria-label="Certificações e Homologações"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header & Filter Controls */}
        <MotionReveal className="flex flex-col md:flex-row md:items-end justify-between mb-5 sm:mb-6 gap-3.5">
          <div className="max-w-2xl">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800">
              Capacitação Técnica & Homologação
            </span>
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold text-stone-900 tracking-tight mt-0.5">
              Certificações e conformidade técnica
            </h2>
            <p className="mt-1 text-xs sm:text-sm text-stone-600">
              Engenharia certificada diretamente pelos centros de treinamento de fabricantes globais e órgãos reguladores vigentes.
            </p>
          </div>

          {/* Quick Filter Pills - Compact */}
          <div className="flex items-center gap-1.5 p-1 bg-stone-100 rounded-md border border-stone-200 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setFilterCategory(cat.id)}
                className={`px-2.5 py-1 text-[11px] font-medium rounded transition-colors ${
                  filterCategory === cat.id
                    ? 'bg-white text-stone-900 font-semibold shadow-2xs'
                    : 'text-stone-600 hover:text-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </MotionReveal>

        {/* Certificate Cards Grid */}
        <MotionStaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3.5">
          {filteredCerts.map((cert) => {
            return (
              <MotionStaggerItem key={cert.id}>
                <div
                  onClick={() => setSelectedCertId(cert.id)}
                  className="group relative bg-white border border-stone-200 hover:border-emerald-600/70 rounded-lg p-3.5 transition-all duration-200 hover:shadow-sm cursor-pointer flex flex-col justify-between h-full"
                >
                  <div>
                    {/* Top Row: Issuer & Badge */}
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <span className="inline-flex items-center gap-1 text-[10px] font-mono font-semibold uppercase text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded">
                        {getCertIcon(cert.iconName)}
                        <span className="truncate max-w-[130px]">{cert.issuer}</span>
                      </span>
                      <span className="text-[9px] font-medium text-stone-500 bg-stone-100 border border-stone-200/80 px-1.5 py-0.5 rounded whitespace-nowrap">
                        {cert.badgeText}
                      </span>
                    </div>

                    {/* Certificate Image Thumbnail Preview */}
                    <div className="relative h-20 w-full rounded-md overflow-hidden bg-stone-100 border border-stone-200/80 mb-2.5">
                      <img
                        src={cert.imageUrl}
                        alt={`Certificação ${cert.name} - ${cert.issuer}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                        decoding="async"
                        width="300"
                        height="80"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-stone-900/10 group-hover:bg-transparent transition-colors" />
                      <div className="absolute bottom-1 right-1.5 opacity-0 group-hover:opacity-100 transition-opacity bg-stone-900/80 text-white text-[9px] px-1.5 py-0.5 rounded font-mono">
                        Expandir
                      </div>
                    </div>

                    {/* Name & Short Description */}
                    <h3 className="text-xs font-semibold text-stone-900 leading-snug group-hover:text-emerald-900 transition-colors">
                      {cert.name}
                    </h3>

                    <p className="mt-1 text-[11px] text-stone-600 leading-relaxed line-clamp-2">
                      {cert.description}
                    </p>

                    {/* Specific Badges for NR */}
                    {cert.id === 'nr-certifications' && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {['NR-6', 'NR-10', 'NR-12', 'NR-35'].map((nr) => (
                          <span
                            key={nr}
                            className="px-1.5 py-0.5 rounded text-[9px] font-mono font-semibold bg-stone-100 text-stone-700 border border-stone-200"
                          >
                            {nr}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Card Footer: Category & Status */}
                  <div className="pt-2.5 mt-2.5 border-t border-stone-100 flex items-center justify-between text-[10px] text-stone-500">
                    <span className="truncate max-w-[150px]">{cert.category}</span>
                    <span className="inline-flex items-center gap-1 text-emerald-700 font-medium">
                      <Check className="w-3 h-3" />
                      <span className="font-mono text-[9px]">Vigente</span>
                    </span>
                  </div>
                </div>
              </MotionStaggerItem>
            );
          })}
        </MotionStaggerContainer>

        {/* Modal de Detalhes em Alta Resolução da Certificação */}
        {selectedCert && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-950/60 backdrop-blur-xs animate-in fade-in duration-150"
            onClick={() => setSelectedCertId(null)}
          >
            <div
              className="bg-white rounded-xl border border-stone-200 shadow-xl max-w-lg w-full overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative h-52 sm:h-60 bg-stone-100 border-b border-stone-200">
                <img
                  src={selectedCert.imageUrl}
                  alt={selectedCert.name}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedCertId(null)}
                  className="absolute top-2.5 right-2.5 w-7 h-7 rounded-full bg-stone-900/80 hover:bg-stone-900 text-white flex items-center justify-center transition-colors shadow-2xs"
                  aria-label="Fechar"
                >
                  <X className="w-4 h-4" />
                </button>
                <div className="absolute bottom-2 left-3">
                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-emerald-700 text-white font-semibold">
                    {selectedCert.badgeText}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-5 space-y-2.5">
                <div>
                  <span className="text-[10px] font-mono text-emerald-800 uppercase font-semibold">
                    {selectedCert.issuer}
                  </span>
                  <h3 className="text-base font-semibold text-stone-900 mt-0.5">
                    {selectedCert.name}
                  </h3>
                  <span className="text-[11px] text-stone-500 block mt-0.5">
                    Escopo: {selectedCert.category}
                  </span>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed pt-2 border-t border-stone-100">
                  {selectedCert.description}
                </p>

                {selectedCert.id === 'nr-certifications' && (
                  <div className="pt-2">
                    <h4 className="text-[10px] font-semibold text-stone-900 uppercase tracking-wider mb-1.5">
                      Normas Homologadas pela Engenharia VS:
                    </h4>
                    <div className="grid grid-cols-2 gap-1.5 text-[11px] text-stone-700">
                      <span className="bg-stone-50 p-1.5 rounded border border-stone-200"><strong>NR-6:</strong> EPIs Adequados</span>
                      <span className="bg-stone-50 p-1.5 rounded border border-stone-200"><strong>NR-10:</strong> Instalações Elétricas</span>
                      <span className="bg-stone-50 p-1.5 rounded border border-stone-200"><strong>NR-12:</strong> Segurança em Máquinas</span>
                      <span className="bg-stone-50 p-1.5 rounded border border-stone-200"><strong>NR-35:</strong> Trabalho em Altura</span>
                    </div>
                  </div>
                )}

                <div className="pt-3 border-t border-stone-100 flex items-center justify-between">
                  <span className="text-[11px] text-emerald-700 font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Corpo técnico credenciado e vigente</span>
                  </span>
                  <button
                    onClick={() => setSelectedCertId(null)}
                    className="px-3 py-1.5 rounded bg-stone-100 hover:bg-stone-200 text-xs font-medium text-stone-800 transition-colors"
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
