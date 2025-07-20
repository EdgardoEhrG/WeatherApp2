export type StatisticType = {
  weatherProperties: WeatherProperty[];
};

export type WeatherProperty = {
  id: string;
  name: string;
  value: string;
};
