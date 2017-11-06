<template>
  <div>
      <div class="mesbox">
          <textarea name="" id=""  class="area"></textarea>
          <div class="send">发送</div>
      </div>
  </div>
</template>
<script>
import Vue from "vue";
import WildVue from "wildvue";
import Wilddog from "wilddog";
Vue.use(WildVue);
export default {};
</script>
<style>
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

