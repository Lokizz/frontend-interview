<template>
  <svg class="svg-icon" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script setup>
import { computed } from 'vue'

// ? 获取从上级父组件传递来的属性
// eslint-disable-next-line
const props = defineProps({
  icon: {
    type: String,
    required: true
  }
})

// ? 对现有的属性处理
const iconName = computed(() => {
  return `#icon-${props.icon}`
})
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
