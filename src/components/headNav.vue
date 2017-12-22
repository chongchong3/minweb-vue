<template>
<div>
    <div class="topNav" id="topNav">
     
      <div class="cont">
       
          <span class="btnNav btn cursor" @click="showMenu"><img src="static/images/menu.png" ></span>
       <router-link  to="index" class="goHome cursor">
       </router-link>
          <span class="btnChat btn btnNav">
                <router-link class="cursor" to="chat" >
                    <img src="static/images/call.png" style="margin-top: 0.185rem;margin-left:.095rem;">
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
      var _self = this;
      window.addEventListener("scroll", function(e) {
        if (!domNav) {
          return;
        }
        var scrollTop = _self.getScrollTop();
        var screnHt = document.body.clientHeight;
        if (scrollTop > screnHt / 3) {
          domNav.style.display = "none";
          return;
        }
        domNav.style.display = "block";
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
  height: 0.56rem;
  background: #f5f5f5;
  overflow: hidden;
  line-height: 0.56rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 2;
  transition: width 1s;
  box-shadow: 0px 2px 1px #ccc;
}
.topNav .cont {
  margin: 0 .1rem 0 0;
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
  margin-top: 0.20rem;
  float:left;
  margin-left:.095rem;
}


.goHome {
  position: absolute;
  width: .4rem;
    height: .4rem;
    margin-top: .1rem;
  left: 50%;
  margin-left: -0.2rem;
}
.cursor {
  display: inline-block;
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

