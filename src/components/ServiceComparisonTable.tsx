import React, { useMemo } from 'react';
import { Check, X, Info } from 'lucide-react';
import { Service, Industry, BusinessScale } from '../types';
import { services as allServices } from '../data/services';

// Flatten nested services object into a single array
const flattenServices = (): Service[] => (
  Object.values(allServices)
    .flatMap(scaleObj => Object.values(scaleObj).flat()) as unknown as Service[]
);

interface ServiceComparisonTableProps {
  serviceIds: string[];
  industry: Industry | null;
  scale: BusinessScale;
  onSelectService: (serviceId: string) => void;
}

const ServiceComparisonTable: React.FC<ServiceComparisonTableProps> = ({
  serviceIds,
  industry,
  scale,
  onSelectService
}) => {
    const flattenedServices = useMemo(() => flattenServices(), []);

  const servicesToCompare = useMemo(() => {
    return serviceIds.map(id => flattenedServices.find((s: Service) => s.id === id)).filter(Boolean) as Service[];
  }, [serviceIds]);

  // Get all unique feature categories across all services
  const featureCategories = useMemo(() => {
    const categories = new Set<string>();
    
    servicesToCompare.forEach(service => {
      // Add base features category
      categories.add('Base Features');
      
      // Add tech options if available
      if (service.techOptions && service.techOptions.length > 0) {
        categories.add('Technology Options');
      }
      
      // Add customization categories if available
      if (service.customizationOptions) {
        if (service.customizationOptions.features) categories.add('Additional Features');
        if (service.customizationOptions.security) categories.add('Security Features');
        if (service.customizationOptions.integrations) categories.add('Integrations');
      }
      
      // Add industry-specific category if we have an industry selected
      if (industry) {
        categories.add(`${industry.charAt(0).toUpperCase() + industry.slice(1).replace('-', ' ')} Features`);
      }
    });
    
    return Array.from(categories);
  }, [servicesToCompare, industry]);

  // Calculate price with scale and industry adjustments
  const calculatePrice = (service: Service) => {
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

  if (servicesToCompare.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-gray-500">Select services to compare</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Feature
            </th>
            {servicesToCompare.map(service => (
              <th key={service.id} scope="col" className="px-6 py-3 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-lg font-medium text-gray-900">{service.name}</span>
                  <span className="text-sm text-gray-500">{service.category}</span>
                  <span className="mt-2 text-xl font-bold text-indigo-600">${calculatePrice(service)}</span>
                  <button
                    onClick={() => onSelectService(service.id)}
                    className="mt-2 px-4 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm hover:bg-indigo-200"
                  >
                    Select
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {/* Base description */}
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
              Description
            </td>
            {servicesToCompare.map(service => (
              <td key={service.id} className="px-6 py-4 text-sm text-gray-500 text-center">
                {service.description}
              </td>
            ))}
          </tr>

          {/* Feature categories */}
          {featureCategories.map(category => {
            // Get features for this category for each service
            const serviceFeatures = servicesToCompare.map(service => {
              if (category === 'Base Features') {
                return service.features || [];
              } else if (category === 'Technology Options') {
                return service.techOptions || [];
              } else if (category === 'Additional Features' && service.customizationOptions?.features) {
                return service.customizationOptions.features.map(f => f.name);
              } else if (category === 'Security Features' && service.customizationOptions?.security) {
                return service.customizationOptions.security.map(f => f.name);
              } else if (category === 'Integrations' && service.customizationOptions?.integrations) {
                return service.customizationOptions.integrations.map(f => f.name);
              } else if (industry && category.toLowerCase().includes(industry.toLowerCase())) {
                // Industry-specific features would be handled here
                return [];
              }
              return [];
            });

            // Find the maximum number of features in any service for this category
            const maxFeatures = Math.max(...serviceFeatures.map(features => features.length));
            
            if (maxFeatures === 0) return null;

            return (
              <React.Fragment key={category}>
                <tr className="bg-gray-50">
                  <td colSpan={servicesToCompare.length + 1} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    {category}
                  </td>
                </tr>
                {Array.from({ length: maxFeatures }).map((_, i) => (
                  <tr key={`${category}-${i}`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
                      {i === 0 ? `${category} (${maxFeatures})` : ''}
                    </td>
                    {serviceFeatures.map((features, serviceIndex) => (
                      <td key={`${servicesToCompare[serviceIndex].id}-${i}`} className="px-6 py-4 text-sm text-center">
                        {features[i] ? (
                          <div className="flex items-center justify-center">
                            <Check className="h-5 w-5 text-green-500" />
                            <span className="ml-2">{features[i]}</span>
                          </div>
                        ) : (
                          <X className="h-5 w-5 text-red-500 mx-auto" />
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </React.Fragment>
            );
          })}

          {/* Industries supported */}
          <tr className="bg-gray-50">
            <td colSpan={servicesToCompare.length + 1} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Industries
            </td>
          </tr>
          <tr>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">
              Supported Industries
            </td>
            {servicesToCompare.map(service => (
              <td key={service.id} className="px-6 py-4 text-sm text-center">
                {service.industries && service.industries.length > 0 ? (
                  <div className="flex flex-wrap justify-center gap-1">
                    {service.industries.map(ind => (
                      <span 
                        key={ind} 
                        className={`px-2 py-1 text-xs rounded-full capitalize ${
                          industry === ind 
                            ? 'bg-indigo-100 text-indigo-800' 
                            : 'bg-gray-100 text-gray-800'
                        }`}
                      >
                        {ind.replace('-', ' ')}
                      </span>
                    ))}
                  </div>
                ) : (
                  <span className="text-gray-400">All industries</span>
                )}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ServiceComparisonTable;
