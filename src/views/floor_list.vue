<template>
  <div class="floor">
    <left-nav></left-nav>
    <head-nav></head-nav>
      <ul>
        <li class="floor-li" >
          <!-- <router-link :to="'/caseDetailsNew?case_id='+single.id"> -->
          <!-- v-for="(single, index) in dataJson" -->
          <div class="img-partent" >
            <img  src="https://assets.wesetup.cn/2017/12/21/1513821899057-ztq9mf2i1m2jdxug5uahsemi.jpg"  alt="" class="floor-img ">
          </div>
          <div class="floor-des">
              <p class="floor-title">世茂天宸</p>
              <p class="floor-detail">艮山西路105号</p>
          </div>
          <!-- </router-link> -->
          <div class="width-line"></div>
        </li>
        
      </ul>
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
        page_size: 10,
        page_count: 1,
        moreData: true,
        loading:false,
        timer:null,
        scrollTopIcon:false,
        addClass:[],
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
    // axios.get('/minisite/getDesignerCase', {
    //     params: {
    //         page_size: this.page_size, 
    //         page_no: 1 
    //     }
    // })
    // .then(function (response) {
    //   _self.dataJson = response.data.data.list;
    //   _self.page_count = response.data.page_count;
    // })
    // .catch(function (error) {
    //     console.log(error);
    // });
  },
  mounted(){
    this.$nextTick(function(){    
        this.shareWx.getId();
        this.shareWx.shareReady("看楼盘列表 | 设计IN-设计师严选平台");
    });
  },
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
</style>
