<template>
  <div>
      desinerList
  </div>
</template>
<script>
export default {
  data(){
    return {

    }
  },
  created(){

    debugger
    this.$http({
      method:'POST',
      url:'/designer/listDesigners',
      data:{page_no:1,page_size:20},
      headers:{
       "Content-Type": "application/json;charset=UTF-8"
     }
      }).then(response=>{
        console.log(response)
      })
  //               ])
  //   this.$store.dispatch("GetDesinerMes", {page_no:1,page_size:20})
  //       .then(() => {
  //         var data = this.$store.getters.desinerMes;
  //         console.log(data,'test');

  //       })
  //       .catch(error => {
  //         console.log(error);
  //       });
  // }
}
}
