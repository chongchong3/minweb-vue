import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Index = () => import(/* webpackChunkName: "mint-index" */ '@/views/index')
const guide = () => import(/* webpackChunkName: "mint-guide" */ '@/views/guide')
const desinerList = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerList')
const desinerDetails = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerDetails')
const caseList = () => import(/* webpackChunkName: "mint-case" */ '@/views/caseList')
const desinerCaseDetails = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerCaseDetails')
const login = () => import(/* webpackChunkName: "mint-login */ '@/views/login')
const caseDetails = () => import(/* webpackChunkName: "mint-case */ '@/views/caseDetails')
const aboutUs = () => import(/* webpackChunkName: "mint-case */ '@/views/aboutUs')
const chat = () => import(/* webpackChunkName: "mint-chat */ '@/views/chat')
const test = () => import(/* webpackChunkName: "mint-case */ '@/views/demo')
const loading = () => import(/* webpackChunkName: "mint-case */ '@/views/loading')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      meta: {title: '首页'}
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      meta: {title: '引导页面'}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {title: '登录页'}
    },
    {
      path: '/desiner',
      name: 'desinerList',
      component: desinerList,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/desinerDetails/:desiner_id',
      name: 'desinerDetails',
      component: desinerDetails,
      meta: {title: '设计师详情'}
    },
    {
      path: '/desinerCaseDetails/:desiner_id',
      name: 'desinerCaseDetails',
      component: desinerCaseDetails,
      meta: {title: '设计师案例详情'}
    },
    {
      path: '/caseList',
      name: 'caseList',
      component: caseList,
      meta: {title: '设计IN-设计师严选平台'}
    },
    {
      path: '/caseDetails/:case_id',
      name: 'caseDetails',
      component: caseDetails,
      meta: {title: '案例详情'}
      
    },
    {
      path: '/aboutUs',
      name: 'aboutUs',
      component: aboutUs,
      meta: {title: '设计IN-设计师严选平台'}
      
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat,
      meta: {title: '在线客服'}
      
    },
    {
      path: '/test',
      name: 'test',
      component: test,
      meta: {title: '测试页面'}
      
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading,
      meta: {title: '加载更多'}
      
    }
  ]
})
