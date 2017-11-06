<template>
 <div class="demoContainer" >
    <left-nav></left-nav>
    <head-nav></head-nav>
    <p>{{$store.state}}test</p>
 </div>
</template>

<script>
import store from "@/store";
import leftNav from "../components/leftNav"; //引用左侧菜单栏
import headNav from "../components/headNav"; //引用顶部菜单栏
export default {
  components: { leftNav, headNav },
  data() {
    return {};
  },
  created() {
    /*微信朋友圈分享*/

    this.shareWx.getId(this.$route.fullPath);
    this.shareWx.shareReady("分享的标题", "分享的描述", "分享的链接", "分享的图片地址");

    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "index" //设置左菜单栏高亮
    });
    this.$store
      .dispatch("GetCaseMes", { page_size: 20, page_no: 1 })
      .then(json => {})
      .catch(err => {});

 
  }
};
</script>
<style>
.demoContainer {
  background: #ccc;
}
</style>

