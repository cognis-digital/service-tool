import React from 'react';
import { Service, Industry } from '../data/services';

interface ServiceCatalogProps {
  services: Service[];
  industry: Industry | null;
  onServiceSelect: (serviceId: string) => void;
  selectedServices: string[];
}

const ServiceCatalog: React.FC<ServiceCatalogProps> = ({
  services,
  industry,
  onServiceSelect,
  selectedServices,
}) => {
  if (!services || services.length === 0) {
    return (
      <div className="text-center py-12">
        <h3 className="text-xl font-medium text-gray-900">No Services Available</h3>
        <p className="mt-2 text-gray-600">
          We couldn't find any services matching your criteria. Please try a different combination.
        </p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {services.map((service: Service) => (
        <div
          key={service.id}
          className={`p-6 rounded-lg border-2 ${
            selectedServices.includes(service.id)
              ? 'border-indigo-500 bg-indigo-50'
              : 'border-gray-200'
          } hover:border-indigo-300 transition-all cursor-pointer`}
          onClick={() => onServiceSelect(service.id)}
        >
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-medium">{service.name}</h3>
              <p className="mt-2 text-sm text-gray-600">{service.description}</p>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold">${service.basePrice}</div>
              <div className="text-sm text-gray-500">per month</div>
            </div>
          </div>

          <div className="mt-6">
            <h4 className="font-medium mb-2">Key Features:</h4>
            <ul className="space-y-2">
              {service.features.base.slice(0, 3).map((feature: string, index: number) => (
                <li key={index} className="flex items-center text-sm">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            {service.features.base.length > 3 && (
              <p className="mt-2 text-sm text-indigo-600">
                +{service.features.base.length - 3} more features
              </p>
            )}
          </div>

          {service.industryFeatures && service.industryFeatures[industry as Industry]?.length > 0 && (
            <div className="mt-6">
              <h4 className="font-medium mb-2">Industry Features:</h4>
              <ul className="space-y-2">
                {service.industryFeatures[industry as Industry].slice(0, 2).map((feature: string, index: number) => (
                  <li key={index} className="flex items-center text-sm">
                    <svg
                      className="w-5 h-5 text-indigo-500 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              {service.industryFeatures[industry as Industry].length > 2 && (
                <p className="mt-2 text-sm text-indigo-600">
                  +{service.industryFeatures[industry as Industry].length - 2} more industry features
                </p>
              )}
            </div>
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              onServiceSelect(service.id);
            }}
            className={`mt-6 w-full py-2 px-4 rounded flex items-center justify-center ${
              selectedServices.includes(service.id)
                ? 'bg-indigo-100 text-indigo-700 hover:bg-indigo-200'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            } transition-colors`}
          >
            {selectedServices.includes(service.id) ? (
              <>
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>Selected</span>
              </>
            ) : (
              <span>Select Service</span>
            )}
          </button>
        </div>
      ))}
    </div>
  );
};

export default ServiceCatalog;