import Vue from 'vue'
export function sendMsg(params) {
  return Vue.http.post('/sendMessage', params)
 }
