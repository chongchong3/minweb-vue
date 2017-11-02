import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)
const Index = () => import(/* webpackChunkName: "mint-index" */ '@/views/index')
const guide = () => import(/* webpackChunkName: "mint-guide" */ '@/views/guide')
const desinerList = () => import(/* webpackChunkName: "mint-desiner" */ '@/views/desinerList')
const caseList = () => import(/* webpackChunkName: "mint-case" */ '@/views/caseList')
const login = () => import(/* webpackChunkName: "mint-login */ '@/views/login')
const caseDetails = () => import(/* webpackChunkName: "mint-case */ '@/views/caseDetails')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: Index,
      meta: {title: 'shouye'}
    },
    {
      path: '/guide',
      name: 'guide',
      component: guide,
      meta: {title: 'guide'}
    },
    {
      path: '/login',
      name: 'login',
      component: login,
      meta: {title: 'login'}
    },
    {
      path: '/desinerList',
      name: 'desinerList',
      component: desinerList,
      meta: {title: 'desinerList'}
    },
    {
      path: '/caseList',
      name: 'caseList',
      component: caseList,
      meta: {title: 'caseList'}
    },
    {
      path: '/caseDetails',
      name: 'caseDetails',
      component: caseDetails,
      meta: {title: 'caseDetails'}
      
    }
  ]
})
