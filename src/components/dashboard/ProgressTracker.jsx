import React, { useState } from 'react';

const ProgressTracker = ({ skill, rating, onUpdate }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempRating, setTempRating] = useState(rating);
  
  // Format skill name by capitalizing and adding spaces before capitals
  const formatSkillName = (name) => {
    return name
      .replace(/([A-Z])/g, ' $1') // Add space before capitals
      .replace(/^./, str => str.toUpperCase()); // Capitalize first letter
  };
  
  const handleChange = (e) => {
    const value = parseInt(e.target.value, 10);
    setTempRating(value);
  };
  
  const handleSubmit = () => {
    onUpdate(tempRating);
    setIsEditing(false);
  };
  
  const getColorClass = () => {
    if (rating >= 80) return 'bg-green-500';
    if (rating >= 65) return 'bg-blue-500';
    if (rating >= 50) return 'bg-yellow-500';
    return 'bg-red-500';
  };
  
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium text-gray-800">{formatSkillName(skill)}</h4>
        <div className="flex items-center">
          <span className={`inline-block w-8 h-8 rounded-full text-white flex items-center justify-center font-bold ${getColorClass()}`}>
            {rating}
          </span>
          <button
            className="ml-2 text-gray-500 hover:text-primary"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            )}
          </button>
        </div>
      </div>
      
      {isEditing ? (
        <div className="mt-4">
          <input
            type="range"
            min="0"
            max="100"
            value={tempRating}
            onChange={handleChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
          />
          <div className="flex justify-between text-xs text-gray-500 px-1 mt-1">
            <span>0</span>
            <span>25</span>
            <span>50</span>
            <span>75</span>
            <span>100</span>
          </div>
          <div className="mt-3 flex justify-end">
            <button
              className="px-3 py-1 bg-gray-200 rounded-md text-gray-700 text-sm mr-2 hover:bg-gray-300"
              onClick={() => {
                setTempRating(rating);
                setIsEditing(false);
              }}
            >
              Cancel
            </button>
            <button
              className="px-3 py-1 bg-primary rounded-md text-white text-sm hover:bg-opacity-90"
              onClick={handleSubmit}
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-2">
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div 
              className={`h-full ${getColorClass()}`}
              style={{ width: `${rating}%` }}
            ></div>
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-xs text-gray-500">Beginner</span>
            <span className="text-xs text-gray-500">Expert</span>
          </div>
        </div>
      )}
      
      {/* Skill Development Tips */}
      <div className="mt-4 pt-4 border-t border-gray-100">
        <h5 className="text-sm font-medium text-gray-700 mb-1">Development Tips:</h5>
        <p className="text-xs text-gray-600">
          {rating < 50 ? (
            "Focus on mastering the fundamentals of this skill through regular practice drills."
          ) : rating < 70 ? (
            "Work on consistency and applying this skill in varied game situations."
          ) : rating < 85 ? (
            "Refine advanced techniques and develop adaptability in high-pressure scenarios."
          ) : (
            "Maintain excellence while mentoring others; focus on innovative applications."
          )}
        </p>
      </div>
    </div>
  );
};

export default ProgressTracker;