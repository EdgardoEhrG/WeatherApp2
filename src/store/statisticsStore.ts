import { defineStore } from "pinia";
import type { IStatisticsState } from "../types/storeTypes";
import { fetchWeatherByCity } from "../services/weather";
import { transformWeatherData } from "../utils";

export const useStatisticsStore = defineStore("statisticsStore", {
  state: (): IStatisticsState => ({
    savedCity: "",
    weatherData: null,
    additionalInfo: "",
    currentData: [],
  }),

  getters: {
    //
  },

  actions: {
    async init() {
      const savedCity: string = localStorage.getItem("savedCity") || "";

      if (savedCity) {
        this.savedCity = savedCity;
        this.getWeatherStatisticByCity(savedCity);
      } else {
        this.savedCity = "Austin";
        this.getWeatherStatisticByCity(this.savedCity);
      }
    },

    async saveCity(city: string) {
      localStorage.setItem("savedCity", city);
    },

    async getWeatherStatisticByCity(city: string) {
      const res = await fetchWeatherByCity(city);

      this.saveCity(city);

      const extractedData = transformWeatherData(res.data.current);

      this.weatherData = res.data;
      this.additionalInfo = res.data.location;
      this.currentData = extractedData;

      console.log(this.currentData);
    },
  },
});
