import { defineStore } from "pinia";
import type { IStatisticsState } from "../types/storeTypes";
import { fetchWeatherByCity } from "../services/weather";

export const useStatisticsStore = defineStore("statisticsStore", {
  state: (): IStatisticsState => ({
    weatherData: null,
    additionalInfo: "",
    weatherProperties: [
      { id: "0", name: "Humidity", value: "90%" },
      { id: "1", name: "Precipitation", value: "30%" },
      { id: "2", name: "Wind speed", value: "3 km/h" },
    ],
  }),

  getters: {
    //
  },

  actions: {
    async getWeatherStatisticByCity(city: string) {
      const res = await fetchWeatherByCity(city);
      this.weatherData = res.data;
      this.additionalInfo = res.data.location;
    },
  },
});
