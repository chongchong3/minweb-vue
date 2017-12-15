<template>
  <div class="case">
    <left-nav></left-nav>
    <!-- <div class="header-height"> -->
      <head-nav></head-nav>
    <!-- </div> -->
      <ul>
        <li class="case-li" v-for="(single, index) in dataJson" :id="'imgAnimate'+index">
          <router-link :to="'/caseDetailsNew?caseId='+single.id">
          <div class="img-partent" >
            <!-- {cursor:addClass[index]} -->
            <!-- v-bind:class="{cursor:addClass}" :style="{'background': 'no-repeat url('+single.head_image_url +')','background-size': '100% 100%'}" -->
            <img :id="'imgAnimate'+index"  :src="single.widescreen_image" v-bind:class="[imgAnimate[index].isShow ? 'isShow' : '', 'imgAnimate']" alt="" class="case-img ">
          </div>
          <div class="case-designer">
            <img :src="single.head_image_url+'?imageView2/2/w/400'" alt="" class="designer-head">
            <div class="case-text">
              <p class="case-title">{{single.title}}</p>
              <p class="case-detail">{{single.area}}平米 / <span v-for="style in single.style_list">{{style.style_name}} </span></p>
            </div>
          </div>
          </router-link>
        </li>
        
      </ul>

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
        page_no: 1,
        page_size: 4,
        page_count: 1,
        moreData: true,
        loading:false,
        addClass:[],
        dataJson: null,
        domArry: [],
        imgAnimate: []
      }
  },
  created(){
    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "case_list" //设置左菜单栏高亮
    });
    var _self = this;
    // 首次加载数据
    axios.get('/minisite/getDesignerCase', {
        params: {
            page_size: this.page_size, 
            page_no: 1 
        }
    })
    .then(function (response) {
      _self.dataJson = response.data.data.list;
      _self.page_count = response.data.page_count;
      _self.getStartOffset();
      for (var i = 0; i < _self.dataJson.length; i++) {
            _self.addClass.push(_self.dataJson[i].id);
            _self.imgAnimate.push({"isFirst":true,"isShow": false});
      }
      
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
    this.$nextTick(function(){
      //  this.getStartOffset();
        window.addEventListener('scroll', this.scrollEvent);
    });
  },
  methods:{
    getMoreData() {
      //接口数据
        var _self = this;
        axios.get('/minisite/getDesignerCase', {
            params: {
                page_no: _self.page_no, 
                page_size: _self.page_size 
            }
        })
        .then(response => {
          _self.loading = true;
          var data = response.data.data.list;
          if (data.length < _self.page_size) {
            _self.moreData = false;
            _self.loading = false;
          }
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
            _self.addClass.push(_self.dataJson[i].id);
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
          console.log(_self.domArry)
        }
      }, 50)},
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
          console.log(_self.getScrollTop(),_self.domArry[i]);
          // if(parseInt(allLi[i].offsetTop)>= parseInt(clientHeight)/2){
          if((_self.getScrollTop() - _self.domArry[i]) > -442){
            k.isShow = true;
            k.isFirst = false;
          }
        });
    }
  }
}
</script>

<style scoped>
.case{
  /* margin-top:.56rem;
   */
   padding-top:.56rem;
}
.header-height{
  height: 0.56rem;
  background:#fff;
}
ul, li{
  margin:0;
  padding:0;
  list-style-type: none;
}
.case-li{
  margin-bottom:.1rem;
  /* height:2.04rem; */
}
.case-img{
  width: 100%;
  height:1.54rem;
  /* animation: changeBiger 1s linear forwards; */
  /* animation-iteration-count:1; */  
  display: block;
}
.case .case-designer{
  margin:.1rem 0 .12rem .1rem;
  display: flex;
}
.case .designer-head{
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  display: block;
}
.case .case-text{
  margin-left:4px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.case-text .case-title{
  margin:0;
  /* margin-top:4px; */
  font-size: .16rem;
  height: .22rem;
  line-height: .22rem;
  color:#000;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.case-text .case-detail{
  margin:0;
  margin-top:2px;
  height: .16rem;
  line-height: .16rem;
  font-size: .12rem;
  color:#ccc;
}
.clear{ clear:both}

/* 图片动画 */
.img-partent{
  width: 100%;
  height: auto;
  /* height:1.54rem; */
  overflow: hidden;
}
.cursor{
  width: 100%;
  height: 100%;
  animation: changeBiger 1s linear forwards;
  /* animation-iteration-count:1; */
}
@keyframes changeBiger{
  0% {
      transform: scale(1.1);
  }
  100% {
      transform: scale(1);
  }
}
.imgAnimate {
  width:100%;
  height:1.54rem;
  background-position: center center;
  background-size: 103% 103%;
}
.isShow{
    background-size: 100% 100%;
    animation:imgAnimate 1s;
   }

   @keyframes imgAnimate
   {
   from { background-size: 103% 103%;}
   to { background-size: 100% 100%;}
   }







.info {
  text-align: center;
  color:#666;
}
</style>
