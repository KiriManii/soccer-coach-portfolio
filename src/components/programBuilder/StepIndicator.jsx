import React from 'react';

const StepIndicator = ({ steps, currentStepIndex, goToStep }) => {
  return (
    <div className="px-6 py-4 bg-gray-50 border-b">
      <div className="relative">
        {/* Progress bar */}
        <div className="absolute top-1/2 left-0 h-1 bg-gray-300 w-full -translate-y-1/2"></div>
        <div 
          className="absolute top-1/2 left-0 h-1 bg-primary transition-all duration-500 -translate-y-1/2"
          style={{ width: `${(currentStepIndex / (steps.length - 1)) * 100}%` }}
        ></div>
        
        {/* Step indicators */}
        <div className="relative flex justify-between">
          {steps.map((step, index) => {
            const isCompleted = index < currentStepIndex;
            const isCurrent = index === currentStepIndex;
            
            return (
              <div 
                key={step.id}
                className="flex flex-col items-center"
              >
                <button
                  onClick={() => isCompleted ? goToStep(index) : null}
                  className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 transition-all duration-300 ${
                    isCurrent 
                      ? 'bg-primary text-white scale-110' 
                      : isCompleted 
                      ? 'bg-primary text-white cursor-pointer' 
                      : 'bg-gray-200 text-gray-500 cursor-default'
                  }`}
                  disabled={!isCompleted && !isCurrent}
                >
                  {isCompleted ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    index + 1
                  )}
                </button>
                <span className={`text-xs font-medium text-center hidden md:block ${
                  isCurrent ? 'text-primary' : 'text-gray-500'
                }`}>
                  {step.title}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default StepIndicator;