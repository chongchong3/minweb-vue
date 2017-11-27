<template>
  <div class="main-404">
      <div class="error-text">抱歉 ,  你迷失在设计IN的未知空间</div>
      <div class="img-404"><img src="../../static/images/Group@2x.png" alt="" class="error-img"></div>
      <router-link to="/index">
        <div class="point">返回首页</div>
      </router-link>
      <div @click="back"  class="point">返回上页</div>
  </div>
</template>
<style  scoped>
.main-404{
    margin-top: 1.4rem;
}
.error-text{   
    margin: 0 auto;
    padding-bottom: .5rem;  
    width: 16px; 
    line-height: 14px;    
    font-size: 12px;
    text-align: center;
    color:#999999;
}
.img-404{
    margin:0 auto;
    margin-bottom: .3rem;
    width: .82rem;
    height: .72rem;
}
.img-404 .error-img{
    width: 100%;
    height:100%;
}
.main-404 .point{
    margin:0 auto;
    margin-bottom: .1rem;
    width:1rem;
    height:.3rem;
    border:1px #979797 solid;
    border-radius:.15rem; 
    line-height: .3rem;
    color:#999999;
    text-align: center;
}
</style>

<script>
export default {
    methods:{
        back(){
            this.$router.back();
            // window.history.go() back() forward
        }
        
    }
  
}
</script>


