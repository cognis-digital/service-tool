import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { DollarSign, ArrowLeft, Check, Info } from 'lucide-react';
import { getAvailableCustomizations } from '../data/service-customization-mapping';
import { techStackOptions } from '../data/tech-stack-options';
import { blockchainOptions } from '../data/blockchain-options';
import { integrationOptions } from '../data/integration-options';

function PackageBuilder() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('tech');
  const [showPricingBreakdown, setShowPricingBreakdown] = useState(false);
  
  const { 
    selectedServices,
    businessScale,
    industry,
    selectedCustomizations,
    selectedIntegrations,
    selectedTechStack,
    setSelectedCustomizations,
    setSelectedIntegrations,
    setSelectedTechStack,
    calculateTotalPrice
  } = useStore();

  // Get available customizations based on selected services
  const availableCustomizations = useMemo(() => {
    if (!selectedServices.length) return null;

    const customizations = selectedServices.map(serviceId => 
      getAvailableCustomizations(serviceId, businessScale, industry || undefined)
    ).filter(Boolean);

    return {
      tech: customizations.reduce((acc, customization) => {
        if (!customization) return acc;
        Object.entries(customization.tech).forEach(([category, techs]) => {
          if (!acc[category]) acc[category] = new Set();
          techs.forEach(tech => acc[category].add(tech));
        });
        return acc;
      }, {} as Record<string, Set<string>>),
      features: customizations.reduce((acc, customization) => {
        if (!customization) return acc;
        customization.features.forEach(feature => acc.add(feature));
        return acc;
      }, new Set<string>()),
      industryFeatures: customizations.reduce((acc, customization) => {
        if (!customization) return acc;
        customization.industryFeatures.forEach(feature => acc.add(feature));
        return acc;
      }, new Set<string>()),
      integrations: customizations.reduce((acc, customization) => {
        if (!customization) return acc;
        Object.entries(customization.integrations).forEach(([category, integrations]) => {
          if (!acc[category]) acc[category] = new Set();
          integrations.forEach(integration => acc[category].add(integration));
        });
        return acc;
      }, {} as Record<string, Set<string>>),
      platforms: customizations.reduce((acc, customization) => {
        if (!customization?.platforms) return acc;
        customization.platforms.forEach(platform => acc.add(platform));
        return acc;
      }, new Set<string>()),
      security: customizations.reduce((acc, customization) => {
        if (!customization?.security) return acc;
        customization.security.forEach(security => acc.add(security));
        return acc;
      }, new Set<string>())
    };
  }, [selectedServices, businessScale, industry]);

  const renderFeatureCard = (feature: any, isSelected: boolean, onSelect: () => void) => (
    <div
      key={feature.id}
      className={`p-4 rounded-lg border-2 cursor-pointer transition-all ${
        isSelected ? 'border-indigo-600 bg-indigo-50' : 'border-gray-200 hover:border-indigo-200'
      }`}
      onClick={onSelect}
    >
      <div className="flex justify-between items-start">
        <div className="space-y-1">
          <h3 className="font-semibold text-gray-900">{feature.name}</h3>
          <p className="text-sm text-gray-600">{feature.description}</p>
          {feature.features && (
            <ul className="mt-2 space-y-1">
              {feature.features.map((f: string, i: number) => (
                <li key={i} className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                  {f}
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="flex items-center space-x-2">
          {feature.price > 0 && (
            <span className="font-semibold text-indigo-600">${feature.price.toLocaleString()}</span>
          )}
          {isSelected && <Check className="h-5 w-5 text-indigo-600" />}
        </div>
      </div>
    </div>
  );

  const tabs = useMemo(() => {
    if (!availableCustomizations) return [];

    const availableTabs = [
      { id: 'tech', name: 'Technology Stack', show: Object.keys(availableCustomizations.tech).length > 0 },
      { id: 'features', name: 'Core Features', show: availableCustomizations.features.size > 0 }
    ];

    if (availableCustomizations.platforms?.size > 0) {
      availableTabs.push({ id: 'platforms', name: 'Platforms', show: true });
    }

    if (Object.keys(availableCustomizations.integrations).length > 0) {
      availableTabs.push({ id: 'integrations', name: 'Integrations', show: true });
    }

    if (availableCustomizations.security?.size > 0) {
      availableTabs.push({ id: 'security', name: 'Security', show: true });
    }

    return availableTabs.filter(tab => tab.show);
  }, [availableCustomizations]);

  const renderTabContent = () => {
    if (!availableCustomizations) {
      return (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">No Services Selected</h2>
          <p className="text-gray-600">Please go back and select services to customize your solution.</p>
          <button
            onClick={() => navigate('/')}
            className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
          >
            Select Services
          </button>
        </div>
      );
    }

    switch (activeTab) {
      case 'tech':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Technology Stack</h2>
                <p className="text-gray-600">Choose technologies for your solution</p>
              </div>
            </div>
            {Object.entries(availableCustomizations.tech).map(([category, techs]) => (
              <div key={category} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category.replace('-', ' ')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Array.from(techs).map(techId => {
                    const tech = techStackOptions[category]?.find(t => t.id === techId);
                    return tech && renderFeatureCard(
                      tech,
                      selectedTechStack.includes(tech.id),
                      () => setSelectedTechStack(
                        selectedTechStack.includes(tech.id)
                          ? selectedTechStack.filter(id => id !== tech.id)
                          : [...selectedTechStack, tech.id]
                      )
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case 'platforms':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Platforms</h2>
                <p className="text-gray-600">Select your target platforms</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Array.from(availableCustomizations.platforms).map(platformId => {
                const platform = blockchainOptions.platforms.find(p => p.id === platformId);
                return platform && renderFeatureCard(
                  platform,
                  selectedCustomizations.includes(platform.id),
                  () => setSelectedCustomizations(
                    selectedCustomizations.includes(platform.id)
                      ? selectedCustomizations.filter(id => id !== platform.id)
                      : [...selectedCustomizations, platform.id]
                  )
                );
              })}
            </div>
          </div>
        );

      case 'features':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Core Features</h2>
                <p className="text-gray-600">Customize your solution's features</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from(availableCustomizations.features).map(featureId => {
                const feature = selectedServices.flatMap(serviceId => {
                  const customizations = getAvailableCustomizations(serviceId, businessScale, industry || undefined);
                  return customizations?.features || [];
                }).find(f => f === featureId);

                return feature && renderFeatureCard(
                  { id: feature, name: feature, description: feature },
                  selectedCustomizations.includes(feature),
                  () => setSelectedCustomizations(
                    selectedCustomizations.includes(feature)
                      ? selectedCustomizations.filter(id => id !== feature)
                      : [...selectedCustomizations, feature]
                  )
                );
              })}
            </div>
          </div>
        );

      case 'integrations':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Integrations</h2>
                <p className="text-gray-600">Add third-party integrations</p>
              </div>
            </div>
            {Object.entries(availableCustomizations.integrations).map(([category, integrationIds]) => (
              <div key={category} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
                  {category.replace('-', ' ')}
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {Array.from(integrationIds).map(integrationId => {
                    const integration = integrationOptions[category]?.find(i => i.id === integrationId);
                    return integration && renderFeatureCard(
                      integration,
                      selectedIntegrations.includes(integration.id),
                      () => setSelectedIntegrations(
                        selectedIntegrations.includes(integration.id)
                          ? selectedIntegrations.filter(id => id !== integration.id)
                          : [...selectedIntegrations, integration.id]
                      )
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        );

      case 'security':
        return (
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-semibold text-gray-900">Security Features</h2>
                <p className="text-gray-600">Enhance your solution's security</p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {Array.from(availableCustomizations.security).map(securityId => {
                const security = blockchainOptions.security.find(s => s.id === securityId);
                return security && renderFeatureCard(
                  security,
                  selectedCustomizations.includes(security.id),
                  () => setSelectedCustomizations(
                    selectedCustomizations.includes(security.id)
                      ? selectedCustomizations.filter(id => id !== security.id)
                      : [...selectedCustomizations, security.id]
                  )
                );
              })}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

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
            <button
              onClick={() => setShowPricingBreakdown(true)}
              className="flex items-center space-x-2"
            >
              <DollarSign className="h-6 w-6 text-indigo-600" />
              <span className="text-3xl font-bold text-indigo-600">
                {calculateTotalPrice().toLocaleString()}
              </span>
              <Info className="h-5 w-5 text-gray-400 cursor-help" />
            </button>
            <button
              onClick={() => navigate('/review')}
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