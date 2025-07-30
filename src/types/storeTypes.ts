import type { IStatisticData } from ".";

export interface IStatisticsState {
  savedCity: string;
  weatherData: IWeatherData | null;
  additionalInfo: IWeatherLocationInfo | string | null;
  currentData: IStatisticData[];
  currentForecast: {
    date: string;
    day: { condition: { code: number }; avgtemp_c: number };
  } | null;
  error: string;
}

export interface IWeatherData {
  current: IWeatherCurrent;
  forecast: IWeatherForecast;
  location: IWeatherLocationInfo;
}

export interface IWeatherCurrent {
  temp_c: number;
  wind_mph: number;
  pressure_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
}

export interface IWeatherForecast {
  forecastday: IWeatherForecastDay[];
}

export interface IWeatherForecastDay {
  date: string;
  day: { condition: { code: number; text: string }; avgtemp_c: number };
  astro: {
    sunset: string;
    sunrise: string;
  };
}

export interface IWeatherLocationInfo {
  country: string;
  localtime: string;
  region: string;
}
