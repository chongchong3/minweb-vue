<template>
	<div id="designHorizeList" class="designer-horize-list-c" ref="designHorizeList">
		<div class="designer-c">
			<div  class="designer-detail-list-c">
				<swiper :options="designerOption" >
			    <!-- slides -->
			    <swiper-slide class="designer-item"   v-for="(item,index) in houseTypeList" :key="index">
			    	<div  tag="div" class="detail-designer">
						<router-link  tag="div" class="img-c" :to="'/housetype?houseUid='+item.house_type_uid+'&premisesUid='+item.building_premises_uid" >
							<img  :src="item.house_type_img_url" />
							<p class="house-area">{{item.house_type_pattern}}/{{item.house_type_area}}m<sup>2</sup></p>
							<p class="house-abtype">{{item.house_type_name}}</p>
						</router-link>
			    	</div>
			    </swiper-slide>
			  </swiper>
			</div>
		</div>
	</div>
</template>
<script>
export default {
  props: ["houseTypeList"],
  data() {
    return {
      designerList: [],
      designItemWidth:0,
      // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
      // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
      notNextTick: true,
      designerOption: {
        pagination: "null",
        slidesPerView: "auto",
        paginationClickable: true,
//       loop: true,
//      loopedSlides:2,
        onClick:(swiper,e)=>{
        	this.$router.push({path:'.'+e.target.getAttribute('to')});
        }
        // more Swiper configs and callbacks...
        // ...
      }
    };
  },
  // you can find current swiper instance object like this, while the notNextTick property value must be true
  // 如果你需要得到当前的swiper对象来做一些事情，你可以像下面这样定义一个方法属性来获取当前的swiper对象，同时notNextTick必须为true
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
  },
  methods: {
   
  }
};
</script>
<style scoped="scoped">
.designer-horize-list-c {
  background: #fff;
}
.designer-detail-list-c .designer-item {
  height: auto;
  margin-right:.1rem;
}
.designer-horize-list-c .designer-c {
  /*margin-left: 0.14rem;*/
}
.list-title-c {
    padding-top: .14rem;
    height:.36rem;
    text-align: center;
    border-bottom: 1px solid #c9c9c9;
}

.list-title {
  font-size: 0.18rem;
  line-height: 0.22rem; 
  display: inline-block;
  text-align: left;
  background: url(../../../static/images/more.png) right no-repeat;
  background-size: .15rem;
  background-position-y: 4px;
  width:.94rem;
  font-weight: bold;
}
.vertical-bar {
  height: .15rem;
    width: .045rem;
    background: #b2dd47;
    margin-right: .05rem;
  float: left;
}

.designer-detail-list-c {
  width: auto;
}
.designer-detail-list-c:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.designer-item {
  text-align: center;
  font-size: 18px;
  background: #fff;
  width: 36.5%;
}
.detail-designer {
  width: 100%;
  float: left;
}
.img-c{
	overflow: hidden;
}
.img-c img {
  width: 100%;
  display: block;
}
.img-c p{
	padding:0;
	margin:0;
	text-align: left;
}
.img-c .house-area{
	font-size: .13rem;
	margin-top:.1rem;
	line-height: .18rem;
	margin-bottom:.02rem;
}
.img-c .house-abtype{
	color: rgba(0,0,0,.54);
	font-size:.12rem;
	line-height: .17rem;
}
.design-des-c p {
  text-align: left;
  margin: 0;
  padding: 0;
}
.design-des-c {
  width: auto;
  margin-bottom: 0.16rem;
}
.design-des-c:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.design-des-c .name {
  font-size: 0.16rem;
  line-height: 0.22rem;
  margin-bottom: 0.04rem;
  margin-top:.08rem;
}
.design-des-c .profession {
  font-size: 0.12rem;
  line-height: 0.16rem;
  color: #999;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 2px;
}
.design-des-c .level {
  color: #5fa333;
  font-size: 0.11rem;
  line-height: 0.14rem;
}
</style>