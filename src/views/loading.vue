<template>
  <section class="finan">
    <!-- 上拉加载更多 -->
    <loa-more
    :bottom-method="loadBottom"
    :bottom-all-loaded="allLoaded"
    :bottomPullText='bottomText'
    :auto-fill="false"
    @bottom-status-change="handleBottomChange"
    ref="loadmore">
        <div>
         <ul class="caseList">
          <li class="singleCase" v-for="(single, index) in dataJson" @click="choice($event,index)">
            <div class="leftPic">
              <img src="http://placehold.it/160x120" class="headPic">
            </div>
            <div class="detail">
              <p class="title">{{single.title}}</p>
              <p class="houseType">{{single.house_type}}</p>
              <div class="desiner">
                <img class="headImg" :src="single.head_image_url" alt="">
                <div class="nameLev">
                  <p class="desinerName">{{single.designer_name}}</p>
                  <p class="desinerRank">{{single.designer_level}}</p>
                </div>   
              </div>
            </div>
          </li>
        </ul>
        </div>
        <div v-show="loading" slot="bottom" class="loading"> 这个div是为让上拉加载的时候显示一张加载的gif图
          
        </div>
    </loa-more>
  </section>
</template>
<script>
import LoaMore from '@/components/case/list'
export default {
  components:{
		LoaMore
 	},
    name: 'FinancialGroup',
    props:{

    },
    data () {
        return {
            //  上拉加载数据
            scrollHeight: 0,
            scrollTop: 0,
            containerHeight: 0,
            loading: false,
            allLoaded: false,
            bottomText: '上拉加载更多...',
            bottomStatus: '',
            pageNo: 1,
            totalCount: '',
            dataJson:null

        }
    },
    methods: {
    /* 下拉加载 */
    _scroll: function(ev) {
        ev = ev || event;
        this.scrollHeight = this.$refs.innerScroll.scrollHeight;
        this.scrollTop = this.$refs.innerScroll.scrollTop;
        this.containerHeight = this.$refs.innerScroll.offsetHeight;
    },
    loadBottom: function() {
        this.loading = true;
        this.pageNo += 1;   // 每次更迭加载的页数
        if (this.pageNo == this.totalGetCount) {
            // 当allLoaded = true时上拉加载停止
            this.loading = false;
            this.allLoaded = true;
        }
        this.$store
        .dispatch("GetCaseMes", { page_size: 4, page_no: 1 })
        .then(json => {
           setTimeout(() => {
          // 要使用的后台返回的数据写在setTimeout里面
            _self.dataJson=json.data.data;
            console.log(json.data.data)
              this.$nextTick(() => {
                  this.loading = false;
                  
              })
          }, 1000)
          console.log(json.data.data)
        })
        .catch(err => {});
    },
    handleBottomChange(status) {
        this.bottomStatus = status;
    },
}
}

</script>
<style scoped>
ul, li, p{
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.caseList{
  margin: 0 auto;
  width: 96%;
} 
.singleCase{
  overflow:hidden;
  border-bottom: 1px solid #ccc;
}
.leftPic{
  margin:.1rem 0;
  float: left;
}
.detail{
  position: relative;
  margin-top:.1rem;
  margin-left:.1rem;
  float: left;
}
.detail .title{
  /* font-size: 16px; */
  margin-bottom: .1rem;
  overflow: hidden;
  text-overflow:ellipsis;
  white-space: nowrap;
}
.houseType{
 
}
.desiner{
  position: relative;
  top: .4rem;
}
.headImg{
  float: left;
  border-radius: 50%;
  width: .4rem;
  height: .4rem;
}
.nameLev{
  margin-left: .1rem;
  float: left;
}
.desinerName{
  line-height: .2rem;
}
.desinerRank{
  color: #93D36A;
  line-height: .2rem;
}
</style>




