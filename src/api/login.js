import Vue from 'vue'
export function getUserInfo(params) {
  return Vue.http.get('/login/miniSiteRegister', {params:params})


 }
