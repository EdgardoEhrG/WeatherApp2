import axios from "axios";

export const fetchWeatherByCity = (city: string): Promise<any> => {
  return axios.get(`${import.meta.env.VITE_API_ENDPOINT}/forecast.json`, {
    params: {
      q: city,
      lang: "en",
      key: import.meta.env.VITE_API_KEY,
      days: 3,
    },
  });
};
