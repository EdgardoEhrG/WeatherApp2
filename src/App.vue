<template lang="pug">
  div.container
    Header
    LocationInfo(:savedCity :additionalInfo)
    main
      div.statlist
        Statistic(v-for="weatherProp of weatherProperties" :key="weatherProp.id" :statistic="weatherProp")
      LocationSelect(@change-location="getCity" :getWeatherStatisticByCity="getWeatherStatisticByCity")
</template>

<script setup lang="ts">
import { useStatisticsStore } from "./store/statisticsStore";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const statisticsStore = useStatisticsStore();

const { weatherProperties, additionalInfo } = storeToRefs(statisticsStore);

const { getWeatherStatisticByCity } = statisticsStore;

const savedCity = ref<string>("Austin");

const getCity = async (city: string) => {
  await getWeatherStatisticByCity(city);
  savedCity.value = city;
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

    .sep {
      margin: 10px 0px;
    }
  }
}
</style>
