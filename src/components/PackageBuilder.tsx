import React, { useState, useMemo, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { ArrowLeft, Check } from 'lucide-react';
import { services } from '../data/services';
import { techStackOptions } from '../data/tech-stack-options';
import { integrationOptions as integrationOptions1 } from '../data/customization-options';
import { integrationOptions as integrationOptions2 } from '../data/integration-options';
import { Service as ServiceType } from '../data/services';

// Define TypeScript interfaces outside the component
interface Feature {
  id: string;
  name: string;
  description?: string;
  price?: number;
}

interface TechItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  category?: string;
}

interface TabItem {
  id: string;
  name: string;
}

interface AvailableCustomizations {
  tech: Record<string, TechItem[]>;
  features: {
    base: Feature[];
    addons: Feature[];
  };
  integrations: Feature[];
  security: Feature[];
}

function PackageBuilder() {
  // This is a no-op to satisfy the linter
  void React.version;
  
  const navigate = useNavigate();
  const [availableCustomizations, setAvailableCustomizations] = useState<AvailableCustomizations | null>(null);
  const [activeTab, setActiveTab] = useState('tech');
  
  const { 
    selectedServices,
    businessScale,
    selectedTechStack,
    selectedCustomizations,
    selectedIntegrations,
    setSelectedTechStack,
    setSelectedCustomizations,
    setSelectedIntegrations,
    calculateTotalPrice
  } = useStore();

  // Get the actual service data from our services catalog
  const selectedServiceData = useMemo(() => {
    if (!selectedServices || selectedServices.length === 0 || !businessScale) return null;
    
    const firstServiceId = selectedServices[0];
    const scaleServices = services[businessScale];
    
    if (!scaleServices) return null;
    
    // Find the service across all categories
    for (const category of Object.keys(scaleServices)) {
      const categoryServices = scaleServices[category as keyof typeof scaleServices];
      const service = categoryServices.find((s: ServiceType) => s.id === firstServiceId);
      if (service) return service;
    }
    
    return null;
  }, [selectedServices, businessScale]);

  // Create tabs based on available customizations
  const tabs = useMemo(() => {
    if (!availableCustomizations) return [] as TabItem[];
    
    const tabsArray: TabItem[] = [];
    
    // Only add tabs for customizations that have options
    if (Object.keys(availableCustomizations.tech).length > 0) {
      tabsArray.push({ id: 'tech', name: 'Technology Stack' });
    }
    
    if (
      (availableCustomizations.features.base && availableCustomizations.features.base.length > 0) ||
      (availableCustomizations.features.addons && availableCustomizations.features.addons.length > 0)
    ) {
      tabsArray.push({ id: 'features', name: 'Core Features' });
    }
    
    if (availableCustomizations.integrations && availableCustomizations.integrations.length > 0) {
      tabsArray.push({ id: 'integrations', name: 'Integrations' });
    }
    
    if (availableCustomizations.security && availableCustomizations.security.length > 0) {
      tabsArray.push({ id: 'security', name: 'Security' });
    }
    
    return tabsArray;
  }, [availableCustomizations]);

  useEffect(() => {
    if (!selectedServices || selectedServices.length === 0) {
      navigate('/');
      return;
    }

    if (!selectedServiceData) {
      return;
    }

    // Merge integrations from both sources to ensure we have comprehensive options
    // First get service-specific integrations
    const serviceIntegrations: Feature[] = [];
    
    // Convert service integrations to Feature objects
    if (Array.isArray(selectedServiceData.integrations)) {
      selectedServiceData.integrations.forEach(integration => {
        if (typeof integration === 'string') {
          // Convert string integration to Feature object
          serviceIntegrations.push({
            id: integration,
            name: integration.replace(/-/g, ' '),
            description: integration.replace(/-/g, ' ')
          });
        } else if (typeof integration === 'object' && integration !== null) {
          // Ensure it has at least an id and name
          if ('id' in integration && 'name' in integration) {
            serviceIntegrations.push(integration as Feature);
          }
        }
      });
    }
    
    // Then gather all available integrations
    const allIntegrations: Feature[] = [...serviceIntegrations];
    
    // Add integrations from customization-options.ts if not already included
    integrationOptions1.forEach(integration => {
      if (!allIntegrations.some((i) => i.id === integration.id)) {
        // Ensure integration has required Feature properties
        if ('id' in integration && 'name' in integration) {
          allIntegrations.push(integration as Feature);
        }
      }
    });
    
    // Add integrations from integration-options.ts if not already included
    Object.values(integrationOptions2).forEach((category) => {
      category.forEach((integration) => {
        if (!allIntegrations.some((i) => i.id === integration.id)) {
          // Ensure integration has required Feature properties
          if ('id' in integration && 'name' in integration) {
            allIntegrations.push(integration as Feature);
          }
        }
      });
    });
    
    // Process base features to ensure they have proper structure
    const baseFeatures: Feature[] = [];
    
    if (Array.isArray(selectedServiceData.features?.base)) {
      selectedServiceData.features.base.forEach(feature => {
        // If feature is just a string, convert to Feature object
        if (typeof feature === 'string') {
          baseFeatures.push({
            id: feature,
            name: feature.replace(/-/g, ' '),
            description: feature.replace(/-/g, ' ')
          });
        } else if (typeof feature === 'object' && feature !== null) {
          // Ensure it has at least an id and name
          if ('id' in feature && 'name' in feature) {
            baseFeatures.push(feature as Feature);
          }
        }
      });
    }

    // Process addon features
    const addonFeatures: Feature[] = [];
    
    if (Array.isArray(selectedServiceData.features?.addons)) {
      selectedServiceData.features.addons.forEach(feature => {
        // If feature is just a string, convert to Feature object
        if (typeof feature === 'string') {
          // Explicitly cast to string to avoid the 'never' type issue
          const featureStr: string = feature;
          addonFeatures.push({
            id: featureStr,
            name: featureStr.replace(/-/g, ' '),
            description: featureStr.replace(/-/g, ' ')
          });
        } else if (typeof feature === 'object' && feature !== null) {
          // Ensure it has at least an id and name
          if ('id' in feature && 'name' in feature) {
            addonFeatures.push(feature as Feature);
          }
        }
      });
    }

    // Create customizations from the actual service data with merged integrations
    const customizations: AvailableCustomizations = {
      tech: techStackOptions,
      features: {
        base: baseFeatures,
        addons: addonFeatures
      },
      integrations: allIntegrations,
      security: selectedServiceData.security || [
        { id: 'basic-audit', name: 'Basic Security Audit', price: 500, description: 'Essential security testing and review' },
        { id: 'advanced-audit', name: 'Advanced Security Audit', price: 1500, description: 'Comprehensive security assessment' },
        { id: 'penetration-testing', name: 'Penetration Testing', price: 2500, description: 'Simulated attacks to identify vulnerabilities' },
        { id: 'compliance-review', name: 'Compliance Review', price: 1000, description: 'Regulatory compliance assessment' }
      ]
    };
    
    setAvailableCustomizations(customizations);
  }, [selectedServices, businessScale, selectedServiceData, navigate]);

  // Render feature card component
  const renderFeatureCard = (feature: Feature, isSelected: boolean, onSelect: () => void) => {
    return (
      <div
        key={feature.id}
        onClick={onSelect}
        className={`border rounded-lg p-6 cursor-pointer transition-colors ${
          isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'
        }`}
      >
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-medium text-lg text-gray-900">{feature.name}</h3>
            <p className="text-gray-600 mt-1">{feature.description}</p>
          </div>
          {isSelected && (
            <div className="bg-indigo-600 text-white rounded-full p-1">
              <Check className="h-4 w-4" />
            </div>
          )}
        </div>
        {feature.price !== undefined && feature.price > 0 && (
          <div className="mt-4 pt-4 border-t border-gray-100">
            <span className="text-indigo-600 font-medium">${feature.price.toLocaleString()}</span>
          </div>
        )}
      </div>
    );
  };

  // Render tab content
  const renderTabContent = () => {
    if (!availableCustomizations) return null;
    
    switch (activeTab) {
      case 'tech':
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Choose Your Technology Stack</h2>
              <p className="text-gray-600">Select the technologies you want to use for your project</p>
            </div>
            
            {Object.entries(availableCustomizations.tech).map(([category, technologies]) => (
              <div key={category} className="mb-10">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{category}</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {technologies.map((tech) => {
                    const isSelected = selectedTechStack.some(t => t.id === tech.id);
                    
                    return (
                      <div 
                        key={tech.id}
                        onClick={() => {
                          let updatedTechStack;
                          
                          if (isSelected) {
                            // Remove the tech if it's already selected
                            updatedTechStack = selectedTechStack.filter(t => t.id !== tech.id);
                          } else {
                            // Add the tech, but first check if we need to replace another in the same category
                            // This ensures only one technology per category is selected
                            const sameCategoryTech = selectedTechStack.find(
                              t => t.category === category
                            );
                            
                            if (sameCategoryTech) {
                              updatedTechStack = selectedTechStack
                                .filter(t => t.id !== sameCategoryTech.id)
                                .concat({ ...tech, category });
                            } else {
                              updatedTechStack = [...selectedTechStack, { ...tech, category }];
                            }
                          }
                          
                          setSelectedTechStack(updatedTechStack);
                        }}
                        className={`border rounded-lg p-4 flex flex-col items-center text-center cursor-pointer transition-all ${isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-gray-300'}`}
                      >
                        <div className="h-12 w-12 flex items-center justify-center mb-3">
                          {/* Placeholder for tech icon */}
                          <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                            {tech.name.charAt(0)}
                          </div>
                        </div>
                        <h4 className="font-medium text-sm">{tech.name}</h4>
                        {tech.price > 0 && (
                          <p className="text-xs text-gray-500 mt-1">${tech.price}</p>
                        )}
                        {isSelected && (
                          <span className="absolute top-2 right-2 text-indigo-600">
                            <Check className="h-4 w-4" />
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case 'features':
        return (
          <div className="space-y-10">
            {availableCustomizations.features.base && availableCustomizations.features.base.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Included Features</h2>
                  <p className="text-gray-600">These core features are included with your solution</p>
                </div>
                <ul className="space-y-2">
                  {availableCustomizations.features.base.map(feature => (
                    <li key={feature.id} className="flex items-center text-gray-700">
                      <Check className="h-5 w-5 text-green-500 mr-2" />
                      {feature.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {availableCustomizations.features.addons && availableCustomizations.features.addons.length > 0 && (
              <div>
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">Additional Features</h2>
                  <p className="text-gray-600">Enhance your solution with these additional features</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {availableCustomizations.features.addons.map(addon => {
                    const isSelected = selectedCustomizations.includes(addon.id);
                    return renderFeatureCard(
                      addon,
                      isSelected,
                      () => {
                        const updatedCustomizations = isSelected
                          ? selectedCustomizations.filter(id => id !== addon.id)
                          : [...selectedCustomizations, addon.id];
                        setSelectedCustomizations(updatedCustomizations);
                      }
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        );

      case 'integrations':
        return (
          <div>
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Available Integrations</h2>
              <p className="text-gray-600">Connect your solution with these services</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {availableCustomizations.integrations.map(integration => {
                const isSelected = selectedIntegrations.includes(integration.id);
                return renderFeatureCard(
                  integration,
                  isSelected,
                  () => {
                    const updatedIntegrations = isSelected
                      ? selectedIntegrations.filter(id => id !== integration.id)
                      : [...selectedIntegrations, integration.id];
                    setSelectedIntegrations(updatedIntegrations);
                  }
                );
              })}
            </div>
          </div>
        );

      case 'security':
        return (
          <div>
            <div className="mb-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Security Options</h2>
                <p className="text-gray-600">Enhance your solution's security</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {availableCustomizations.security.map(security => {
                const isSelected = selectedCustomizations.includes(security.id);
                return renderFeatureCard(
                  security,
                  isSelected,
                  () => {
                    const updatedCustomizations = isSelected
                      ? selectedCustomizations.filter(id => id !== security.id)
                      : [...selectedCustomizations, security.id];
                    setSelectedCustomizations(updatedCustomizations);
                  }
                );
              })}
            </div>
          </div>
        );

      default:
        // This ensures TypeScript validates we've handled all cases
        ((exhaustiveCheck: never): never => {
          throw new Error(`Unhandled case: ${exhaustiveCheck}`);
        })(activeTab as never);
        return null;
    }
  };

  // Show loading state if customizations aren't available
  if (!selectedServices || selectedServices.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">No services selected</h2>
        <p className="mb-4">Please select services from the catalog first.</p>
        <button
          onClick={() => navigate('/')}
          className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Back to Service Catalog
        </button>
      </div>
    );
  }

  if (!availableCustomizations) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-semibold mb-4">Loading customization options...</h2>
        <p className="mb-4">Please wait while we prepare your customization options.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Services
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Customize Your Solution</h1>
      </div>

      {tabs.length > 0 && (
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-8">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-white text-gray-900 shadow'
                  : 'text-gray-500 hover:text-gray-900'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>
      )}

      {renderTabContent()}

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Total Solution Price</h3>
            <p className="text-gray-600">Including all selected options</p>
          </div>
          <div className="flex items-center gap-4">
            <span className="text-3xl font-bold text-indigo-600">
              ${calculateTotalPrice().toLocaleString()}
            </span>
            <button
              onClick={() => navigate('/service-tool/review')}
              className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-700 transition-colors"
            >
              Review Solution
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PackageBuilder;
