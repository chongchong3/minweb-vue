<template>
  <div>
      <div v-html="caseDetails" >
       
      </div>
     <p>案例详情</p>
      <appointment ></appointment> 
  </div>
</template>
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
            _self.$http.get('/minisite/getDesignerCaseDetail', {params:{case_id:_self.$route.params.caseId}})
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



