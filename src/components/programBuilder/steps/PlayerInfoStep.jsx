import React from 'react';

const PlayerInfoStep = ({ formData, updateFormData, goToNextStep, isFirstStep }) => {
  const { playerInfo } = formData;
  
  // Update player info data
  const handleChange = (e) => {
    const { name, value } = e.target;
    updateFormData('playerInfo', { [name]: value });
  };
  
  // Form validation
  const isValid = playerInfo.age && playerInfo.level && playerInfo.position && playerInfo.experience;
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isValid) {
      goToNextStep();
    }
  };
  
  return (
    <div>
      <h3 className="text-2xl font-bold text-primary mb-6">Player Information</h3>
      
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Age group */}
          <div>
            <label htmlFor="age" className="block text-sm font-medium text-gray-700 mb-1">
              Age Group
            </label>
            <select
              id="age"
              name="age"
              value={playerInfo.age}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            >
              <option value="" disabled>Select age group</option>
              <option value="6-8">6-8 years</option>
              <option value="9-12">9-12 years</option>
              <option value="13-15">13-15 years</option>
              <option value="16-18">16-18 years</option>
              <option value="19-23">19-23 years</option>
              <option value="24+">24+ years</option>
            </select>
          </div>
          
          {/* Experience level */}
          <div>
            <label htmlFor="level" className="block text-sm font-medium text-gray-700 mb-1">
              Experience Level
            </label>
            <select
              id="level"
              name="level"
              value={playerInfo.level}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            >
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
              <option value="advanced">Advanced</option>
              <option value="elite">Elite/Professional</option>
            </select>
          </div>
          
          {/* Position */}
          <div>
            <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">
              Primary Position
            </label>
            <select
              id="position"
              name="position"
              value={playerInfo.position}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            >
              <option value="" disabled>Select position</option>
              <option value="goalkeeper">Goalkeeper</option>
              <option value="defender">Defender</option>
              <option value="midfielder">Midfielder</option>
              <option value="forward">Forward</option>
            </select>
          </div>
          
          {/* Years of experience */}
          <div>
            <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
              Years of Experience
            </label>
            <select
              id="experience"
              name="experience"
              value={playerInfo.experience}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              required
            >
              <option value="" disabled>Select experience</option>
              <option value="0-1">Less than 1 year</option>
              <option value="1-3">1-3 years</option>
              <option value="3-5">3-5 years</option>
              <option value="5-10">5-10 years</option>
              <option value="10+">More than 10 years</option>
            </select>
          </div>
        </div>
        
        <div className="flex justify-end space-x-4">
          <button
            type="submit"
            className={`px-6 py-2 rounded-lg text-white font-medium transition-colors ${
              isValid 
                ? 'bg-primary hover:bg-primary-dark' 
                : 'bg-gray-400 cursor-not-allowed'
            }`}
            disabled={!isValid}
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default PlayerInfoStep;