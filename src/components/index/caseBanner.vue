<template>
	<div class="case-horize-list-c">
		<div class="case-about-pad"></div>
		<div class="list-title-c">
			<router-link to="/caselist" tag="div" class="list-title">
					设计案例
			</router-link>
			
		</div>
		<div class="case-c">
			<div class="case-detail-list-c">
				<swiper :options="caseOption" >
				    <swiper-slide class="case-item" v-for="(list,index) in caseList" :key="index">
			    		<div class="" v-bind:class="['detail-case',{'detail-case-border-rgt':index != caseList.length-1}] ">
			    			<div v-for="(onecase,idx) in list" class="onecase-c"  v-bind:class="['',{'onecase-c-bottom':idx != list.length-1}] ">
			    				<router-link class="img-c"  tag="div" :to="'/caseDetailsNew?caseId='+onecase.id" >
									<img postpone="postpone" :src="onecase.widescreen_image+'?imageView2/2/w/640'" />
								</router-link>
								<div class="des-c">
									<router-link :to="'/desinerDetails/'+onecase.designer_uid" class="portrait" tag="div">
										<img  :src="onecase.head_image_url+'?imageView2/2/w/100'" />
									</router-link>
									<div class="name-theme-c">
										<router-link class="theme"  :to="'/caseDetailsNew?caseId='+onecase.id" tag="p">{{onecase.title}}</router-link>
										<router-link :to="'/desinerDetails/'+onecase.designer_uid" tag="p" class="name">
											{{onecase.area}}平米 /<span v-for="style in onecase.style_list">{{style.style_name}} </span>
										</router-link>
										
									</div>
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
import { getCaseMes } from '@/api/caseList';
export default {
  name: "carrousel",
  data() {
    return {
      caseList: [],
      notNextTick: true,
      caseOption: {
       
        pagination: "null",
        slidesPerView: "auto",
        paginationClickable: true,
        loop: true,
        loopedSlides:1,

        onTransitionStart(swiper) {},
        onClick(swiper) {}

      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
	  this.getList({ page_size: 9, page_no: 1})
      .then(json => {
        if (json.body.code == "200") {
        	let arr = json.body.data.list;
        	let i =0;
        	let temp = [];
        	let result = [];
        	for(;i<arr.length;i++){
        		temp.push(arr[i]);
        		if(temp.length == 3 || (arr.length<3 && temp.length == arr.length )){
        			this.caseList.push(temp);
        			temp = [];
        		}
        		
        	}
        }
      })
      .catch(err => {});
  },
  methods: {
    jumpTo(onecase) {
      this.$router.push({path:'./caseDetailsNew?caseId='+onecase.id});
    },
    getList(params) {
      var _self = this;
      return new Promise((resolve, reject) => {
        getCaseMes(params)
          .then(response => {
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};
</script>
<style scoped="scoped">
	.case-about-pad{
		height:.09rem;
		background:#f4f4f4;
	}
.case-horize-list-c {
  background: #fff;
}
.case-horize-list-c:after {
  content: "";
  height: 0.09rem;
  display: block;
  background: #f4f4f4;
}
.case-detail-list-c .case-item {
  height: auto;
}
.case-horize-list-c .case-c {
  /*margin-left: 0.17rem;*/
}
.list-title-c {
    padding-top: .14rem;
    height:.36rem;
    text-align: center;
    border-bottom: 1px solid #c9c9c9;
}
.vertical-bar {
  height: 0.15rem;
  width: 0.045rem;
  background: #b2dd47;
  margin-right: 0.05rem;
  float: left;
}
.list-title-c:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.list-title {
  font-size: 0.18rem;
  line-height: 0.22rem; 
  display: inline-block;
  text-align: left;
  background: url(../../../static/images/more.png) right  no-repeat;
  background-size: .15rem;
  width:.94rem;
  font-weight: bold;
}
.list-title-c .more {
  float: right;
  margin-right: .17rem;
  margin-bottom: 0px;
}
.case-detail-list-c {
  width: auto;
}
.case-detail-list-c:after {
  content: "";
  display: block;
  height: 0;
  visibility: hidden;
  clear: both;
}
.case-item {
  width: 91% !important;
  text-align: center;
  font-size: 18px;
  background: #fff;
}
.detail-case{
}
.detail-case-border-rgt{
	border-right: 1px solid #C9C9C9;
}
.onecase-c{
	margin:4%;
	
}
.onecase-c-bottom{
	border-bottom:1px solid #C9C9C9;
}
.img-c {
  display: block;
  margin-bottom: 0.07rem;
}
.img-c img {
  width: 100%;
  display: block;
}
/*.swiper-slide{
	 flex-shrink: unset;
 }*/
.des-c {
  width: auto;
  margin-bottom: 0.12rem;
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
  color: #999;
}
.name-theme-c p.theme {
  font-size: 0.16rem;
  line-height: 0.22rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>