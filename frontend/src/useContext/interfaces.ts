/* eslint-disable @typescript-eslint/no-explicit-any */
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
    distance: number; // Distância em quilômetros
    duration: string; // Duração da viagem em minutos ou como string formatada
    options: Array<any>; // Pode ser especificado se o formato exato for conhecido
    origin: {
        latitude: number;
        longitude: number;
    };
    routeResponse: {
        routes: Array<{
            distanceMeters: number; // Distância em metros
            duration: string; // Duração da rota em segundos (como string formatada, ex: "1524s")
            polyline: {
                encodedPolyline: string; // Linha poligonal codificada da rota
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