<template>
    <div id="zoom-wrap" class="zoom-wrap">

        <div class="zoomBg  hasTips">
            
            <div class="wrap">
                <img :src="zoomMes.headImg">
            </div>
            <div class="memo">
    
                <div class="cont">
                    <p class="name">{{zoomMes.name}}</p>
                    <p class="price">报价:{{zoomMes.price}}-{{zoomMes.designer_high_price}}/平米</p>
                    <p class="brief">{{zoomMes.brief}}</p>
                </div>
            </div>
        </div>

    </div>
</template>
<style scoped>
.hasTips {
    height: 100%;;
}
.hasTips .score img {
    width: 100%;
}

.zoomBg .wrap img {
    width: 100%;
}

.zoom-wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
}
.zoom-wrap .hasTips .memo .name {
    padding-bottom:.2rem;
}
</style>
<script>

import 'video.js/dist/video-js.css'
var vm = null;
export default {
    props: ['zoomMes'],
    data() {

        return {




        }
    },
    created(){
        
    }


}
</script>

