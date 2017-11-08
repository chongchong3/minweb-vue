// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/normalize.css'

import VueVideoPlayer from 'vue-video-player'
import store from './store'
import vueRsource from 'vue-resource'
import VueJsonp from 'vue-jsonp'



Vue.config.productionTip = false

import shareWx from '@/common/js/shareWx'

Vue.prototype.shareWx=shareWx;

Vue.use(VueVideoPlayer)
Vue.use(vueRsource)
Vue.use(VueJsonp)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})