<template>
 <div>
    <left-nav></left-nav>
  <head-nav></head-nav>
 </div>
</template>

<script>
import leftNav from "../components/leftNav";
import headNav from "../components/headNav";
export default {
  components: { leftNav, headNav },
  data() {
    return {};
  },
  created() {
      
    this.$store.commit("setNav", {
        isShow:true,
        current:'index'
    });
  }
};
</script>
