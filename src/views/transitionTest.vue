<template>
  <div class="designer">
      <left-nav></left-nav>
	<head-nav></head-nav>
      <ul>
          <li class="designer-li" v-for="(single, index) in dataJson" >
            <router-link :to="'/desinerDetails/'+single.designer_uid">
                <div  class="designer-single" :id="'imgAnimate'+index" v-bind:class="[imgAnimate[index].isShow ? 'imgAnimate' : '']" :style="{'background': 'no-repeat url('+single.background_img +')','background-size': '110% 110%'}">
                    <!-- v-bind:class="[imgAnimate[index].isShow ? 'isShow' : '', 'imgAnimate']" -->
                    
                </div>
                <div class="designer-rgba">
                    <img :src="single.head_image_url"  alt="" class="designer-head">
                    <p class="designer-name">{{single.designer_name}}</p>
                    <p class="designer-detail">{{single.city}}/{{single.decoration_type}}/{{single.service_years}}年</p>
                    <p class="designer-company">{{single.studio}}</p> 
                </div>  
            </router-link>                      
          </li> 
      </ul>
      <loading-animation v-if="loading" ></loading-animation>
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
            page_count: 1,
            moreData: true,
            dataJson: null,
            loading:false,
            scrollTopIcon:false,
            addClass:[],
            timer:null,
            page_size: 5,
            domArry: [],
            imgAnimate: []
        }
  },
  beforeCreate(){

  },
  created(){
    var _self = this;
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
    // 分页加载数据
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
    var _self = this;
    this.$nextTick(function(){
        window.addEventListener('scroll', this.scrollEvent);
    });
  },
  methods:{
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
                // console.log(_self.domArry);
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
            // var liList = document.getElementById('imgAnimate' + i);
            if((_self.getScrollTop() - _self.domArry[i]) > -280){
                //   liList.style.marginTop = 13;
                k.isShow = true;
                k.isFirst = false;
            }
        });
    },
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
    position: absolute;
    top:-5px;
    /* margin-top:-5px; */
    width:110%;
    height:2.7rem;
    background-position: center center;
    /* background: url(http://iph.href.lu/350x260?bg=000) no-repeat; */
}

/* 图片动画 */
.imgAnimate {
    height: 2.7rem;
    width:110%;
    /* top:-13px; */
    animation:imgAnimate 1s;
  /* background-position: center center; */
  /* background-size: 100% 100%; */
}
.isShow{
    /* background-size: 100% 100%; */
    animation:imgAnimate 1s;
   }

@keyframes imgAnimate
    {
    from {
        /* transform: scale(1.1); */
        top:-5px
    }
    to {
        top:-17px
        /* transform: scale(1); */
    }
}



.designer-rgba{
    /* height: 2.6rem; */
    width:100%;height:100%;
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


</style>


