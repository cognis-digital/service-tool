export type ServiceCategory = 
  | 'development' 
  | 'analytics' 
  | 'marketing' 
  | 'design' 
  | 'security' 
  | 'automation' 
  | 'infrastructure' 
  | 'ai' 
  | 'bot' 
  | 'mobile'
  | 'social'
  | 'email'
  | 'ppc'
  | 'seo'
  | 'video'
  | 'maintenance'
  | 'crypto'
  | 'healthcare'
  | 'education'
  | 'finance'
  | 'ecommerce';

export type BusinessScale = 'individual' | 'startup' | 'small-business' | 'enterprise';
export type TechStack = 
  | 'react' 
  | 'vue' 
  | 'angular' 
  | 'next' 
  | 'nuxt'
  | 'svelte'
  | 'node' 
  | 'python'
  | 'flutter'
  | 'expo';

export type Industry = 
  | 'ecommerce' 
  | 'healthcare' 
  | 'education' 
  | 'finance' 
  | 'technology'
  | 'real-estate'
  | 'hospitality'
  | 'manufacturing'
  | 'retail'
  | 'crypto'
  | 'defi'
  | 'gaming';

export type Blockchain =
  | 'solana'
  | 'base'
  | 'algorand'
  | 'xrp'
  | 'bitcoin'
  | 'ethereum'
  | 'polygon'
  | 'arbitrum'
  | 'optimism'
  | 'avalanche';

export type PaymentType = 'one-time' | 'subscription' | 'usage-based' | 'milestone-based';
export type TimeFrame = 'hourly' | 'daily' | 'weekly' | 'monthly' | 'quarterly' | 'yearly';

export interface PricingTier {
  id: string;
  name: string;
  basePrice: number;
  paymentType: PaymentType;
  timeFrame?: TimeFrame;
  features: string[];
  minimumCommitment?: number;
  industry?: Industry;
  scale?: BusinessScale;
}

export interface ServiceAddOn {
  id: string;
  name: string;
  description: string;
  price: number;
  timeFrame?: TimeFrame;
  category: string;
  dependencies?: string[];
  industry?: Industry[];
  scale?: BusinessScale[];
}

export interface SecurityFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'authentication' | 'network' | 'encryption' | 'monitoring';
  industry?: Industry[];
  scale?: BusinessScale[];
}

export interface WebsiteFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'ui' | 'functionality' | 'integration' | 'content';
  industry?: Industry[];
  scale?: BusinessScale[];
}

export interface WebAppFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'core' | 'advanced' | 'premium';
  industry?: Industry[];
  scale?: BusinessScale[];
}

export interface MobileAppFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  platform: 'ios' | 'android' | 'both';
  framework: 'expo' | 'flutter';
  category: 'functionality' | 'security' | 'ui';
  industry?: Industry[];
  scale?: BusinessScale[];
}

export interface CryptoFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  category: 'smart-contract' | 'tokenomics' | 'security' | 'integration';
  blockchains: Blockchain[];
  industry?: Industry[];
  scale?: BusinessScale[];
}

export interface Service {
  id: string;
  name: string;
  category: ServiceCategory;
  description: string;
  basePrice: number;
  features: string[];
  techOptions?: TechStack[];
  blockchains?: Blockchain[];
  industries?: Industry[];
  scale?: BusinessScale[];
  customizationOptions?: {
    features?: WebsiteFeature[];
    security?: SecurityFeature[];
    crypto?: CryptoFeature[];
    integrations?: ServiceAddOn[];
  };
}

export interface IndustrySpecificFeature {
  id: string;
  name: string;
  price: number;
  description: string;
  industry: Industry;
  category: string;
  scale?: BusinessScale[];
  dependencies?: string[];
}