<template>
	<div class="slogan-c">
		<div class="about-shejiin-title">
			<router-link class="about-title" tag="div" to="/aboutus">
				关于设计IN
			</router-link>
		</div>
		<div class="special">
			<div class="section">
				<div class="aside">
					<img src="https://img.wesetup.cn/yanxuanNew.png" class="icon">
				</div>
				<div class="cont">
						<div class="tit">
							<span class="impt">严</span>
							<span class="memo">选设计专家</span>
						</div>
						<div class="brief">业内最严苛的入驻标准，打造设计服务标杆</div>
				</div>
			</div>
			<div class="section">
				<div class="aside">
					<img src="https://img.wesetup.cn/jianguanNew.png" class="icon">
				</div>
				<div class="cont">
						<div class="tit">
							<span class="impt">免</span>
							<span class="memo">费设计监理</span>
						</div>
						<div class="brief">第三方平台专业监理，全程服务跟踪到底</div>
				</div>
			</div>
			<div class="section">
				<div class="aside">
					<img src="https://img.wesetup.cn/danbaoNew.png" class="icon">
				</div>
				<div class="cont">
						<div class="tit">
							<span class="impt">安</span>
							<span class="memo">全资金托管</span>
						</div>
						<div class="brief">在线资金托管，分阶段验收，满意后付款</div>
				</div>
			</div>

		</div>
	
	</div>
</template>
<script>
export default {};
</script>
<style scoped="scoped">
.slogan-c {

  background: url(https://img.wesetup.cn/minWeb.png?imageView2/5) top center
    no-repeat;
  background-size: 100%;
	padding-bottom:.165rem;
}
.about-shejiin-title {
  height: 0.49rem;
  border-bottom: 1px solid #c8c8c8;
  text-align: center;
 
}
.about-title {
  line-height: .49rem;
  font-size: 0.16rem;
  display: inline-block;
  text-align: left;
  width: 1rem;
  background: url(../../../static/images/more.png) right no-repeat;
  background-size: 0.14rem;
}
.special .section {
  padding:.33rem 0 .165rem .38rem;
  overflow: hidden;
}
.special .section .aside {
  float: left;

}
.special .section  .tit {
	    overflow: hidden;
}
.special .section .cont {
  float: left;

}
.special .impt {
	font-size:.24rem;
	float:left;
	margin-right:.06rem;

}
.special  .brief {
	color:#000;
	font-size:.12rem;
	opacity: .44;
	margin-top:.04rem;
	display: inline-block;

}
.special .memo{
	font-size: .14rem;
	float:left;
	margin-top:.1rem;
}
.section .icon {
  width: 0.36rem;
  display: block;
  margin-right: 0.25rem;
}
</style>