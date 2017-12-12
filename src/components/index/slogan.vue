<template>
	<div class="slogan-c">
		<div class="about-shejiin-title">
			<router-link class="about-title" tag="div" to="/aboutus">
				关于设计IN
			</router-link>
		</div>
		<div class="charactic-c">
			<div class="strict-c">
				<div class="for-bg strict-bg"></div>
				严选设计师
			</div>
			<div class="listen-service-c">
				<div class="for-bg listen-bg"></div>
				设计监管服务
			</div>
			<div class="three-c">
				<div class="for-bg insure-bg"></div>
				第三方资金担保
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style scoped="scoped">
	.slogan-c{
		height:1.9rem;
		background: url(../../../static/images/slogan-bg.png) center no-repeat;
		background-size: 100%;
		border-bottom: .1rem solid #f4f4f4;
	}
	.about-shejiin-title{
		height:.35rem;
		border-bottom:1px solid #c8c8c8;
		text-align: center;
		padding-top:.14rem;
	}
	.about-title{
		line-height: .22rem;
		font-size:.16rem;
		display: inline-block;
		text-align: left;
		width:1rem;
		background: url(../../../static/images/more.png) right no-repeat;
		background-size: .14rem;
	}
	.charactic-c{
		padding-top:.3rem;
	}
	.charactic-c div{
		height:.8rem;
		font-size: .12rem;
		line-height: .17rem;
		width:33%;
		border: none;
		margin:0px;
		padding:0px;
		float: left;
		text-align: center;
	}
	.charactic-c div img{
		display: block;
		width:.52rem;
		text-align: center;
	}
	.charactic-c div .for-bg{
		height:.52rem;
		
		background-size:.52rem;
		width: 100%;
		display: block;
		padding-bottom: .12rem;
	}
	.strict-bg{
		background:url(../../../static/images/strict.png) no-repeat center;
	}
	.listen-bg{
		background:url(../../../static/images/listen.png) no-repeat center;
	}
	.insure-bg{
		background:url(../../../static/images/insure.png) no-repeat center;
	}
</style>