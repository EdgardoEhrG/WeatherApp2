import axios from "axios";

import type { IWeatherData } from "../types/storeTypes";

export const fetchWeatherByCity = async (
  city: string
): Promise<{ data: IWeatherData }> => {
  try {
    return await axios.get(
      `${import.meta.env.VITE_API_ENDPOINT}/forecast.json`,
      {
        params: {
          q: city,
          lang: "en",
          key: import.meta.env.VITE_API_KEY,
          days: 3,
        },
      }
    );
  } catch (error) {
    throw new Error("Cannot get weather info");
  }
};
