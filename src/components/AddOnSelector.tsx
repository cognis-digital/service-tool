import React from 'react';
import { Plus, Check } from 'lucide-react';
import { ServiceAddOn } from '../types';

interface AddOnSelectorProps {
  addOns: ServiceAddOn[];
  selectedAddOns: string[];
  onSelect: (addOnId: string) => void;
}

function AddOnSelector({ addOns, selectedAddOns, onSelect }: AddOnSelectorProps) {
  const addOnsByCategory = addOns.reduce((acc, addOn) => {
    if (!acc[addOn.category]) {
      acc[addOn.category] = [];
    }
    acc[addOn.category].push(addOn);
    return acc;
  }, {} as Record<string, ServiceAddOn[]>);

  return (
    <div className="space-y-8">
      {Object.entries(addOnsByCategory).map(([category, categoryAddOns]) => (
        <div key={category} className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4 capitalize">
            {category.replace('-', ' ')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {categoryAddOns.map((addOn) => (
              <button
                key={addOn.id}
                onClick={() => onSelect(addOn.id)}
                className={`p-4 rounded-lg border-2 text-left transition-all ${
                  selectedAddOns.includes(addOn.id)
                    ? 'border-indigo-600 bg-indigo-50'
                    : 'border-gray-200 hover:border-indigo-200'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="font-medium text-gray-900">{addOn.name}</h4>
                    <p className="text-sm text-gray-600 mt-1">{addOn.description}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className="font-semibold text-indigo-600">
                      ${addOn.price}
                      {addOn.timeFrame && <span className="text-sm text-gray-500">/{addOn.timeFrame}</span>}
                    </span>
                    {selectedAddOns.includes(addOn.id) ? (
                      <Check className="h-5 w-5 text-indigo-600" />
                    ) : (
                      <Plus className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </div>
                {addOn.dependencies && addOn.dependencies.length > 0 && (
                  <p className="text-xs text-gray-500 mt-2">
                    Requires: {addOn.dependencies.join(', ')}
                  </p>
                )}
              </button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default AddOnSelector;