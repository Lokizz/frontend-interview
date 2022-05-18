<template>
  <div class="test">
    {{ content }}
    <button class="btn" @click="changeHandler">修改 content 内容</button>
  </div>  
</template>

<script setup>
import { ref } from 'vue'
let content = ref('content here')
function changeHandler() {
  content.value = 'content modified'
}
</script>

<style>
.test {
  width: 90vw;
  height: 100vh;
  margin: 30px auto;
  border: 1px solid lightcoral;
  background: hsla(0, 0%, 100%, 0.486);
  backdrop-filter: blur(2px);
}
</style>