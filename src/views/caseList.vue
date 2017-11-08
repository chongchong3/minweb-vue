<template>
  <div >
    <left-nav></left-nav>
    <head-nav></head-nav>
    <ul class="caseList">
      <li class="singleCase" v-for="(single, index) in dataJson" @click="choice($event,index)">
        <div class="leftPic" @click="linkTo(single.case_h5_url)">
          <img :src="single.widescreen_image" class="headPic">
        </div>
        <div class="detail">
          <p class="title" @click="linkTo(single.case_h5_url)">{{single.title}}</p>
          <p class="houseType" @click="linkTo(single.case_h5_url)">{{single.house_type}}</p>
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
        _self.dataJson.forEach((e, index)=>{
        if(e.title.length>11){
          _self.dataJson[index].title = e.title.substring(0,11) + '...';
        };
        
        })
        console.log(json.data.data.list)
      })
      .catch(err => {
        console.log(err)
      });
    var startPageY;
    document.body.addEventListener("touchstart", function(e) {
        startPageY = e.targetTouches[0].pageY;
        if(startPageY>=document.body.scrollHeight-100 && _self.moreData){
          _self.page_no++;
          _self.page_size=_self.page_no*4;
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
  //   var titleArr = document.querySelectorAll('.title');
  //   titleArr.forEach(function(e,index) {
  //     if(e.innerHTML.length>11){
  //       console.log(e.innerHTML)
  //       var ss = e.innerHTML.substring(0,11) + '...';
  //       console.log(ss)
  //     }
      
  //   }, this);
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
          console.log(data)
          if(data.length==0){
            _self.moreData ==false;
          }
          for (var i = 0; i < data.length; i++) {
            if(data[i].title.length>11){
              data[i].title = data[i].title.substring(0,11) + '...';
            };
            _self.dataJson.push(data[i]);
          }
          setTimeout(()=>{
             _self.moreData = true;
          },1000);
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
.headPic{
  width: 1.57rem;
  height: 1.08rem;
}
.detail{
  position: relative;
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

