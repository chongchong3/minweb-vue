import Vue from 'vue'
export function getCaseMes(params) {
  return Vue.http.get('/designerCase/showAllWithOutDelete?designer_uid=43221212519728235', {params:params})
 }