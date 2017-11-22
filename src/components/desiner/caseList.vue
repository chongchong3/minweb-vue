<template>
    <div class="swiper-picList">
      <div class="wrap">
            <white-nav></white-nav>
        <swiper :options="swiperOptionCase">

            <swiper-slide v-if="caseList.list.length>0" v-for="(item,index) in caseList.list" :key="index">
                <div class="imgWrap caseImgWrap">
                    <img :src="item.cover_image+'?imageView2/5/w/640'">
                </div>
                <div class="explain">
                    <p class="tit">{{item.title}}</p>
                    <p class="houseName">{{item.house_type_name}}</p>
                    <!-- <div class="degree">
                        <label>设计师级别</label>
                        <span class="level">{{level}}</span>
                    </div> -->

                </div>
            </swiper-slide>

        </swiper>
      </div>

    </div>
</template>
<style>
.swiper-picList {
  
    margin-top:.7rem;
    height: 95%;
}
.swiper-picList  .wrap {
      margin-left:.05rem;
      height: 100%;
}
.swiper-picList .imgWrap {
    height: 100%;
    padding:0 .1rem;
    background: #f4f4f4;
}

.swiper-picList .imgWrap img {
    width: 100%;
    height: 90%;
    ;
}

.swiper-picList .explain {
    position: absolute;
    width: 90%;
    bottom: 0;
    left: 5%;
    background: #fff;
    border-radius: .06rem;
    color: #000;
    text-align: center;
    padding-bottom: .3rem;
}

.swiper-picList .explain .degree {

}

.swiper-picList .explain .degree label {
    opacity: .7;
    font-size: 14px;
}

.swiper-picList .explain .tit {
    margin-top: .15rem;
    font-size: .18rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.swiper-picList .explain .houseName {
    margin-top: .23rem;
    font-size: 16px;
    opacity: .9;
    ;
}

.swiper-picList .explain .score {
    width: 1rem;
    display: inline-block;
    margin-left: .07rem;
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
   
    width:86% !important; 
 

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
    components: {  whiteNav },
    props: ['caseList', 'level'],
    name: 'caseName',
    data() {

        return {
            swiperOptionCase: {

            }
        }
    },
    created() {
        vm = this;
        this.swiperOptionCase = {
            initialSlide: vm.$route.query.caseId,
            slidesPerView: 'auto',
    
            onTouchEnd: swiper => {
                // debugger
                console.log("滑动s============="+swiper.activeIndex);

                this.$emit('goDetails', swiper);
            },

        }
    },

    methods: {

    }
}
</script>


