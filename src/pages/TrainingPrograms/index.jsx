import React from 'react';
import ProgramBuilder from '../../components/programBuilder/ProgramBuilder';

const TrainingPrograms = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto mb-12">
        <h1 className="text-4xl font-bold text-primary mb-4">Training Programs</h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Choose from our specialized training programs or build your own customized plan tailored to your specific needs and goals.
        </p>
      </div>
      
      <div className="mb-16">
        <ProgramBuilder />
      </div>
      
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-primary mb-6">Featured Programs</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Program 1 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Youth Development" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Youth Development</h3>
              <p className="text-gray-700 mb-4">
                Comprehensive training for young players (ages 6-15) focused on fundamental skills, teamwork, and fostering a love for the game.
              </p>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>• Technical fundamentals</li>
                <li>• Game understanding</li>
                <li>• Fun-focused activities</li>
                <li>• Physical coordination</li>
              </ul>
              <p className="font-bold text-primary mb-4">€120 / month</p>
              <button className="w-full bg-primary text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Program 2 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1517927033932-b3d18e61fb3a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
              alt="Professional Enhancement" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Elite Performance</h3>
              <p className="text-gray-700 mb-4">
                Advanced training for established players looking to refine specific skills and elevate their game to the next level.
              </p>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>• Position-specific skills</li>
                <li>• Advanced tactics</li>
                <li>• Physical conditioning</li>
                <li>• Mental performance</li>
              </ul>
              <p className="font-bold text-primary mb-4">€200 / month</p>
              <button className="w-full bg-primary text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          
          {/* Program 3 */}
          <div className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
            <img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" 
              alt="Goalkeeper Training" 
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold text-primary mb-2">Goalkeeper Specialist</h3>
              <p className="text-gray-700 mb-4">
                Specialized training for goalkeepers, focusing on positioning, reflexes, distribution, and commanding the defense.
              </p>
              <ul className="text-gray-700 mb-4 space-y-1">
                <li>• Shot-stopping techniques</li>
                <li>• Positioning & angles</li>
                <li>• Distribution skills</li>
                <li>• Command & communication</li>
              </ul>
              <p className="font-bold text-primary mb-4">€180 / month</p>
              <button className="w-full bg-primary text-white font-medium py-2 rounded-lg hover:bg-opacity-90 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainingPrograms;