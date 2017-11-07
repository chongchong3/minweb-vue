<template>
    <div v-html="caseDetails" @touchstart="touchstart($event)" @touchend="touchend($event)">
    </div>
</template>
<script>
var vm = {};
export default {
  data() {
    return {
      startY: 0,
      caseDetails: "",
      caseId: 0
    };
  },
  created() {
    vm = this;
    this.getData();
  },
  methods: {
    getData() {
        debugger
      var desinerDetails=this.$store.getters.desinerDetails;
      var data =desinerMes.designer_uid?desinerDetails:JSON.parse(localStorage.desinerDetails);// 
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
        var url = "./#/desinerDetails" +this.$route.params.desiner_id +"?caseId=" + this.$route.query.caseId +
          "&startIndex=1";
        window.location.href = url;
      }
    }
  }
};
</script>



