import React from 'react';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';

const SkillChart = ({ technicalAvg, tacticalAvg, physicalAvg, mentalAvg }) => {
  const data = [
    { subject: 'Technical', A: technicalAvg, fullMark: 100 },
    { subject: 'Tactical', A: tacticalAvg, fullMark: 100 },
    { subject: 'Physical', A: physicalAvg, fullMark: 100 },
    { subject: 'Mental', A: mentalAvg, fullMark: 100 },
  ];

  return (
    <div className="w-full h-80">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Current Skills"
            dataKey="A"
            stroke="#1E3A8A"
            fill="#1E3A8A"
            fillOpacity={0.5}
          />
          <Legend />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SkillChart;