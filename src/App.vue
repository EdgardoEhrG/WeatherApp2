<template lang="pug">
  div.container
    Header
    LocationInfo(:savedCity="city" :additionalInfo)
    main
      div.statlist
        Statistic(v-for="weatherProp of currentData" :key="weatherProp.code" :property="weatherProp")
      LocationSelect(@change-location="getCity" :getWeatherStatisticByCity="getWeatherStatisticByCity")
</template>

<script setup lang="ts">
import { useStatisticsStore } from "./store/statisticsStore";
import { storeToRefs } from "pinia";
import { onMounted, ref } from "vue";

const statisticsStore = useStatisticsStore();

const { additionalInfo, savedCity, currentData } = storeToRefs(statisticsStore);

const { getWeatherStatisticByCity, init } = statisticsStore;

const city = ref<string>(savedCity.value);

const getCity = async (newCity: string) => {
  await getWeatherStatisticByCity(newCity);
  city.value = newCity;
};

onMounted(async () => {
  init();
  city.value = savedCity.value;
});
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
