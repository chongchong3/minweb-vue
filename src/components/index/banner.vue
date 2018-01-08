<template>
	<div>
	<div class="banner-c">
		  <swiper :options="swiperOption" class="contain-visible">
		    <!-- slides -->
		    <!--<swiper-slide class="swiper-item" v-for="(item,index) in banner" :key="index">
		    		<img :src="item.link"  :loc="item.src"/>
		    </swiper-slide>-->
		    <swiper-slide class="swiper-item" v-for="(item,index) in banner" :key="index">
		    	<img :src="item.link+'?imageView2/2/w/750'" :loc="item.src" />
		    </swiper-slide>
		    <!-- Optional controls -->
				  <div class="swiper-pagination"  slot="pagination"></div>
		  </swiper>
	</div>
	<div class="banner-hor-c">
		  	
	</div>
	</div>
</template>
<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
      	banner:[
      	    {link:"https://img.wesetup.cn/webIndexBannerNew.png",src:"http://g.eqxiu.com/s/JSiNdILo"},
			{link:"https://img.wesetup.cn/webIndexBannerNew29-15.jpg",src:"https://d.eqxiu.com/s/Cssq7CeG"}//, ../../static/images/banner.png
//			{link:"https://img.wesetup.cn/webIndexBannerNew.png",src:"http://g.eqxiu.com/s/JSiNdILo"}
					// 	{link:"https://img.wesetup.cn/bannerNewImg.jpg",src:"https://d.eqxiu.com/s/Cssq7CeG"},
					// {link:"https://img.wesetup.cn/webIndexBannerNew.png",src:"http://g.eqxiu.com/s/JSiNdILo"}
      	],

        swiperOption: {
//        autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
			pagination: '.swiper-pagination',
			paginationType:'bullets',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,

          onTransitionStart (swiper) {
          },
          onClick(swiper){
          	window.location.href = swiper.$(swiper.clickedSlide).children("img").attr("loc");
          }
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
	.banner-c {
		width: 100%;
		background:#fff;
	}
	.banner-c:after{
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
	.contain-visible{
		overflow: visible;
		overflow-x: hidden;
	}
	.banner-c .swiper-wrapper{
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
  .swiper-pagination{
 
  	width:100%;
  	text-align: center;
  }
	.swiper-container-horizontal>.swiper-pagination-bullets, .swiper-pagination-custom, .swiper-pagination-fraction {
		bottom:.11rem;
	}
  .swiper-pagination-bullet{
  	width:0.06rem;
  	height:0.06rem;
  	background:#fff;
  	display: inline-block;
  	border-radius: 50%;
		opacity: .4;
		position: relative;
  }
.swiper-pagination-bullet-active{
		opacity: 1;
	}

</style>