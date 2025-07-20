<template>
  <div class="location-select-container">
    <select name="" id=""></select>
    <Button @click="selectCity">
      <template #icon>
        <AkLocation />
      </template>
      Change location</Button
    >
    <Button>
      <template #icon>
        <AdSave />
      </template>
      Save changes</Button
    >
  </div>
</template>

<script lang="ts" setup>
import Button from "../components/Button.vue";

import { AkLocation, AdSave } from "@kalimahapps/vue-icons";

const emit = defineEmits(["changeLocation"]);

const selectCity = (): void => {
  emit("changeLocation");
};
</script>

<style lang="scss" scoped>
.location-select-container {
  @include flexer(flex, row, space-between, center);
}
</style>
