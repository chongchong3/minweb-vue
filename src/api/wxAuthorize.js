import Vue from 'vue'
export function getAuthorize() {
  return Vue.http.get('https://shejiin.net/minisite/login')
 }
