import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export type RoutePath =
  | '/'
  | '/solucoes'
  | '/solucoes/:slug'
  | '/produtos'
  | '/produtos/:slug'
  | '/segmentos'
  | '/segmentos/:slug'
  | '/projetos'
  | '/projetos/:slug'
  | '/quem-somos'
  | '/contato'
  | '/politica-de-privacidade'
  | '/politica-de-cookies'
  | '/termos-de-uso';

interface NavigationContextType {
  currentPath: string;
  routeParams: { slug?: string };
  navigate: (path: string) => void;
  isSearchOpen: boolean;
  setIsSearchOpen: (open: boolean) => void;
  isLeadModalOpen: boolean;
  setIsLeadModalOpen: (open: boolean) => void;
  leadModalInitialData?: { purpose?: string; projectSummary?: string };
  openLeadModalWithData: (data?: { purpose?: string; projectSummary?: string }) => void;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      const pathname = window.location.pathname;
      return pathname || '/';
    }
    return '/';
  });

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isLeadModalOpen, setIsLeadModalOpen] = useState(false);
  const [leadModalInitialData, setLeadModalInitialData] = useState<{ purpose?: string; projectSummary?: string } | undefined>(undefined);

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path: string) => {
    if (typeof window !== 'undefined') {
      window.history.pushState({}, '', path);
      setCurrentPath(path);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const openLeadModalWithData = (data?: { purpose?: string; projectSummary?: string }) => {
    setLeadModalInitialData(data);
    setIsLeadModalOpen(true);
  };

  // Parse route slug if path has 2 segments (e.g. /produtos/axis-q3538-lve)
  const segments = currentPath.split('/').filter(Boolean);
  let routeParams: { slug?: string } = {};

  if (segments.length >= 2) {
    routeParams.slug = segments[1];
  }

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        routeParams,
        navigate,
        isSearchOpen,
        setIsSearchOpen,
        isLeadModalOpen,
        setIsLeadModalOpen,
        leadModalInitialData,
        openLeadModalWithData,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = (): NavigationContextType => {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
