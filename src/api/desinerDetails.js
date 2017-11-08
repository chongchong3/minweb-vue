import Vue from 'vue'
export function getDesinerDetails(params) {
    return Vue.http.get('/designer/getDesignerByUid', {params:params})
//  return Vue.jsonp('/designer/getDesignerByUid',params)

 }
