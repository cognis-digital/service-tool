import React from 'react';
import { ChevronDown, ChevronUp, Check, DollarSign } from 'lucide-react';
import { Service, BusinessScale } from '../types';

interface ServiceCardProps {
  service: Service;
  isSelected: boolean;
  onSelect: () => void;
  scale: BusinessScale;
}

function ServiceCard({ service, isSelected, onSelect, scale }: ServiceCardProps) {
  const [expandedSection, setExpandedSection] = React.useState<string | null>(null);

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  // Get features for current scale
  const getScaleFeatures = () => {
    return service.features[scale] || service.features.individual;
  };

  // Get customization options for current scale
  const getScaleCustomizations = () => {
    const options = service.customizationOptions;
    if (!options) return null;

    return {
      features: options.features?.[scale] || [],
      security: options.security?.[scale] || []
    };
  };

  // Calculate price based on scale with industry premiums
  const getPrice = () => {
    const scaleMultiplier = {
      individual: 1,
      startup: 1.5,
      'small-business': 2.5,
      enterprise: 4
    }[scale] || 1;

    // Add industry-specific premium
    const industryPremium = service.industries?.includes('healthcare') ? 1.2 :
                           service.industries?.includes('finance') ? 1.15 :
                           service.industries?.includes('crypto') ? 1.25 : 1;

    return Math.round(service.basePrice * scaleMultiplier * industryPremium);
  };

  const customizations = getScaleCustomizations();

  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-all ${
      isSelected ? 'ring-2 ring-indigo-600' : ''
    }`}>
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900">{service.name}</h3>
          <p className="text-gray-600 mt-1">{service.description}</p>
          {service.industries && (
            <div className="flex flex-wrap gap-2 mt-2">
              {service.industries.map((industry) => (
                <span
                  key={industry}
                  className="px-2 py-1 text-xs font-medium bg-indigo-50 text-indigo-600 rounded-full capitalize"
                >
                  {industry.replace('-', ' ')}
                </span>
              ))}
            </div>
          )}
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end text-sm text-gray-500 mb-1">
            <DollarSign className="h-4 w-4" />
            <span>Starting from</span>
          </div>
          <span className="text-2xl font-bold text-indigo-600">
            ${getPrice().toLocaleString()}
          </span>
        </div>
      </div>

      <div className="space-y-4">
        <div>
          <button
            onClick={() => toggleSection('features')}
            className="w-full flex justify-between items-center text-left"
          >
            <span className="font-medium text-gray-900">Included Features</span>
            {expandedSection === 'features' ? (
              <ChevronUp className="h-5 w-5 text-gray-500" />
            ) : (
              <ChevronDown className="h-5 w-5 text-gray-500" />
            )}
          </button>
          {expandedSection === 'features' && (
            <ul className="mt-2 space-y-2">
              {getScaleFeatures().map((feature, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>
          )}
        </div>

        {customizations && (customizations.features.length > 0 || customizations.security.length > 0) && (
          <div>
            <button
              onClick={() => toggleSection('customizations')}
              className="w-full flex justify-between items-center text-left"
            >
              <span className="font-medium text-gray-900">Available Customizations</span>
              {expandedSection === 'customizations' ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </button>
            {expandedSection === 'customizations' && (
              <div className="mt-2 space-y-4">
                {customizations.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Features</h4>
                    <ul className="space-y-2">
                      {customizations.features.map((feature) => (
                        <li key={feature.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{feature.name}</span>
                          <span className="text-indigo-600 font-medium">
                            +${feature.price.toLocaleString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {customizations.security.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-700 mb-2">Security</h4>
                    <ul className="space-y-2">
                      {customizations.security.map((feature) => (
                        <li key={feature.id} className="flex justify-between text-sm">
                          <span className="text-gray-600">{feature.name}</span>
                          <span className="text-indigo-600 font-medium">
                            +${feature.price.toLocaleString()}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>

      <button
        onClick={onSelect}
        className={`mt-6 w-full py-2 px-4 rounded-md transition-colors ${
          isSelected
            ? 'bg-indigo-600 text-white hover:bg-indigo-700'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
        }`}
      >
        {isSelected ? (
          <span className="flex items-center justify-center">
            <Check className="h-5 w-5 mr-2" />
            Selected
          </span>
        ) : (
          'Select Service'
        )}
      </button>
    </div>
  );
}

export default ServiceCard;