<template>
	<div>
	<div class="designer-banner">
		  <swiper :options="swiperOption" class="contain-visible">
		    <swiper-slide class="swiper-item" v-for="(item,index) in imgItems" :key="index">
		    	<img :src="item"  />
		    </swiper-slide>
		    <div class="swiper-pagination" id="desingerBanner"  slot="pagination"></div>
		  </swiper>
	</div>

	</div>
</template>
<script>
  // swiper options example:
  export default {
    props: ["imgItems"],
    data() {
      return {
      	
        swiperOption: {
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationType:'bullets',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true
        }
      }
    },
   
    computed: {

    },
    mounted() {

    }
  }
</script>
<style >
	.designer-banner {
		width: 100%;
		background:#fff;
	}
	.designer-banner:after{
		height: 0rem;
		background: #fff;
		display: block;
		content: " ";
	}
	.banner-hor-c{
		background:#F4F4F4;
		height:.1rem;
	}
	.swiper-container {
		overflow: hidden;
		position: relative;
	}

	.designer-banner .swiper-wrapper{
		height:100%;
		overflow: hidden;
	}
	
  .swiper-item {
    height: 100%;
    float: left;
  }
  .swiper-item img{
  	display: block;
  	width: 100%;
  }
  #desingerBanner {
  	height:0.2rem;
  	width:100%;
  	position: absolute;
  	bottom:10px;
  	left:0px;
  	text-align: right;
  }
  #desingerBanner .swiper-pagination-bullet{
  	opacity: .6;
  	background:#fff;
  	display: inline-block;
  	margin: 0px 0.04rem;
  	width:0.06rem;
  	height:.06rem;
  	border-radius: 50%;
  }
  #desingerBanner  .swiper-pagination-bullet-active{
  	background:#fff !important;
  	opacity: 1;
  }
</style>