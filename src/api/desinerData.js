import Vue from 'vue'
export function getDesinerMes(params) {
  return Vue.http.post('/designer/listDesigners', {params:params})


 }

//  https://app.wesetup.cn/designer/listDesigners