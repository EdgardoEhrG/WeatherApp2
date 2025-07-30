import axios from "axios";

import type { IWeatherData } from "../types/storeTypes";

export const fetchWeatherByCity = async (
  city: string
): Promise<{
  data: IWeatherData;
  status: number;
  error: string;
}> => {
  try {
    return await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/forecast.json`,
      {
        params: {
          q: city,
          lang: "en",
          key: import.meta.env.VITE_API_KEY,
          days: 6,
        },
      }
    );
  } catch (error) {
    return {
      data: [] as unknown as IWeatherData,
      status: 400,
      error: "No matching location found.",
    };
  }
};
