import { Industry, BusinessScale } from '../types';

export const serviceCustomizationMap = {
  'crm-platform': {
    design: ['basic', 'professional', 'premium'],
    tech: {
      languages: ['javascript', 'typescript'],
      frontend: ['react', 'vue', 'angular'],
      backend: ['node', 'express', 'nestjs'],
      database: ['postgres', 'mongodb', 'mysql'],
      cloud: ['aws', 'azure', 'gcp', 'vercel']
    },
    features: {
      startup: ['contact-management', 'email-integration', 'deal-pipeline', 'task-management'],
      'small-business': ['automation-rules', 'custom-fields', 'reporting-dashboards'],
      enterprise: ['multi-department', 'territory-management', 'custom-objects']
    },
    security: ['data-encryption', 'role-based-access', 'audit-logs'],
    integrations: {
      payment: ['stripe'],
      authentication: ['auth0'],
      storage: ['aws-s3'],
      ai: ['openai'],
      automation: ['n8n', 'zapier', 'make']
    },
    industryFeatures: {
      freelancer: ['client-tracking', 'proposal-management', 'time-tracking'],
      'e-commerce': ['customer-tracking', 'order-history', 'product-recommendations'],
      healthcare: ['patient-management', 'appointment-scheduling', 'follow-ups'],
      finance: ['client-portfolio', 'opportunity-tracking', 'compliance-documentation'],
      technology: ['user-onboarding', 'feature-requests', 'customer-success'],
      education: ['student-management', 'course-tracking', 'alumni-relations']
    }
  },
  'enterprise-crm-solution': {
    design: ['professional', 'premium', 'enterprise'],
    tech: {
      languages: ['typescript', 'java'],
      frontend: ['react', 'angular'],
      backend: ['node', 'nestjs', 'java-spring'],
      database: ['postgres', 'oracle', 'sql-server'],
      cloud: ['aws', 'azure', 'gcp']
    },
    features: {
      'small-business': ['multi-department', 'workflow-automation', 'enterprise-analytics'],
      enterprise: ['territory-management', 'forecasting-engine', 'custom-objects']
    },
    security: ['advanced-encryption', 'sso-integration', 'data-governance', 'compliance-controls'],
    integrations: {
      payment: ['stripe', 'paypal', 'braintree'],
      authentication: ['auth0', 'okta', 'microsoft-ad'],
      storage: ['aws-s3', 'azure-blob'],
      ai: ['openai', 'custom-ml'],
      automation: ['n8n', 'zapier', 'make']
    },
    industryFeatures: {
      freelancer: ['agency-management', 'client-success', 'resource-allocation'],
      'e-commerce': ['omnichannel-view', 'advanced-segmentation', 'lifetime-value'],
      healthcare: ['provider-management', 'referral-tracking', 'patient-journey'],
      finance: ['wealth-management', 'portfolio-tracking', 'compliance'],
      technology: ['product-analytics', 'health-scoring', 'renewal-management'],
      education: ['advancement', 'donor-tracking', 'program-management']
    }
  },
  'workflow-automation': {
    design: ['basic', 'professional', 'premium'],
    tech: {
      languages: ['javascript', 'typescript'],
      frontend: ['react', 'vue'],
      backend: ['node', 'express'],
      database: ['postgres', 'mongodb'],
      cloud: ['aws', 'gcp', 'vercel']
    },
    features: {
      startup: ['visual-builder', 'app-integrations', 'webhooks', 'scheduled-workflows'],
      'small-business': ['conditional-logic', 'error-handling', 'data-transformation']
    },
    security: ['credential-encryption', 'access-controls', 'audit-logging'],
    integrations: {
      crm: ['salesforce', 'hubspot', 'zoho'],
      payment: ['stripe', 'paypal'],
      authentication: ['auth0'],
      storage: ['aws-s3', 'google-drive', 'dropbox'],
      api: ['rest-api', 'graphql-api']
    },
    industryFeatures: {
      freelancer: ['client-onboarding', 'invoice-automation', 'project-tracking'],
      'e-commerce': ['order-processing', 'inventory-updates', 'customer-communications'],
      healthcare: ['patient-scheduling', 'insurance-verification', 'compliance-reporting'],
      finance: ['transaction-processing', 'compliance-workflows', 'reporting-automation'],
      technology: ['devops-automation', 'testing-workflows', 'deployment-pipelines'],
      education: ['student-enrollment', 'assignment-distribution', 'grading-workflows']
    }
  },
  'enterprise-automation': {
    design: ['professional', 'premium', 'enterprise'],
    tech: {
      languages: ['typescript', 'java', 'python'],
      frontend: ['react', 'angular'],
      backend: ['node', 'nestjs', 'java-spring'],
      database: ['postgres', 'oracle', 'sql-server'],
      cloud: ['aws', 'azure', 'gcp']
    },
    features: {
      'small-business': ['enterprise-process', 'business-rules', 'multi-environment'],
      enterprise: ['role-based-access', 'audit-logging', 'process-analytics']
    },
    security: ['encryption', 'compliance-controls', 'data-governance'],
    integrations: {
      crm: ['salesforce', 'microsoft-dynamics'],
      payment: ['stripe', 'paypal', 'adyen'],
      authentication: ['auth0', 'okta', 'microsoft-ad'],
      storage: ['aws-s3', 'azure-blob', 'google-cloud'],
      api: ['rest-api', 'graphql-api', 'soap']
    },
    industryFeatures: {
      freelancer: ['agency-operations', 'resource-management', 'client-workflow'],
      'e-commerce': ['order-management', 'supply-chain', 'customer-service'],
      healthcare: ['patient-journey', 'claims-processing', 'compliance-workflows'],
      finance: ['transaction-processing', 'regulatory-reporting', 'risk-assessment'],
      technology: ['devops-automation', 'customer-onboarding', 'support-routing'],
      education: ['enrollment-processes', 'administrative-automation', 'learning-delivery']
    }
  },
  'api-integration-platform': {
    design: ['basic', 'professional', 'premium'],
    tech: {
      languages: ['javascript', 'typescript'],
      frontend: ['react', 'vue'],
      backend: ['node', 'express', 'nestjs'],
      database: ['postgres', 'mongodb'],
      cloud: ['aws', 'gcp', 'azure']
    },
    features: {
      startup: ['api-gateway', 'authentication', 'rate-limiting', 'monitoring'],
      'small-business': ['data-transformation', 'validation', 'error-handling']
    },
    security: ['oauth', 'encryption', 'access-control'],
    integrations: {
      crm: ['salesforce', 'hubspot'],
      payment: ['stripe', 'paypal'],
      authentication: ['auth0', 'okta'],
      storage: ['aws-s3'],
      automation: ['n8n', 'zapier']
    },
    industryFeatures: {
      freelancer: ['client-integrations', 'service-automation', 'reporting-apis'],
      'e-commerce': ['cart-integration', 'payment-gateway', 'inventory-sync'],
      healthcare: ['ehr-integration', 'patient-data', 'billing-systems'],
      finance: ['banking-apis', 'payment-processing', 'data-aggregation'],
      technology: ['platform-integration', 'user-authentication', 'data-sync'],
      education: ['lms-integration', 'student-apis', 'content-delivery']
    }
  },
  'enterprise-api-platform': {
    design: ['professional', 'premium', 'enterprise'],
    tech: {
      languages: ['typescript', 'java', 'go'],
      frontend: ['react', 'angular'],
      backend: ['nestjs', 'java-spring', 'go-gin'],
      database: ['postgres', 'oracle', 'sql-server'],
      cloud: ['aws', 'azure', 'gcp']
    },
    features: {
      'small-business': ['lifecycle-management', 'high-availability', 'advanced-security'],
      enterprise: ['traffic-management', 'analytics', 'monetization']
    },
    security: ['advanced-threat', 'compliance-frameworks', 'vulnerability-scanning'],
    integrations: {
      crm: ['salesforce', 'microsoft-dynamics'],
      payment: ['stripe', 'adyen', 'worldpay'],
      authentication: ['auth0', 'okta', 'ping-identity'],
      storage: ['aws-s3', 'azure-blob', 'google-cloud'],
      monitoring: ['datadog', 'new-relic', 'prometheus']
    },
    industryFeatures: {
      freelancer: ['agency-ecosystem', 'client-integration', 'service-apis'],
      'e-commerce': ['omnichannel-strategy', 'marketplace', 'supply-chain'],
      healthcare: ['fhir-implementation', 'interoperability', 'device-integration'],
      finance: ['open-banking', 'financial-exchange', 'regulatory-reporting'],
      technology: ['product-apis', 'platform-ecosystem', 'partner-integration'],
      education: ['learning-tools', 'data-exchange', 'research-apis']
    }
  },
  'automated-alert-system': {
    design: ['basic', 'professional', 'premium'],
    tech: {
      languages: ['javascript', 'typescript', 'python'],
      frontend: ['react', 'vue'],
      backend: ['node', 'express', 'python-flask'],
      database: ['postgres', 'mongodb', 'timescaledb'],
      cloud: ['aws', 'gcp']
    },
    features: {
      startup: ['monitoring-dashboard', 'multi-channel-alerts', 'custom-rules'],
      'small-business': ['threshold-triggers', 'escalation-policies', 'incident-workflow']
    },
    security: ['data-encryption', 'access-controls', 'audit-logs'],
    integrations: {
      crm: ['salesforce', 'hubspot'],
      api: ['rest-api'],
      automation: ['n8n', 'zapier'],
      storage: ['aws-s3'],
      authentication: ['auth0']
    },
    industryFeatures: {
      freelancer: ['deadline-alerts', 'communication-monitoring', 'billing-reminders'],
      'e-commerce': ['inventory-alerts', 'sales-performance', 'customer-service'],
      healthcare: ['patient-monitoring', 'staff-scheduling', 'regulatory-compliance'],
      finance: ['market-alerts', 'transaction-monitoring', 'compliance-violations'],
      technology: ['system-performance', 'error-monitoring', 'deployment-alerts'],
      education: ['performance-alerts', 'attendance-monitoring', 'deadline-tracking']
    }
  },
  'enterprise-monitoring': {
    design: ['professional', 'premium', 'enterprise'],
    tech: {
      languages: ['typescript', 'java', 'python', 'go'],
      frontend: ['react', 'angular'],
      backend: ['node', 'nestjs', 'java-spring', 'go'],
      database: ['postgres', 'timescaledb', 'elasticsearch'],
      cloud: ['aws', 'azure', 'gcp']
    },
    features: {
      'small-business': ['unified-dashboard', 'sla-management', 'alert-correlation'],
      enterprise: ['root-cause-analysis', 'custom-metrics', 'executive-reporting']
    },
    security: ['data-encryption', 'access-controls', 'compliance-monitoring'],
    integrations: {
      crm: ['salesforce', 'microsoft-dynamics'],
      api: ['rest-api', 'graphql-api'],
      automation: ['n8n', 'zapier'],
      storage: ['aws-s3', 'azure-blob'],
      authentication: ['auth0', 'okta']
    },
    industryFeatures: {
      freelancer: ['agency-performance', 'client-sla', 'resource-utilization'],
      'e-commerce': ['experience-monitoring', 'conversion-alerts', 'supply-chain'],
      healthcare: ['patient-care', 'clinical-systems', 'regulatory-compliance'],
      finance: ['transaction-monitoring', 'trading-systems', 'regulatory-alerts'],
      technology: ['platform-reliability', 'service-performance', 'customer-experience'],
      education: ['platform-monitoring', 'experience-metrics', 'administrative-systems']
    }
  },
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
      storage: ['aws-s3'],
      alerts: ['security-alerts'],
      api: ['rest-api']
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
      ai: ['openai', 'custom-ml'],
      crm: ['salesforce', 'hubspot', 'zoho'],
      automation: ['n8n', 'zapier', 'make'],
      api: ['rest-api', 'graphql-api', 'industry-api'],
      alerts: ['alert-system', 'monitoring', 'security-alerts']
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
      storage: ['aws-s3', 'local'],
      ai: ['openai', 'anthropic', ],
      crm: ['hubspot', 'zoho', 'notion', 'airtable', 'google-sheets'],
      automation: ['n8n', 'zapier'],
      api: ['rest-api'],
      alerts: ['alert-system']
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
      storage: ['ipfs'],
      api: ['rest-api', 'graphql-api'],
      alerts: ['monitoring']
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
      storage: ['aws-s3'],
      api: ['rest-api', 'industry-api'],
      automation: ['n8n', 'make'],
      alerts: ['monitoring', 'alert-system']
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
      industryFeatures: industry && 'industryFeatures' in serviceMap && industry in (serviceMap.industryFeatures as Record<string, string[]>) ? 
        ((serviceMap.industryFeatures as Record<string, string[]>)[industry] || []) : [],
      integrations: 'integrations' in serviceMap ? (serviceMap.integrations as Record<string, string[]> || {}) : {},
      platforms: 'platforms' in serviceMap ? (serviceMap.platforms as string[] || []) : [],
      security: 'security' in serviceMap ? (serviceMap.security as string[] || []) : []
    };
  } catch (error) {
    console.error('Error in getAvailableCustomizations:', error);
    return null;
  }
};

export const getServiceDependencies = (serviceId: string, selectedOptions?: Record<string, any>) => {
  // Base dependencies that are always needed for specific services
  const baseDependencies: Record<string, string[]> = {
    'web-app': ['database', 'hosting', 'frontend-framework'],
    'mobile-app': ['backend-api', 'authentication', 'push-notifications'],
    'blockchain': ['smart-contracts', 'wallet-integration', 'security-audit'],
    'ai-ml': ['data-processing', 'model-training', 'inference-api'],
    'crm-platform': ['database', 'user-authentication', 'email-integration'],
    'enterprise-crm-solution': ['database', 'sso-integration', 'compliance-controls'],
    'workflow-automation': ['integration-platform', 'trigger-system', 'action-handlers'],
    'enterprise-automation': ['business-rules-engine', 'workflow-designer', 'integration-hub'],
    'api-integration-platform': ['api-gateway', 'authentication', 'rate-limiting'],
    'enterprise-api-platform': ['api-management', 'developer-portal', 'analytics-dashboard'],
    'automated-alert-system': ['monitoring-agents', 'notification-service', 'escalation-logic'],
    'enterprise-monitoring': ['distributed-tracing', 'log-aggregation', 'real-time-analytics'],
    'startup-security-package': ['vulnerability-scanning', 'authentication-service', 'encryption-layer']
  };
  
  // Start with base dependencies
  let dependencies = [...(baseDependencies[serviceId] || [])];
  
  // If we have selected options, add conditional dependencies based on selections
  if (selectedOptions) {
    // Tech stack dependencies
    if (selectedOptions.tech) {
      // Add backend requirements based on frontend selection
      if (selectedOptions.tech.frontend?.includes('react')) {
        dependencies.push('react-compatible-backend');
      } else if (selectedOptions.tech.frontend?.includes('angular')) {
        dependencies.push('typescript-optimized-backend');
      }
      
      // Database dependencies based on backend
      if (selectedOptions.tech.backend?.includes('node') || selectedOptions.tech.backend?.includes('express')) {
        dependencies.push('nosql-compatibility');
      } else if (selectedOptions.tech.backend?.includes('java-spring')) {
        dependencies.push('sql-optimization');
      }
    }
    
    // Feature-based dependencies
    if (selectedOptions.features) {
      if (Array.isArray(selectedOptions.features)) {
        // Handle flat feature arrays
        if (selectedOptions.features.includes('multi-department') || selectedOptions.features.includes('enterprise-analytics')) {
          dependencies.push('data-warehouse');
          dependencies.push('reporting-engine');
        }
        
        if (selectedOptions.features.includes('workflow-automation')) {
          dependencies.push('business-rules-engine');
        }
      } else {
        // Handle feature objects with business scale
        const allFeatures = Object.values(selectedOptions.features).flat();
        if (allFeatures.includes('multi-department') || allFeatures.includes('enterprise-analytics')) {
          dependencies.push('data-warehouse');
          dependencies.push('reporting-engine');
        }
        
        // Enterprise features need more dependencies
        if (selectedOptions.features.enterprise) {
          dependencies.push('enterprise-scalability');
          dependencies.push('high-availability');
        }
      }
    }
    
    // Integration-based dependencies
    if (selectedOptions.integrations) {
      if (selectedOptions.integrations.payment?.includes('stripe')) {
        dependencies.push('payment-processor');
      }
      
      if (selectedOptions.integrations.ai?.includes('openai') || selectedOptions.integrations.ai?.includes('anthropic')) {
        dependencies.push('llm-integration');
        dependencies.push('content-moderation');
      }
      
      if (selectedOptions.integrations.authentication?.includes('auth0') || 
          selectedOptions.integrations.authentication?.includes('okta')) {
        dependencies.push('identity-provider');
      }
    }
    
    // Security requirements
    if (selectedOptions.security) {
      if (selectedOptions.security.includes('advanced-encryption') || 
          selectedOptions.security.includes('compliance-controls')) {
        dependencies.push('security-audit');
        dependencies.push('encryption-service');
      }
    }
    
    // Industry-specific dependencies
    if (selectedOptions.industryFeatures) {
      const industry = Object.keys(selectedOptions.industryFeatures)[0];
      if (industry === 'healthcare') {
        dependencies.push('hipaa-compliance');
        dependencies.push('data-privacy-controls');
      } else if (industry === 'finance') {
        dependencies.push('financial-compliance');
        dependencies.push('transaction-security');
      }
    }
  }
  
  // Remove duplicates and return
  return [...new Set(dependencies)];
};