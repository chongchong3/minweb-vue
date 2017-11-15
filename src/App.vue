<template>
  <div id="app" class="container">
    <router-view/>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  created() {
    this.author();
  },

  methods: {
    author() {
      this.$store
        .dispatch("GetAuthorize")
        .then(response => {
          localStorage.setItem("WxAuthorize", response.data);
        })
        .catch(error => {
          console.log(error);
          localStorage.setItem("WxAuthorize", "testAuthorId111111");
        });
    }
  }
};
</script>

<style>
html {
  font-size: 100px;
  height: 100%;
}
body {
  font-size: 12px;
  height: 100%;
}
.container {
  padding-top: 0.52rem;
  height: 100%;
}
.more {
  color: #999;
  font-size: 0.11rem;
  line-height: 14px;
  margin-bottom: 0.09rem;
}
</style>
