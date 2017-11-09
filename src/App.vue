<template>
  <div id="app" class="container" v-scroll="onScroll">
    <router-view/>
  </div>
</template>

<script>
import vuescroll from 'vue-scroll'
import Vue from 'vue'
Vue.use(vuescroll)

var prev=0;

export default {
  name: 'app',
  created(){

  },
   methods:{
    onScroll:function(e, position){
      var topNav = document.getElementById("topNav");
      this.position = position;
      var reduce=prev-position.scrollTop;
   console.log(reduce);
      if(!topNav||!reduce) {
        return
      }
      if(reduce>0){
         topNav.style.display = "block";
           prev=position.scrollTop;
           return
      }
      if(reduce<0) {
         topNav.style.display = "none";
           prev=position.scrollTop;
           return
      }
    
    }
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
  overflow: scroll;
}
.more{
	color:#999;
	font-size: 0.11rem;
	line-height: 14px;
	margin-bottom: 0.09rem;
}
</style>
