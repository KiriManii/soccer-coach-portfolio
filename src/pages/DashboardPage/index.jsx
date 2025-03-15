import React from 'react';
import SkillDashboard from '../../components/dashboard/SkillDashboard';

const DashboardPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-4">Skill Assessment Dashboard</h1>
        <p className="text-lg text-gray-700 mb-8 max-w-3xl">
          Track your progress, set goals, and monitor your development across various skill categories.
          This dashboard is updated regularly based on your training sessions and coach assessments.
        </p>
        
        <SkillDashboard />
      </div>
    </div>
  );
};

export default DashboardPage;