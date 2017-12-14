<template>
  <div class="data-point">
      <div class="index-bottom">
			<div class="no-more">
				没有更多了
			</div>
			<hr/>
		</div>
  </div>
</template>
<style scoped>
.index-bottom{
    height:.8rem;
    background:#f2f2f2;
    text-align: center;
    position: relative;
    opacity: .6;
}
.no-more{
    color: #aaa;
    font-size:.14rem;
    padding:0px .18rem;
    display: inline-block;
    line-height: .8rem;
    background: #f2f2f2;
    position: relative;
    z-index: 10;
}
.index-bottom hr{
    position: absolute;
    top:.34rem;
    height:1px;
    width:100%;
    left:0px;
    border:none;
    border-bottom:1px solid #ccc;
    z-index: 1;
}
</style>

