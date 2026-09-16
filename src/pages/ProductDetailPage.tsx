import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { productsCatalog } from '../data/products';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, FileText, Cpu, Download } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const ProductDetailPage: React.FC = () => {
  const { routeParams, navigate, openLeadModalWithData } = useNavigation();
  const slug = routeParams.slug;

  const product = productsCatalog.find((p) => p.slug === slug) || productsCatalog[0];

  const relatedProducts = productsCatalog
    .filter((p) => p.id !== product.id && (p.brand === product.brand || p.category === product.category))
    .slice(0, 3);

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Breadcrumb navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <nav className="flex items-center gap-2 text-xs text-slate-500 flex-wrap" aria-label="Breadcrumb">
          <button onClick={() => navigate('/')} className="hover:text-slate-900">
            Início
          </button>
          <span>/</span>
          <button onClick={() => navigate('/produtos')} className="hover:text-slate-900">
            Produtos
          </button>
          <span>/</span>
          <span className="text-slate-600 font-medium">{product.category}</span>
          <span>/</span>
          <span className="text-slate-900 font-bold truncate max-w-xs">{product.name}</span>
        </nav>
      </div>

      {/* Main Product Info & Visuals */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Product Image Stage */}
          <div className="lg:col-span-6 bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200/80 flex items-center justify-center relative">
            <img
              src={product.imageUrl}
              alt={product.name}
              className="max-h-96 w-auto object-contain transition-transform duration-300 hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-xs text-xs font-bold text-slate-800 px-3 py-1 rounded-md border border-slate-200">
              Fabricante: {product.brand}
            </div>
            <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-800 text-xs font-bold px-3 py-1 rounded-md border border-emerald-200">
              Homologado no Brasil
            </div>
          </div>

          {/* Product Data */}
          <div className="lg:col-span-6 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-slate-500 mb-2">
                <span>Part Number / Modelo: <strong className="text-slate-900">{product.model}</strong></span>
                <span>•</span>
                <span>Garantia de Fábrica</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
                {product.name}
              </h1>

              <p className="mt-4 text-base text-slate-600 leading-relaxed">
                {product.shortDescription}
              </p>
            </div>

            {/* Main features highlights */}
            <div className="pt-4 border-t border-slate-100">
              <h2 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
                Destaques Tecnológicos
              </h2>
              <ul className="space-y-2">
                {product.features.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* B2B CTAs (No ecommerce) */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() =>
                  openLeadModalWithData({
                    purpose: 'Empresa / Uso próprio',
                    projectSummary: `Solicitação de cotação para o equipamento ${product.name} (Part Number: ${product.model})`,
                  })
                }
                className="flex-1 py-3.5 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-md transition-colors text-center"
              >
                Solicitar Cotação deste Produto
              </button>

              <button
                onClick={() =>
                  openLeadModalWithData({
                    purpose: 'Empresa / Uso próprio',
                    projectSummary: `Dúvida técnica de engenharia sobre ${product.name}`,
                  })
                }
                className="py-3.5 px-6 rounded-xl border border-slate-300 hover:border-slate-400 text-slate-800 font-semibold text-sm transition-colors text-center"
              >
                Falar com Especialista
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Specifications Table */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
        <div className="max-w-3xl">
          <h2 className="text-xl font-bold text-slate-900 mb-6">
            Especificações Técnicas
          </h2>

          <div className="bg-slate-50 rounded-2xl border border-slate-200/80 overflow-hidden divide-y divide-slate-200/80">
            {Object.entries(product.specs || {}).map(([key, val], idx) => (
              <div key={idx} className="p-4 sm:px-6 flex flex-col sm:flex-row sm:items-center justify-between text-xs sm:text-sm">
                <span className="font-semibold text-slate-600">{key}</span>
                <span className="text-slate-900 font-medium mt-1 sm:mt-0 sm:text-right">{val}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Related products */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">
            Produtos Relacionados
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <div
                key={rel.id}
                onClick={() => navigate(`/produtos/${rel.slug}`)}
                className="cursor-pointer bg-white rounded-xl border border-slate-200 hover:border-emerald-500/50 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-44 rounded-lg bg-slate-50 flex items-center justify-center p-4 mb-3 border border-slate-100">
                    <img src={rel.imageUrl} alt={rel.name} className="max-h-full object-contain" />
                  </div>
                  <span className="text-[10px] font-bold text-emerald-700 uppercase">{rel.brand}</span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">{rel.name}</h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.shortDescription}</p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-emerald-700">
                  <span>Ver especificações</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mt-16">
        <PreFooterCTA />
      </div>
    </main>
  );
};
