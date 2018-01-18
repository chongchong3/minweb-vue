<template>
  <div class="footer">
          <div class="appoint" @click="appoinmnet">
             <span class="icon"><img src="static/images/clockNew.png" alt=""></span>
              <span class="tit">预约设计师</span>
          </div>
      </div>
</template>
<style>
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 0.6rem;
  border-top: #c9c9c9 1px solid;
  background: #fff;
  z-index: 99999;
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
  margin-left: .07rem;
}
</style>

<script>
import Vue from "vue";
import { MessageBox } from "mint-ui";
import { miniSiteAppoints } from "@/api/appoints"; //预约设计师
import { checkAppointsStatus } from "@/api/checkAppointsStatus";
import { checkLoginStatus } from "@/api/CheckLoginStatus"; //查询是否绑定
export default {
props: ["desinerId"],

mounted(){
    this.$nextTick(function(){
        this.goAuthor();

    });
   
    
},
  data() {
    return {
          authorId: "",
    };
  },
  methods: {
   
    goAuthor() {
      this.authorId = this.getCookie("wechat_id");
      if (this.isWeiXin() && !this.authorId) {
       
        window.location.href = "/minisite/login?originUrl=" + window.location.href;
        return;
      }
       window.location.href = "/minisite/login?originUrl=" + window.location.href; //pctest
    },
    getCookie(name) {
      var arr,
        reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
      if ((arr = document.cookie.match(reg))) return unescape(arr[2]);
      else return null;
    },
    isWeiXin() {
      var ua = window.navigator.userAgent.toLowerCase();
//    console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
      if (ua.match(/MicroMessenger/i) == "micromessenger") {
        return true;
      }
      return false;
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
              path: "/login?designer_uid=" + _self.desinerId //
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
              designer_uid: _self.desinerId,
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
  }
};
</script>

