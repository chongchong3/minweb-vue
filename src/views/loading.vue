<template>
  <div >
    <ul class="caseList">
      <li class="singleCase">
        <div class="leftPic">
          <img src="http://placehold.it/157x108" class="headPic">
        </div>
        <div class="detail">
          <p class="title">超级无敌</p>
          <p class="houseType">大户型</p>
          <div class="desiner">
            <img class="headImg" src="http://placehold.it/40x40" alt="">
            <div class="nameLev">
              <p class="desinerName">
                李发全
              </p>
              <p class="desinerRank">设计师</p>
            </div>   
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
ul, li, p{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.caseList{
  margin: 0 auto;
  width: 96%;
} 
.singleCase{
   display: flex;                /*设置为flex布局*/
  justify-content: space-around;
  overflow:hidden;
  border-bottom: 1px solid #ccc;
}
.leftPic{
  margin:.1rem 0;
  width: 1.57rem;
  height: 1.08rem;
}
.detail{
  margin-top:.1rem;
  margin-left:.1rem;
  width: 100%;
}
.detail .title{
  font-size: 14px;
  margin-bottom: .1rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.houseType{
 
}
.desiner{
  position: relative;
  top: .3rem;
}
.headImg{
  float: left;
  border-radius: 50%;
  width: .4rem;
  height: .4rem;
}
.nameLev{
  margin-left: .1rem;
  float: left;
}
.desinerName{
  line-height: .2rem;
}
.desinerRank{
  color: #93D36A;
  line-height: .2rem;
}
</style>

