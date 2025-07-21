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
  ]
};