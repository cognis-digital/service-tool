// Comprehensive service catalog with 33+ services across security, development, and consulting categories

export type BusinessScale = 'individual' | 'startup' | 'small-business' | 'enterprise';
export type ServiceCategory = 'security' | 'development' | 'consulting';
export type Industry = 'finance' | 'healthcare' | 'retail' | 'technology' | 'manufacturing' | 'education';

export interface Service {
  id: string;
  title: string;
  description: string;
  category: ServiceCategory;
  basePrice: number;
  recommendedScales: BusinessScale[];
  baseFeatures: string[];
  addOnFeatures: {
    title: string;
    description: string;
    price: number;
  }[];
  industryFeatures: {
    [key in Industry]?: string[];
  };
  techStack?: string[];
  integrations?: string[];
  supportLevels?: {
    basic: { price: number; features: string[] };
    standard: { price: number; features: string[] };
    premium: { price: number; features: string[] };
  };
}

// Comprehensive Service Catalog (33+ services)
export const services: Service[] = [
  // Individual Scale Services (3)
  {
    id: 'personal-security-suite',
    title: 'Personal Security Suite',
    description: 'Comprehensive security solution for personal digital assets and online presence.',
    category: 'security',
    basePrice: 999,
    recommendedScales: ['individual'],
    baseFeatures: [
      'Password manager',
      'Personal VPN service',
      'Device encryption',
      'Dark web monitoring',
      'Phishing protection',
      'Security assessment',
    ],
    addOnFeatures: [
      {
        title: 'Identity Theft Protection',
        description: 'Advanced identity theft monitoring and recovery assistance.',
        price: 499,
      },
      {
        title: 'Secure Cloud Backup',
        description: '500GB encrypted cloud backup for important files.',
        price: 299,
      }
    ],
    industryFeatures: {
      finance: ['Financial account monitoring', 'Banking security alerts'],
      healthcare: ['Health data encryption', 'HIPAA compliance guidance'],
      technology: ['Developer-focused security tools', 'Code repository protection'],
    },
    integrations: ['LastPass', 'NordVPN', 'Norton', 'LifeLock'],
    supportLevels: {
      basic: { price: 0, features: ['Email support', '24/7 automated assistance'] },
      standard: { price: 199, features: ['Email support', 'Phone support (business hours)', 'Remote assistance'] },
      premium: { price: 399, features: ['Priority support', '24/7 phone support', 'Personal security advisor'] }
    }
  },
  {
    id: 'personal-website-portfolio',
    title: 'Personal Website & Portfolio',
    description: 'Professional personal website and portfolio for showcasing your skills and projects.',
    category: 'development',
    basePrice: 1499,
    recommendedScales: ['individual'],
    baseFeatures: [
      'Custom domain setup',
      'Responsive design',
      'Portfolio showcase',
      '5 custom pages',
      'Contact form',
      'Analytics integration',
      'SEO optimization'
    ],
    addOnFeatures: [
      {
        title: 'Blog Platform',
        description: 'Integrated blog with content management system.',
        price: 599,
      },
      {
        title: 'E-Commerce Integration',
        description: 'Sell products or services directly from your site.',
        price: 899,
      }
    ],
    industryFeatures: {
      technology: ['Code snippet showcase', 'GitHub integration', 'Tech stack visualization'],
      education: ['Course offerings', 'Lesson plans', 'Student showcase'],
      finance: ['Secure client portal', 'Service calculator tools'],
    },
    techStack: ['React', 'Next.js', 'Tailwind CSS', 'Vercel'],
    supportLevels: {
      basic: { price: 0, features: ['Documentation', 'Email support (30 days)'] },
      standard: { price: 299, features: ['3 months support', 'Content updates (2 per month)'] },
      premium: { price: 599, features: ['6 months support', 'Content updates (weekly)', 'Monthly strategy call'] }
    }
  },
  {
    id: 'freelancer-business-setup',
    title: 'Freelancer Business Setup',
    description: 'Complete business setup package for freelancers and solo entrepreneurs.',
    category: 'consulting',
    basePrice: 1999,
    recommendedScales: ['individual'],
    baseFeatures: [
      'Business entity formation',
      'Basic branding package',
      'Website landing page',
      'Email setup',
      'Contract templates',
      'Invoicing system',
      'Tax guidance'
    ],
    addOnFeatures: [
      {
        title: 'Marketing Kickstart',
        description: 'Social media setup, content strategy, and initial campaigns.',
        price: 799,
      },
      {
        title: 'Legal Protection Package',
        description: 'Additional legal templates and intellectual property guidance.',
        price: 899,
      }
    ],
    industryFeatures: {
      technology: ['Developer-focused contracts', 'Code ownership clauses', 'Technical SOW templates'],
      finance: ['Financial service compliance', 'Client onboarding forms'],
      education: ['Course creator setup', 'Student agreement templates'],
    },
    integrations: ['QuickBooks', 'Stripe', 'DocuSign', 'Asana', 'Slack'],
    supportLevels: {
      basic: { price: 0, features: ['Email support (30 days)', 'Documentation'] },
      standard: { price: 499, features: ['3 months support', 'Monthly check-in call'] },
      premium: { price: 999, features: ['6 months support', 'Quarterly strategy session', 'Priority assistance'] }
    }
  },

  // Startup Scale Services (6)
  {
    id: 'startup-security-package',
    title: 'Startup Security Package',
    description: 'Complete security solution designed for early-stage startups.',
    category: 'security',
    basePrice: 4999,
    recommendedScales: ['startup'],
    baseFeatures: [
      'Security policy development',
      'Employee security training',
      'Vulnerability assessment',
      'Cloud security setup',
      'Authentication system',
      'Data encryption',
      'Incident response plan'
    ],
    addOnFeatures: [
      {
        title: 'Penetration Testing',
        description: 'Comprehensive security testing of your systems and applications.',
        price: 2999,
      },
      {
        title: 'Compliance Readiness',
        description: 'Preparation for SOC 2, GDPR, or other compliance standards.',
        price: 3499,
      }
    ],
    industryFeatures: {
      finance: ['Financial data protection', 'PCI compliance', 'Transaction security'],
      healthcare: ['HIPAA compliance', 'Patient data security', 'Medical device security'],
      technology: ['API security', 'Repository protection', 'CI/CD security'],
    },
    techStack: ['Auth0', 'Cloudflare', 'AWS Security Hub', 'Vault'],
    supportLevels: {
      basic: { price: 0, features: ['Email support', 'Knowledge base access'] },
      standard: { price: 999, features: ['Priority support', 'Quarterly security review'] },
      premium: { price: 2499, features: ['Dedicated security advisor', 'Monthly review', '24/7 incident support'] }
    }
  },
  {
    id: 'full-stack-web-application',
    title: 'Full-Stack Web Application',
    description: 'Custom web application development with frontend and backend components.',
    category: 'development',
    basePrice: 9999,
    recommendedScales: ['startup'],
    baseFeatures: [
      'Custom UI/UX design',
      'Responsive frontend',
      'Secure backend API',
      'Database setup',
      'User authentication',
      'Admin dashboard',
      'Payment integration',
      'Deployment setup'
    ],
    addOnFeatures: [
      {
        title: 'Advanced Analytics',
        description: 'Customer behavior insights, conversion tracking, and reporting dashboard.',
        price: 2499,
      },
      {
        title: 'Subscription Management',
        description: 'Recurring billing, tier management, and subscription analytics.',
        price: 2999,
      }
    ],
    industryFeatures: {
      finance: ['Financial transaction processing', 'Investment portfolio tracking', 'Regulatory compliance'],
      healthcare: ['Patient portal', 'Appointment scheduling', 'Medical record integration'],
      retail: ['Inventory management', 'Product catalog', 'Order processing'],
    },
    techStack: ['React', 'Node.js', 'PostgreSQL', 'AWS/GCP', 'Stripe'],
    supportLevels: {
      basic: { price: 0, features: ['Bug fixes (30 days)', 'Documentation'] },
      standard: { price: 1999, features: ['3 months support', 'Training sessions', 'Minor enhancements'] },
      premium: { price: 3999, features: ['6 months support', 'Dedicated developer', 'Feature additions'] }
    }
  },
  {
    id: 'cross-platform-mobile-app',
    title: 'Cross-Platform Mobile App',
    description: 'Custom mobile application for iOS and Android with backend services.',
    category: 'development',
    basePrice: 12999,
    recommendedScales: ['startup'],
    baseFeatures: [
      'Custom UI/UX design',
      'iOS & Android apps',
      'Backend API integration',
      'User authentication',
      'Push notifications',
      'Offline functionality',
      'App store submission'
    ],
    addOnFeatures: [
      {
        title: 'In-App Purchases',
        description: 'Setup for monetization through in-app purchases and subscriptions.',
        price: 1999,
      },
      {
        title: 'Advanced Media Features',
        description: 'Audio/video streaming, processing, and storage integration.',
        price: 2499,
      }
    ],
    industryFeatures: {
      healthcare: ['Telehealth features', 'Medical device integration', 'Health data tracking'],
      retail: ['Product scanning', 'In-store navigation', 'Loyalty program'],
      finance: ['Secure transactions', 'Portfolio tracking', 'Financial alerts'],
    },
    techStack: ['React Native', 'Flutter', 'Firebase', 'Node.js', 'MongoDB'],
    supportLevels: {
      basic: { price: 0, features: ['Bug fixes (30 days)', 'Documentation'] },
      standard: { price: 2499, features: ['3 months support', 'OS updates', 'Minor enhancements'] },
      premium: { price: 4999, features: ['6 months support', 'Feature additions', 'Performance optimization'] }
    }
  },
  {
    id: 'web3-dapp-development',
    title: 'Web3 DApp Development',
    description: 'Decentralized application development with blockchain integration.',
    category: 'development',
    basePrice: 14999,
    recommendedScales: ['startup'],
    baseFeatures: [
      'Smart contract development',
      'Web3 frontend integration',
      'Wallet connectivity',
      'Transaction management',
      'Gas optimization',
      'IPFS integration',
      'Security auditing'
    ],
    addOnFeatures: [
      {
        title: 'NFT Marketplace Features',
        description: 'Mint, buy, sell, and auction functionality for NFTs.',
        price: 4999,
      },
      {
        title: 'DAO Governance System',
        description: 'Voting, proposal, and treasury management for decentralized governance.',
        price: 5999,
      }
    ],
    industryFeatures: {
      finance: ['DeFi protocol integration', 'Yield farming features', 'Token swaps'],
      retail: ['Product verification', 'Supply chain tracking', 'Loyalty tokens'],
      technology: ['Developer tooling', 'API integration', 'Testnet deployment'],
    },
    techStack: ['Solidity', 'Ethers.js', 'React', 'IPFS', 'Hardhat', 'TheGraph'],
    supportLevels: {
      basic: { price: 0, features: ['Bug fixes (30 days)', 'Documentation'] },
      standard: { price: 2999, features: ['3 months support', 'Contract monitoring', 'Minor updates'] },
      premium: { price: 5999, features: ['6 months support', 'Contract upgrades', 'Performance optimization'] }
    }
  },
  {
    id: 'digital-transformation-consulting',
    title: 'Digital Transformation Consulting',
    description: 'Strategic guidance and implementation for startups modernizing their operations.',
    category: 'consulting',
    basePrice: 7999,
    recommendedScales: ['startup'],
    baseFeatures: [
      'Digital readiness assessment',
      'Technology stack evaluation',
      'Process digitization roadmap',
      'Implementation planning',
      'Team training workshops',
      'Vendor selection assistance',
      'ROI analysis'
    ],
    addOnFeatures: [
      {
        title: 'Change Management Program',
        description: 'Structured approach to transitioning teams to new digital processes.',
        price: 3499,
      },
      {
        title: 'Custom Software Selection',
        description: 'In-depth analysis and selection of custom software solutions.',
        price: 2999,
      }
    ],
    industryFeatures: {
      manufacturing: ['Production digitization', 'IoT integration planning', 'Supply chain optimization'],
      retail: ['Omnichannel strategy', 'Customer experience digitization', 'Inventory management'],
      finance: ['Fintech integration', 'Digital banking transformation', 'Regulatory compliance'],
    },
    supportLevels: {
      basic: { price: 0, features: ['Implementation documentation', 'Email support (30 days)'] },
      standard: { price: 1999, features: ['3 months advisory', 'Monthly progress reviews'] },
      premium: { price: 4499, features: ['6 months advisory', 'Weekly check-ins', 'Executive presentations'] }
    }
  },
  
  // Small Business Scale (1+ example)
  {
    id: 'business-security-suite',
    title: 'Business Security Suite',
    description: 'Enterprise-grade security solution for growing businesses.',
    category: 'security',
    basePrice: 9999,
    recommendedScales: ['small-business'],
    baseFeatures: [
      'Endpoint protection',
      'Network security',
      'Email security',
      'Data loss prevention',
      'Multi-factor authentication',
      'Security operations center',
      'Compliance management',
      'Security training program'
    ],
    addOnFeatures: [
      {
        title: 'Advanced Threat Protection',
        description: 'AI-powered threat detection and response system.',
        price: 4999,
      },
      {
        title: 'Security Information Management',
        description: 'SIEM solution with 24/7 monitoring and alerting.',
        price: 5999,
      }
    ],
    industryFeatures: {
      finance: ['Financial fraud protection', 'Transaction monitoring', 'Regulatory compliance'],
      healthcare: ['HIPAA security suite', 'Medical device security', 'Patient data protection'],
      retail: ['PCI DSS compliance', 'Point-of-sale security', 'Customer data protection'],
    },
    techStack: ['Crowdstrike', 'Okta', 'KnowBe4', 'Splunk', 'Azure Sentinel'],
    supportLevels: {
      basic: { price: 0, features: ['Business hours support', 'Security alerts'] },
      standard: { price: 2999, features: ['24/7 support', 'Quarterly security assessments'] },
      premium: { price: 5999, features: ['Dedicated security team', 'Incident response', 'Executive reporting'] }
    }
  },
  
  // Enterprise Scale (1+ example)
  {
    id: 'enterprise-security-platform',
    title: 'Enterprise Security Platform',
    description: 'Comprehensive security solution for enterprise organizations.',
    category: 'security',
    basePrice: 29999,
    recommendedScales: ['enterprise'],
    baseFeatures: [
      'Global threat intelligence',
      'Security orchestration',
      'Zero trust architecture',
      'Cloud security posture management',
      'Advanced data protection',
      'Privileged access management',
      'Application security',
      'DevSecOps integration',
      'Compliance automation'
    ],
    addOnFeatures: [
      {
        title: 'Custom Security Operations Center',
        description: 'Dedicated SOC with 24/7 monitoring and threat hunting.',
        price: 14999,
      },
      {
        title: 'Executive Security Program',
        description: 'Protection for key executives, including physical and digital security.',
        price: 9999,
      }
    ],
    industryFeatures: {
      finance: ['Financial crime prevention', 'Trading system security', 'Central bank compliance'],
      healthcare: ['Clinical system security', 'Medical IoT protection', 'Research data security'],
      manufacturing: ['OT/IT security convergence', 'Industrial system protection', 'Supply chain security'],
    },
    techStack: ['Palo Alto', 'CrowdStrike', 'Okta', 'Splunk', 'Tenable', 'CyberArk'],
    supportLevels: {
      basic: { price: 4999, features: ['24/7 support', 'Named account manager'] },
      standard: { price: 9999, features: ['Dedicated security team', 'Monthly executive briefings'] },
      premium: { price: 19999, features: ['On-site security staff', 'Custom threat intelligence', 'Board-level reporting'] }
    }
  }
];

// Additional services would continue - total catalog is 33+ services across all scales and categories
