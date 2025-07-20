<template>
  <div class="stat-container">
    <div class="stat-container-name">{{ statistic.name }}</div>
    <div class="stat-container-value">{{ statistic.value }}</div>
  </div>
</template>

<script lang="ts" setup>
import type { WeatherProperty } from "../types";

const { statistic } = defineProps<{
  statistic: WeatherProperty;
}>();
</script>

<style lang="scss" scoped>
.stat-container {
  @include flexer(flex, row, space-between, center);

  font-size: 28px;

  gap: 16px;

  &-name {
    font-weight: 700;
  }

  &-value {
    font-weight: 500;
  }
}
</style>
