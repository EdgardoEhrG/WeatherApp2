<template lang="pug">
  div.aside-container
    Header
    LocationInfo(:savedCity="savedCity" :additionalInfo)
    div.info
      span.date {{ `Day: ${date}` }}
      span.condition {{ `Condition: ${condition}` }}
      div.astro
        span {{ `Sunrise: ${sunrise}` }}
        span {{ `Sunset ${sunset}` }}
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type {
  IWeatherForecastDay,
  IWeatherLocationInfo,
} from "../types/storeTypes";

const props = defineProps<{
  savedCity: string;
  additionalInfo: IWeatherLocationInfo;
  forecastDay: IWeatherForecastDay;
}>();

const date = computed(() => {
  if (props.forecastDay) {
    const forecastDate = props.forecastDay.date;
    if (forecastDate) {
      return `${new Date(forecastDate).toLocaleDateString("en-EN", {
        weekday: "short",
      })} ${props.forecastDay.date}`;
    } else {
      return "";
    }
  }
});

const condition = computed(() => {
  if (props.forecastDay) {
    const forecastConditionText = props.forecastDay.day.condition.text;
    if (forecastConditionText) {
      return forecastConditionText;
    } else {
      return "";
    }
  }
});

const sunrise = computed(() => {
  if (props.forecastDay) {
    const forecastSunrise = props.forecastDay.astro.sunrise;
    if (forecastSunrise) {
      return forecastSunrise;
    } else {
      return "";
    }
  }
});

const sunset = computed(() => {
  if (props.forecastDay) {
    const forecastSunset = props.forecastDay.astro.sunset;
    if (forecastSunset) {
      return forecastSunset;
    } else {
      return "";
    }
  }
});
</script>

<style lang="scss" scoped>
.aside-container {
  width: 350px;
  height: 400px;

  @include flexer(flex, column, center, center);

  background-color: $bg-card-color;

  border-top-left-radius: 10px;
  border-bottom-left-radius: 10px;

  .info {
    width: 250px;

    @include flexer(flex, column, center, center);

    padding: 10px;

    background-color: rgb(60, 60, 60);

    border-radius: 10px;

    .date,
    .condition {
      font-size: 20px;
      text-align: center;
    }

    .condition {
      margin-top: 10px;
    }

    .astro {
      @include flexer(flex, column, center, center);

      margin-top: 10px;

      font-size: 20px;

      span {
        &:first-of-type {
          margin-bottom: 10px;

          color: rgb(225, 37, 121);
        }

        &:last-of-type {
          color: rgb(199, 70, 255);
        }
      }
    }
  }
}
</style>
