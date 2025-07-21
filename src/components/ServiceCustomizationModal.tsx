import React from 'react';
import { Service, BusinessScale } from '../types';

interface ServiceCustomizationModalProps {
  service: Service;
  businessScale: BusinessScale;
  customizations: Record<string, any>;
  onCustomizationChange: (serviceId: string, customization: any) => void;
  onClose: () => void;
}

const ServiceCustomizationModal: React.FC<ServiceCustomizationModalProps> = ({
  service,
  businessScale,
  customizations,
  onCustomizationChange,
  onClose,
}) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg max-w-3xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-2xl font-semibold">{service.name}</h2>
              <p className="text-gray-600 mt-1">{service.description}</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700"
            >
              <span className="sr-only">Close</span>
              ×
            </button>
          </div>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-medium mb-3">Features for {businessScale}</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {service.features[businessScale].map((feature: string) => (
                  <li key={feature} className="flex items-center text-gray-700">
                    <span className="mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-3">Available Customizations</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {service.customizationOptions.features[businessScale].map((option: any) => (
                  <div
                    key={option.id}
                    className={`p-4 rounded-lg border-2 cursor-pointer ${
                      customizations[service.id]?.[option.id]
                        ? 'border-indigo-600 bg-indigo-50'
                        : 'border-gray-200 hover:border-indigo-300'
                    }`}
                    onClick={() => {
                      if (customizations[service.id]?.[option.id]) {
                        const { [option.id]: _, ...rest } = customizations[service.id];
                        onCustomizationChange(service.id, rest);
                      } else {
                        onCustomizationChange(service.id, {
                          [option.id]: option
                        });
                      }
                    }}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">{option.name}</h4>
                        <p className="text-sm text-gray-600 mt-1">{option.description}</p>
                      </div>
                      <span className="text-indigo-600 font-medium">
                        ${option.price}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 flex justify-end">
            <button
              onClick={onClose}
              className="px-6 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700"
            >
              Save Customizations
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCustomizationModal;
