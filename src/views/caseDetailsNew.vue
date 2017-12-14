<template>
  <div class="caseDetails">
      <div class="head">
          <span class="icon back" @click="goBack"><img src="static/images/caseDetails/back.png"></span>
          <img :src="caseData.wideScreenImage" class="caseBg">
          <div class="descript">
              <div class="shadow"></div>
              <div class="cont">
                    <p class="tit">{{caseData.title}}</p>
                    <p class="memo">新中式/300平米</p>
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
      <div class="footer">
          <div class="appoint" @click="appoinmnet">
             <span class="icon"><img src="static/images/clock.png" alt=""></span>
              <span class="tit">预约设计师</span>
          </div>
      </div>
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
.caseDetails .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.6rem;
  border-top: #c9c9c9 1px solid;
  background: #fff;
}
.appoint {
  margin: 0.1rem 0.38rem;
  background: #88c462;
  border-radius: 0.2rem;
  text-align: center;
  color: #fff;
  font-size: 0.16rem;
  height: 0.4rem;
  line-height: 0.4rem;
}
.appoint .icon {
  width: 0.2rem;
  height: 0.21rem;
  display: inline-block;
}
.appoint .icon img {
  width: 100%;
  display: block;
  margin-top: 0.05rem;
}
.appoint .tit {
  display: inline-block;
}
</style>

<script>
import Vue from "vue";
import "@/common/css/swiper.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import { MessageBox } from "mint-ui";
import "mint-ui/lib/style.css";
import { miniSiteAppoints } from "@/api/appoints"; //预约设计师
import { checkAppointsStatus } from "@/api/checkAppointsStatus";
import { checkLoginStatus } from "@/api/CheckLoginStatus"; //查询是否绑定

Vue.use(VueAwesomeSwiper);

export default {
  data() {
    return {
      caseData: {},
      authorId: "",
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
    this.goAuthor();
    this.getData();
  },
  methods: {
    goBack() {
      window.history.back();
    },
    appoinmnet() {
      var _self = this;

      //查询是否授权绑定用户
      checkLoginStatus({ authorization_id: this.authorId })
        .then(function(response) {
          if (response.data.code != 200) {
            return MessageBox("提示", "查询失败");
          }
        
          if (!response.data.data.userId) {
            //如果没有绑定跳转登录页面
            return _self.$router.push({
              path: "/login?designer_uid=" +_self.caseData.designerId //
            });
          }
          var user_id = response.data.data.userId;
          checkAppointsStatus({ user_id: user_id }).then(function(response) {
            if (
              response.data.code == 200 &&
              response.data.data.message.length == 17
            ) {
              //设计师ID长度为17
              return MessageBox("你已经预约过了");
            }

            miniSiteAppoints({
              designer_uid: _self.caseData.designerId,
              user_id: user_id
            }) //预约设计师
              .then(function(response) {
                if (response.data.code == 500) {
                  return MessageBox("提示", "你已经预约过了");
                }
                if (response.data.code == 200) {
                  return MessageBox("提示", "预约成功");
                }
                return MessageBox("提示", "查询异常");
              });
          });
        })
        .catch(function(error) {
          return MessageBox("提示", "请求失败");
        });
    },
    goAuthor() {
      this.authorId = this.getCookie("wechat_id");
      if (this.isWeiXin() && !this.authorId) {
        window.location.href =
          "/minisite/login?originUrl=" +
          encodeURIComponent(
            window.location.host + "/#" + this.$route.fullPath
          );
        return;
      }
    },
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
      else return null;
    },
    isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase();
      console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      }
      return false;
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
            _self.caseData = response.data.data;

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

