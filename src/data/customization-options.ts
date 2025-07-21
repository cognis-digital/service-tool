import { CustomizationOption, IntegrationOption } from '../types';

export const designOptions = [
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

export const performanceOptions = [
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

export const customizationOptions: CustomizationOption[] = [
  // Design & UI Options
  {
    id: 'responsive-design',
    name: 'Responsive Design',
    price: 199,
    category: 'design',
    description: 'Optimized for all devices and screen sizes',
    features: ['Mobile-first approach', 'Tablet optimization', 'Desktop layouts']
  },
  {
    id: 'dark-mode',
    name: 'Dark Mode Support',
    price: 149,
    category: 'design',
    description: 'Toggle between light and dark themes',
    features: ['Automatic system detection', 'Manual toggle', 'Persistent preference']
  },
  {
    id: 'animations',
    name: 'Custom Animations',
    price: 299,
    category: 'design',
    description: 'Smooth transitions and micro-interactions',
    features: ['Page transitions', 'Hover effects', 'Scroll animations']
  },
  
  // Security Features
  {
    id: 'two-factor',
    name: 'Two-Factor Authentication',
    price: 199,
    category: 'security',
    description: 'Enhanced login security',
    features: ['SMS verification', 'Email codes', 'Authenticator app support']
  },
  {
    id: 'ssl-setup',
    name: 'SSL Certificate Setup',
    price: 99,
    category: 'security',
    description: 'Secure HTTPS encryption',
    features: ['Domain validation', 'Auto-renewal', 'Security badge']
  },
  {
    id: 'ddos-protection',
    name: 'DDoS Protection',
    price: 299,
    category: 'security',
    description: 'Advanced traffic filtering',
    features: ['Traffic analysis', 'Attack mitigation', '24/7 monitoring']
  },

  // Performance Options
  {
    id: 'image-optimization',
    name: 'Image Optimization',
    price: 149,
    category: 'performance',
    description: 'Automated image optimization',
    features: ['Format conversion', 'Size reduction', 'Lazy loading']
  },
  {
    id: 'caching',
    name: 'Advanced Caching',
    price: 199,
    category: 'performance',
    description: 'Multi-layer caching system',
    features: ['Browser caching', 'Server-side caching', 'CDN integration']
  },
  {
    id: 'cdn',
    name: 'CDN Setup',
    price: 249,
    category: 'performance',
    description: 'Global content delivery network',
    features: ['Global distribution', 'Auto-scaling', 'DDoS protection']
  }
];

export const integrationOptions: IntegrationOption[] = [
  // Payment Integrations
  {
    id: 'stripe',
    name: 'Stripe Integration',
    price: 299,
    category: 'payment',
    description: 'Accept credit card payments',
    requirements: ['Stripe account', 'Business verification']
  },
  {
    id: 'paypal',
    name: 'PayPal Integration',
    price: 249,
    category: 'payment',
    description: 'PayPal payment processing',
    requirements: ['PayPal Business account']
  },
  {
    id: 'square',
    name: 'Square Integration',
    price: 249,
    category: 'payment',
    description: 'Square payment system setup',
    requirements: ['Square account']
  },

  // CRM Integrations
  {
    id: 'hubspot',
    name: 'HubSpot Integration',
    price: 399,
    category: 'crm',
    description: 'CRM and marketing automation',
    requirements: ['HubSpot account', 'API access']
  },
  {
    id: 'salesforce',
    name: 'Salesforce Integration',
    price: 499,
    category: 'crm',
    description: 'Enterprise CRM integration',
    requirements: ['Salesforce license', 'API access']
  },
  {
    id: 'zoho',
    name: 'Zoho Integration',
    price: 299,
    category: 'crm',
    description: 'Zoho CRM setup and sync',
    requirements: ['Zoho account']
  },

  // Communication Integrations
  {
    id: 'slack',
    name: 'Slack Integration',
    price: 199,
    category: 'communication',
    description: 'Team notifications and alerts',
    requirements: ['Slack workspace']
  },
  {
    id: 'discord',
    name: 'Discord Integration',
    price: 199,
    category: 'communication',
    description: 'Community engagement platform',
    requirements: ['Discord server']
  },
  {
    id: 'intercom',
    name: 'Intercom Setup',
    price: 349,
    category: 'communication',
    description: 'Customer messaging platform',
    requirements: ['Intercom subscription']
  }
];