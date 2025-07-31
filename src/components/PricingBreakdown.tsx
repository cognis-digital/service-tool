// React is implicitly used for JSX
import { X, Package, Shield, Zap, DollarSign } from 'lucide-react';
import { Service, Industry, BusinessScale } from '../types';
import { services } from '../data/services';
import { getAllIndustryFeatures } from '../data/industry-features';

interface PricingBreakdownProps {
  onClose: () => void;
  selectedServices: string[];
  selectedFeatures: string[];
  scale: BusinessScale;
  industry: Industry | null;
}

function PricingBreakdown({
  onClose,
  selectedServices,
  selectedFeatures,
  scale,
  industry
}: PricingBreakdownProps) {
  const getScaleMultiplier = () => {
    return {
      individual: 1,
      startup: 1.5,
      'small-business': 2.5,
      enterprise: 4
    }[scale] || 1;
  };

  const getIndustryPremium = () => {
    if (industry === 'healthcare') return 1.2;
    if (industry === 'finance') return 1.15;
    if (industry === 'crypto') return 1.25;
    return 1;
  };

  const calculateServicePrice = (service: Service) => {
    return Math.round(service.basePrice * getScaleMultiplier() * getIndustryPremium());
  };

  // Flatten nested services object for quick lookup
  const allServicesArray = Object.values(services).flatMap(scaleObj =>
    Object.values(scaleObj).flat()
  ) as any[]; // Using any type to avoid type compatibility issues

  const selectedServiceDetails = selectedServices.map(id => {
    const service: any = allServicesArray.find((s: any) => s.id === id);
    return service ? {
      name: service.name,
      price: calculateServicePrice(service),
      category: service.category
    } : null;
  }).filter(Boolean);

  const selectedFeatureDetails = selectedFeatures.map(id => {
    const allFeatures = industry && industry in getAllIndustryFeatures() ? getAllIndustryFeatures()[industry as keyof ReturnType<typeof getAllIndustryFeatures>] : [];
    const feature = allFeatures.find((f: any) => f.id === id);
    return feature ? {
      name: feature.name,
      price: feature.price,
      category: feature.category
    } : null;
  }).filter(Boolean);

  const subtotal = [
    ...selectedServiceDetails,
    ...selectedFeatureDetails
  ].reduce((sum, item) => sum + (item?.price || 0), 0);

  const discount = selectedServices.length >= 3 ? subtotal * 0.1 : 0;
  const total = subtotal - discount;

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'security': return <Shield className="h-5 w-5 text-red-500" />;
      case 'infrastructure': return <Zap className="h-5 w-5 text-yellow-500" />;
      default: return <Package className="h-5 w-5 text-indigo-500" />;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4">
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div>
              <h3 className="text-2xl font-semibold text-gray-900">Solution Summary</h3>
              <p className="text-gray-600">Detailed breakdown of your custom solution</p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <div className="space-y-8">
            {/* Services */}
            <div>
              <h4 className="font-medium text-gray-900 mb-4">Core Services</h4>
              <div className="space-y-3">
                {selectedServiceDetails.map((service, index) => (
                  service && (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {getCategoryIcon(service.category)}
                        <span className="text-gray-900">{service.name}</span>
                      </div>
                      <span className="font-medium text-gray-900">${service.price.toLocaleString()}</span>
                    </div>
                  )
                ))}
              </div>
            </div>

            {/* Features */}
            {selectedFeatureDetails.length > 0 && (
              <div>
                <h4 className="font-medium text-gray-900 mb-4">Industry Features</h4>
                <div className="space-y-3">
                  {selectedFeatureDetails.map((feature, index) => (
                    feature && (
                      <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          {getCategoryIcon(feature.category)}
                          <span className="text-gray-900">{feature.name}</span>
                        </div>
                        <span className="font-medium text-gray-900">${feature.price.toLocaleString()}</span>
                      </div>
                    )
                  ))}
                </div>
              </div>
            )}

            {/* Scale & Industry Adjustments */}
            <div className="border-t pt-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-sm text-blue-600 mb-1">Scale Multiplier</div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-900 capitalize">{scale.replace('-', ' ')}</span>
                    <span className="font-medium text-blue-600">{getScaleMultiplier()}x</span>
                  </div>
                </div>
                {industry && (
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="text-sm text-purple-600 mb-1">Industry Premium</div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-900 capitalize">{industry.replace('-', ' ')}</span>
                      <span className="font-medium text-purple-600">+{((getIndustryPremium() - 1) * 100).toFixed(0)}%</span>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Total */}
            <div className="border-t pt-4">
              <div className="space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString()}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-green-600">
                    <span>Bundle Discount (10%)</span>
                    <span>-${discount.toLocaleString()}</span>
                  </div>
                )}
                <div className="flex justify-between items-center text-xl font-semibold text-gray-900 pt-2">
                  <span>Total Investment</span>
                  <div className="flex items-center space-x-2">
                    <DollarSign className="h-6 w-6 text-indigo-600" />
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PricingBreakdown;