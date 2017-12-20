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
// const casePrev = () => import(/* webpackChunkName: "mint-case */ '@/views/casePrev')

// 微网站1.1
const case_list = () => import(/* webpackChunkName: "mint-case */ '@/views/case_list')
const designer_list = () => import(/* webpackChunkName: "mint-case */ '@/views/designer_list')
const videoDemo = () => import(/* webpackChunkName: "mint-case */ '@/views/videoDemo')
export default new Router({
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
      meta: {title: '设计IN-设计师严选平台'}
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
      meta: {title: '找设计师 | 设计IN-设计师严选平台'}
    },
    {
      path: '/desinerDetails/:desiner_id',
      name: 'desinerDetails',
      component: desinerDetails,
      meta: {title: '设计师详情'}
    },

    {
      path: '/caseList',
      name: 'caseList',
      component: case_list,
      meta: {title: '看设计案例 | 设计IN-设计师严选平台'}
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
      path: '/caseDetailsNew',
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
      meta: {title: '设计师列表'}     
    },
    {
      path: '/case_list',
      name: 'case_list',
      component: case_list,
      meta: {title: '案例列表'}     
    },
    {
      path: '/videoDemo',
      name: 'videoDemo',
      component: videoDemo,
      meta: {title: '视频'}     
    },
  ]
})
