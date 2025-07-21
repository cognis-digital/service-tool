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
              price: 49,
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
    ]
  },
  startup: {
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
              price: 199,
              description: '5 YubiKeys for team members',
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
    ]
  },
  'small-business': {
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