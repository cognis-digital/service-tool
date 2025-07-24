import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { getServicesByScale, services as allServices, Industry } from '../data/services';
import { ArrowRight } from 'lucide-react';
import { Service } from '../data/services';
import ServiceCatalog from './ServiceCatalog';

function ServiceCatalogPage() {
  const navigate = useNavigate();
  
  const {
    selectedServices,
    businessScale,
    industry,
    setSelectedServices,
    calculateTotalPrice
  } = useStore();

  // Get recommended services for current scale
  const recommendedServices = useMemo(() => {
    // Ensure we have a valid businessScale, default to 'startup' if not set
    const scale = businessScale || 'startup';
    
    // Get services by scale
    const scaleServices = getServicesByScale(scale);
    
    // Fallback to some services if none found
    if (!scaleServices || scaleServices.length === 0) {
      console.log('No services found for scale:', scale);
      // Get first category of services from any scale as fallback
      const anyScale = Object.keys(allServices)[0];
      if (anyScale) {
        const anyCategory = Object.keys(allServices[anyScale])[0];
        if (anyCategory) {
          return allServices[anyScale][anyCategory] as Service[];
        }
      }
    }
    
    return scaleServices;
  }, [businessScale]);

  const handleServiceSelect = (serviceId: string) => {
    if (selectedServices.includes(serviceId)) {
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      setSelectedServices([...selectedServices, serviceId]);
    }
  };

  const totalPrice = useMemo(() => {
    return calculateTotalPrice();
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
            onClick={() => navigate('/build')}
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
            industry={industry as any} 
            onServiceSelect={handleServiceSelect} 
            selectedServices={selectedServices} 
          />
        </div>
      </div>
    </div>
  );
}

export default ServiceCatalogPage;
