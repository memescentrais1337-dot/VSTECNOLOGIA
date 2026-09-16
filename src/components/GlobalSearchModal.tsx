import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Search, X, Package, ShieldCheck, Layers, FileText, ArrowRight } from 'lucide-react';
import { useNavigation } from '../context/NavigationContext';
import { productsCatalog } from '../data/products';
import { serviceCategories } from '../data/services';
import { representedBrands } from '../data/brands';
import { projectsData } from '../data/projects';

export const GlobalSearchModal: React.FC = () => {
  const { isSearchOpen, setIsSearchOpen, navigate } = useNavigation();
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input when opened
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    } else {
      setQuery('');
    }
  }, [isSearchOpen]);

  // Global Ctrl+K / Cmd+K shortcut
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setIsSearchOpen(!isSearchOpen);
      }
      if (e.key === 'Escape' && isSearchOpen) {
        setIsSearchOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isSearchOpen, setIsSearchOpen]);

  const searchResults = useMemo(() => {
    const clean = query.trim().toLowerCase();
    if (!clean) return { products: [], brands: [], services: [], projects: [] };

    const products = productsCatalog.filter(
      (p) =>
        p.name.toLowerCase().includes(clean) ||
        p.model.toLowerCase().includes(clean) ||
        p.brand.toLowerCase().includes(clean) ||
        p.category.toLowerCase().includes(clean) ||
        p.shortDescription.toLowerCase().includes(clean)
    ).slice(0, 5);

    const brands = representedBrands.filter(
      (b) =>
        b.name.toLowerCase().includes(clean) ||
        b.category.toLowerCase().includes(clean)
    ).slice(0, 4);

    const services = serviceCategories.filter(
      (s) =>
        s.title.toLowerCase().includes(clean) ||
        s.subtitle.toLowerCase().includes(clean) ||
        s.services.some((item) => item.toLowerCase().includes(clean))
    ).slice(0, 3);

    const projects = projectsData.filter(
      (pr) =>
        pr.title.toLowerCase().includes(clean) ||
        pr.client.toLowerCase().includes(clean) ||
        pr.segment.toLowerCase().includes(clean)
    ).slice(0, 3);

    return { products, brands, services, projects };
  }, [query]);

  const hasResults =
    searchResults.products.length > 0 ||
    searchResults.brands.length > 0 ||
    searchResults.services.length > 0 ||
    searchResults.projects.length > 0;

  const handleSelect = (url: string) => {
    navigate(url);
    setIsSearchOpen(false);
  };

  if (!isSearchOpen) return null;

  return (
    <div
      id="global-search-modal-overlay"
      className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-slate-950/70 backdrop-blur-xs animate-in fade-in"
      onClick={() => setIsSearchOpen(false)}
      role="dialog"
      aria-modal="true"
      aria-labelledby="global-search-input"
    >
      <div
        className="w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input bar */}
        <div className="p-4 border-b border-slate-200 flex items-center gap-3 bg-slate-50/50">
          <Search className="w-5 h-5 text-slate-400 flex-shrink-0" />
          <input
            ref={inputRef}
            id="global-search-input"
            type="text"
            placeholder="Buscar por produto, modelo, fabricante, solução ou projeto..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-transparent text-sm sm:text-base text-slate-900 outline-none placeholder:text-slate-400"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-md"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <button
            onClick={() => setIsSearchOpen(false)}
            className="text-xs font-semibold text-slate-500 hover:text-slate-900 px-2 py-1 rounded bg-slate-200/60"
          >
            ESC
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 overflow-y-auto space-y-5">
          {!query ? (
            <div className="py-8 text-center text-slate-400 space-y-2">
              <Search className="w-8 h-8 mx-auto text-slate-300" />
              <p className="text-xs sm:text-sm">
                Digite termos como <strong className="text-slate-600">AXIS</strong>, <strong className="text-slate-600">CFTV</strong>, <strong className="text-slate-600">Cisco</strong>, <strong className="text-slate-600">CAME</strong> ou <strong className="text-slate-600">EDP</strong>.
              </p>
            </div>
          ) : !hasResults ? (
            <div className="py-10 text-center text-slate-500">
              <p className="text-sm font-semibold text-slate-700">Nenhum resultado encontrado para "{query}"</p>
              <p className="text-xs text-slate-400 mt-1">
                Tente buscar pelo nome do fabricante ou navegue pelo nosso catálogo completo.
              </p>
              <button
                onClick={() => handleSelect('/produtos')}
                className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 hover:underline"
              >
                <span>Ver catálogo completo de produtos</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          ) : (
            <>
              {/* Products match */}
              {searchResults.products.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Package className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Produtos & Equipamentos Homologados ({searchResults.products.length})</span>
                  </div>
                  <div className="space-y-1">
                    {searchResults.products.map((p) => (
                      <div
                        key={p.id}
                        onClick={() => handleSelect(`/produtos/${p.slug}`)}
                        className="p-2.5 rounded-lg hover:bg-slate-100/80 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-900">{p.name}</span>
                            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-slate-200 text-slate-700">
                              {p.model}
                            </span>
                          </div>
                          <span className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            {p.brand} • {p.category}
                          </span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Brands match */}
              {searchResults.brands.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Fabricantes Homologados</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {searchResults.brands.map((b) => (
                      <div
                        key={b.id}
                        onClick={() => handleSelect('/produtos')}
                        className="p-2.5 rounded-lg border border-slate-200 hover:border-emerald-500/50 hover:bg-slate-50 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">{b.name}</span>
                          <span className="text-[10px] text-slate-500 block">{b.category}</span>
                        </div>
                        <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">
                          Oficial
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Services match */}
              {searchResults.services.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <Layers className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Soluções & Engenharia</span>
                  </div>
                  <div className="space-y-1">
                    {searchResults.services.map((s) => (
                      <div
                        key={s.id}
                        onClick={() => handleSelect(`/solucoes/${s.slug}`)}
                        className="p-2.5 rounded-lg hover:bg-slate-100/80 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">{s.title}</span>
                          <span className="text-[11px] text-slate-500 block">{s.subtitle}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Projects match */}
              {searchResults.projects.length > 0 && (
                <div>
                  <div className="text-[11px] font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1.5 mb-2">
                    <FileText className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Cases & Projetos Executados</span>
                  </div>
                  <div className="space-y-1">
                    {searchResults.projects.map((pr) => (
                      <div
                        key={pr.id}
                        onClick={() => handleSelect(`/projetos/${pr.slug}`)}
                        className="p-2.5 rounded-lg hover:bg-slate-100/80 cursor-pointer flex items-center justify-between transition-colors"
                      >
                        <div>
                          <span className="text-xs font-bold text-slate-900 block">{pr.title}</span>
                          <span className="text-[11px] text-slate-500 block">{pr.client} • {pr.segment}</span>
                        </div>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
