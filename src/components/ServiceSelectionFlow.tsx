import React, { useState, useMemo } from 'react';
import { Scale, Industry, Service, industries, services } from '../data/services';
import ServiceCatalog from './ServiceCatalog';

interface Customization {
  addons: string[];
  preferences: Record<string, any>;
}

export const ServiceSelectionFlow: React.FC = () => {
  const [scale, setScale] = useState<Scale>('individual');
  const [industry, setIndustry] = useState<Industry>('freelancer');
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const availableServices = useMemo(() => {
    try {
      const scaleServices = services[scale];
      if (!scaleServices) return [];

      const allServices: Service[] = [];
      
      // Flatten the services structure
      Object.values(scaleServices).forEach(categoryServices => {
        allServices.push(...categoryServices);
      });

      return allServices.filter(service => {
        const hasIndustryFeatures = service.industryFeatures && 
          service.industryFeatures[industry] && 
          service.industryFeatures[industry].length > 0;

        const isRecommendedForScale = !service.recommendedFor || 
          service.recommendedFor.includes(scale);

        return hasIndustryFeatures || isRecommendedForScale;
      });
    } catch (err) {
      console.error('Error getting available services:', err);
      return [];
    }
  }, [scale, industry]);

  const handleServiceSelect = (serviceId: string) => {
    setSelectedServices([serviceId]);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-semibold">Select Your Services</h2>
            <p className="text-gray-600">Choose the services that best fit your needs</p>
          </div>
          <div className="flex space-x-2">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded capitalize">
              {scale.replace('-', ' ')}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded capitalize">
              {industry.replace('-', ' ')}
            </span>
          </div>
        </div>

        <ServiceCatalog
          services={availableServices}
          industry={industry}
          onServiceSelect={handleServiceSelect}
          selectedServices={selectedServices}
        />
      </div>
    </div>
  );
};