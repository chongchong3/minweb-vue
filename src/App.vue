<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html {
  font-size:100px;
  height: 100%;
}
body {
  font-size:12px;
   height: 100%;
}
.container {
  height: 100%;
}
</style>
