import React from 'react';
import { useNavigation } from '../context/NavigationContext';
import { serviceCategories } from '../data/services';
import { productsCatalog } from '../data/products';
import { representedBrands } from '../data/brands';
import { ArrowLeft, ArrowRight, ShieldCheck, CheckCircle2, Package, Layers } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const SolutionDetailPage: React.FC = () => {
  const { routeParams, navigate, openLeadModalWithData } = useNavigation();
  const slug = routeParams.slug;

  const solution = serviceCategories.find((s) => s.slug === slug) || serviceCategories[0];

  // Related products matching category
  const relatedProducts = productsCatalog.filter(
    (p) =>
      p.category.toLowerCase().includes(solution.title.toLowerCase()) ||
      solution.title.toLowerCase().includes(p.category.toLowerCase()) ||
      p.application.some((t) => solution.services.some((s) => s.toLowerCase().includes(t.toLowerCase())))
  ).slice(0, 3);

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Breadcrumb navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <button
          onClick={() => navigate('/solucoes')}
          className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-slate-900 transition-colors"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Voltar para todas as Soluções</span>
        </button>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
              <span>Vertical Técnica {solution.number}</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              {solution.title}
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              {solution.description}
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: `Projeto executivo para ${solution.title}` })}
                className="px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold shadow-xs transition-colors"
              >
                Solicitar Estudo de Viabilidade
              </button>
              <button
                onClick={() => navigate('/produtos')}
                className="px-6 py-3.5 rounded-lg border border-slate-300 hover:border-slate-400 text-slate-800 text-xs sm:text-sm font-semibold transition-colors"
              >
                Ver Equipamentos Relacionados
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl overflow-hidden shadow-xl border border-slate-200">
              <img
                src={solution.imageUrl}
                alt={solution.title}
                className="w-full h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Detailed Scope of Engineering */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-8">
          Escopo de Engenharia e Serviços Inclusos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {solution.services.map((item, idx) => (
            <div
              key={idx}
              className="p-5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3.5"
            >
              <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center flex-shrink-0">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-slate-900">{item}</h3>
                <p className="text-xs text-slate-500 mt-1">
                  Especificação técnica, instalação conforme normas vigentes, configuração de software e comissionamento com emissão de ART.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 border-t border-slate-100">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold text-slate-900">
                Equipamentos Homologados para esta Solução
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Hardware profissional das principais marcas mundiais integradas pela VS.
              </p>
            </div>
            <button
              onClick={() => navigate('/produtos')}
              className="text-xs sm:text-sm font-bold text-emerald-700 hover:underline inline-flex items-center gap-1"
            >
              <span>Ver catálogo completo</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((prod) => (
              <div
                key={prod.id}
                onClick={() => navigate(`/produtos/${prod.slug}`)}
                className="cursor-pointer bg-white rounded-xl border border-slate-200 hover:border-emerald-500/50 p-5 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="h-40 rounded-lg bg-slate-50 overflow-hidden mb-4 border border-slate-100">
                    <img
                      src={prod.imageUrl}
                      alt={prod.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase">
                    {prod.brand}
                  </span>
                  <h3 className="text-sm font-bold text-slate-900 mt-1">
                    {prod.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                    {prod.shortDescription}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-emerald-700">
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
