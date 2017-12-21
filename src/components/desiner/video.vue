<template>
    <div class="section video-module" >
            <img :src="'./static/images/video.png'"   id="playerBtn" class="playerBtn" @click="palyer"> 
            <div class="back-ground" id="backgroundBg">
              <img :src="poster">
            </div>
                    <video-player   @play="onPlayerPlay($event)"  @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"    class="video-player-box vjs-big-play-centered hide" ref="videoPlayer" 
        :options="{controls: false,sources: [{type: 'video/mp4',src:'' +selfMes.self_introduction_video_url+''}], poster:poster}"
   >
        </video-player>
        </div>
</template>
<style >
.video-module {
  position: relative;
}
.video-module .playerBtn {
  position: absolute;
  width: 0.66rem;
  left: 50%;
  top: 50%;
  margin-left: -0.33rem;
  margin-top: -0.33rem;
  z-index: 99;
}
.video-module .back-ground {
  position: absolute;
  width:100%;
  left: 0;
  top:0;
  z-index: 22;
  display: none;

}
.video-module .back-ground  img {
  width:100%;
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
    props: ["selfMes"],
  data() {
    return {
      poster:"http://public.zhuyihome.com/roof/landing_page/plus/Know.png"
      
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
     
    },
    onPlayerPlay(){
      document.getElementById('playerBtn').style.display="none";
        document.getElementById('backgroundBg').style.display="none";
    },
    onPlayerEnded(){
      
         document.getElementById('playerBtn').style.display="block";
         document.getElementById('backgroundBg').style.display="block";
    },
    onPlayerPause(){
       
           document.getElementById('playerBtn').style.display="block";
    },
    
  }
};
</script>
