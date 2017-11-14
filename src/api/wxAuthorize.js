import Vue from 'vue'
export function getAuthorize(params) {
  return Vue.http.get('https://shejiin.net/minisite/login', {params:params})
 }
