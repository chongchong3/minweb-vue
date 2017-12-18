 /**
 *
 * Vue-Video-Player
 * Adapted from Videojs (https://github.com/videojs/video.js)
 *
 */

window.videojs = require('video.js')
videojs = videojs.default || videojs
var playerComponent = require('./src/player.vue')
playerComponent = playerComponent.default || playerComponent

var videoPlayer = {
  videojs: videojs,
  videoPlayer: playerComponent,
  install: function(Vue) {
    Vue.component(playerComponent.name, playerComponent)
  }
}
console.log('testtj')
module.exports = videoPlayer
