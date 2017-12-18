<template>
	<div class="desinerDetails" id="desinerDetails">
		<div class="page-swiper " v-touch:swipeup="up" v-touch:swipedown="down">
			<div isScroll="true" @click="back" class="goback"></div>
	        <div class="por-des-c" :style="{backgroundImage: 'url(' + result.background_img + '?imageMogr2/auto-orient/interlace/1/blur/26x10/quality/85|imageslim)'}" >
		        <div id="portrait" :style="{backgroundImage:'url(' + result.full_body_shot_url   + ') '}" class="portrait-c" >
		        </div>
		        
		        <div class="designer-info-c">
		        	<p class="name">{{result.designer_name}}<br>
		        	<span class="price">
		        		报价：{{result.designer_price}}-{{result.designer_high_price}}元/平米
		        	</span></p>
		        		
		        </div>
	        </div>
	        <div class="up-icon"></div>
	        <div class="detail-describe-c">
	        	<div class="detail-describe-sub-c">
	        		<p class="title">奖项</p>  
	        		<p class="content">{{result.awards}}</p>
	        		<p class="title">设计理念</p>
	        		<p class="content">{{result.plantform_descript}}</p>
	        		<p class="title">个人简介</p>  
	        		<p class="content">{{result.descript}}</p>
	        	</div>
	        </div>
	    </div>
	    <div v-if="hasVideo" class="video-c" @transPlayer="getPlayer"  v-touch:swipeup="up" v-touch:swipedown="down">
	    	<video-comp :selfMes='result' :ht="ht"></video-comp>
	    </div>
		<div class="caselist-c" id="caselist-c" v-touch:swipeup="disableScroll" v-touch:swipedown="disableScroll">
		 	<div class="caselist-down-icon"></div>
		 	<router-link tag="div" class="case-detail-c" isScroll="true" v-touch:swipeup="up" v-touch:swipedown="down" v-for="(item,index) in result.designer_case_list" :to="'/caseDetailsNew?caseId='+item.designer_case_uid" :key='index'>
        		<img :src="item.wide_screen_image" />
        		<div class="mask"></div>
        		<div class="des">
        			<p class="case-name">{{item.premises_name}}</p>
        			<p class="case-square-style">{{item.house_type_name}} /<span v-for="style in item.style_list">{{style.style_name}} </span></p>
        		</div>
		 	</router-link>
        </div>
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
   
</template>
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
		background-size: 100%;
		background-repeat: no-repeat;
		/*background-color: #000;*/
		/*filter: blur(1px);*/
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
		background-size: 100%;
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
		z-index: 999;
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
		z-index: 998;
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
		height:100%;
		overflow: scroll;
		overflow-x: hidden;
		display: none;
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
	.video-c{
		width:100%;
		height:100%;
		z-index: 997;
		position: absolute;
		bottom:-100%;
	}
</style>

<script>
	import Vue from "vue";
	import touchdirective from "../components/touchdirective";
	import $ from 'jquery';
	import {getDesinerDetails} from "@/api/desinerDetails";
	import videoComp from "../components/desiner/self";
	touchdirective(Vue);
	export default{
		 components: {
		    videoComp
		 },
		data(){
			return{
				step:0,
				result:{},
				ht:$(window).height(),
				player:null,
				hasVideo:true
			}
		},
		mounted(){
			
			getDesinerDetails({designer_uid:this.$route.params.desiner_id})
			.then((res)=>{
				if(res.status == 200){
					this.result = res.body.data;
					this.hasVideo = !this.result.self_introduction_video_url == ""  ;
				}
			},(err)=>{
				
			})
			var self = this;
			if(navigator.userAgent.toLowerCase().indexOf("android")>-1){
				document.getElementById('caselist-c').addEventListener('scroll', function(e){
					e.preventDefault();
					self.down();
					}, false);
			}
		},
		created(){
			
		},
		methods:{
			back:function(){
				this.$router.back(-1);
			},
			disableScroll:function(){
				return false;
			},
			getPlayer:function(player){
				this.player = player;
			},
			getScroll:function(){
				var clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
				var scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
				var scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
				return (scrollTop + clientHeight) >= (scrollHeight)
			},
			hideListwithoutVideo:function(){
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
				}).hide();
				this.step = 1;
			},
			showListwithoutVideo:function(){
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
				}).show()
				this.step = 2;
				setTimeout(function(){
					$(".caselist-c").css("overflow","scroll");
				},100)
			},
			animateDownwithoutVideo:function(){
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
				}).css("textAlign","left")
				$(".price").animate({
					'font-size':'.12rem'
				})
				$(".detail-describe-c").animate({
					"bottom":"-100%"
				})
				this.step = 0;
			},
			animateUpwithoutVideo:function(){
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
					'font-size':'.16rem'
				})
				$(".designer-info-c .name").animate({
					"padding-left":($(window).width()-wth)/2,
					"text-align":"center"
				}).css("textAlign","center")
				
				$(".detail-describe-c").animate({
					"bottom":"0",
					"height":"60%"
				})
				this.step = 1;
			},
			
			
			up:function(){
				if(this.hasVideo){
					
					//step 分四个状态，初始状态为0，当手指在屏幕上上划时，由0变为1，转变为圆形头像图界面，再上划时，1变为2，动画至视频播放，2变为3，则是显示案例列表
					if(this.step == 0){
						this.animateUp();
						this.step = 1;
					}else if(this.step == 1){
						this.showVideo();
						this.step = 2;
					}else if(this.step ==2){
						this.hideVideo();
						this.showList();
						this.step = 3;
					}
				}else{
					if(this.step == 0){
						this.animateUpwithoutVideo();
					}else if(this.step == 1){
						this.showListwithoutVideo();
					}
				}
			},
			down:function(){
				if(this.hasVideo){
					if(this.step == 1){
						this.animateDown();
						this.step = 0;
					}else if(this.step == 2){//&& $('body').scrollTop() == 0
						this.hideVideo(1);
						this.animateUp();
						this.step = 1;
					}else if(this.step == 3 && $('.caselist-c').scrollTop() <=0){
//						alert($('.caselist-c').scrollTop())
//						alert($($('.case-detail-c')[0]).scrollTop())
						this.showVideo();
						this.hideList();
//						$(".caselist-c").css("overflow","hidden");
						this.step =2;
					}
				}else{
					if(this.step == 1){
						this.animateDownwithoutVideo();
					}else if(this.step == 2 && $('.caselist-c').scrollTop() <=0){//&& $('body').scrollTop() == 0
					
	//					alert($('body').scrollTop())
						this.hideListwithoutVideo();
//						$(".caselist-c").css("overflow","hidden");
					}
				}
			},
			showVideo:function(){
				if(this.step == 1){
					$(".por-des-c").animate({
						'top':"-100%",
					})
					$(".detail-describe-c").animate({
						'bottom':"100%",
					})
					$(".up-icon").animate({
						'bottom':"100%",
					})

				}else if(this.step == 3){
					$(".caselist-c").animate({
						'bottom':"-100%",
					}).hide();
					
				}
				$(".video-c").animate({
					'bottom':"0",
				})
				$(".vjs-tech")[0].play();
//				setTimeout(function(){
//					$(".desinerDetails").css("overflow","visible");
//				},100)
			},
			hideVideo:function(flag){
				if(this.step == 1){
					$(".por-des-c").animate({
					'top':"0",
					})
					$(".detail-describe-c").animate({
						'bottom':"0"
					})
					$(".up-icon").animate({
						'bottom':"0",
					})
					$(".video-c").animate({
						'bottom':"-100%",
					})
				}else if(this.step == 2){
					var bottom ="100%";
					if(flag){
						bottom ="-100%";
					}
					$(".video-c").animate({
						'bottom':bottom
					})
				}
				$(".vjs-tech")[0].pause();
				
				
			},
			hideList:function(){
				$(".vide-c").animate({
					'bottom':"0",
				})
				$(".caselist-c").animate({
					'bottom':"-100%",
				}).hide();
			},
			showList:function(){
				$(".vide-c").animate({
					'bottom':"100%",
				})
				$(".caselist-c").animate({
					'bottom':"0",
				}).show()
//				setTimeout(function(){
//					$(".caselist-c").css("overflow","scroll");
//				},100)
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
				}).css("textAlign","left")
				$(".price").animate({
					'font-size':'.12rem'
				})
				$(".detail-describe-c").animate({
					"bottom":"-100%"
				})
			},
			animateUp:function(){
				$(".por-des-c").animate({
					'height':"40%",
					"top":"0"
				})
				$("#portrait").animate({
					'width':'1rem',
					'height':'1rem',
					'border-radius':'50%',
					"margin-top":"15%",
					"margin-left":($(window).width()-100)/2
				})
				$(".up-icon").animate({
					'bottom':"0",
				})
				var wth = $($(".designer-info-c p")[0]).width();
				$(".price").animate({
					'font-size':'.16rem'
				})
				$(".designer-info-c .name").animate({
					"padding-left":($(window).width()-wth)/2,
					"text-align":"center"
				}).css("textAlign","center")
				
				$(".detail-describe-c").animate({
					"bottom":"0",
					"height":"60%"
				})
			}
		}
	}
</script>