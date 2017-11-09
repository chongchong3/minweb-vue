<template>
 <div class="topNav" id="topNav">
      <div class="cont">
          <span class="btnNav btn" @click="showMenu"><img src="static/images/menu.png" ></span>
          
          <span class="btnChat btn">
                <router-link  to="" >
                    <img src="static/images/call.png" >
                </router-link>
            </span>
            
            <router-link to="/index/" tag="span" class="to-index"></router-link>
      </div>
  </div>
</template>
<script>
var start=0;
export default {
  data() {
    return {};
  },
  mounted() {},
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
    }
  }
};

window.addEventListener("scroll",function() {
  if(!topNav){
    return
  }
     var t, l, w, h;
    if (document.documentElement && document.documentElement.scrollTop) {
        t = document.documentElement.scrollTop;
    } else if (document.body) {
        t = document.body.scrollTop;
    }
    if(start-t>0){
      topNav.style.display = "block";
      start=t;
      return
    }
    if(start-t<0){
      topNav.style.display = "none";
       start=t;
        return
    }
  },false);
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
  box-shadow: 0px 2px 1px #ccc;
}
.topNav .cont {
  margin: 0 0.16rem;
  /*background: url(http://ovfllimsi.bkt.clouddn.com/minWebIn.png?imageView2/2/w/80)
    no-repeat center;*/
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
.cont .to-index{
	display: block;
	width:.35rem;
	height:100%;
	background: url(http://ovfllimsi.bkt.clouddn.com/minWebIn.png?imageView2/2/w/80)
    no-repeat center;
    background-size: 0.17rem;
	margin:0 auto;
}
</style>

