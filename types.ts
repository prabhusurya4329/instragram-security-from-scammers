export interface ParkingFormData {
  phone: string;
  otp: string;
  district: string;
  city: string;
  place: PlaceOption;
  slot: {
    id: string;
    price: number;
  };
  services: {
    carWash: boolean;
    food: boolean;
  };
}

export interface SlotOption {
  id: string;
  name: string;
  price: number;
}

export interface PlaceOption {
  id: string;
  name: string;
  image: string;
}

export type Step = 1 | 2 | 3 | 4 | 5;