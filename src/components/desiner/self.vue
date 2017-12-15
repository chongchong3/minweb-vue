<template>
    <div id="self-wrap" class="slef-wrap">
        <video-player x5-video-player-type="h5" x5-video-player-fullscreen="false" webkit-playsinline playsinline class="video-player-box vjs-big-play-centered hide" ref="videoPlayer" :options="playerOptions" >
        	<!--@play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)"-->
        </video-player>

        <div class="slef-background hasTips" id="slef-background">
            <img :src="selfMes.full_body_shot_url" @click="videoPlay">
            <div class="playerButton">
                <div class="playerBtn" @click="videoPlay">
                    <!-- <img src="../../static/images/video.png"> -->
                </div>

            </div>

            
        </div>

    </div>
</template>
<style >
.hasTips {
  height: 100%;
}
.imgWrap img {
  width: 100%;
}
.video-player {
  display: none;
}
.slef-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.playerButton {
  position: absolute;
  width: 100%;
  top: 46%;
  left: 0%;
  z-index: 999;
  margin: 0px auto;
}

.playerButton .playerBtn {
  width: 0.6rem;
  margin: 0 auto;
  background: url("../../../static/images/video.png");
  background-size: 100% 100%;
  height: 0.6rem;
}

.slef-wrap .hasTips .brief {
  margin-top: 0.2rem;
}
.slef-background {
  /*background:#000;*/
}
.slef-background img {
  width: 100%;
}

.slef-wrap .video-js .vjs-tech {
  height: auto;
}
.hasTips .score {
  width: 0.6rem;
  padding-left: 0.2rem;
}
.hasTips {
  position: relative;
}

.hasTips .memo {
  position: absolute;
  width: 100%;
  height: 2rem;
  bottom: 0;
  color: #fff;
  text-align: left;
  z-index: 99;
  background: transparent;
}

.hasTips .memo p {
  margin: 0.1rem 0.2rem 0 0.2rem;
  line-height: 1.5em;
  font-size: 14px;
}

.hasTips .memo .price {
  margin-top: 0;
}

.hasTips .memo .name {
  font-size: 30px;
}

.hasTips {
  position: relative;
}
.hasTips .memo {
  position: absolute;
  width: 100%;
  height: 2rem;
  bottom: 0;
  color: #fff;
  text-align: left;
  z-index: 99;
  background: transparent;
  background: url("../../../static/images/videoBg.png");
  background-size: 100% 100%;
}
.hasTips .score img {
  width: 100%;
}
</style>
<script>
import "video.js/dist/video-js.css";
import Vue from "vue";
import VueVideoPlayer from "vue-video-player";
Vue.use(VueVideoPlayer);
var vm = {};
export default {
  props: ["selfMes", "ht"],
  data() {
    return {
      case_id: 1,
      _playerOptions: {},
      playerOptions: vm._playerOptions
    };
  },
  created() {},
  mounted() {
    this.$nextTick(function() {
      vm = this;
      this._playerOptions = {
        // videojs options
        muted: true,
        sources: [
          {
            type: "video/mp4",
            src: this.selfMes.self_introduction_video_url
          }
        ],
        poster: this.selfMes.full_body_shot_url,
        height: this.ht
      };
      this.setPlayer();
    });
  },
  computed: {
    player() {
      return this.$refs.videoPlayer.player;
    }
  },
  methods: {
    setPlayer: function() {
      this.$emit("transPlayer", this.player);
    },
    videoPlay: function(event) {
      $(".slef-background").addClass("hide");
      $("div[id*='vjs_video_']").width("100%");
      $(".video-player-box").show();
      this.player.show();
      this.player.play();
    },

    onPlayerEnded(playerCurrentState) {
      this.videoHide();
    },

    videoHide() {
      $(".slef-background").removeClass("hide");
      $(".video-player-box").addClass("hide");
      this.player.pause();
    }
  }
};
</script>
