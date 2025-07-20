import { defineStore } from "pinia";
import type { IStatisticsState } from "../types/storeTypes";

export const useStatisticsStore = defineStore("statisticsStore", {
  state: (): IStatisticsState => ({
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
    //
  },
});
