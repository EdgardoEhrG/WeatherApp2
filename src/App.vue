<template lang="pug">
  div.container
    AsideInfo(
      v-if="currentData.length"
      :savedCity="savedCity"
      :additionalInfo
      :forecastDay="currentForecast"
      )
    main
      h3.title Current day weather info:
      div.statlist(v-if="currentData.length")
        Statistic(
          v-for="weatherProp of currentData"
          :key="weatherProp.code"
          :property="weatherProp"
          )
      h3.title Forecast
      div.forecast-container(v-if="weatherData")
        DayCard(
          v-for="(forecast, i) in weatherData.forecast.forecastday"
          :weatherCode="forecast.day.condition.code"
          :temp="forecast.day.avgtemp_c"
          :date="new Date(forecast.date)"
          @click="setCardIndex(i, forecast)"
          :isActive="activeCard === i"
          )
      LocationSelect(@change-location="getCity" :getWeatherStatisticByCity="getWeatherStatisticByCity")
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from "vue";
import { storeToRefs } from "pinia";
import { useStatisticsStore } from "./store/statisticsStore";
import { toast } from "vue3-toastify";
import type { IWeatherForecastDay } from "./types/storeTypes";

const statisticsStore = useStatisticsStore();

const {
  additionalInfo,
  savedCity,
  currentData,
  error,
  weatherData,
  currentForecast,
} = storeToRefs(statisticsStore);

const { getWeatherStatisticByCity, init, resetError, setCurentForecast } =
  statisticsStore;

const activeCard = ref<number>(0);

const getCity = async (newCity: string): Promise<void> => {
  await getWeatherStatisticByCity(newCity);
};

const setCardIndex = (index: number, forecast: IWeatherForecastDay): void => {
  activeCard.value = index;
  setCurentForecast(forecast);
};

const notify = async () => {
  toast.error(error.value, {
    autoClose: 1000,
  });
};

watch(
  () => error.value,
  async (value) => {
    if (value) {
      await notify();
      await resetError();
    }
  }
);

onMounted(async () => {
  init();
});
</script>

<style lang="scss" scoped>
.container {
  @include flexer(flex, row, center, center);

  padding: 60px 50px;
  margin-top: 200px;

  main {
    padding: 60px 50px;
    padding-top: 20px;

    background-color: $bg-main-color;

    border-radius: 10px;

    .statlist {
      margin-bottom: 20px;
    }

    .sep {
      margin: 10px 0px;
    }

    .forecast-container {
      @include flexer(flex, row, center, center);

      margin-bottom: 30px;
      gap: 8px;
    }

    .title {
      width: 100%;

      margin-bottom: 20px;

      font-size: 20px;
      text-align: center;
    }
  }
}
</style>
