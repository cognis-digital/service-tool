import { IndustrySpecificFeature } from '../types';

export const healthcareFeatures: IndustrySpecificFeature[] = [
  {
    id: 'hipaa-compliance',
    name: 'HIPAA Compliance Package',
    price: 2999,
    description: 'Full HIPAA compliance implementation including documentation and training',
    industry: 'healthcare',
    category: 'compliance',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'ehr-integration',
    name: 'EHR System Integration',
    price: 4999,
    description: 'Integration with major Electronic Health Record systems',
    industry: 'healthcare',
    category: 'integration',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'telemedicine',
    name: 'Telemedicine Platform',
    price: 3999,
    description: 'Video consultation and remote patient monitoring',
    industry: 'healthcare',
    category: 'functionality'
  },
  {
    id: 'medical-imaging',
    name: 'Medical Imaging Integration',
    price: 5999,
    description: 'DICOM support and medical imaging visualization',
    industry: 'healthcare',
    category: 'functionality',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'patient-portal',
    name: 'Patient Portal',
    price: 2499,
    description: 'Secure patient portal with appointment scheduling',
    industry: 'healthcare',
    category: 'functionality'
  }
];

export const financeFeatures: IndustrySpecificFeature[] = [
  {
    id: 'pci-compliance',
    name: 'PCI DSS Compliance',
    price: 2499,
    description: 'Payment Card Industry Data Security Standard compliance',
    industry: 'finance',
    category: 'compliance',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'banking-integration',
    name: 'Banking API Integration',
    price: 3999,
    description: 'Integration with major banking APIs and payment processors',
    industry: 'finance',
    category: 'integration'
  },
  {
    id: 'fraud-detection',
    name: 'AI Fraud Detection',
    price: 4999,
    description: 'Advanced fraud detection and prevention system',
    industry: 'finance',
    category: 'security',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'real-time-trading',
    name: 'Real-time Trading Platform',
    price: 7999,
    description: 'High-frequency trading and real-time market data',
    industry: 'finance',
    category: 'functionality',
    scale: ['enterprise']
  },
  {
    id: 'portfolio-management',
    name: 'Portfolio Management',
    price: 3499,
    description: 'Advanced portfolio tracking and management',
    industry: 'finance',
    category: 'functionality'
  }
];

export const ecommerceFeatures: IndustrySpecificFeature[] = [
  {
    id: 'inventory-management',
    name: 'Advanced Inventory Management',
    price: 1999,
    description: 'Real-time inventory tracking and management',
    industry: 'ecommerce',
    category: 'functionality'
  },
  {
    id: 'marketplace',
    name: 'Marketplace Features',
    price: 3999,
    description: 'Multi-vendor marketplace capabilities',
    industry: 'ecommerce',
    category: 'functionality',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'recommendation-engine',
    name: 'AI Product Recommendations',
    price: 2499,
    description: 'AI-powered product recommendation system',
    industry: 'ecommerce',
    category: 'ai'
  },
  {
    id: 'dynamic-pricing',
    name: 'Dynamic Pricing Engine',
    price: 3499,
    description: 'Automated price optimization based on market conditions',
    industry: 'ecommerce',
    category: 'ai',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'omnichannel',
    name: 'Omnichannel Integration',
    price: 4999,
    description: 'Unified commerce across online and physical stores',
    industry: 'ecommerce',
    category: 'integration',
    scale: ['small-business', 'enterprise']
  }
];

export const gamingFeatures: IndustrySpecificFeature[] = [
  {
    id: 'game-analytics',
    name: 'Game Analytics Platform',
    price: 2999,
    description: 'Advanced gaming analytics and player behavior tracking',
    industry: 'gaming',
    category: 'analytics'
  },
  {
    id: 'multiplayer',
    name: 'Multiplayer Infrastructure',
    price: 4999,
    description: 'Real-time multiplayer game infrastructure',
    industry: 'gaming',
    category: 'functionality',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'game-economy',
    name: 'Virtual Economy System',
    price: 3999,
    description: 'In-game economy and virtual goods management',
    industry: 'gaming',
    category: 'functionality'
  },
  {
    id: 'anti-cheat',
    name: 'Anti-Cheat System',
    price: 5999,
    description: 'Advanced anti-cheat and game security system',
    industry: 'gaming',
    category: 'security',
    scale: ['small-business', 'enterprise']
  },
  {
    id: 'game-analytics',
    name: 'Player Analytics',
    price: 2499,
    description: 'Comprehensive player behavior and performance analytics',
    industry: 'gaming',
    category: 'analytics'
  }
];

export const getAllIndustryFeatures = () => ({
  healthcare: healthcareFeatures,
  finance: financeFeatures,
  ecommerce: ecommerceFeatures,
  gaming: gamingFeatures
});