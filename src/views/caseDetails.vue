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
      desienrMes:{},
      authorId:''
  
    };
  },
  mounted(){
    this.getData();
 
  },
  created() {
    vm = this;
     this.authorId=this.getCookie("wechat_id");
    if(!this.authorId){
         window.location.href = "https://www.shejiin.net/minisite/login?originUrl="+this.$route.fullPath;
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
                console.log('请求出错');
                return
              }
              
              document.title=response.data.data.title;
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




