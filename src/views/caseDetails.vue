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
      
      var deserList=this.$store.getters.deserList;
      var caseId=this.$route.params.case_id;
      var data =deserList.designer_uid?deserList:JSON.parse(localStorage.GetCaseList);// 
      this.caseDetails = data[caseId].case_detail;
      document.title = data[caseId].title;
       this.desinerCaseMes={
        designer_level:data[caseId].designer_level,
        designer_uid:data[caseId].designer_uid,
        designer_name:data[caseId].designer_name,
        head_image_url:data[caseId].head_image_url,
      }

    }
  }
};
</script>



