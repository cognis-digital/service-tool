import React from 'react';
import { Building2, User, Users, Building } from 'lucide-react';
import { useStore } from '../store';
import { BusinessScale } from '../types';

const scales: { id: BusinessScale; name: string; icon: React.ElementType; description: string }[] = [
  {
    id: 'individual',
    name: 'Individual',
    icon: User,
    description: 'For personal projects and freelancers'
  },
  {
    id: 'startup',
    name: 'Startup',
    icon: Users,
    description: 'For early-stage companies and small teams'
  },
  {
    id: 'small-business',
    name: 'Small Business',
    icon: Building2,
    description: 'For established businesses with growing needs'
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    icon: Building,
    description: 'For large organizations with complex requirements'
  }
];

function BusinessScaleSelector() {
  const { businessScale, setBusinessScale } = useStore();

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Select Your Business Scale</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {scales.map(({ id, name, icon: Icon, description }) => (
          <button
            key={id}
            onClick={() => setBusinessScale(id)}
            className={`p-4 rounded-lg border-2 transition-all ${
              businessScale === id
                ? 'border-indigo-600 bg-indigo-50'
                : 'border-gray-200 hover:border-indigo-200'
            }`}
          >
            <div className="flex flex-col items-center text-center">
              <Icon className={`h-8 w-8 mb-2 ${
                businessScale === id ? 'text-indigo-600' : 'text-gray-500'
              }`} />
              <h3 className="font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BusinessScaleSelector;