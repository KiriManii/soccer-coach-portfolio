import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const PerformanceHistory = ({ history }) => {
  // Format date for display
  const formattedData = history.map(entry => ({
    ...entry,
    formattedDate: new Date(entry.date).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric'
    })
  }));

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={formattedData}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="formattedDate" />
          <YAxis domain={[40, 100]} />
          <Tooltip />
          <Legend />
          <Line 
            type="monotone" 
            dataKey="overallRating" 
            name="Overall Rating" 
            stroke="#1E3A8A" 
            activeDot={{ r: 8 }} 
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PerformanceHistory;