<template>
	<div class="desinerDetails" id="desinerDetails" v-if="result">
		<div  @click="back" class="goback"></div>
		<div class="designer-banner-c">
			<designer-banner :imgItems='result.banner'></designer-banner>
		        <div class="designer-info-c">
		        	<p class="name">{{result.designer_name}}<br>
		        	<span class="price">
		        		报价：{{result.designer_price}}-{{result.designer_high_price}}元/平米
		        	</span></p>
		        		
		        </div>
		</div>
		<div class="page-swiper ">
	        <div class="detail-describe-c">
	        	<div class="detail-describe-sub-c">
	        		<p class="title" v-if="!result.awards == ''">奖项</p>  
	        		<p class="content" v-if="!result.awards == ''">{{result.awards}}</p>
	        		<p class="title">设计理念</p>
	        		<p class="content">{{result.plantform_descript}}</p>
	        		<p class="title">个人简介</p>  
	        		<p class="content">{{result.descript}}</p>
	        	</div>
	        </div>
	    </div>
	    <div v-if="hasVideo" class="video-c" >
	    	<h2 class="designer-title">设计师想对你说</h2>
	    	<video-comp :selfMes='result' :ht="ht"></video-comp>
	    </div>
		<div class="caselist-c" id="caselist-c">
			<h2 class="designer-title">设计案例</h2>
		 	<router-link tag="div" class="case-detail-c"   v-for="(item,index) in result.designer_case_list" :to="'/caseDetailsNew?caseId='+item.designer_case_uid" :key='index'>
        		<img :src="item.wide_screen_image" />
        		<div class="mask"></div>
        		<div class="des">
        			<p class="case-name">{{item.premises_name}}</p>
        			<p class="case-square-style">{{item.house_type_name}} /<span v-for="style in item.style_list">{{style.style_name}} </span></p>
        		</div>
		 	</router-link>
        </div>
        <appoinent-desiner  v-show="showFlag" :desinerId="desinerId"></appoinent-desiner>
        <div class="bottom-padding">
        	
        </div>
	</div>
   
</template>

<script>
	import Vue from "vue";
//	import { MessageBox } from "mint-ui";
//	import "mint-ui/lib/style.css";
	import VueAwesomeSwiper from "vue-awesome-swiper";
	import {getDesinerDetails} from "@/api/desinerDetails";
	import videoComp from "../components/desiner/video";
	import appoinentDesiner from "@/components/appoinentDesiner";
	import designerBanner from "@/components/desiner/designerBanner";
	
	Vue.use(VueAwesomeSwiper);
	export default{
		data(){
			return{
				result:null,
				ht:document.body.clientHeight,
				hasVideo:true,
				desinerId:this.$route.params.desiner_id,
				showFlag:false
			}
		},
		 components: {
		    videoComp,
		    appoinentDesiner,
		    designerBanner
		 },
		mounted(){
			this.getDesigner();
			document.addEventListener('scroll',()=>{
		  		this.loadDesigner();
		  		this.showFlag = true;
		 	})
		},
		created(){
			var self=this;
			document.addEventListener("scroll",function(){
				var clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
				var scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
				self.showFlag = (scrollTop>=clientHeight);
			},false)
		},
		methods:{
			getDesigner:function(){
				var self = this;
				this.$nextTick(function(){
					getDesinerDetails({designer_uid:self.$route.params.desiner_id})
					.then((res)=>{
						if(res.status == 200){
							self.result = res.body.data;
//							self.result.banner = ["../../static/images/banner.png","../../static/images/banner.png","../../static/images/banner.png","../../static/images/banner.png"];
							self.hasVideo = !self.result.self_introduction_video_url == ""  ;
						}
					},(err)=>{
					
					})
				})
			},
			back:function(){
				this.$router.back(-1);
			}
		}
	}
</script>
<style  scoped="scoped">
	.goback{
		width:.13rem;
		height:.21rem;
		background:url(../../static/images/chevron left.png) ;
		display: block;
		background-size: cover;
		margin-left: 0.08rem ;
		margin-top:0.16rem;
		position: absolute;
		z-index: 1000;
	}
	.designer-banner-c{
		position: relative;
	}
	.por-des-c{
		width:100%;
		position: relative;
		/*background-color: #000;*/
		/*filter: blur(1px);*/
	}
	.por-des-c img{
		width:100%;
	}
	.desinerDetails{
		width:100%;
		position: relative;
	}
	.designer-info-c{
		width:100%;
		position:absolute;
		height:.8rem;
		bottom:0rem;
		left:0px;
		z-index: 1001;
		background: url(../../static/filter.png);
		background-size:100% ;
	}
	.designer-info-c p{
		color:#fff;
		/*width:100%;*/
		padding:0;
		margin:0px;
		padding-left:3.2%;
		/*display: inline-block;*/
	}
	.text-center{
		text-align: center;
	}
	.designer-info-c .name{
		font-size:.2rem;
		line-height:.28rem;
		
	}
	.designer-info-c .price{
		font-size:.12rem;
		line-height:.17rem;
		word-break: keep-all;
		white-space: nowrap;
	}
	
	
	.detail-describe-c{
		background:#fff;
		width:100%;
	}
	.detail-describe-sub-c{
		margin:0 4% .4rem;
	}
	.detail-describe-sub-c .title{
		font-size:.18rem;
		line-height:.25rem;
	}
	.detail-describe-sub-c .content{
		font-size:.12rem;
		line-height: .17rem;
		opacity: .54;
		color:#000;
	}
	.caselist-c{
		width:100%;
		border-top:2px solid #c9c9c9;
	}
	.case-detail-c{
		position: relative;
		height:2.5rem;
		width:100%;
		margin-bottom: .1rem;
		overflow: hidden;
	}
	.case-detail-c img{
		height: 100%;
		display: block;
		margin: 0 auto;
	}
	.case-detail-c .mask{
		position: absolute;
		bottom: 0;
		left: 0;
		width:100%;
		height:.5rem;
		background: #000;
		opacity: .4;
	}
	.case-detail-c .des{
		position: absolute;
		bottom: .04rem;
		left: 0;
		width: 100%;
	}
	.case-detail-c .des p{
		color: #fff;
		padding:0;
		margin:0;
		padding-left:4%;
	}
	.case-detail-c .des .case-name{
		font-size: .18rem;
		line-height: .25rem;
		
	}
	.case-detail-c .des .case-square-style{
		font-size: .12rem;
		line-height: .17rem;
	}
	.video-c{
		border-top:2px solid #c9c9c9;
		width:100%;
		padding-bottom:.3rem;
	}
	.designer-title{
		font-size:.18rem;
		line-height: .25rem;
		margin-top: .22rem;
		margin-bottom: .15rem;
		margin-left: .15rem;
		color:#000
	}
	.bottom-padding{
		height:.6rem;
	}
</style>
