import { create } from 'zustand';
import { services } from '../data/services';
import { techStackOptions } from '../data/tech-stack-options';
import { customizationOptions, integrationOptions as integrationOptions1 } from '../data/customization-options';
import { integrationOptions as integrationOptions2 } from '../data/integration-options';
import { Industry, BusinessScale } from '../types';
import { getAllIndustryFeatures } from '../data/industry-features';

interface TechStackItem {
  id: string;
  name: string;
  price: number;
  category: string;
}

interface StoreState {
  services: typeof services;
  selectedServices: string[];
  selectedCustomizations: string[];
  selectedIntegrations: string[];
  selectedTechStack: TechStackItem[];
  selectedIndustryFeatures: string[];
  businessScale: BusinessScale;
  industry: Industry | null;
  
  // Setters
  setSelectedServices: (services: string[]) => void;
  setSelectedCustomizations: (customizations: string[]) => void;
  setSelectedIntegrations: (integrations: string[]) => void;
  setSelectedTechStack: (techStack: TechStackItem[]) => void;
  setSelectedIndustryFeatures: (features: string[]) => void;
  setBusinessScale: (scale: BusinessScale) => void;
  setIndustry: (industry: Industry | null) => void;
  
  calculateTotalPrice: () => number;
}

export const useStore = create<StoreState>((set, get) => ({
  services,
  selectedServices: [],
  selectedCustomizations: [],
  selectedIntegrations: [],
  selectedTechStack: [],
  selectedIndustryFeatures: [],
  businessScale: 'startup',
  industry: null,

  setSelectedServices: (services) => set({ selectedServices: services }),
  setSelectedCustomizations: (customizations) => set({ selectedCustomizations: customizations }),
  setSelectedIntegrations: (integrations) => set({ selectedIntegrations: integrations }),
  setSelectedTechStack: (techStack) => set({ selectedTechStack: techStack }),
  setSelectedIndustryFeatures: (features) => set({ selectedIndustryFeatures: features }),
  setBusinessScale: (scale) => set({ businessScale: scale }),
  setIndustry: (industry) => set({ industry: industry }),

  calculateTotalPrice: () => {
    const state = get();
    let total = 0;

    // Base services with scale multiplier
    const getScaleMultiplier = () => {
      return {
        individual: 1,
        startup: 1.5,
        'small-business': 2.5,
        enterprise: 4
      }[state.businessScale] || 1;
    };

    // Industry premium
    const getIndustryPremium = () => {
      if (state.industry === 'healthcare') return 1.2;
      if (state.industry === 'finance') return 1.15;
      if (state.industry === 'crypto') return 1.25;
      return 1;
    };

    // Bundle discounts
    const getBundleDiscount = (count: number) => {
      if (count >= 5) return 0.15; // 15% off for 5+ items
      if (count >= 3) return 0.1;  // 10% off for 3-4 items
      return 0;
    };

    // Calculate base services price
    // Flatten the nested services object into a single array for easy lookup
    const allServicesArray = Object.values(services).flatMap(scaleObj =>
      Object.values(scaleObj).flat()
    ) as any[];

    const servicesTotal = state.selectedServices.reduce((sum, id) => {
      const service = allServicesArray.find(s => s.id === id);
      if (!service) return sum;
      
      const basePrice = service.basePrice * getScaleMultiplier() * getIndustryPremium();
      return sum + basePrice;
    }, 0);

    // Calculate customizations price
    const customizationsTotal = state.selectedCustomizations.reduce((sum, id) => {
      // Find the customization in the available options
      const customization = customizationOptions.find(c => c.id === id);
      return sum + (customization?.price || 0);
    }, 0);

    // Calculate integrations price
    const integrationsTotal = state.selectedIntegrations.reduce((sum, id) => {
      // Check both integration sources
      // First check in customization-options.ts
      const integration1 = integrationOptions1.find(i => i.id === id);
      if (integration1 && integration1.price !== undefined) {
        return sum + integration1.price;
      }
      
      // Then check in integration-options.ts
      // Flatten the nested structure to find the integration
      let integration2Price = 0;
      Object.values(integrationOptions2).forEach((category: any) => {
        const categoryArray = category as Array<{id: string; price?: number}>;
        const integration = categoryArray.find(i => i.id === id);
        if (integration && integration.price !== undefined) {
          integration2Price = integration.price;
        }
      });
      
      return sum + integration2Price;
    }, 0);

    // Calculate tech stack price
    const techStackTotal = state.selectedTechStack.reduce((sum, tech) => {
      return sum + (tech.price || 0);
    }, 0);

    // Calculate industry features price
    let industryFeaturesTotal = 0;
    if (state.industry) {
      const industryFeatures = getAllIndustryFeatures()[state.industry as keyof ReturnType<typeof getAllIndustryFeatures>] || [];
      industryFeaturesTotal = state.selectedIndustryFeatures.reduce((sum, id) => {
        const feature = industryFeatures.find((f: {id: string; price?: number}) => f.id === id);
        return sum + (feature?.price || 0);
      }, 0);
    }
    
    // Calculate security options price - from the service's security array if available
    let securityTotal = 0;
    if (state.selectedServices.length > 0) {
      const scaleServices = services[state.businessScale];
      if (scaleServices) {
        // Find the service across all categories
        for (const category of Object.keys(scaleServices)) {
          const categoryServices = scaleServices[category as keyof typeof scaleServices];
          const service = categoryServices.find(s => s.id === state.selectedServices[0]);
          
          if (service && service.security) {
            securityTotal = state.selectedCustomizations
              .filter(id => service.security?.some((sec: {id: string}) => sec.id === id))
              .reduce((sum, id) => {
                const securityOption = service.security?.find((sec: {id: string; price: number}) => sec.id === id);
                return sum + (securityOption?.price || 0);
              }, 0);
            break;
          }
        }
      }
    }

    // Apply bundle discount
    const totalItems = state.selectedServices.length +
                      state.selectedCustomizations.length +
                      state.selectedIntegrations.length +
                      state.selectedTechStack.length +
                      state.selectedIndustryFeatures.length;
    
    const bundleDiscount = getBundleDiscount(totalItems);

    // Calculate final total with all components and discount
    total = (servicesTotal +
             customizationsTotal +
             integrationsTotal +
             techStackTotal +
             industryFeaturesTotal +
             securityTotal) * (1 - bundleDiscount);

    return Math.round(total);
  }
}));