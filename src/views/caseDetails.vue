<template>
  <div>
      <transparent-nav></transparent-nav>
      <div v-html="caseDetails" class="page_caseDetails">
      </div>
      <appointment :desiner="desienrMes"></appointment> 
  </div>
</template>
<style scoped>
.page_caseDetails {
  padding-top:.5rem;
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
import transparentNav from "../components/detailNav/transparentNav";
export default {
    components: { appointment, transparentNav },
  data() {
    return {
      case_title:'',
      image:'',
      caseDetails: "",
      desienrMes:{},
      authorId:''
  
    };
  },
  mounted(){
    var _self =this;
    this.$nextTick(function(){
       this.shareWx.getId();
       console.log( '案例详情' + _self.case_title + '=====' + _self.image);
      this.shareWx.shareReady(_self.case_title+"| 设计IN-设计师严选平台",'',_self.image);
    });
  },
  created() {
    
    vm = this;
     this.authorId=this.getCookie("wechat_id");
    if(!this.authorId){
         window.location.href = "/minisite/login?originUrl="+this.$route.fullPath;
         return
    }
    this.getData();
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
              console.log('案例详情');
              document.title=response.data.data.title;
              _self.case_title = response.data.data.title;
              _self.image = response.data.data.image;
              _self.caseDetails=response.data.data.caseDetail;
              console.log(_self.case_title + '=====' + _self.image);
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




