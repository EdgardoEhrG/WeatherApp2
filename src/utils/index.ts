import type { IStatisticData } from "../types";
import type { IWeatherCurrent } from "../types/storeTypes";

export const transformWeatherData = (
  data: IWeatherCurrent
): IStatisticData[] => {
  return [
    { code: "temp_c", name: "Temperature °C", value: `${data.temp_c}°C` },
    {
      code: "feelslike_c",
      name: "Feels like °C",
      value: `${data.feelslike_c}°C`,
    },
    { code: "wind_kph", name: "Wind speed", value: `${data.wind_mph} m/s` },
    { code: "pressure_in", name: "Pressure", value: data.pressure_in },
    { code: "humidity", name: "Humidity", value: `${data.humidity}%` },
    { code: "cloud", name: "Cloud", value: `${data.cloud}%` },
  ];
};
