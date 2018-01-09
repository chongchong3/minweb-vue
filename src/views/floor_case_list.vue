<template>
  <div class="floor" ref="floor">
      <!-- <left-nav></left-nav>
	<head-nav></head-nav> -->
      <ul>
          <li class="floor-li" v-for="(single, index) in dataJson">
            <router-link to="">
                <div class="case-img">
                    <img :src="single.case_image_url"  alt="" class="img-size">
                    <img src="../../static/images/720icon.png" alt="" class="icon-img">
                    <!-- v-if="single.panoramagram_flag ==1" -->
                </div>        
            </router-link>
            <div class="floor-footer">
                <img :src="single.head_image_url" alt="" class="designer-header"> 
                <div class="des-detail">
                    <p class="case-font">{{single.house_type_name}} / {{single.house_area}} m² / <span v-for="style in single.style_list">
                        {{style.style_name}}</span></p> 
                    <p class="case-name">{{single.title}}</p>              
                </div>
            </div>
            <div class="line-border"></div>                      
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
            page_count: 1,
            moreData: true,
            dataJson: null,
            loading:false,
            scrollTopIcon:false,
            addClass:[],
            timer:null,
            page_size: 5,
            designer_list_top:null
        }
  },
  beforeCreate(){

  },
  created(){
      var _self = this;
      var id = this.$route.query.id;
      axios.get('/minisite/getByHouseType', {
        params: {
            page_size: 100, 
            page_no: 1,
            house_type_uid: id
        }
    })
    .then(function (response) {
      _self.dataJson = response.data.data.result;
      
    })
    .catch(function (error) {
        console.log(error);
    });
  },
  mounted(){
    var _self = this;
    this.$nextTick(function(){
        this.shareWx.getId();
        this.shareWx.shareReady("找设计师 | 设计IN-设计师严选平台");
    });
    
  },
  methods:{
    
    
  }
}
</script>
<style scoped>
ul, li, p{
  margin:0;
  padding:0;
  list-style-type: none;
}
.floor{
    overflow-x:hidden
    /* padding-top:.56rem; */
}
.floor-li{
    margin:.1rem .15rem 0rem .15rem;
    width:100%;
    height:auto;
}
.case-img{
    position: relative;
    margin-right:.3rem;
    height: 1.72rem;
    /* background: #ccc; */
}
.img-size{
    width:100%;
    height: 100%;
}
.icon-img{
    position: absolute;
    display: block;
    bottom:.06rem;
    right: 0.06rem;
    width: .4rem;
    height: .4rem;
    border-radius: 50%;
    background: rgba(0,0,0,0.60);
}
.floor-footer{
    margin-top:.1rem;
    margin-bottom:.11rem;
    display: flex;
}
.designer-header{
    width: 0.4rem;
    height: 0.4rem;
    border-radius: 50%;
    /* background: #f0f; */
}
.des-detail{
    margin-left: .06rem;
    margin-right: .3rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.case-font{
    line-height:.22rem;
    font-size: 16px;
    color: #000000;
    letter-spacing: -0.38px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.case-name{
    line-height: .17rem;
    font-size: 12px;
    color: #000000;
    letter-spacing: -0.29px;
    opacity: 0.54;
}
.line-border{
    margin-right: .3rem;
    height:1px;
    background:#C9C9C9;
}

</style>


