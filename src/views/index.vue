<template>
  <div>
      <img src="static/images/designer_96px.png" alt="">
  </div>
</template>
<script>
export default {
  created() {
      var _self=this;
      this.$store.dispatch("GetDesinerMes", {page_no:1,page_size:20})
        .then((response) => {
          var data =response.data.data.result;
    
        })
        .catch(error => {
          console.log(error);
        });
    
  }
};
</script>

