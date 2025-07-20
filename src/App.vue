<template>
  <div class="container">
    <Header />
    <main>
      <div class="statlist">
        <Statistic
          v-for="weatherProp of statistics.weatherProperties"
          :key="weatherProp.id"
          :statistic="weatherProp"
        />
      </div>
      <Button>
        <template #icon>
          <AkLocation />
        </template>
        Change location</Button
      >
    </main>
  </div>
</template>

<script setup lang="ts">
import Header from "./components/Header.vue";
import Statistic from "./components/Statistic.vue";
import Button from "./components/Button.vue";

import { AkLocation } from "@kalimahapps/vue-icons";

import type { StatisticType } from "./types";

const statistics: StatisticType = {
  weatherProperties: [
    { id: "0", name: "Humidity", value: "90%" },
    { id: "1", name: "Precipitation", value: "30%" },
  ],
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
