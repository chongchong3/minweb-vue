<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
import { getAuthorize } from '@/api/wxAuthorize';
export default {
  data(){
    return {

    }
  },
   created() {
     getAuthorize().then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error,'authorize')
        });
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

  
   
}
.container {
  padding-top:.52rem;
  height: 100%;

}
.more{
	color:#999;
	font-size: 0.11rem;
	line-height: 14px;
	margin-bottom: 0.09rem;
}
</style>
