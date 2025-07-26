import type { WeatherProperty } from ".";

export interface IStatisticsState {
  weatherData: {
    current: any;
    forecast: any;
    location: any;
  } | null;
  weatherProperties: WeatherProperty[];
}
