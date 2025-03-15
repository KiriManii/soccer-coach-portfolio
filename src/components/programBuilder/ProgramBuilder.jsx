import React, { useState } from 'react';
import PlayerInfoStep from './steps/PlayerInfoStep';
import SkillsSelectionStep from './steps/SkillsSelectionStep';
import GoalsStep from './steps/GoalsStep';
import EquipmentStep from './steps/EquipmentStep';
import ScheduleStep from './steps/ScheduleStep';
import SummaryStep from './steps/SummaryStep';
import StepIndicator from './StepIndicator';

const ProgramBuilder = () => {
  // Steps configuration
  const steps = [
    { id: 'player-info', title: 'Player Information', component: PlayerInfoStep },
    { id: 'skills', title: 'Skills & Focus Areas', component: SkillsSelectionStep },
    { id: 'goals', title: 'Goals & Objectives', component: GoalsStep },
    { id: 'equipment', title: 'Available Equipment', component: EquipmentStep },
    { id: 'schedule', title: 'Time Commitment', component: ScheduleStep },
    { id: 'summary', title: 'Program Summary', component: SummaryStep }
  ];

  // State management
  const [currentStepIndex, setCurrentStepIndex] = useState(0);
  const [formData, setFormData] = useState({
    playerInfo: {
      age: '',
      level: 'beginner',
      position: '',
      experience: ''
    },
    skills: {
      technical: [],
      tactical: [],
      physical: [],
      mental: []
    },
    goals: {
      primary: '',
      timeframe: '3-months',
      additionalGoals: []
    },
    equipment: {
      hasBall: true,
      hasCones: false,
      hasGoal: false,
      hasResistanceBands: false,
      hasAgilityCourse: false,
      otherEquipment: ''
    },
    schedule: {
      sessionsPerWeek: 2,
      sessionLength: 60,
      preferredDays: [],
      timeOfDay: 'afternoon'
    }
  });

  // Step navigation
  const goToNextStep = () => {
    if (currentStepIndex < steps.length - 1) {
      setCurrentStepIndex(currentStepIndex + 1);
      window.scrollTo(0, 0);
    }
  };

  const goToPreviousStep = () => {
    if (currentStepIndex > 0) {
      setCurrentStepIndex(currentStepIndex - 1);
      window.scrollTo(0, 0);
    }
  };

  const goToStep = (index) => {
    if (index >= 0 && index < steps.length) {
      setCurrentStepIndex(index);
      window.scrollTo(0, 0);
    }
  };

  // Update form data
  const updateFormData = (section, data) => {
    setFormData({
      ...formData,
      [section]: {
        ...formData[section],
        ...data
      }
    });
  };

  // Current step
  const CurrentStepComponent = steps[currentStepIndex].component;
  
  return (
    <div className="max-w-4xl mx-auto my-8 bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="bg-primary text-white p-6">
        <h2 className="text-3xl font-bold">Build Your Custom Training Program</h2>
        <p className="mt-2">Personalized soccer training tailored to your specific needs and goals</p>
      </div>
      
      {/* Step indicator */}
      <StepIndicator 
        steps={steps} 
        currentStepIndex={currentStepIndex} 
        goToStep={goToStep} 
      />
      
      {/* Step content with animation */}
      <div className="p-6">
        <div className="transition-opacity duration-300">
          <CurrentStepComponent 
            formData={formData} 
            updateFormData={updateFormData} 
            goToNextStep={goToNextStep} 
            goToPreviousStep={goToPreviousStep}
            isFirstStep={currentStepIndex === 0}
            isLastStep={currentStepIndex === steps.length - 1}
          />
        </div>
      </div>
    </div>
  );
};

export default ProgramBuilder;