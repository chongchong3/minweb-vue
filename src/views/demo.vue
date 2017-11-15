<template>
 <div >
	<p class="test" @click="goLink" style="font-size:20px">点击授权</p>
  
 </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {},

  methods: {
    goLink() {
      this.setCookie("tangjuanCookieTest", "aaa", 60 * 60 * 10000);
      window.location.href =
        "https://www.shejiin.net/minisite/login?originUrl=/desinerDetails/43315366809567659";
    },
    setCookie(name, value, seconds) {
      seconds = seconds || 0; //seconds有值就直接赋值，没有为0，这个根php不一样。
      var expires = "";
      if (seconds != 0) {
        //设置cookie生存时间
        var date = new Date();
        date.setTime(date.getTime() + seconds * 1000);
        expires = "; expires=" + date.toGMTString();
      }
      document.cookie = name + "=" + escape(value) + expires + "; path=/"; //转码并赋值
    }
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-tap-highlight-color: transparent;
}
body {
  background-color: white;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
  color: #18b4fe;
}

/*模拟的标题*/
.header {
  z-index: 9990;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 44px;
  line-height: 44px;
  text-align: center;
  border-bottom: 1px solid #eee;
  background-color: white;
}
.header .btn-left {
  position: absolute;
  top: 0;
  left: 0;
  padding: 12px;
  line-height: 22px;
}
/*列表*/
.mescroll {
  position: fixed;
  top: 44px;
  bottom: 0;
  height: auto;
}
/*展示上拉加载的数据列表*/
.data-list {
  /* display: none; */
}
.data-list li {
  position: relative;
  padding: 10px 8px 10px 120px;
  border-bottom: 1px solid #eee;
}
.data-list .pd-img {
  position: absolute;
  left: 18px;
  top: 18px;
  width: 80px;
  height: 80px;
}
.data-list .pd-name {
  font-size: 16px;
  line-height: 20px;
  height: 40px;
  overflow: hidden;
}
.data-list .pd-price {
  margin-top: 8px;
  color: red;
}
.data-list .pd-sold {
  font-size: 12px;
  margin-top: 8px;
  color: gray;
}
</style>

