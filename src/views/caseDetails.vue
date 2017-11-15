<template>
  <div>
      <div v-html="caseDetails" class="page_caseDetails">
      </div>
      <appointment :desiner="desienrMes"></appointment> 
  </div>
</template>
<style scoped>
.page_caseDetails {
  overflow: scroll;
}
.page_caseDetails img {
  max-width:100%  !important;
  height:auto !important;
}
</style>

<script>
var vm = {};
import appointment from "../components/appointment";
export default {
    components: { appointment },
  data() {
    return {
      caseDetails: "",
      desienrMes:{}
  
    };
  },
  mounted(){
    this.getData();
 
  },
  created() {
    vm = this;
  },
  methods: {
    getData(){
      var _self=this;
          return new Promise((resolve, reject) => {
            _self.$http.get('/minisite/getDesignerCaseDetail', {params:{case_id:_self.$route.params.case_id}})
            .then(response=>{
              if(response.data.code!=200){
                console.log('请求出错');
                return
              }
              
              document.title=response.data.data.title;
              _self.caseDetails=response.data.data.caseDetail;
              _self.desienrMes={
                designer_uid:response.data.data.designerId,
                head_image_url:response.data.data.image,
                designer_name:response.data.data.name
              }
          

              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
        });
    }
  }
};
</script>




