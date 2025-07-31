import React, { useMemo } from 'react';
import { useStore } from '../store';
import { services as allServices } from '../data/services';
import { Service } from '../types';

// Flatten the nested services record into a simple array for convenient look-ups
const flattenServices = (): Service[] =>
  (
    Object.values(allServices)
      .flatMap(scaleObj => Object.values(scaleObj).flat()) as unknown as Service[]
  );
import { getAllIndustryFeatures } from '../data/industry-features';
import { 
  Package, 
  Shield, 
  Zap, 
  Code, 
  Database, 
  Smartphone, 
  Globe, 
  PieChart,
  MessageSquare,
  Mail,
  Search,
  Video,
  Wrench, // Replacing Tool which doesn't exist in lucide-react
  Coins,
  Heart,
  GraduationCap,
  Building,
  ShoppingBag
} from 'lucide-react';

const PackageSummaryVisual: React.FC = () => {
  const { 
    selectedServices, 
    // selectedCustomizations is declared but never used
    selectedTechStack,
    selectedIntegrations,
    selectedIndustryFeatures,
    businessScale,
    industry,
    calculateTotalPrice
  } = useStore();

  // Get service details
  // Memoised list of every available service
  const flattenedServices = useMemo(() => flattenServices(), []);

  const serviceDetails = useMemo(() => {
    return selectedServices.map(id => {
      const service = flattenedServices.find((s: Service) => s.id === id);
      return service ? {
        id: service.id,
        name: service.name,
        category: service.category,
        description: service.description
      } : null;
    }).filter(Boolean);
  }, [selectedServices]);

  // Get industry feature details
  const industryFeatureDetails = useMemo(() => {
    if (!industry) return [];
    
    const industryFeatures = industry && getAllIndustryFeatures()[industry as keyof ReturnType<typeof getAllIndustryFeatures>] || [];
    return selectedIndustryFeatures.map(id => {
      const feature = industryFeatures.find((f: any) => f.id === id);
      return feature ? {
        id: feature.id,
        name: feature.name,
        category: feature.category
      } : null;
    }).filter(Boolean);
  }, [selectedIndustryFeatures, industry]);

  // Calculate total price
  const totalPrice = useMemo(() => {
    return calculateTotalPrice();
  }, [calculateTotalPrice]);

  // Get icon for category
  const getCategoryIcon = (category: string) => {
    const iconProps = { className: "h-6 w-6" };
    
    switch (category) {
      case 'development': return <Code {...iconProps} />;
      case 'security': return <Shield {...iconProps} />;
      case 'infrastructure': return <Database {...iconProps} />;
      case 'mobile': return <Smartphone {...iconProps} />;
      case 'design': return <Globe {...iconProps} />;
      case 'analytics': return <PieChart {...iconProps} />;
      case 'social': return <MessageSquare {...iconProps} />;
      case 'email': return <Mail {...iconProps} />;
      case 'seo': return <Search {...iconProps} />;
      case 'video': return <Video {...iconProps} />;
      case 'maintenance': return <Wrench {...iconProps} />;
      case 'crypto': return <Coins {...iconProps} />;
      case 'healthcare': return <Heart {...iconProps} />;
      case 'education': return <GraduationCap {...iconProps} />;
      case 'finance': return <Building {...iconProps} />;
      case 'ecommerce': return <ShoppingBag {...iconProps} />;
      default: return <Package {...iconProps} />;
    }
  };

  // Group services by category
  const servicesByCategory = useMemo(() => {
    const grouped: Record<string, typeof serviceDetails> = {};
    
    serviceDetails.forEach(service => {
      if (!service) return;
      
      if (!grouped[service.category]) {
        grouped[service.category] = [];
      }
      
      grouped[service.category].push(service);
    });
    
    return grouped;
  }, [serviceDetails]);

  // Calculate the size of each category based on number of services
  const calculateCategorySize = (category: string) => {
    const count = servicesByCategory[category]?.length || 0;
    const total = serviceDetails.length;
    
    if (total === 0) return 'w-full';
    
    const percentage = (count / total) * 100;
    
    if (percentage > 50) return 'w-full';
    if (percentage > 30) return 'w-2/3';
    if (percentage > 15) return 'w-1/2';
    return 'w-1/3';
  };

  // Get color for category
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'development': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'security': return 'bg-red-100 text-red-800 border-red-200';
      case 'infrastructure': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'mobile': return 'bg-green-100 text-green-800 border-green-200';
      case 'design': return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'analytics': return 'bg-indigo-100 text-indigo-800 border-indigo-200';
      case 'social': return 'bg-pink-100 text-pink-800 border-pink-200';
      case 'email': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'seo': return 'bg-green-100 text-green-800 border-green-200';
      case 'video': return 'bg-red-100 text-red-800 border-red-200';
      case 'maintenance': return 'bg-gray-100 text-gray-800 border-gray-200';
      case 'crypto': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'healthcare': return 'bg-red-100 text-red-800 border-red-200';
      case 'education': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'finance': return 'bg-green-100 text-green-800 border-green-200';
      case 'ecommerce': return 'bg-purple-100 text-purple-800 border-purple-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  if (serviceDetails.length === 0) {
    return (
      <div className="text-center py-10 bg-gray-50 rounded-lg">
        <Package className="h-12 w-12 mx-auto text-gray-400" />
        <h3 className="mt-4 text-lg font-medium text-gray-900">No services selected</h3>
        <p className="mt-1 text-sm text-gray-500">
          Select services from the catalog to build your package
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-gray-900">Your Package Summary</h3>
        <div className="text-right">
          <p className="text-sm text-gray-600">Total Investment</p>
          <p className="text-2xl font-bold text-indigo-600">${totalPrice.toLocaleString()}/mo</p>
        </div>
      </div>

      {/* Business Scale & Industry */}
      <div className="flex flex-wrap gap-4 mb-6">
        <div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md flex items-center">
          <Zap className="h-5 w-5 mr-2" />
          <span className="capitalize">{businessScale.replace('-', ' ')} Scale</span>
        </div>
        {industry && (
          <div className="px-4 py-2 bg-purple-50 text-purple-700 rounded-md flex items-center">
            <Globe className="h-5 w-5 mr-2" />
            <span className="capitalize">{industry.replace('-', ' ')} Industry</span>
          </div>
        )}
      </div>

      {/* Visual representation of services by category */}
      <div className="mb-8">
        <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
          Services by Category
        </h4>
        <div className="flex flex-wrap gap-4">
          {Object.keys(servicesByCategory).map(category => (
            <div 
              key={category}
              className={`${calculateCategorySize(category)} p-4 rounded-lg border ${getCategoryColor(category)}`}
            >
              <div className="flex items-center mb-2">
                {getCategoryIcon(category)}
                <span className="ml-2 font-medium capitalize">{category.replace('-', ' ')}</span>
              </div>
              <div className="space-y-1">
                {servicesByCategory[category].map(service => (
                  service && (
                    <div key={service.id} className="text-sm">
                      {service.name}
                    </div>
                  )
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Tech Stack */}
      {selectedTechStack.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Technology Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedTechStack.map(tech => (
              <span 
                key={tech.id}
                className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm"
              >
                {tech.name}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Integrations */}
      {selectedIntegrations.length > 0 && (
        <div className="mb-6">
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Integrations
          </h4>
          <div className="flex flex-wrap gap-2">
            {selectedIntegrations.map(integration => (
              <span 
                key={integration}
                className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm"
              >
                {integration}
              </span>
            ))}
          </div>
        </div>
      )}

      {/* Industry Features */}
      {industryFeatureDetails.length > 0 && (
        <div>
          <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
            Industry-Specific Features
          </h4>
          <div className="flex flex-wrap gap-2">
            {industryFeatureDetails.map(feature => (
              feature && (
                <span 
                  key={feature.id}
                  className="px-3 py-1 bg-purple-50 text-purple-700 rounded-full text-sm"
                >
                  {feature.name}
                </span>
              )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default PackageSummaryVisual;
