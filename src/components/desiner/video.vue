<template>
    <div class="section videoBox">
            <img :src="'./static/images/video.png'" @ended="onPlayerEnded($event)"  class="playerBtn" @click="palyer" id="playerBtn">
                    <video-player  class="video-player-box vjs-big-play-centered hide" ref="videoPlayer" 
        :options="{preload:true,controls: false,sources: [{type: 'video/mp4',src:'' +selfMes.self_introduction_video_url+''}]}"
   >
        </video-player>
        </div>
</template>
<style scoped>
.videoBox {
  position: relative;
}
.playerBtn {
  position: absolute;
  width: 0.33rem;
  left: 50%;
  top: 50%;
  margin-left: -0.165rem;
  margin-top: -0.165rem;
  z-index: 99;
}
.video-player-box,
.vjs-tech,
.video-js {
  width: 100%;
}
</style>
<script>
import "video.js/dist/video-js.css";
import Vue from "vue";
import VueVideoPlayer from "vue-video-player";
Vue.use(VueVideoPlayer);
export default {
  data() {
    return {
      selfMes: {
        self_introduction_video_url: "https://assets.wesetup.cn/刘奕乐.mp4"
      }
    };
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  created() {},
  methods: {
    palyer() {
      this.player.play();
      document.getElementById('playerBtn').style.display="none";
    },
    onPlayerEnded(){
         document.getElementById('playerBtn').style.display="block";
    }
  }
};
</script>
