export interface Airport {
    id: number;
    name: string;
    iata: string;
    icao: string;
    city: string;
    lat: number;
    lon: number;
    country: string;
    alt: number;
    size: number;
    timezone: {
      name: string;
      offset: number;
      offsetHours: string;
      abbr: string;
      abbrName: string;
      isDst: boolean;
    };
    countryId: number;
  }
  
  export interface AirportData {
    version: string;
    rows: Airport[];
  }