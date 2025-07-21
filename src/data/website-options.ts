import { 
  WebsiteFeature, 
  WebsiteTechnology, 
  SupportLevel, 
  Revision,
  WebsiteDesignOption,
  WebsiteIntegration,
  PerformanceOption 
} from '../types';

// Previous exports remain the same

export const designOptions: WebsiteDesignOption[] = [
  {
    id: 'minimal',
    name: 'Minimal Design',
    price: 149,
    description: 'Clean, simple design perfect for personal websites'
  },
  {
    id: 'modern',
    name: 'Modern Design',
    price: 249,
    description: 'Contemporary design with animations and effects'
  },
  {
    id: 'premium',
    name: 'Premium Design',
    price: 399,
    description: 'Unique, custom design with advanced animations'
  }
];

export const integrations: WebsiteIntegration[] = [
  {
    id: 'payment',
    name: 'Payment Gateway',
    price: 199,
    description: 'Accept payments through Stripe or PayPal'
  },
  {
    id: 'calendar',
    name: 'Booking Calendar',
    price: 149,
    description: 'Allow customers to schedule appointments'
  },
  {
    id: 'chat',
    name: 'Live Chat',
    price: 99,
    description: 'Real-time customer support chat widget'
  },
  {
    id: 'newsletter',
    name: 'Newsletter Integration',
    price: 79,
    description: 'Email signup and newsletter management'
  }
];

export const performanceOptions: PerformanceOption[] = [
  {
    id: 'basic',
    name: 'Basic Performance',
    price: 99,
    description: 'Essential optimizations',
    features: ['Image Optimization', 'Basic Caching', 'Minification']
  },
  {
    id: 'advanced',
    name: 'Advanced Performance',
    price: 199,
    description: 'Comprehensive optimizations',
    features: ['CDN Integration', 'Advanced Caching', 'Lazy Loading', 'Code Splitting']
  },
  {
    id: 'premium',
    name: 'Premium Performance',
    price: 399,
    description: 'Maximum performance optimization',
    features: ['Global CDN', 'Server-Side Rendering', 'Progressive Web App', 'Performance Monitoring']
  }
];

// Fix the revisionPackages variable name in the map function
export const revisionPackages: Revision[] = [
  {
    id: 'single',
    name: 'Single Revision',
    price: 99,
    description: 'One additional revision after the included three revisions'
  },
  {
    id: 'three',
    name: 'Three Revisions',
    price: 249,
    description: 'Three additional revisions package (save 16%)'
  },
  {
    id: 'five',
    name: 'Five Revisions',
    price: 399,
    description: 'Five additional revisions package (save 20%)'
  }
];