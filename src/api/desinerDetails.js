import Vue from 'vue'
export function getDesinerDetails(params) {
 return Vue.jsonp('/designer/getDesigner',params)

 }
