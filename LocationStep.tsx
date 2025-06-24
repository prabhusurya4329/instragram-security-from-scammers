import React, { useEffect, useState } from 'react';
import { ParkingFormData, Step, PlaceOption } from './types';
import { districtCityMap, placeOptions } from './data';

interface LocationStepProps {
  formData: ParkingFormData;
  updateFormData: (data: Partial<ParkingFormData>) => void;
  goToStep: (step: Step) => void;
}

const LocationStep: React.FC<LocationStepProps> = ({ formData, updateFormData, goToStep }) => {
  const [cities, setCities] = useState<string[]>(districtCityMap[formData.district]);
  const [selectedPlace, setSelectedPlace] = useState<PlaceOption>(formData.place);

  useEffect(() => {
    setCities(districtCityMap[formData.district]);
  }, [formData.district]);

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const district = e.target.value;
    updateFormData({ 
      district,
      city: districtCityMap[district][0] 
    });
  };

  const handleCityChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    updateFormData({ city: e.target.value });
  };

  const handlePlaceChange = (place: PlaceOption) => {
    setSelectedPlace(place);
    updateFormData({ place });
  };

  const handleNext = () => {
    goToStep(3);
  };

  return (
    <div className="space-y-4 animate-fadeIn">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">Select Your Location</h2>
      
      <div className="space-y-4">
        <select
          value={formData.district}
          onChange={handleDistrictChange}
          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all appearance-none"
        >
          {Object.keys(districtCityMap).map((district) => (
            <option key={district} value={district} className="bg-gray-800 text-white">
              {district}
            </option>
          ))}
        </select>
        
        <select
          value={formData.city}
          onChange={handleCityChange}
          className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-20 border border-gray-300 border-opacity-30 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all appearance-none"
        >
          {cities.map((city) => (
            <option key={city} value={city} className="bg-gray-800 text-white">
              {city}
            </option>
          ))}
        </select>

        <div className="grid grid-cols-2 gap-4 mt-6">
          {placeOptions.map((place) => (
            <div
              key={place.id}
              onClick={() => handlePlaceChange(place)}
              className={`
                relative rounded-lg overflow-hidden cursor-pointer transform transition-all duration-300
                ${selectedPlace.id === place.id ? 'ring-2 ring-yellow-400 scale-105' : 'hover:scale-105'}
              `}
            >
              <img
                src={place.image}
                alt={place.name}
                className="w-full h-32 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <span className="text-white font-medium text-center px-2">
                  {place.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={handleNext}
          className="w-full py-3 px-4 bg-gradient-to-r from-teal-500 to-teal-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 mt-6"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default LocationStep;