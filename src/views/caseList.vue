<template>
  <div class="caseList">
    <ul>
      <li class="singleCase">
        <div class="leftPic">
          <img src="http://placehold.it/160x120" class="headPic">
        </div>
        <div class="detail">
          <p class="title">四家大院门厅晚风香堂</p>
          <p class="houseType">大户型</p>
          <div class="desiner">
            <img class="headImg" src="http://placehold.it/40x40" alt="">
            <div class="nameLev">
              <p class="desinerName">梁启超</p>
              <p class="desinerRank">牛逼设计师</p>
            </div>
            
          </div>
        </div>
      </li>
      <li class="singleCase">
        <div class="leftPic">
          <img src="http://placehold.it/160x120" class="headPic">
        </div>
        <div class="detail">
          <p class="title">四家大院门厅晚风香堂</p>
          <p class="houseType">大户型</p>
          <div class="desiner">
            <img class="headImg" src="http://placehold.it/40x40" alt="">
            <div class="nameLev">
              <p class="desinerName">梁启超</p>
              <p class="desinerRank">牛逼设计师</p>
            </div>
            
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      page_no:1,
      moreData:false,
      dataJson:null
    }
  },
  mounted(){
    var _self=this;
    window.addEventListener('scroll',function(){
      /**
       * 就是计算滚动条位置，当滚动条位置加上网页可视高度等于页面高度时触发加载函数
       *       网页可视高度  window.innerHeight       文档高度  document.body.scrollHeight
       */
      if(window.pageYOffset + window.innerHeight >= document.body.scrollHeight){
        console.log("加载数据");
        _self.page_no++;
        // _self.moreData = true;
        _self.getMoreData();
      }
    });
  },
  methods:{
    getMoreData(){
      //接口数据
      // this.$store
      //   .dispatch("getDesinerMes", {page_no:this.page_no,page_size:20})
      //   .then(() => {
      //     var json = _self.$store.getters.userMes;
      //     _self.dataJson = json;
      //   })
      //   .catch(err => {
      
      //   });
    }
  }
}
</script>
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
  overflow:hidden;
  border-bottom: 1px solid #ccc;
}
.leftPic{
  margin:.1rem 0;
  float: left;
}
.detail{
  position: relative;
  margin-top:.1rem;
  margin-left:.1rem;
  float: left;
}
.detail .title{
  font-size: 16px;
  margin-bottom: .1rem;
}
.houseType{
 
}
.desiner{
  position: relative;
  top: .4rem;
}
.headImg{
  float: left;
  border-radius: 50%;
}
.nameLev{
  margin-left: .1rem;
  float: left;
}
.desinerName{
  line-height: .2rem;
}
.desinerRank{
  color: blue;
  line-height: .2rem;
}
</style>

