<template>
	<div class="floor-c" v-if="buildingInfo">
		<div  @click="back" class="goback"></div>
		<div class="building-banner-c" :style="'height:'+wth*0.4+'px'">
			<img :src="buildingInfo.foreground_picture">
			<div class="building-des-c">
				<p class="build-name">{{buildingInfo.premises_name}}</p>
				<p class="build-addr">{{buildingInfo.premises_location}}</p>
			</div>
		</div>
		<div class="build-info-c">
			<p >物业类型:<span class="info-value">{{buildingInfo.premises_estate_type}}</span></p>
			<p >竣工时间:<span class="info-value">{{buildingInfo.premises_completed_time}}</span></p>
			<p >开&nbsp;&nbsp;发&nbsp;&nbsp;<span style="margin-left: -2px;">商:</span><span class="info-value">{{buildingInfo.premises_developer}}</span></p>
		</div>
		<div class="house-type-c" v-if="houseTypeResult">
			<router-link tag="div" class="house-type-title" :to="'/house_type_list?premises_uid='+premises_uid">
				<p>户型<span class="account">({{houseTypeResult.total}})</span></p>
			</router-link>
			<div class="house-type-banner-c">
				<housetype-banner  :houseTypeList='houseTypeResult.result'></housetype-banner>
			</div>
		</div>
		<div class="house-case-list-c">
			<router-link tag="div" class="house-type-title" :to="'/floor_case_list?premises_uid='+premises_uid">
				<p>楼盘案例<span class="account">({{caseTotal}})</span></p>
			</router-link>
			<div class="case-list-c" v-if="result">
				<router-link tag="div"   class="onecase-c" v-for="(item,index) in result"  :to="'/caseDetailsNew?case_id='+item.case_uid" :key="index">
    			<div class="case-img-c" :style="'height:'+(wth-30)*0.5+'px'" >
						<img  :src="item.case_image_url" />
						<div v-if="item.panoramagram_flag == 1" class="panoramagram">
						</div>
					</div>
					<div :class="['des-c',{'last':index == (result.length-1)}]">
						<div  class="portrait" >
							<img class="portait-img"   :src="item.head_image_url" />
						</div>
						<div class="name-theme-c">
							<p class="theme">{{item.house_type_name}}/{{item.house_area}}m<sup>2</sup>/<span v-for="st in item.style_list">{{st.style_name}} </span></p>
							<p class="name">{{item.title}}</p>
							
						</div>
					</div>
    			</router-link>
    			
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import "@/common/css/swiper.min.css";
	import VueAwesomeSwiper from "vue-awesome-swiper";
	import housetypeBanner from "../components/building/housetypeBanner";
	import {getBuildCaseType,getHouseTypeList,getBuildingInfo} from "@/api/building";
	Vue.use(VueAwesomeSwiper);
	export default{
		 components: {
		    housetypeBanner
		  },
		data(){
			return{
				intervalFun:null,
				caseList:null,
				caseTotal:null,
				result:null,
				houseTypeResult:null,
				buildingInfo:null,
				premises_uid:null,
				ht:document.body.clientHeight,
				wth:document.body.clientWidth
				
				
			}
		},
		mounted(){
			var self = this;
			self.premises_uid = this.$route.query.buildUid;
			getBuildCaseType('page_no=1&page_size=3&premises_uid='+self.premises_uid)
			.then(function(res){
				if(res.status == "200" && res.body.data){
					self.result = res.body.data.result;
					self.caseTotal = res.body.data.total;
				}
			},function(err){
				
			})
			getHouseTypeList({premisesUid:self.premises_uid})
			.then(function(res){
				if(res.status == "200"){
					self.houseTypeResult = res.body.data;
				}
			},function(err){
				
			})
			getBuildingInfo('buildingPremisesUid='+self.premises_uid )
			.then(function(res){
				if(res.status == "200"){
					self.buildingInfo = res.body.data;
//					self.intervalFun = setInterval(function(){
//						if(self.caseTotal !=null){
//							self.share();
//							clearInterval(self.intervalFun);
//						}
//					},10)
					setTimeout(function(){
						self.$nextTick(function(){
					        self.shareWx.getId();
					        self.shareWx.shareReady(self.buildingInfo.premises_name+" | 设计IN-设计师严选平台","方案:"+self.caseTotal+"个",self.buildingInfo.foreground_picture+"?imageView2/3/w/100/h/100");
					    })
					},200)
				}
			},function(){
				
			})
		},
		methods:{
			share:function(){
				this.$nextTick(function(){
			        this.shareWx.getId();
			        this.shareWx.shareReady(this.buildingInfo.premises_name+" | 设计IN-设计师严选平台","方案:"+this.caseTotal+"个",this.buildingInfo.foreground_picture+"?imageView2/3/w/100/h/100");
			    })
			},
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
		background:url(../../static/images/chevron left.png) ;
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
		font-weight:normal ;
		position: relative;
		bottom: .02rem;
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
		border-bottom:.6rem solid #f2f2f2;
		padding:0rem .15rem 0;
	}
	
	
	
	.des-c {
	  width: auto;
	  margin-top: 0.1rem;
	  padding-bottom: 0.1rem;
	  border-bottom: 1px solid #c9c9c9;
	  overflow: hidden;
	}
	.last{
		border-bottom: 0px solid #c9c9c9;
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
		position: relative;
		overflow: hidden;
	}
	.panoramagram{
		position: absolute;
		right: 6px;
		bottom: 6px;
		width: .4rem;
		height:.4rem;
		background:url(../../static/images/720icon.png) no-repeat;
		background-size:100%;
	}
	.case-img-c img{
		width:100%;
	}
</style>