<template lang="pug">
  div.location-select-container
    Button(v-if="!isEdited" @click="edit")
      template(#icon)
        AkLocation
      | Change location
    template(v-else)
      Field(v-model="city" @keyup.enter="selectCity")
      Button(@click="selectCity")
        template(#icon)
          AdSave
        | Save changes
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";

import { AkLocation, AdSave } from "@kalimahapps/vue-icons";

const { getWeatherStatisticByCity } = defineProps<{
  getWeatherStatisticByCity: (city: string) => Promise<void>;
}>();

const emit = defineEmits(["changeLocation"]);

const isEdited = ref<boolean>(false);
const city = ref<string>("Austin");

const selectCity = (): void => {
  isEdited.value = false;
  emit("changeLocation", city.value);
};

const edit = (): void => {
  isEdited.value = true;
};

const updateCity = (newCity: string): void => {
  city.value = newCity;
};

onMounted(async () => {
  updateCity("Austin");
  await getWeatherStatisticByCity("Austin");
});
</script>

<style lang="scss" scoped>
.location-select-container {
  width: 450px;
  height: 50px;

  @include flexer(flex, row, center, center);
}
</style>
