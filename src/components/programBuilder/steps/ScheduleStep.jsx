import React from 'react';

const ScheduleStep = ({ formData, updateFormData, goToNextStep, goToPreviousStep }) => {
  const { schedule } = formData;
  
  // Days of the week options
  const daysOfWeek = [
    { id: 'monday', label: 'Monday' },
    { id: 'tuesday', label: 'Tuesday' },
    { id: 'wednesday', label: 'Wednesday' },
    { id: 'thursday', label: 'Thursday' },
    { id: 'friday', label: 'Friday' },
    { id: 'saturday', label: 'Saturday' },
    { id: 'sunday', label: 'Sunday' }
  ];
  
  // Time of day options
  const timeOfDayOptions = [
    { value: 'morning', label: 'Morning (Before 12PM)' },
    { value: 'afternoon', label: 'Afternoon (12PM - 5PM)' },
    { value: 'evening', label: 'Evening (After 5PM)' },
    { value: 'flexible', label: 'Flexible / Varies' }
  ];
  
  // Handle sessions per week change
  const handleSessionsChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateFormData('schedule', { sessionsPerWeek: value });
  };
  
  // Handle session length change
  const handleSessionLengthChange = (e) => {
    const value = parseInt(e.target.value, 10);
    updateFormData('schedule', { sessionLength: value });
  };
  
  // Handle time of day change
  const handleTimeOfDayChange = (e) => {
    updateFormData('schedule', { timeOfDay: e.target.value });
  };
  
// Toggle preferred day
const toggleDay = (dayId) => {
    const currentDays = [...schedule.preferredDays];
    
    if (currentDays.includes(dayId)) {
      // Only allow deselection if there will still be enough days for the number of sessions
      if (currentDays.length > schedule.sessionsPerWeek) {
        updateFormData('schedule', {
          preferredDays: currentDays.filter(id => id !== dayId)
        });
      }
    } else {
      updateFormData('schedule', {
        preferredDays: [...currentDays, dayId]
      });
    }
  };

  // Calculate recommended session length based on age
  const getRecommendedSessionLength = () => {
    const age = formData.playerInfo.age;
    
    if (age === '6-8') return '45-60 minutes';
    if (age === '9-12') return '60-75 minutes';
    if (age === '13-15') return '75-90 minutes';
    if (age === '16-18') return '90-120 minutes';
    return '60-90 minutes';
  };
  
  // Form validation - need at least as many days as sessions per week
  const isValid = schedule.preferredDays.length >= schedule.sessionsPerWeek;
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary mb-2">Time Commitment</h3>
      <p className="text-gray-600 mb-6">
        Plan your training schedule to ensure consistency and progress.
      </p>
      
      <div className="space-y-8 mb-8">
        {/* Sessions per week */}
        <div>
          <label htmlFor="sessions-per-week" className="block text-sm font-medium text-gray-700 mb-1">
            How many training sessions can you commit to each week?
          </label>
          <div className="flex items-center">
            <button
              type="button"
              onClick={() => {
                if (schedule.sessionsPerWeek > 1) {
                  handleSessionsChange({ target: { value: schedule.sessionsPerWeek - 1 } });
                }
              }}
              className="px-3 py-2 border border-gray-300 rounded-l-md bg-gray-50 text-gray-500 hover:bg-gray-100"
              disabled={schedule.sessionsPerWeek <= 1}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
              </svg>
            </button>
            
            <div className="w-16 text-center border-t border-b border-gray-300 py-2 text-lg font-medium">
              {schedule.sessionsPerWeek}
            </div>
            
            <button
              type="button"
              onClick={() => {
                if (schedule.sessionsPerWeek < 7) {
                  handleSessionsChange({ target: { value: schedule.sessionsPerWeek + 1 } });
                }
              }}
              className="px-3 py-2 border border-gray-300 rounded-r-md bg-gray-50 text-gray-500 hover:bg-gray-100"
              disabled={schedule.sessionsPerWeek >= 7}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            We recommend at least 2-3 sessions per week for consistent improvement.
          </p>
        </div>
        
        {/* Preferred days */}
        <div>
          <span className="block text-sm font-medium text-gray-700 mb-2">
            Which days of the week work best for you?
          </span>
          <div className="grid grid-cols-7 gap-2">
            {daysOfWeek.map(day => (
              <div key={day.id} className="flex flex-col items-center">
                <button
                  type="button"
                  onClick={() => toggleDay(day.id)}
                  className={`
                    w-full rounded-md py-2 text-sm font-medium transition-colors
                    ${schedule.preferredDays.includes(day.id)
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }
                  `}
                  disabled={
                    !schedule.preferredDays.includes(day.id) && 
                    schedule.preferredDays.length >= 7
                  }
                >
                  {day.label.substring(0, 3)}
                </button>
              </div>
            ))}
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Select at least {schedule.sessionsPerWeek} day{schedule.sessionsPerWeek > 1 ? 's' : ''} for your weekly sessions.
          </p>
        </div>
        
        {/* Session length */}
        <div>
          <label htmlFor="session-length" className="block text-sm font-medium text-gray-700 mb-1">
            How long can each training session be? (minutes)
          </label>
          <div className="relative mt-1 rounded-md shadow-sm">
            <input
              type="range"
              id="session-length"
              min="30"
              max="120"
              step="15"
              value={schedule.sessionLength}
              onChange={handleSessionLengthChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 px-1 mt-1">
              <span>30</span>
              <span>45</span>
              <span>60</span>
              <span>75</span>
              <span>90</span>
              <span>105</span>
              <span>120</span>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-medium text-primary">{schedule.sessionLength} minutes</span>
            </div>
          </div>
          <p className="mt-1 text-sm text-gray-500">
            Recommended for your age group: {getRecommendedSessionLength()}
          </p>
        </div>
        
        {/* Time of day */}
        <div>
          <label htmlFor="time-of-day" className="block text-sm font-medium text-gray-700 mb-1">
            What time of day do you prefer to train?
          </label>
          <select
            id="time-of-day"
            value={schedule.timeOfDay}
            onChange={handleTimeOfDayChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          >
            {timeOfDayOptions.map(option => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
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

export default ScheduleStep;