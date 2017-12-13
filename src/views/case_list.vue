<template>
  <div class="case">
      <ul>
        <li class="case-li" v-for="(single, index) in dataJson">
          <div class="img-partent" >
            <!-- v-bind:class="{cursor:addClass}" :style="{'background': 'no-repeat url('+single.head_image_url +')','background-size': '100% 100%'}" -->
            <img :src="single.head_image_url" v-bind:class="{cursor:addClass}" alt="" class="case-img ">
          </div>
          <!-- src="http://iph.href.lu/350x154" -->
          <div class="case-designer">
            <img :src="single.head_image_url+'?imageView2/2/w/400'" alt="" class="designer-head">
            <div class="case-text">
              <p class="case-title">{{single.title}}</p>
              <p class="case-detail">{{single.area}}平米&nbsp;&nbsp;现代</p>
            </div>
          </div>
          <!-- <div class="clear"></div>  -->
        </li>
        
      </ul>

      <loading-animation v-if="loading"></loading-animation>

      <h4 v-if="!moreData" class="info">没有更多了...</h4>

  </div>
</template>
<script>
import axios from 'axios';
import loadingAnimation from '@/components/loadingAnimation';
export default {
  components:{loadingAnimation},
  data(){
      return{
        page_no: 1,
        page_size: 4,
        page_count: 1,
        moreData: true,
        loading:true,
        addClass:false,
        dataJson: null
      }
  },
  created(){
    var _self = this;
    /**@augments
     * 监听滚动， 滑动事件
     * @params scrollHeight - scrollTop = clientHeight：当这两个条件成立时，也就代表垂直滚动条走到底了
     * 获取元素距离屏幕的高度
     */
    window.addEventListener('scroll',function(e){
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight;
        var clientHeight = document.documentElement.clientHeight || document.body.clientHeight;
        _self.animation()
    });
    // 首次加载数据
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
            _self.loading = false;
          }
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
          }
        })
        .catch(err => {});
    },
    animation(){
        var _self = this;
        var allLi = document.getElementsByTagName("li");
        for(var i=0; i<allLi.length; i++){
            // console.log(allLi[i]);
            var clientHeight = document.documentElement.clientHeight || document.body.clientHeight
            if(parseInt(allLi[i].offsetTop)>= parseInt(clientHeight)/2){
                //添加动画效果
                console.log('我要动了');
                 _self.addClass = true;
                // let addClass = allLi[i].setAttribute('class');
                // addClass = addClass.concat('cursor');
                // allLi[i].setAttribute('class', addClass);

            }
        }   
    }
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

/* 图片动画 */
.img-partent{
  width: 100%;
  height:1.54rem;
  overflow: hidden;
}
.cursor{
  width: 100%;
  height: 100%;
  animation: changeBiger 1s linear forwards;
  animation-iteration-count:1;
}
@keyframes changeBiger{
  0% {
      transform: scale(1.3);
  }
  100% {
      transform: scale(1);
  }
}
/* .cursor:hover{
  transform: scale(1);
} */







.info {
  text-align: center;
  color:#666;
}
</style>
