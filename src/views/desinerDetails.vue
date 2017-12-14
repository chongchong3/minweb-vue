<template>
	<div class="desinerDetails" id="desinerDetails">
		<div class="page-swiper " v-touch:swipeup="up" v-touch:swipedown="down">
	        <div class="por-des-c" :style="{background: 'url(' + result.background_img + ') no-repeat'}" >
	        	<!--//v-bind:style="background:url(+result.background_img+)"-->
	        	<div class="filter-c"></div>
		        <div id="portrait" :style="{backgroundImage:'url(' + result.personality_photo_url   + ') '}" class="portrait-c" >
		        	<!--style="background:url(../../static/images/demo-designer.png) no-repeat;background-size:cover"-->
		        	<!--:style="{background:'url(' + result.full_body_shot_url + ') no-repeat;background-size:cover'}"--> 
		        </div>
		        
		        <div class="designer-info-c">
		        	<p class="name">{{result.designer_name}}</p><br>
		        	<p class="price">报价：{{result.designer_price}}-{{result.designer_high_price}}/平米</p>
		        </div>
	        </div>
	        <div class="up-icon"></div>
	        <div class="detail-describe-c">
	        	<div class="detail-describe-sub-c">
	        		<p class="title">奖项</p>awards  
	        		<p class="content">{{result.awards}}</p>
	        		<p class="title">设计理念</p>
	        		<p class="content">{{result.plantform_descript}}</p>
	        		<p class="title">个人简介</p>  
	        		<p class="content">{{result.descript}}</p>
	        	</div>
	        </div>
	    </div>
		 <div class="caselist-c" isScroll="true" v-touch:swipeup="up" v-touch:swipedown="down">
		 	<div class="caselist-down-icon"></div>
		 	<router-link tag="div" class="case-detail-c" v-for="item in result.designer_case_list" :to="'/caseDetailsNew/'+item.designer_case_uid">
        		<img :src="item.cover_image" />
        		<div class="mask"></div>
        		<div class="des">
        			<p class="case-name">{{item.designer_name}}</p>
        			<p class="case-square-style">{{item.house_type_name}}</p>
        		</div>
		 	</router-link>
        	<!--<div class="case-detail-c" v-for="item in result.designer_case_list"> 
        	</div>-->
        	<!--<div class="case-detail-c">
        		<img src="../../static/images/demo-bg.png" />
        		<div class="mask"></div>
        		<div class="des">
        			<p class="case-name">龙山湖</p>
        			<p class="case-square-style">200平米 / 现代</p>
        		</div>
        	</div>-->
        </div>
	</div>
   
</template>
<style  scoped="scoped">
	.filter-c{
		width:100%;
		height:100%;
		position: absolute;
		background: url(../../static/images/filter.png) repeat;
		/*z-index: 10;*/
	}
	.por-des-c{
		width:100%;
		height:100%;
		position: absolute;
		z-index: 999;
	}
	.desinerDetails{
		width:100%;
		height:100%;
		position: relative;
		overflow: hidden;
	}
	.portrait-c{
		width:100%;
		height:100%;
		margin:0px auto;
		position: absolute;
		background-size: cover;
		background-repeat: no-repeat;
	}
	.portrait-c img{
		width:100%;
	}
	.designer-info-c{
		width:100%;
		position:absolute;
		bottom:.4rem;;
		left:0px;
		z-index: 11;
	}
	.designer-info-c p{
		color:#fff;
		/*width:100%;*/
		padding:0;
		margin:0px;
		padding-left:3.2%;
		display: inline-block;
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
	}
	
	.up-icon{
		position:absolute;
		bottom:0px;
		left:0px;
		height: .4rem;
		width:100%;
		background:url(../../static/images/uparrow.png) center no-repeat;
		z-index: 10;
	}
	.caselist-down-icon{
		position:absolute;
		top:0px;
		left:0px;
		height: .28rem;
		width:100%;
		background:url(../../static/images/dowarrow.png) center no-repeat;
		z-index: 10;
	}
	.detail-describe-c{
		background:#fff;
		width:100%;
		position:absolute;
		bottom:-100%;
		left:0px;
		z-index: 9;
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
	}
	.case-detail-c{
		position: relative;
		height:2.5rem;
		width:100%;
		margin-bottom: .1rem;
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
</style>

<script>
	import Vue from "vue";
	import touchdirective from "../components/touchdirective";
	import $ from 'jquery';
	import {getDesinerDetails} from "@/api/desinerDetails";
	touchdirective(Vue);
	export default{
		data(){
			return{
				step:0,
				result:{}
			}
		},
		mounted(){
			getDesinerDetails({designer_uid:this.$route.params.desiner_id})
			.then((res)=>{
				if(res.status == 200){
					this.result = res.body.data;
				}
			},(err)=>{
				
			})
//			document.addEventListener('touchmove', function(e){e.preventDefault()}, false);
		},
		created(){
			
		},
		methods:{
			getScroll:function(){
				var clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
				var scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
				var scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
				return (scrollTop + clientHeight) >= (scrollHeight)
			},
			up:function(){
				if(this.step == 0){
					this.animateUp();
				}else if(this.step == 1){
					this.showList();
				}
			},
			down:function(){
				if(this.step == 1){
					this.animateDown();
				}else if(this.step == 2 && $('body').scrollTop() <100){//&& $('body').scrollTop() == 0
//					alert($('body').scrollTop())
					this.hideList();
					$(".desinerDetails").css("overflow","hidden");
				}
			},
			hideList:function(){
				$(".por-des-c").animate({
					'top':"0",
				})
				$(".detail-describe-c").animate({
					'bottom':"0"
				})
				$(".up-icon").animate({
					'bottom':"0",
				})
				$(".caselist-c").animate({
					'bottom':"-100%",
				})
				this.step = 1;
			},
			showList:function(){
				$(".por-des-c").animate({
					'top':"-100%",
				})
				$(".detail-describe-c").animate({
					'bottom':"100%",
				})
				$(".up-icon").animate({
					'bottom':"100%",
				})
				$(".caselist-c").animate({
					'bottom':"0",
				})
				this.step = 2;
				setTimeout(function(){
					$(".desinerDetails").css("overflow","visible");
				},100)
			},
			animateDown:function(){
				$(".por-des-c").animate({
					'height':"100%",
					"padding-top":"0%"
				})
				$("#portrait").animate({
					'width':'100%',
					'height':'100%',
					'border-radius':'0',
					"margin-top":"0",
					"margin-left":"0"
				})
				$(".designer-info-c p").animate({
					"padding-left":"3.2%"
				})
				$(".price").animate({
					'font-size':'.12rem'
				})
				$(".detail-describe-c").animate({
					"bottom":"-100%"
				})
				this.step = 0;
			},
			animateUp:function(){
				$(".por-des-c").animate({
					'height':"40%",
				})
				$("#portrait").animate({
					'width':'1rem',
					'height':'1rem',
					'border-radius':'50%',
					"margin-top":"15%",
					"margin-left":($(window).width()-100)/2
				})
				
				var wth = $($(".designer-info-c p")[0]).width();
				$(".price").animate({
					"padding-left":($(window).width()-wth)/2,
					'font-size':'.16rem'
				})
				$(".designer-info-c .name").animate({
					"padding-left":($(window).width()-wth)/2
				})
				
				$(".detail-describe-c").animate({
					"bottom":"0",
					"height":"60%"
				})
				this.step = 1;
			}
		}
	}
</script>