import React from 'react';
import { getAllIndustryFeatures } from '../data/industry-features';
import { Industry, BusinessScale } from '../types';
import { Check, Info } from 'lucide-react';

interface IndustryFeaturesProps {
  industry: Industry;
  scale: BusinessScale;
  selectedFeatures: string[];
  onFeatureSelect: (featureId: string) => void;
}

function IndustryFeatures({ industry, scale, selectedFeatures, onFeatureSelect }: IndustryFeaturesProps) {
  const allFeatures = getAllIndustryFeatures();
  const industryFeatures = allFeatures[industry] || [];

  // Filter features based on business scale
  const availableFeatures = industryFeatures.filter(feature => 
    !feature.scale || feature.scale.includes(scale)
  );

  if (availableFeatures.length === 0) {
    return null;
  }

  const featuresByCategory = availableFeatures.reduce((acc, feature) => {
    if (!acc[feature.category]) {
      acc[feature.category] = [];
    }
    acc[feature.category].push(feature);
    return acc;
  }, {} as Record<string, typeof availableFeatures>);

  return (
    <div className="space-y-8">
      {Object.entries(featuresByCategory).map(([category, features]) => (
        <div key={category} className="bg-white rounded-lg shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-xl font-semibold text-gray-900 capitalize">
              {category.replace('-', ' ')} Features
            </h3>
            <div className="flex items-center text-sm text-gray-500">
              <Info className="h-4 w-4 mr-1" />
              <span>Optimized for {industry.replace('-', ' ')}</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((feature) => (
              <button
                key={feature.id}
                onClick={() => onFeatureSelect(feature.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedFeatures.includes(feature.id)
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{feature.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{feature.description}</p>
                    {feature.scale && (
                      <span className="inline-block mt-2 px-2 py-1 text-xs font-medium bg-gray-100 text-gray-700 rounded">
                        {feature.scale.map(s => s.replace('-', ' ')).join(', ')}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-indigo-600">${feature.price.toLocaleString()}</span>
                    {selectedFeatures.includes(feature.id) && (
                      <Check className="h-5 w-5 text-indigo-600" />
                    )}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default IndustryFeatures;