<template>
<div >
	<!-- <left-nav></left-nav> -->
	<head-nav></head-nav>
	<ul class="desinerList">
		<li class="singDesiner">
			<div class="topDesc">
				<img src="http://placehold.it/60x60" class="headImg">
				<div class="rightText">
					<p><span class="desinerName">梁启超</span>&nbsp;<span class="desinerRank">大咖设计师</span></p>
					<p><span>杭州</span>&nbsp;|&nbsp;<span>中央美术教授</span></p>
					<p><span>300-400</span><span>元/平方</span></p>
				</div>
			</div>
			<div class="imgList">
				<img src="http://placehold.it/100x60" class="">
				<img src="http://placehold.it/100x60" class="">
				<img src="http://placehold.it/100x60" class="">
			</div>
		</li>
	</ul>
     <p>{{this.dataJson}}</p>
 </div>
</template>
<script>
import headNav from '@/components/headNav'
import leftNav from "../components/leftNav";
export default {
	components:{
		headNav,
		leftNav
	 },
	 data(){
		return{
		page_no:1,
		moreData:false,
		dataJson:null
		}
	},
	created() {
		var _self = this;
		this.$store
		.dispatch("GetDesinerMes", { page_size: 4, page_no: 1 })
		.then(json => {
			// _self.dataJson = _self.$store.state.desiner;
			_self.dataJson=json.data.data;
			console.log(json.data.data)
		})
		.catch(err => {});
	},
}

</script>

<style scoped>
ul, li, p{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
p{
	line-height: .2rem;
}
.desinerList{
	margin: 0 auto;
	width:96%;
}
.singDesiner{
	margin-top: .1rem;
	padding:.1rem 0;
	border-bottom: 1px solid #ccc;
}
.topDesc{
	margin-bottom: .1rem;
	overflow:hidden;
}
.headImg{
	float: left;
	border-radius: 50%;
}
.rightText{
	margin-left:.1rem;
	float: left;
}
.desinerName{
	font-size: 18px;
	font-weight: bold;
}
.desinerRank{
	color: #f0f;
}
.imgList{
}


</style>

