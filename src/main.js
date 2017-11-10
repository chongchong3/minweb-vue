// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import '@/common/css/normalize.css'
import store from './store'
import vueRsource from 'vue-resource'
import VueJsonp from 'vue-jsonp'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import shareWx from '@/common/js/shareWx'
import minWebConfig from '@/config'
import '@/config.js'
Vue.config.productionTip = false
Vue.prototype.shareWx=shareWx;
Vue.prototype.minWebConfig=minWebConfig;
Vue.use(VueAwesomeSwiper)
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