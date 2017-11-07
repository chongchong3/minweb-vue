<template>
	<div class="case-horize-list-c">
		<div class="case-c">
			<div class="list-title-c">
				<div class="vertical-bar">
				</div>
				<span class="list-title">
					看设计案例
				</span>
				<a class="more">
					查看更多
				</a>
			</div>
			<div class="case-detail-list-c">
				<swiper :options="caseOption" >
			    <!-- slides -->
				    <swiper-slide class="case-item" v-for="(onecase,index) in caseList" :key="index">
			    		<div class="detail-case">
			    				<div class="img-c"  @click="jumpTo(onecase.case_h5_url)">
									<img :src="onecase.head_image_url" />
								</div>
								<div class="des-c">
									<div class="portrait">
										<img  :src="onecase.head_image_url" />
									</div>
									<div class="name-theme-c">
										<p class="theme"  @click="jumpTo(onecase.case_h5_url)">{{onecase.title}}</p>
										<p class="name">{{onecase.designer_name}}</p>
									</div>
								</div>
						</div>
				    </swiper-slide>
			  </swiper>
			</div>
		</div>
	</div>
</template>
<script>
// swiper options example:
  export default {
    name: 'carrousel',
    data() {
      return {
      	caseList:[],
        // NotNextTick is a component's own property, and if notNextTick is set to true, the component will not instantiate the swiper through NextTick, which means you can get the swiper object the first time (if you need to use the get swiper object to do what Things, then this property must be true)
        // notNextTick是一个组件自有属性，如果notNextTick设置为true，组件则不会通过NextTick来实例化swiper，也就意味着你可以在第一时间获取到swiper对象，假如你需要刚加载遍使用获取swiper对象来做什么事，那么这个属性一定要是true
        notNextTick: true,
        caseOption: {
        	pagination: 'null',
        slidesPerView: 'auto',
        paginationClickable: true,
          onTransitionStart (swiper) {
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
      this.$store
    	    .dispatch("GetCaseMes",{page_size: 6, page_no: 1})
    		.then(json => {
    			if(json.body.code == "200"){
    			this.caseList = json.body.data.list;
    		}})
      		.catch(err => {});
    },
    methods:{
    	jumpTo(url){
    		window.location.href=url;
    	}
    }
  }
</script>
<style>
	.case-horize-list-c{
		background:#fff;
		
	}
 .case-horize-list-c:after{
 		content:"";
 		height:0.09rem;
 		display: block;
		background: #f4f4f4;
 }
 .case-detail-list-c .case-item{
 	height:auto;
 }
 .case-horize-list-c .case-c{
 		margin-left:0.14rem;
 }
 .list-title-c{
 	padding-top:20px;
 	padding-bottom:16px;
 }
 .vertical-bar{
	 	height:0.12rem;
	 	width:0.04rem;
	 	background:#b2dd47;
	 	margin-right: 0.08rem;
	 	float: left;
 }
 .list-title-c:after{
 	 content:""; display:block; height:0; visibility:hidden; clear:both; 
 }
 .list-title{
 		font-size:0.12rem;
 		line-height: 0.12rem;
 		color:#000;
 		float: left;
 		font-weight: bold;
 }
 .list-title-c .more{
 	float: right;
 	margin-right:14px;
 	margin-bottom:0px;
 }
 .case-detail-list-c{
 	width:auto;
 }
 .case-detail-list-c:after{
 	content:""; display:block; height:0; visibility:hidden; clear:both; 
 }
 .case-item{
 	width:45% !important;
 	text-align: center;
    font-size: 18px;
    background: #fff;
    width: 80%;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
 }
 .detail-case{
 	float:left;
 }
 .img-c{
 	display: block;
 	margin-right:0.09rem;
 	margin-bottom:0.07rem;
 }
 .img-c img{
 	width:100%;
 }
 .des-c{
 	width:auto;
 	margin-bottom:.16rem;
 }
 .des-c:after{
 	content:""; display:block; height:0; visibility:hidden; clear:both; 
 }
 .portrait{
	
	
	float:left;
	margin-right: 4px;
 }
 .portrait img{
 	width:32px;
	height:32px;
	border-radius: 16px;
	border:none;
 }
 .name-theme-c{
 	float: left;
 }
 .name-theme-c p{
 	padding: 0;
 	margin: 0;
 	text-align: left;
 }
 .name-theme-c p.name{
 	font-size:.11rem;
 	color:#999;
 }
 .name-theme-c p.theme{
 	font-size:.14rem;
 	line-height: .18rem;
 	width:1.3rem;
 	overflow: hidden;
 	text-overflow: ellipsis;
 	white-space: nowrap;
 	margin-bottom:0.04rem;
 }
</style>