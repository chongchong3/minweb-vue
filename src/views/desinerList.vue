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
    this.$store.dispatch("GetDesinerMes", {page_no:1,page_size:20})
        .then(() => {
          var data = this.$store.getters.desinerMes;
          console.log(data,'test');

        })
        .catch(error => {
          console.log(error);
        });
  }
}
</script>
