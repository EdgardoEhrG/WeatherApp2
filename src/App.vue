<template lang="pug">
  div.container
    Header
    main
      span {{ savedCity }}
      div.statlist
        Statistic(v-for="weatherProp of weatherProperties" :key="weatherProp.id" :statistic="weatherProp")
      LocationSelect(@change-location="getCity")
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Statistic from "./components/Statistic.vue";
import LocationSelect from "./components/LocationSelect.vue";

import { useStatisticsStore } from "./store/statisticsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import { fetchWeatherByCity } from "./services/weather";

const statisticsStore = useStatisticsStore();

const { weatherProperties } = storeToRefs(statisticsStore);

const getCity = async (city: string) => {
  const data = await fetchWeatherByCity(city);
  console.log(data);
};
</script>

<style lang="scss" scoped>
.container {
  @include flexer(flex, column, center, center);

  padding: 60px 50px;

  main {
    padding: 60px 50px;

    background-color: $bg-main-color;

    border-radius: 10px;

    .statlist {
      margin-bottom: 20px;
    }
  }
}
</style>
