import Vue from 'vue'

export function checkAppointsStatus(params) {
  return Vue.http.post('/Designer/checkAppointsStatus', {params:params})  //查询预约记录接口
 }
