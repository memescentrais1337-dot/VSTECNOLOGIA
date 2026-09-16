export interface Brand {
  id: string;
  name: string;
  logo: string;
  alt: string;
  url?: string;
  logoText?: string;
  tagline?: string;
  category?: string;
  website?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  model: string;
  brand: string;
  brandId: string;
  category: string;
  type: string;
  application: string[];
  imageUrl: string;
  shortDescription: string;
  description: string;
  features: string[];
  specs: Record<string, string>;
  highlights: [string, string, string];
  downloads?: { title: string; type: string; size: string }[];
  relatedProductSlugs?: string[];
}

export interface DetailedService {
  id: string;
  slug: string;
  title: string;
  category: 'seguranca' | 'infraestrutura' | 'automacao' | 'telecomunicacoes';
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  technologies: string[];
  benefits: string[];
  imageUrl: string;
}

export interface ServiceCategory {
  id: string;
  slug: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  imageUrl: string;
  services: string[];
}

export interface Segment {
  id: string;
  slug: string;
  title: string;
  tagline: string;
  description: string;
  iconName: string;
  imageUrl: string;
  challenges: string[];
  solutionsProvided: string[];
  featuredProject?: string;
}

export interface ProjectCase {
  id: string;
  slug: string;
  title: string;
  client: string;
  segment: string;
  location: string;
  year: string;
  heroImage: string;
  shortDesc: string;
  fullDescription?: string;
  challenge: string;
  solution: string;
  technologies: string[];
  execution: string[];
  executionSteps?: string[];
  results: string[];
  gallery: string[];
}

export interface Certification {
  id: string;
  name: string;
  issuer: string;
  category: string;
  description: string;
  badgeText: string;
  iconName: string;
  imageUrl: string;
}

export interface CompanyInfo {
  legalName: string;
  tradeName: string;
  cnpj: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    zipCode: string;
  };
  phone: string;
  phoneRaw: string;
  whatsapp: string;
  whatsappRaw: string;
  email: string;
  businessHours?: string;
  engineeringDirector: {
    name: string;
    role: string;
    phone: string;
    whatsapp: string;
    email: string;
  };
  social: {
    linkedin?: string;
    instagram?: string;
    youtube?: string;
  };
}

export interface LeadFormData {
  purpose: string;
  projectSummary?: string;
  name: string;
  company?: string;
  cnpj?: string;
  email: string;
  phone: string;
  additionalInfo?: string;
}
