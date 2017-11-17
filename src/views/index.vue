<template>
	<div class="page-index">
		<left-nav></left-nav>
		<head-nav></head-nav>
		<banner-content></banner-content>
		<slogan></slogan>
		<case-banner></case-banner>
		<desiner-banner></desiner-banner>
	</div>

</template>
<style scoped>
.imgWrap {
  width: 100%;
  overflow: hidden;
  height: 2rem;
  
}
.page-index {
  padding-top: 0.52rem;
}
</style>

<script>
import Vue from "vue";
import "@/common/css/swiper.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import leftNav from "../components/leftNav"; //引用左侧菜单栏
import headNav from "../components/headNav"; //引用顶部菜单栏
import slogan from "../components/index/slogan";
import bannerContent from "../components/index/banner";
import caseBanner from "../components/index/caseBanner";
import desinerBanner from "../components/index/desinerBanner";

Vue.use(VueAwesomeSwiper);

export default {
  components: {
    slogan,
    bannerContent,
    caseBanner,
    desinerBanner,
    leftNav,
    headNav
  },
  data() {
    return {};
  },
  beforeCreate(){
     if(!getCookie("isFirstLoad")){
        setCookie('isFirstLoad',true,60*24*30*12);
      window.location.href="/#/guide";
      return

    }
  },
  created() {
   
    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "index" //设置左菜单栏高亮
    });

   
  }
  ,mounted(){
      this.$nextTick(function(){
        this.shareWx.getId();
       this.shareWx.shareReady("设计IN-设计师严选平台","设计IN-设计师严选平台",window.location.href,"https://img.wesetup.cn/logo.png?imageView2/5/w/100");

    })
   
  },
  methods:{
 
  }
};

  function setCookie(name, value, seconds) {
    seconds = seconds || 0; //seconds有值就直接赋值，没有为0，这个根php不一样。
    var expires = "";
    if (seconds != 0 ) { //设置cookie生存时间
    var date = new Date();
    date.setTime(date.getTime()+(seconds*1000));
    expires = "; expires="+date.toGMTString();
    }
    document.cookie = name+"="+escape(value)+expires+"; path=/"; //转码并赋值
    }
  function  getCookie(name) {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
      }
</script>
