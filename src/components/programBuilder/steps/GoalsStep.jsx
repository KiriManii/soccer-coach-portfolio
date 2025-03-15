import React, { useState } from 'react';

const GoalsStep = ({ formData, updateFormData, goToNextStep, goToPreviousStep }) => {
  const { goals } = formData;
  
  // State for the new goal input
  const [newGoal, setNewGoal] = useState('');
  
  // Timeframe options
  const timeframeOptions = [
    { value: '1-month', label: '1 Month (Short-term)' },
    { value: '3-months', label: '3 Months (Recommended)' },
    { value: '6-months', label: '6 Months (Medium-term)' },
    { value: '12-months', label: '12 Months (Long-term)' }
  ];
  
  // Goal suggestions based on player position
  const goalSuggestions = {
    goalkeeper: [
      'Improve shot-stopping reflexes',
      'Develop better distribution skills',
      'Enhance command of the penalty area',
      'Improve positioning and angle play'
    ],
    defender: [
      'Improve tackling technique',
      'Develop better positional awareness',
      'Enhance aerial ability',
      'Improve build-up play'
    ],
    midfielder: [
      'Develop better vision and passing range',
      'Improve defensive positioning',
      'Enhance stamina and work rate',
      'Develop better ball retention skills'
    ],
    forward: [
      'Improve finishing in front of goal',
      'Develop better movement off the ball',
      'Enhance link-up play with teammates',
      'Improve heading ability'
    ],
    general: [
      'Improve overall fitness level',
      'Develop better technical skills',
      'Enhance game understanding',
      'Develop more confidence on the ball'
    ]
  };
  
  // Get suggestions based on player position
  const getSuggestions = () => {
    const position = formData.playerInfo.position;
    return position && goalSuggestions[position] 
      ? goalSuggestions[position] 
      : goalSuggestions.general;
  };
  
  // Handle primary goal change
  const handlePrimaryGoalChange = (e) => {
    updateFormData('goals', { primary: e.target.value });
  };
  
  // Handle timeframe change
  const handleTimeframeChange = (e) => {
    updateFormData('goals', { timeframe: e.target.value });
  };
  
  // Add a new additional goal
  const addGoal = () => {
    if (newGoal.trim() && !goals.additionalGoals.includes(newGoal.trim())) {
      updateFormData('goals', {
        additionalGoals: [...goals.additionalGoals, newGoal.trim()]
      });
      setNewGoal('');
    }
  };
  
  // Remove an additional goal
  const removeGoal = (goal) => {
    updateFormData('goals', {
      additionalGoals: goals.additionalGoals.filter(g => g !== goal)
    });
  };
  
  // Use a suggestion as the primary goal
  const useSuggestion = (suggestion) => {
    updateFormData('goals', { primary: suggestion });
  };
  
  // Add a suggestion as an additional goal
  const addSuggestion = (suggestion) => {
    if (!goals.additionalGoals.includes(suggestion)) {
      updateFormData('goals', {
        additionalGoals: [...goals.additionalGoals, suggestion]
      });
    }
  };
  
  // Form validation
  const isValid = goals.primary.trim() !== '';
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary mb-2">Goals & Objectives</h3>
      <p className="text-gray-600 mb-6">
        Define what you want to achieve with your training program.
      </p>
      
      <div className="space-y-6 mb-8">
        {/* Primary goal */}
        <div>
          <label htmlFor="primary-goal" className="block text-sm font-medium text-gray-700 mb-1">
            What is your primary training goal?
          </label>
          <textarea
            id="primary-goal"
            value={goals.primary}
            onChange={handlePrimaryGoalChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            rows="3"
            placeholder="e.g., Improve my ball control and dribbling skills to beat defenders more effectively"
            required
          />
        </div>
        
        {/* Timeframe */}
        <div>
          <label htmlFor="timeframe" className="block text-sm font-medium text-gray-700 mb-1">
            Timeframe for achieving your goal
          </label>
          <select
            id="timeframe"
            value={goals.timeframe}
            onChange={handleTimeframeChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          >
            {timeframeOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-sm text-gray-500">
            This helps us structure your program with the right progression.
          </p>
        </div>
        
        {/* Suggested goals */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Suggested goals based on your position:</h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {getSuggestions().map((suggestion, index) => (
              <div key={index} className="flex">
                <button
                  type="button"
                  onClick={() => useSuggestion(suggestion)}
                  className="text-left flex-grow px-3 py-2 border border-gray-300 rounded-l-md text-sm hover:bg-gray-50 transition-colors truncate"
                >
                  {suggestion}
                </button>
                <button
                  type="button"
                  onClick={() => addSuggestion(suggestion)}
                  className="px-2 border-t border-r border-b border-gray-300 rounded-r-md text-gray-500 hover:bg-gray-50 transition-colors"
                  title="Add as additional goal"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* Additional goals */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Additional goals (optional)
          </label>
          <div className="flex">
            <input
              type="text"
              value={newGoal}
              onChange={(e) => setNewGoal(e.target.value)}
              className="flex-grow px-3 py-2 border border-gray-300 rounded-l-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              placeholder="e.g., Improve stamina for full 90 minutes"
            />
            <button
              type="button"
              onClick={addGoal}
              disabled={!newGoal.trim()}
              className={`px-4 py-2 rounded-r-md font-medium ${
                newGoal.trim()
                  ? 'bg-primary text-white hover:bg-opacity-90'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              } transition-colors`}
            >
              Add
            </button>
          </div>
          
          {/* List of additional goals */}
          {goals.additionalGoals.length > 0 && (
            <div className="mt-3 space-y-2">
              {goals.additionalGoals.map((goal, index) => (
                <div key={index} className="flex items-center bg-gray-50 px-3 py-2 rounded-md">
                  <span className="flex-grow text-sm">{goal}</span>
                  <button
                    type="button"
                    onClick={() => removeGoal(goal)}
                    className="ml-2 text-gray-400 hover:text-red-500 transition-colors"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              ))}
            </div>
          )}
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
  );
};

export default GoalsStep;