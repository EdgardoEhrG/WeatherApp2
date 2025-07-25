<template lang="pug">
  div.stat-container
    div.stat-container-name {{ statistic.name }}
    div.stat-container-value {{ statistic.value }}
</template>

<script lang="ts" setup>
import type { WeatherProperty } from "../types";

const props = defineProps<{
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
    text-transform: uppercase;
  }

  &-value {
    font-weight: 500;
  }
}
</style>
