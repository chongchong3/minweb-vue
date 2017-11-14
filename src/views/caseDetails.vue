<template>
  <div>
      <div v-html="caseDetails" class="page_caseDetails">
      </div>
      <appointment ></appointment> 
  </div>
</template>
<style scoped>
.page_caseDetails {
  margin-top:-.52rem;
  overflow: scroll;

}
.page_caseDetails img {
  max-width:100%;
  height:auto !important;;
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
              _self.caseDetails=response.data.data.message;
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




