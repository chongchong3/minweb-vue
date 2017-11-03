<template>

  <!--<swiper :options="swiperOption"  class="imgWrap">
    <swiper-slide >I'm Slide 1</swiper-slide>
    <swiper-slide>I'm Slide 2</swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
    <swiper-slide>I'm Slide 5</swiper-slide>
    <swiper-slide>I'm Slide 6</swiper-slide>
    <swiper-slide>I'm Slide 7</swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
    <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div>
    <div class="swiper-scrollbar"   slot="scrollbar"></div>
  </swiper>-->

  <div>
  		<banner-content></banner-content>
      <slogan></slogan>
      <case-banner></case-banner>
      <desiner-banner></desiner-banner>
  </div>

</template>
<style>
.imgWrap {width:100%;overflow: hidden;height: 2rem;}
/*.swiper-slide {
  width:100%;
  float:left;
  height:100%;
  }*/
</style>

<script>
	import slogan from "../components/index/slogan"
	import bannerContent from "../components/index/banner"
	import caseBanner from "../components/index/caseBanner"
	import desinerBanner from "../components/index/desinerBanner"
export default {
	components:{
  	slogan,
  	bannerContent,
  	caseBanner,
  	desinerBanner
 },
  data(){
    return {
      swiperOption: {
         autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationClickable: true,
          prevButton: '.swiper-button-prev',
          nextButton: '.swiper-button-next',
          scrollbar: '.swiper-scrollbar',
          mousewheelControl: true,
          observeParents: true,
          debugger: true,
          onTransitionStart (swiper) {
            console.log(swiper)
          }
        }
    }
	}
	
  
}
</script>



