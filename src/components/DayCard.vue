<template lang="pug">
  div.card-container(:class="{ active: isActive }")
    AkSun(v-if="weatherCode === 1000")
    BsCloudRainHeavy(v-if="weatherCode === 1009")
    AnFilledCloud(v-if="weatherCode === 1003 || weatherCode === 1006")
    BsCloudRain(v-if="weatherCode === 1189")
    BsCloudRainHeavyFill(v-if="weatherCode === 1195")
    BsCloudFogFill(v-if="weatherCode === 1030")
    CaRain(v-if="weatherCode === 1063")
    BsCloudSnow(v-if="weatherCode === 1219 || weatherCode === 1213")
    div.card-container-date {{ date.toLocaleDateString("en-EN", { weekday: "short" }) }}
    div.card-container-temp {{ temp }} °C
</template>

<script lang="ts" setup>
import {
  AkSun,
  BsCloudRainHeavy,
  AnFilledCloud,
  BsCloudRain,
  CaRain,
  BsCloudRainHeavyFill,
  BsCloudFogFill,
  BsCloudSnow,
} from "@kalimahapps/vue-icons";

const props = defineProps<{
  weatherCode: string;
  temp: string;
  date: Date;
  isActive: boolean;
}>();
</script>

<style lang="scss" scoped>
.card-container {
  width: 100px;

  @include flexer(flex, column, center, center);

  padding: 20px 24px;
  gap: 15px;

  color: white;

  background-color: $bg-color;
  border: none;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    background-color: #3a434f;
  }

  &-date,
  &-temp {
    font-size: 20px;
  }

  &-temp {
    font-weight: 700;
  }
}

.active {
  color: $inverted-primary-color;

  background-color: $primary-color;

  &:hover {
    background-color: #d7d7d7;
  }
}
</style>
