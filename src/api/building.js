import Vue from 'vue'

export function getBuildCaseType(params) {
  return Vue.http.get('/minisite/getByHouseType?'+params)

 }

 export function getHouseTypeList(params) {
  return Vue.http.post('/location/getHouseTypeList', params)
 }
