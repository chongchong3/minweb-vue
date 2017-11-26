<template>
    <div class="swiper-picList">
      <div class="wrap">
            <white-nav></white-nav>
        <swiper :options="swiperOptionCase">

            <swiper-slide v-if="caseList.list.length>0" v-for="(item,index) in caseList.list" :key="index">
                <div class="imgWrap caseImgWrap">
                    <img :src="item.cover_image+'?imageView2/5/w/640/h/1136'">
                     <div class="explain">
                    <p class="tit">{{item.title}}</p>
                    <p class="houseName">{{item.house_type_name}}</p>
                   
                </div>
                </div>
               
            </swiper-slide>

        </swiper>
      </div>

    </div>
</template>
<style>
html,
body {
  position: relative;
  height: 100%;
}
body {
  background: #eee;
  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #000;
  margin: 0;
  padding: 0;
}
.swiper-picList {
  margin-left: 0.1rem;
  margin-top: 0.7rem;
  height: 100%;
}
.swiper-picList .wrap {
  margin-bottom: 0.2rem;
  height: 100%;
}
.swiper-picList .imgWrap {
  height: 100%;
  margin-right: 0.2rem;
  position: relative;
}

.swiper-picList .imgWrap img {
  width: 100%;
  border-radius: 0.1rem;
}

.swiper-picList .explain {
  position: absolute;
  width: 92%;
  left: 4%;
  bottom: -.3rem;
  background: #fff;
  border-radius: 0.06rem;
  color: #000;
  text-align: center;
  padding:.2rem 0;
}

.swiper-picList .explain .degree {
}

.swiper-picList .explain .degree label {
  opacity: 0.7;
  font-size: 14px;
}

.swiper-picList .explain .tit {
  margin-top: 0.15rem;
  font-size: 0.18rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.swiper-picList .explain .houseName {
  margin-top: 0.2rem;
  font-size: 14px;
  opacity: 0.45;
  font-weight: bold;
  margin-bottom: 0.2rem;
}

.swiper-picList .explain .score {
  width: 1rem;
  display: inline-block;
  margin-left: 0.07rem;
}

.swiper-picList .explain .score img {
  width: 100%;
}

.swiper-picList .swiper-container .swiper-slide img {
  width: 100%;
}

.swiper-picList.swiper-container {
  width: 100%;
}

.swiper-picList .swiper-inner {
  width: 100%;
}

.swiper-picList .swiper-slide {
  position: relative;
  width: 100%;
}
.level {
  color: #5fa333;
}
</style>
<script>
import whiteNav from "../detailNav/whiteNav";
var vm = {},
  _initia = 0;
export default {
  components: { whiteNav },
  props: ["caseList", "level"],
  name: "caseName",
  data() {
    return {
      swiperOptionCase: {}
    };
  },
  created() {
    vm = this;
    this.swiperOptionCase = {
      initialSlide: vm.$route.query.caseId,
      slidesPerView: "auto",
      spaceBetween: -10,
      onSlideChangeStart: swiper => {
        this.$emit("goDetails", swiper, false);
      }
    };
  },

  methods: {}
};
</script>


