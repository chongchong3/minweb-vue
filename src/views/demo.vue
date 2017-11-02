<template>
  <div class="topNav">
      <div class="cont">
          <span class="btnNav btn"><img src="static/images/menu.png" ></span>
          <span class="btnChat btn"><img src="static/images/call.png" ></span>
      </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style >
.topNav {
    height: .52rem;
    background: #f5f5f5;
    overflow: hidden;
    line-height: .52rem;
}
.topNav .cont{
    margin: 0 .16rem;
    background: url(http://ovfllimsi.bkt.clouddn.com/minWebIn.png) no-repeat center;
    height: 100%;
    background-size: .17rem;

}
.topNav .btnNav {
    float:left;
}
.topNav .btnChat  {
 float:right;
}
.topNav .btn {
    display: inline-block;
    width:.17rem;
}  
.topNav .btn  img {
    width:100%;
}
</style>

