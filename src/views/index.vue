<template>
	<div class="page-index">
		<left-nav></left-nav>
		<head-nav></head-nav>
		<banner-content></banner-content>
		<slogan></slogan>
		<case-banner  v-if="caseBannerLoadingFlag"></case-banner>
		<desiner-banner v-if="designerBannerLoadingFlag" ></desiner-banner>
		<div class="index-bottom">
			<div class="no-more">
				没有更多了
			</div>
			<hr/>
		</div>
	</div>

</template>
<style scoped>
.imgWrap {
  width: 100%;
  overflow: hidden;
  height: 2rem;
  
}
.page-index {
  /*padding-top: 0.56rem;*/
}
.page-index .swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
  margin-bottom:.16rem;
}
</style>

<script>
import Vue from "vue";
import "@/common/css/swiper.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import leftNav from "../components/leftNav"; //引用左侧菜单栏
import headNav from "../components/indexheadNav"; //引用顶部菜单栏
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
    return {
    	designerBannerLoadingFlag:false,
   		caseBannerLoadingFlag:false
    };
  },

  created() {
   
    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "index" //设置左菜单栏高亮
    });

   
  }
  ,mounted(){
    	  this.caseBannerLoadingFlag = true;
      this.$nextTick(function(){
       this.shareWx.getId();
       this.shareWx.shareReady("设计IN-设计师严选平台");
      })
 	  document.addEventListener('scroll',()=>{
  		this.loadDesigner();
 	  })
   
  },
  methods:{
 	loadDesigner:function(){
 		this.designerBannerLoadingFlag = true;
 	}
  }
};


</script>
<style scoped="scoped">
	.index-bottom{
		height:.8rem;
		background:#f2f2f2;
		text-align: center;
		position: relative;
		opacity: .6;
	}
	.no-more{
		color: #aaa;
		font-size:.14rem;
		padding:0px .18rem;
		display: inline-block;
		line-height: .8rem;
		background: #f2f2f2;
		position: relative;
		z-index: 10;
	}
	.index-bottom hr{
		position: absolute;
		top:.34rem;
		height:1px;
		width:100%;
		left:0px;
		border:none;
		border-bottom:1px solid #ccc;
		z-index: 1;
	}
</style>