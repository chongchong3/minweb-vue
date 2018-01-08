import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Index = () => import(/* webpackChunkName: "mint-index" */ '@/views/index')
const guide = () => import(/* webpackChunkName: "mint-guide" */ '@/views/guide')
const desinerList = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerList')
const desinerDetails = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerDetails')
const caseList = () => import(/* webpackChunkName: "mint-case" */ '@/views/caseList')
// const desinerCaseDetails = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerCaseDetails')
const login = () => import(/* webpackChunkName: "mint-login */ '@/views/login')
const caseDetails = () => import(/* webpackChunkName: "mint-case */ '@/views/caseDetails')
const aboutUs = () => import(/* webpackChunkName: "mint-case */ '@/views/about_us')
const chat = () => import(/* webpackChunkName: "mint-chat */ '@/views/chat')
const scroll = () => import(/* webpackChunkName: "mint-case */ '@/views/scroll')
const start = () => import(/* webpackChunkName: "mint-case */ '@/views/start')
const error = () => import(/* webpackChunkName: "mint-case */ '@/views/404')
const caseDetailsNew = () => import(/* webpackChunkName: "mint-case */ '@/views/caseDetailsNew')
// 微网站1.1
const case_list = () => import(/* webpackChunkName: "mint-case */ '@/views/case_list')
const designer_list = () => import(/* webpackChunkName: "mint-case */ '@/views/designer_list')
const transitionTest = () =>import(/* webpackChunkName: "mint-case */ '@/views/transitionTest')
const floor_case_list = () =>import('@/views/floor_case_list')
const house_type_list = () =>import('@/views/house_type_list')
const building = () =>import('@/views/buildingdetail')
const housetype = () =>import('@/views/housetypedetail')

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'start',
      component: start,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {title: '设计IN-设计师严选平台', keepAlive: true}
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {title: '登录页'}
    },
    {
      path: '/desinerList',
      name: 'desinerList',
      component: designer_list,
      meta: {title: '找设计师 | 设计IN-设计师严选平台', keepAlive: true}
    },
    {
      path: '/desinerDetails', //desiner_id
      name: 'desinerDetails',
      component: desinerDetails,
      meta: {title: '设计师详情 | 设计IN-设计师严选平台'}
    },

    {
      path: '/caseList',
      name: 'caseList',
      component: case_list,
      meta: {title: '看设计案例 | 设计IN-设计师严选平台',keepAlive: true}
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
      meta: {title: '关于 | 设计IN-设计师严选平台'}
      
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      meta: {title: '在线客服'}
      
    },
    {
      path: '/start',
      name: 'start',
      component: start,
      meta: {title: '设计IN-设计师严选平台'}
      
    },
    {
      path: '/caseDetailsNew',//case_id
      name: 'caseDetailsNew',
      component: caseDetailsNew,
      meta: {title: '新案例详情'} 
    },

    {
      path: '/404',
      name: 'error',
      component: error,
      meta: {title: '404错误'}     
    },
    // 微网站1.1
    {
      path: '/designer_list',
      name: 'designer_list',
      component: designer_list,
      meta: {title: '找设计师 | 设计IN-设计师严选平台', keepAlive: true}     
    },
    {
      path: '/case_list',
      name: 'case_list',
      component: case_list,
      meta: {
        title: '看设计案例 | 设计IN-设计师严选平台',
        keepAlive: true

      }     
    },
    {
      path: '/house_type_list',
      name: 'house_type_list',
      component: house_type_list,
      meta: {title: '户型列表'}     
    },
    {
      path: '/floor_case_list',
      name: 'floor_case_list',
      component: floor_case_list,
      meta: {title: '小区案例列表'}     
    },
    {
      path: '/building',
      name: 'building',
      component: building,
      meta: {title: '楼盘详情'}     
    },
    {
      path: '/housetype',
      name: 'housetype',
      component: housetype,
      meta: {title: '户型详情'}     
    },
  ],
  // beforeRouteLeave(to, from, next){
  //   let position = window.scrollY();
  //   this.$store.commit('SAVE_POSITION', position); //离开路由时把位置存起来
  //   next();
  // }
  scrollBehavior(to, from, savedPosition){
    if(savedPosition){
      return savedPosition
    }else{
      if (from.meta.keepAlive) {
        from.meta.savedPosition = document.body.scrollTop
      }
      return { x: 0, y: to.meta.savedPosition || 0 }
    }
  }
})
