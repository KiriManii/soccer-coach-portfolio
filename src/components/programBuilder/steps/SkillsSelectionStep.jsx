import React, { useState } from 'react';

const SkillsSelectionStep = ({ formData, updateFormData, goToNextStep, goToPreviousStep }) => {
  const { skills } = formData;
  
  // Categories and skill options
  const skillCategories = [
    {
      id: 'technical',
      label: 'Technical Skills',
      options: [
        { id: 'passing', label: 'Passing & Reception' },
        { id: 'shooting', label: 'Shooting & Finishing' },
        { id: 'dribbling', label: 'Dribbling & Ball Control' },
        { id: 'heading', label: 'Heading' },
        { id: 'first-touch', label: 'First Touch' },
        { id: 'crossing', label: 'Crossing' },
        { id: 'set-pieces', label: 'Set Pieces' }
      ]
    },
    {
      id: 'tactical',
      label: 'Tactical Skills',
      options: [
        { id: 'positioning', label: 'Positioning' },
        { id: 'game-awareness', label: 'Game Awareness' },
        { id: 'decision-making', label: 'Decision Making' },
        { id: 'team-play', label: 'Team Play' },
        { id: 'defensive-organization', label: 'Defensive Organization' },
        { id: 'attacking-principles', label: 'Attacking Principles' },
        { id: 'transition-play', label: 'Transition Play' }
      ]
    },
    {
      id: 'physical',
      label: 'Physical Conditioning',
      options: [
        { id: 'speed', label: 'Speed & Acceleration' },
        { id: 'agility', label: 'Agility & Coordination' },
        { id: 'strength', label: 'Strength & Power' },
        { id: 'endurance', label: 'Endurance' },
        { id: 'balance', label: 'Balance & Stability' },
        { id: 'flexibility', label: 'Flexibility' },
        { id: 'injury-prevention', label: 'Injury Prevention' }
      ]
    },
    {
      id: 'mental',
      label: 'Mental Aspects',
      options: [
        { id: 'confidence', label: 'Confidence' },
        { id: 'concentration', label: 'Concentration' },
        { id: 'motivation', label: 'Motivation & Drive' },
        { id: 'pressure-handling', label: 'Handling Pressure' },
        { id: 'resilience', label: 'Resilience' },
        { id: 'discipline', label: 'Discipline' },
        { id: 'leadership', label: 'Leadership' }
      ]
    }
  ];
  
  // Minimum number of skills per category
  const MIN_SELECTIONS = 1;
  
  // Track expanded category sections
  const [expandedCategories, setExpandedCategories] = useState({
    technical: true,
    tactical: true,
    physical: true,
    mental: true
  });
  
  // Toggle category expansion
  const toggleCategory = (categoryId) => {
    setExpandedCategories({
      ...expandedCategories,
      [categoryId]: !expandedCategories[categoryId]
    });
  };
  
  // Handle skill toggle
  const handleSkillToggle = (categoryId, skillId) => {
    const currentSkills = [...skills[categoryId]];
    
    if (currentSkills.includes(skillId)) {
      // Only allow deselection if it won't go below the minimum
      if (currentSkills.length > MIN_SELECTIONS) {
        updateFormData('skills', {
          [categoryId]: currentSkills.filter(id => id !== skillId)
        });
      }
    } else {
      updateFormData('skills', {
        [categoryId]: [...currentSkills, skillId]
      });
    }
  };
  
  // Check if a skill is selected
  const isSkillSelected = (categoryId, skillId) => {
    return skills[categoryId].includes(skillId);
  };
  
  // Count total selected skills
  const getTotalSelectedSkills = () => {
    return Object.values(skills).reduce((total, categorySkills) => total + categorySkills.length, 0);
  };
  
  // Form validation - at least one skill from each category
  const isValid = Object.keys(skills).every(category => skills[category].length >= MIN_SELECTIONS);
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary mb-2">Skills & Focus Areas</h3>
      <p className="text-gray-600 mb-6">
        Select at least one skill from each category that you'd like to focus on in your training program.
      </p>
      
      <div className="mb-8 space-y-6">
        {skillCategories.map(category => (
          <div key={category.id} className="border rounded-lg overflow-hidden">
            {/* Category header - clickable to expand/collapse */}
            <div 
              className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
              onClick={() => toggleCategory(category.id)}
            >
              <div>
                <h4 className="font-bold text-primary">{category.label}</h4>
                <p className="text-sm text-gray-500">
                  {skills[category.id].length} selected
                </p>
              </div>
              <div className="flex items-center">
                <span className="mr-2 text-sm text-gray-500">
                  {expandedCategories[category.id] ? 'Collapse' : 'Expand'}
                </span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className={`h-5 w-5 transition-transform duration-300 ${
                    expandedCategories[category.id] ? 'transform rotate-180' : ''
                  }`}
                  viewBox="0 0 20 20" 
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            {/* Skills selection */}
            {expandedCategories[category.id] && (
              <div className="p-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 bg-white">
                {category.options.map(skill => (
                  <div 
                    key={skill.id}
                    className={`
                      border rounded-md p-3 cursor-pointer transition-all duration-200
                      ${isSkillSelected(category.id, skill.id) 
                        ? 'border-primary bg-primary bg-opacity-10' 
                        : 'border-gray-200 hover:border-gray-300'
                      }
                    `}
                    onClick={() => handleSkillToggle(category.id, skill.id)}
                  >
                    <div className="flex items-center">
                      <div className={`
                        w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mr-3
                        ${isSkillSelected(category.id, skill.id) 
                          ? 'border-primary bg-primary' 
                          : 'border-gray-400'
                        }
                      `}>
                        {isSkillSelected(category.id, skill.id) && (
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-white" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        )}
                      </div>
                      <span className={`text-sm ${isSkillSelected(category.id, skill.id) ? 'font-medium' : ''}`}>
                        {skill.label}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
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
            {getTotalSelectedSkills()} skills selected
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

export default SkillsSelectionStep;