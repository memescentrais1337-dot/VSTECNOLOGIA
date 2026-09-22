export interface SolutionLandingTech {
  title: string;
  category: string;
  description: string;
  features: string[];
  specs?: Record<string, string>;
  tag?: string;
  image?: string;
}

export interface SolutionLandingCase {
  client: string;
  highlight: string;
  description: string;
  image: string;
  tag: string;
}

export interface ArchitectureLayer {
  step: string;
  label: string;
  sublabel: string;
  detail: string;
  metrics?: string;
  iconName: string;
}

export interface SolutionLandingData {
  slug: 'hanwha' | 'avigilon' | 'axis' | 'pelco' | 'tyco';
  brandName: string;
  solutionName: string;
  eyebrow: string;
  headline: string;
  headlineHighlight?: string;
  subheadline: string;
  heroBenefits: string[];
  heroImage: string;
  heroImageLabel?: string;
  logo: string;
  logoAlt: string;
  partnerBadge?: string;
  
  // Showcase metrics / technical summary (especially for Tyco or key specs)
  heroMetrics?: Array<{ value: string; label: string; detail: string }>;

  // Section Problem narrative
  problemSection: {
    tag: string;
    title: string;
    narrative: string[];
    painPoints: Array<{ title: string; desc: string }>;
    solutionBridge: string;
  };

  // Section Technology Showcase
  technologiesTitle?: string;
  technologiesSubtitle?: string;
  technologies: SolutionLandingTech[];

  // Business Impact / Benefits (3 pillars)
  businessBenefits: Array<{
    number: string;
    title: string;
    desc: string;
    highlights: string[];
    image?: string;
  }>;

  // Interactive Architecture
  architectureTitle: string;
  architectureSubtitle: string;
  architectureLayers: ArchitectureLayer[];

  // Applications
  applicationsTitle?: string;
  applications: Array<{
    title: string;
    segment: string;
    description: string;
    relevance: string;
    iconName: string;
  }>;

  // Compliance
  compliance: {
    title: string;
    subtitle: string;
    items: Array<{
      title: string;
      desc: string;
      supportedStandard: string;
    }>;
  };

  // Cases (Real: EDP Goiânia, Hospital Albert Einstein, QGEX)
  casesTitle?: string;
  cases: SolutionLandingCase[];

  // FAQ
  faq: Array<{
    question: string;
    answer: string;
  }>;

  // Final CTA
  finalCTA: {
    headline: string;
    subheadline: string;
    buttonText: string;
  };

  // Tracking & Form Source
  formSource: string;
  whatsappMessage: string;
  
  // SEO
  seoTitle: string;
  seoDescription: string;
}
