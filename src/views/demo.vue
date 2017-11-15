<template>
 <div >
    <!-- <left-nav></left-nav>
    <head-nav></head-nav> -->
   <div id="mescroll" class="mescroll">
			<!--展示上拉加载的数据列表-->
			<ul id="dataList" class="data-list">
				<li v-for="pd in pdlist">
					<img class="pd-img" :src="pd.pdImg"/>
					<p class="pd-name">{{pd.pdName}}</p>
					<p class="pd-price">{{pd.pdPrice}} 元</p>
					<p class="pd-sold">已售{{pd.pdSold}}件</p>
				</li>
			</ul>
		</div>
 </div>
</template>

<script>

import store from "@/store";
import leftNav from "../components/leftNav"; //引用左侧菜单栏
import headNav from "../components/headNav"; //引用顶部菜单栏
export default {
  components: { leftNav, headNav },
  data() {
    return {
      mescroll: null,
				pdlist: []
    };
  },
  created() {
	/*微信朋友圈分享*/
	window.location.href='https://www.shejiin.net/minisite/login';
    this.$store
      .dispatch("GetUserInfo", { "phone_num":"18733198805", "authorization_id":"1123123123",  "message_code":"8888"   })
      .then(json => {})
      .catch(err => {});

  },
  mounted(){

				
  },
methods:{}
};


</script>
<style>

* {
				margin: 0;
				padding: 0;
				-webkit-touch-callout:none;
				-webkit-user-select:none;
				-webkit-tap-highlight-color:transparent;
			}
			body{background-color: white}
			ul{list-style-type: none}
			a {text-decoration: none;color: #18B4FE;}
			
			/*模拟的标题*/
			.header{
				z-index: 9990;
				position: fixed;
				top: 0;
				left: 0;
				width: 100%;
				height: 44px;
				line-height: 44px;
				text-align: center;
				border-bottom: 1px solid #eee;
				background-color: white;
			}
			.header .btn-left{
				position: absolute;
				top: 0;
				left: 0;
				padding:12px;
				line-height: 22px;
			}
			/*列表*/
			.mescroll{
				position: fixed;
				top: 44px;
				bottom: 0;
				height: auto;
			}
			/*展示上拉加载的数据列表*/
			.data-list{
				/* display: none; */
			}
			.data-list li{
				position: relative;
				padding: 10px 8px 10px 120px;
				border-bottom: 1px solid #eee;
			}
			.data-list .pd-img{
				position: absolute;
				left: 18px;
				top: 18px;
				width: 80px;
				height: 80px;
			}
			.data-list .pd-name{
				font-size: 16px;
				line-height: 20px;
				height: 40px;
				overflow: hidden;
			}
			.data-list .pd-price{
				margin-top: 8px;
				color: red;
			}
			.data-list .pd-sold{
				font-size: 12px;
				margin-top: 8px;
				color: gray;
			}
</style>

