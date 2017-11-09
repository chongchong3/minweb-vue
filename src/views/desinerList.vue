<template>
<div >
	<left-nav></left-nav>
	<head-nav></head-nav>
	<ul class="desinerList">
		<li class="singDesiner" v-for="(single, index) in dataJson" @click="choice($event,index)">
			<div class="topDesc">
        <router-link :to="'desinerDetails/'+single.designer_uid">
				<img :src="single.head_image_url" class="headImg">
        </router-link>
				<div class="rightText">
          <router-link :to="'desinerDetails/'+single.designer_uid">
					<p class="textUnder">
            <span class="desinerName">{{single.designer_name}}</span>&nbsp;
            <span class="desinerRank">{{single.designer_level}}</span></p>
					</router-link>
          <router-link :to="'desinerDetails/'+single.designer_uid">
          <p class="plantform_descript"><span class="city">{{single.city}}</span>&nbsp;|&nbsp;<span>{{single.plantform_descript}}</span></p>
					</router-link>
          <router-link :to="'desinerDetails/'+single.designer_uid">
          <p class="price"><span>{{single.designer_price}}-{{single.designer_high_price}}</span>&nbsp;<span>元/平方</span></p>
          </router-link>
        </div>
			</div>
			<div class="imgList">
        <div class="imgSingle" @click="linkTo(single.designer_case_list[0].detail_file_path)">
          <img v-if="single.designer_case_list[0].cover_image =='undefined' " src="http://img01.tooopen.com/Downs/images/2010/4/8/sy_20100408112256193519.jpg" class="imgH">
          <img v-else :src="single.designer_case_list[0].cover_image" class="imgH">
        </div>
				<div class="imgSingle" @click="linkTo(single.designer_case_list[0].detail_file_path)">
          <img v-if="single.designer_case_list[0].cover_image =='undefined' " src="http://img01.tooopen.com/Downs/images/2010/4/8/sy_20100408112256193519.jpg" class="imgH">
          <img v-else :src="single.designer_case_list[0].cover_image" class="imgH">
        </div>
        <div class="imgSingle" @click="linkTo(single.designer_case_list[0].detail_file_path)">
          <img v-if="single.designer_case_list[0].cover_image =='undefined' " src="http://img01.tooopen.com/Downs/images/2010/4/8/sy_20100408112256193519.jpg" class="imgH">
          <img v-else :src="single.designer_case_list[0].cover_image" class="imgH">
        </div>
				<!-- <img :src="single.designer_case_list[0].cover_image" class="caseImg">
				<img :src="single.designer_case_list[1].cover_image" class="caseImg"> -->
				<!-- <img :src="single.designer_case_list[2].wide_screen_image" class="caseImg"> -->
			</div>
		</li>
	</ul>
 </div>
</template>
<script>
import headNav from "@/components/headNav";
import leftNav from "../components/leftNav";
export default {
  components: {
    headNav,
    leftNav
  },
  data() {
    return {
      page_no: 1,
      moreData: true,
      dataJson: null,
      page_size:6

    };
  },
  created() {
    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "desinerList" //设置左菜单栏高亮
    });
    var _self = this;
    this.$store.dispatch("GetDesinerMes", { page_size: _self.page_size, page_no: 1 })
      .then(json => {
        _self.dataJson = json.data.data;
      })
      .catch(err => {});
    //加载更多
    document.body.addEventListener("touchend", function(e) {
        endPageY = e.changedTouches[0].pageY;
        var clientHeight = document.documentElement.scrollTop === 0 ? document.body.clientHeight : document.documentElement.clientHeight;
        var scrollTop = document.documentElement.scrollTop === 0 ? document.body.scrollTop : document.documentElement.scrollTop;
        var scrollHeight = document.documentElement.scrollTop === 0 ? document.body.scrollHeight : document.documentElement.scrollHeight;
    	
    	if(scrollTop >=(scrollHeight-clientHeight) && _self.moreData){
    			_self.page_no++;
        	_self.getMoreData();
    	}	

    });
  },
  methods:{  
    getMoreData(){
      //接口数据
      var _self=this;
      this.$store
        .dispatch("GetDesinerMes", {page_no:_self.page_no,page_size:_self.page_size})
        .then((json) => {
          var data = json.data.data;
          if(data.length<_self.page_size){
            _self.moreData=false;
          }
          for (var i = 0; i < data.length; i++) {
            _self.dataJson.push(data[i]);
          }
        })
        .catch(err => {
      
        });
    },
    choice(e, index){
      // console.log(index);
    },
    linkTo(url){
    		window.location.href=url;
    }
  }
}
</script>

<style scoped>
ul,
li,
p {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
p {
  line-height: 0.2rem;
}
.desinerList {
  margin: 0 auto;
  width: 96%;
}
.desinerList .singDesiner {
  margin-top: 0.1rem;
  padding: 0.1rem 0;
  border-bottom: 1px solid #ccc;
}
.desinerList .topDesc {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.desinerList .headImg {
  float: left;
  border-radius: 50%;
  width: 0.6rem;
  height: 0.6rem;
}
.desinerList .rightText {
  margin-left: 0.1rem;
  margin-left: .7rem;
  text-decoration: none;
}
.desinerList .textUnder{
  text-decoration-style: none;
}
.desinerList .plantform_descript{
  color: #9e9e9e;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.desinerList .price{
   color: #9e9e9e;
}
.desinerList .desinerName {
  font-size: 16px;
  color: black;
  text-decoration: none;
  /* font-weight: bold; */
}
.desinerList .desinerRank {
  color: #93d36a;
}
.desinerList .imgList {
  /* height: 1rem; */
  display: flex;                /*设置为flex布局*/
  /* justify-content: space-around;
   */
  justify-content: space-between;
}
.desinerList .imgSingle{
  width: 32%;
  height: 1rem;
}
.imgH{
  width: 100%;
  height: 100%;
}
</style>

