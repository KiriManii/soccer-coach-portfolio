import React from 'react';

const EquipmentStep = ({ formData, updateFormData, goToNextStep, goToPreviousStep }) => {
  const { equipment } = formData;
  
  // Equipment options
  const equipmentOptions = [
    { id: 'hasBall', label: 'Soccer Ball', icon: '⚽', description: 'Standard soccer ball appropriate for your age group' },
    { id: 'hasCones', label: 'Training Cones', icon: '🔶', description: 'Cones or markers for drills and exercises' },
    { id: 'hasGoal', label: 'Training Goal', icon: '🥅', description: 'Any size goal for shooting practice' },
    { id: 'hasResistanceBands', label: 'Resistance Bands', icon: '➰', description: 'For strength and conditioning exercises' },
    { id: 'hasAgilityCourse', label: 'Agility Ladder', icon: '🪜', description: 'For footwork and coordination drills' },
    { id: 'hasRebounder', label: 'Rebounder', icon: '🔄', description: 'Wall or net for passing practice' },
    { id: 'hasWeights', label: 'Weights', icon: '🏋️', description: 'Dumbbells or kettlebells for strength training' }
  ];
  
  // Toggle equipment availability
  const toggleEquipment = (equipmentId) => {
    updateFormData('equipment', {
      [equipmentId]: !equipment[equipmentId]
    });
  };
  
  // Handle other equipment input
  const handleOtherEquipmentChange = (e) => {
    updateFormData('equipment', {
      otherEquipment: e.target.value
    });
  };
  
  // Count available equipment
  const getAvailableEquipmentCount = () => {
    return equipmentOptions.filter(option => 
      equipment[option.id] === true
    ).length;
  };
  
  // Form validation - at least ball is required
  const isValid = equipment.hasBall === true;
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary mb-2">Available Equipment</h3>
      <p className="text-gray-600 mb-6">
        Select the equipment you have access to for training. At minimum, you'll need a soccer ball.
      </p>
      
      <div className="mb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {equipmentOptions.map(option => (
            <div 
              key={option.id}
              className={`
                border rounded-lg p-4 cursor-pointer transition-all duration-200
                ${equipment[option.id] 
                  ? 'border-primary bg-primary bg-opacity-5' 
                  : 'border-gray-200 hover:border-gray-300'
                }
              `}
              onClick={() => toggleEquipment(option.id)}
            >
              <div className="flex items-center">
                <div className={`
                  w-6 h-6 rounded-md flex items-center justify-center mr-3
                  ${equipment[option.id] ? 'bg-primary text-white' : 'bg-gray-100 text-gray-400'}
                `}>
                  {equipment[option.id] ? (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  )}
                </div>
                
                <div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-2">{option.icon}</span>
                    <span className={`font-medium ${equipment[option.id] ? 'text-primary' : 'text-gray-700'}`}>
                      {option.label}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{option.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Other equipment */}
        <div className="mt-6">
          <label htmlFor="other-equipment" className="block text-sm font-medium text-gray-700 mb-1">
            Other equipment (optional)
          </label>
          <textarea
            id="other-equipment"
            value={equipment.otherEquipment}
            onChange={handleOtherEquipmentChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            rows="2"
            placeholder="Describe any other equipment you have available for training"
          />
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-blue-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-sm font-medium text-blue-800">Don't have much equipment?</h4>
            <p className="text-sm text-blue-700 mt-1">
              No problem! Your program will be tailored to work with what you have. We can design effective training sessions using minimal equipment.
            </p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-between">
        <button
          type="button"
          onClick={goToPreviousStep}
          className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors"
        >
          Previous
        </button>
        
        <div className="flex items-center">
          <span className="mr-4 text-sm text-gray-500">
            {getAvailableEquipmentCount()} items selected
          </span>
          <button
            type="button"
            onClick={goToNextStep}
            className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
              isValid 
                ? 'bg-primary hover:bg-opacity-90' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValid}
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
};

export default EquipmentStep;