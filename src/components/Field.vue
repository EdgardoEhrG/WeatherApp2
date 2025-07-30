<template lang="pug">
  div
    input(
      class="input"
      type="text"
      placeholder="Type a city"
      v-model="data"
      )
</template>

<script lang="ts" setup>
const data = defineModel<string>();
</script>

<style lang="scss" scoped>
.input {
  height: 55px;

  margin-right: 20px;
  padding: 15px 20px;

  font-size: 19px;
  color: white;

  border: none;
  border-radius: 10px;

  background-color: $bg-card-color;
  box-shadow: 1px 2px 4px 0px $bg-main-color;

  &::placeholder {
    color: #343d4b;
  }
}
</style>
