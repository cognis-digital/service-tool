import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { ArrowRight } from 'lucide-react';
import { Service } from '../data/services';
import ServiceCatalog from './ServiceCatalog';

function ServiceCatalogPage() {
  const navigate = useNavigate();
  
  const { 
    services,
    selectedServices,
    businessScale,
    industry,
    setSelectedServices,
    calculateTotalPrice
  } = useStore();

  // Filter and recommend services based on scale and industry
  const recommendedServices = useMemo(() => {
    if (!industry || !businessScale || !Array.isArray(services)) return [];

    return services.filter(service => {
      // Check if service is suitable for the selected scale
      if (service.recommendedFor && !service.recommendedFor.includes(businessScale)) {
        return false;
      }

      // Check if service has features for the selected industry
      if (service.industryFeatures && service.industryFeatures[industry]?.length > 0) {
        return true;
      }

      // Include service if it's generally recommended for the scale
      return true;
    });
  }, [services, businessScale, industry]);

  const handleServiceSelect = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const totalPrice = useMemo(() => {
    return calculateTotalPrice(selectedServices);
  }, [calculateTotalPrice, selectedServices]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Service Catalog</h1>
          <p className="text-gray-600 mt-2">Select the services that best fit your needs</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="text-right">
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="text-2xl font-bold">${totalPrice}/mo</p>
          </div>
          <button
            onClick={() => navigate('/checkout')}
            disabled={selectedServices.length === 0}
            className={`px-6 py-3 rounded-lg flex items-center space-x-2 ${
              selectedServices.length === 0
                ? 'bg-gray-200 text-gray-500 cursor-not-allowed'
                : 'bg-indigo-600 text-white hover:bg-indigo-700'
            }`}
          >
            <span>Continue</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Recommended Services</h2>
          <ServiceCatalog 
            services={recommendedServices} 
            industry={industry} 
            onServiceSelect={handleServiceSelect} 
            selectedServices={selectedServices} 
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCatalogPage;
