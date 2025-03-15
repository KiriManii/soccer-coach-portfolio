import React, { useState } from 'react';
import SkillChart from './SkillChart';
import ProgressTracker from './ProgressTracker';
import GoalSetting from './GoalSetting';
import PerfomanceHistory from './PerformanceHistory';

const SkillDashboard = () => {
  // Sample user data - in a real app, this would come from a database
  const [userData, setUserData] = useState({
    name: "Miguel Rodriguez",
    position: "Midfielder",
    age: 16,
    level: "Advanced",
    joinDate: "2023-12-15",
    // Skill ratings from 0-100
    skills: {
      technical: {
        passing: 72,
        shooting: 65,
        dribbling: 80,
        heading: 50,
        firstTouch: 75,
        crossing: 68,
        setPieces: 60
      },
      tactical: {
        positioning: 70,
        gameAwareness: 75,
        decisionMaking: 65,
        teamPlay: 80,
        defensiveOrganization: 60,
        attackingPrinciples: 72,
        transitionPlay: 68
      },
      physical: {
        speed: 82,
        agility: 78,
        strength: 65,
        endurance: 70,
        balance: 75,
        flexibility: 60,
        injuryPrevention: 55
      },
      mental: {
        confidence: 70,
        concentration: 65,
        motivation: 85,
        pressureHandling: 60,
        resilience: 75,
        discipline: 80,
        leadership: 65
      }
    },
    // Performance history over time
    history: [
      { date: '2023-12-20', overallRating: 65 },
      { date: '2024-01-05', overallRating: 67 },
      { date: '2024-01-20', overallRating: 68 },
      { date: '2024-02-05', overallRating: 71 },
      { date: '2024-02-20', overallRating: 72 },
      { date: '2024-03-05', overallRating: 74 },
      { date: '2024-03-20', overallRating: 75 }
    ],
    // Goals that the player has set
    goals: [
      { id: 1, skill: 'passing', target: 80, deadline: '2024-04-30', completed: false },
      { id: 2, skill: 'gameAwareness', target: 85, deadline: '2024-05-15', completed: false },
      { id: 3, skill: 'speed', target: 85, deadline: '2024-03-01', completed: true }
    ],
    // Upcoming training sessions
    trainingSessions: [
      { id: 1, date: '2024-03-18', focus: 'Passing & Movement', duration: 90 },
      { id: 2, date: '2024-03-20', focus: 'Game Situations', duration: 120 },
      { id: 3, date: '2024-03-23', focus: 'Technical Drills', duration: 90 }
    ]
  });

  // Function to update a skill rating
  const updateSkillRating = (category, skill, newValue) => {
    setUserData(prevData => ({
      ...prevData,
      skills: {
        ...prevData.skills,
        [category]: {
          ...prevData.skills[category],
          [skill]: newValue
        }
      }
    }));
  };

  // Function to add a new goal
  const addGoal = (newGoal) => {
    setUserData(prevData => ({
      ...prevData,
      goals: [...prevData.goals, { 
        id: prevData.goals.length + 1, 
        ...newGoal,
        completed: false 
      }]
    }));
  };

  // Function to toggle goal completion
  const toggleGoalCompletion = (goalId) => {
    setUserData(prevData => ({
      ...prevData,
      goals: prevData.goals.map(goal => 
        goal.id === goalId 
          ? { ...goal, completed: !goal.completed } 
          : goal
      )
    }));
  };

  // Calculate overall skill rating
  const calculateOverallRating = () => {
    let total = 0;
    let count = 0;
    
    Object.values(userData.skills).forEach(category => {
      Object.values(category).forEach(rating => {
        total += rating;
        count++;
      });
    });
    
    return Math.round(total / count);
  };

  // Determine primary strengths and weaknesses
  const getStrengthsAndWeaknesses = () => {
    let allSkills = [];
    
    Object.entries(userData.skills).forEach(([category, skills]) => {
      Object.entries(skills).forEach(([skill, rating]) => {
        allSkills.push({ category, skill, rating });
      });
    });
    
    const sortedSkills = [...allSkills].sort((a, b) => b.rating - a.rating);
    
    return {
      strengths: sortedSkills.slice(0, 3),
      weaknesses: sortedSkills.slice(-3).reverse()
    };
  };

  const { strengths, weaknesses } = getStrengthsAndWeaknesses();
  const overallRating = calculateOverallRating();

  // Current active tab state
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Dashboard Header with Player Info */}
      <div className="bg-primary text-white p-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div>
            <h2 className="text-2xl font-bold">{userData.name}'s Skill Dashboard</h2>
            <p className="text-blue-100 mt-1">
              {userData.position} | Age: {userData.age} | Level: {userData.level}
            </p>
          </div>
          <div className="mt-4 md:mt-0 bg-white bg-opacity-20 rounded-lg p-3 flex items-center">
            <div className="text-4xl font-bold mr-2">{overallRating}</div>
            <div className="text-sm">
              <div>Overall Rating</div>
              <div className="text-blue-100">
                {overallRating >= 75 ? 'Elite' : 
                 overallRating >= 65 ? 'Advanced' : 
                 overallRating >= 50 ? 'Intermediate' : 'Developing'}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation Tabs */}
      <div className="bg-gray-100 px-6 border-b border-gray-200">
        <nav className="flex overflow-x-auto">
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              activeTab === 'overview' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('overview')}
          >
            Overview
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              activeTab === 'technical' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('technical')}
          >
            Technical Skills
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              activeTab === 'tactical' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('tactical')}
          >
            Tactical Skills
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              activeTab === 'physical' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('physical')}
          >
            Physical Conditioning
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              activeTab === 'mental' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('mental')}
          >
            Mental Aspects
          </button>
          <button
            className={`px-4 py-3 text-sm font-medium border-b-2 whitespace-nowrap ${
              activeTab === 'goals' 
                ? 'border-primary text-primary' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('goals')}
          >
            Goals & Progress
          </button>
        </nav>
      </div>
      
      {/* Dashboard Content */}
      <div className="p-6">
        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Radar Chart for Skills Overview */}
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-gray-700">Skills Overview</h3>
                <SkillChart 
                  technicalAvg={Object.values(userData.skills.technical).reduce((sum, val) => sum + val, 0) / Object.values(userData.skills.technical).length}
                  tacticalAvg={Object.values(userData.skills.tactical).reduce((sum, val) => sum + val, 0) / Object.values(userData.skills.tactical).length}
                  physicalAvg={Object.values(userData.skills.physical).reduce((sum, val) => sum + val, 0) / Object.values(userData.skills.physical).length}
                  mentalAvg={Object.values(userData.skills.mental).reduce((sum, val) => sum + val, 0) / Object.values(userData.skills.mental).length}
                />
              </div>
              
              {/* Strengths and Weaknesses */}
              <div>
                <div className="bg-green-50 p-4 rounded-lg mb-4">
                  <h3 className="text-lg font-medium mb-2 text-green-700">Top Strengths</h3>
                  <ul className="space-y-2">
                    {strengths.map(({ category, skill, rating }) => (
                      <li key={`strength-${category}-${skill}`} className="flex justify-between">
                        <span className="font-medium capitalize">
                          {skill.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div className="flex items-center">
                          <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden mr-2">
                            <div 
                              className="h-full bg-green-500" 
                              style={{ width: `${rating}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{rating}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg">
                  <h3 className="text-lg font-medium mb-2 text-red-700">Areas for Improvement</h3>
                  <ul className="space-y-2">
                    {weaknesses.map(({ category, skill, rating }) => (
                      <li key={`weakness-${category}-${skill}`} className="flex justify-between">
                        <span className="font-medium capitalize">
                          {skill.replace(/([A-Z])/g, ' $1').trim()}
                        </span>
                        <div className="flex items-center">
                          <div className="w-16 h-3 bg-gray-200 rounded-full overflow-hidden mr-2">
                            <div 
                              className="h-full bg-red-500" 
                              style={{ width: `${rating}%` }}
                            ></div>
                          </div>
                          <span className="text-sm font-medium">{rating}</span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            
            {/* Performance History */}
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium mb-4 text-gray-700">Performance History</h3>
              <PerfomanceHistory history={userData.history} />
            </div>
            
            {/* Upcoming Sessions and Goals */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-blue-700">Upcoming Training Sessions</h3>
                {userData.trainingSessions.length > 0 ? (
                  <ul className="space-y-3">
                    {userData.trainingSessions.map(session => {
                      const sessionDate = new Date(session.date);
                      const formattedDate = sessionDate.toLocaleDateString('en-US', {
                        weekday: 'short',
                        month: 'short', 
                        day: 'numeric'
                      });
                      
                      return (
                        <li key={session.id} className="flex justify-between p-3 bg-white rounded-lg shadow-sm">
                          <div>
                            <div className="font-medium">{session.focus}</div>
                            <div className="text-sm text-gray-500">{formattedDate}</div>
                          </div>
                          <div className="text-right">
                            <div className="font-medium">{session.duration} min</div>
                            <div className="text-xs text-gray-500">with Coach Javier</div>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                ) : (
                  <p className="text-gray-500">No upcoming sessions scheduled.</p>
                )}
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <h3 className="text-lg font-medium mb-4 text-purple-700">Current Goals</h3>
                {userData.goals.filter(goal => !goal.completed).length > 0 ? (
                  <ul className="space-y-3">
                    {userData.goals
                      .filter(goal => !goal.completed)
                      .map(goal => {
                        const deadline = new Date(goal.deadline);
                        const formattedDeadline = deadline.toLocaleDateString('en-US', {
                          month: 'short', 
                          day: 'numeric'
                        });
                        const daysLeft = Math.ceil((deadline - new Date()) / (1000 * 60 * 60 * 24));
                        
                        // Find the current rating for this skill
                        let currentRating = 0;
                        Object.values(userData.skills).forEach(category => {
                          Object.entries(category).forEach(([skill, rating]) => {
                            if (skill === goal.skill) {
                              currentRating = rating;
                            }
                          });
                        });
                        
                        const progress = (currentRating / goal.target) * 100;
                        
                        return (
                          <li key={goal.id} className="p-3 bg-white rounded-lg shadow-sm">
                            <div className="flex justify-between mb-1">
                              <div className="font-medium capitalize">
                                {goal.skill.replace(/([A-Z])/g, ' $1').trim()} Goal
                              </div>
                              <div className="text-sm text-gray-500">
                                {daysLeft > 0 ? `${daysLeft} days left` : 'Deadline passed'}
                              </div>
                            </div>
                            <div className="flex items-center mb-1">
                              <span className="text-sm text-gray-500 mr-2">Target: {goal.target}</span>
                              <span className="text-sm text-gray-500">Current: {currentRating}</span>
                            </div>
                            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${progress >= 100 ? 'bg-green-500' : 'bg-purple-500'}`}
                                style={{ width: `${Math.min(progress, 100)}%` }}
                              ></div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                ) : (
                  <p className="text-gray-500">No active goals. Set some goals to track your progress!</p>
                )}
                
                <button 
                  className="mt-4 w-full py-2 bg-white border border-purple-500 text-purple-700 rounded-lg font-medium hover:bg-purple-50 transition-colors"
                  onClick={() => setActiveTab('goals')}
                >
                  Manage Goals
                </button>
              </div>
            </div>
          </div>
        )}
        
        {/* Skill Category Tabs */}
        {['technical', 'tactical', 'physical', 'mental'].includes(activeTab) && (
          <div>
            <h3 className="text-xl font-bold mb-6 capitalize">
              {activeTab === 'technical' ? 'Technical Skills' : 
               activeTab === 'tactical' ? 'Tactical Skills' :
               activeTab === 'physical' ? 'Physical Conditioning' : 'Mental Aspects'}
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(userData.skills[activeTab]).map(([skill, rating]) => (
                <ProgressTracker
                  key={skill}
                  skill={skill}
                  rating={rating}
                  onUpdate={(newValue) => updateSkillRating(activeTab, skill, newValue)}
                />
              ))}
            </div>
          </div>
        )}
        
        {/* Goals Tab */}
        {activeTab === 'goals' && (
          <GoalSetting 
            userData={userData}
            addGoal={addGoal}
            toggleGoalCompletion={toggleGoalCompletion}
          />
        )}
      </div>
    </div>
  );
};

export default SkillDashboard;