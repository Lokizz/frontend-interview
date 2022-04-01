<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
html,
body,
#app {
  width: 100%;
  height: 100vh;
  overflow: hidden;
}

#app {
  display: flex;
  align-items: center;
}

*,
*::before,
*::after {
  box-sizing: border-box;
}
</style>
