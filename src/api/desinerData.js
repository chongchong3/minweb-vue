import Vue from 'vue'
export function getDesinerMes(params) {
  return Vue.http.post('/designer/listDesigners', {page_no:1,page_size:20})


 }