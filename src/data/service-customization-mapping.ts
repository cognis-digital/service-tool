import { ServiceCategory, Industry, BusinessScale } from '../types';

export const serviceCustomizationMap = {
  // Mapping for security packages – reuse generic web-app options for now
  'startup-security-package': {
    design: ['minimal', 'modern'],
    tech: {
      backend: ['node'],
      database: ['postgresql']
    },
    features: {
      individual: ['dns-protection', 'basic-vpn'],
      startup: ['dns-protection', 'basic-vpn', 'cloud-security-monitor'],
      'small-business': ['dns-protection', 'basic-vpn', 'compliance-dashboard'],
      enterprise: ['dns-protection', 'basic-vpn', 'red-team']
    },
    security: ['audit', 'monitoring'],
    integrations: {
      authentication: ['auth0'],
      storage: ['aws-s3']
    }
  },
  'web-app': {
    design: ['minimal', 'modern', 'premium'],
    tech: {
      frontend: ['react', 'vue', 'svelte'],
      backend: ['node', 'python', 'go'],
      database: ['postgresql', 'mongodb']
    },
    features: {
      individual: ['responsive-design', 'dark-mode'],
      startup: ['responsive-design', 'dark-mode', 'animations', 'realtime'],
      'small-business': ['responsive-design', 'dark-mode', 'animations', 'realtime-advanced', 'analytics-pro'],
      enterprise: ['responsive-design', 'dark-mode', 'animations', 'realtime-enterprise', 'analytics-enterprise', 'ai-advanced']
    },
    industryFeatures: {
      healthcare: ['hipaa-compliance', 'patient-portal', 'ehr-integration'],
      finance: ['pci-compliance', 'fraud-detection', 'banking-integration'],
      ecommerce: ['inventory-management', 'payment-gateway', 'marketplace']
    },
    integrations: {
      payment: ['stripe', 'crypto-payments'],
      authentication: ['auth0', 'web3-auth'],
      storage: ['aws-s3', 'ipfs'],
      ai: ['openai', 'custom-ml']
    }
  },
  'mobile-app': {
    design: ['minimal', 'modern', 'premium'],
    tech: {
      mobile: ['react-native', 'flutter']
    },
    features: {
      individual: ['offline-basic', 'push-notifications'],
      startup: ['offline-basic', 'push-advanced', 'analytics-mobile'],
      'small-business': ['sync-pro', 'push-advanced', 'analytics-mobile', 'payment-gateway'],
      enterprise: ['white-label', 'enterprise-auth', 'sync-pro', 'analytics-enterprise']
    },
    industryFeatures: {
      healthcare: ['hipaa-compliance', 'telemedicine', 'patient-portal'],
      finance: ['pci-compliance', 'banking-integration', 'fraud-detection'],
      ecommerce: ['inventory-management', 'payment-gateway', 'omnichannel']
    },
    integrations: {
      payment: ['stripe', 'crypto-payments'],
      authentication: ['auth0'],
      storage: ['aws-s3'],
      ai: ['openai']
    }
  },
  'blockchain': {
    platforms: ['ethereum', 'solana', 'polygon'],
    features: {
      individual: ['token-creation', 'wallet-integration'],
      startup: ['token-creation', 'wallet-integration', 'defi-basic'],
      'small-business': ['defi-advanced', 'dao-framework', 'nft-platform'],
      enterprise: ['private-blockchain', 'defi-enterprise', 'custom-blockchain']
    },
    security: ['audit', 'monitoring'],
    industryFeatures: {
      finance: ['trading-integration', 'defi-features'],
      gaming: ['nft-marketplace', 'game-economy'],
      defi: ['liquidity-pools', 'yield-farming']
    },
    integrations: {
      authentication: ['web3-auth'],
      storage: ['ipfs']
    }
  },
  'ai-ml': {
    tech: {
      backend: ['python'],
      database: ['postgresql']
    },
    features: {
      individual: ['ml-basic', 'data-processing'],
      startup: ['custom-ml', 'automl'],
      'small-business': ['advanced-ml', 'mlops'],
      enterprise: ['ai-platform', 'custom-research']
    },
    industryFeatures: {
      healthcare: ['medical-imaging', 'diagnosis-assistance'],
      finance: ['fraud-detection', 'risk-assessment'],
      retail: ['recommendation-engine', 'demand-forecasting']
    },
    integrations: {
      ai: ['openai', 'custom-ml'],
      storage: ['aws-s3']
    }
  }
};

export const getAvailableCustomizations = (
  serviceId: string,
  scale: BusinessScale,
  industry?: Industry
) => {
  try {
    console.log(`Getting customizations for service: ${serviceId}, scale: ${scale}, industry: ${industry || 'none'}`);
    
    if (!serviceId) {
      console.error('No serviceId provided to getAvailableCustomizations');
      return null;
    }
    
    const serviceMap = serviceCustomizationMap[serviceId as keyof typeof serviceCustomizationMap];
    if (!serviceMap) {
      console.error(`No customization mapping found for service: ${serviceId}`);
      return null;
    }
    
    // Validate scale
    if (!scale) {
      console.error('No scale provided to getAvailableCustomizations');
      scale = 'startup'; // Default to startup if not provided
    }
    
    // Create a safe result object with proper type checking for each property
    return {
      design: 'design' in serviceMap ? (serviceMap.design as string[] || []) : [],
      tech: 'tech' in serviceMap ? (serviceMap.tech as Record<string, string[]> || {}) : {},
      features: serviceMap.features && scale in serviceMap.features ? 
        (serviceMap.features[scale as keyof typeof serviceMap.features] as string[] || []) : [],
      industryFeatures: industry && serviceMap.industryFeatures && industry in serviceMap.industryFeatures ? 
        (serviceMap.industryFeatures[industry as keyof typeof serviceMap.industryFeatures] as string[] || []) : [],
      integrations: 'integrations' in serviceMap ? (serviceMap.integrations as Record<string, string[]> || {}) : {},
      platforms: 'platforms' in serviceMap ? (serviceMap.platforms as string[] || []) : [],
      security: 'security' in serviceMap ? (serviceMap.security as string[] || []) : []
    };
  } catch (error) {
    console.error('Error in getAvailableCustomizations:', error);
    return null;
  }
};

export const getServiceDependencies = (serviceId: string) => {
  const dependencies: Record<string, string[]> = {
    'web-app': ['database'],
    'mobile-app': ['backend'],
    'blockchain': ['smart-contracts'],
    'ai-ml': ['data-processing', 'model-training']
  };

  return dependencies[serviceId] || [];
};