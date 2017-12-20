<template>
  <div class="videoWrap">
        <div class="section"></div>
        <div class="section video-player-box">
          <video-comp :selfMes='selfMes' ></video-comp>
        </div>
        <div class="section"></div>

  </div>
</template>
<style>
.section {
  height: 3.6rem;
  border: #eee 1px solid;
  margin: 0 0 0.2rem 0;
  background: #ccc;
}
.video-player-box {
  width:100%;
}
</style>

<script>
import videoComp from "../components/desiner/video";
export default {
  components: {
    videoComp
  },
  
  data() {
    return {
      selfMes: {
        self_introduction_video_url: "https://qiniu.zhuyihome.com/plugs/chenxuan/1.mp4",

      }
    };
  }
};
</script>
