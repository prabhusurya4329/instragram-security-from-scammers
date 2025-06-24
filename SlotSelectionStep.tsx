import React from 'react';
import { ParkingFormData, Step } from './types';
import { slotOptions } from './data';

interface SlotSelectionStepProps {
  formData: ParkingFormData;
  updateFormData: (data: Partial<ParkingFormData>) => void;
  goToStep: (step: Step) => void;
}

const SlotSelectionStep: React.FC<SlotSelectionStepProps> = ({ formData, updateFormData, goToStep }) => {
  const handleSlotChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedSlotId = e.target.value;
    const selectedSlot = slotOptions.find(slot => slot.id === selectedSlotId) || slotOptions[0];
    
    updateFormData({ 
      slot: selectedSlot
    });
  };

  const handleNext = () => {
    goToStep(4);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Select Parking Slot</h2>
      
      <div className="mb-8">
        <div className="grid grid-cols-3 gap-4 mb-6">
          {slotOptions.map((slot) => (
            <div 
              key={slot.id}
              onClick={() => updateFormData({ slot })}
              className={`
                p-4 rounded-lg border-2 cursor-pointer transition-all duration-300 transform hover:scale-105
                ${formData.slot.id === slot.id 
                  ? 'border-yellow-400 bg-yellow-400 bg-opacity-20 shadow-lg' 
                  : 'border-gray-500 border-opacity-30 hover:border-gray-300'}
              `}
            >
              <div className="text-center">
                <p className="font-bold text-white">{slot.name}</p>
                <p className="text-yellow-400">₹{slot.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <p className="text-gray-300 text-center">
          Selected: <span className="text-yellow-400 font-medium">{formData.slot.name} - ₹{formData.slot.price}</span>
        </p>
      </div>
      
      <button
        onClick={handleNext}
        className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
      >
        Confirm Slot
      </button>
    </div>
  );
};

export default SlotSelectionStep;