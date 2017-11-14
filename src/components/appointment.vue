<template>
  <div class="appoinmnet">
      <div class="main">
    
          <div class="fl">
              <div class="head">
                 <img :src="desinerMes.head_image_url" >
             </div>
                <div class="aside">
                  <p class="name">{{desinerMes.designer_name}}</p>
                    <!-- <p class="level">高级设计师</p> -->
              </div>
          </div>
          <div class="orderDesiner" @click="appoinmnet">预约设计师</div>
       
      </div>
  </div>
</template>
<script>
export default {
  // props: ["desinerMes"],
  data() {
    return {};
  },
  created() {
    this.mockLogin();
    this.getDesinerMes();
  },

  methods: {
    appoinmnet() {
      var userInfo = this.$store.getters.userInfo;
      var data = userInfo.authorization_id
        ? userInfo
        : JSON.parse(localStorage.userInfo); //
      if (!data.authorization_id) {
        this.$router.push({ path: "./login" });
        return;
      }
      this.lookFor(data);
    },
    lookFor(data) {
      var _self = this;
      //预约查询
      return new Promise((resolve, reject) => {
        debugger
        _self.$http
          .post("/Designer/checkAppointsStatus", {
            params: { user_id: data.authorization_id }
          })
          .then(response => {
            if (!response.data.message) {
              _self.$http.post("/Designer/miniSiteAppoints", {
                params: {
                  designer_uid: "43207696962329537",
                  user_id: "43320788568244268"
                }
              });

              // _self.$http.post('/sendMessage',{params:{"phone_num":"18733198805"}})
            }
            resolve(response);
          })
          .then(response => {
            if (response.data.code != 200) {
              alert("预约失败");
            }
            alert("预约成功");
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    mockLogin() {
      var userInfo = this.$store.commit("SELECT_USRINFO", {
        phone_num: "18733198805", //手机号
        authorization_id: "1123123123", //授权id  比如微信的OpenID
        message_code: "8888" //验证码
      });
      localStorage.setItem("userInfo", JSON.stringify(userInfo));
    },
    getDesinerMes() {
      
      this.desinerMes = this.$store.getters.appointment;
      console.log(this.desinerMes ,'test');
  
    }
  }
};
</script>

<style>
.appoinmnet {
  box-shadow: -4px -3px 14px #ccc;
  padding: 0.08rem 0;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 99;
  width: 100%;
}
.appoinmnet .main {
  height: 0.46rem;
  padding: 0 0.18rem;
  overflow: hidden;
}
.appoinmnet .fl {
  float: left;
}
.appoinmnet .head {
  width: 0.35rem;
  display: inline-block;
  margin-right: 0.1rem;
  float: left;
  margin-top: 0.1rem;
  /* margin-top:.1rem; */
}
.appoinmnet .head img {
  display: block;
  width: 100%;
  border-radius: 50%;
}
.appoinmnet .aside {
  display: inline-block;
  margin-top: 0.18rem;
}
.appoinmnet .aside .name {
  font-size: 0.16rem;
  margin: 0;
}
.appoinmnet .orderDesiner {
  display: inline-block;
  margin-top: 0.1rem;
  background-color: #79e149;
  color: #fff;
  padding: 0.06rem 0.07rem;
  border-radius: 0.02rem;
  font-size: 0.14rem;
  float: right;
}
.appoinmnet .score {
  width: 1rem;
}
.appoinmnet .level {
  color: #93d36a;
  margin: 0.02rem 0 0 0;
  font-size: 0.12rem;
}
</style>

