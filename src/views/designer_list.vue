<template>
  <div class="designer">
      <ul>
          <li class="designer-li" v-for="(single, index) in dataJson" :style="{ 'background': 'url('+single.designer_case_list[0].cover_image+')'}" >
                <img :src="single.head_image_url"  alt="" class="designer-head">
                <p class="designer-name">{{single.designer_name}}</p>
                <p class="designer-detail">{{single.city}}/软装/12年</p>
                <p class="designer-company">冰岛工作室</p>                  
          </li> 
      </ul>
      <h4 v-if="!moreData" class="info">没有更多了...</h4>
  </div>
</template>
<script>
// import { getDesinerMes } from '@/api/desinerList';
import axios from 'axios';
export default {
    data(){
        return{
            page_no: 1,
            page_count: 1,
            moreData: true,
            dataJson: null,
            page_size: 6
        }
  },
  beforeCreate(){

  },
  created(){
    var _self = this;
    axios.get('/designer/listDesigners', {
        params: {
            page_size: this.page_size, 
            page_no: 1 
        }
    })
    .then(function (response) {
        _self.dataJson = response.data.data.result;
        _self.page_count = response.data.data.total;
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
        axios.get('/designer/listDesigners', {
            params: {
                page_no: _self.page_no, 
                page_size: _self.page_size 
            }
        })
        .then(json => {
          var data = json.data.data.result;
          if (data.length < _self.page_size) {
            _self.moreData = false;
          }
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
          }
        })
        .catch(err => {});
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
.designer-li{
    position: relative;
    margin-bottom: .1rem;
    /* background: url(http://iph.href.lu/350x260?bg=000) no-repeat; */
    width:100%;
    height:2.60rem;
    text-align: center;
    color: #fff;
}
.designer-head{
    position: relative;
    margin:0 auto;
    left: 0; right:0;
    top:.4rem;
    width: 1rem;
    height: 1rem;
    border-radius: 50%;
    display: block;
}
.designer-name{
    margin-top:.54rem;
    font-size: .2rem;
}
.designer-detail{
    margin-top:.12rem;
    font-size: .12rem;
}
.designer-company{
    margin-top:.12rem;
    font-size: .12rem;
}
.info {
  text-align: center;
  color:#666;
}
</style>


