<template>
  <div class="caseDetails">
      <div class="head">
          <span class="icon back" @click="goBack"><img src="static/images/caseDetails/back.png"></span>
          <img :src="caseData.wideScreenImage" class="caseBg">
          <div class="descript">
              <div class="shadow"></div>
              <div class="cont">
                    <p class="tit">{{caseData.title}}</p>
                    <p class="memo"><span v-html="styleList"></span>/{{caseData.area}}平米</p>
              </div>
          </div>
      </div>
      <div class="desiner">
          <div class="wp">
              <img :src="caseData.image+'?imageView2/2/w/100'"  class="headImg">
              <span class="name">{{caseData.name}}</span>
          </div>
          <p class="brief">设计理念:{{caseData.caseIntro}}</p>
      </div>
      <div class="caseList">
          	<swiper :options="designerOption" class="wp">
              <swiper-slide class="designer-item" v-for="(item,index) in caseData.caseDetailsList" :key="index">
                    <li>
                        <img :src="item.image+'?imageView2/2/w/200'" >
                    </li>
              </swiper-slide>
            </swiper>
        </div>  
      
      <ul class="caseBigList">
          <li  v-for="item in caseData.caseDetailsList">
              <img :src="item.image">
              <p>{{item.info}}</p>
          </li>
           
      </ul>
      <appoinmnet-desiner :desinerId="desinerId"></appoinmnet-desiner>

  </div>
</template>
<style scoped>
.caseDetails {
  padding-bottom: 0.6rem;
  overflow-x: hidden;
}
.caseDetails .head {
  position: relative;
}
.caseDetails .head .icon {
  position: absolute;
  z-index: 22;
  left: 0.08rem;
  top: 0.17rem;
  width: 0.1rem;
  height: 0.21rem;
  display: inline-block;
}
.caseDetails .head .icon img {
  width: 100%;
}
.caseDetails .caseBg {
  width: 100%;
  display: block;
}
.caseDetails .descript .cont {
  position: absolute;
  z-index: 3;
  width: 100%;
  color: #fff;
  padding-left: 0.2rem;
}
.descript .cont .tit {
  padding-top: 0;
  font-size: 0.16rem;
}
.descript .cont .memo {
  padding-top: 0.08rem;
  font-size: 0.12rem;
}
.caseDetails .descript .cont p {
  margin: 0;
}
.caseDetails .descript {
  position: absolute;
  bottom: 0.5rem;
  width: 100%;
  z-index: 2;
}
.caseDetails .descript .shadow {
  position: absolute;
  width: 100%;
  height: 0.5rem;
  background: url("https://img.wesetup.cn/shadowBg.png");
}
.caseDetails .desiner {
  margin-top: 0.15rem;
  margin-bottom: 0.1rem;
}
.desiner .wp {
  overflow: hidden;
}
.caseDetails .desiner .headImg {
  width: 0.4rem;
  border-radius: 50%;
  margin-left: 0.2rem;
  margin-right: 0.06rem;
  display: block;
  float: left;
}
.caseDetails .desiner .name {
  font-size: 0.16rem;
  margin-top: 0.045rem;
  display: inline-block;
}
.caseDetails .desiner .brief {
  line-height: 0.17rem;
  font-size: 0.12rem;
  padding: 0.1rem 0.2rem 0.15rem;
  margin: 0;
}
.caseDetails ul,
.caseDetails li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.caseDetails .caseList {
  background-color: #f2f2f2;
}
.caseDetails .caseList .wp {
  padding: 0.15rem 0;
  margin: 0 0.05rem;
}
.caseDetails .caseList .designer-item {
  width: 1rem;
  padding: 0 0.05rem;
}
.caseDetails .caseList li img {
  width: 100%;
  display: block;
}
.caseBigList {
  background-color: #eee;
}
.caseBigList li {
  padding: 0.15rem 0 0.1rem 0;
  margin: 0 0 0.1rem 0;
  background-color: #fff;
}
.caseBigList li img {
  display: block;
  margin-bottom: 0.1rem;
  width: 100%;
}
.caseBigList li p {
  margin: 0;
  line-height: 0.16rem;
  font-size: 0.12rem;
  padding: 0 0.2rem;
}

</style>

<script>
import Vue from "vue";
import "@/common/css/swiper.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { MessageBox } from "mint-ui";
import "mint-ui/lib/style.css";
import appoinmnetDesiner from '@/components/appoinentDesiner'; //数据加载完提示
Vue.use(VueAwesomeSwiper);

export default {
  components:{appoinmnetDesiner},
  data() {
    return {
      caseData: {},
      desinerId:'',
      styleList:'',
      title:'',
      image:'',
      designerOption: {
        pagination: "null",
        slidesPerView: "auto",
        paginationClickable: true,
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
  created() {
   
    this.getData();
  },
  mounted(){
  },
  methods: {
    goBack() {
      window.history.back();
    },

    getData() {
      var _self = this;
      return new Promise((resolve, reject) => {
        _self.$http
          .get("/minisite/getDesignerCaseDetail", {
            params: { case_id: _self.$route.query.caseId }
          })
          .then(response => {
            if (response.data.code != 200) {
              return;
            }
             document.title=response.data.data.title;
             _self.case_title = response.data.data.title;
              _self.image = response.data.data.image;
            _self.caseData = response.data.data;
            _self.desinerId=response.data.data.designerId;
            var _lt=  _self.caseData.styleList.length;
             _self.shareWx.getId();
              _self.shareWx.shareReady(self.title+"| 设计IN-设计师严选平台",'',_self.image+'?imageView2/5/w/50');
            _self.caseData.styleList.forEach(function(k,i){
              if(i==0){
                  _self.styleList+=k.style_name;
                  return
              }
               _self.styleList+='&nbsp;&nbsp;'+k.style_name;
            });

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

