<template>
 <div class="topNav" id="topNav">
      <div class="cont">
          <span class="btnNav btn" @click="showMenu"><img src="static/images/menu.png" ></span>
          <span class="btnChat btn">
                <router-link  to="" >
                    <img src="static/images/call.png" >
                </router-link>
            </span>
      </div>
  </div>
</template>
<script>
var start=0;
export default {
  data() {
    return {};
  },
  mounted() {
    this.touchEvent();
    this.scrollEvent();
  },
  created() {},

  methods: {
    showMenu() {
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
    },
    touchEvent() {
      var touchStart = 0;
      document.body.addEventListener( "touchstart", function(e) {
          touchStart = e.changedTouches[0].pageY;
        },false);
      document.body.addEventListener("touchend",function(e) {
        if(!document.getElementById('topNav')){
          return
        }
          var touchEnd = e.changedTouches[0].pageY;
          if (touchEnd - touchStart < 0) {
            topNav.style.display = "none";
            touchStart = touchEnd;
            return;
          }
          if (touchEnd - touchStart > 0) {
            topNav.style.display = "block";
            touchStart = touchEnd;
          }
        },false);
    },
    scrollEvent() {
      window.addEventListener("scroll",function() {
         if(!document.getElementById('topNav')){
          return
        }
          var afterScrollTop =document.documentElement.scrollTop;
          if(afterScrollTop-start>0){
                topNav.style.display = "none";
                start=afterScrollTop;
                return
          }
          if(afterScrollTop-start<0){
              topNav.style.display = "block";
              start=afterScrollTop;
              return
          } 
       },false
      );
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
  transition: width 1s;
  box-shadow: 0px 2px 1px #ccc;
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

