import React, { useState } from 'react';
import { ParkingFormData, Step } from './types';
import { districtCityMap, placeOptions, slotOptions } from './data';
import LoginStep from './LoginStep';
import LocationStep from './LocationStep';
import SlotSelectionStep from './SlotSelectionStep';
import ServicesStep from './ServicesStep';
import ConfirmationStep from './ConfirmationStep';

const SmartParkingApp: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [formData, setFormData] = useState<ParkingFormData>({
    phone: '',
    otp: '',
    district: 'East Godavari',
    city: districtCityMap['East Godavari'][0],
    place: placeOptions[0],
    slot: slotOptions[0],
    services: {
      carWash: false,
      food: false
    }
  });

  const updateFormData = (data: Partial<ParkingFormData>) => {
    setFormData(prev => ({ ...prev, ...data }));
  };

  const goToStep = (step: Step) => {
    setCurrentStep(step);
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-8 text-white">
        Luxury Car Smart Parking
      </h1>
      
      <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl shadow-2xl p-6 transition-all duration-500">
        {currentStep === 1 && (
          <LoginStep 
            formData={formData} 
            updateFormData={updateFormData} 
            goToStep={goToStep} 
          />
        )}
        
        {currentStep === 2 && (
          <LocationStep 
            formData={formData} 
            updateFormData={updateFormData} 
            goToStep={goToStep} 
          />
        )}
        
        {currentStep === 3 && (
          <SlotSelectionStep 
            formData={formData} 
            updateFormData={updateFormData} 
            goToStep={goToStep} 
          />
        )}
        
        {currentStep === 4 && (
          <ServicesStep 
            formData={formData} 
            updateFormData={updateFormData} 
            goToStep={goToStep} 
          />
        )}
        
        {currentStep === 5 && (
          <ConfirmationStep 
            formData={formData} 
            goToStep={goToStep} 
          />
        )}
      </div>
    </div>
  );
};

export default SmartParkingApp;