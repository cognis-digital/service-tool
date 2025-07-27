import React, { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Users, Shield, Code, Database, Zap, PieChart, Check } from 'lucide-react';
import { useStore } from '../store';
import PackageSummaryVisual from './PackageSummaryVisual';
import { services as allServices } from '../data/services';
import { techStackOptions } from '../data/tech-stack-options';
import { integrationOptions as integrationOptions1 } from '../data/customization-options';
import { integrationOptions as integrationOptions2 } from '../data/integration-options';
import { getAllIndustryFeatures } from '../data/industry-features';
import { Service as ServiceDataType } from '../data/services';

function ReviewPage() {
  const navigate = useNavigate();
  const { 
    selectedServices, 
    businessScale, 
    industry,
    selectedTechStack, 
    selectedCustomizations, 
    selectedIntegrations,
    selectedIndustryFeatures,
    calculateTotalPrice 
  } = useStore();
  
  // Redirect to catalog if no services are selected
  React.useEffect(() => {
    if (!selectedServices || selectedServices.length === 0) {
      navigate('/');
    }
  }, [selectedServices, navigate]);

  // Flatten the nested services record into a simple array for lookup
  const flattenServices = useMemo(() => {
    return Object.values(allServices)
      .flatMap(scaleObj => Object.values(scaleObj).flat()) as ServiceDataType[];
  }, []);

  // Get detailed service information
  const serviceDetails = useMemo(() => {
    return selectedServices.map(id => {
      return flattenServices.find(s => s.id === id);
    }).filter(Boolean) as ServiceDataType[];
  }, [selectedServices, flattenServices]);

  // Calculate delivery timeline based on services and scale
  const estimatedDelivery = useMemo(() => {
    const baseWeeks = serviceDetails.reduce((sum, service) => {
      // Use timelineWeeks if available or calculate based on service complexity
      return sum + ((service as any).timelineWeeks || 4); // Default to 4 weeks if not specified
    }, 0);
    
    // Adjust for complexity
    const scaleMultiplier = {
      individual: 1,
      startup: 1.2,
      'small-business': 1.5,
      enterprise: 2
    }[businessScale] || 1;
    
    return Math.ceil(baseWeeks * scaleMultiplier);
  }, [serviceDetails, businessScale]);

  // Get tech stack details with pricing
  const techStackDetails = useMemo(() => {
    const details: Record<string, any[]> = {};
    
    // Group tech stack by category
    Object.entries(techStackOptions).forEach(([category, options]) => {
      const selectedInCategory = (options as any[]).filter(option => 
        selectedTechStack.includes(option.id)
      );
      
      if (selectedInCategory.length > 0) {
        details[category] = selectedInCategory;
      }
    });
    
    return details;
  }, [selectedTechStack]);

  // Get integration details
  const getIntegrationDetails = useMemo(() => {
    // Combine all integration sources
    const allIntegrationsMap: Record<string, any> = {};
    
    // Add from customization-options.ts
    integrationOptions1.forEach(integration => {
      allIntegrationsMap[integration.id] = integration;
    });
    
    // Add from integration-options.ts
    Object.values(integrationOptions2).forEach((category: any) => {
      category.forEach((integration: any) => {
        allIntegrationsMap[integration.id] = integration;
      });
    });
    
    // Map selected integrations to their full details
    return selectedIntegrations.map(id => allIntegrationsMap[id]).filter(Boolean);
  }, [selectedIntegrations]);

  // Get security options
  const getSecurityDetails = useMemo(() => {
    if (!serviceDetails[0] || !(serviceDetails[0] as any).security) return [];
    
    return (serviceDetails[0] as any).security
      .filter((option: any) => selectedCustomizations.includes(option.id));
  }, [serviceDetails, selectedCustomizations]);

  // Get industry feature details
  const industryFeatureDetails = useMemo(() => {
    if (!industry) return [];
    
    const industryFeaturesObj = getAllIndustryFeatures();
    // Safely access industry features with a type guard
    const industryFeatures = industry && industryFeaturesObj[industry as keyof typeof industryFeaturesObj] || [];
    return selectedIndustryFeatures.map(id => {
      return industryFeatures.find((feature: any) => feature.id === id);
    }).filter(Boolean);
  }, [industry, selectedIndustryFeatures]);
  
  // Calculate price breakdown
  const priceBreakdown = useMemo(() => {
    const baseServicePrice = serviceDetails.reduce((sum, service) => sum + (service.basePrice || 0), 0);
    
    const techStackPrice = selectedTechStack.reduce((sum, id) => {
      let price = 0;
      Object.values(techStackOptions).forEach((category: any) => {
        const tech = category.find((t: any) => t.id === id);
        if (tech && tech.price !== undefined) {
          price = tech.price;
        }
      });
      return sum + price;
    }, 0);
    
    const integrationsPrice = getIntegrationDetails.reduce((sum, integration) => 
      sum + (integration.price || 0), 0);
    
    const securityPrice = getSecurityDetails.reduce((sum: number, option: any) => 
      sum + (option.price || 0), 0);
    
    const industryFeaturesPrice = industryFeatureDetails.reduce((sum, feature: any) => 
      sum + (feature.price || 0), 0);
    
    return {
      baseService: baseServicePrice,
      techStack: techStackPrice,
      integrations: integrationsPrice,
      security: securityPrice,
      industryFeatures: industryFeaturesPrice,
      total: calculateTotalPrice()
    };
  }, [serviceDetails, selectedTechStack, getIntegrationDetails, getSecurityDetails, industryFeatureDetails, calculateTotalPrice]);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <button
          onClick={() => navigate('/service-tool/build')}
          className="flex items-center text-gray-600 hover:text-gray-900"
        >
          <ArrowLeft className="h-5 w-5 mr-2" />
          Back to Customization
        </button>
        <h1 className="text-3xl font-bold text-gray-900">Review Your Solution</h1>
      </div>

      {/* Service Overview Card */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Service Overview</h2>
          <div className="flex items-center bg-indigo-50 text-indigo-700 px-4 py-2 rounded-md">
            <Clock className="h-5 w-5 mr-2" />
            <span>Estimated delivery: {estimatedDelivery} weeks</span>
          </div>
        </div>

        {/* Business Scale & Industry */}
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="px-4 py-2 bg-indigo-50 text-indigo-700 rounded-md flex items-center">
            <Users className="h-5 w-5 mr-2" />
            <span className="capitalize">{businessScale.replace('-', ' ')} Scale</span>
          </div>
          {industry && (
            <div className="px-4 py-2 bg-purple-50 text-purple-700 rounded-md flex items-center">
              <PieChart className="h-5 w-5 mr-2" />
              <span className="capitalize">{industry.replace('-', ' ')} Industry</span>
            </div>
          )}
        </div>

        {/* Selected Services */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-3">Selected Services</h3>
          <div className="space-y-4">
            {serviceDetails.map((service) => (
              <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-semibold text-gray-900">{service.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{service.description}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-indigo-600">${(service.basePrice || 0).toLocaleString()}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <PackageSummaryVisual />
      </div>

      {/* Tech Stack Details */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <Code className="h-6 w-6 text-indigo-600 mr-3" />
          <h2 className="text-2xl font-bold text-gray-900">Technology Stack Details</h2>
        </div>

        <div className="space-y-6">
          {Object.entries(techStackDetails).map(([category, techs]) => (
            <div key={category} className="border-b border-gray-200 pb-5">
              <h3 className="font-medium text-lg text-gray-900 mb-3 capitalize">{category.replace('-', ' ')}</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {techs.map((tech: any) => (
                  <div key={tech.id} className="flex justify-between items-center bg-gray-50 p-3 rounded-md">
                    <span className="font-medium">{tech.name}</span>
                    <span className="text-indigo-600 font-semibold">
                      {tech.price ? `$${tech.price.toLocaleString()}` : 'Included'}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Integrations & Security */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        {/* Integrations */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Database className="h-6 w-6 text-green-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Integrations</h2>
          </div>
          
          {getIntegrationDetails.length > 0 ? (
            <div className="space-y-3">
              {getIntegrationDetails.map((integration: any) => (
                <div key={integration.id} className="flex justify-between items-center border-b border-gray-100 py-2">
                  <div>
                    <p className="font-medium text-gray-800">{integration.name}</p>
                    <p className="text-sm text-gray-600">{integration.description || 'External service integration'}</p>
                  </div>
                  <span className="font-semibold text-green-600">${(integration.price || 0).toLocaleString()}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No integrations selected</p>
          )}
        </div>

        {/* Security Options */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center mb-6">
            <Shield className="h-6 w-6 text-red-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Security Options</h2>
          </div>
          
          {getSecurityDetails.length > 0 ? (
            <div className="space-y-3">
              {getSecurityDetails.map((option: any) => (
                <div key={option.id} className="flex justify-between items-center border-b border-gray-100 py-2">
                  <div>
                    <p className="font-medium text-gray-800">{option.name}</p>
                    <p className="text-sm text-gray-600">{option.description || 'Security enhancement'}</p>
                  </div>
                  <span className="font-semibold text-red-600">${(option.price || 0).toLocaleString()}</span>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">No security options selected</p>
          )}
        </div>
      </div>

      {/* Industry-Specific Features */}
      {industryFeatureDetails.length > 0 && (
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex items-center mb-6">
            <PieChart className="h-6 w-6 text-purple-600 mr-3" />
            <h2 className="text-xl font-bold text-gray-900">Industry-Specific Features</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industryFeatureDetails.map((feature: any) => (
              <div key={feature.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between">
                  <h4 className="font-medium text-gray-800">{feature.name}</h4>
                  <span className="font-semibold text-purple-600">${(feature.price || 0).toLocaleString()}</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">{feature.description || 'Industry-specific feature'}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Detailed Price Breakdown */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <Zap className="h-6 w-6 text-yellow-600 mr-3" />
          <h2 className="text-xl font-bold text-gray-900">Detailed Price Breakdown</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-700">Base Service Price</span>
            <span className="font-medium">${priceBreakdown.baseService.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-700">Technology Stack</span>
            <span className="font-medium">${priceBreakdown.techStack.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-700">Integrations</span>
            <span className="font-medium">${priceBreakdown.integrations.toLocaleString()}</span>
          </div>
          
          <div className="flex justify-between py-2 border-b border-gray-100">
            <span className="text-gray-700">Security Options</span>
            <span className="font-medium">${priceBreakdown.security.toLocaleString()}</span>
          </div>
          
          {priceBreakdown.industryFeatures > 0 && (
            <div className="flex justify-between py-2 border-b border-gray-100">
              <span className="text-gray-700">Industry-Specific Features</span>
              <span className="font-medium">${priceBreakdown.industryFeatures.toLocaleString()}</span>
            </div>
          )}
          
          {/* Calculate discount */}
          {(priceBreakdown.total < (priceBreakdown.baseService + priceBreakdown.techStack + 
                                  priceBreakdown.integrations + priceBreakdown.security + 
                                  priceBreakdown.industryFeatures)) && (
            <div className="flex justify-between py-2 border-b border-gray-100 text-green-600">
              <span>Bundle Discount</span>
              <span className="font-medium">-${(priceBreakdown.baseService + priceBreakdown.techStack + 
                                        priceBreakdown.integrations + priceBreakdown.security + 
                                        priceBreakdown.industryFeatures - priceBreakdown.total).toLocaleString()}</span>
            </div>
          )}
          
          <div className="flex justify-between pt-4 text-lg font-bold text-indigo-600">
            <span>Total Monthly Price</span>
            <span>${priceBreakdown.total.toLocaleString()}/mo</span>
          </div>
        </div>
      </div>

      {/* Service Level Agreement */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center mb-6">
          <Calendar className="h-6 w-6 text-blue-600 mr-3" />
          <h2 className="text-xl font-bold text-gray-900">Service Level Agreement</h2>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800">Timeline</h4>
              <p className="text-sm text-gray-600">Estimated project completion in {estimatedDelivery} weeks based on your selected scale and services</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800">Support</h4>
              <p className="text-sm text-gray-600">24/7 priority support included with enterprise packages, business hours support for all other packages</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800">Updates</h4>
              <p className="text-sm text-gray-600">Regular security updates and feature enhancements included in your monthly subscription</p>
            </div>
          </div>
          
          <div className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
            <div>
              <h4 className="font-medium text-gray-800">Guarantee</h4>
              <p className="text-sm text-gray-600">100% satisfaction guarantee with 30-day risk-free trial period</p>
            </div>
          </div>
        </div>
      </div>

      {/* Call to action buttons */}
      <div className="mt-10 flex justify-between">
        <button
          onClick={() => navigate('/service-tool/build')}
          className="px-6 py-3 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
        >
          Modify Solution
        </button>
        
        <button
          onClick={() => {
            // This would typically submit the order or go to a checkout page
            alert('Thank you for your order! Total: $' + calculateTotalPrice().toLocaleString() + '/month');
          }}
          className="px-8 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
        >
          Finalize Order
        </button>
      </div>
    </div>
  );
}

export default ReviewPage;
