export type Scale = 'individual' | 'startup' | 'small-business' | 'enterprise';
export type Industry = 'freelancer' | 'e-commerce' | 'healthcare' | 'finance' | 'technology' | 'education';

export interface Addon {
  id: string;
  name: string;
  price: number;
  description: string;
  features?: string[];
  compatibility?: Scale[];
}

export interface Service {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: {
    base: string[];
    addons: Addon[];
  };
  industryFeatures: Record<Industry, string[]>;
  category: string;
  recommendedFor?: Scale[];
  integrations?: string[];
  compliance?: string[];
  supportLevel?: string;
  security?: Array<{
    id: string;
    name: string;
    price: number;
    description?: string;
  }>;
}

export interface ServiceCategory {
  [scale: string]: {
    [category: string]: Service[];
  };
}

export interface Package {
  name: string;
  description: string;
  services: string[];
  discount: number;
  features?: string[];
  bestFor?: string[];
  minimumCommitment?: string;
}

export const industries: Record<Scale, Industry[]> = {
  'individual': ['freelancer', 'e-commerce', 'education'],
  'startup': ['e-commerce', 'technology', 'education'],
  'small-business': ['e-commerce', 'healthcare', 'finance', 'technology'],
  'enterprise': ['healthcare', 'finance', 'technology']
};

export const services: ServiceCategory = {
  individual: {
    security: [
      {
        id: 'personal-security-suite',
        name: 'Personal Security Suite',
        basePrice: 99,
        description: 'Essential security features for individuals',
        category: 'security',
        recommendedFor: ['individual', 'startup'],
        supportLevel: '24/7 Email Support',
        integrations: [
          'Password managers',
          'Cloud storage services',
          'Email providers',
          'Mobile devices'
        ],
        features: {
          base: [
            'Password Manager with 2FA',
            'Basic VPN (5 locations)',
            'DNS Protection & Ad Blocking',
            'Personal Data Encryption',
            'Secure File Storage (50GB)',
            'Mobile Device Protection',
            'Dark Web Monitoring'
          ],
          addons: [
            {
              id: 'yubikey-personal',
              name: 'YubiKey Personal',
              price: 80,
              description: 'Hardware security key for 2FA',
              features: [
                'Physical security key',
                'FIDO2 support',
                'Touch authentication',
                'Multi-protocol support'
              ],
              compatibility: ['individual', 'startup']
            },
            {
              id: 'advanced-vpn',
              name: 'Advanced VPN Features',
              price: 79,
              description: 'Unlimited locations, dedicated IP, port forwarding',
              features: [
                'Unlimited server locations',
                'Dedicated IP address',
                'Port forwarding',
                'Split tunneling',
                'Multi-hop VPN'
              ]
            },
            {
              id: 'secure-backup',
              name: 'Secure Cloud Backup',
              price: 59,
              description: '500GB encrypted cloud storage with versioning',
              features: [
                'End-to-end encryption',
                'File versioning',
                'Automatic backup',
                'Cross-platform sync',
                'Secure file sharing'
              ]
            },
            {
              id: 'identity-protection',
              name: 'Identity Protection Plus',
              price: 89,
              description: 'Advanced identity monitoring and insurance',
              features: [
                'Credit monitoring',
                'Identity theft insurance',
                'Social media monitoring',
                'Lost wallet protection',
                'Recovery assistance'
              ]
            },
            {
              id: 'family-protection',
              name: 'Family Protection Pack',
              price: 129,
              description: 'Extend protection to 5 family members',
              features: [
                'Family password manager',
                'Parental controls',
                'Location tracking',
                'Screen time management',
                'Safe browsing'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': [
            'Advanced client data encryption',
            'Multi-factor authentication',
            'Secure file sharing with clients',
            'Project data protection'
          ],
          'e-commerce': [
            'PCI DSS compliance support',
            'Payment gateway security',
            'Customer data protection',
            'Shopping cart encryption'
          ],
          'healthcare': [
            'HIPAA compliance support',
            'Patient data encryption',
            'Medical records security',
            'Healthcare API protection'
          ],
          'finance': [
            'Financial data encryption',
            'Transaction security',
            'Regulatory compliance',
            'Fraud prevention'
          ],
          'technology': [
            'Source code protection',
            'Development environment security',
            'API security',
            'Cloud infrastructure protection'
          ],
          'education': [
            'Student data protection',
            'Remote learning security',
            'Educational platform protection',
            'FERPA compliance support'
          ]
        }
      }
    ],
    development: [
      {
        id: 'personal-website',
        name: 'Personal Website & Portfolio',
        basePrice: 1999,
        description: 'Professional website with portfolio showcase',
        category: 'development',
        recommendedFor: ['individual'],
        supportLevel: 'Email Support',
        integrations: ['WordPress', 'Squarespace', 'Netlify', 'GitHub Pages'],
        features: {
          base: [
            'Responsive design',
            'Portfolio gallery',
            'Contact form',
            'SEO optimization',
            'Social media integration',
            'Blog functionality',
            'Analytics setup',
            'Domain & hosting setup'
          ],
          addons: [
            {
              id: 'e-commerce-basic',
              name: 'Basic E-commerce',
              price: 799,
              description: 'Simple online store functionality',
              features: ['Product catalog', 'Shopping cart', 'Payment processing']
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Client testimonials', 'Service packages', 'Booking system'],
          'e-commerce': ['Product showcase', 'Online store', 'Inventory display'],
          'education': ['Course listings', 'Student resources', 'Learning materials'],
          'healthcare': ['Patient information', 'Appointment booking', 'Health resources'],
          'finance': ['Financial planning tools', 'Investment tracking', 'Budget management'],
          'technology': ['Technical documentation', 'API showcase', 'Developer resources']
        }
      }
    ],
    consulting: [
      {
        id: 'freelancer-business-setup',
        name: 'Freelancer Business Setup',
        basePrice: 999,
        description: 'Complete business setup for freelancers',
        category: 'consulting',
        recommendedFor: ['individual'],
        supportLevel: 'Personal Consultation',
        integrations: ['Legal templates', 'Accounting tools', 'Project management'],
        features: {
          base: [
            'Business registration guidance',
            'Contract templates',
            'Pricing strategy',
            'Client acquisition plan',
            'Tax planning basics',
            'Portfolio development',
            'Brand identity creation'
          ],
          addons: []
        },
        industryFeatures: {
          'freelancer': ['Specialized contracts', 'Industry pricing', 'Network building'],
          'e-commerce': ['Online selling setup', 'Product sourcing', 'Marketing basics'],
          'education': ['Course creation', 'Student management', 'Content strategy'],
          'healthcare': ['Practice setup', 'Patient management', 'Compliance guidance'],
          'finance': ['Financial planning', 'Investment strategies', 'Risk management'],
          'technology': ['Tech stack selection', 'Development processes', 'Team building']
        }
      }
    ]
  },
  startup: {
    automation: [
      {
        id: 'workflow-automation',
        name: 'n8n Workflow Automation',
        basePrice: 3499,
        description: 'Powerful workflow automation platform for business processes',
        category: 'automation',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: 'Business Hours Support',
        integrations: [
          'CRM systems',
          'Project management tools',
          'Communication platforms',
          'Marketing automation',
          'Data storage solutions'
        ],
        features: {
          base: [
            'Visual Workflow Builder',
            '100+ App Integrations',
            'Custom Triggers & Webhooks',
            'Error Handling & Retries',
            'Scheduled Workflows',
            'Conditional Logic',
            'Data Transformation Tools',
            'Custom Functions Support'
          ],
          addons: [
            {
              id: 'advanced-workflows',
              name: 'Advanced Workflows Package',
              price: 1799,
              description: 'Enterprise-grade workflow capabilities',
              features: [
                'Complex branching logic',
                'Advanced error handling',
                'Custom code execution',
                'Nested workflows',
                'Version control'
              ]
            },
            {
              id: 'workflow-templates',
              name: 'Industry Workflow Templates',
              price: 999,
              description: 'Pre-built workflows for common business scenarios',
              features: [
                'Lead nurturing workflows',
                'Customer onboarding',
                'Approval processes',
                'Data synchronization',
                'Reporting automation'
              ]
            },
            {
              id: 'enterprise-connections',
              name: 'Enterprise Connections',
              price: 1499,
              description: 'Connect to enterprise systems and databases',
              features: [
                'ERP integration',
                'Legacy system connectors',
                'Database direct access',
                'Custom API builders',
                'Secure credential handling'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Client onboarding', 'Invoice automation', 'Project tracking'],
          'e-commerce': ['Order processing', 'Inventory updates', 'Customer communications'],
          'education': ['Student enrollment', 'Assignment distribution', 'Grading workflows'],
          'healthcare': ['Patient scheduling', 'Insurance verification', 'Compliance reporting'],
          'finance': ['Transaction processing', 'Compliance workflows', 'Reporting automation'],
          'technology': ['DevOps automation', 'Testing workflows', 'Deployment pipelines']
        }
      }
    ],
    crm: [
      {
        id: 'crm-platform',
        name: 'Comprehensive CRM Platform',
        basePrice: 4999,
        description: 'Complete customer relationship management solution',
        category: 'crm',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: 'Priority Business Support',
        integrations: [
          'Email marketing platforms',
          'Communication tools',
          'Payment processors',
          'Social media platforms',
          'Analytics tools'
        ],
        features: {
          base: [
            'Contact Management',
            'Deal Pipeline',
            'Email Integration',
            'Task Management',
            'Customer Analytics',
            'Sales Forecasting',
            'Mobile Access',
            'Document Storage'
          ],
          addons: [
            {
              id: 'marketing-automation',
              name: 'Marketing Automation Suite',
              price: 1999,
              description: 'Advanced marketing tools for lead nurturing',
              features: [
                'Email campaign builder',
                'Landing page creator',
                'Lead scoring',
                'A/B testing',
                'Customer journey mapping'
              ]
            },
            {
              id: 'sales-intelligence',
              name: 'Sales Intelligence Tools',
              price: 1699,
              description: 'AI-powered sales insights and recommendations',
              features: [
                'Deal likelihood prediction',
                'Next best action recommendations',
                'Competitor intelligence',
                'Sales coaching insights',
                'Pipeline analytics'
              ]
            },
            {
              id: 'service-desk',
              name: 'Customer Service Desk',
              price: 1499,
              description: 'Support ticket management and service automation',
              features: [
                'Ticket routing',
                'SLA management',
                'Knowledge base',
                'Customer satisfaction tracking',
                'Service automation'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Client project tracking', 'Proposal templates', 'Time tracking'],
          'e-commerce': ['Customer purchase history', 'Product recommendations', 'Loyalty program'],
          'education': ['Student enrollment tracking', 'Course management', 'Alumni relations'],
          'healthcare': ['Patient relationship management', 'Appointment scheduling', 'Follow-up automation'],
          'finance': ['Client portfolio tracking', 'Investment opportunities', 'Financial planning tools'],
          'technology': ['User onboarding', 'Feature request tracking', 'Customer success monitoring']
        }
      }
    ],
    api: [
      {
        id: 'api-integration-platform',
        name: 'API Integration Platform',
        basePrice: 3999,
        description: 'Comprehensive API management and integration solution',
        category: 'api',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: 'Technical Support with SLA',
        integrations: [
          'Cloud platforms',
          'Database systems',
          'Analytics tools',
          'SaaS applications',
          'Legacy systems'
        ],
        features: {
          base: [
            'API Gateway',
            'Visual Integration Builder',
            'Authentication Management',
            'Rate Limiting',
            'Logging & Monitoring',
            'Data Transformation',
            'Request/Response Validation',
            'Error Handling'
          ],
          addons: [
            {
              id: 'developer-portal',
              name: 'Developer Portal',
              price: 1499,
              description: 'Self-service portal for API documentation and testing',
              features: [
                'Interactive API documentation',
                'API key management',
                'Usage analytics',
                'Developer onboarding',
                'Code samples generator'
              ]
            },
            {
              id: 'industry-connectors',
              name: 'Industry API Connectors',
              price: 1999,
              description: 'Pre-built connectors for industry-specific systems',
              features: [
                'Healthcare system integrations',
                'Financial services connectors',
                'Retail & e-commerce APIs',
                'Education platform connectors',
                'Manufacturing system APIs'
              ]
            },
            {
              id: 'advanced-security',
              name: 'Advanced API Security',
              price: 2199,
              description: 'Enterprise-grade security features for APIs',
              features: [
                'OAuth 2.0 & OpenID Connect',
                'Threat protection',
                'Data encryption',
                'Access control policies',
                'Security auditing'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Client system integrations', 'Service automation', 'Reporting APIs'],
          'e-commerce': ['Shopping cart integration', 'Payment gateway APIs', 'Inventory synchronization'],
          'education': ['Learning management systems', 'Student information APIs', 'Content delivery'],
          'healthcare': ['EHR integration', 'Patient data exchange', 'Billing system connections'],
          'finance': ['Banking APIs', 'Payment processing', 'Financial data aggregation'],
          'technology': ['SaaS platform integration', 'User authentication', 'Data synchronization']
        }
      }
    ],
    monitoring: [
      {
        id: 'automated-alert-system',
        name: 'Intelligent Alert & Monitoring System',
        basePrice: 2999,
        description: 'Comprehensive monitoring and alert platform for business systems',
        category: 'monitoring',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: '24/7 Technical Support',
        integrations: [
          'Communication platforms',
          'Ticketing systems',
          'Infrastructure monitoring',
          'Business intelligence tools',
          'Incident management'
        ],
        features: {
          base: [
            'Real-time Monitoring Dashboard',
            'Multi-channel Alerts (Email, SMS, Push)',
            'Custom Alert Rules',
            'Scheduled Reports',
            'Threshold-based Triggers',
            'Alert Escalation Policies',
            'Incident Response Workflow',
            'Status Page Integration'
          ],
          addons: [
            {
              id: 'ai-anomaly-detection',
              name: 'AI Anomaly Detection',
              price: 1699,
              description: 'Machine learning-based anomaly detection system',
              features: [
                'Pattern recognition',
                'Predictive alerting',
                'Behavioral analysis',
                'Automated root cause analysis',
                'Learning algorithms'
              ]
            },
            {
              id: 'business-metrics',
              name: 'Business Metrics Monitoring',
              price: 1299,
              description: 'Monitor KPIs and business metrics with alerts',
              features: [
                'KPI dashboard',
                'Goal tracking',
                'Custom business metrics',
                'Performance analytics',
                'Executive reports'
              ]
            },
            {
              id: 'compliance-monitoring',
              name: 'Compliance Monitoring Suite',
              price: 1899,
              description: 'Monitor and alert on compliance-related metrics',
              features: [
                'Regulatory compliance checks',
                'Audit trail',
                'Policy enforcement',
                'Compliance reporting',
                'Risk assessment'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Project deadline alerts', 'Client communication monitoring', 'Billing reminders'],
          'e-commerce': ['Inventory alerts', 'Sales performance monitoring', 'Customer service metrics'],
          'education': ['Student performance alerts', 'Attendance monitoring', 'Deadline tracking'],
          'healthcare': ['Patient monitoring alerts', 'Staff scheduling', 'Regulatory compliance'],
          'finance': ['Market change alerts', 'Transaction monitoring', 'Compliance violations'],
          'technology': ['System performance', 'Error monitoring', 'Deployment alerts']
        }
      }
    ],
    security: [
      {
        id: 'startup-security-package',
        name: 'Startup Security Package',
        basePrice: 299,
        description: 'Comprehensive security for growing teams',
        category: 'security',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: '24/7 Priority Support',
        integrations: [
          'Identity providers',
          'Cloud platforms',
          'Development tools',
          'Collaboration software'
        ],
        features: {
          base: [
            'Team Password Manager with SSO',
            'Business VPN (25 locations)',
            'Advanced Firewall & IDS',
            'Security Training Platform',
            'Endpoint Protection',
            'Cloud Security Monitor',
            'Compliance Dashboard',
            'Asset Management',
            'Incident Response Plan',
            'Vulnerability Scanner'
          ],
          addons: [
            {
              id: 'yubikey-team',
              name: 'YubiKey Team Pack',
              price: 400,
              description: '5 YubiKeys for team members ($80 each)',
              features: [
                'Enterprise security keys',
                'Team management portal',
                'Hardware-based authentication',
                'Multi-protocol support'
              ]
            },
            {
              id: 'advanced-training',
              name: 'Advanced Security Training',
              price: 499,
              description: 'Comprehensive security training program',
              features: [
                'Interactive courses',
                'Phishing simulations',
                'Compliance training',
                'Security awareness',
                'Progress tracking'
              ]
            },
            {
              id: 'cloud-security',
              name: 'Cloud Security Suite',
              price: 399,
              description: 'Advanced cloud infrastructure protection',
              features: [
                'Cloud asset monitoring',
                'Configuration management',
                'Threat detection',
                'Compliance automation',
                'Cloud firewall'
              ]
            },
            {
              id: 'devsecops-tools',
              name: 'DevSecOps Toolkit',
              price: 599,
              description: 'Security tools for development pipeline',
              features: [
                'Code scanning',
                'Container security',
                'Infrastructure as Code security',
                'CI/CD security',
                'Dependency scanning'
              ]
            },
            {
              id: 'managed-detection',
              name: 'Managed Detection & Response',
              price: 799,
              description: '24/7 security monitoring with threat hunting',
              features: [
                'Real-time monitoring',
                'Threat hunting',
                'Incident response',
                'Security analytics',
                'Compliance reporting'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': [
            'Team collaboration security',
            'Client portal protection',
            'Project data encryption',
            'Secure file sharing'
          ],
          'e-commerce': [
            'Advanced PCI DSS compliance',
            'Multi-vendor security',
            'Marketplace protection',
            'Payment processing security'
          ],
          'healthcare': [
            'Advanced HIPAA compliance',
            'Telemedicine security',
            'Healthcare data protection',
            'Medical device security'
          ],
          'finance': [
            'Banking-grade encryption',
            'Investment data protection',
            'Trading platform security',
            'Financial compliance suite'
          ],
          'technology': [
            'DevSecOps integration',
            'Cloud security automation',
            'Container security',
            'Microservices protection'
          ],
          'education': [
            'Learning platform security',
            'Student data encryption',
            'Virtual classroom protection',
            'Academic integrity tools'
          ]
        }
      }
    ],
    development: [
      {
        id: 'full-stack-web-app',
        name: 'Full-Stack Web Application',
        basePrice: 7999,
        description: 'End-to-end development of a responsive web application',
        category: 'development',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: '24/7 Development Support',
        integrations: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
        features: {
          base: [
            'Requirements analysis & planning',
            'UI/UX design & prototyping',
            'Frontend development (React/Vue/Angular)',
            'Backend API development',
            'Database design & optimization',
            'Authentication & authorization',
            'Testing & quality assurance',
            'CI/CD pipeline setup',
            'Performance optimization',
            'Documentation & training'
          ],
          addons: [
            {
              id: 'advanced-analytics',
              name: 'Advanced Analytics Dashboard',
              price: 1999,
              description: 'Real-time analytics and reporting',
              features: ['Custom dashboards', 'Data visualization', 'Export capabilities']
            }
          ]
        },
        industryFeatures: {
          'e-commerce': ['Shopping cart', 'Payment gateway', 'Inventory management'],
          'technology': ['API documentation', 'Developer portal', 'Webhook support'],
          'education': ['LMS integration', 'Student portal', 'Grade management'],
          'healthcare': ['HIPAA compliance', 'Patient portal', 'Appointment system'],
          'finance': ['Transaction tracking', 'Compliance reporting', 'Audit trails'],
          'freelancer': ['Client portal', 'Project tracking', 'Invoice generation']
        }
      },
      {
        id: 'mobile-app-development',
        name: 'Cross-Platform Mobile App',
        basePrice: 12999,
        description: 'Native iOS and Android app development',
        category: 'development',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: 'Priority Mobile Support',
        integrations: ['React Native', 'Flutter', 'Firebase', 'App Store Connect'],
        features: {
          base: [
            'iOS & Android development',
            'Cross-platform compatibility',
            'Push notifications',
            'Offline functionality',
            'App store deployment'
          ],
          addons: []
        },
        industryFeatures: {
          'e-commerce': ['Mobile commerce', 'Barcode scanning', 'Location-based offers'],
          'technology': ['Developer tools', 'API testing', 'Code sharing'],
          'education': ['Offline learning', 'Progress tracking', 'Interactive content'],
          'healthcare': ['Telemedicine', 'Health tracking', 'Medication reminders'],
          'finance': ['Mobile banking', 'Biometric auth', 'Transaction alerts'],
          'freelancer': ['Time tracking', 'Expense management', 'Client communication']
        }
      },
      {
        id: 'web3-dapp-development',
        name: 'Web3 DApp Development',
        basePrice: 15999,
        description: 'Decentralized application with smart contracts',
        category: 'development',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: 'Web3 Expert Support',
        integrations: ['Ethereum', 'Polygon', 'Solidity', 'IPFS', 'MetaMask'],
        features: {
          base: [
            'Smart contract development',
            'Web3 frontend integration',
            'Wallet connection (MetaMask, WalletConnect)',
            'IPFS storage integration',
            'Gas optimization',
            'Security audit preparation',
            'Testnet deployment',
            'Mainnet deployment',
            'Documentation & guides',
            'Community setup'
          ],
          addons: [
            {
              id: 'nft-marketplace',
              name: 'NFT Marketplace Features',
              price: 4999,
              description: 'Complete NFT trading platform',
              features: ['Minting interface', 'Trading functionality', 'Royalty system']
            }
          ]
        },
        industryFeatures: {
          'e-commerce': ['Crypto payments', 'Loyalty tokens', 'Supply chain tracking'],
          'technology': ['Developer DAO', 'Code bounties', 'Decentralized hosting'],
          'education': ['Credential verification', 'Learning tokens', 'Decentralized courses'],
          'healthcare': ['Medical records', 'Drug traceability', 'Research data'],
          'finance': ['DeFi protocols', 'Lending platforms', 'Insurance products'],
          'freelancer': ['Decentralized freelancing', 'Escrow contracts', 'Reputation system']
        }
      }
    ],
    consulting: [
      {
        id: 'digital-transformation',
        name: 'Digital Transformation Consulting',
        basePrice: 4999,
        description: 'Strategic guidance for digital modernization',
        category: 'consulting',
        recommendedFor: ['startup', 'small-business'],
        supportLevel: 'Executive Consulting',
        integrations: ['Strategy frameworks', 'Assessment tools', 'Implementation roadmaps'],
        features: {
          base: [
            'Current state assessment',
            'Digital strategy development',
            'Technology roadmap creation',
            'Change management planning',
            'ROI analysis & projections'
          ],
          addons: []
        },
        industryFeatures: {
          'e-commerce': ['Omnichannel strategy', 'Customer journey mapping', 'Conversion optimization'],
          'technology': ['DevOps transformation', 'Cloud migration', 'Agile adoption'],
          'education': ['EdTech integration', 'Remote learning', 'Student engagement'],
          'healthcare': ['Telehealth strategy', 'EHR optimization', 'Patient experience'],
          'finance': ['Fintech integration', 'Regulatory compliance', 'Customer onboarding'],
          'freelancer': ['Personal branding', 'Client acquisition', 'Service optimization']
        }
      }
    ]
  },
  'small-business': {
    crm: [
      {
        id: 'enterprise-crm-solution',
        name: 'Enterprise CRM Solution',
        basePrice: 8999,
        description: 'Advanced CRM platform with enterprise-grade features',
        category: 'crm',
        recommendedFor: ['small-business', 'enterprise'],
        supportLevel: 'Dedicated Account Manager',
        integrations: [
          'ERP systems',
          'Business intelligence',
          'Marketing platforms',
          'Support systems',
          'Custom business applications'
        ],
        features: {
          base: [
            'Multi-department CRM',
            'Advanced Workflow Automation',
            'Enterprise Analytics',
            'Territory Management',
            'Forecasting Engine',
            'Custom Object Creation',
            'Advanced Security Controls',
            'API Access & Custom Integration'
          ],
          addons: [
            {
              id: 'ai-sales-assistant',
              name: 'AI Sales Assistant',
              price: 3999,
              description: 'AI-powered sales intelligence and automation',
              features: [
                'Predictive lead scoring',
                'Conversation intelligence',
                'Opportunity insights',
                'Automated follow-ups',
                'Sales coaching'
              ]
            },
            {
              id: 'advanced-analytics',
              name: 'Advanced Analytics Platform',
              price: 4999,
              description: 'Business intelligence tools for CRM data',
              features: [
                'Custom dashboards',
                'Predictive analytics',
                'Data visualization',
                'Custom reporting',
                'Data integration tools'
              ]
            },
            {
              id: 'industry-crm',
              name: 'Industry-Specific CRM Module',
              price: 3499,
              description: 'Specialized CRM features for your industry',
              features: [
                'Industry workflows',
                'Compliance tools',
                'Specialized data models',
                'Industry reporting',
                'Integration with industry systems'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Agency management tools', 'Client success tracking', 'Resource allocation'],
          'e-commerce': ['Omnichannel customer view', 'Advanced segmentation', 'Lifetime value analysis'],
          'education': ['Institutional advancement', 'Major donor tracking', 'Program management'],
          'healthcare': ['Provider relationship management', 'Referral tracking', 'Patient journey mapping'],
          'finance': ['Wealth management tools', 'Client portfolio tracking', 'Compliance documentation'],
          'technology': ['Product usage analytics', 'Customer health scoring', 'Renewal management']
        }
      }
    ],
    automation: [
      {
        id: 'enterprise-automation',
        name: 'Enterprise Automation Platform',
        basePrice: 7999,
        description: 'Comprehensive automation solution for business processes',
        category: 'automation',
        recommendedFor: ['small-business', 'enterprise'],
        supportLevel: 'Enterprise SLA with Dedicated Support',
        integrations: [
          'ERP systems',
          'CRM platforms',
          'HR management',
          'Finance systems',
          'Custom enterprise applications'
        ],
        features: {
          base: [
            'Cross-platform Workflow Builder',
            'Enterprise Process Automation',
            'Custom Integration Framework',
            'Business Rule Engine',
            'Multi-environment Deployment',
            'Audit Logging & Compliance',
            'Role-based Access Control',
            'Process Analytics Dashboard'
          ],
          addons: [
            {
              id: 'process-mining',
              name: 'Process Mining & Optimization',
              price: 5999,
              description: 'Identify and optimize business processes',
              features: [
                'Process discovery',
                'Bottleneck analysis',
                'Compliance checking',
                'Process simulation',
                'Optimization recommendations'
              ]
            },
            {
              id: 'robotic-automation',
              name: 'Robotic Process Automation',
              price: 6999,
              description: 'Software robots for repetitive tasks',
              features: [
                'Visual bot builder',
                'Screen scraping',
                'Task recording',
                'Attended & unattended bots',
                'OCR capabilities'
              ]
            },
            {
              id: 'decision-automation',
              name: 'Intelligent Decision Automation',
              price: 4999,
              description: 'AI-powered decision making for processes',
              features: [
                'Decision modeling',
                'Business rules management',
                'Machine learning integration',
                'Decision analytics',
                'Scenario testing'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Agency operations', 'Resource management', 'Client workflow automation'],
          'e-commerce': ['Order management', 'Supply chain automation', 'Customer service workflows'],
          'education': ['Enrollment processes', 'Administrative automation', 'Learning delivery'],
          'healthcare': ['Patient journey automation', 'Claims processing', 'Compliance workflows'],
          'finance': ['Transaction processing', 'Regulatory reporting', 'Risk assessment automation'],
          'technology': ['DevOps automation', 'Customer onboarding', 'Support ticket routing']
        }
      }
    ],
    api: [
      {
        id: 'enterprise-api-platform',
        name: 'Enterprise API Management Platform',
        basePrice: 9999,
        description: 'Full lifecycle API management for enterprises',
        category: 'api',
        recommendedFor: ['small-business', 'enterprise'],
        supportLevel: 'Enterprise Support with Dedicated Engineering',
        integrations: [
          'Legacy systems',
          'Cloud services',
          'Microservices',
          'Data warehouses',
          'Business applications'
        ],
        features: {
          base: [
            'API Lifecycle Management',
            'Gateway Clustering & High Availability',
            'Multi-datacenter Deployment',
            'Advanced Security & Governance',
            'Traffic Management & Throttling',
            'Analytics & Business Insights',
            'Monetization & Billing',
            'Developer Ecosystem Tools'
          ],
          addons: [
            {
              id: 'full-lifecycle',
              name: 'Full API Lifecycle Management',
              price: 7999,
              description: 'Design, build, test, and document APIs',
              features: [
                'API design tools',
                'Automated testing',
                'Version management',
                'Deployment automation',
                'Schema governance'
              ]
            },
            {
              id: 'api-security-suite',
              name: 'API Security & Compliance Suite',
              price: 8999,
              description: 'Enterprise-grade API security',
              features: [
                'Advanced threat protection',
                'Security analytics',
                'Compliance frameworks',
                'PII data protection',
                'Vulnerability scanning'
              ]
            },
            {
              id: 'api-monetization',
              name: 'API Monetization Platform',
              price: 6999,
              description: 'Monetize APIs with various business models',
              features: [
                'Usage-based billing',
                'Subscription management',
                'Revenue sharing',
                'Payment processing',
                'Partner management'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Agency API ecosystem', 'Client systems integration', 'Service delivery APIs'],
          'e-commerce': ['Omnichannel API strategy', 'Marketplace integrations', 'Supply chain APIs'],
          'education': ['Learning tools interoperability', 'Data exchange standards', 'Research APIs'],
          'healthcare': ['FHIR implementation', 'Healthcare interoperability', 'Medical device integration'],
          'finance': ['Open banking APIs', 'Financial data exchange', 'Regulatory reporting'],
          'technology': ['Product APIs', 'Platform ecosystem', 'Partner integrations']
        }
      }
    ],
    monitoring: [
      {
        id: 'enterprise-monitoring',
        name: 'Enterprise Monitoring & Alert System',
        basePrice: 8999,
        description: 'Comprehensive monitoring solution for enterprise systems',
        category: 'monitoring',
        recommendedFor: ['small-business', 'enterprise'],
        supportLevel: '24/7 Enterprise Support with Incident Response',
        integrations: [
          'Enterprise systems',
          'Cloud platforms',
          'Network infrastructure',
          'Business applications',
          'IoT devices'
        ],
        features: {
          base: [
            'Unified Monitoring Dashboard',
            'Multi-channel Alert System',
            'SLA Management',
            'Advanced Alert Correlation',
            'Root Cause Analysis',
            'Custom Metrics & KPIs',
            'Incident Management Workflow',
            'Executive Reporting'
          ],
          addons: [
            {
              id: 'aiops-platform',
              name: 'AIOps Platform',
              price: 7999,
              description: 'AI-powered IT operations',
              features: [
                'Intelligent alert grouping',
                'Automated incident triage',
                'Predictive analytics',
                'Anomaly detection',
                'Service dependency mapping'
              ]
            },
            {
              id: 'business-impact',
              name: 'Business Impact Analysis',
              price: 5999,
              description: 'Measure business impact of technical incidents',
              features: [
                'Service mapping',
                'Financial impact assessment',
                'Customer impact analysis',
                'SLA impact tracking',
                'Business continuity metrics'
              ]
            },
            {
              id: 'security-monitoring',
              name: 'Advanced Security Monitoring',
              price: 6999,
              description: 'Security-focused monitoring and alerts',
              features: [
                'Threat detection',
                'Security incident response',
                'Compliance monitoring',
                'Vulnerability alerts',
                'Security analytics'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': ['Agency performance', 'Client SLA monitoring', 'Resource utilization'],
          'e-commerce': ['Digital experience monitoring', 'Conversion funnel alerts', 'Supply chain visibility'],
          'education': ['Learning platform monitoring', 'Student experience metrics', 'Administrative systems'],
          'healthcare': ['Patient care monitoring', 'Clinical systems alerts', 'Regulatory compliance'],
          'finance': ['Transaction monitoring', 'Trading systems', 'Regulatory reporting alerts'],
          'technology': ['Platform reliability', 'Service performance', 'Customer experience monitoring']
        }
      }
    ],
    security: [
      {
        id: 'business-security-suite',
        name: 'Business Security Suite',
        basePrice: 999,
        description: 'Enterprise-grade security for small businesses',
        category: 'security',
        recommendedFor: ['small-business'],
        supportLevel: '24/7 Dedicated Support',
        integrations: [
          'Enterprise systems',
          'Cloud services',
          'Business applications',
          'Security tools'
        ],
        features: {
          base: [
            'Enterprise Password Manager',
            'Dedicated VPN Infrastructure',
            'Next-Gen Firewall',
            'Advanced Threat Protection',
            'Compliance Management',
            'Security Operations Center',
            'Employee Security Training',
            'Device Management',
            'Data Loss Prevention',
            'Access Control System',
            'Network Monitoring',
            'Backup & Recovery'
          ],
          addons: [
            {
              id: 'hardware-security',
              name: 'Hardware Security Bundle',
              price: 2499,
              description: 'Complete hardware security solution',
              features: [
                'Security key infrastructure',
                'Hardware firewall',
                'Secure network devices',
                'Physical access control',
                'Encrypted storage devices'
              ]
            },
            {
              id: 'compliance-pack',
              name: 'Compliance Package',
              price: 1999,
              description: 'Industry-specific compliance tools',
              features: [
                'Compliance automation',
                'Audit management',
                'Policy enforcement',
                'Risk assessment',
                'Reporting tools'
              ]
            },
            {
              id: 'advanced-soc',
              name: 'Advanced SOC',
              price: 2999,
              description: '24/7 security monitoring with threat hunting',
              features: [
                'Real-time monitoring',
                'Threat hunting',
                'Incident response',
                'Security analytics',
                'Threat intelligence'
              ]
            },
            {
              id: 'incident-response',
              name: 'Incident Response Team',
              price: 3999,
              description: 'Dedicated security incident response team',
              features: [
                'Incident investigation',
                'Malware analysis',
                'Forensics',
                'Recovery planning',
                'Post-incident analysis'
              ]
            },
            {
              id: 'security-assessment',
              name: 'Security Assessment',
              price: 4999,
              description: 'Comprehensive security assessment and testing',
              features: [
                'Vulnerability assessment',
                'Penetration testing',
                'Code review',
                'Architecture review',
                'Security training'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': [
            'Enterprise client security',
            'Advanced project protection',
            'Multi-team security',
            'Professional services protection'
          ],
          'e-commerce': [
            'Enterprise e-commerce security',
            'Global marketplace protection',
            'Multi-region compliance',
            'Supply chain security'
          ],
          'healthcare': [
            'Enterprise healthcare security',
            'Hospital system protection',
            'Medical network security',
            'Research data protection'
          ],
          'finance': [
            'Enterprise financial security',
            'Global banking protection',
            'Investment platform security',
            'Financial network protection'
          ],
          'technology': [
            'Enterprise technology security',
            'Global infrastructure protection',
            'Advanced cloud security',
            'Multi-cloud protection'
          ],
          'education': [
            'Institution-wide security',
            'Campus network protection',
            'Research data security',
            'Academic system protection'
          ]
        }
      }
    ]
  },
  enterprise: {
    security: [
      {
        id: 'enterprise-security-platform',
        name: 'Enterprise Security Platform',
        basePrice: 4999,
        description: 'Complete enterprise security solution',
        category: 'security',
        recommendedFor: ['enterprise'],
        supportLevel: '24/7 Premium Support with Dedicated Team',
        integrations: [
          'Enterprise systems',
          'Global infrastructure',
          'Custom solutions',
          'Legacy systems'
        ],
        features: {
          base: [
            'Custom Security Infrastructure',
            'Global VPN Network',
            'Zero Trust Architecture',
            'Advanced Threat Intelligence',
            'Enterprise SOC',
            'Compliance Automation',
            'Identity & Access Management',
            'Cloud Security Posture Management',
            'Container Security',
            'Application Security',
            'Data Governance',
            'Security Orchestration'
          ],
          addons: [
            {
              id: 'global-soc',
              name: 'Global SOC',
              price: 19999,
              description: '24/7 Global Security Operations Centers',
              features: [
                'Multiple SOC locations',
                'Follow-the-sun coverage',
                'Advanced threat hunting',
                'Custom playbooks',
                'Executive reporting'
              ]
            },
            {
              id: 'custom-security',
              name: 'Custom Security Solutions',
              price: 24999,
              description: 'Tailored security infrastructure',
              features: [
                'Custom development',
                'Integration services',
                'Architecture design',
                'Implementation support',
                'Ongoing maintenance'
              ]
            },
            {
              id: 'red-team',
              name: 'Red Team Operations',
              price: 29999,
              description: 'Continuous security assessment and testing',
              features: [
                'Advanced penetration testing',
                'Social engineering',
                'Physical security testing',
                'Custom exploit development',
                'Purple team exercises'
              ]
            },
            {
              id: 'threat-hunting',
              name: 'Advanced Threat Hunting',
              price: 34999,
              description: 'Proactive threat detection and elimination',
              features: [
                'AI-powered detection',
                'Behavioral analytics',
                'Threat intelligence',
                'Automated response',
                'Threat modeling'
              ]
            },
            {
              id: 'quantum-ready',
              name: 'Quantum-Ready Security',
              price: 49999,
              description: 'Future-proof quantum-resistant encryption',
              features: [
                'Post-quantum cryptography',
                'Quantum key distribution',
                'Quantum random number generation',
                'Quantum-safe algorithms',
                'Future compatibility'
              ]
            }
          ]
        },
        industryFeatures: {
          'freelancer': [
            'Enterprise collaboration security',
            'Global project protection',
            'Advanced access control',
            'Secure global communication',
            'Multi-tenant isolation'
          ],
          'e-commerce': [
            'Global payment security',
            'Multi-region compliance',
            'Advanced fraud prevention',
            'Distributed commerce security',
            'Supply chain encryption'
          ],
          'healthcare': [
            'Enterprise HIPAA compliance',
            'Medical network security',
            'Biomedical device protection',
            'Clinical system security',
            'Research data protection',
            'Global healthcare compliance'
          ],
          'finance': [
            'Global financial compliance',
            'High-frequency trading security',
            'Blockchain security',
            'Cross-border transaction protection',
            'Asset management security',
            'Market data protection'
          ],
          'technology': [
            'Global DevSecOps platform',
            'Multi-cloud security',
            'Edge computing security',
            'AI/ML pipeline protection',
            'Quantum computing security',
            'Distributed system protection'
          ],
          'education': [
            'Global education compliance',
            'Research security platform',
            'Academic data protection',
            'International collaboration security',
            'Educational IP protection'
          ]
        }
      }
    ]
  }
};

export const getServicesByScale = (scale: Scale): Service[] => {
  const scaleServices = services[scale];
  if (!scaleServices) return [];
  
  return Object.values(scaleServices).reduce<Service[]>((acc, categoryServices) => {
    return acc.concat(categoryServices);
  }, []);
};

export const getRecommendedPackages = (scale: Scale, industry: Industry): Service[] => {
  const scaleServices = getServicesByScale(scale);
  if (!scaleServices) return [];

  return scaleServices.filter(service => {
    // Check if the service has features for the selected industry
    const hasIndustryFeatures = service.industryFeatures && 
      service.industryFeatures[industry] && 
      service.industryFeatures[industry].length > 0;

    // Check if the service is recommended for the selected scale
    const isRecommendedForScale = !service.recommendedFor || 
      service.recommendedFor.includes(scale);

    return hasIndustryFeatures && isRecommendedForScale;
  });
}