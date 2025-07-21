import { ServiceCategory, Industry, BusinessScale } from '../types';

export const serviceCustomizationMap = {
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
  const serviceMap = serviceCustomizationMap[serviceId as keyof typeof serviceCustomizationMap];
  if (!serviceMap) return null;

  return {
    design: serviceMap.design || [],
    tech: serviceMap.tech || {},
    features: serviceMap.features?.[scale] || [],
    industryFeatures: industry ? serviceMap.industryFeatures?.[industry] || [] : [],
    integrations: serviceMap.integrations || {},
    platforms: serviceMap.platforms || [],
    security: serviceMap.security || []
  };
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