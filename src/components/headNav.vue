<template>
 <div class="topNav" id="topNav">
      <div class="cont">
          <span class="btnNav btn" @click="showMenu"><img src="static/images/menu.png" ></span>
          <span class="btnChat btn">
                <router-link  to="/chat" >
                    <img src="static/images/call.png" >
                </router-link>
            </span>
      </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  mounted(){
    if(document.getElementById("topNav")){
      this.navControl();
    }
     
  },
  created() {
   
  },

  methods: {
    navControl() {
      var beforeScrollTop = document.body.scrollTop;
      var startY = 0;
      var endY = 0;
      document.body.addEventListener("touchstart", function(e) {
        startY = e.changedTouches[0].clientY;
      });
      document.body.addEventListener("touchend", function(e) {
        var topNav = document.getElementById("topNav");
        if(!topNav){
          return
        }
        endY = e.changedTouches[0].clientY;
        if (endY - startY < -50) {
          topNav.style.display = "none";
          return;
        }
        if (endY - startY > 20) {
          topNav.style.display = "block";
        }
      });
      window.addEventListener("scroll", function(e) {
        var topNav = document.getElementById("topNav");
        var afterScrollTop = document.body.scrollTop;
        var delta = afterScrollTop - beforeScrollTop;
        if (delta > 10) {
          topNav.style.display = "none";
          beforeScrollTop = afterScrollTop;
          return;
        }
        if (delta < -10) {
          debugger;
          topNav.style.display = "block";
          beforeScrollTop = afterScrollTop;
        }
      });
    },
    showMenu() {
   ;
      this.$store.commit("setNav", {
        isShow: true,
        current: this.$store.getters.nav.current
      });
    },
    hideMenu() {
      this.$store.commit("setNav", {
        isShow: false,
        current: this.$store.getters.nav.current
      });
      return false;
    }
  }
};
</script>
<style >
.topNav {
  height: 0.52rem;
  background: #f5f5f5;
  overflow: hidden;
  line-height: 0.52rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
}
.topNav .cont {
  margin: 0 0.16rem;
  background: url(http://ovfllimsi.bkt.clouddn.com/minWebIn.png?imageView2/2/w/80)
    no-repeat center;
  height: 100%;
  background-size: 0.17rem;
}
.topNav .btnNav {
  float: left;
}
.topNav .btnChat {
  float: right;
}
.topNav .btn {
  display: inline-block;
  width: 0.17rem;
}
.topNav .btn img {
  width: 100%;
}
</style>

