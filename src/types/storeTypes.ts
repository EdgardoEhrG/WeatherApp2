import type { IStatisticData } from ".";

export interface IStatisticsState {
  savedCity: string;
  weatherData: IWeatherData | null;
  additionalInfo: IWeatherLocationInfo | string | null;
  currentData: IStatisticData[];
}

export interface IWeatherData {
  current: IWeatherCurrent;
  forecast: any;
  location: IWeatherLocationInfo;
}

export interface IWeatherCurrent {
  temp_c: number;
  wind_kph: number;
  pressure_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
}

export interface IWeatherLocationInfo {
  country: string;
  localtime: string;
  region: string;
}
