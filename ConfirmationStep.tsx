import React, { useEffect, useState } from 'react';
import { ParkingFormData, Step } from './types';
import { serviceOptions } from './data';

interface ConfirmationStepProps {
  formData: ParkingFormData;
  goToStep: (step: Step) => void;
}

const ConfirmationStep: React.FC<ConfirmationStepProps> = ({ formData, goToStep }) => {
  const [showCheckmark, setShowCheckmark] = useState(false);
  
  useEffect(() => {
    // Show checkmark animation after a short delay
    const timer = setTimeout(() => {
      setShowCheckmark(true);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);
  
  const calculateTotal = () => {
    let total = formData.slot.price;
    
    if (formData.services.carWash) {
      total += serviceOptions.carWash.price;
    }
    
    if (formData.services.food) {
      total += serviceOptions.food.price;
    }
    
    return total;
  };
  
  return (
    <div className="space-y-6 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-white mb-4 text-center">Booking Confirmed! 🎉</h2>
      
      <div className={`flex justify-center ${showCheckmark ? 'animate-bounce' : 'opacity-0'}`}>
        <div className="text-6xl text-green-400">✅</div>
      </div>
      
      <p className="text-center text-gray-300">Thank you for choosing us. Here's your summary:</p>
      
      <div className="bg-white bg-opacity-10 rounded-lg p-5 space-y-3 backdrop-blur-sm">
        <div className="flex justify-between">
          <span className="text-gray-300">Phone:</span>
          <span className="text-white font-medium">{formData.phone}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">District:</span>
          <span className="text-white font-medium">{formData.district}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">City:</span>
          <span className="text-white font-medium">{formData.city}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Place:</span>
          <span className="text-white font-medium">{formData.place.name}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Slot:</span>
          <span className="text-white font-medium">{formData.slot.name} - ₹{formData.slot.price}</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Car Wash:</span>
          <span className="text-white font-medium">
            {formData.services.carWash 
              ? `Yes (₹${serviceOptions.carWash.price})` 
              : 'No'}
          </span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-gray-300">Canteen Service:</span>
          <span className="text-white font-medium">
            {formData.services.food 
              ? `Yes (₹${serviceOptions.food.price})` 
              : 'No'}
          </span>
        </div>
        
        <div className="border-t border-gray-600 pt-3 mt-3">
          <div className="flex justify-between font-bold">
            <span className="text-gray-200">Total Amount:</span>
            <span className="text-yellow-400">₹{calculateTotal()}</span>
          </div>
        </div>
        
        <div className="border-t border-gray-600 pt-3 mt-3">
          <div className="flex justify-between">
            <span className="text-gray-300">Customer Care:</span>
            <a href="tel:+18001234567" className="text-teal-400 hover:text-teal-300 transition-colors">
              1-800-123-4567
            </a>
          </div>
        </div>
      </div>
      
      <button
        onClick={() => goToStep(1)}
        className="w-full py-3 px-4 bg-gradient-to-r from-slate-800 to-slate-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 border border-gray-600 mt-4"
      >
        Go to Dashboard
      </button>
    </div>
  );
};

export default ConfirmationStep;