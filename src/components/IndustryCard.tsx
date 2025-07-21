import React from 'react';
import { Building2, ShoppingCart, Stethoscope, Wallet, Gamepad } from 'lucide-react';
import { Industry } from '../types';

interface IndustryCardProps {
  industry: Industry;
  isSelected: boolean;
  onSelect: () => void;
  features: string[];
  compliance?: string[];
}

function IndustryCard({ industry, isSelected, onSelect, features, compliance }: IndustryCardProps) {
  const getIndustryIcon = () => {
    switch (industry) {
      case 'healthcare': return <Stethoscope className="h-6 w-6" />;
      case 'finance': return <Wallet className="h-6 w-6" />;
      case 'ecommerce': return <ShoppingCart className="h-6 w-6" />;
      case 'gaming': return <Gamepad className="h-6 w-6" />;
      default: return <Building2 className="h-6 w-6" />;
    }
  };

  return (
    <button
      onClick={onSelect}
      className={`w-full p-6 rounded-lg border-2 text-left transition-all ${
        isSelected
          ? 'border-indigo-600 bg-indigo-50'
          : 'border-gray-200 hover:border-indigo-200'
      }`}
    >
      <div className="flex items-start justify-between">
        <div className="flex items-center space-x-3">
          <div className={`${
            isSelected ? 'text-indigo-600' : 'text-gray-500'
          }`}>
            {getIndustryIcon()}
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 capitalize">
              {industry.replace('-', ' ')}
            </h3>
            {compliance && compliance.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {compliance.map((item) => (
                  <span
                    key={item}
                    className="px-2 py-1 text-xs font-medium bg-purple-100 text-purple-700 rounded"
                  >
                    {item}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      
      <div className="mt-4">
        <h4 className="text-sm font-medium text-gray-700 mb-2">Key Features:</h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </button>
  );
}

export default IndustryCard;