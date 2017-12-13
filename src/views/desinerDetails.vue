<template>
    <div class="page-swiper desinerDetails" v-touch:swipeup="animateFun" v-touch:swipedown="animateDown">
        <div class="por-des-c" style="background:url(../../static/images/demo-bg.png)">
	        <div id="portrait" class="portrait-c" style="background:url(../../static/images/demo-designer.png) no-repeat;background-size:cover" >
	        	<!--<img src="../../static/images/demo-designer.png" />-->
	        </div>
	        <div class="designer-info-c">
	        	<p class="name">马丁西科赛斯</p><br>
	        	<p class="price">报价：200/平米</p>
	        </div>
        </div>
        <div class="up-icon"></div>
        <div class="detail-describe-c">
        	<div class="detail-describe-sub-c">
        		<p class="title">奖项</p>
        		<p class="content">西湖设计节银奖，银川设计大赛金奖，草莓设计师邀请赛金奖，柏林设计节特别奖</p>
        		<p class="title">设计理念</p>
        		<p class="content">实拍电影导演、企业家、剧本作家。出生于山口县宇部</p>
        		<p class="title">个人简介</p>
        		<p class="content">实拍电影导演、企业家、剧本作家。出生于山口县宇部市，毕业于山口县立宇部高等学校、大阪艺术大学艺术学部映像计划学科。代表作为《新世纪福音战士》、《不思议之海的娜迪娅》等</p>
        	</div>
        </div>
        <div class="caselist-c">
        	
        </div>
    </div>
</template>
<style  scoped="scoped">
	.por-des-c{
		width:100%;
		height:100%;
		position: relative;
	}
	.desinerDetails{
		width:100%;
		height:100%;
		position: relative;
	}
	.portrait-c{
		width:100%;
		height:100%;
		margin:0px auto;
	}
	.portrait-c img{
		width:100%;
	}
	.designer-info-c{
		width:100%;
		position:absolute;
		bottom:.4rem;;
		left:0px;
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
</style>

<script>
	import Vue from "vue";
	import touchdirective from "../components/touchdirective";
	import $ from 'jquery';
	touchdirective(Vue);
	export default{
		data(){
			return{
				
			}
		},
		created(){
			document.addEventListener('touchmove', function(e){e.preventDefault()}, false);
		},
		methods:{
			animateDown:function(){
				$(".por-des-c").animate({
					'height':"100%",
					"padding-top":"0%"
				})
				$("#portrait").animate({
					'width':'100%',
					'height':'100%',
					'border-radius':'0'
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
			},
			animateFun:function(){
				$(".por-des-c").animate({
					'height':"30%",
					"padding-top":"15%"
					
				})
				$("#portrait").animate({
					'width':'1rem',
					'height':'1rem',
					'border-radius':'50%'
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
			}
		}
	}
</script>