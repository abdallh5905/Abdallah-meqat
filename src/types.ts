export interface Package {
  id: string;
  name: string;
  badge: string;
  type: string; // 'economic' | 'vip' | 'seats'
  busDetails: string;
  hotelDetails: string;
  duration: string;
  departureDays: string;
  roomsDescription: string;
  priceEstimate?: string;
  features: string[];
}

export interface Hotel {
  name: string;
  hotelClass: '3star' | '5star';
  description: string;
  stars: number;
  image: string;
  features: string[];
}

export interface Bus {
  type: 'economic' | 'vip';
  name: string;
  passengers: string;
  description: string;
  image: string;
  features: string[];
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface BookingState {
  packageId: string;
  name: string;
  phone: string;
  date: string;
  passengersCount: number;
  roomType: string; // 'shared' | 'double' | 'triple' | 'quadruple' | 'none'
  notes: string;
}
