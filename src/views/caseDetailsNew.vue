<template>
  <div class="caseDetails">
      <div class="head">
          <span class="icon back"></span>
          <img src="static/images/caseDetails/headBg.png" class="caseBg">
          <div class="descript">
              <div class="shadow"></div>
              <div class="cont">
                    <p class="tit">大理知名名宿</p>
                    <p class="memo">新中式/300平米</p>
              </div>
          </div>
      </div>
      <div class="desiner">
          <div class="wp">
              <img src="https://assets.wesetup.cn/2017/11/13/1510563184160-lkc2jpzlsvbotoawbgnv78pvi.jpg?imageView2/2/w/100" class="headImg">
              <span class="name">唐娟娟</span>
          </div>
          <p class="brief">设计理念:日本动画导演、实拍、企业家日本动画导演、实拍、企业家日本动画导演、实拍、企业家日本动画导演、实拍、企业家日本动画导演、实拍、企业家日本动画导演、实拍、企业家</p>
      </div>
      <div class="caseList">
          	<swiper :options="designerOption" class="wp">
			    <swiper-slide class="designer-item" >
                    <li>
                        <img src="static/images/caseDetails/smCase1.png" >
                    </li>
			    </swiper-slide>
                 <swiper-slide class="designer-item" >
                    <li>
                        <img src="static/images/caseDetails/smCase2.png" >
                    </li> 
			    </swiper-slide>
                 <swiper-slide class="designer-item" >
                    <li>
                        <img src="static/images/caseDetails/smCase1.png" >
                    </li>
			    </swiper-slide>
                  <swiper-slide class="designer-item" >
                    <li>
                        <img src="static/images/caseDetails/smCase2.png" >
                    </li>
			    </swiper-slide>
			  </swiper>
        </div>  
      
      <ul class="caseBigList">
          <li>
              <img src="static/images/caseDetails/bgCase1.png" alt="">
              <p>1980年，这是案例、首部电视剧、从而开启了他的导演生涯，这是案例、首部电视剧、从而开启了他的导演生涯，这是案例、首部电视剧、从而开启了他的导演生涯，这是案例、首部电视剧、从而开启了他的导演生涯</p>
          </li>
            <li>
              <img src="static/images/caseDetails/bgCase2.png" alt="">
              <p>1980年，这是案例、首部电视剧、从而开启了他的导演生涯，这是案例、首部电视剧、从而开启了他的导演生涯，这是案例、首部电视剧、从而开启了他的导演生涯，这是案例、首部电视剧、从而开启了他的导演生涯</p>
          </li>
      </ul>
      <div class="footer">
          <div class="appoint">
             <span class="icon"><img src="static/images/clock.png" alt=""></span>
              <span class="tit">预约设计师</span>
          </div>
      </div>
  </div>
</template>
<style scoped>
.caseDetails {
    padding-bottom:.6rem;
}
.caseDetails .head {
  position: relative;
}
.caseDetails .caseBg {
  width: 100%;
}
.caseDetails .descript .cont {
  position: absolute;
  z-index: 3;
  width: 100%;
  color: #fff;
  padding-left: 0.2rem;
}
.descript .cont .tit {
  padding-top: 0.1rem;
  font-size: 0.14rem;
}
.descript .cont .memo {
  padding-top: 0.1rem;
  font-size: 0.12rem;
}
.caseDetails .descript .cont p {
  margin: 0;
}
.caseDetails .descript {
  position: absolute;
  bottom: 0.6rem;
  width: 100%;
  z-index: 2;
}
.caseDetails .descript .shadow {
  position: absolute;
  width: 100%;
  height: 0.5rem;
  opacity: 0.3;
  background-color: #000;
}
.caseDetails .desiner {
  margin-top: 0.15rem;
  margin-bottom: 0.1rem;
}
.desiner .wp {
  overflow: hidden;
}
.caseDetails .desiner .headImg {
  width: 0.4rem;
  border-radius: 50%;
  padding-left: 0.2rem;
  padding-right: 0.06rem;
  display: block;
  float: left;
}
.caseDetails .desiner .name {
  font-size: 0.16rem;
  margin-top: 0.045rem;
  display: inline-block;
}
.caseDetails .desiner .brief {
  line-height: 0.17rem;
  font-size: 0.12rem;
  padding: 0.1rem 0.2rem 0.15rem;
  margin: 0;
}
.caseDetails ul,
.caseDetails li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.caseDetails .caseList {

background-color: #eee;

}
.caseDetails .caseList  .wp{
    padding:.15rem 0;
    margin: 0 0.05rem;

}
.caseDetails .caseList .designer-item{

  width: 1rem;
  padding: 0 0.05rem;
}
.caseDetails .caseList li img {
  width: 100%;
  display: block;
}
.caseBigList {
    background-color: #eee;

}
.caseBigList li {
    padding:.15rem 0 .1rem 0;
    margin:0 0 .1rem 0;
    background-color: #fff;
}
.caseBigList li img {
    display: block;
    margin-bottom:.1rem;
    width:100%;
}
.caseBigList li p {
    margin:0;
    line-height: .16rem;
    font-size:.12rem;
    padding:0 .2rem;
}
.caseDetails .footer {
    position: fixed;
    bottom:0;
    width:100%;
    height: .6rem;
    background: #eee;;
}
.appoint {
    margin:.1rem .38rem;
    background: #88C462;
    border-radius: .2rem;
    text-align: center;
    color:#fff;
    font-size:.16rem;
        height: .4rem;;
}
.appoint .icon {
    width:.2rem;
    height: .21rem;
    display: inline-block;

}
.appoint .icon img {
    width: 100%;
    display: block;
    margin-top: .05rem;
}
.appoint .tit {
    display: inline-block;
}

</style>

<script>
import Vue from "vue";
import "@/common/css/swiper.min.css";
import VueAwesomeSwiper from "vue-awesome-swiper";

Vue.use(VueAwesomeSwiper);

export default {
  data() {
    return {
      designerOption: {
        pagination: "null",
        slidesPerView: "auto",
        paginationClickable: true,
        onTransitionStart(swiper) {},
        onClick(swiper) {}
        // more Swiper configs and callbacks...
        // ...
      }
    };
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  }
};
</script>

