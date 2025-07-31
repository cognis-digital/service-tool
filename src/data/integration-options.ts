export const integrationOptions = {
  payment: [
    {
      id: 'stripe',
      name: 'Stripe Integration',
      description: 'Complete payment processing solution',
      price: 1999,
      features: [
        'Credit card processing',
        'Subscription management',
        'Invoice system',
        'Payment links'
      ]
    },
    {
      id: 'crypto-payments',
      name: 'Crypto Payment Gateway',
      description: 'Accept cryptocurrency payments',
      price: 2999,
      features: [
        'Multiple cryptocurrencies',
        'Auto conversion',
        'Wallet integration',
        'Transaction history'
      ]
    }
  ],
  authentication: [
    {
      id: 'auth0',
      name: 'Auth0 Integration',
      description: 'Enterprise authentication solution',
      price: 1499,
      features: [
        'Single sign-on',
        'Social login',
        'Multi-factor auth',
        'User management'
      ]
    },
    {
      id: 'web3-auth',
      name: 'Web3 Authentication',
      description: 'Blockchain-based authentication',
      price: 2499,
      features: [
        'Wallet authentication',
        'Sign-in with Ethereum',
        'Token gating',
        'Role management'
      ]
    }
  ],
  storage: [
    {
      id: 'aws-s3',
      name: 'AWS S3 Integration',
      description: 'Cloud storage solution',
      price: 999,
      features: [
        'File upload/download',
        'CDN integration',
        'Image optimization',
        'Access control'
      ]
    },
    {
      id: 'ipfs',
      name: 'IPFS Storage',
      description: 'Decentralized storage solution',
      price: 1999,
      features: [
        'Decentralized storage',
        'Content addressing',
        'Pinning service',
        'Gateway access'
      ]
    }
  ],
  ai: [
    {
      id: 'openai',
      name: 'OpenAI Integration',
      description: 'AI-powered features',
      price: 2999,
      features: [
        'GPT integration',
        'Content generation',
        'Language processing',
        'Custom models'
      ]
    },
    {
      id: 'custom-ml',
      name: 'Custom ML Pipeline',
      description: 'Tailored machine learning solution',
      price: 4999,
      features: [
        'Data processing',
        'Model training',
        'API endpoints',
        'Monitoring'
      ]
    }
  ],
  crm: [
    {
      id: 'salesforce',
      name: 'Salesforce CRM Integration',
      description: 'Enterprise CRM platform integration',
      price: 3499,
      features: [
        'Contact management',
        'Lead tracking',
        'Opportunity management',
        'Sales analytics',
        'Custom workflows'
      ]
    },
    {
      id: 'hubspot',
      name: 'HubSpot CRM Integration',
      description: 'All-in-one marketing and sales platform',
      price: 2499,
      features: [
        'Contact management',
        'Email marketing',
        'Marketing automation',
        'Sales pipeline',
        'Customer service tools'
      ]
    },
    {
      id: 'zoho',
      name: 'Zoho CRM Integration',
      description: 'Scalable CRM solution',
      price: 1499,
      features: [
        'Contact management',
        'Deal management',
        'Social media integration',
        'Analytics dashboard',
        'Mobile CRM'
      ]
    }
  ],
  automation: [
    {
      id: 'n8n',
      name: 'n8n Workflow Automation',
      description: 'Open source workflow automation platform',
      price: 2199,
      features: [
        'Visual workflow builder',
        'API integrations',
        'Custom triggers',
        'Scheduled workflows',
        'Error handling'
      ]
    },
    {
      id: 'zapier',
      name: 'Zapier Integration',
      description: 'Connect apps and automate workflows',
      price: 1899,
      features: [
        '3,000+ app connections',
        'Multi-step workflows',
        'Conditional logic',
        'Filtering rules',
        'Format data'
      ]
    },
    {
      id: 'make',
      name: 'Make (Integromat) Automation',
      description: 'Advanced automation platform',
      price: 1999,
      features: [
        'Visual scenario builder',
        'Data mapping',
        'JSON processing',
        'Error handling',
        'Custom functions'
      ]
    }
  ],
  api: [
    {
      id: 'rest-api',
      name: 'Custom REST API Integration',
      description: 'Connect to any REST API',
      price: 2499,
      features: [
        'Custom endpoints',
        'Authentication handling',
        'Data transformation',
        'Rate limiting',
        'Caching'
      ]
    },
    {
      id: 'graphql-api',
      name: 'GraphQL API Integration',
      description: 'Modern API integration',
      price: 2799,
      features: [
        'Query optimization',
        'Schema validation',
        'Data fetching',
        'Resolver functions',
        'Type safety'
      ]
    },
    {
      id: 'industry-api',
      name: 'Industry-Specific API Suite',
      description: 'Pre-built industry APIs',
      price: 3499,
      features: [
        'Healthcare/Finance/Retail APIs',
        'Compliance handling',
        'Industry standards',
        'Data normalization',
        'Documentation'
      ]
    }
  ],
  alerts: [
    {
      id: 'alert-system',
      name: 'Automated Alert System',
      description: 'Real-time notification system',
      price: 1799,
      features: [
        'Email alerts',
        'SMS notifications',
        'Push notifications',
        'Webhooks',
        'Alert escalation'
      ]
    },
    {
      id: 'monitoring',
      name: 'Advanced Monitoring Suite',
      description: 'Comprehensive system monitoring',
      price: 2299,
      features: [
        'Uptime monitoring',
        'Performance metrics',
        'Anomaly detection',
        'Custom dashboards',
        'Incident management'
      ]
    },
    {
      id: 'security-alerts',
      name: 'Security Alert System',
      description: 'Security threat detection and alerts',
      price: 2699,
      features: [
        'Intrusion detection',
        'Vulnerability alerts',
        'Compliance violations',
        'Threat intelligence',
        'Automated responses'
      ]
    }
  ]
};