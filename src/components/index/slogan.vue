<template>
	<div class="slogan-c">
		<div class="slogan-logo">
		</div>
		<div class="slogan-title">
			全球设计严选<br>
			(SLOGAN)
		</div>
		<a class="more">
			了解更多
		</a>
	</div>
</template>
<script>
	export default{
		
	}
</script>
<style>
	.slogan-c:after{
		content:" ";
		display:block;
		height:0.2rem;
		background: #f4f4f4;
	}
	.slogan-logo{
		height: 1.92rem;
		background-image: url(../../../static/images/logo.png);
		background-repeat:no-repeat;
		background-position: center;
		margin-top: 0.44rem;
		margin-bottom: 0.36rem;
	}
	.slogan-title{
		color:#000;
		font-size:0.48rem;
		line-height: 0.64rem;
		text-align: center;
		margin-bottom: 0.2rem;
	}
	.slogan-c .more{
		display: block;
		text-align: center;
	}
</style>