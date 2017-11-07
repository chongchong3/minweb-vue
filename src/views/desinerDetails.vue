<template>
    <div class="page-swiper ">
        <swiper :options="swiperOptionPae">
            <swiper-slide>
                <zoom :zoomMes="zoomData"></zoom>
            </swiper-slide>
            <swiper-slide>
                <self :selfMes="selfData" ref="childMethod"></self>
            </swiper-slide>
            <swiper-slide v-if="zoomData.designer_level">
                <caseList  :caseList="caseData" v-on:goDetails="goDetails" :level="zoomData.designer_level"></caseList>
            </swiper-slide>
            <swiper-slide class="caseDetilas" id="caseDetilas">
                <div v-html="caseDetails"></div>
            </swiper-slide>
            <div class="swiper-scrollbar"></div>
        </swiper>
    </div>
</template>
<style  >
html {
  font-size: 100px;
  position: relative;
  height: 100%;
}

body {
  font-size: 14px;
  padding: 0;
  margin: 0;
}

.hide {
  display: none;
}

.video-js,
video,
.vjs-tech {
  width: 100%;
}
.container {
    padding-top:0;
    height: 100%;
}
html,
body {
  position: relative;
  height: 100%;
  overflow-x: hidden;
  -webkit-overflow-scrolling: touch;
}
.page-swiper {
  width:100%;
    height:100%;
}
.page-swiper .swiper-container {
    width:100%;
  height: 100%;

}
img,video{
  max-width:100%;
}
.hasTips {
  position: relative;
}

.zoom-wrap .hasTips .memo {
  height: 2.4rem;
}

.caseDetilas {
  width: 100%;
  overflow: scroll;
}
</style>

<script>

import zoom from "../components/desiner/zoom";
import self from "../components/desiner/self";

import caseList from "../components/desiner/caseList";
var vm = {},
  _initia = 0;
export default {
  components: { zoom, self, caseList },
  data() {
    return {
      caseId: 0,
      _initia: 0,
      swiper: {},
      zoomData: {},
      selfData: {},
      caseData: [],
      caseDetails: "",
      swiperOptionPae: {
        scrollbarHide: false,
        direction: "vertical",
        initialSlide: _initia,
        onSlideChangeStart(swiper) {
          _initia = swiper.activeIndex;
          if (_initia == 2 && vm.zoomData.name) {
            document.title = vm.zoomData.name + "的案例";
          } else {
            document.title = "设计师详情";
          }
          if (swiper.activeIndex != 1) {
            vm.$refs.childMethod.videoHide();
          }
          if (swiper.activeIndex == 3) {
            window.location.href ="./#/descript/" +vm.$route.params.desiner_id + "?caseId=" + vm.caseId ;
          }
        },
        onTouchEnd(swiper) {}
      }
    };
  },

  beforeCreate() {
    vm = this;
    if (this.$route.query.startIndex - 0) {
      _initia = 2;
    }
  },
  beforeMount() {
    this.getData();
  },

  methods: {
    goDetails(swiper) {
      this.swiper = swiper;
      this.caseId = swiper.activeIndex;
      this.caseDetails = this.caseData.list[swiper.activeIndex].case_detail;
    },
    getData() {

      
      var _designer_uid = this.$route.params.desiner_id;
      this.$store.dispatch("GetDesinerDetails",{designer_uid:_designer_uid})
        .then((response) => {
            debugger
            console.log(response);
   
          localStorage.setItem("GetDesinerDetails",JSON.stringify(response.data));

          this.setData(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    setData(data) {
      this.caseDetails = data.designer_case_list[0].case_detail;
      this.zoomData = {
        name: data.designer_name,
        score: data.designer_ability.customer_satisfaction,
        headImg: data.full_body_shot_url,
        price: data.designer_price,
        brief: data.plantform_descript,
        designer_level: data.designer_level
      };
      this.selfData = {
        brief: data.descript,
        bodyImg: data.personality_photo_url,
        brief: data.descript,
        video: data.self_introduction_video_url
      };
      this.caseData = {
        list: data.designer_case_list,
        score: data.designer_ability.customer_satisfaction
      };
      if (_initia == 2) {
        document.title = res.data.designer_name + "的案例";
        return;
      }
      document.title = "设计师详情";
    }
  }
};
</script>

