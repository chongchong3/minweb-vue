<template>
	<div class="floor-c">
		<div  @click="back" class="goback"></div>
		<div class="building-banner-c" :style="'height:'+wth*0.4+'px'">
			<img src="../../dist/static/images/banner.jpg">
			<div class="building-des-c">
				<p class="build-name">世贸天辰</p>
				<p class="build-addr">艮山西路1005号</p>
			</div>
		</div>
		<div class="build-info-c">
			<p >物业类型:<span class="info-value">公寓</span></p>
			<p >竣工时间:<span class="info-value">公寓</span></p>
			<p >开&nbsp;&nbsp;发&nbsp;&nbsp;<span style="margin-left: -2px;">商:</span><span class="info-value">公寓</span></p>
		</div>
		<div class="house-type-c">
			<div class="house-type-title">
				<p>户型<span class="account">(6)</span></p>
			</div>
			<div class="house-type-banner-c">
				<housetype-banner></housetype-banner>
			</div>
		</div>
		<div class="house-case-list-c">
			<div class="house-type-title">
				<p>楼盘案例<span class="account">(6)</span></p>
			</div>
			<div class="case-list-c">
				<div  class="onecase-c" >
    				<div class="case-img-c" >
						<img  src="../../static/images/banner.jpg" />
					</div>
					<div class="des-c">
						<div  class="portrait" tag="div">
							<img class="portait-img"   src="../../static/images/caseDetails/smCase2.png" />
						</div>
						<div class="name-theme-c">
							<p class="theme">4室2厅2卫/128m<sup>2</sup>/欧式</p>
							<p class="name">荷兰武极管</p>
							
						</div>
					</div>
    			</div>
    			<div  class="onecase-c" >
    				<div class="case-img-c" >
						<img  src="../../dist/static/images/banner.jpg" />
					</div>
					<div class="des-c">
						<div  class="portrait" tag="div">
							<img class="portait-img"   src="../../static/images/caseDetails/smCase2.png" />
						</div>
						<div class="name-theme-c">
							<p class="theme">4室2厅2卫/128m<sup>2</sup>/欧式</p>
							<p class="name">荷兰武极管</p>
							
						</div>
					</div>
    			</div>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import "@/common/css/swiper.min.css";
	import VueAwesomeSwiper from "vue-awesome-swiper";
	import housetypeBanner from "../components/building/housetypeBanner";
	import {getBuildCaseType,getHouseTypeList} from "@/api/building";
	Vue.use(VueAwesomeSwiper);
	export default{
		 components: {
		    housetypeBanner
		  },
		data(){
			return{
				result:null,
				ht:document.body.clientHeight,
				wth:document.body.clientWidth,
				banner:[
		      	    {link:"https://img.wesetup.cn/webIndexBannerNew.png",src:"http://g.eqxiu.com/s/JSiNdILo"},
					{link:"https://img.wesetup.cn/webIndexBannerNew29-15.jpg",src:"https://d.eqxiu.com/s/Cssq7CeG"}//, ../../static/images/banner.png
		      	],
				swiperOption: {
		          grabCursor: true,
		          setWrapperSize: true,
		          autoHeight: true,
			      pagination: null,
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
		mounted(){
			var self = this;
			getBuildCaseType('page_no=1&page_size=3&premises_uid=43207696970363462')
			.then(function(res){
				
			},function(err){
				
			})
			getHouseTypeList({premisesUid:43207696967626320})
			.then(function(res){
				if(res.status == "200"){
					self.result = res.body.data;
				}
			})
		},
		methods:{
			back:function(){
				this.$router.back(-1);
			}
		},
		
	}
</script>

<style scoped="scoped">
	p{
		padding:0;
		margin:0;
	}
	.floor-c{
		position: relative;
	}
	.goback{
		width:.13rem;
		height:.21rem;
		background:url('../../static/images/chevron left.png') ;
		display: block;
		background-size: cover;
		margin-left: 0.14rem ;
		margin-top:0.16rem;
		position: absolute;
		z-index: 1000;
	}
	.building-banner-c{
		position: relative;
		overflow: hidden;
	}
	.building-banner-c img{
		width:100%;
	}
	.building-des-c{
		position: absolute;
		width:100%;
		height:.42rem;
		left:.15rem;
		bottom:.06rem;
	}
	.building-des-c p{
		padding:0;
		margin:0;
	}
	.build-name{
		font-size:.18rem;
		line-height: .25rem;
		font-weight: bold;
		color: rgba(255,255,255,.86);
	}
	.build-addr{
		font-size:.12rem;
		line-height: .17rem;
		color: rgba(255,255,255,.76);
	}
	.build-info-c{
		border-bottom:.1rem solid #f2f2f2;
		padding:.2rem .15rem;
	}
	.build-info-c p{
		color: rgba(0,0,0,.54);
		font-size:.12rem;
		line-height: .17rem;
		padding-bottom:.08rem;
	}
	.build-info-c p:last-child{
		padding-bottom: 0;
	}
	.info-value{
		color: rgba(0,0,0,.96);
		font-size:.12rem;
		line-height: .17rem;
		padding-left:.06rem;
	}
	.house-type-c{
		border-bottom:.1rem solid #f2f2f2;
		width:100%;
	}
	.house-type-title{
		padding: .1rem .16rem .08rem .15rem;
		border-bottom: 1px solid #e5e5e5;
	}
	.house-type-title p{
		color: rgba(0,0,0,1);
		font-size: .16rem;
		line-height: .22rem;
		font-weight: bold;
		background: url(../../static/images/right-arrow.png) right no-repeat;
		background-size: .1rem;
	}
	.house-type-title .account{
		color: rgba(0,0,0,.64);
		font-size: .12rem;
		line-height: .17rem;
		margin-left:.04rem;
		vertical-align: middle;
	}
	.house-type-banner-c{
		padding:.1rem 0 .21rem .15rem;
		width: auto;
	}
	.housetype-item{
		width:36.5% !important;
		margin-right: .1rem;
	}
	.housetype-item-c{
		width:100%;
		float: left;
	}
	.housetype-item-c img{
		width:100%;
		
	}
	.case-list-c{
		border-bottom:.1rem solid #f2f2f2;
		padding:0rem .15rem 0;
	}
	
	
	
	.des-c {
	  width: auto;
	  margin-top: 0.1rem;
	  padding-bottom: 0.1rem;
	  border-bottom: 1px solid #c9c9c9;
	  overflow: hidden;
	}
	.des-c:after {
	  content: "";
	  display: block;
	  height: 0;
	  visibility: hidden;
	  clear: both;
	}
	.portrait {
	  width: 0.4rem;
	  float: left;
	}
	.portrait img {
	  width: 100%;
	  height:.4rem;
	  width:.4rem;
	  border-radius:50%;
	  border: none;
	  display: inline-block;
	
	}
	.name-theme-c {
	  margin-left: 0.47rem;
	  margin-top:.02rem;
	}
	.name-theme-c p {
	  padding: 0;
	  margin: 0;
	  text-align: left;
	}
	.name-theme-c p.name {
	  font-size: 0.12rem;
	  line-height: .17rem;
	  color: rgba(0,0,0,.54);
	}
	.name-theme-c p.theme {
	  font-size: 0.16rem;
	  line-height: 0.22rem;
	  overflow: hidden;
	  text-overflow: ellipsis;
	  white-space: nowrap;
	}
	.onecase-c{
		margin-top:.1rem;
		width:100%;
	}
	.case-img-c{
		width:100%;
	}
	.case-img-c img{
		width:100%;
	}
</style>