import React, { useState } from 'react';
import { ParkingFormData, Step } from './types';

interface LoginStepProps {
  formData: ParkingFormData;
  updateFormData: (data: Partial<ParkingFormData>) => void;
  goToStep: (step: Step) => void;
}

const LoginStep: React.FC<LoginStepProps> = ({ formData, updateFormData, goToStep }) => {
  const [otpSent, setOtpSent] = useState(false);

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ phone: e.target.value });
  };

  const handleOtpChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateFormData({ otp: e.target.value });
  };

  const sendOtp = () => {
    if (formData.phone.length >= 10) {
      // In a real app, this would make an API call to send OTP
      setOtpSent(true);
    } else {
      alert('Please enter a valid phone number');
    }
  };

  const verifyOtp = () => {
    if (formData.otp.length >= 4) {
      // In a real app, this would verify the OTP with an API
      goToStep(2);
    } else {
      alert('Please enter a valid OTP');
    }
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Login with Mobile Number</h2>
      
      <div className="space-y-4">
        <input
          type="tel"
          value={formData.phone}
          onChange={handlePhoneChange}
          placeholder="Enter your phone number"
          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
        />
        
        <button
          onClick={sendOtp}
          className="w-full py-3 px-4 bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
        >
          {otpSent ? 'Resend OTP' : 'Send OTP'}
        </button>
        
        {otpSent && (
          <>
            <input
              type="text"
              value={formData.otp}
              onChange={handleOtpChange}
              placeholder="Enter OTP"
              className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all"
            />
            
            <button
              onClick={verifyOtp}
              className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Verify OTP
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default LoginStep;