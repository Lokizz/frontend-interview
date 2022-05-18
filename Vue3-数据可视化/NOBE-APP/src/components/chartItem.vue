<template>
  <div class="item">
    <!-- 插槽用于放置图表组件 -->
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less">
.item {
  height: 5.125rem;
  margin: 0.25rem;
  background-color: rgba(12, 130, 255, 0.4);
}
</style>
