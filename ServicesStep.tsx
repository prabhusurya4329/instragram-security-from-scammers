import React from 'react';
import { ParkingFormData, Step } from './types';
import { serviceOptions } from './data';

interface ServicesStepProps {
  formData: ParkingFormData;
  updateFormData: (data: Partial<ParkingFormData>) => void;
  goToStep: (step: Step) => void;
}

const ServicesStep: React.FC<ServicesStepProps> = ({ formData, updateFormData, goToStep }) => {
  const handleCarWashChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      services: {
        ...formData.services,
        carWash: e.target.checked
      }
    });
  };

  const handleFoodChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({
      services: {
        ...formData.services,
        food: e.target.checked
      }
    });
  };

  const handleNext = () => {
    goToStep(5);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Choose Additional Services</h2>
      
      <div className="space-y-6 mb-8">
        <div 
          className={`
            p-4 rounded-lg border-2 transition-all duration-300
            ${formData.services.carWash 
              ? 'border-yellow-400 bg-yellow-400 bg-opacity-20' 
              : 'border-gray-500 border-opacity-30'}
          `}
        >
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.services.carWash}
              onChange={handleCarWashChange}
              className="form-checkbox h-5 w-5 text-yellow-500 rounded focus:ring-yellow-500"
            />
            <div>
              <span className="text-white font-medium">{serviceOptions.carWash.name}</span>
              <p className="text-gray-300 text-sm">Premium cleaning service for your luxury car</p>
              <p className="text-yellow-400">₹{serviceOptions.carWash.price}</p>
            </div>
          </label>
        </div>
        
        <div 
          className={`
            p-4 rounded-lg border-2 transition-all duration-300
            ${formData.services.food 
              ? 'border-yellow-400 bg-yellow-400 bg-opacity-20' 
              : 'border-gray-500 border-opacity-30'}
          `}
        >
          <label className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={formData.services.food}
              onChange={handleFoodChange}
              className="form-checkbox h-5 w-5 text-yellow-500 rounded focus:ring-yellow-500"
            />
            <div>
              <span className="text-white font-medium">{serviceOptions.food.name}</span>
              <p className="text-gray-300 text-sm">Enjoy premium food while you wait</p>
              <p className="text-yellow-400">₹{serviceOptions.food.price}</p>
            </div>
          </label>
        </div>
      </div>
      
      <button
        onClick={handleNext}
        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Next
      </button>
    </div>
  );
};

export default ServicesStep;