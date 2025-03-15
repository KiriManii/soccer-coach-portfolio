import React from 'react';
import TacticalBoard from '../../components/tacticalBoard/TacticalBoard';

const TacticalBoardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-2">Tactical Board</h1>
        <p className="text-lg text-gray-700 mb-8">
          Use this interactive tool to create and visualize soccer formations and plays.
        </p>
        
        <TacticalBoard />
      </div>
    </div>
  );
};

export default TacticalBoardPage;