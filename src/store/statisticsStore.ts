import { defineStore } from "pinia";
import type {
  IStatisticsState,
  IWeatherForecastDay,
} from "../types/storeTypes";
import { fetchWeatherByCity } from "../services/weather";
import { transformWeatherData } from "../utils";

export const useStatisticsStore = defineStore("statisticsStore", {
  state: (): IStatisticsState => ({
    savedCity: "",
    weatherData: null,
    additionalInfo: "",
    currentData: [],
    currentForecast: null,
    error: "",
  }),

  getters: {
    //
  },

  actions: {
    async init() {
      const savedCity: string = localStorage.getItem("savedCity") || "";

      if (savedCity) {
        this.savedCity = savedCity;

        await this.getWeatherStatisticByCity(savedCity);

        if (this.weatherData?.forecast) {
          this.currentForecast = this.weatherData.forecast.forecastday[0];
        }
      } else {
        this.savedCity = "Austin";

        await this.getWeatherStatisticByCity(this.savedCity);

        if (this.weatherData?.forecast) {
          this.currentForecast = this.weatherData.forecast.forecastday[0];
        }
      }
    },

    async saveCity(city: string) {
      localStorage.setItem("savedCity", city);
      this.savedCity = city;
    },
    async setCurentForecast(forecast: IWeatherForecastDay) {
      this.currentForecast = forecast;
    },

    async getWeatherStatisticByCity(city: string) {
      const res = await fetchWeatherByCity(city);

      if (res.status === 200) {
        await this.saveCity(city);

        const extractedData = transformWeatherData(res.data.current);

        this.weatherData = res.data;
        this.additionalInfo = res.data.location;
        this.currentData = extractedData;
      } else {
        this.error = res.error;
      }
    },

    async resetError() {
      this.error = "";
    },
  },
});
