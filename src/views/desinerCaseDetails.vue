<template>
<div class="desinerCaseDetails">
<div v-html="caseDetails" class="caseDetails" @touchstart="touchstart($event)" @touchend="touchend($event)">
    </div>
    <appointment :desiner="desinerMes"></appointment> 
</div>
    
</template>
<style>
.desinerCaseDetails img {
  max-width:100% !important;
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
      startY: 0,
      caseDetails: "",
      caseSlideIndex: 0,
      desinerMes:{},
      authorId:''
    };
  },
  beforeCreate(){

  },
  created() {
    vm = this;
    this.authorId=this.getCookie("wechat_id");
    if(!this.authorId){
      alert( window.location.href = "/minisite/login?originUrl="+encodeURI(process.env.BASE_API+'/#'+this.$route.fullPath),'pathTest')
            window.location.href = "/minisite/login?originUrl="+encodeURI(process.env.BASE_API+'/#'+this.$route.fullPath);
         return
    }  
  
  },
  mounted(){
    this.getData();
  },
  methods: {
    getData() { 
          var _self=this;
          return new Promise((resolve, reject) => {
            _self.$http.get('/minisite/getDesignerCaseDetail', {params:{case_id:_self.$route.query.caseId}})
            .then(response=>{
              if(response.data.code!=200){
                return
              } 
              document.title=response.data.data.title;
              _self.caseDetails=response.data.data.caseDetail;
              _self.desinerMes={
                designer_uid:response.data.data.designerId,
                head_image_url:response.data.data.image,
                designer_name:response.data.data.name,
                authorId:_self.authorId
               
              }
              resolve(response);
            })
            .catch(error => {
              reject(error);
            });
        });
    },
    touchstart(event) {
      this.startY = event.changedTouches[0].pageY;
    },
    touchend(event) {
      var endY = event.changedTouches[0].pageY;
      var offsetTop = event.target.offsetTop;
      if (this.startY - endY < -30 && offsetTop < document.body.clientWidth) {
        var url = "./#/desinerDetails/" +this.$route.params.desiner_id +"?caseSlideIndex=" + this.$route.query.caseSlideIndex +"&startIndex=1";
        window.location.href = url;
      }
    },
     getCookie(name) {
      var arr,reg=new RegExp("(^| )"+name+"=([^;]*)(;|$)");
      if(arr=document.cookie.match(reg))
      return unescape(arr[2]);
      else
      return null;
      }
  }
};
</script>
<style scoped>
.page_caseDetails img {
  max-width: 100% !important;
  height:auto !important;
}
</style>




