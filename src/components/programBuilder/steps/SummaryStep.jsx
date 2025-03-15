import React from 'react';
import { Link } from 'react-router-dom';

const SummaryStep = ({ formData, goToPreviousStep }) => {
  // Helper function to get skill names based on IDs
  const getSkillNames = (categoryId, skillIds) => {
    const skillCategories = {
      technical: [
        { id: 'passing', label: 'Passing & Reception' },
        { id: 'shooting', label: 'Shooting & Finishing' },
        { id: 'dribbling', label: 'Dribbling & Ball Control' },
        { id: 'heading', label: 'Heading' },
        { id: 'first-touch', label: 'First Touch' },
        { id: 'crossing', label: 'Crossing' },
        { id: 'set-pieces', label: 'Set Pieces' }
      ],
      tactical: [
        { id: 'positioning', label: 'Positioning' },
        { id: 'game-awareness', label: 'Game Awareness' },
        { id: 'decision-making', label: 'Decision Making' },
        { id: 'team-play', label: 'Team Play' },
        { id: 'defensive-organization', label: 'Defensive Organization' },
        { id: 'attacking-principles', label: 'Attacking Principles' },
        { id: 'transition-play', label: 'Transition Play' }
      ],
      physical: [
        { id: 'speed', label: 'Speed & Acceleration' },
        { id: 'agility', label: 'Agility & Coordination' },
        { id: 'strength', label: 'Strength & Power' },
        { id: 'endurance', label: 'Endurance' },
        { id: 'balance', label: 'Balance & Stability' },
        { id: 'flexibility', label: 'Flexibility' },
        { id: 'injury-prevention', label: 'Injury Prevention' }
      ],
      mental: [
        { id: 'confidence', label: 'Confidence' },
        { id: 'concentration', label: 'Concentration' },
        { id: 'motivation', label: 'Motivation & Drive' },
        { id: 'pressure-handling', label: 'Handling Pressure' },
        { id: 'resilience', label: 'Resilience' },
        { id: 'discipline', label: 'Discipline' },
        { id: 'leadership', label: 'Leadership' }
      ]
    };
    
    return skillIds.map(id => {
      const skill = skillCategories[categoryId].find(s => s.id === id);
      return skill ? skill.label : id;
    });
  };
  
  // Helper to get position display name
  const getPositionName = (position) => {
    const positions = {
      goalkeeper: 'Goalkeeper',
      defender: 'Defender',
      midfielder: 'Midfielder',
      forward: 'Forward'
    };
    return positions[position] || position;
  };
  
  // Helper to get experience display name
  const getExperienceName = (experience) => {
    const experienceOptions = {
      '0-1': 'Less than 1 year',
      '1-3': '1-3 years',
      '3-5': '3-5 years',
      '5-10': '5-10 years',
      '10+': 'More than 10 years'
    };
    return experienceOptions[experience] || experience;
  };
  
  // Helper to get level display name
  const getLevelName = (level) => {
    const levels = {
      beginner: 'Beginner',
      intermediate: 'Intermediate',
      advanced: 'Advanced',
      elite: 'Elite/Professional'
    };
    return levels[level] || level;
  };
  
  // Helper to get timeframe display name
  const getTimeframeName = (timeframe) => {
    const timeframes = {
      '1-month': '1 Month (Short-term)',
      '3-months': '3 Months',
      '6-months': '6 Months (Medium-term)',
      '12-months': '12 Months (Long-term)'
    };
    return timeframes[timeframe] || timeframe;
  };
  
  // Helper to get time of day display name
  const getTimeOfDayName = (timeOfDay) => {
    const times = {
      morning: 'Morning (Before 12PM)',
      afternoon: 'Afternoon (12PM - 5PM)',
      evening: 'Evening (After 5PM)',
      flexible: 'Flexible / Varies'
    };
    return times[timeOfDay] || timeOfDay;
  };
  
  // Get days display text
  const getDaysText = () => {
    const daysMap = {
      monday: 'Monday',
      tuesday: 'Tuesday',
      wednesday: 'Wednesday',
      thursday: 'Thursday',
      friday: 'Friday',
      saturday: 'Saturday',
      sunday: 'Sunday'
    };
    
    return formData.schedule.preferredDays
      .map(day => daysMap[day])
      .join(', ');
  };
  
  // Get available equipment list
  const getEquipmentList = () => {
    const equipmentMap = {
      hasBall: 'Soccer Ball',
      hasCones: 'Training Cones',
      hasGoal: 'Training Goal',
      hasResistanceBands: 'Resistance Bands',
      hasAgilityCourse: 'Agility Ladder',
      hasRebounder: 'Rebounder',
      hasWeights: 'Weights'
    };
    
    const availableEquipment = Object.entries(formData.equipment)
      .filter(([key, value]) => value === true && equipmentMap[key])
      .map(([key]) => equipmentMap[key]);
    
    if (formData.equipment.otherEquipment) {
      availableEquipment.push(formData.equipment.otherEquipment);
    }
    
    return availableEquipment;
  };
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary mb-6">Your Custom Training Program</h3>
      
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
        <h4 className="font-bold text-lg text-primary mb-4">Program Summary</h4>
        
        {/* Player Information */}
        <div className="mb-6">
          <h5 className="font-medium text-gray-700 mb-2">Player Profile</h5>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm text-gray-500">Age Group</span>
                <span className="font-medium">{formData.playerInfo.age}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Experience Level</span>
                <span className="font-medium">{getLevelName(formData.playerInfo.level)}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Primary Position</span>
                <span className="font-medium">{getPositionName(formData.playerInfo.position)}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Experience</span>
                <span className="font-medium">{getExperienceName(formData.playerInfo.experience)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Goals */}
        <div className="mb-6">
          <h5 className="font-medium text-gray-700 mb-2">Goals & Objectives</h5>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="mb-4">
              <span className="block text-sm text-gray-500">Primary Goal</span>
              <span className="font-medium">{formData.goals.primary}</span>
            </div>
            
            <div className="mb-4">
              <span className="block text-sm text-gray-500">Timeframe</span>
              <span className="font-medium">{getTimeframeName(formData.goals.timeframe)}</span>
            </div>
            
            {formData.goals.additionalGoals.length > 0 && (
              <div>
                <span className="block text-sm text-gray-500 mb-1">Additional Goals</span>
                <ul className="list-disc list-inside space-y-1">
                  {formData.goals.additionalGoals.map((goal, index) => (
                    <li key={index} className="text-sm">{goal}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
        
        {/* Skills Focus */}
        <div className="mb-6">
          <h5 className="font-medium text-gray-700 mb-2">Skills Focus Areas</h5>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {Object.entries(formData.skills).map(([category, skillIds]) => (
              <div key={category} className="bg-white rounded-lg border border-gray-200 p-4">
                <span className="block text-sm font-medium text-primary mb-2">
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </span>
                <ul className="list-disc list-inside space-y-1">
                  {getSkillNames(category, skillIds).map((skill, index) => (
                    <li key={index} className="text-sm">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        {/* Schedule */}
        <div className="mb-6">
          <h5 className="font-medium text-gray-700 mb-2">Training Schedule</h5>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <span className="block text-sm text-gray-500">Sessions Per Week</span>
                <span className="font-medium">{formData.schedule.sessionsPerWeek}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Session Length</span>
                <span className="font-medium">{formData.schedule.sessionLength} minutes</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Preferred Days</span>
                <span className="font-medium">{getDaysText()}</span>
              </div>
              <div>
                <span className="block text-sm text-gray-500">Time of Day</span>
                <span className="font-medium">{getTimeOfDayName(formData.schedule.timeOfDay)}</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Equipment */}
        <div>
          <h5 className="font-medium text-gray-700 mb-2">Available Equipment</h5>
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <ul className="list-disc list-inside space-y-1">
              {getEquipmentList().map((equipment, index) => (
                <li key={index} className="text-sm">{equipment}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-6 w-6 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <div className="ml-3">
            <h4 className="text-md font-medium text-blue-800">What happens next?</h4>
            <p className="text-sm text-blue-700 mt-1">
              Based on your input, we've created a custom training program outline. To get the full program with detailed exercise plans and progression tracking, schedule a consultation with Coach Javier.
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
        
        <div className="space-x-4">
          <Link
            to="/contact"
            className="px-6 py-2 bg-secondary text-primary rounded-lg font-medium hover:bg-opacity-90 transition-colors inline-block"
          >
            Schedule Consultation
          </Link>
          <button
            type="button"
            className="px-6 py-2 bg-primary text-white rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Download Summary
          </button>
        </div>
      </div>
    </div>
  );
};

export default SummaryStep;