import React from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export type StepStatus = 'completed' | 'current' | 'upcoming';

interface Step {
  id: string;
  name: string;
  description: string;
  status: StepStatus;
  path: string;
}

interface ServiceSelectionStepperProps {
  currentStep: string;
}

const ServiceSelectionStepper: React.FC<ServiceSelectionStepperProps> = ({ currentStep }) => {
  const navigate = useNavigate();

  const steps: Step[] = [
    {
      id: 'services',
      name: 'Select Services',
      description: 'Choose the core services for your package',
      status: currentStep === 'services' ? 'current' : (currentStep === 'customization' || currentStep === 'review') ? 'completed' : 'upcoming',
      path: '/service-tool/catalog'
    },
    {
      id: 'customization',
      name: 'Customize Package',
      description: 'Add features and customizations to your services',
      status: currentStep === 'customization' ? 'current' : currentStep === 'review' ? 'completed' : 'upcoming',
      path: '/service-tool/build'
    },
    {
      id: 'review',
      name: 'Review & Submit',
      description: 'Review your package and submit your request',
      status: currentStep === 'review' ? 'current' : 'upcoming',
      path: '/service-tool/review'
    }
  ];

  const handleStepClick = (step: Step) => {
    // Only allow navigation to completed steps or the current step
    if (step.status === 'completed' || step.status === 'current') {
      navigate(step.path);
    }
  };

  return (
    <div className="py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav aria-label="Progress">
          <ol className="flex items-center">
            {steps.map((step, stepIdx) => (
              <li 
                key={step.id} 
                className={`${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''} relative`}
              >
                {step.status === 'completed' ? (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-indigo-600" />
                    </div>
                    <button
                      onClick={() => handleStepClick(step)}
                      className="relative w-8 h-8 flex items-center justify-center bg-indigo-600 rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                      <Check className="w-5 h-5 text-white" aria-hidden="true" />
                      <span className="sr-only">{step.name}</span>
                    </button>
                  </>
                ) : step.status === 'current' ? (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <button
                      onClick={() => handleStepClick(step)}
                      className="relative w-8 h-8 flex items-center justify-center bg-white border-2 border-indigo-600 rounded-full"
                      aria-current="step"
                    >
                      <span className="h-2.5 w-2.5 bg-indigo-600 rounded-full" aria-hidden="true" />
                      <span className="sr-only">{step.name}</span>
                    </button>
                  </>
                ) : (
                  <>
                    <div className="absolute inset-0 flex items-center" aria-hidden="true">
                      <div className="h-0.5 w-full bg-gray-200" />
                    </div>
                    <div className="group relative w-8 h-8 flex items-center justify-center bg-white border-2 border-gray-300 rounded-full hover:border-gray-400">
                      <span className="h-2.5 w-2.5 bg-transparent rounded-full group-hover:bg-gray-300" aria-hidden="true" />
                      <span className="sr-only">{step.name}</span>
                    </div>
                  </>
                )}
                
                {stepIdx !== steps.length - 1 && (
                  <div className="hidden sm:block absolute top-0 right-0 h-full w-5 flex items-center justify-center">
                    <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                  </div>
                )}
              </li>
            ))}
          </ol>
        </nav>

        <div className="mt-4 flex justify-between">
          {steps.map((step) => (
            <div 
              key={step.id} 
              className={`text-sm ${
                step.status === 'upcoming' ? 'text-gray-500' : 
                step.status === 'current' ? 'text-indigo-600 font-medium' : 
                'text-gray-900'
              }`}
            >
              <button 
                onClick={() => handleStepClick(step)}
                disabled={step.status === 'upcoming'}
                className={`block text-left focus:outline-none ${step.status !== 'upcoming' ? 'cursor-pointer' : 'cursor-not-allowed'}`}
              >
                <span>{step.name}</span>
                <span className="block text-xs mt-0.5">{step.description}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceSelectionStepper;
