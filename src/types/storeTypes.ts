import type { WeatherProperty } from ".";

export interface IStatisticsState {
  weatherData: IWeatherData | null;
  additionalInfo: IWeatherLocationInfo | string | null;
  weatherProperties: WeatherProperty[];
}

export interface IWeatherData {
  current: IWeatherCurrent;
  forecast: any;
  location: IWeatherLocationInfo;
}

export interface IWeatherCurrent {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  temp_f: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_mph: number;
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  precip_in: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  feelslike_f: number;
  windchill_c: number;
  windchill_f: number;
  heatindex_c: number;
  heatindex_f: number;
  dewpoint_c: number;
  dewpoint_f: number;
  vis_km: number;
  vis_miles: number;
  uv: number;
  gust_mph: number;
  gust_kph: number;
}

export interface IWeatherLocationInfo {
  country: string;
  localtime: string;
  region: string;
}
