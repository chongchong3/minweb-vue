<template>
  <div class="floor">
    <left-nav></left-nav>
    <head-nav></head-nav>
      <ul>
        <li class="floor-li" v-for="(single, index) in dataJson" >
          <router-link :to="'/building?buildUid='+single.building_premises_uid">
          <div class="img-partent" >
            <img  :src="single.background_picture"  alt="" class="floor-img ">
            <!-- <img  src="https://assets.wesetup.cn/2017/12/21/1513821899057-ztq9mf2i1m2jdxug5uahsemi.jpg"  alt="" class="floor-img "> -->
          </div>
          <div class="floor-des">
              <p class="floor-title">{{single.premises_name}}</p>
              <p class="floor-detail">{{single.premises_location}}</p>
          </div>
          </router-link>
          <div class="width-line"></div>
        </li>
      </ul>
      <div class="scroll-to-top" v-if="scrollTopIcon" @click="scrollToTop"><img src="../../static/images/toTop@3x.png" alt="" class="icon-img"></div>
      <loading-animation v-if="loading"></loading-animation>
      <no-more-data-point v-if="!moreData"></no-more-data-point>
  </div>
</template>
<script>
import axios from 'axios';
import loadingAnimation from '@/components/loadingAnimation'; //数据加载动画
import noMoreDataPoint from '@/components/noMoreDataPoint'; //数据加载完提示
import leftNav from "../components/leftNav"; //引用左侧菜单栏
import headNav from "../components/headNav"; //引用顶部菜单栏
export default {
  components:{loadingAnimation, leftNav, headNav, noMoreDataPoint},
  data(){
      return{
        page_no: 0,
        page_size: 10,
        page_count: 1,
        moreData: true,
        loading:false,
        timer:null,
        scrollTopIcon:false,
        dataJson: null,
        case_list_top:0
      }
  },
  created(){
    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "floor_list" //设置左菜单栏高亮
    });
    var _self = this;
    // 首次加载数据
    axios.get('/location/listPremiseses', {
        params: {
            pageNo: 0, 
            pageSize: this.page_size
        }
    })
    .then(function (response) {
      _self.dataJson = response.data.data.result;
      _self.page_count = response.data.data.total;
      if (_self.dataJson.length < _self.page_size) {
          _self.moreData = false;
          _self.loading = false;
        }
    })
    .catch(function (error) {
        console.log(error);
    });
    //加载更多数据
    window.addEventListener('scroll',function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        //加载更多
        if (scrollTop >= scrollHeight - clientHeight && _self.moreData) {
          _self.page_no++;
          _self.getMoreData();
        }
    });
  },
  mounted(){
    this.$nextTick(function(){    
        this.shareWx.getId();
        this.shareWx.shareReady("看楼盘列表 | 设计IN-设计师严选平台");
    });
    this.scroll();
    var _self = this;
    document.body.addEventListener("touchstart", function(e) {
      clearInterval(_self.timer);
    });
  },
  methods:{
    scroll() {
        var _self = this;
        window.addEventListener("scroll", function() {
            var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
            if(scrollTop>clientHeight){
                _self.scrollTopIcon = true;
            }else{
                _self.scrollTopIcon = false;
            }
        }, false);
    },
    getMoreData(){
      var _self = this;
      axios.get('/location/listPremiseses', {
          params: {
              pageNo: this.page_no, 
              pageSize: this.page_size
          }
      })
      .then(response => {
        _self.loading = true;
        var data = response.data.data.result;
        if (data.length < _self.page_size) {
          _self.moreData = false;
          _self.loading = false;
        }
        for (var i = 0; i < data.length; i++) {
          _self.dataJson.push(data[i]);
        }
      })
      .catch(err => {});
    },
    scrollToTop(){
      var obtn = document.getElementById('btn');  //获取回到顶部按钮的ID
      var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
      //var timer = null; //定义一个定时器
      var _self = this;
      var isTop = true; //定义一个布尔值，用于判断是否到达顶部
      //获取滚动条的滚动高度
      var osTop = document.documentElement.scrollTop || document.body.scrollTop; 
      this.timer = setInterval(function(){
            //获取滚动条的滚动高度
            var osTop = document.documentElement.scrollTop || document.body.scrollTop;
            //用于设置速度差，产生缓动的效果
            var speed = Math.floor(-osTop / 6);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop =true;  //用于阻止滚动事件清除定时器
            if(osTop == 0){
                clearInterval(_self.timer);
            }
        },60);
    }
  }
}
</script>

<style scoped>
.floor{
   padding-top:.56rem;
}
ul, li, p{
  margin:0;
  padding:0;
  list-style-type: none;
}
.floor-li{
}
.floor-img{
  width: 100%;
  height:2.50rem;
  display: block;
}
.floor .floor-des{
  margin:.1rem 0 .14rem .14rem;
}
.floor-title{
  font-size: .16rem;
  height: .22rem;
  line-height: .22rem;
  color:#000;
  opacity: 0.86;
}
.floor-detail{
  height: .17rem;
  line-height: .17rem;
  font-size: .12rem;
  opacity: 0.64;
  color: #000000;
}
.width-line{
  height: .1rem;
  background: #F2F2F2;
}

/* 滚动顶部按钮 */
.scroll-to-top{
  position: fixed;
  bottom:0.16rem;
  right: 0.16rem;
  width: .4rem;
  border-radius: 50%;
  /* background: #f0f; */
  height: .4rem;
  z-index: 999;
}
.icon-img{
    /* box-shadow:0 2 3px rgba(0,0,0,.3); */
    width:100%;
    height: 100%;
}
</style>
