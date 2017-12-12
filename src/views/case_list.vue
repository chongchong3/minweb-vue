<template>
  <div class="case">
      <ul>
        <li class="case-li">
          <img src="http://iph.href.lu/350x154" alt="" class="case-img">
          <div class="case-designer">
            <img src="http://iph.href.lu/40x40" alt="" class="designer-head">
            <div class="case-text">
              <p class="case-title">荷兰无极馆</p>
              <p class="case-detail">200平米&nbsp;&nbsp;现代</p>
            </div>
          </div>
          <div class="clear"></div> 
        </li>
        <li class="case-li">
          <img src="http://iph.href.lu/350x154" alt="" class="case-img">
          <div class="case-designer">
            <img src="http://iph.href.lu/40x40" alt="" class="designer-head">
            <div class="case-text">
              <p class="case-title">荷兰无极馆</p>
              <p class="case-detail">200平米&nbsp;&nbsp;现代</p>
            </div>
          </div>
          <div class="clear"></div> 
        </li>
      </ul>

  </div>
</template>
<style scoped>
.case{

}
ul, li{
  margin:0;
  padding:0;
  list-style-type: none;
}
.case-li{
  margin-bottom:.1rem;
}
.case-img{
  width: 100%;
  height:1.54rem;
  display: block;
}
.case .case-designer{
  margin:.1rem 0 .12rem .1rem;
}
.case .designer-head{
  width: .4rem;
  height: .4rem;
  border-radius: 50%;
  display: block;
  float: left;
}
.case .case-text{
  margin-left:4px;
  float: left;
}
.case-text .case-title{
  margin:0;
  margin-top:4px;
  font-size: .16rem;
}
.case-text .case-detail{
  margin:0;
  margin-top:4px;
  font-size: .12rem;
  color:#ccc;
}
.clear{ clear:both}
</style>
<script>
export default {
  data(){
      return{

      }
  },
  methods:{}
}
</script>

