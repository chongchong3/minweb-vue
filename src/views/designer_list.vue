<template>
  <div class="designer">
      <left-nav></left-nav>
	<head-nav></head-nav>
      <ul>
          <li class="designer-li" v-for="(single, index) in dataJson" :id="'imgAnimate'+index">
            <router-link :to="'/desinerDetails/'+single.designer_uid">
            <!-- v-bind:class="[imgAnimate[index].isShow ? 'isShow' : '', 'imgAnimate']" -->
                <div  class="designer-single"  :style="{'background': 'no-repeat url('+single.background_img +')','background-size': '100% 100%'}">
                    <div class="designer-rgba">
                        <img :src="single.head_image_url"  alt="" class="designer-head">
                        <p class="designer-name">{{single.designer_name}}</p>
                        <p class="designer-detail">{{single.city}}/{{single.decoration_type}}/{{single.service_years}}年</p>
                        <p class="designer-company">{{single.studio}}</p> 
                    </div>
                    
                </div>  
            </router-link>                      
          </li> 
      </ul>
      <div class="scroll-to-top" v-if="scrollTopIcon" @click="scrollToTop"><img src="../../static/images/toTop@3x.png" alt="" class="icon-img"></div>
      <loading-animation v-if="loading" ></loading-animation>
      <no-more-data-point v-if="!moreData"></no-more-data-point>
      <!-- <h4 v-if="!moreData" class="info">没有更多了...</h4> -->
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
        var _self = this;
        var designer_list_top = sessionStorage.getItem("designer_list_top");
        console.log('top值获取designer_list_top==='+designer_list_top);
        if(designer_list_top){
             _self.$nextTick(function () {
                window.scrollTo(0, designer_list_top)
            });
        }
        return{
            page_no: 1,
            page_count: 1,
            moreData: true,
            dataJson: null,
            loading:false,
            scrollTopIcon:false,
            addClass:[],
            timer:null,
            page_size: 5,
            domArry: [],
            imgAnimate: [],
            designer_list_top:null
        }
  },
  beforeCreate(){

  },
  created(){
    var _self = this;
      this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "desinerList" //设置左菜单栏高亮
    });
    // this.designer_list_top = sessionStorage.getItem("designer_list_top");
    // console.log('top值获取designer_list_top==='+this.designer_list_top);
    // if(this.designer_list_top){
    // //   window.scrollTo(0, this.designer_list_top);
    // }
    // 首次加载数据
    axios.get('/designer/listDesigners', {
        params: {
            page_size: this.page_size, 
            page_no: 1 
        }
    })
    .then(function (response) {
        _self.dataJson = response.data.data.result;
        _self.page_count = response.data.data.total;  
        for (var i = 0; i < _self.dataJson.length; i++) {
            _self.addClass.push(_self.dataJson[i].designer_uid);
            _self.imgAnimate.push({"isFirst":true,"isShow": false});
        }
        _self.getStartOffset();
    })
    .catch(function (error) {
        console.log(error);
    });
    /**@augments
     * 监听滚动， 滑动事件
     * @params scrollHeight - scrollTop = clientHeight：当这两个条件成立时，也就代表垂直滚动条走到底了
     * 获取元素距离屏幕的高度
     */
    window.addEventListener('scroll',function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        // _self.animation();
        //加载更多
        if (scrollTop >= scrollHeight - clientHeight && _self.moreData) {
            _self.page_no++;
            _self.getMoreData();
        }
    });
       
  },
  mounted(){
    var _self = this;
    this.$nextTick(function(){
        window.addEventListener('scroll', this.scrollEvent);
        this.shareWx.getId();
        this.shareWx.shareReady("找设计师 | 设计IN-设计师严选平台");
    });
    //下滑出现滚动到顶部
    this.scroll();
    var touchStartY=0;  
    document.body.addEventListener("touchstart", function(e) {
      touchStartY=e.touches[0].clientY; 
      _self.designer_list_top = document.documentElement.scrollTop || document.body.scrollTop;
      sessionStorage.setItem("designer_list_top", _self.designer_list_top);
      clearInterval(_self.timer);
    });
    document.body.addEventListener("touchmove", function(e) {
      if(e.touches[0].clientY - touchStartY > 2) {
        //   _self.scrollTopIcon = true;
      }else{
        // _self.scrollTopIcon = false;
      }
    });
  },
//   updated(){
//       this.$nextTick(function(){
//         let position = this.$store.state.position //返回页面取出来
//         console.log(position)
//         window.scroll(0, position)
//        }) 
//   },
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
    getMoreData() {
      //接口数据
        var _self = this;
        axios.get('/designer/listDesigners', {
            params: {
                page_no: _self.page_no, 
                page_size: _self.page_size 
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
            _self.addClass.push(_self.dataJson[i].designer_uid);
            _self.imgAnimate.push({"isFirst":true,"isShow": false});
          }
          _self.getStartOffset();
        })
        .catch(err => {});
    },
    getStartOffset() {
      var _self = this;
      _self.domArry=[];
      setTimeout(() => {
        for (var i = 0; i < _self.dataJson.length; i++) {

            var dom = document.getElementById('imgAnimate' + i);
            if (!dom) {
            return
            }
            _self.domArry.push(dom.offsetTop);
        }
        }, 500)},
      getScrollTop() {     
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        return scrollTop;
      },
      scrollEvent(){
        var _self = this;
        this.imgAnimate.forEach(function(k, i) {
          if (!k.isFirst) {
            return
          }
        //   console.log(_self.getScrollTop(),_self.domArry[i]);
          // if(parseInt(allLi[i].offsetTop)>= parseInt(clientHeight)/2){
          if((_self.getScrollTop() - _self.domArry[i]) > -280){
            k.isShow = true;
            k.isFirst = false;
          }
        });
    },
    animation(){
        var _self = this;
        var allLi = document.getElementsByTagName("li");
        for(var i=0; i<allLi.length; i++){
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            if(parseInt(allLi[i].offsetTop)>= parseInt(clientHeight)/2){
            }
        }       
    },
    // 滚动到顶部
    scrollToTop(){
      var obtn = document.getElementById('btn');  //获取回到顶部按钮的ID
      var clientHeight = document.documentElement.clientHeight;   //获取可视区域的高度
      //var timer = null; //定义一个定时器
      var isTop = true; //定义一个布尔值，用于判断是否到达顶部
      var _self = this;
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
ul, li, p{
  margin:0;
  padding:0;
  list-style-type: none;
}
.designer{
    /*margin-top:.56rem;*/
    padding-top:.56rem;
}
.designer-li{
    position: relative;
    margin-bottom: .1rem;
    /* background: url(http://iph.href.lu/350x260?bg=000) no-repeat; */
    width:100%;
    height:2.60rem;
    /* height:auto; */
    text-align: center;
    color: #fff;
    overflow: hidden;
}
.designer-single{
    width:100%;
    /* height:2.60rem; */
    height:100%;
    /* background-color: rgba(#000, #000, #000, alpha); */
}
.designer-rgba{
    /* height: 2.6rem; */
    width:100%;height:100%;
    /* position: absolute; */
    /* top:0;left:0; */
    background-image:linear-gradient(bottom, rgba(0,0,0,.4) 0%,rgba(0,0,0,.4) 100%);
    z-index: 10;
}
.designer-head{
    position: relative;
    margin:0 auto;
    left: 0; right:0;
    top:.4rem;
    width: 1rem;
    height: 1rem;
    border:2px solid #d0d0d0;
    border-radius: 50%;
    display: block;
}
.designer-name{
    margin-top:.54rem;
    font-size: .2rem;
    color: #fff;
    font-weight: bold;
}
.designer-detail{
    margin-top:.12rem;
    font-size: .12rem;
    color: #fff;
}
.designer-company{
    margin-top:.12rem;
    font-size: .12rem;
    color: #fff;
    
}
/* 图片动画 */
.cursor{
  width: 100%;
  height: 100%;
  animation: changeBiger 1s linear forwards;
  /* animation-iteration-count:1; */
}
@keyframes changeBiger{
  0% {  
      transform: scale(1.2);
  }
  100% {
      transform: scale(1);
  }
}
.imgAnimate {
  width:100%;
  background-position: center center;
  background-size: 100% 100%;
}
.isShow{
    background-size: 100% 100%;
    animation:imgAnimate 1s;
   }

   @keyframes imgAnimate
   {
    0% {
        transform: scale(1.05);
    }
    100% {
        transform: scale(1);
    }
   /* from { background-size: 103% 103%;}
   to { background-size: 100% 100%;} */
   }

/* 滚动顶部按钮 */
.scroll-to-top{
  position: fixed;
  bottom:0.16rem;
  right: 0.16rem;
  width: .4rem;
  border-radius: 50%;
  height: .4rem;
  z-index: 999;
}
.icon-img{
    box-shadow:0 2 3px rgba(0,0,0,.3);
    width:100%;
    height: 100%;
}
</style>


