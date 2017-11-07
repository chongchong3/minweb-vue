<template>
    <div id="self-wrap" class="slef-wrap">
        <video-player x5-video-player-type="h5" x5-video-player-fullscreen="false" webkit-playsinline playsinline class="video-player-box vjs-big-play-centered hide" ref="videoPlayer" :options="playerOptions" @play="onPlayerPlay($event)" @pause="onPlayerPause($event)" @ended="onPlayerEnded($event)">
        </video-player>

        <div class="slef-background hasTips" id="slef-background">
            <img :src="selfMes.bodyImg" @click="videoPlay">
            <div class="playerButton">
                <div class="playerBtn" @click="videoPlay">
                    <!-- <img src="../../static/images/video.png"> -->
                </div>

            </div>

            <div class="memo">
                <div class="cont">
                    <p class="name">个人信息</p>

                    <p class="brief">{{selfMes.brief}}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<style >
.hasTips {
    height: 100%;;
}
.imgWrap img {
    width: 100%;
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
}

.playerButton .playerBtn {

    width: .6rem;
    margin: 0 0 0 .3rem;
    background: url('../../static/images/video.png');
    background-size: 100% 100%;
    height: .6rem;
}


.slef-wrap .hasTips .brief {
    margin-top: .2rem;
}

.slef-background img {
    width: 100%;
}

.slef-wrap .video-js .vjs-tech {
    height: auto;
}
.hasTips .score {
    width: .6rem;
    padding-left: .2rem;
}
.hasTips {
    position: relative;
}

.hasTips .memo {
    position: absolute;
    width: 100%;
    height: 2rem;
    bottom:0;
    color: #fff;
    text-align: left;
    z-index: 99;
    background: transparent;
}


.hasTips .memo p {
    margin: .1rem .2rem 0 .2rem;
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
    background: url('../../static/images/videoBg.png');
    background-size: 100% 100%;
}
.hasTips .score img {
    width: 100%;
}
</style>
<script>

import 'video.js/dist/video-js.css'

export default {
    props: ['selfMes'],
    data() {

        return {
            case_id: 1,

            playerOptions: {
                // videojs options
                muted: true,
                sources: [{
                    type: "video/mp4",
                    src: 'http://os5lxzkas.bkt.clouddn.com/long15.m4v',
                }],
                poster: this.selfMes.full_body_shot_url,
            }



        }
    },

  
    computed: {

        player() {
            return this.$refs.videoPlayer.player
        }
    },
    methods: {

        videoPlay: function(event) {
            $('.slef-background').addClass('hide');
            $('.video-player-box').removeClass('hide');
            this.player.show();
            this.player.play();
        },

        // listen event
        onPlayerPlay(player) {
            // console.log('player play!', player)
        },
        onPlayerPause(player) {
            // console.log('player pause!', player)
        },

        // or listen state event
        onPlayerEnded(playerCurrentState) {
            this.videoHide();
        },
        
        videoHide(){
            $('.slef-background').removeClass('hide');
            $('.video-player-box').addClass('hide');
            this.player.pause();
        }



    }
}
</script>

