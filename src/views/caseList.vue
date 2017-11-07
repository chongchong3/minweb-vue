<template>
  <div >
    <left-nav></left-nav>
    <head-nav></head-nav>
    <ul class="caseList">
      <li class="singleCase" v-for="(single, index) in dataJson" @click="choice($event,index)">
        <div class="leftPic">
          <img src="http://placehold.it/160x120" class="headPic">
        </div>
        <div class="detail">
          <p class="title">{{single.title}}</p>
          <p class="houseType">{{single.house_type}}</p>
          <div class="desiner">
            <img class="headImg" :src="single.head_image_url" alt="">
            <div class="nameLev">
              <p class="desinerName">{{single.designer_name}}</p>
              <p class="desinerRank">{{single.designer_level}}</p>
            </div>   
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import headNav from '@/components/headNav';
import leftNav from "../components/leftNav"; //引用左侧菜单栏
// import store from "@/store";
export default {
  components:{
    headNav,
    leftNav
 	},
  data(){
    return{
      page_no:1,
      page_size:4,
      moreData:false,
      dataJson:null,
      touchmove:false
    }
  },
  created() {
    var _self = this;
     this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "caseList" //设置左菜单栏高亮
    });
    _self.moreData = true;
    this.$store.dispatch("GetCaseMes", { page_size: 4, page_no: 1 })
      .then(json => {
        _self.dataJson=json.data.data.list;
        console.log(json.data.data.list)
      })
      .catch(err => {
        console.log(err)
      });
    var startPageY;
    console.log(document.body.scrollHeight);
    document.body.addEventListener("touchstart", function(e) {
        startPageY = e.targetTouches[0].pageY;
        if(startPageY>=document.body.scrollHeight-100){
          _self.page_no++;
          _self.page_size=_self.page_no*4;
           _self.getMoreData();
       
      }
      console.log(startPageY)
    });
    document.body.addEventListener('touchmove',function(e){
      _self.touchmove=true;
    });
    document.body.addEventListener("touchend", function(e) {
        // var endPageY = e.targetTouches[0].pageY;
    });
  },
  mounted(){
  },
  methods:{  
    getMoreData(){
      //接口数据
      var _self=this;
      this.$store
        .dispatch("GetCaseMes", {page_no:_self.page_no,page_size:4})
        .then((json) => {
          _self.moreData=false;
          var data = json.data.data.list;
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
          }
          console.log(_self.dataJson)
          setTimeout(()=>{
             _self.moreData = true;
          },1000);
        })
        .catch(err => {
      
        });
    },
    choice(e, index){
      // console.log(index);
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
  /* font-size: 16px; */
  margin-bottom: .1rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
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

