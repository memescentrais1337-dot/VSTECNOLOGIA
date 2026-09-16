import React, { useState, useMemo } from 'react';
import { productsCatalog, productCategories } from '../data/products';
import { representedBrands } from '../data/brands';
import { useNavigation } from '../context/NavigationContext';
import { Search, Filter, ArrowRight, ShieldCheck, FileText, CheckCircle2, SlidersHorizontal, X } from 'lucide-react';
import { PreFooterCTA } from '../components/PreFooterCTA';

export const ProductsPage: React.FC = () => {
  const { navigate, openLeadModalWithData } = useNavigation();

  // Filters state
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedBrand, setSelectedBrand] = useState<string>('all');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filtered products calculation
  const filteredProducts = useMemo(() => {
    return productsCatalog.filter((product) => {
      const matchQuery =
        searchTerm === '' ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.model.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.brand.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());

      const matchCategory =
        selectedCategory === 'all' || product.category === selectedCategory;

      const matchBrand =
        selectedBrand === 'all' || product.brand.toLowerCase() === selectedBrand.toLowerCase();

      return matchQuery && matchCategory && matchBrand;
    });
  }, [searchTerm, selectedCategory, selectedBrand]);

  const clearFilters = () => {
    setSearchTerm('');
    setSelectedCategory('all');
    setSelectedBrand('all');
  };

  const hasActiveFilters =
    searchTerm !== '' || selectedCategory !== 'all' || selectedBrand !== 'all';

  return (
    <main className="pt-28 pb-16 bg-white min-h-screen">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200/60 text-xs font-bold uppercase tracking-wider mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>Equipamentos Homologados B2B</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Catálogo Corporativo de Produtos
          </h1>
          <p className="mt-3 text-base text-slate-600">
            Hardware e software de nível empresarial com garantia oficial de fabricante, suporte de engenharia e fornecimento sob medida para o seu projeto.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Buscar por modelo, fabricante (ex: AXIS, CAME, Furukawa) ou palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-11 pr-4 py-3 rounded-xl border border-slate-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 text-sm outline-none transition bg-slate-50/50"
            />
          </div>

          {/* Mobile Filter Toggle */}
          <button
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            className="sm:hidden inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-700 text-sm font-semibold"
          >
            <SlidersHorizontal className="w-4 h-4 text-emerald-600" />
            <span>Filtros ({hasActiveFilters ? 'Ativos' : 'Todos'})</span>
          </button>
        </div>
      </div>

      {/* Main Grid: Sidebar Filters + Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Desktop Filters Sidebar */}
          <div className="hidden lg:block lg:col-span-3 space-y-6 bg-slate-50 p-6 rounded-2xl border border-slate-200/80 sticky top-28">
            <div className="flex items-center justify-between pb-3 border-b border-slate-200">
              <span className="text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-1.5">
                <Filter className="w-3.5 h-3.5 text-emerald-600" />
                <span>Filtros do Catálogo</span>
              </span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-xs text-emerald-700 hover:underline font-semibold"
                >
                  Limpar
                </button>
              )}
            </div>

            {/* Categories filter */}
            <div>
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Categorias
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                    selectedCategory === 'all'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  <span>Todas as categorias</span>
                  <span>{productsCatalog.length}</span>
                </button>
                {productCategories.filter(c => c !== 'Todas as Categorias').map((catName, idx) => {
                  const count = productsCatalog.filter((p) => p.category === catName).length;
                  const isSelected = selectedCategory === catName;
                  return (
                    <button
                      key={idx}
                      onClick={() => setSelectedCategory(catName)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-200/60'
                      }`}
                    >
                      <span className="truncate pr-2">{catName}</span>
                      <span className="text-[10px] opacity-80">{count}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Brands filter */}
            <div className="pt-4 border-t border-slate-200">
              <label className="block text-xs font-bold text-slate-800 mb-2">
                Fabricante Homologado
              </label>
              <div className="space-y-1">
                <button
                  onClick={() => setSelectedBrand('all')}
                  className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                    selectedBrand === 'all'
                      ? 'bg-emerald-600 text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-200/60'
                  }`}
                >
                  <span>Todos os fabricantes</span>
                </button>
                {representedBrands.map((brand) => {
                  const isSelected = selectedBrand.toLowerCase() === brand.name.toLowerCase();
                  return (
                    <button
                      key={brand.id}
                      onClick={() => setSelectedBrand(brand.name)}
                      className={`w-full text-left px-2.5 py-1.5 rounded-md text-xs transition-colors flex items-center justify-between ${
                        isSelected
                          ? 'bg-emerald-600 text-white font-bold'
                          : 'text-slate-600 hover:bg-slate-200/60'
                      }`}
                    >
                      <span className="truncate pr-2">{brand.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Mobile Filter Drawer */}
          {isMobileFilterOpen && (
            <div className="lg:hidden p-4 rounded-xl bg-slate-50 border border-slate-200 mb-6 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase">Filtrar por Categoria</span>
                <button onClick={() => setIsMobileFilterOpen(false)}>
                  <X className="w-4 h-4 text-slate-500" />
                </button>
              </div>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-white"
              >
                <option value="all">Todas as categorias</option>
                {productCategories.filter(c => c !== 'Todas as Categorias').map((c, idx) => (
                  <option key={idx} value={c}>{c}</option>
                ))}
              </select>

              <select
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="w-full p-2.5 rounded-lg border border-slate-300 text-xs bg-white"
              >
                <option value="all">Todos os fabricantes</option>
                {representedBrands.map((b) => (
                  <option key={b.id} value={b.name}>{b.name}</option>
                ))}
              </select>
            </div>
          )}

          {/* Products List Area */}
          <div className="lg:col-span-9">
            {/* Results count header */}
            <div className="flex items-center justify-between mb-6 pb-2 border-b border-slate-100 text-xs text-slate-500">
              <span>Mostrando <strong>{filteredProducts.length}</strong> equipamentos de engenharia</span>
              {hasActiveFilters && (
                <button
                  onClick={clearFilters}
                  className="text-emerald-700 font-semibold hover:underline"
                >
                  Limpar filtros
                </button>
              )}
            </div>

            {filteredProducts.length === 0 ? (
              <div className="p-12 text-center bg-slate-50 rounded-2xl border border-slate-200">
                <p className="text-base font-bold text-slate-700">Nenhum equipamento encontrado com os filtros selecionados.</p>
                <p className="text-xs text-slate-500 mt-1">
                  Experimente buscar por outros termos ou entre em contato com nossa equipe para consultar equipamentos sob demanda.
                </p>
                <button
                  onClick={clearFilters}
                  className="mt-4 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs font-semibold"
                >
                  Restaurar Catálogo
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <div
                    key={product.id}
                    id={`product-card-${product.id}`}
                    className="group bg-white rounded-2xl border border-slate-200/80 hover:border-emerald-500/50 overflow-hidden shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      {/* Image container */}
                      <div
                        onClick={() => navigate(`/produtos/${product.slug}`)}
                        className="cursor-pointer relative h-52 overflow-hidden bg-slate-50 p-4 flex items-center justify-center border-b border-slate-100"
                      >
                        <img
                          src={product.imageUrl}
                          alt={product.name}
                          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                          loading="lazy"
                        />
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs text-[10px] font-bold text-slate-700 px-2 py-0.5 rounded border border-slate-200">
                          {product.brand}
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-5">
                        <div className="flex items-center justify-between text-[11px] text-slate-400 font-mono mb-1">
                          <span>PN: {product.model}</span>
                          <span className="text-emerald-700 font-sans font-semibold">Oficial</span>
                        </div>

                        <h3
                          onClick={() => navigate(`/produtos/${product.slug}`)}
                          className="text-base font-bold text-slate-900 hover:text-emerald-700 cursor-pointer transition-colors line-clamp-1"
                        >
                          {product.name}
                        </h3>

                        <p className="text-xs text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                          {product.shortDescription}
                        </p>

                        {/* Top 2 Specs */}
                        <div className="mt-3 pt-3 border-t border-slate-100 space-y-1">
                          {product.features.slice(0, 2).map((feat, i) => (
                            <div key={i} className="flex items-start gap-1.5 text-[11px] text-slate-600">
                              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1 flex-shrink-0" />
                              <span className="line-clamp-1">{feat}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Card Actions (NO price, NO cart) */}
                    <div className="p-5 pt-0">
                      <div className="flex items-center gap-2 pt-3 border-t border-slate-100">
                        <button
                          onClick={() => navigate(`/produtos/${product.slug}`)}
                          className="flex-1 py-2 px-3 rounded-lg border border-slate-200 hover:bg-slate-50 text-slate-700 text-xs font-semibold text-center transition-colors"
                        >
                          Detalhes
                        </button>

                        <button
                          onClick={() => openLeadModalWithData({ purpose: 'Empresa / Uso próprio', projectSummary: `Cotação de equipamento: ${product.name} (${product.model})` })}
                          className="flex-1 py-2 px-3 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold text-center shadow-2xs transition-colors"
                        >
                          Cotação B2B
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="mt-20">
        <PreFooterCTA />
      </div>
    </main>
  );
};
