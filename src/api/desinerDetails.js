import Vue from 'vue'
export function getDesinerMes(params) {
 return Vue.jsonp('/designer/getDesigner',params)

 }
