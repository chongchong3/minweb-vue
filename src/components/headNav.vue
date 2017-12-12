<template>
<div>
    <div class="topNav" id="topNav">
     
      <div class="cont">
       
          <span class="btnNav btn cursor" @click="showMenu"><img id="menuImg" src="static/images/menuicon.png" ></span>
       <router-link  to="index" class="goHome cursor">
       </router-link>
          <span class="btnChat btn btnNav">
                <router-link class="cursor" to="chat" >
                    <img  id="callImg" src="static/images/callicon.png" style="margin-top: 0.185rem;margin-left:.095rem;">
                </router-link>
            </span>
      </div>
  </div>
</div>

</template>
<script>
var start = 0;
var startX = 0;
var vm = {};
export default {
  data() {
    return {
      scrollY: 0,
      touchY: 0
    };
  },
  mounted() {
    // this.touchDir();
    this.scrollEvent();
  },

  created() {
    vm = this;
  },

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
    scrollEvent() {
      var domNav = document.getElementById("topNav");
      var callImg = document.getElementById("callImg");
      var menuImg = document.getElementById("menuImg");
      var _self = this;
      window.addEventListener("scroll", function(e) {
        if (!domNav) {
          return;
        }
        var scrollTop = _self.getScrollTop();
        var screnHt = document.body.clientHeight;
        if (scrollTop > screnHt / 3) {
        	domNav.classList.add("show-bg");
        	menuImg.setAttribute("src","../../static/images/menu.png");
        	callImg.setAttribute("src","../../static/images/call.png");
//        domNav.style.display = "none";
          return;
        }
        domNav.classList.remove("show-bg");
        menuImg.setAttribute("src","../../static/images/menuicon.png");
        callImg.setAttribute("src","../../static/images/callicon.png");
        return;
      });
    },
    getScrollTop() {
      var scrollTop = 0;
      if (document.documentElement && document.documentElement.scrollTop) {
        scrollTop = document.documentElement.scrollTop;
      } else if (document.body) {
        scrollTop = document.body.scrollTop;
      }
      return scrollTop;
    }


  }
};
</script>
<style scoped >
.topNav {
  height: 0.54rem;
  /*background: #f5f5f5;*/
 background: transparent;
  overflow: hidden;
  line-height: 0.56rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  transition: width 1s;
  /*box-shadow: 0px 2px 1px #ccc;*/
}
.show-bg{
	background: #f5f5f5;
}
.topNav .cont {
  margin: 0 0.16rem;
  background: url(http://ovfllimsi.bkt.clouddn.com/minWebIn.png?imageView2/2/w/80)
    no-repeat center;
  height: 100%;
  background-size: 0.215rem;
}
.topNav .btnNav {
  float: left;

}
.topNav .btnChat {
  float: right;
}

.topNav .btn img {
  width: .2rem;
  margin-top: 0.22rem;
  float:left;
  margin-left:.095rem;
}


.goHome {
  position: absolute;

  left: 50%;
  margin-left: -0.2rem;
}
.cursor {
  display: inline-block;
  width: 0.4rem;
  height: 0.55rem;
  text-align: center;
}
.test {
  width: 100%;
  position: fixed;
  bottom: 0.2rem;
  z-index: 99999999;
  height: 0.2rem;
  line-height: 0.2rem;
  background: #fff;
  color: #000;
  font-size: 16px;
}
</style>

