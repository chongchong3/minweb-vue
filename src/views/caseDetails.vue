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
      case_title:'',
      caseDetails: "",
      desienrMes:{},
      authorId:''
  
    };
  },
  mounted(){
    var _self =this;
    this.getData();
    this.$nextTick(function(){
       this.shareWx.getId();
      //  title,desc,link,imgUrl
      this.shareWx.shareReady(_self.case_title+"| 设计IN-设计师严选平台",);
    });
  },
  created() {
    vm = this;
     this.authorId=this.getCookie("wechat_id");
    if(!this.authorId){
         window.location.href = "/minisite/login?originUrl="+encodeURI(process.env.BASE_API+'/#/'+this.$route.fullPath);
         return
    }
  },
  methods: {
    getData(){
      var _self=this;
          return new Promise((resolve, reject) => {
            _self.$http.get('/minisite/getDesignerCaseDetail', {params:{case_id:_self.$route.params.case_id}})
            .then(response=>{
              if(response.data.code!=200){

                return
              }
              document.title=response.data.data.title;
              _self.case_title = response.data.data.title;
              _self.caseDetails=response.data.data.caseDetail;
              _self.desienrMes={
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




