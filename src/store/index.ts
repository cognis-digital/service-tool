import { create } from 'zustand';
import { services } from '../data/services';
import { Industry, TechStack, BusinessScale } from '../types';
import { getAllIndustryFeatures } from '../data/industry-features';

interface StoreState {
  services: typeof services;
  selectedServices: string[];
  selectedCustomizations: string[];
  selectedIntegrations: string[];
  selectedTechStack: string[];
  selectedIndustryFeatures: string[];
  businessScale: BusinessScale;
  industry: Industry | null;
  
  // Setters
  setSelectedServices: (services: string[]) => void;
  setSelectedCustomizations: (customizations: string[]) => void;
  setSelectedIntegrations: (integrations: string[]) => void;
  setSelectedTechStack: (techStack: string[]) => void;
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
    const servicesTotal = state.selectedServices.reduce((sum, id) => {
      const service = services.find(s => s.id === id);
      if (!service) return sum;
      
      const basePrice = service.basePrice * getScaleMultiplier() * getIndustryPremium();
      return sum + basePrice;
    }, 0);

    // Calculate customizations price
    const customizationsTotal = state.selectedCustomizations.reduce((sum, id) => {
      // Add logic to calculate customization prices
      return sum;
    }, 0);

    // Calculate integrations price
    const integrationsTotal = state.selectedIntegrations.reduce((sum, id) => {
      // Add logic to calculate integration prices
      return sum;
    }, 0);

    // Calculate tech stack price
    const techStackTotal = state.selectedTechStack.reduce((sum, id) => {
      // Add logic to calculate tech stack prices
      return sum;
    }, 0);

    // Calculate industry features price
    let industryFeaturesTotal = 0;
    if (state.industry) {
      const industryFeatures = getAllIndustryFeatures()[state.industry] || [];
      industryFeaturesTotal = state.selectedIndustryFeatures.reduce((sum, id) => {
        const feature = industryFeatures.find(f => f.id === id);
        return sum + (feature?.price || 0);
      }, 0);
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
             industryFeaturesTotal) * (1 - bundleDiscount);

    return Math.round(total);
  }
}));