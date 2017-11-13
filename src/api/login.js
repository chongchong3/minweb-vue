import Vue from 'vue'
export function getUserInfo(params) {
  return Vue.http.post('/login/miniSiteRegister', {params:params})


 }
