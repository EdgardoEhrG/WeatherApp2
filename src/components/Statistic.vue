<template lang="pug">
  div.stat-container
    div.stat-container-name {{ propertyName }}
    div.stat-container-value {{ propertyValue }}
</template>

<script lang="ts" setup>
import { computed } from "vue";
import type { IStatisticData } from "../types";

const props = defineProps<{
  property: IStatisticData;
}>();

const propertyName = computed(() => {
  if (props.property && props.property.name) {
    return props.property.name;
  } else {
    return "";
  }
});

const propertyValue = computed(() => {
  if (props.property && props.property.value) {
    return props.property.value;
  } else {
    return "";
  }
});
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
