<template>
  <div class="case">
      <ul>
        <li class="case-li" v-for="(single, index) in dataJson">
          <img :src="single.head_image_url+'?imageView2/2/w/400'" alt="" class="case-img">
          <!-- src="http://iph.href.lu/350x154" -->
          <!-- v-for="(single, index) in dataJson -->
          <!-- :src="single.head_image_url+'?imageView2/2/w/400'" -->
          <div class="case-designer">
            <img :src="single.head_image_url+'?imageView2/2/w/400'" alt="" class="designer-head">
            <div class="case-text">
              <p class="case-title">{{single.title}}</p>
              <p class="case-detail">200平米&nbsp;&nbsp;现代</p>
            </div>
          </div>
          <div class="clear"></div> 
        </li>
      </ul>
<div class="spinner" v-if="loading">
  <div class="spinner-container container1">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
  <div class="spinner-container container2">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
  <div class="spinner-container container3">
    <div class="circle1"></div>
    <div class="circle2"></div>
    <div class="circle3"></div>
    <div class="circle4"></div>
  </div>
</div>

<h4 v-if="!moreData" class="info">没有更多了...</h4>

  </div>
</template>
<script>
import axios from 'axios';
export default {
  data(){
      return{
        page_no: 1,
        page_size: 4,
        page_count: 1,
        moreData: true,
        loading:false,
        dataJson: null
      }
  },
  created(){
    var _self = this;
    axios.get('/minisite/getDesignerCase', {
        params: {
            page_size: this.page_size, 
            page_no: 1 
        }
    })
    .then(function (response) {
      console.log(response.data.data.list);
      _self.dataJson = response.data.data.list;
      _self.page_count = response.data.page_count;
      
    })
    .catch(function (error) {
        console.log(error);
    });
    //加载更多
    document.body.addEventListener("touchend", function(e) {
      var clientHeight =
        document.documentElement.scrollTop === 0
          ? document.body.clientHeight
          : document.documentElement.clientHeight;
      var scrollTop =
        document.documentElement.scrollTop === 0
          ? document.body.scrollTop
          : document.documentElement.scrollTop;
      var scrollHeight =
        document.documentElement.scrollTop === 0
          ? document.body.scrollHeight
          : document.documentElement.scrollHeight;

      if (scrollTop >= scrollHeight - clientHeight && _self.moreData) {
        _self.page_no++;
        _self.getMoreData();
      }
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
          }
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
            _self.loading = false;;
          }
        })
        .catch(err => {});
    },
  }
}
</script>

<style scoped>
.case{

}
ul, li{
  margin:0;
  padding:0;
  list-style-type: none;
}
.case-li{
  margin-bottom:.1rem;
}
.case-img{
  width: 100%;
  height:1.54rem;
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
  margin-top:4px;
  font-size: .16rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.case-text .case-detail{
  margin:0;
  margin-top:4px;
  font-size: .12rem;
  color:#ccc;
}
.clear{ clear:both}


.spinner {
  margin: 0 auto;
  width: 20px;
  height: 20px;
  position: relative;
}
 
.container1 > div, .container2 > div, .container3 > div {
  width: 6px;
  height: 6px;
  background-color: #333;
 
  border-radius: 100%;
  position: absolute;
  -webkit-animation: bouncedelay 1.2s infinite ease-in-out;
  animation: bouncedelay 1.2s infinite ease-in-out;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}
 
.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
 
.container2 {
  -webkit-transform: rotateZ(45deg);
  transform: rotateZ(45deg);
}
 
.container3 {
  -webkit-transform: rotateZ(90deg);
  transform: rotateZ(90deg);
}
 /* 动画效果 */
.circle1 { top: 0; left: 0; }
.circle2 { top: 0; right: 0; }
.circle3 { right: 0; bottom: 0; }
.circle4 { left: 0; bottom: 0; }
 
.container2 .circle1 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}
 
.container3 .circle1 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}
 
.container1 .circle2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}
 
.container2 .circle2 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}
 
.container3 .circle2 {
  -webkit-animation-delay: -0.7s;
  animation-delay: -0.7s;
}
 
.container1 .circle3 {
  -webkit-animation-delay: -0.6s;
  animation-delay: -0.6s;
}
 
.container2 .circle3 {
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
 
.container3 .circle3 {
  -webkit-animation-delay: -0.4s;
  animation-delay: -0.4s;
}
 
.container1 .circle4 {
  -webkit-animation-delay: -0.3s;
  animation-delay: -0.3s;
}
 
.container2 .circle4 {
  -webkit-animation-delay: -0.2s;
  animation-delay: -0.2s;
}
 
.container3 .circle4 {
  -webkit-animation-delay: -0.1s;
  animation-delay: -0.1s;
}
 
@-webkit-keyframes bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0.0) }
  40% { -webkit-transform: scale(1.0) }
}
 
@keyframes bouncedelay {
  0%, 80%, 100% {
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 40% {
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}



.info {
  text-align: center;
  color:#666;
}
</style>
