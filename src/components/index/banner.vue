<template>
	<div class="banner-c">
			  <swiper :options="swiperOption" :not-next-tick="notNextTick" ref="mySwiper">
			    <!-- slides -->
			    <swiper-slide class="swiper-item">
			    	<img src="../../../static/images/banner.jpg" />
			    </swiper-slide>
			    <swiper-slide class="swiper-item">
			    	<img src="../../../static/images/banner.jpg" />
			    </swiper-slide>
			    <swiper-slide class="swiper-item">
			    	<img src="../../../static/images/banner.jpg" />
			    </swiper-slide>
			    <swiper-slide class="swiper-item">
			    	<img src="../../../static/images/banner.jpg" />
			    </swiper-slide>
			    <!-- Optional controls -->
			    <div class="swiper-pagination"  slot="pagination"></div>
			  </swiper>
		<div class="bottom-pad">

		</div>
	</div>

</template>
<script>
  // swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        swiperOption: {
          // swiper options 所有的配置同swiper官方api配置
          autoplay: 3000,
          grabCursor: true,
          setWrapperSize: true,
          autoHeight: true,
          pagination: '.swiper-pagination',
          paginationType:'bullets',
          paginationClickable: true,
          mousewheelControl: true,
          observeParents: true,
          // if you need use plugins in the swiper, you can config in here like this
          // 如果自行设计了插件，那么插件的一些配置相关参数，也应该出现在这个对象中，如下debugger
//        debugger: true,
          // swiper callbacks
          // swiper的各种回调函数也可以出现在这个对象中，和swiper官方一样
          onTransitionStart (swiper) {
            console.log(swiper)
          },
          onClick(swiper){
          	
          }
          // more Swiper configs and callbacks...
          // ...
        }
      }
    },
    // you can find current swiper instance object like this, while the notNextTick property value must be true
    // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
    computed: {
      swiper() {
        return this.$refs.mySwiper.swiper
      }
    },
    mounted() {
      // you can use current swiper instance object to do something(swiper methods)
      // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
      console.log('this is current swiper instance object', this.swiper)
//    this.swiper.slideTo(3, 1000, false)
    }
  }
</script>
<style>
	.banner-c {
		width: 100%;
		background: green;
	}
	
	.swiper-container {
		overflow: hidden;
		position: relative;
	}
	
	.bottom-pad {
		height: 0.2rem;
		background: #f4f4f4;
		width: 100%;
	}
	.swiper-wrapper{
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
  	height:0.2rem;
  	position:absolute;
  	width:100%;
  	bottom:0px;
  	left:0px;
  	text-align: center;
  }
  .swiper-pagination-bullet{
  	width:0.4rem;
  	height:0.04rem;
  	background:#c5bbb3;
  	display: inline-block;
  	margin: 0px 0.12rem;
  }
  .swiper-pagination-bullet-active{
  	background:#fff;
  }
</style>