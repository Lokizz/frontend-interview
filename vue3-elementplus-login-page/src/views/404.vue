<template>
  <div class="not-found">
    <img src="@/assets/404.jpg" alt="Page Not Found">
  </div>
</template>

<script lang="ts">
export default {
  name: '404',
  components: {},
}
</script>

<style scoped>
.not-found {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.not-found img {
  display: block;
  width: 80vw;
  height: auto;
  margin: auto;
  /* 垂直居中 */
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>