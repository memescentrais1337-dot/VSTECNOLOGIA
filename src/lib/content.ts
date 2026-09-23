import siteJson from '../content/site.json';
import { CompanyInfo, Product, ProjectCase, Segment } from '../types';
import { SolutionLandingData } from '../types/solutionLanding';

export interface SiteConfig {
  company: CompanyInfo;
  seo: {
    defaultTitle: string;
    defaultDescription: string;
    keywords: string[];
    ogImage: string;
  };
  home: {
    hero: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      ctaPrimary: string;
      ctaSecondary: string;
      desktopVideo: string;
      mobileVideo?: string;
      posterDesktop: string;
      posterMobile?: string;
    };
    stats: {
      badge: string;
      headline: string;
      headlineHighlight: string;
      subheadline: string;
      complianceRate: string;
      metrics: Array<{
        id: string;
        prefix?: string;
        value: number;
        title: string;
        description: string;
        technicalCode: string;
        scopeTag: string;
      }>;
    };
    turnkey: {
      eyebrow: string;
      headline: string;
      description: string;
      ctaText: string;
      carouselImages: Array<{ src: string; alt: string }>;
      steps: Array<{ step: string; title: string; desc: string }>;
      lifecycleVerbs: Array<{ verb: string; desc: string }>;
    };
    specialistCta: {
      eyebrow: string;
      headline: string;
      subheadline: string;
      directorPhoto: string;
      ctaButtonText: string;
      formTitle?: string;
      formSubtitle?: string;
    };
  };
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

// Vite eager glob imports for collections
const productModules = import.meta.glob<Product | any>(
  '../content/products/*.json',
  { eager: true, import: 'default' }
);

const projectModules = import.meta.glob<ProjectCase | any>(
  '../content/projects/*.json',
  { eager: true, import: 'default' }
);

const solutionModules = import.meta.glob<SolutionLandingData | any>(
  '../content/solutions/*.json',
  { eager: true, import: 'default' }
);

const segmentModules = import.meta.glob<Segment | any>(
  '../content/segments/*.json',
  { eager: true, import: 'default' }
);

const faqModules = import.meta.glob<FAQItem[] | any>(
  '../content/faqs/*.json',
  { eager: true, import: 'default' }
);

/* =========================================================================
   SITE CONFIG & COMPANY
   ========================================================================= */

export const siteConfig: SiteConfig = siteJson as SiteConfig;

export function getSiteConfig(): SiteConfig {
  return siteConfig;
}

export function getCompanyData(): CompanyInfo {
  return siteConfig.company;
}

/* =========================================================================
   PRODUCTS
   ========================================================================= */

function normalizeProduct(raw: any, slugFromKey: string): Product {
  const slug = raw.slug || slugFromKey;
  const image = raw.image || raw.imageUrl || '';
  const imageUrl = raw.imageUrl || raw.image || '';

  return {
    id: raw.id || slug,
    slug,
    name: raw.name || '',
    model: raw.model || raw.name || '',
    brand: raw.brand || '',
    brandId: raw.brandId || raw.brand?.toLowerCase().replace(/[^a-z0-9]/g, '') || '',
    category: raw.category || '',
    type: raw.type || '',
    application: Array.isArray(raw.application) ? raw.application : [],
    imageUrl,
    shortDescription: raw.shortDescription || '',
    description: raw.description || '',
    highlights: Array.isArray(raw.highlights) && raw.highlights.length >= 3
      ? [raw.highlights[0], raw.highlights[1], raw.highlights[2]]
      : [raw.shortDescription || '', '', ''],
    features: Array.isArray(raw.features) ? raw.features : [],
    specs: raw.specs || {},
    downloads: Array.isArray(raw.downloads) ? raw.downloads : [],
    relatedProductSlugs: Array.isArray(raw.relatedProductSlugs) ? raw.relatedProductSlugs : [],
  };
}

export function getAllProducts(): Product[] {
  const items = Object.entries(productModules).map(([path, mod]) => {
    const slugFromKey = path.split('/').pop()?.replace('.json', '') || '';
    const raw = mod as any;
    const normalized = normalizeProduct(raw, slugFromKey);
    const order = typeof raw.order === 'number' ? raw.order : 999;
    const active = raw.active !== false;
    return { product: normalized, order, active };
  });

  return items
    .filter((i) => i.active)
    .sort((a, b) => a.order - b.order)
    .map((i) => i.product);
}

export function getProductBySlug(slug: string): Product | undefined {
  const all = getAllProducts();
  return all.find((p) => p.slug === slug);
}

/* =========================================================================
   PROJECTS
   ========================================================================= */

function normalizeProject(raw: any, slugFromKey: string): ProjectCase {
  const slug = raw.slug || slugFromKey;
  const heroImage = raw.coverImage || raw.heroImage || '';
  const shortDesc = raw.summary || raw.shortDesc || '';
  const fullDescription = raw.description || raw.fullDescription || '';

  return {
    id: raw.id || slug,
    slug,
    title: raw.title || '',
    client: raw.client || '',
    segment: raw.segment || '',
    location: raw.location || '',
    year: raw.year || '',
    heroImage,
    shortDesc,
    fullDescription,
    challenge: raw.challenge || '',
    solution: raw.solution || '',
    technologies: Array.isArray(raw.technologies) ? raw.technologies : [],
    execution: Array.isArray(raw.execution) ? raw.execution : [],
    executionSteps: Array.isArray(raw.executionSteps) ? raw.executionSteps : raw.execution || [],
    results: Array.isArray(raw.results) ? raw.results : [],
    gallery: Array.isArray(raw.gallery) ? raw.gallery : (heroImage ? [heroImage] : []),
    architectureSteps: Array.isArray(raw.architectureSteps) ? raw.architectureSteps : [],
    whyVS: Array.isArray(raw.whyVS) ? raw.whyVS : [],
  };
}

export function getAllProjects(): ProjectCase[] {
  const items = Object.entries(projectModules).map(([path, mod]) => {
    const slugFromKey = path.split('/').pop()?.replace('.json', '') || '';
    const raw = mod as any;
    const normalized = normalizeProject(raw, slugFromKey);
    const order = typeof raw.order === 'number' ? raw.order : 999;
    return { project: normalized, order };
  });

  return items
    .sort((a, b) => a.order - b.order)
    .map((i) => i.project);
}

export function getProjectBySlug(slug: string): ProjectCase | undefined {
  const all = getAllProjects();
  return all.find((p) => p.slug === slug);
}

/* =========================================================================
   SOLUTIONS / LANDING PAGES
   ========================================================================= */

export function getAllSolutions(): Record<string, SolutionLandingData> {
  const solutions: Record<string, SolutionLandingData> = {};

  for (const [path, mod] of Object.entries(solutionModules)) {
    const key = path.split('/').pop()?.replace('.json', '') || '';
    const raw = mod as any;
    
    // Normalize properties
    const item: SolutionLandingData = {
      ...raw,
      slug: (raw.slug || key) as any,
      businessBenefits: raw.businessBenefits || raw.benefits || [],
      finalCTA: raw.finalCTA || raw.cta || {
        headline: '',
        subheadline: '',
        buttonText: '',
      },
    };

    solutions[key] = item;
  }

  return solutions;
}

export function getSolutionBySlug(slug: string): SolutionLandingData | undefined {
  const solutions = getAllSolutions();
  return solutions[slug];
}

/* =========================================================================
   SEGMENTS
   ========================================================================= */

function normalizeSegment(raw: any, slugFromKey: string): Segment {
  const slug = raw.slug || slugFromKey;

  return {
    id: raw.id || slug,
    slug,
    title: raw.title || '',
    tagline: raw.tagline || '',
    description: raw.description || '',
    iconName: raw.iconName || 'Building',
    imageUrl: raw.imageUrl || '',
    challenges: Array.isArray(raw.challenges) ? raw.challenges : [],
    solutionsProvided: Array.isArray(raw.solutionsProvided) ? raw.solutionsProvided : [],
    featuredProject: raw.featuredProject || '',
    recommendedArchitecture: Array.isArray(raw.recommendedArchitecture) ? raw.recommendedArchitecture : [],
    manufacturers: Array.isArray(raw.manufacturers) ? raw.manufacturers : [],
    differentials: Array.isArray(raw.differentials) ? raw.differentials : [],
    faq: Array.isArray(raw.faq) ? raw.faq : [],
    relatedCaseSlugs: Array.isArray(raw.relatedCaseSlugs) ? raw.relatedCaseSlugs : [],
  };
}

export function getAllSegments(): Segment[] {
  const items = Object.entries(segmentModules).map(([path, mod]) => {
    const slugFromKey = path.split('/').pop()?.replace('.json', '') || '';
    const raw = mod as any;
    const normalized = normalizeSegment(raw, slugFromKey);
    const order = typeof raw.order === 'number' ? raw.order : 999;
    return { segment: normalized, order };
  });

  return items
    .sort((a, b) => a.order - b.order)
    .map((i) => i.segment);
}

export function getSegmentBySlug(slug: string): Segment | undefined {
  const all = getAllSegments();
  return all.find((s) => s.slug === slug);
}

/* =========================================================================
   FAQS
   ========================================================================= */

export function getAllFaqs(): FAQItem[] {
  const allFaqs: FAQItem[] = [];

  for (const mod of Object.values(faqModules)) {
    if (Array.isArray(mod)) {
      allFaqs.push(...(mod as FAQItem[]));
    }
  }

  return allFaqs;
}
