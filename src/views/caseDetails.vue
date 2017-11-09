<template>
  <div>
      <div v-html="caseDetails" >
    </div>
      <appointment :desinerMes="desinerCaseMes"></appointment> 
  </div>
</template>
<script>
var vm = {};
import appointment from "../components/appointment";
export default {
    components: { appointment },
  data() {
    return {
      startY: 0,
      caseDetails: "",
      caseId: 0,
      desinerCaseMes:{}
    };
  },
  mounted(){
    this.getData();
  },
  created() {
    vm = this;
    
  },
  methods: {
    getData() {
      var _self=this;
      var deserList=this.$store.getters.deserList;
      var orderId=this.$route.query.case_id;

      if(this.$store.getters.desinerDetails.message){
         _self.caseDetails=response.data.data.message;
        return

      }
      this.$store.dispatch("GetCaseDetails",{case_id:this.$route.params.case_id})
        .then((response) => {
          localStorage.setItem("GetCaseDetails",JSON.stringify(response.data.data.message));
         _self.caseDetails=response.data.data.message;
         
        
        })
        .catch(error => {
          console.log(error);
        });
      var data =deserList.designer_uid?deserList:JSON.parse(localStorage.GetCaseList);// 
      this.caseDetails = data[orderId].case_detail;
      document.title = data[orderId].title;
       this.desinerCaseMes={
        designer_level:data[orderId].designer_level,
        designer_uid:data[orderId].designer_uid,
        designer_name:data[orderId].designer_name,
        head_image_url:data[orderId].head_image_url,
      }

    }
  }
};
</script>



