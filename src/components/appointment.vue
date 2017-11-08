<template>
  <div class="appoinmnet">
      <div class="main">
          <div class="fl">
              <div class="head">
                 <img src="http://dkongjian.dkongjian.cn/2017/09/18/1505718706483-9pegz9l8mshbntbrmn8aug14i.png" >
             </div>
                <div class="aside">
                  <p class="name">小丸子</p>
                  <img src="http://os5lxzkas.bkt.clouddn.com/score_3.png" class="score">
              </div>
          </div>
          <div class="orderDesiner">预约设计师</div>
       
      </div>
  </div>
</template>
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
}
.appoinmnet .head img {
  display: block;
  width: 100%;
  border-radius: 50%;
}
.appoinmnet .aside {
  display: inline-block;
}
.appoinmnet .aside .name {
  font-size: 0.18rem;
  margin: 0;
}
.appoinmnet .orderDesiner {
  display: inline-block;
    margin-top:.01rem;
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
</style>

