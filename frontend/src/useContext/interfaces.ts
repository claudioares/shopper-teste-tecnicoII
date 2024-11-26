export interface IContextProps {
    [x: string]: any
};

export interface IFormData {
    origin: string;
    destination: string;
    userId: number
};

export interface ILocationsProps {
    lat: number,
    lng: number,
}

export interface IResponseApiProps {
    destination: {
        latitude: number;
        longitude: number;
    };
    distance: number;
    duration: string; 
    options: Array<any>;
    origin: {
        latitude: number;
        longitude: number;
    };
    routeResponse: {
        routes: Array<{
            distanceMeters: number;
            duration: string; 
            polyline: {
                encodedPolyline: string;
            };
        }>;
    };
}

export interface IDriver {
  id: number;
  custumer_id: string,
  origin: string,
  destination: string,
  name: string; 
  distance: number,
  duration: string,
  description: string; 
  review: {
    comment: string; 
    rating: string; 
  };
  vehicle: string; 
  value: string; 
}

export interface IAllDrivers {
  id: number;
  name: string;
  description: string;
  car: string;
  rating: string; 
  ratePerKm: string; 
}

export interface IDriver {
  id: number,
  name: string
}

export interface IRide {
  id: number;
  date: string;
  origin: string;
  destination: string;
  distance: string;
  duration: string;
  value: string;
  driver: IDriver
}

export interface ICustomerRides {
  customer_id: string;
  rides: IRide[];
}