import { BusinessScale, Industry } from './services';

// Define the structure for features, integrations, platforms, and security options
export interface CustomizationOptions {
  features: string[];
  integrations: string[];
  platforms: string[];
  security: string[];
}

// Define the structure for tech stack options based on scale and industry
export interface TechStackOptions {
  languages: string[];
  frontend: string[];
  backend: string[];
  database: string[];
  cloud: string[];
  mobile?: string[];
  web3?: string[];
  devOps?: string[];
  testing?: string[];
  analytics?: string[];
  security?: string[];
}

// Service map to derive features, integrations, platforms, and security options
// based on business scale and industry
export const serviceMap: Record<BusinessScale, Record<Industry, CustomizationOptions>> = {
  individual: {
    finance: {
      features: [
        'Personal finance tracking',
        'Budget planning',
        'Expense categorization',
        'Financial goal setting',
        'Investment tracking',
        'Tax preparation assistance'
      ],
      integrations: [
        'Plaid',
        'Stripe',
        'QuickBooks',
        'PayPal',
        'Mint'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'Browser extension'
      ],
      security: [
        'Two-factor authentication',
        'Data encryption',
        'Secure password storage',
        'Regular security audits'
      ]
    },
    healthcare: {
      features: [
        'Personal health records',
        'Medication tracking',
        'Appointment scheduling',
        'Health goal monitoring',
        'Telemedicine integration',
        'Medical bill management'
      ],
      integrations: [
        'Apple Health',
        'Google Fit',
        'Epic MyChart',
        'Fitbit',
        'Garmin'
      ],
      platforms: [
        'Web application',
        'iOS app',
        'Android app',
        'Wearable integration'
      ],
      security: [
        'HIPAA compliance',
        'End-to-end encryption',
        'Biometric authentication',
        'Data anonymization',
        'Access controls'
      ]
    },
    retail: {
      features: [
        'Personal shopping assistant',
        'Product recommendations',
        'Price comparison',
        'Deal alerts',
        'Wish list management',
        'Receipt tracking'
      ],
      integrations: [
        'Amazon',
        'Shopify',
        'Etsy',
        'eBay',
        'PayPal'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'Email notifications',
        'SMS alerts'
      ],
      security: [
        'Payment information encryption',
        'Privacy controls',
        'Secure checkout',
        'Fraud detection'
      ]
    },
    technology: {
      features: [
        'Code repository',
        'Project management',
        'API documentation',
        'Deployment automation',
        'Performance monitoring',
        'Bug tracking'
      ],
      integrations: [
        'GitHub',
        'GitLab',
        'Jira',
        'Slack',
        'VS Code',
        'Docker'
      ],
      platforms: [
        'Web application',
        'Desktop application',
        'CLI tools',
        'IDE plugins'
      ],
      security: [
        'Code signing',
        'Dependency scanning',
        'Static code analysis',
        'Container security',
        'Secret management'
      ]
    },
    manufacturing: {
      features: [
        'Project design tools',
        'Material cost estimation',
        'Production scheduling',
        'Inventory tracking',
        '3D modeling integration',
        'Quality control'
      ],
      integrations: [
        'AutoCAD',
        'Fusion 360',
        'SketchUp',
        '3D printers',
        'CNC machines'
      ],
      platforms: [
        'Web application',
        'Desktop application',
        'Tablet optimized',
        'Offline capabilities'
      ],
      security: [
        'Design file encryption',
        'Access controls',
        'Intellectual property protection',
        'Secure file sharing'
      ]
    },
    education: {
      features: [
        'Course creation',
        'Assignment management',
        'Progress tracking',
        'Resource library',
        'Quiz builder',
        'Student feedback'
      ],
      integrations: [
        'Google Classroom',
        'Canvas LMS',
        'Zoom',
        'Microsoft Teams',
        'YouTube'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'Offline content access',
        'Screen reader support'
      ],
      security: [
        'Content protection',
        'Student data privacy',
        'FERPA compliance',
        'Safe browsing'
      ]
    }
  },
  
  // The pattern continues for startup, small-business, and enterprise scales
  // with increasingly sophisticated and comprehensive options
  
  startup: {
    // Similar structure to individual but with more advanced options
    finance: {
      features: [
        'Financial reporting',
        'Investor dashboard',
        'Burn rate tracking',
        'Revenue forecasting',
        'Equity management',
        'Expense approval workflows',
        'Multi-currency support'
      ],
      integrations: [
        'QuickBooks',
        'Xero',
        'Stripe',
        'Brex',
        'Mercury',
        'AngelList'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'API access',
        'Admin dashboard'
      ],
      security: [
        'Role-based access control',
        'SOC 2 compliance',
        'Audit logs',
        'Data encryption',
        'Two-factor authentication'
      ]
    },
    healthcare: {
      features: [
        'Patient management',
        'Appointment scheduling',
        'Telemedicine platform',
        'Billing integration',
        'Clinical documentation',
        'Insurance verification',
        'Prescription management'
      ],
      integrations: [
        'Electronic health records',
        'Insurance providers',
        'Payment processors',
        'Telehealth APIs',
        'Medical device connectivity'
      ],
      platforms: [
        'Web application',
        'iOS app',
        'Android app',
        'Provider portal',
        'Patient portal'
      ],
      security: [
        'HIPAA compliance',
        'End-to-end encryption',
        'BAA agreement',
        'Data retention policies',
        'Access controls'
      ]
    },
    // Other industries follow the same pattern
    technology: {
      features: [
        'Team collaboration',
        'Git workflow integration',
        'CI/CD pipeline',
        'Development analytics',
        'Code review tools',
        'Project management',
        'API documentation',
        'Knowledge base'
      ],
      integrations: [
        'GitHub',
        'GitLab',
        'Jira',
        'Slack',
        'Linear',
        'Notion',
        'Figma'
      ],
      platforms: [
        'Web application',
        'Desktop application',
        'IDE plugins',
        'CLI tools',
        'Mobile companion'
      ],
      security: [
        'Role-based access',
        'SSO integration',
        'Code scanning',
        'Dependency management',
        'Secret scanning'
      ]
    },
    retail: {
      features: [
        'Inventory management',
        'Order processing',
        'Customer management',
        'Payment processing',
        'Shipping integration',
        'Returns handling',
        'Analytics dashboard'
      ],
      integrations: [
        'Shopify',
        'Stripe',
        'ShipBob',
        'ShipStation',
        'QuickBooks',
        'Klaviyo'
      ],
      platforms: [
        'Web storefront',
        'Admin dashboard',
        'iOS app',
        'Android app',
        'POS system'
      ],
      security: [
        'PCI compliance',
        'Fraud detection',
        'Secure checkout',
        'Customer data protection',
        'Transaction encryption'
      ]
    },
    manufacturing: {
      features: [
        'Inventory management',
        'Supply chain tracking',
        'Production planning',
        'Quality control',
        'Equipment maintenance',
        'Work order management',
        'Cost tracking'
      ],
      integrations: [
        'ERP systems',
        'CAD software',
        'IoT sensors',
        'Shipping providers',
        'Supplier portals'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'Tablet optimization',
        'Offline capabilities',
        'Shop floor displays'
      ],
      security: [
        'IP protection',
        'Access controls',
        'Data encryption',
        'Physical security integration',
        'Supplier access management'
      ]
    },
    education: {
      features: [
        'Course management',
        'Student enrollment',
        'Content delivery',
        'Assessment tools',
        'Progress tracking',
        'Discussion forums',
        'Virtual classroom'
      ],
      integrations: [
        'Learning management systems',
        'Video conferencing',
        'Payment processors',
        'CRM systems',
        'Email marketing'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'Tablet optimization',
        'Offline learning',
        'Instructor dashboard'
      ],
      security: [
        'Content protection',
        'Student data privacy',
        'FERPA compliance',
        'Secure assessments',
        'Anti-cheating measures'
      ]
    }
  },

  // Additional scales with similar patterns but escalating complexity
  'small-business': {
    // Similar structure with more comprehensive options
    finance: {
      features: [
        'Multi-entity accounting',
        'Department budgeting',
        'Tax preparation',
        'Financial compliance',
        'Custom financial reports',
        'Cash flow forecasting',
        'Debt management',
        'Asset tracking'
      ],
      integrations: [
        'QuickBooks Enterprise',
        'NetSuite',
        'Sage',
        'ADP',
        'Banking APIs',
        'Tax software',
        'Payment processors'
      ],
      platforms: [
        'Web application',
        'Mobile app',
        'Desktop software',
        'API access',
        'Executive dashboard',
        'Accountant portal'
      ],
      security: [
        'Role-based permissions',
        'Multi-factor authentication',
        'Data encryption',
        'Audit trails',
        'SOC compliance',
        'Regular security audits'
      ]
    },
    // Other industries would follow similar patterns of increasing complexity
    technology: {
      features: [
        'Enterprise git workflow',
        'Advanced CI/CD pipelines',
        'Infrastructure as code',
        'Team performance metrics',
        'Resource allocation',
        'Project portfolio management',
        'Technical debt tracking',
        'Release management'
      ],
      integrations: [
        'GitHub Enterprise',
        'Jira Advanced',
        'Confluence',
        'Slack Enterprise',
        'Azure DevOps',
        'Datadog',
        'New Relic'
      ],
      platforms: [
        'Web application',
        'Desktop clients',
        'Mobile app',
        'CLI tools',
        'IDE integrations',
        'API access'
      ],
      security: [
        'Code signing',
        'Vulnerability scanning',
        'Dependency analysis',
        'Secret management',
        'Access control',
        'Compliance reporting'
      ]
    },
    // Other industries would continue with the same pattern
    healthcare: { 
      features: ['Advanced features'],
      integrations: ['Enterprise integrations'],
      platforms: ['Multiple platforms'],
      security: ['Enhanced security']
    },
    retail: { 
      features: ['Advanced features'],
      integrations: ['Enterprise integrations'],
      platforms: ['Multiple platforms'],
      security: ['Enhanced security']
    },
    manufacturing: { 
      features: ['Advanced features'],
      integrations: ['Enterprise integrations'],
      platforms: ['Multiple platforms'],
      security: ['Enhanced security']
    },
    education: { 
      features: ['Advanced features'],
      integrations: ['Enterprise integrations'],
      platforms: ['Multiple platforms'],
      security: ['Enhanced security']
    }
  },
  
  enterprise: {
    // Most comprehensive and sophisticated options
    finance: {
      features: [
        'Global financial operations',
        'Multi-currency management',
        'International tax compliance',
        'Advanced financial analytics',
        'Risk management',
        'Regulatory reporting',
        'Treasury management',
        'Investor relations portal',
        'Merger & acquisition support'
      ],
      integrations: [
        'SAP',
        'Oracle Financials',
        'Workday',
        'Bloomberg Terminal',
        'Thomson Reuters',
        'Enterprise banking systems',
        'Custom ERP systems'
      ],
      platforms: [
        'Web application',
        'Mobile enterprise app',
        'Desktop software',
        'API ecosystem',
        'Executive dashboard',
        'Department portals',
        'Custom reporting tools'
      ],
      security: [
        'Enterprise-grade encryption',
        'Regulatory compliance (SOX, GDPR)',
        'Advanced threat protection',
        'Security operations center',
        'Data loss prevention',
        'Custom security policies',
        'Physical security integration'
      ]
    },
    // Other industries would follow this pattern of highest complexity and capability
    technology: {
      features: [
        'Enterprise architecture management',
        'Global development operations',
        'Advanced analytics and AI integration',
        'Custom development frameworks',
        'Technology portfolio management',
        'Innovation labs integration',
        'API ecosystem management',
        'Technical governance'
      ],
      integrations: [
        'Custom enterprise systems',
        'Legacy system connections',
        'Global collaboration tools',
        'Enterprise knowledge base',
        'Advanced monitoring systems',
        'Custom security tools',
        'Proprietary systems'
      ],
      platforms: [
        'Global web platform',
        'Enterprise mobile suite',
        'Desktop applications',
        'Custom development environments',
        'Cross-platform solutions',
        'Internal app store'
      ],
      security: [
        'Global security operations',
        'Advanced threat intelligence',
        'Custom security protocols',
        'Regulatory compliance framework',
        'Security governance',
        'Physical-digital security integration',
        'IP protection systems'
      ]
    },
    // Other industries would continue with this pattern
    healthcare: { 
      features: ['Enterprise-grade features'],
      integrations: ['Global integrations'],
      platforms: ['Comprehensive platforms'],
      security: ['Highest-level security']
    },
    retail: { 
      features: ['Enterprise-grade features'],
      integrations: ['Global integrations'],
      platforms: ['Comprehensive platforms'],
      security: ['Highest-level security']
    },
    manufacturing: { 
      features: ['Enterprise-grade features'],
      integrations: ['Global integrations'],
      platforms: ['Comprehensive platforms'],
      security: ['Highest-level security']
    },
    education: { 
      features: ['Enterprise-grade features'],
      integrations: ['Global integrations'],
      platforms: ['Comprehensive platforms'],
      security: ['Highest-level security']
    }
  }
};

// Tech stack options mapped by scale and industry
export const techStackByScaleAndIndustry: Record<BusinessScale, Record<Industry, TechStackOptions>> = {
  // Progressive complexity from individual to enterprise
  individual: {
    finance: {
      languages: ['JavaScript', 'TypeScript'],
      frontend: ['React', 'Vue.js'],
      backend: ['Node.js', 'Express'],
      database: ['MongoDB', 'SQLite'],
      cloud: ['Netlify', 'Vercel']
    },
    technology: {
      languages: ['JavaScript', 'TypeScript', 'Python'],
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Express', 'FastAPI'],
      database: ['MongoDB', 'PostgreSQL'],
      cloud: ['Vercel', 'Netlify', 'DigitalOcean']
    },
    // Other industries would have similar patterns
    healthcare: {
      languages: ['JavaScript', 'TypeScript'],
      frontend: ['React'],
      backend: ['Node.js'],
      database: ['MongoDB'],
      cloud: ['AWS']
    },
    retail: {
      languages: ['JavaScript'],
      frontend: ['React'],
      backend: ['Node.js'],
      database: ['MongoDB'],
      cloud: ['Vercel']
    },
    manufacturing: {
      languages: ['JavaScript'],
      frontend: ['React'],
      backend: ['Node.js'],
      database: ['MongoDB'],
      cloud: ['AWS']
    },
    education: {
      languages: ['JavaScript'],
      frontend: ['React'],
      backend: ['Node.js'],
      database: ['MongoDB'],
      cloud: ['Vercel']
    }
  },
  
  startup: {
    finance: {
      languages: ['TypeScript', 'Python'],
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Express', 'Django'],
      database: ['PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Google Cloud'],
      security: ['Auth0', 'AWS Cognito']
    },
    technology: {
      languages: ['TypeScript', 'Python', 'Go'],
      frontend: ['React', 'Next.js', 'Vue.js'],
      backend: ['Node.js', 'NestJS', 'FastAPI'],
      database: ['PostgreSQL', 'MongoDB', 'Redis'],
      cloud: ['AWS', 'Google Cloud', 'Vercel'],
      devOps: ['Docker', 'GitHub Actions', 'CircleCI'],
      testing: ['Jest', 'Cypress']
    },
    // Other industries would have similar patterns
    healthcare: {
      languages: ['TypeScript', 'Python'],
      frontend: ['React', 'Angular'],
      backend: ['Node.js', 'Django'],
      database: ['PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Azure']
    },
    retail: {
      languages: ['TypeScript'],
      frontend: ['React', 'Next.js'],
      backend: ['Node.js'],
      database: ['PostgreSQL'],
      cloud: ['AWS']
    },
    manufacturing: {
      languages: ['TypeScript', 'Python'],
      frontend: ['React'],
      backend: ['Node.js', 'Django'],
      database: ['PostgreSQL'],
      cloud: ['AWS']
    },
    education: {
      languages: ['TypeScript'],
      frontend: ['React'],
      backend: ['Node.js'],
      database: ['PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Vercel']
    }
  },
  
  'small-business': {
    finance: {
      languages: ['TypeScript', 'Python', 'Java'],
      frontend: ['React', 'Angular'],
      backend: ['Node.js', 'Spring Boot', 'Django'],
      database: ['PostgreSQL', 'MySQL', 'MongoDB'],
      cloud: ['AWS', 'Azure', 'Google Cloud'],
      security: ['Auth0', 'Okta', 'AWS Cognito'],
      devOps: ['Docker', 'Kubernetes', 'Terraform']
    },
    // Other industries would follow this pattern
    technology: {
      languages: ['TypeScript', 'Python', 'Go', 'Rust'],
      frontend: ['React', 'Next.js', 'Vue.js', 'Angular'],
      backend: ['Node.js', 'NestJS', 'FastAPI', 'Go'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch'],
      cloud: ['AWS', 'Google Cloud', 'Azure'],
      devOps: ['Docker', 'Kubernetes', 'GitHub Actions', 'Jenkins'],
      testing: ['Jest', 'Cypress', 'Playwright']
    },
    healthcare: {
      languages: ['TypeScript', 'Python', 'Java'],
      frontend: ['React', 'Angular'],
      backend: ['Node.js', 'Spring Boot'],
      database: ['PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Azure']
    },
    retail: {
      languages: ['TypeScript', 'Python'],
      frontend: ['React', 'Next.js', 'Vue.js'],
      backend: ['Node.js', 'Django'],
      database: ['PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Google Cloud']
    },
    manufacturing: {
      languages: ['TypeScript', 'Python', 'Java'],
      frontend: ['React', 'Angular'],
      backend: ['Node.js', 'Spring Boot'],
      database: ['PostgreSQL', 'MySQL'],
      cloud: ['AWS', 'Azure']
    },
    education: {
      languages: ['TypeScript', 'Python'],
      frontend: ['React', 'Next.js'],
      backend: ['Node.js', 'Django'],
      database: ['PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Google Cloud']
    }
  },
  
  enterprise: {
    finance: {
      languages: ['TypeScript', 'Python', 'Java', 'C#'],
      frontend: ['React', 'Angular', 'Next.js'],
      backend: ['Node.js', 'Spring Boot', '.NET Core', 'Django'],
      database: ['Oracle', 'SQL Server', 'PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Azure', 'Google Cloud', 'Private Cloud'],
      security: ['Okta', 'ForgeRock', 'Azure AD', 'Custom IAM'],
      devOps: ['Kubernetes', 'Terraform', 'Jenkins', 'GitLab CI/CD'],
      analytics: ['Tableau', 'Power BI', 'Looker']
    },
    // Other industries would follow this highest complexity pattern
    technology: {
      languages: ['TypeScript', 'Python', 'Go', 'Rust', 'Java', 'C#'],
      frontend: ['React', 'Next.js', 'Angular', 'Vue.js', 'Custom frameworks'],
      backend: ['Node.js', 'NestJS', 'Spring Boot', '.NET Core', 'Go', 'Custom frameworks'],
      database: ['PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'Cassandra', 'SQL Server'],
      cloud: ['AWS', 'Google Cloud', 'Azure', 'Private Cloud', 'Multi-cloud'],
      devOps: ['Kubernetes', 'Terraform', 'GitHub Enterprise', 'Jenkins', 'ArgoCD'],
      testing: ['Jest', 'Cypress', 'Playwright', 'Selenium', 'Custom frameworks'],
      analytics: ['Datadog', 'New Relic', 'Splunk', 'Custom solutions']
    },
    healthcare: {
      languages: ['TypeScript', 'Python', 'Java', 'C#'],
      frontend: ['React', 'Angular'],
      backend: ['Node.js', 'Spring Boot', '.NET Core'],
      database: ['Oracle', 'SQL Server', 'PostgreSQL'],
      cloud: ['AWS', 'Azure', 'Private Cloud']
    },
    retail: {
      languages: ['TypeScript', 'Python', 'Java'],
      frontend: ['React', 'Angular', 'Next.js'],
      backend: ['Node.js', 'Spring Boot', 'Django'],
      database: ['Oracle', 'PostgreSQL', 'MongoDB'],
      cloud: ['AWS', 'Google Cloud', 'Azure']
    },
    manufacturing: {
      languages: ['TypeScript', 'Python', 'Java', 'C#'],
      frontend: ['React', 'Angular'],
      backend: ['Node.js', 'Spring Boot', '.NET Core'],
      database: ['Oracle', 'SQL Server', 'PostgreSQL'],
      cloud: ['AWS', 'Azure', 'Private Cloud']
    },
    education: {
      languages: ['TypeScript', 'Python', 'Java'],
      frontend: ['React', 'Angular', 'Next.js'],
      backend: ['Node.js', 'Spring Boot', 'Django'],
      database: ['PostgreSQL', 'MongoDB', 'SQL Server'],
      cloud: ['AWS', 'Azure', 'Google Cloud']
    }
  }
};
