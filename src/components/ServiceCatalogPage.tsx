import { useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store';
import { getServicesByScale, services as allServices, Scale } from '../data/services';
import { Industry } from '../types';
import { ArrowRight, Filter, RefreshCw, Info, X } from 'lucide-react';
import { Service } from '../data/services';
import ServiceCatalog from './ServiceCatalog';

function ServiceCatalogPage() {
  const navigate = useNavigate();
  const [showFilters, setShowFilters] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  
  const {
    selectedServices,
    businessScale,
    industry,
    setSelectedServices,
    calculateTotalPrice,
    setBusinessScale,
    setIndustry
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
    console.log('Service selected:', serviceId);
    if (selectedServices.includes(serviceId)) {
      console.log('Removing service from selection');
      setSelectedServices(selectedServices.filter(id => id !== serviceId));
    } else {
      console.log('Adding service to selection');
      setSelectedServices([...selectedServices, serviceId]);
    }
    console.log('Updated selected services:', selectedServices.includes(serviceId) ? 
      selectedServices.filter(id => id !== serviceId) : 
      [...selectedServices, serviceId]);
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
          <button
            onClick={() => setShowInfo(true)}
            className="p-2 rounded-full hover:bg-gray-100"
            title="View Information"
          >
            <Info className="w-5 h-5 text-gray-600" />
          </button>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`p-2 rounded-full ${showFilters ? 'bg-indigo-100 text-indigo-600' : 'hover:bg-gray-100 text-gray-600'}`}
            title="Filter Services"
          >
            <Filter className="w-5 h-5" />
          </button>
          <div className="text-right">
            <p className="text-sm text-gray-600">Total Price</p>
            <p className="text-2xl font-bold">${totalPrice}/mo</p>
          </div>
          <button
            onClick={() => {
              console.log('Continue button clicked, navigating to build with selected services:', selectedServices);
              navigate('/build');
            }}
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
      
      {/* Filter Panel */}
      {showFilters && (
        <div className="bg-gray-50 p-4 rounded-lg mb-8 border border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-medium">Filter Services</h3>
            <button onClick={() => setShowFilters(false)} className="text-gray-500 hover:text-gray-700">
              <X className="w-5 h-5" />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Business Scale</label>
              <div className="flex space-x-2">
                {['startup', 'small-business', 'enterprise'].map((scale) => (
                  <button
                    key={scale}
                    onClick={() => setBusinessScale(scale as Scale)}
                    className={`px-4 py-2 rounded-md text-sm ${businessScale === scale ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                  >
                    {scale.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Industry</label>
              <div className="flex space-x-2 flex-wrap gap-2">
                {['freelancer', 'e-commerce', 'healthcare', 'finance', 'technology', 'education'].map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustry(ind as Industry)}
                    className={`px-4 py-2 rounded-md text-sm ${industry === ind ? 'bg-indigo-100 text-indigo-700 border border-indigo-300' : 'bg-white border border-gray-300 hover:bg-gray-50'}`}
                  >
                    {ind.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-4 flex justify-end">
            <button
              onClick={() => {
                setBusinessScale('startup' as Scale);
                setIndustry(null);
              }}
              className="flex items-center text-indigo-600 hover:text-indigo-800"
            >
              <RefreshCw className="w-4 h-4 mr-1" />
              <span>Reset Filters</span>
            </button>
          </div>
        </div>
      )}
      
      {/* Info Modal */}
      {showInfo && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-bold">About Service Catalog</h2>
              <button onClick={() => setShowInfo(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="prose">
              <p>Welcome to the Service Catalog! This tool helps you select the right services for your business needs.</p>
              <h3>How to use:</h3>
              <ol>
                <li>Browse through the recommended services based on your business scale.</li>
                <li>Click on services to select them.</li>
                <li>Use the filter button to refine services by business scale and industry.</li>
                <li>View your total price in the top right.</li>
                <li>Click Continue when you're ready to proceed.</li>
              </ol>
              <p>If you need assistance, please contact our support team.</p>
            </div>
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setShowInfo(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Got it
              </button>
            </div>
          </div>
        </div>
      )}

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
