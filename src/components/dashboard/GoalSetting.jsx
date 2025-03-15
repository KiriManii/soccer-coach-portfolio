import React, { useState } from 'react';

const GoalSetting = ({ userData, addGoal, toggleGoalCompletion }) => {
  // State for the new goal form
  const [newGoal, setNewGoal] = useState({
    skill: '',
    target: 80,
    deadline: ''
  });
  
  // Prepare a flat list of all skills
  const allSkills = [];
  
  Object.entries(userData.skills).forEach(([category, skills]) => {
    Object.entries(skills).forEach(([skillName, rating]) => {
      allSkills.push({
        id: skillName,
        name: skillName.replace(/([A-Z])/g, ' $1').trim(),
        category,
        currentRating: rating
      });
    });
  });
  
  // Sort skills alphabetically
  allSkills.sort((a, b) => a.name.localeCompare(b.name));
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewGoal({
      ...newGoal,
      [name]: value
    });
  };
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (newGoal.skill && newGoal.deadline) {
      addGoal(newGoal);
      
      // Reset form
      setNewGoal({
        skill: '',
        target: 80,
        deadline: ''
      });
    }
  };
  
  // Get skill color based on rating
  const getSkillColor = (rating) => {
    if (rating >= 80) return 'bg-green-500';
    if (rating >= 65) return 'bg-blue-500';
    if (rating >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  // Calculate days remaining for a goal
  const getDaysRemaining = (deadline) => {
    const deadlineDate = new Date(deadline);
    const today = new Date();
    const timeDiff = deadlineDate - today;
    return Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
  };
  
  // Format date for display
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };
  
  return (
    <div className="space-y-8">
      {/* Active Goals Section */}
      <div>
        <h3 className="text-xl font-bold mb-4">Active Goals</h3>
        
        {userData.goals.filter(goal => !goal.completed).length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {userData.goals
              .filter(goal => !goal.completed)
              .map(goal => {
                // Find the current rating for this skill
                const skillInfo = allSkills.find(skill => skill.id === goal.skill);
                const currentRating = skillInfo ? skillInfo.currentRating : 0;
                const progress = (currentRating / goal.target) * 100;
                const daysLeft = getDaysRemaining(goal.deadline);
                
                return (
                  <div key={goal.id} className="bg-white p-4 rounded-lg shadow border border-gray-100">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-medium text-gray-800">
                          {skillInfo ? skillInfo.name : goal.skill}
                        </h4>
                        <p className="text-sm text-gray-500">
                          Target: {goal.target} by {formatDate(goal.deadline)}
                        </p>
                      </div>
                      <div className="flex items-center">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          daysLeft < 0 
                            ? 'bg-red-100 text-red-800' 
                            : daysLeft < 7 
                            ? 'bg-yellow-100 text-yellow-800' 
                            : 'bg-green-100 text-green-800'
                        }`}>
                          {daysLeft < 0 
                            ? 'Overdue' 
                            : daysLeft === 0 
                            ? 'Due today' 
                            : `${daysLeft} days left`}
                        </span>
                        
                        <button 
                          className="ml-2 text-gray-500 hover:text-green-600"
                          onClick={() => toggleGoalCompletion(goal.id)}
                          title="Mark as complete"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    <div className="mt-2">
                      <div className="flex justify-between mb-1">
                        <span className="text-sm text-gray-600">Current: {currentRating}</span>
                        <span className="text-sm text-gray-600">{Math.round(progress)}%</span>
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${
                            progress >= 100 
                              ? 'bg-green-500' 
                              : progress >= 75 
                              ? 'bg-blue-500' 
                              : progress >= 50 
                              ? 'bg-yellow-500' 
                              : 'bg-red-500'
                          }`}
                          style={{ width: `${Math.min(progress, 100)}%` }}
                        ></div>
                      </div>
                    </div>
                    
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <h5 className="text-sm font-medium text-gray-700 mb-1">Coach's Recommendation:</h5>
                      <p className="text-xs text-gray-600">
                        {progress < 50 ? (
                          `Focus more intensely on ${skillInfo?.name || goal.skill} drills during your next sessions to make progress toward your goal.`
                        ) : progress < 75 ? (
                          `You're making good progress on ${skillInfo?.name || goal.skill}. Continue with regular practice and you'll reach your target.`
                        ) : progress < 100 ? (
                          `You're close to achieving your ${skillInfo?.name || goal.skill} goal! A few more focused sessions should get you there.`
                        ) : (
                          `Congratulations! You've reached your ${skillInfo?.name || goal.skill} target. Consider marking this goal as complete and setting a new challenge.`
                        )}
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        ) : (
          <div className="bg-gray-50 rounded-lg p-6 text-center">
            <p className="text-gray-500 mb-4">You don't have any active goals set.</p>
            <p className="text-sm text-gray-500">Setting specific, measurable goals is key to improving your performance.</p>
          </div>
        )}
      </div>
      
      {/* Completed Goals Section */}
      {userData.goals.filter(goal => goal.completed).length > 0 && (
        <div>
          <h3 className="text-xl font-bold mb-4">Completed Goals</h3>
          
          <div className="bg-gray-50 rounded-lg overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-100">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Skill
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Target
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {userData.goals
                  .filter(goal => goal.completed)
                  .map(goal => {
                    const skillInfo = allSkills.find(skill => skill.id === goal.skill);
                    
                    return (
                      <tr key={goal.id}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="font-medium text-gray-900">
                            {skillInfo ? skillInfo.name : goal.skill}
                          </div>
                          <div className="text-sm text-gray-500">
                            {skillInfo ? skillInfo.category : ''}
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{goal.target}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{formatDate(goal.deadline)}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <button 
                            className="text-yellow-600 hover:text-yellow-900"
                            onClick={() => toggleGoalCompletion(goal.id)}
                            title="Mark as incomplete"
                          >
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      )}
      
      {/* Set New Goal Section */}
      <div className="bg-blue-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4">Set a New Goal</h3>
        
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="skill" className="block text-sm font-medium text-gray-700 mb-1">
                Skill to Improve
              </label>
              <select
                id="skill"
                name="skill"
                value={newGoal.skill}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              >
                <option value="">Select a skill</option>
                {allSkills.map(skill => (
                  <option key={skill.id} value={skill.id}>
                    {skill.name} (Current: {skill.currentRating})
                  </option>
                ))}
              </select>
            </div>
            
            <div>
              <label htmlFor="deadline" className="block text-sm font-medium text-gray-700 mb-1">
                Target Date
              </label>
              <input
                type="date"
                id="deadline"
                name="deadline"
                value={newGoal.deadline}
                onChange={handleInputChange}
                min={new Date().toISOString().split('T')[0]} // Set min date to today
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
                required
              />
            </div>
          </div>
          
          <div className="mb-4">
            <label htmlFor="target" className="block text-sm font-medium text-gray-700 mb-1">
              Target Rating: {newGoal.target}
            </label>
            <input
              type="range"
              id="target"
              name="target"
              min="50"
              max="100"
              value={newGoal.target}
              onChange={handleInputChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 px-1 mt-1">
              <span>50</span>
              <span>60</span>
              <span>70</span>
              <span>80</span>
              <span>90</span>
              <span>100</span>
            </div>
          </div>
          
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-primary text-white rounded-md font-medium hover:bg-opacity-90 transition-colors"
              disabled={!newGoal.skill || !newGoal.deadline}
            >
              Add Goal
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GoalSetting;