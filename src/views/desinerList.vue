<template>
<div class="desinerList">
	<div class="singDesiner">
		<div class="topDesc">
			<img src="http://placehold.it/60x60" class="headImg">
			<div class="rightText">
				<p><span class="desinerName">梁启超</span><span>大咖设计师</span></p>
				<p><span>杭州</span><span>中央美术教授</span></p>
				<p><span>300-400</span><span>元/平方</span></p>
			</div>
		</div>
		<div class="imgList">
			<img src="http://placehold.it/100x60" class="">
			<img src="http://placehold.it/100x60" class="">
			<img src="http://placehold.it/100x60" class="">
		</div>
	</div>     
 </div>
</template>
<script>
export default {

  created() {
    var _self = this;
    
    this.$store
      .dispatch("GetDesinerMes", { page_no: 1, page_size: 20 })
      .then(response => {
        var data = response.data.data.result;
        console.log(data);
      })
      .catch(error => {
        console.log(error);
      });
    
  }
};
</script>

<style scoped>
p{margin: 0;padding:0;}
.desinerList{
	margin: 0 auto;
	width:96%;
	background: #999;
}
.topDesc{
	overflow:hidden;
}
.headImg{
	float: left;
}
.rightText{
	float: left;
}
.desinerName{
	font-size: 18px;
	font-weight: bold;
}


</style>

