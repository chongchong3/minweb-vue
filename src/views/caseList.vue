<template>
  <div >
    <left-nav></left-nav>
    <head-nav></head-nav>
    <ul class="caseListContainer">
      <li class="singleCase" v-for="(single, index) in dataJson" @click="choice($event,index)">
        <div class="leftPic" @click="linkTo(single.case_h5_url)">
          <img :src="single.widescreen_image" class="headPic">
        </div>
        <div class="detail">
          <p class="title" @click="linkTo(single.case_h5_url)">{{single.title}}</p>
          <p class="houseType" @click="linkTo(single.case_h5_url)">{{single.house_type}}</p>
          <div class="desiner">
            <router-link :to="'desinerDetails/'+single.designer_uid">
            <img class="headImg" :src="single.head_image_url" alt="">
            </router-link>
            <div class="nameLev">
              <router-link :to="'desinerDetails/'+single.designer_uid">
              <p class="desinerName">{{single.designer_name}}</p>
              </router-link>
              <router-link :to="'desinerDetails/'+single.designer_uid">
              <p class="desinerRank">{{single.designer_level}}</p>
              </router-link>
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
      page_size:6,
      moreData:true,
      dataJson:null,
      touchmove:false
    }
  },
  created() {
    //标题超出处理
    var _self = this;
     this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "caseList" //设置左菜单栏高亮
    });
    this.$store.dispatch("GetCaseMes", { page_size: 6, page_no: 1 })
      .then(json => {
        _self.dataJson=json.data.data.list;
        localStorage.setItem("GetCaseList",JSON.stringify(json.data.data.list));
     
      })
      .catch(err => {
        console.log(err)
      });
    var startPageY;
    document.body.addEventListener("touchstart", function(e) {
        startPageY = e.targetTouches[0].pageY;
        if(startPageY>=document.body.scrollHeight-200 && _self.moreData){
          _self.page_no++;
           _self.getMoreData();
       
      }
    });
    document.body.addEventListener('touchmove',function(e){
      // _self.touchmove=true;
    });
    document.body.addEventListener("touchend", function(e) {
        // var endPageY = e.targetTouches[0].pageY;
    });
    
  },
  updated(){

  },
  methods:{  
    getMoreData(){
      //接口数据
      var _self=this;
      this.$store
        .dispatch("GetCaseMes", {page_no:_self.page_no,page_size:_self.page_size})
        .then((json) => {
          var data = json.data.data.list;
          if(data.length<_self.page_size){
            _self.moreData=false;
          }
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
          }
          // console.log(_self.dataJson)
   
        })
        .catch(err => {
      
        });
    },
    choice(e, index){
      console.log(index);
    },
    linkTo(url){
    		window.location.href=url;
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
.caseListContainer{
  margin: 0 auto;
  width: 96%;
} 
.singleCase{

  overflow:hidden;
  border-bottom: 1px solid #ccc;
}
.caseListContainer .leftPic{
  /* margin:.1rem 0; */
  width: 1.4rem;
  float:left;
  /* height: 1.08rem; */
}
.caseListContainer li {
  overflow: hidden;
  padding:.14rem 0;
}
.headPic{
  width:100%;
  display: block;
}
.caseListContainer .detail{
  margin-left:1.5rem;

}
.caseListContainer .detail .title{
  font-size: 14px;
  margin-bottom: .1rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.houseType{
  color:#9e9e9e;
 
}
.caseListContainer .desiner{
 margin-top:.25rem;
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
  color: black;
}
.desinerRank{
  color: #93D36A;
  line-height: .2rem;
}
</style>

