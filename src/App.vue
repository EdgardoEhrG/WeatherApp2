<template>
  <div class="container">
    <Header />
    <main>
      <div class="statlist">
        <Statistic
          v-for="weatherProp of weatherProperties"
          :key="weatherProp.id"
          :statistic="weatherProp"
        />
      </div>
      <LocationSelect @select-city="getCity" />
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Statistic from "./components/Statistic.vue";
import LocationSelect from "./components/LocationSelect.vue";

import { useStatisticsStore } from "./store/statisticsStore";
import { storeToRefs } from "pinia";

const statisticsStore = useStatisticsStore();

const { weatherProperties } = storeToRefs(statisticsStore);

const getCity = (): void => {
  //
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
