import Vue from 'vue'
export function getAuthorize(params) {
  return Vue.http.get('/minisite/login', {params:params})
 }
