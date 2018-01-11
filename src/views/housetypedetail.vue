<template>
	<div class="floor-c" v-if="houseInfo">
		<div  @click="back" class="goback"></div>
		<div class="housetype-banner-c" :style="'height:'+wth*2/3+'px'">
			<img :src="houseInfo.house_type_img_url">
			<div class="housetype-des-c">
				<p class="build-name">{{houseInfo.house_type_pattern}}</p>
			</div>
		</div>
		<div class="build-info-c">
			<p >户型面积:<span class="info-value">{{houseInfo.house_type_area}}m<sup>2</sup></span></p>
			<p >户型分布:<span class="info-value">{{houseInfo.house_type_distribute}}</span></p>
			<p >楼&nbsp;&nbsp;&nbsp;盘&nbsp;&nbsp;&nbsp;&nbsp;:</span><span class="info-value">{{houseInfo.premises_name}}</span></p>
		</div>
		<div class="house-type-c" v-if="houseTypeArr">
			<div class="house-type-title">
				<p class="nomore">户型分析</p>
			</div>
			<div class="house-type-banner-c">
				<div :class="['house-analysis',{'analysis-visible':!isCollpase}]">
					{{houseInfo.house_type_analyze}}
				</div>
				<div  class="mask-c" v-if="showColFlag&&isCollpase">
					<div class="analysis-mask">
					</div>
				</div>
				<div v-if="showColFlag"  @click="colExtendFun"  :class="['collpase-extend-btn',{'collpase-bg':!isCollpase}]">
				</div>
			</div>
		</div>
		<div class="house-case-list-c" v-if="result">
			<div class="house-type-title">
				<p>户型案例<span class="account">({{caseTotal}})</span></p>
			</div>
			<div class="case-list-c">
				
				<router-link tag="div"  class="onecase-c" v-for="(item,index) in result"  :to="'/caseDetailsNew?case_id='+item.case_uid" :key="index">
    				<div class="case-img-c" >
						<img  :src="item.case_image_url" />
						<!--<img src="../../dist/static/images/banner.jpg" />-->
						<div v-if="item.panoramagram_flag == 1" class="panoramagram">
						</div>
					</div>
					<div  :class="['des-c',{'last-case':index == (result.length-1) }]">
						<div  class="portrait" tag="div">
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
		<div class="house-type-c house-another" v-if="houseTypetotal>0">
			<div class="house-type-title">
				<p>楼盘其他户型<span class="account">({{houseTypetotal}})</span></p>
			</div>
			<div class="house-type-banner-c">
				<housetype-banner :buildingName='buildingName' :houseTypeList='houseTypeArr'></housetype-banner>
			</div>
		</div>
	</div>
</template>

<script>
	import Vue from "vue";
	import "@/common/css/swiper.min.css";
	import VueAwesomeSwiper from "vue-awesome-swiper";
	import housetypeBanner from "../components/building/housetypeBanner";
	import {getBuildCaseType,getHouseTypeList,getHouseTypeInfo} from "@/api/building";
	Vue.use(VueAwesomeSwiper);
	export default{
		 components: {
		 	housetypeBanner
		  },
		data(){
			return{
				buildingName:'',
				houseInfo:null,
				houseTypeUid:null,
				showColFlag:false,
				isCollpase:true,
				caseList:null,
				caseTotal:null,
				result:null,
				houseTypetotal:null,
				houseTypeArr:[],
				buildingInfo:null,
				ht:document.body.clientHeight,
				wth:document.body.clientWidth,
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
		created(){
			
		},
		watch:{
			 "$route": "getData"
		},
		mounted(){
			this.getData();
		},
		methods:{
			getData:function(){
				var self = this;
				this.houseTypeUid = this.$route.query.houseUid;
				var premisesUid = this.$route.query.premisesUid;
	//			this.buildingName = this.$route.query.buildingName;
				getBuildCaseType('page_no=1&page_size=100000&house_type_uid='+this.houseTypeUid)
				.then(function(res){
					if(res.status == "200"){
						self.result = res.body.data.result;
						self.caseTotal = res.body.data.total;
					}
				},function(err){
					
				})
				getHouseTypeList({premisesUid:premisesUid})
				.then(function(res){
					if(res.status == "200"){
						self.houseTypeArr = [];
						self.houseTypetotal = res.body.data.total-1;
						var tempItems = res.body.data.result;
						for(let i=0;i<tempItems.length;i++){
							if(tempItems[i].house_type_uid != self.houseTypeUid){
								self.houseTypeArr.push(tempItems[i]);
							}
						}
					}
				},function(err){
					
				})
				getHouseTypeInfo('houseTypeUid='+this.houseTypeUid)
				.then(function(res){
					if(res.status == "200"){
						self.houseInfo = res.data.data;
						self.$nextTick(function(){
							document.title="世茂天宸 | "+self.houseInfo.house_type_name;
							if(document.querySelector(".house-analysis").offsetHeight>80){
								self.showColFlag = true;
								document.querySelector(".house-analysis").style.height = ".8rem";
							}
					        self.shareWx.getId();
					        self.shareWx.shareReady(self.houseInfo.premises_name+','+self.houseInfo.house_type_pattern+" | 设计IN-设计师严选平台",self.houseInfo.house_type_analyze,self.houseInfo.house_type_img_url+"?imageView2/3/w/100/h/100");
						})
					}
				},function(){
					
				})
			},
			back:function(){
				this.$router.back(-1);
			},
			colExtendFun:function(){
				if(this.isCollpase){
					this.isCollpase = false;
				}else{
					this.isCollpase = true;
				}
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
	.housetype-banner-c{
		position: relative;
		overflow: hidden;
	}
	.housetype-banner-c img{
		width:100%;
	}
	.housetype-des-c{
		position: absolute;
		width:100%;
		height:.7rem;
		left:0rem;
		bottom:0rem;
		padding-left:.15rem;
		background:url(../../static/images/filter.png);
	}
	.housetype-des-c p{
		padding:0;
		margin:0;
	}
	.house-analysis{
		font-size: .14rem;
		line-height:.2rem;
		/*max-height:.8rem;*/
		overflow: hidden;
		z-index: -1;
		position: relative;
	}
	.analysis-visible{
		height:auto;
	}
	.analysis-mask{
		/*background:-moz-linear-gradient(bottom,rgba(255,255,255,.1),rgba(255,255,255,0));
		background: -webkit-gradient(linear,0 top,0 bottom,from(rgba(255,255,255,0)),to(#fff));
		background:-o-linear-gradient(bottom,rgba(255,255,255,.1),rgba(255,255,255,0));*/
		/*background:linear-gradient(bottom,rgba(0,0,0,.1),rgba(0,0,0,0));*/
		background-image: linear-gradient(-180deg, rgba(255,255,255,0.00) 0%, #FFFFFF 100%);
		height:.6rem;
		width: inherit;
		z-index: 999;
	}
	.mask-c{
		width:100%;
		position: absolute;
		bottom: .38rem;
	}
	.collpase-extend-btn{
		height: .12rem;
		margin-top:.15rem;
		background: url(../../static/images/extend.png) no-repeat center;
	}
	.collpase-bg{
		background: url(../../static/images/collpase.png) no-repeat center;
	}
	.build-name{
		font-size:.18rem;
		line-height: .25rem;
		font-weight: bold;
		vertical-align: bottom;
		position: absolute;
		bottom: .1rem;
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
	.last-case{
		border-bottom:none !important;
	}
	.house-type-c{
		border-bottom:.1rem solid #f2f2f2;
		width:100%;
	}
	.house-another{
		border-bottom:.6rem solid #f2f2f2;
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
		/*background: url(../../static/images/right-arrow.png) right no-repeat;*/
		/*background-size: .1rem;*/
	}
	.house-type-title p.nomore{
		background:none
	}
	.house-type-title .account{
		color: rgba(0,0,0,.64);
		font-size: .12rem;
		line-height: .17rem;
		margin-left:.04rem;
		vertical-align: middle;
	}
	.house-type-banner-c{
		padding:.2rem .15rem .15rem .15rem ;
		position: relative;
		width: auto;
		overflow-x: hidden;
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
	  position: relative;
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
		position: relative;
	}
	.case-img-c img{
		width:100%;
	}
</style>