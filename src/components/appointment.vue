<template>
  <div class="appoinmnet">
      <div class="main">
          <div class="fl">
              <div class="head">
                 <img :src="desinerMes.head_image_url" >
             </div>
                <div class="aside">
                  <p class="name">{{desinerMes.designer_name}}</p>
                    <p class="level">高级设计师</p>
              </div>
          </div>
          <div class="orderDesiner">预约设计师</div>
       
      </div>
  </div>
</template>
<script>
export default {
   props: ['desinerMes'],
  
}
</script>

<style>
.appoinmnet {
  box-shadow: -4px -3px 14px #ccc;
  padding: 0.08rem 0;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  z-index: 99;

  width: 100%;
}
.appoinmnet .main {
  height: 0.46rem;
  padding: 0 0.18rem;
  overflow: hidden;
}
.appoinmnet .fl {
  float: left;
}
.appoinmnet .head {
  width: 0.35rem;
  display: inline-block;
  margin-right:.1rem;
  float:left;
  margin-top:.1rem;
  /* margin-top:.1rem; */
}
.appoinmnet .head img {
  display: block;
  width: 100%;
  border-radius: 50%;

}
.appoinmnet .aside {
  display: inline-block;
  margin-top:.1rem;
}
.appoinmnet .aside .name {
  font-size: 0.16rem;
  margin: 0;
}
.appoinmnet .orderDesiner {
  display: inline-block;
  margin-top:.1rem;
  background-color: #79e149;
  color: #fff;
  padding: 0.06rem 0.07rem;
  border-radius: 0.02rem;
  font-size: 0.14rem;
  float: right;
}
.appoinmnet .score {
  width: 1rem;
}
.appoinmnet .level{
    color: #93D36A;
    margin:.02rem 0 0 0;
    font-size:.12rem;
}
</style>

