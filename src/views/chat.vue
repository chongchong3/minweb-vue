<template>
  <div>
      <!-- <div class="mesbox"> -->
          <!-- <textarea name="" id=""  class="area"></textarea> -->
          <!-- <div class="send">发送</div> -->
      <!-- </div> -->
      <div class="imgClick" id="online-service" @click="link">
        <img src="https://qiyukf.com/sdk/res/kefu/custom/4.png" alt="">
      </div>
      
      <!-- <a href="#" id="online-service" @click="link" ref="online-service">点我咨询</a> -->
      <!-- <h2>在线客服</h2> -->
  </div>
</template>
<script>
import Vue from "vue";
// import WildVue from "wildvue";
// import Wilddog from "wilddog";
// Vue.use(WildVue);
export default {
  data(){
    return{

    }
  },
  beforeCreated(){
    
  },
  created(){
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = 'https://qiyukf.com/script/a6caa2ba23e0c81f8ff2fd291db0113f.js';
    document.body.appendChild(s);      
  },
  mounted() {  
    
    document.getElementById('online-service').onclick = function(){
        location.href = ysf.url();
    };
  },
  updated(){
  
  },
  methods:{
    link(){
      // console.log(1);
      // location.href = ysf.url()
    }
  },
};
</script>
<style>
.imgClick{
  margin:auto;
  position: absolute;
  top: 0;bottom: 0;
  left: 0; right: 0;
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background: #F96868;
}
.mesbox {
  position: fixed;
  width: 100%;
  bottom: 0;
}
.area {
  width: 90%;
  margin: 0 auto;
  height: 0.5rem;
  border: #eee 1px solid;
  display: block;
  line-height: 0.3rem;
  border-radius: 0.02rem;
  outline-color: #fff;
}
.send {
  background: green;
  color: #fff;
  line-height: 0.3rem;
  border-radius: 0.02rem;
  margin: 0.2rem auto;
  width: 90%;
  text-align: center;
}
</style>

