<template>

    <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <!-- <swiper-slide><img class="scrollImg" src="http://owxa0vmjl.bkt.clouddn.com/all_animation_1110.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="scrollImg" src="http://owxa0vmjl.bkt.clouddn.com/all_animation_1128.jpg" alt=""></swiper-slide>
    <swiper-slide><img class="scrollImg" src="http://owxa0vmjl.bkt.clouddn.com/all_animation_1186.jpg" alt=""></swiper-slide> -->
    <div class="swiper-slide"><img class="scrollImg" src="http://owxa0vmjl.bkt.clouddn.com/all_animation_1110.jpg" alt=""></div>
    <div class="swiper-slide"><img class="scrollImg" src="http://owxa0vmjl.bkt.clouddn.com/all_animation_1128.jpg" alt=""></div>
    <div class="swiper-slide"><img class="scrollImg" src="http://owxa0vmjl.bkt.clouddn.com/all_animation_1186.jpg" alt=""></div>
    <!-- Optional controls -->
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
    <!-- <div class="bg"> -->
      <div class="button" @click="goHome">
      	进入设计IN
      </div>
  <!-- </div> -->
    </swiper>

</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 name: 'carrousel',
 components: {
    swiper,
    swiperSlide
},
 data() {
   return {
     swiperOption: {
       // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
    //    notNextTick: true,
       direction : 'vertical',
       // swiper configs 所有的配置同swiper官方api配置
       effect:"coverflow",
       grabCursor : true, //手掌形状，拖动时指针会变成抓手形状
       setWrapperSize :true,
    //    autoHeight: true,
       pagination : '.swiper-pagination',
       paginationClickable :true,
    //    prevButton:'.swiper-button-prev',
    //    nextButton:'.swiper-button-next',
    //    scrollbar:'.swiper-scrollbar',
       mousewheelControl : true,
       observeParents:true,
     }
   }
 },
 mounted(){
     var swiper =document.querySelectorAll('.swiper-slide');

    var scale = window.screen.height / window.screen.width;  
    swiper[0].style.height = document.body.clientWidth * scale + "px";
    swiper[1].style.height = document.body.clientWidth * scale + "px";
    swiper[2].style.height = document.body.clientWidth * scale + "px"; 
  },
 computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
 },
 methods: {
    goHome(){
        this.$router.push({ path:'/'});
    }
}
}
</script>
<style scoped>
@import "../common/css/swiper.min.css";
.swiper-container {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.swiper-slide{
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
}
.scrollImg{
     width: 100%;
    height: 100%;
}
/* .bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('http://ovfllimsi.bkt.clouddn.com/npc_bg_new@3x.png');
    background-size: 100% 100%;
} */
.swiper-pagination-bullet-active{
    background:#93D36A;
}
.button{
	position: absolute;
    bottom: .56rem;
    left:50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
　　-ms-transform: translate(-50%, -50%);
　　-o-transform: translate(-50%, -50%);
　　transform: translate(-50%, -50%);
	height: .36rem;
	width: 1rem;
    background: #93D36A;
    color: #fff;
	line-height: .36rem;
    text-align: center;
    z-index: 999;
}
</style>


