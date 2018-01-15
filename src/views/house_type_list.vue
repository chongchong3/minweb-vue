<template>
  <div class="house" ref="house">
      <!-- <left-nav></left-nav>
	<head-nav></head-nav> -->
      <ul>
          <li class="house-li" v-for="(single, index) in dataJson ">
              <router-link :to="`housetype?houseUid=${single.house_type_uid}&premisesUid=${single.building_premises_uid}`">
                <div class="list">
                    
                        <img :src="single.house_type_img_url" alt="" class="house-img">
                    
                    <!-- <router-link :to="'/floor_case_list?house_type_uid='+single.house_type_uid"> -->
                        <div class="list-center">
                            <p class="case-name">{{single.house_type_pattern}}</p>
                            <p class="case-number">案例({{single.case_count}})</p>
                            <p class="house-name">{{single.house_type_name}}</p>
                        </div>
                    <!-- </router-link> -->
                    <div class="list-right">{{single.house_type_area}}m²</div>
                </div>
              </router-link>
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
            timer:null,
            page_size: 5,
            designer_list_top:null
        }
  },
  beforeCreate(){
  },
  created(){
    var _self = this;
    const premises_uid = this.$route.query.premises_uid;
    axios.post('location/getHouseTypeList', {
        premisesUid: premises_uid
    })
    .then(function (response) {
        _self.dataJson = response.data.data.result;
        _self.shareWx.disableShare();
    })
    .catch(function (error) {
        console.log(error);
    });
    // document.title = `${this.dataJson[0].premises_name} | 户型`;
  },
  mounted(){ 
        var _self = this;
       this.shareWx.disableShare();
        this.$nextTick(function(){
            // this.shareWx.getId();
            // this.shareWx.disableShare();
            this.shareWx.forbidden();
            this.shareWx.shareReady("户型列表 | 设计IN-设计师严选平台");
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
.house{
    /*margin-top:.56rem;*/
    /* padding-top:.56rem; */
}
.house-li{
    position: relative;
    margin: .1rem .14rem 0rem .15rem;
    height:auto;
}
.list{
    display: flex;
}
.house-img{
    display: block;
    border:1px solid #c9c9c9;
    width:1rem;
    height:1rem;
}
.list-center{
    margin-left:0.08rem;
    flex:1;
}
.case-name{
    line-height: .22rem;
    opacity: 0.54;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.51px;   
}
.case-number{
    line-height: .22rem;
   opacity: 0.86;
    font-size: 16px;
    color: #000000;
    letter-spacing: 0.51px; 
}
.house-name{
    margin-top:0.36rem;
    line-height: .20rem;
    opacity: 0.54;
    font-size: 14px;
    color: #000000;
    letter-spacing: 0.44px;
}
.list-right{
    line-height: .20rem;
    opacity: 0.54;
    font-size: 14px;
    color: #000000;
    letter-spacing: 0.44px;
}
.line-border{
    margin-top:.1rem;
    height:1px;
    background:#C9C9C9;
}

</style>


