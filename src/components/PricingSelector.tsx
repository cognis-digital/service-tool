import React from 'react';
import { Clock, CreditCard, Repeat } from 'lucide-react';
import { PricingTier, TimeFrame, PaymentType } from '../types';

interface PricingSelectorProps {
  tiers: PricingTier[];
  selectedTierId: string;
  onSelect: (tierId: string) => void;
}

function PricingSelector({ tiers, selectedTierId, onSelect }: PricingSelectorProps) {
  const getTimeFrameIcon = (timeFrame: TimeFrame) => {
    switch (timeFrame) {
      case 'hourly': return '/ hour';
      case 'daily': return '/ day';
      case 'weekly': return '/ week';
      case 'monthly': return '/ month';
      case 'quarterly': return '/ quarter';
      case 'yearly': return '/ year';
    }
  };

  const getPaymentTypeIcon = (type: PaymentType) => {
    switch (type) {
      case 'one-time': return <CreditCard className="h-5 w-5" />;
      case 'subscription': return <Repeat className="h-5 w-5" />;
      case 'usage-based': return <Clock className="h-5 w-5" />;
      case 'milestone-based': return <CreditCard className="h-5 w-5" />;
    }
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {tiers.map((tier) => (
        <button
          key={tier.id}
          onClick={() => onSelect(tier.id)}
          className={`p-6 rounded-lg border-2 transition-all ${
            selectedTierId === tier.id
              ? 'border-indigo-600 bg-indigo-50'
              : 'border-gray-200 hover:border-indigo-200'
          }`}
        >
          <div className="text-left">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900">{tier.name}</h3>
                <div className="flex items-center mt-1 text-gray-500">
                  {getPaymentTypeIcon(tier.paymentType)}
                  <span className="ml-1 text-sm capitalize">
                    {tier.paymentType.replace('-', ' ')}
                  </span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-2xl font-bold text-indigo-600">
                  ${tier.basePrice}
                </span>
                {tier.timeFrame && (
                  <span className="text-sm text-gray-500 block">
                    {getTimeFrameIcon(tier.timeFrame)}
                  </span>
                )}
              </div>
            </div>
            
            <ul className="space-y-2">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center text-sm text-gray-600">
                  <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full mr-2" />
                  {feature}
                </li>
              ))}
            </ul>

            {tier.minimumCommitment && (
              <p className="mt-4 text-sm text-gray-500">
                Minimum commitment: {tier.minimumCommitment} {tier.timeFrame}
              </p>
            )}
          </div>
        </button>
      ))}
    </div>
  );
}

export default PricingSelector;