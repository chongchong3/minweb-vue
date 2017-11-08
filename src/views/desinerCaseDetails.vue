<template>
<div>
<div v-html="caseDetails" class="caseDetails" @touchstart="touchstart($event)" @touchend="touchend($event)">
    </div>
    <appointment :desinerMes="desinerMes"></appointment> 
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
      desinerMes:{}
    };
  },
  created() {
    vm = this;
    this.getData();
  },
  
  methods: {
    getData() {
        
      var desinerDetails=this.$store.getters.desinerDetails;
      var data =desinerDetails.designer_uid?desinerDetails:JSON.parse(localStorage.GetDesinerDetails);// 
     this.desinerMes={
        designer_level:data.designer_level,
        designer_name:data.designer_name,
        designer_uid:data.designer_uid,
        designer_name:data.designer_name,
        head_image_url:data.head_image_url
      }
      this.caseDetails = data.designer_case_list[this.$route.query.caseId].case_detail;
      document.title = data.designer_case_list[this.$route.query.caseId].title;

    },
    touchstart(event) {
      this.startY = event.changedTouches[0].pageY;
    },
    touchend(event) {
      var endY = event.changedTouches[0].pageY;
      var offsetTop = event.target.offsetTop;
      if (this.startY - endY < -30 && offsetTop < document.body.clientWidth) {
        var url = "./#/desinerDetails/" +this.$route.params.desiner_id +"?caseId=" + this.$route.query.caseId +
          "&startIndex=1";
        window.location.href = url;
      }
    }
  }
};
</script>
<style>
.caseDetails img {
  max-width: 100%;
}
</style>




