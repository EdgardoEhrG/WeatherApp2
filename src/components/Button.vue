<template lang="pug">
  button.button
    div
      slot(name="icon")
    slot
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.button {
  @include flexer(flex, row, space-between, center);

  padding: 10px 20px;

  font-family: $font;
  font-size: 20px;
  font-weight: 600;
  color: $primary-color;

  border: none;
  border-radius: 10px;

  background: $gradient;

  cursor: pointer;

  &:hover {
    background: $inverted-gradient;
  }

  div {
    @include flexer(flex, row, center, center);
  }
}
</style>
