import React from 'react';
import { Hero } from '../components/Hero';
import { SolutionsGrid } from '../components/SolutionsGrid';
import { EngineeringStats } from '../components/EngineeringStats';
import { BrandMarquee } from '../components/BrandMarquee';
import { SegmentsGrid } from '../components/SegmentsGrid';
import { ProjectsShowcase } from '../components/ProjectsShowcase';
import { IntroPositioning } from '../components/IntroPositioning';
import { SpecialistCTA } from '../components/SpecialistCTA';
import { CertificationsGrid } from '../components/CertificationsGrid';

export const HomePage: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* 1. Capa Principal em Vídeo */}
      <Hero />

      {/* 2. Soluções integradas para operações críticas */}
      <SolutionsGrid />

      {/* 3. Engenharia que entrega resultado (Métricas e Autoridade) */}
      <EngineeringStats />

      {/* 4. Parcerias tecnológicas homologadas (Marcas parceiras) */}
      <BrandMarquee />

      {/* 5. Mercados e Segmentos atendidos */}
      <SegmentsGrid />

      {/* 6. Cases de engenharia com navegação para páginas individuais */}
      <ProjectsShowcase />

      {/* 7. Engenharia Turn-Key e Credenciais Oficiais */}
      <IntroPositioning />

      {/* 8. Engenharia consultiva e Contato com Especialista */}
      <SpecialistCTA />

      {/* 9. Certificações Oficiais */}
      <CertificationsGrid />
    </main>
  );
};
