<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
  created(){

  }
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
   overflow: scroll;
}
.container {
  height: 100%;
}
.more{
	color:#999;
	font-size: 0.11rem;
	line-height: 14px;
	margin-bottom: 0.09rem;
}
</style>
