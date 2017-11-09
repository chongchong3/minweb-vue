<template>
  <div class="bg">
      <div class="button" @click="goHome">
      	进入设计IN
      </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
        };
    },
    methods: {
        goHome(){
              this.$router.push({ path:'/'});
        }
    }
}
</script>
<style scoped>
.bg {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url('http://ovfllimsi.bkt.clouddn.com/npc_bg_new@3x.png');
    background-size: 100% 100%;
}
.button{
	position: absolute;
    bottom: .56rem;
    left:50%;
    -webkit-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
　　-ms-transform: translate(-50%, -50%);
　　-o-transform: translate(-50%, -50%);
　　transform: translate(-50%, -50%);
	height: .36rem;
	width: 1rem;
    background: #93D36A;
    color: #fff;
	line-height: .36rem;
	text-align: center;
}

</style>
