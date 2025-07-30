<template lang="pug">
  div.location-info-container
    span.location-info-city {{ `City: ${savedCity}` }}
    span.location-info-additional {{ `${additionalInfo.country}, ${additionalInfo.region}` }}
</template>

<script lang="ts" setup>
import type { IWeatherLocationInfo } from "../types/storeTypes";

const props = defineProps<{
  savedCity: string;
  additionalInfo: IWeatherLocationInfo;
}>();
</script>

<style lang="scss" scoped>
.location-info-container {
  @include flexer(flex, column, flex-start, stretch);

  margin-bottom: 20px;

  text-align: center;

  .location-info-city {
    margin-bottom: 10px;

    font-size: 28px;
  }

  .location-info-additional {
    font-size: 24px;
    color: orange;
  }
}
</style>
