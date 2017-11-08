<template>
<div >
	<left-nav></left-nav>
	<head-nav></head-nav>
	<ul class="desinerList">
		<li class="singDesiner" v-for="(single, index) in dataJson" @click="choice($event,index)">
			<div class="topDesc">
				<img :src="single.head_image_url" class="headImg">
				<div class="rightText">
					<p><span class="desinerName">{{single.designer_name}}</span>&nbsp;<span class="desinerRank">{{single.designer_level}}</span></p>
					<p><span>{{single.city}}</span>&nbsp;|&nbsp;<span>{{single.plantform_descript}}</span></p>
					<p><span>{{single.designer_price}}-{{single.designer_high_price}}</span>&nbsp;<span>元/平方</span></p>
				</div>
			</div>
			<div class="imgList">
        <img src="http://placehold.it/100x60" class="">
				<img src="http://placehold.it/100x60" class="">
				<img src="http://placehold.it/100x60" class="">
				<!-- <img :src="single.designer_case_list[0].wide_screen_image" class="caseImg">
				<img :src="single.designer_case_list[1].wide_screen_image" class="caseImg">
				<img :src="single.designer_case_list[2].wide_screen_image" class="caseImg"> -->
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
      moreData: false,
      dataJson: null,

    };
  },
  created() {
    this.$store.commit("setNav", {
      isShow: false, //左侧菜单栏默认为关闭状态
      current: "desinerList" //设置左菜单栏高亮
    });
    var _self = this;
    this.$store.dispatch("GetDesinerMes", { page_size: 4, page_no: 1 })
      .then(json => {
        _self.dataJson = json.data.data;
        _self.dataJson.forEach((e, index)=>{
        if(e.plantform_descript.length>17){
          _self.dataJson[index].plantform_descript = e.plantform_descript.substring(0,17) + '...';
        }
        console.log(_self.dataJson);
      })
      })
      .catch(err => {});
    //加载更多
    var startPageY;
    document.body.addEventListener("touchstart", function(e) {
        startPageY = e.targetTouches[0].pageY;
        if(startPageY>=document.body.scrollHeight-100){
          _self.page_no++;
          _self.page_size=_self.page_no*4;
          _self.getMoreData();
        }
      // console.log(startPageY)
    });
  },
  methods:{  
    getMoreData(){
      //接口数据
      var _self=this;
      this.$store
        .dispatch("GetDesinerMes", {page_no:_self.page_no,page_size:4})
        .then((json) => {
          _self.moreData=false;
          var data = json.data.data;
          for (var i = 0; i < data.length; i++) {
            if(data[i].plantform_descript.length>17){
              data[i].plantform_descript = data[i].plantform_descript.substring(0,17) + '...';
            };
            _self.dataJson.push(data[i]);
          }
          console.log(_self.dataJson)
          
        })
        .catch(err => {
      
        });
    },
    choice(e, index){
      // console.log(index);
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
.singDesiner {
  margin-top: 0.1rem;
  padding: 0.1rem 0;
  border-bottom: 1px solid #ccc;
}
.topDesc {
  margin-bottom: 0.1rem;
  overflow: hidden;
}
.headImg {
  float: left;
  border-radius: 50%;
  width: 0.6rem;
  height: 0.6rem;
}
.rightText {
  margin-left: 0.1rem;
  float: left;
}
.desinerName {
  font-size: 18px;
  font-weight: bold;
}
.desinerRank {
  color: #93d36a;
}
.imgList {
  display: flex;                /*设置为flex布局*/
  justify-content: space-around;
}
</style>

